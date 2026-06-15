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
    titleHtml: "ฝึกงาน <strong>Digital Marketing</strong> ทำอะไรบ้าง? ไปดูกันเลย! 🎬 📲",
    summary: "ฉิงๆรีวิว (@ching_cyy2) พาดูชีวิตฝึกงานสาย Digital Marketing <br>แบบ day-in-the-life ทุก task ที่ทำจริงในแต่ละวัน 🎬",
    summaryHtml: "ฉิงๆรีวิว (@ching_cyy2) พาดูชีวิตฝึกงานสาย MK<br>แบบ <strong>day-in-the-life</strong> ทุก task ที่ทำจริงในแต่ละวัน 📊",
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
    titleHtml: "ประสบการณ์ฝึกงานสาย <strong>Business Development</strong> 💼 🤝",
    summary: "EXZY รีวิวประสบการณ์ intern สาย BD — งานจริงที่ทำ <br>สิ่งที่ได้เรียนรู้ และมุมมองจากทีม 💼",
    summaryHtml: "EXZY รีวิวประสบการณ์ intern สาย BD — <strong>งานจริง</strong>ที่ทำ<br>สิ่งที่ได้เรียนรู้ และมุมมองจากทีม 📝",
    preview: "มุมมองการฝึกงาน 2 เดือน พร้อมสิ่งที่ได้เรียนรู้จากทีมจริง",
    url: "https://www.facebook.com/share/p/17PWAui7fs/",
    canonicalUrl: "https://www.facebook.com/ExzyTech/posts/2609136702451677/",
    cover: "sc-medium-bd.jpg",
    coverPosition: "center 20%",
  },
  {
    category: "blog",
    kind: "link",
    platform: "Medium",
    track: "BD",
    title: "ประสบการณ์ฝึกงานบริษัท EXZY กับแนวความคิดที่เติบโตแบบก้าวกระโดด",
    titleHtml: "ประสบการณ์ฝึกงาน EXZY กับ<strong>แนวคิดที่เติบโตแบบก้าวกระโดด</strong> 🌱 💡",
    summary: "@dangjaig เล่าบทเรียนและแนวคิดที่เปลี่ยนไป<br>จากการทำงานจริงในสาย BD ตลอดช่วงฝึกงาน 🌱",
    summaryHtml: "@dangjaig เล่าบทเรียนและ<strong>แนวคิดที่เปลี่ยนไป</strong><br>จากการทำงานจริงในสาย BD ตลอดช่วงฝึกงาน 📖",
    preview: "รีวิวมุมมองการเติบโตและการทำงานจริงในสาย Business Development",
    url: "https://medium.com/@dangjaig/ประสบการณ์ฝึกงานบริษัท-exzy-กับแนวความคิดที่เติบโตแบบก้าวกระโดด-eceb87feff69",
    cover: "sc-fb-bd.webp",
    coverPosition: "center 34%",
  },
  {
    category: "blog",
    kind: "link",
    platform: "Medium",
    track: "Dev",
    title: "รีวิวฝึกงาน Full-Stack Developer",
    titleHtml: "รีวิวฝึกงาน <strong>Full-Stack Developer</strong> ⚡ 🔧",
    summary: "@gubsitt2019 เล่าการสร้าง project จริง<br>ด้วย React + Node.js ตลอดช่วงฝึกงาน พร้อมรีวิวการทำงานในทีม Dev และสิ่งที่ได้เรียนรู้ ⚡",
    summaryHtml: "@gubsitt2019 เล่าการสร้าง project จริง<br>ด้วย <strong>React + Node.js</strong> พร้อมรีวิวการทำงานในทีม Dev 🛠️",
    preview: "เลือกอ่านรีวิวโปรเจกต์จริงด้วย React และ Node.js ได้ทั้งภาษาไทยและ English",
    url: "https://medium.com/@gubsitt2019/full-stack-developer-internship-review-building-real-projects-with-react-and-node-js-b6b1323a95cc",
    cover: "sc-medium-dev.jpg",
    coverPosition: "left top",
    languageLinks: [
      {
        label: "ภาษาไทย",
        action: "อ่านภาษาไทย",
        title: "รีวิวฝึกงาน Full-Stack Developer",
        url: "https://medium.com/@gubsitt2019/รีวิวฝึกงาน-full-stack-developer-สร้างโปรเจกต์จริงด้วย-react-และ-node-js-f5bc7e92857f",
        cover: "sc-medium-dev-th.png",
        coverPosition: "left top",
      },
      {
        label: "English",
        action: "Read in English",
        title: "Full-Stack Developer Internship Review",
        url: "https://medium.com/@gubsitt2019/full-stack-developer-internship-review-building-real-projects-with-react-and-node-js-b6b1323a95cc",
        cover: "sc-medium-dev.jpg",
        coverPosition: "left top",
      },
    ],
  },
  {
    category: "blog",
    kind: "link",
    platform: "Medium",
    track: "Dev",
    title: "2 เดือนในทีม Dev ที่ EXZY",
    titleHtml: "<strong>2 เดือน</strong>ในทีม Dev ที่ EXZY 🖥️",
    summary: "@itthikorn.h เล่าการฝึกงาน Full Stack Developer ในทีม Dev ตลอด 2 เดือน ทั้งงานที่ได้ทำ วิธีทำงานกับทีม และสิ่งที่ได้เรียนรู้ 🖥️",
    summaryHtml: "@itthikorn.h เล่าการฝึกงาน <strong>Full Stack Developer</strong><br>ทั้งงานที่ได้ทำ วิธีทำงานกับทีม และสิ่งที่ได้เรียนรู้ 💪",
    preview: "รีวิวการฝึกงาน Full Stack Developer จากมุมของ intern ทีม Dev",
    url: "https://medium.com/@itthikorn.h/2-เดือนในทีม-dev-ที่-exzy-ประสบการณ์ฝึกงาน-full-stack-developer-ที่มากกว่างานคือการเติบโต-a198091636c0",
    cover: "sc-medium-dev-itthikorn.png",
    coverPosition: "left top",
  },
]);

function getAllShowcaseItems() {
  const base = [...REAL_SHOWCASE_ITEMS];

  const adminData = loadAdminData();
  let adminItems = [];
  try { adminItems = JSON.parse(adminData.showcase_items || "[]"); } catch (e) {}
  const adminReal = adminItems
    .filter(i => i && /^https?:\/\//i.test(String(i.url || "").trim()))
    .map(i => ({
      category: i.category || "experiences",
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

// Platform icons for cover corner (white, on CI navy background)
function platformIconBody(platform) {
  if (platform === "Facebook") {
    return `<svg viewBox="0 0 24 24" width="15" height="15" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`;
  }
  if (platform === "Medium") {
    return `<svg viewBox="0 0 24 24" width="15" height="15" fill="white"><path d="M2.846 6.887c.03-.295-.083-.586-.303-.784L.353 3.49V3h6.92l5.33 11.707L17.05 3H23.7v.488l-1.865 1.786a.554.554 0 0 0-.21.528v13.24a.554.554 0 0 0 .21.528l1.827 1.786v.487h-9.19v-.487l1.893-1.838c.185-.185.185-.24.185-.528V7.377l-5.264 13.368h-.878L3.546 7.377v8.963a1.25 1.25 0 0 0 .343.976l2.464 2.988v.487H0v-.487l2.464-2.988a1.21 1.21 0 0 0 .382-.976V6.887z"/></svg>`;
  }
  if (platform === "TikTok") {
    return `<svg viewBox="0 0 24 24" width="15" height="15" fill="white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.19a8.24 8.24 0 0 0 4.82 1.54V7.27a4.85 4.85 0 0 1-1.05-.58z"/></svg>`;
  }
  return `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
}

function trackInlineStyle(track) {
  const styles = {
    BD:     "background:rgba(102,197,197,0.15);border-color:rgba(102,197,197,0.5);color:#1a7a7a",
    Design: "background:rgba(168,85,247,0.12);border-color:rgba(168,85,247,0.4);color:#6d28d9",
    Dev:    "background:rgba(59,130,246,0.12);border-color:rgba(59,130,246,0.4);color:#1e40af",
    MK:     "background:rgba(249,115,22,0.12);border-color:rgba(249,115,22,0.4);color:#c2410c",
  };
  return styles[track] || "";
}

function platformMarkLabel(platform) {
  if (platform === "Facebook") return "FB";
  if (platform === "Medium") return "MEDIUM";
  if (platform === "TikTok") return "TIKTOK";
  return String(platform || "LINK").toUpperCase();
}

function stableId(value) {
  let hash = 0;
  const text = String(value || "");
  for (let i = 0; i < text.length; i += 1) {
    hash = ((hash << 5) - hash + text.charCodeAt(i)) | 0;
  }
  return Math.abs(hash).toString(36);
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
  const markLabel = platformMarkLabel(item.platform);
  const platformSlug = escapeAttr(String(item.platform || "link").toLowerCase());

  const cornerIcon = `<span class="slc-platform-corner-icon" title="${escapeAttr(item.platform)}">${platformIconBody(item.platform)}</span>`;

  if (Array.isArray(item.languageLinks) && item.languageLinks.length > 0) {
    const sliderId = `slc-lang-${stableId(item.url || item.title)}`;
    const languageInputs = item.languageLinks.map((link, index) => `
      <input
        class="slc-lang-input slc-lang-input-${index + 1}"
        type="radio"
        name="${escapeAttr(sliderId)}"
        id="${escapeAttr(`${sliderId}-${index}`)}"
        ${index === 0 ? "checked" : ""} />
    `).join("");
    const languageControls = item.languageLinks.map((link, index) => `
      <label class="slc-language-tab slc-language-tab-${index + 1}" for="${escapeAttr(`${sliderId}-${index}`)}">
        ${escapeHtml(link.label || "")}
      </label>
    `).join("");
    const languagePreviews = item.languageLinks.map((link, index) => {
      const coverSrc = escapeAttr(`./static/${link.cover || item.cover}`);
      const coverPosition = link.coverPosition || item.coverPosition
        ? ` style="object-position:${escapeAttr(link.coverPosition || item.coverPosition)}"`
        : "";
      return `
        <figure class="slc-language-slide">
          <img class="slc-photo-img" src="${coverSrc}" alt="${escapeAttr(link.title || item.title)}" loading="${index === 0 ? "eager" : "lazy"}"${coverPosition} onerror="this.style.display='none'" />
        </figure>
      `;
    }).join("");

    return `
      <div class="show-real-media show-real-media-link show-real-media-${platformSlug} show-real-media-bilingual">
        <div class="slc-photo slc-photo-slider">
          ${languageInputs}
          <div class="slc-language-controls" aria-label="เลือกภาษา preview">
            ${languageControls}
          </div>
          <div class="slc-language-viewport">
            <div class="slc-language-track">
              ${languagePreviews}
            </div>
          </div>
          ${cornerIcon}
          <div class="slc-photo-overlay slc-overlay-${platformSlug}"></div>
        </div>
      </div>
    `;
  }

  if (item.cover) {
    const coverSrc = escapeAttr(`./static/${item.cover}`);
    const coverPosition = item.coverPosition
      ? ` style="object-position:${escapeAttr(item.coverPosition)}"`
      : "";
    return `
      <div class="show-real-media show-real-media-link show-real-media-${platformSlug}">
        <div class="slc-photo">
          <img class="slc-photo-img" src="${coverSrc}" alt="" loading="eager"${coverPosition} onerror="this.style.display='none'" />
          ${cornerIcon}
          <div class="slc-photo-overlay slc-overlay-${platformSlug}"></div>
        </div>
      </div>
    `;
  }

  return `
    <div class="show-real-media show-real-media-link show-real-media-${platformSlug}">
      <div class="slc-photo slc-photo-empty ${headerClass}">
        ${cornerIcon}
        <div class="slc-photo-overlay slc-overlay-${platformSlug}"></div>
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
  const trackClass = item.track ? `show-real-card-track-${escapeAttr(item.track.toLowerCase())}` : "";
  const bilingualClass = Array.isArray(item.languageLinks) && item.languageLinks.length > 0
    ? "show-real-card-bilingual"
    : "";
  const actions = Array.isArray(item.languageLinks) && item.languageLinks.length > 0
    ? item.languageLinks.map(link => `
        <a href="${escapeAttr(link.url || item.url || "#")}" target="_blank" rel="noopener" class="show-real-link show-real-link-language">
          <span>${escapeHtml(link.action || link.label || "เปิดลิงก์")}</span>
          ${I.external}
        </a>
      `).join("")
    : `<a href="${safeUrl}" target="_blank" rel="noopener" class="show-real-link">${actionText} ${I.external}</a>`;

  return `
    <article class="show-real-card ${platformClass} ${trackClass} ${bilingualClass}">
      ${renderShowcaseMedia(item)}
      <div class="show-real-body">
        <div class="show-real-meta">
          ${meta}
        </div>
        <h4>${item.titleHtml != null ? item.titleHtml : escapeHtml(item.title)}</h4>
        <p class="show-real-summary">${item.summaryHtml != null ? item.summaryHtml : escapeHtml(item.summary || "")}</p>
        <div class="show-real-actions">
          ${actions}
        </div>
      </div>
    </article>
  `;
}

export function showcasePage(_active) {
  const items = getAllShowcaseItems();
  const videoItems = items.filter(i => i.kind === "video");
  const linkItems  = items.filter(i => i.kind !== "video");
  const emptyNote  = items.length === 0
    ? `<div class="show-real-empty">${I.info} ตอนนี้ยังไม่มีลิงก์ผลงานจริงในหมวดนี้</div>`
    : "";

  const videoHtml = videoItems.map(renderShowcaseCard).join("");
  const linkHtml  = linkItems.map(renderShowcaseCard).join("");

  return `
    <section class="page-header">
      <div class="section-inner">
        <div class="crumb"><a href="#/home" data-link>Home</a> <span style="opacity:.5; margin:0 6px;">/</span> Intern Tasks <span style="opacity:.5; margin:0 6px;">/</span> Showcase</div>
        <h1>Intern Showcase</h1>
        <p class="page-lead">รวมผลงานของ intern รุ่นก่อน ทั้งคลิป บทความ และโพสต์ที่เผยแพร่บนช่องทาง public ✨</p>
      </div>
    </section>
    <section class="section">
      <div class="section-inner">
        ${emptyNote}
        <div class="showcase-mixed-grid">
          ${videoHtml}
          <div class="showcase-link-subgrid">${linkHtml}</div>
        </div>
      </div>
    </section>
  `;
}
