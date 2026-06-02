import { I } from './icons.js';
import { loadAdminData } from './auth.js';
import { escapeHtml, escapeAttr } from './helpers.js';

export const REAL_SHOWCASE_ITEMS = Object.freeze([
  {
    category: "experiences",
    kind: "video",
    platform: "TikTok",
    track: "MK",
    title: "ฝึกงานตำแหน่ง Digital Marketing ทำอะไรบ้าง ไปดูกันเลย!!",
    summary: "โดย ฉิงๆรีวิว (@ching_cyy2)",
    preview: "รีวิวฝึกงานสาย MK แบบเล่าให้เห็นงานจริงในแต่ละวัน",
    url: "https://vt.tiktok.com/ZSk4KdXFK/",
    canonicalUrl: "https://www.tiktok.com/@ching_cyy2/video/7344223770762136850",
    tiktokVideoId: "7344223770762136850",
  },
  {
    category: "experiences",
    kind: "link",
    platform: "Facebook",
    track: "BD",
    title: "ประสบการณ์ฝึกงานสาย Business Development",
    summary: "โพสต์รีวิวโดย EXZY Company Limited",
    preview: "มุมมองการฝึกงาน 2 เดือน พร้อมสิ่งที่ได้เรียนรู้จากทีมจริง",
    url: "https://www.facebook.com/share/p/17PWAui7fs/",
    canonicalUrl: "https://www.facebook.com/ExzyTech/posts/2609136702451677/",
  },
  {
    category: "experiences",
    kind: "link",
    platform: "Facebook",
    track: "Design",
    title: "ประสบการณ์ฝึกงานสาย Designer",
    summary: "โพสต์รีวิวโดย Boat N'hap",
    preview: "สรุปประสบการณ์ฝึกงานสายออกแบบที่ EXZY และสิ่งที่เติบโตขึ้น",
    url: "https://www.facebook.com/share/p/RGb9rUnZ1rN5RzsC/",
    canonicalUrl: "https://www.facebook.com/zirsabananaboat/posts/7588386527946459/",
  },
  {
    category: "blog",
    kind: "link",
    platform: "Medium",
    track: "BD",
    title: "ประสบการณ์ฝึกงานบริษัท EXZY กับแนวความคิดที่เติบโตแบบก้าวกระโดด",
    summary: "บทความโดย @dangjaig",
    preview: "รีวิวมุมมองการเติบโตและการทำงานจริงในสาย Business Development",
    url: "https://medium.com/@dangjaig/ประสบการณ์ฝึกงานบริษัท-exzy-กับแนวความคิดที่เติบโตแบบก้าวกระโดด-eceb87feff69",
  },
  {
    category: "blog",
    kind: "link",
    platform: "Medium",
    track: "Dev",
    title: "Full-Stack Developer Internship Review",
    summary: "บทความโดย @gubsitt2019",
    preview: "รีวิวการทำโปรเจกต์จริงด้วย React และ Node.js ในช่วงฝึกงาน",
    url: "https://medium.com/@gubsitt2019/full-stack-developer-internship-review-building-real-projects-with-react-and-node-js-b6b1323a95cc",
  },
]);

function getShowcaseItems(active) {
  const base = REAL_SHOWCASE_ITEMS.filter(i => i.category === active);

  const adminData = loadAdminData();
  let adminItems = [];
  try { adminItems = JSON.parse(adminData.showcase_items || "[]"); } catch (e) {}
  const adminReal = adminItems
    .filter(i => i && i.category === active && /^https?:\/\//i.test(String(i.url || "").trim()))
    .map(i => ({
      category: active,
      kind: "link",
      platform: i.badge || "External",
      track: i.meta || "",
      title: i.title || "Untitled",
      summary: "รายการที่เพิ่มโดย Admin",
      preview: i.meta || "เปิดลิงก์เพื่อดูรายละเอียดเพิ่มเติม",
      url: i.url,
    }));

  const seen = new Set();
  return base.concat(adminReal).filter(item => {
    const key = String(item.url || "").trim().toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function platformHeaderClass(platform) {
  const map = { Facebook: "slc-header-facebook", Medium: "slc-header-medium", TikTok: "slc-header-tiktok" };
  return map[platform] || "slc-header-default";
}

function platformIcon(platform) {
  if (platform === "Facebook") {
    return `<svg viewBox="0 0 24 24" width="13" height="13" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`;
  }
  if (platform === "Medium") {
    return `<svg viewBox="0 0 24 24" width="13" height="13" fill="white"><path d="M2.846 6.887c.03-.295-.083-.586-.303-.784L.353 3.49V3h6.92l5.33 11.707L17.05 3H23.7v.488l-1.865 1.786a.554.554 0 0 0-.21.528v13.24a.554.554 0 0 0 .21.528l1.827 1.786v.487h-9.19v-.487l1.893-1.838c.185-.185.185-.24.185-.528V7.377l-5.264 13.368h-.878L3.546 7.377v8.963a1.25 1.25 0 0 0 .343.976l2.464 2.988v.487H0v-.487l2.464-2.988a1.21 1.21 0 0 0 .382-.976V6.887z"/></svg>`;
  }
  return `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
}

function renderShowcaseMedia(item) {
  if (item.kind === "video" && item.platform === "TikTok" && item.tiktokVideoId) {
    const src = `https://www.tiktok.com/player/v1/${encodeURIComponent(item.tiktokVideoId)}?description=1&controls=1&rel=0`;
    return `
      <div class="show-real-media show-real-media-video">
        <iframe
          src="${escapeAttr(src)}"
          title="${escapeAttr(item.title)}"
          loading="lazy"
          allow="fullscreen"
          allowfullscreen>
        </iframe>
      </div>
    `;
  }

  const headerClass = platformHeaderClass(item.platform);
  const trackPill = item.track
    ? `<span class="slc-track-pill">${escapeHtml(item.track)}</span>`
    : "";

  return `
    <div class="show-real-media show-real-media-link show-real-media-${escapeAttr(String(item.platform || "link").toLowerCase())}">
      <div class="slc-header ${headerClass}">
        <div class="slc-platform-row">
          <div class="slc-platform-icon">${platformIcon(item.platform)}</div>
          <span class="slc-platform-label">${escapeHtml(item.platform)}</span>
          ${trackPill}
        </div>
        <p class="slc-headline">${escapeHtml(item.title)}</p>
      </div>
      <div class="slc-preview-strip">
        <p>${escapeHtml(item.preview || item.summary || "เปิดลิงก์เพื่ออ่าน/รับชมแบบเต็ม")}</p>
      </div>
    </div>
  `;
}

function renderShowcaseCard(item) {
  const safeUrl = escapeAttr(item.url || "#");
  const actionText = item.kind === "video"
    ? "ดูคลิปเต็ม"
    : item.platform === "Medium"
      ? "อ่านบทความ"
      : item.platform === "Facebook"
        ? "เปิดโพสต์"
        : "เปิดลิงก์ต้นฉบับ";
  const meta = item.track ? `<span class="show-real-track">${escapeHtml(item.track)}</span>` : "";
  const platformClass = `show-real-card-${escapeAttr(String(item.platform || "external").toLowerCase())}`;

  return `
    <article class="show-real-card ${platformClass} fade-up">
      ${renderShowcaseMedia(item)}
      <div class="show-real-body">
        <div class="show-real-meta">
          <span class="show-real-badge">${escapeHtml(item.platform)}</span>
          ${meta}
        </div>
        <h4>${escapeHtml(item.title)}</h4>
        <p class="show-real-summary">${escapeHtml(item.summary || "")}</p>
        <div class="show-real-actions">
          <a href="${safeUrl}" target="_blank" rel="noopener" class="show-real-link">${actionText} ${I.external}</a>
        </div>
      </div>
    </article>
  `;
}

export function showcasePage(active) {
  const tabs = [
    ["experiences", "Intern Experiences"],
    ["blog", "Intern's Blog"],
  ];
  const titleMap = {
    experiences: ["Intern Experiences", "รวมประสบการณ์ฝึกงาน — คลิป รีวิว และเรื่องเล่าจาก intern รุ่นพี่ที่เผยแพร่บนแพลตฟอร์มต่าง ๆ"],
    blog: ["Intern's Blog", "บทความและบทสัมภาษณ์เชิงลึก — เรื่องราวการเติบโตในแต่ละแผนกและ tips สำหรับ intern รุ่นถัดไป"],
  };
  const items = getShowcaseItems(active);
  const emptyNote = items.length === 0
    ? `<div class="show-real-empty">${I.info} ตอนนี้ยังไม่มีลิงก์ผลงานจริงในหมวดนี้</div>`
    : "";

  return `
    <section class="page-header">
      <div class="section-inner">
        <div class="crumb"><a href="#/home" data-link>Home</a> <span style="opacity:.5; margin:0 6px;">/</span> Showcase <span style="opacity:.5; margin:0 6px;">/</span> ${titleMap[active][0]}</div>
        <h1>${titleMap[active][0]}</h1>
        <p class="page-lead">${titleMap[active][1]}</p>
      </div>
    </section>
    <section class="section">
      <div class="section-inner">
        <div class="tabs">
          ${tabs.map(([k, label]) => `
            <a href="#/showcase/${k}" data-link class="tab ${k === active ? 'is-active' : ''}">${label}</a>
          `).join("")}
        </div>
        ${emptyNote}
        <div class="showcase-real-grid">
          ${items.map(renderShowcaseCard).join("")}
        </div>
      </div>
    </section>
  `;
}
