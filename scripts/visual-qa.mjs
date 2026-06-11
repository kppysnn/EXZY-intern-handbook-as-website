#!/usr/bin/env node
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { spawn } from "node:child_process";

const root = process.cwd();
const serverPort = Number(process.env.VQA_PORT || 5175);
const chromePort = Number(process.env.VQA_CHROME_PORT || 9224);
const baseUrl = `http://127.0.0.1:${serverPort}`;
const chromePath = process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const outDir = path.resolve(root, ".impeccable/visual-qa", stamp);

const routes = [
  "home",
  "first-day",
  "getting-started/orientation",
  "getting-started/wifi",
  "getting-started/meeting-rooms",
  "employee/org-chart",
  
  "policy/code-of-conduct",
  "policy/internship",
  "policy/dress-code",
  "policy/leave",
  "resources/timesheet",
  "resources/faqs",
  "showcase/experiences",
  "showcase/blog",
];

const viewports = [
  { name: "desktop", width: 1366, height: 900, mobile: false, deviceScaleFactor: 1 },
  { name: "mobile", width: 500, height: 900, mobile: true, deviceScaleFactor: 1 },
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    wait(ms).then(() => null),
  ]);
}

function requestJson(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request(url, options, (res) => {
      let body = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        try {
          resolve(JSON.parse(body));
        } catch (error) {
          reject(new Error(`Invalid JSON from ${url}: ${body.slice(0, 120)}`));
        }
      });
    });
    req.on("error", reject);
    req.end();
  });
}

async function waitForHttp(url, attempts = 60) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      await requestJson(url);
      return;
    } catch {
      await wait(250);
    }
  }
  throw new Error(`Timed out waiting for ${url}`);
}

function createCdpClient(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    let nextId = 1;
    const pending = new Map();
    const handlers = new Map();

    ws.addEventListener("open", () => {
      resolve({
        send(method, params = {}) {
          const id = nextId;
          nextId += 1;
          ws.send(JSON.stringify({ id, method, params }));
          return new Promise((res, rej) => pending.set(id, { res, rej, method }));
        },
        once(method) {
          return new Promise((res) => handlers.set(method, res));
        },
        close() {
          ws.close();
        },
      });
    });

    ws.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.id && pending.has(message.id)) {
        const pendingCall = pending.get(message.id);
        pending.delete(message.id);
        if (message.error) pendingCall.rej(new Error(`${pendingCall.method}: ${message.error.message}`));
        else pendingCall.res(message.result || {});
        return;
      }
      if (message.method && handlers.has(message.method)) {
        const handler = handlers.get(message.method);
        handlers.delete(message.method);
        handler(message.params || {});
      }
    });

    ws.addEventListener("error", reject);
  });
}

async function createPageClient(url) {
  const target = await requestJson(
    `http://127.0.0.1:${chromePort}/json/new?${encodeURIComponent(url)}`,
    { method: "PUT" },
  );
  return createCdpClient(target.webSocketDebuggerUrl);
}

async function captureRoute(client, route, viewport) {
  await client.send("Emulation.setDeviceMetricsOverride", {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: viewport.deviceScaleFactor,
    mobile: viewport.mobile,
  });
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await client.send("Page.navigate", { url: `${baseUrl}/?v=${Date.now()}#/${route}` });
  await withTimeout(client.once("Page.loadEventFired"), 5000);
  await wait(900);

  const metricsResult = await client.send("Runtime.evaluate", {
    returnByValue: true,
    expression: `(() => {
      const app = document.querySelector('#app');
      const burger = document.querySelector('#burger');
      const appRect = app?.getBoundingClientRect();
      const burgerRect = burger?.getBoundingClientRect();
      const burgerStyle = burger ? getComputedStyle(burger) : null;
      const links = [...document.querySelectorAll('a, button')];
      const badText = links
        .filter((el) => el.getBoundingClientRect().width < 1 || el.getBoundingClientRect().height < 1)
        .length;
      return {
        route: location.hash,
        title: document.title,
        textLength: (app?.innerText || '').trim().length,
        appHeight: Math.round(appRect?.height || 0),
        overflowX: Math.max(0, document.documentElement.scrollWidth - window.innerWidth),
        bodyHeight: Math.round(document.documentElement.scrollHeight),
        burgerVisible: !!burger && burgerStyle.display !== 'none' && burgerRect.width > 0 && burgerRect.height > 0,
        burgerDisplay: burgerStyle?.display || null,
        hiddenInteractiveCount: badText
      };
    })()`,
  });

  const png = await client.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: true,
    fromSurface: true,
  });
  const safeRoute = route.replaceAll("/", "__");
  const screenshot = path.join(outDir, `${viewport.name}__${safeRoute}.png`);
  fs.writeFileSync(screenshot, Buffer.from(png.data, "base64"));

  return { viewport: viewport.name, route, screenshot, ...metricsResult.result.value };
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  const server = spawn("python3", ["-m", "http.server", String(serverPort), "--bind", "127.0.0.1"], {
    cwd: root,
    stdio: "ignore",
  });

  const chrome = spawn(chromePath, [
    "--headless=new",
    `--remote-debugging-port=${chromePort}`,
    `--user-data-dir=/tmp/exzy-visual-qa-${stamp}`,
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
  ], {
    stdio: "ignore",
  });

  try {
    await waitForHttp(`http://127.0.0.1:${chromePort}/json/version`);
    await wait(300);

    const results = [];
    for (const viewport of viewports) {
      const client = await createPageClient("about:blank");
      for (const route of routes) {
        results.push(await captureRoute(client, route, viewport));
      }

      if (viewport.name === "mobile") {
        await captureRoute(client, "home", viewport);
        await client.send("Runtime.evaluate", { expression: "document.querySelector('#burger')?.click()" });
        await wait(400);
        const png = await client.send("Page.captureScreenshot", {
          format: "png",
          captureBeyondViewport: true,
          fromSurface: true,
        });
        fs.writeFileSync(path.join(outDir, "mobile__home__nav-open.png"), Buffer.from(png.data, "base64"));
      }

      client.close();
    }

    const failures = results.filter((result) => (
      result.textLength < 40 ||
      result.appHeight < 240 ||
      result.overflowX > 6 ||
      (result.viewport === "mobile" && !result.burgerVisible)
    ));

    const report = {
      generatedAt: new Date().toISOString(),
      baseUrl,
      screenshotsDir: outDir,
      results,
      failures,
    };
    fs.writeFileSync(path.join(outDir, "report.json"), `${JSON.stringify(report, null, 2)}\n`);

    const lines = [
      `# Visual QA ${report.generatedAt}`,
      "",
      `Base URL: ${baseUrl}`,
      `Routes: ${routes.length}`,
      `Viewports: ${viewports.map((viewport) => `${viewport.name} ${viewport.width}x${viewport.height}`).join(", ")}`,
      `Failures: ${failures.length}`,
      "",
      "| viewport | route | text | height | overflowX | burger |",
      "|---|---:|---:|---:|---:|---|",
      ...results.map((result) => (
        `| ${result.viewport} | ${result.route} | ${result.textLength} | ${result.appHeight} | ${result.overflowX} | ${result.burgerVisible ? "yes" : "no"} |`
      )),
    ];
    fs.writeFileSync(path.join(outDir, "report.md"), `${lines.join("\n")}\n`);

    console.log(`Visual QA complete: ${outDir}`);
    console.log(`Failures: ${failures.length}`);
    if (failures.length) process.exitCode = 1;
  } finally {
    chrome.kill();
    server.kill();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
