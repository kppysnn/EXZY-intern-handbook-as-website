(() => {
  // js/icons.js
  var I = {
    arrow: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
    play: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    rocket: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5L3 21l4.5-1.5"/><path d="M13 14l-3 3-3-3 7-7c2-2 5-3 7-3 0 2-1 5-3 7l-7 7z"/><circle cx="14.5" cy="9.5" r="1.5"/></svg>',
    wifi: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r="1.2" fill="currentColor"/><path d="M2 8.5a15 15 0 0 1 20 0"/></svg>',
    door: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="1"/><circle cx="15" cy="12" r="1" fill="currentColor"/></svg>',
    tools: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2-.5-.5-2 2.5-2.5z"/></svg>',
    printer: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>',
    people: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 11a3 3 0 1 0-2-5.4"/><path d="M22 20a5.5 5.5 0 0 0-5.5-5.5"/></svg>',
    chart: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>',
    book: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5v-18z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/></svg>',
    shield: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>',
    clock: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    shirt: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4l3-2h6l3 2 3 4-3 3v9H6v-9L3 8l3-4z"/><path d="M9 2c0 2 1.5 3 3 3s3-1 3-3"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>',
    doc: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h6"/></svg>',
    help: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.9.4-1 .9-1 1.7M12 17h.01"/></svg>',
    download: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
    external: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3h7v7M21 3l-9 9M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>',
    plus: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2l1.8 5.4L19 9l-5.2 1.6L12 16l-1.8-5.4L5 9l5.2-1.6L12 2z"/></svg>',
    copy: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    lock: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    edit: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
    mail: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>',
    phone: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    search: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>'
  };

  // js/auth.js
  var ADMIN_STORE_KEY = "exzy_admin_data_v1";
  var ADMIN_SESSION_KEY = "exzy_admin_session";
  var DIR_ACCESS_SESSION_KEY = "exzy_directory_access_session";
  var ADMIN_PASSWORD = "hr@exzy";
  var DEFAULT_ADMIN_DATA = {
    wifi_staff_ssid: "ExzyUniFi",
    wifi_staff_pass: "maetyzxe",
    wifi_guest_ssid: "Exzy_Guest",
    wifi_guest_pass: "imaguest",
    hr_email: "hr@exzyteam.com",
    hr_name: "Ninan A. (\u0E19\u0E34\u0E19\u0E31\u0E19)",
    hr_phone: "0926244471",
    orientation_slides_url: "",
    orientation_pdf_url: "",
    directory_sheet_url: "",
    directory_access_key: "hr@exzy",
    directory_sheet_iframe: "",
    showcase_items: "[]"
  };
  function loadAdminData() {
    try {
      const raw = localStorage.getItem(ADMIN_STORE_KEY);
      if (!raw) return { ...DEFAULT_ADMIN_DATA };
      return { ...DEFAULT_ADMIN_DATA, ...JSON.parse(raw) };
    } catch (e) {
      return { ...DEFAULT_ADMIN_DATA };
    }
  }
  function saveAdminData(data) {
    try {
      localStorage.setItem(ADMIN_STORE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error("save failed", e);
      return false;
    }
  }
  function isAdmin() {
    try {
      return sessionStorage.getItem(ADMIN_SESSION_KEY) === "1";
    } catch (e) {
      return false;
    }
  }
  function setAdmin(state) {
    try {
      if (state) sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
      else sessionStorage.removeItem(ADMIN_SESSION_KEY);
    } catch (e) {
    }
  }
  function getDirectoryAccessKey() {
    const data = loadAdminData();
    return String(data.directory_access_key || ADMIN_PASSWORD).trim();
  }
  function isDirectoryUnlocked() {
    try {
      return sessionStorage.getItem(DIR_ACCESS_SESSION_KEY) === "1";
    } catch (e) {
      return false;
    }
  }
  function setDirectoryUnlocked(state) {
    try {
      if (state) sessionStorage.setItem(DIR_ACCESS_SESSION_KEY, "1");
      else sessionStorage.removeItem(DIR_ACCESS_SESSION_KEY);
    } catch (e) {
    }
  }
  function showToast(msg) {
    let t = document.getElementById("__toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "__toast";
      t.className = "toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t.__hideTimer);
    t.__hideTimer = setTimeout(() => t.classList.remove("show"), 2500);
  }

  // js/helpers.js
  function acc(q, a) {
    return `
    <div class="acc-item">
      <button class="acc-trigger">${q}<span class="acc-icon">${I.plus}</span></button>
      <div class="acc-body"><div class="acc-body-inner">${a}</div></div>
    </div>
  `;
  }
  var _sectionMeta = {
    "Getting Started": { num: "01", label: "Getting Started", section: "getting-started" },
    "Work Policy": { num: "02", label: "Work Policy", section: "policy" },
    "Resources": { num: "03", label: "Resources", section: "resources" },
    "Company": { num: "04", label: "Company", section: "company" },
    "Employee": { num: "04", label: "Company", section: "company" },
    "Showcase": { num: "05", label: "Showcase", section: "showcase" },
    "Admin": { num: "06", label: "Admin", section: "admin" }
  };
  function pageWrap({ crumbs, title, lead, body, toc }) {
    const crumbHtml = crumbs.map(([t, href], i) => {
      const isLast = i === crumbs.length - 1;
      if (href) return `<a href="${href}" data-link>${t}</a><span class="breadcrumb-sep"> \u203A </span>`;
      if (isLast) return `<span class="breadcrumb-cur">${t}</span>`;
      return `<span>${t}</span><span class="breadcrumb-sep"> \u203A </span>`;
    }).join("");
    const sectionName = crumbs.length > 1 ? crumbs[1][0] : "";
    const meta = _sectionMeta[sectionName] || { num: "\u2014", label: sectionName };
    const tocHtml = toc ? `
    <aside class="content-sticky">
      <nav class="toc">
        <div class="toc-title">On this page</div>
        ${toc.map(([id, label]) => `<a href="#${id}" data-anchor>${label}</a>`).join("")}
      </nav>
    </aside>
  ` : "";
    return `
    <!-- PAGE HERO BAND -->
    <div class="page-hero-band" data-section="${meta.section || "getting-started"}">
      <div class="phb-inner">
        <div class="breadcrumb anim-up" style="margin-bottom:10px;">${crumbHtml}</div>
        <div class="phb-eyebrow anim-up" data-delay="40">
          ${meta.label}
        </div>
        <h1 class="phb-title anim-up" data-delay="80">${title}</h1>
        <p class="phb-lead anim-up" data-delay="130">${lead}</p>
      </div>
      <div class="phb-deco-num" aria-hidden="true">${meta.num}</div>
    </div>

    <!-- CONTENT -->
    <section class="section">
      <div class="section-inner">
        <div class="${toc ? "content-grid" : ""}">
          ${tocHtml}
          <article class="prose">
            ${body}
          </article>
        </div>
      </div>
    </section>
  `;
  }
  function escapeHtml(s) {
    return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function escapeAttr(s) {
    return escapeHtml(s);
  }

  // js/showcase.js
  var REAL_SHOWCASE_ITEMS = Object.freeze([
    {
      category: "experiences",
      kind: "video",
      platform: "TikTok",
      track: "MK",
      title: "\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07 Digital Marketing \u0E17\u0E33\u0E2D\u0E30\u0E44\u0E23\u0E1A\u0E49\u0E32\u0E07 \u0E44\u0E1B\u0E14\u0E39\u0E01\u0E31\u0E19\u0E40\u0E25\u0E22!!",
      summary: "\u0E42\u0E14\u0E22 \u0E09\u0E34\u0E07\u0E46\u0E23\u0E35\u0E27\u0E34\u0E27 (@ching_cyy2)",
      preview: "\u0E23\u0E35\u0E27\u0E34\u0E27\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E22 MK \u0E41\u0E1A\u0E1A\u0E40\u0E25\u0E48\u0E32\u0E43\u0E2B\u0E49\u0E40\u0E2B\u0E47\u0E19\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07\u0E43\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E27\u0E31\u0E19",
      url: "https://vt.tiktok.com/ZSk4KdXFK/",
      canonicalUrl: "https://www.tiktok.com/@ching_cyy2/video/7344223770762136850",
      tiktokVideoId: "7344223770762136850"
    },
    {
      category: "experiences",
      kind: "link",
      platform: "Facebook",
      track: "BD",
      title: "\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E22 Business Development",
      summary: "\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E23\u0E35\u0E27\u0E34\u0E27\u0E42\u0E14\u0E22 EXZY Company Limited",
      preview: "\u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 2 \u0E40\u0E14\u0E37\u0E2D\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E08\u0E32\u0E01\u0E17\u0E35\u0E21\u0E08\u0E23\u0E34\u0E07",
      url: "https://www.facebook.com/share/p/17PWAui7fs/",
      canonicalUrl: "https://www.facebook.com/ExzyTech/posts/2609136702451677/"
    },
    {
      category: "experiences",
      kind: "link",
      platform: "Facebook",
      track: "Design",
      title: "\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E22 Designer",
      summary: "\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E23\u0E35\u0E27\u0E34\u0E27\u0E42\u0E14\u0E22 Boat N'hap",
      preview: "\u0E2A\u0E23\u0E38\u0E1B\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E22\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48 EXZY \u0E41\u0E25\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E40\u0E15\u0E34\u0E1A\u0E42\u0E15\u0E02\u0E36\u0E49\u0E19",
      url: "https://www.facebook.com/share/p/RGb9rUnZ1rN5RzsC/",
      canonicalUrl: "https://www.facebook.com/zirsabananaboat/posts/7588386527946459/"
    },
    {
      category: "blog",
      kind: "link",
      platform: "Medium",
      track: "BD",
      title: "\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 EXZY \u0E01\u0E31\u0E1A\u0E41\u0E19\u0E27\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E17\u0E35\u0E48\u0E40\u0E15\u0E34\u0E1A\u0E42\u0E15\u0E41\u0E1A\u0E1A\u0E01\u0E49\u0E32\u0E27\u0E01\u0E23\u0E30\u0E42\u0E14\u0E14",
      summary: "\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E42\u0E14\u0E22 @dangjaig",
      preview: "\u0E23\u0E35\u0E27\u0E34\u0E27\u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E15\u0E34\u0E1A\u0E42\u0E15\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07\u0E43\u0E19\u0E2A\u0E32\u0E22 Business Development",
      url: "https://medium.com/@dangjaig/\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17-exzy-\u0E01\u0E31\u0E1A\u0E41\u0E19\u0E27\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E17\u0E35\u0E48\u0E40\u0E15\u0E34\u0E1A\u0E42\u0E15\u0E41\u0E1A\u0E1A\u0E01\u0E49\u0E32\u0E27\u0E01\u0E23\u0E30\u0E42\u0E14\u0E14-eceb87feff69"
    },
    {
      category: "blog",
      kind: "link",
      platform: "Medium",
      track: "Dev",
      title: "Full-Stack Developer Internship Review",
      summary: "\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E42\u0E14\u0E22 @gubsitt2019",
      preview: "\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E32\u0E23\u0E17\u0E33\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E08\u0E23\u0E34\u0E07\u0E14\u0E49\u0E27\u0E22 React \u0E41\u0E25\u0E30 Node.js \u0E43\u0E19\u0E0A\u0E48\u0E27\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19",
      url: "https://medium.com/@gubsitt2019/full-stack-developer-internship-review-building-real-projects-with-react-and-node-js-b6b1323a95cc"
    }
  ]);
  function getShowcaseItems(active) {
    const base = REAL_SHOWCASE_ITEMS.filter((i) => i.category === active);
    const adminData = loadAdminData();
    let adminItems = [];
    try {
      adminItems = JSON.parse(adminData.showcase_items || "[]");
    } catch (e) {
    }
    const adminReal = adminItems.filter((i) => i && i.category === active && /^https?:\/\//i.test(String(i.url || "").trim())).map((i) => ({
      category: active,
      kind: "link",
      platform: i.badge || "External",
      track: i.meta || "",
      title: i.title || "Untitled",
      summary: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E42\u0E14\u0E22 Admin",
      preview: i.meta || "\u0E40\u0E1B\u0E34\u0E14\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21",
      url: i.url
    }));
    const seen = /* @__PURE__ */ new Set();
    return base.concat(adminReal).filter((item) => {
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
    const trackPill = item.track ? `<span class="slc-track-pill">${escapeHtml(item.track)}</span>` : "";
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
        <p>${escapeHtml(item.preview || item.summary || "\u0E40\u0E1B\u0E34\u0E14\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E48\u0E32\u0E19/\u0E23\u0E31\u0E1A\u0E0A\u0E21\u0E41\u0E1A\u0E1A\u0E40\u0E15\u0E47\u0E21")}</p>
      </div>
    </div>
  `;
  }
  function renderShowcaseCard(item) {
    const safeUrl = escapeAttr(item.url || "#");
    const actionText = item.kind === "video" ? "\u0E14\u0E39\u0E04\u0E25\u0E34\u0E1B\u0E40\u0E15\u0E47\u0E21" : item.platform === "Medium" ? "\u0E2D\u0E48\u0E32\u0E19\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21" : item.platform === "Facebook" ? "\u0E40\u0E1B\u0E34\u0E14\u0E42\u0E1E\u0E2A\u0E15\u0E4C" : "\u0E40\u0E1B\u0E34\u0E14\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E15\u0E49\u0E19\u0E09\u0E1A\u0E31\u0E1A";
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
  function showcasePage(active) {
    const tabs = [
      ["experiences", "Intern Experiences"],
      ["blog", "Intern's Blog"]
    ];
    const titleMap = {
      experiences: ["Intern Experiences", "\u0E23\u0E27\u0E21\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u2014 \u0E04\u0E25\u0E34\u0E1B \u0E23\u0E35\u0E27\u0E34\u0E27 \u0E41\u0E25\u0E30\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E40\u0E25\u0E48\u0E32\u0E08\u0E32\u0E01 intern \u0E23\u0E38\u0E48\u0E19\u0E1E\u0E35\u0E48\u0E17\u0E35\u0E48\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E1A\u0E19\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E15\u0E48\u0E32\u0E07 \u0E46"],
      blog: ["Intern's Blog", "\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E41\u0E25\u0E30\u0E1A\u0E17\u0E2A\u0E31\u0E21\u0E20\u0E32\u0E29\u0E13\u0E4C\u0E40\u0E0A\u0E34\u0E07\u0E25\u0E36\u0E01 \u2014 \u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E23\u0E32\u0E27\u0E01\u0E32\u0E23\u0E40\u0E15\u0E34\u0E1A\u0E42\u0E15\u0E43\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E41\u0E1C\u0E19\u0E01\u0E41\u0E25\u0E30 tips \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A intern \u0E23\u0E38\u0E48\u0E19\u0E16\u0E31\u0E14\u0E44\u0E1B"]
    };
    const items = getShowcaseItems(active);
    const emptyNote = items.length === 0 ? `<div class="show-real-empty">${I.info} \u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07\u0E43\u0E19\u0E2B\u0E21\u0E27\u0E14\u0E19\u0E35\u0E49</div>` : "";
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
            <a href="#/showcase/${k}" data-link class="tab ${k === active ? "is-active" : ""}">${label}</a>
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

  // js/pages/home.js
  var renderHome = () => `

<!-- Welcome hero -->
<section class="welcome-hero" aria-label="\u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A intern \u0E43\u0E2B\u0E21\u0E48">
  <div class="welcome-hero-bg" aria-hidden="true"></div>

  <div class="welcome-hero-inner">
    <div class="welcome-copy">
      <p class="welcome-kicker">
        <span></span>
        EXZY Intern Welcome
      </p>
      <h1>\u0E01\u0E49\u0E32\u0E27\u0E41\u0E23\u0E01\u0E17\u0E35\u0E48 EXZY \u0E04\u0E27\u0E23\u0E23\u0E39\u0E49\u0E2A\u0E36\u0E01\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E21\u0E35\u0E04\u0E19\u0E23\u0E2D\u0E2D\u0E22\u0E39\u0E48</h1>
      <p class="welcome-lead">\u0E40\u0E1B\u0E34\u0E14\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E32\u0E16\u0E36\u0E07\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01 \u0E41\u0E25\u0E49\u0E27\u0E04\u0E48\u0E2D\u0E22 \u0E46 \u0E15\u0E32\u0E21\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 \u0E04\u0E19\u0E43\u0E19\u0E17\u0E35\u0E21 \u0E44\u0E1B\u0E08\u0E19\u0E16\u0E36\u0E07\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E01\u0E48\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E1A\u0E49\u0E32\u0E19</p>
      <div class="welcome-actions">
        <a href="#/first-day" class="welcome-primary" data-link>
          \u0E40\u0E23\u0E34\u0E48\u0E21\u0E08\u0E32\u0E01\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>

    <div class="welcome-scene" aria-hidden="true">
      <svg viewBox="0 0 760 560" role="img" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="homeDesk" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#F7FCFC"/>
            <stop offset="100%" stop-color="#E7F5F7"/>
          </linearGradient>
          <linearGradient id="homeNavy" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#004081"/>
            <stop offset="100%" stop-color="#002D5C"/>
          </linearGradient>
          <linearGradient id="homeTeal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#66C5C5"/>
            <stop offset="100%" stop-color="#2A9FA7"/>
          </linearGradient>
          <filter id="homeSoftShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#004080" flood-opacity="0.16"/>
          </filter>
        </defs>

        <path d="M76 162C133 55 300 18 430 51c132 33 230 139 248 264 18 127-43 255-157 298-116 44-287 8-384-76C40 454 19 270 76 162Z" fill="#EEF8FA"/>
        <path d="M104 387C216 349 301 330 401 351c84 18 165 60 268 43v98c-90 54-214 70-335 50-98-16-176-52-230-84v-71Z" fill="#D8F0F2"/>

        <g filter="url(#homeSoftShadow)">
          <path d="M118 342 628 291l58 146-520 65-48-160Z" fill="url(#homeDesk)"/>
          <path d="M118 342 628 291l13 32-514 61-9-42Z" fill="#FFFFFF" opacity=".82"/>
        </g>

        <g transform="rotate(-6 359 279)" filter="url(#homeSoftShadow)">
          <rect x="240" y="156" width="255" height="170" rx="18" fill="#DDE8EF"/>
          <rect x="256" y="171" width="223" height="132" rx="10" fill="url(#homeNavy)"/>
          <path d="M276 205h82M276 232h138M276 259h102" stroke="#66C5C5" stroke-width="10" stroke-linecap="round" opacity=".5"/>
          <circle cx="443" cy="257" r="30" fill="#66C5C5" opacity=".24"/>
          <path d="M293 329h154c18 0 33 13 37 31l4 17H255l5-18c5-18 15-30 33-30Z" fill="#C6D3DD"/>
          <rect x="313" y="346" width="115" height="19" rx="8" fill="#AEBECD"/>
        </g>

        <g transform="rotate(8 190 360)" filter="url(#homeSoftShadow)">
          <rect x="92" y="260" width="170" height="190" rx="14" fill="#FFFFFF"/>
          <rect x="92" y="260" width="20" height="190" rx="10" fill="#66C5C5"/>
          <path d="M131 304h91M131 333h104M131 362h76M131 402h98" stroke="#004080" stroke-width="5" stroke-linecap="round" opacity=".17"/>
          <circle cx="213" cy="405" r="18" fill="#66C5C5" opacity=".25"/>
        </g>

        <g transform="rotate(-4 578 214)" filter="url(#homeSoftShadow)">
          <rect x="518" y="118" width="142" height="158" rx="18" fill="#FFFFFF"/>
          <rect x="518" y="118" width="142" height="42" rx="18" fill="url(#homeTeal)"/>
          <rect x="518" y="146" width="142" height="18" fill="#66C5C5"/>
          <g fill="#004080" opacity=".18">
            <rect x="536" y="179" width="18" height="18" rx="5"/>
            <rect x="565" y="179" width="18" height="18" rx="5"/>
            <rect x="594" y="179" width="18" height="18" rx="5"/>
            <rect x="623" y="179" width="18" height="18" rx="5"/>
            <rect x="536" y="208" width="18" height="18" rx="5"/>
            <rect x="565" y="208" width="18" height="18" rx="5"/>
            <rect x="594" y="208" width="18" height="18" rx="5"/>
            <rect x="623" y="208" width="18" height="18" rx="5"/>
          </g>
          <rect x="565" y="208" width="18" height="18" rx="5" fill="#004080" opacity=".64"/>
        </g>

        <g transform="rotate(7 547 407)" filter="url(#homeSoftShadow)">
          <path d="M475 318h138l43 43v130H475V318Z" fill="#FFFFFF"/>
          <path d="M613 318v43h43" fill="#DDE8EF"/>
          <path d="M498 374h92M498 404h120M498 434h82" stroke="#004080" stroke-width="7" stroke-linecap="round" opacity=".16"/>
          <rect x="594" y="426" width="38" height="25" rx="6" fill="#66C5C5" opacity=".32"/>
        </g>

        <g filter="url(#homeSoftShadow)">
          <rect x="160" y="112" width="138" height="82" rx="18" fill="#FFFFFF"/>
          <path d="M188 155c18-30 67-30 84 0" fill="none" stroke="#66C5C5" stroke-width="8" stroke-linecap="round"/>
          <circle cx="200" cy="144" r="15" fill="#004080" opacity=".82"/>
          <circle cx="229" cy="132" r="18" fill="#66C5C5"/>
          <circle cx="258" cy="145" r="15" fill="#707070"/>
        </g>

        <path d="M120 238c94-65 202-83 310-58 76 17 136 57 196 96" fill="none" stroke="#66C5C5" stroke-width="3" stroke-linecap="round" stroke-dasharray="8 14" opacity=".65"/>
        <circle cx="122" cy="238" r="8" fill="#66C5C5"/>
        <circle cx="430" cy="180" r="8" fill="#004080"/>
        <circle cx="626" cy="276" r="8" fill="#707070"/>
      </svg>
    </div>
  </div>
</section>

<!-- Story path -->
<section class="welcome-path" aria-labelledby="welcome-path-title">
  <div class="welcome-section-head">
    <h2 id="welcome-path-title">\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E2D\u0E48\u0E32\u0E19\u0E17\u0E31\u0E49\u0E07\u0E40\u0E27\u0E47\u0E1A\u0E43\u0E19\u0E04\u0E23\u0E31\u0E49\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27</h2>
    <p>\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E32\u0E21\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E15\u0E23\u0E07\u0E2B\u0E19\u0E49\u0E32 \u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E21\u0E35\u0E41\u0E1C\u0E19\u0E17\u0E35\u0E48\u0E40\u0E25\u0E47\u0E01 \u0E46 \u0E1A\u0E19\u0E42\u0E15\u0E4A\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19</p>
  </div>

  <div class="welcome-path-board">
    <a href="#/first-day" class="welcome-path-piece piece-day" data-link>
      <span class="piece-label">\u0E40\u0E1E\u0E34\u0E48\u0E07\u0E21\u0E32\u0E16\u0E36\u0E07</span>
      <h3>\u0E40\u0E14\u0E34\u0E19\u0E15\u0E32\u0E21 Day 1 Guide</h3>
      <p>\u0E23\u0E39\u0E49\u0E27\u0E48\u0E32\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E0A\u0E49\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E08\u0E2D\u0E2D\u0E30\u0E44\u0E23 \u0E27\u0E31\u0E19\u0E19\u0E35\u0E49\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E2D\u0E30\u0E44\u0E23\u0E43\u0E2B\u0E49\u0E40\u0E2A\u0E23\u0E47\u0E08 \u0E41\u0E25\u0E30\u0E04\u0E27\u0E23\u0E16\u0E32\u0E21\u0E43\u0E04\u0E23</p>
    </a>
    <a href="#/getting-started/wifi" class="welcome-path-piece piece-office" data-link>
      <span class="piece-label">\u0E19\u0E31\u0E48\u0E07\u0E17\u0E35\u0E48\u0E42\u0E15\u0E4A\u0E30\u0E41\u0E25\u0E49\u0E27</span>
      <h3>\u0E15\u0E48\u0E2D Wi-Fi \u0E41\u0E25\u0E30\u0E08\u0E2D\u0E07\u0E2B\u0E49\u0E2D\u0E07</h3>
      <p>\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E17\u0E31\u0E19\u0E17\u0E35 \u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E44\u0E25\u0E48\u0E16\u0E32\u0E21\u0E2B\u0E25\u0E32\u0E22\u0E23\u0E2D\u0E1A</p>
    </a>
    <a href="#/policy/dress-code" class="welcome-path-piece piece-policy" data-link>
      <span class="piece-label">\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E15\u0E31\u0E27\u0E1E\u0E23\u0E38\u0E48\u0E07\u0E19\u0E35\u0E49</span>
      <h3>\u0E40\u0E0A\u0E47\u0E01\u0E01\u0E15\u0E34\u0E01\u0E32\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19</h3>
      <p>Core Values, dress code, \u0E01\u0E32\u0E23\u0E25\u0E32 \u0E41\u0E25\u0E30\u0E02\u0E2D\u0E1A\u0E40\u0E02\u0E15\u0E17\u0E35\u0E48\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E17\u0E33\u0E07\u0E32\u0E19\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19\u0E07\u0E48\u0E32\u0E22\u0E02\u0E36\u0E49\u0E19</p>
    </a>
    <a href="#/showcase/experiences" class="welcome-path-piece piece-story" data-link>
      <span class="piece-label">\u0E2D\u0E22\u0E32\u0E01\u0E40\u0E2B\u0E47\u0E19\u0E20\u0E32\u0E1E\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E08\u0E23\u0E34\u0E07</span>
      <h3>\u0E2D\u0E48\u0E32\u0E19\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E23\u0E38\u0E48\u0E19\u0E1E\u0E35\u0E48</h3>
      <p>\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C \u0E27\u0E34\u0E18\u0E35\u0E04\u0E34\u0E14 \u0E41\u0E25\u0E30\u0E1A\u0E17\u0E40\u0E23\u0E35\u0E22\u0E19\u0E08\u0E32\u0E01\u0E04\u0E19\u0E17\u0E35\u0E48\u0E40\u0E04\u0E22\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E15\u0E23\u0E07\u0E08\u0E38\u0E14\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19</p>
    </a>
  </div>
</section>

<!-- Quick objects -->
<section class="welcome-objects" aria-labelledby="welcome-objects-title">
  <div class="welcome-objects-inner">
    <div class="welcome-object-copy">
      <h2 id="welcome-objects-title">\u0E02\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E21\u0E31\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E2B\u0E22\u0E34\u0E1A\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E27\u0E31\u0E19</h2>
      <p>\u0E1A\u0E32\u0E07\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E15\u0E49\u0E2D\u0E07\u0E2D\u0E48\u0E32\u0E19\u0E22\u0E32\u0E27 \u0E41\u0E04\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E2B\u0E49\u0E40\u0E08\u0E2D\u0E40\u0E23\u0E47\u0E27\u0E15\u0E2D\u0E19\u0E01\u0E33\u0E25\u0E31\u0E07\u0E17\u0E33\u0E07\u0E32\u0E19</p>
    </div>
    <div class="welcome-object-list">
      <a href="#/resources/timesheet" data-link>
        <span class="object-icon object-sheet"></span>
        <strong>Timesheet</strong>
        <small>\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32\u0E2D\u0E2D\u0E01\u0E41\u0E25\u0E30\u0E14\u0E39\u0E27\u0E34\u0E18\u0E35\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2A\u0E48\u0E07</small>
      </a>
      <a href="#/policy/leave" data-link>
        <span class="object-icon object-leave"></span>
        <strong>\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E25\u0E32</strong>
        <small>\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19 \u0E27\u0E31\u0E19\u0E25\u0E32 \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07 HR</small>
      </a>
      <a href="#/employee/directory" data-link>
        <span class="object-icon object-people"></span>
        <strong>Employee Contact</strong>
        <small>\u0E2B\u0E32\u0E0A\u0E37\u0E48\u0E2D\u0E17\u0E35\u0E21\u0E41\u0E25\u0E30\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D</small>
      </a>
      <a href="#/resources/faqs" data-link>
        <span class="object-icon object-faq"></span>
        <strong>FAQs</strong>
        <small>\u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48 intern \u0E40\u0E1B\u0E34\u0E14\u0E14\u0E39\u0E1A\u0E48\u0E2D\u0E22</small>
      </a>
    </div>
  </div>
</section>
`;

  // js/pages/first-day.js
  function renderFirstDay(data = {}) {
    const hrEmail = data.hr_email || "hr@exzyteam.com";
    return `
<div class="fd3-page">

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 HERO \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="fdw-hero">

  <!-- \u2500\u2500 ILLUSTRATED WORKSPACE SCENE \u2500\u2500 -->
  <div class="fdw-scene" aria-hidden="true">
    <svg viewBox="0 0 1440 580" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fdw-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FDF8F0"/>
          <stop offset="100%" stop-color="#F5EDD8"/>
        </linearGradient>
        <linearGradient id="fdw-desk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#E8C87A"/>
          <stop offset="100%" stop-color="#C8A050"/>
        </linearGradient>
        <linearGradient id="fdw-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1A2E52"/>
          <stop offset="100%" stop-color="#0E1F3A"/>
        </linearGradient>
        <filter id="fdw-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="16" flood-color="rgba(60,30,0,0.18)"/>
        </filter>
        <filter id="fdw-soft" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="8" flood-color="rgba(60,30,0,0.12)"/>
        </filter>
      </defs>

      <!-- WALL -->
      <rect width="1440" height="580" fill="url(#fdw-wall)"/>

      <!-- WINDOW \u2014 upper right, morning light -->
      <rect x="980" y="30" width="210" height="270" rx="6" fill="#FEFCF5"/>
      <rect x="980" y="30" width="210" height="270" rx="6" fill="none" stroke="#D4BE8A" stroke-width="8"/>
      <line x1="980" y1="165" x2="1190" y2="165" stroke="#D4BE8A" stroke-width="4"/>
      <line x1="1085" y1="30" x2="1085" y2="300" stroke="#D4BE8A" stroke-width="4"/>
      <!-- morning light rays washing across wall -->
      <polygon points="980,30 540,580 760,580 1190,30" fill="rgba(255,220,80,0.09)"/>
      <polygon points="1085,30 640,580 820,580 1190,110" fill="rgba(255,220,80,0.06)"/>
      <polygon points="1190,30 820,580 960,580 1190,80" fill="rgba(255,220,80,0.04)"/>

      <!-- WALL ART \u2014 small framed print left of window -->
      <rect x="720" y="55" width="130" height="100" rx="4" fill="#EDE5D8" filter="url(#fdw-soft)"/>
      <rect x="726" y="61" width="118" height="88" rx="2" fill="#F5EDE0"/>
      <!-- abstract art: a few coloured shapes -->
      <circle cx="765" cy="105" r="24" fill="rgba(102,197,197,0.35)"/>
      <rect x="775" y="78" width="14" height="38" rx="3" fill="rgba(0,64,128,0.2)"/>
      <ellipse cx="800" cy="115" rx="16" ry="10" fill="rgba(245,158,11,0.25)"/>

      <!-- WALL SHELF + PLANT -->
      <rect x="200" y="210" width="90" height="8" rx="2" fill="#C8B07A"/>
      <rect x="224" y="182" width="28" height="30" rx="3" fill="#707070"/>
      <ellipse cx="238" cy="178" rx="20" ry="28" fill="#66AA66" transform="rotate(-8,238,178)"/>
      <ellipse cx="252" cy="172" rx="16" ry="22" fill="#55BB55" transform="rotate(18,252,172)"/>
      <ellipse cx="224" cy="174" rx="14" ry="20" fill="#44A044" transform="rotate(-22,224,174)"/>

      <!-- DESK SURFACE \u2014 large, perspective trapezoid -->
      <polygon points="0,330 1440,330 1440,580 0,580" fill="url(#fdw-desk)"/>
      <!-- Desk edge highlight line -->
      <line x1="0" y1="330" x2="1440" y2="330" stroke="#E8D090" stroke-width="3"/>
      <!-- Very subtle wood grain -->
      <line x1="0" y1="400" x2="1440" y2="398" stroke="rgba(160,110,30,0.06)" stroke-width="1.5"/>
      <line x1="0" y1="470" x2="1440" y2="468" stroke="rgba(160,110,30,0.05)" stroke-width="1.5"/>
      <!-- Desk mat under laptop -->
      <rect x="350" y="325" width="480" height="240" rx="10" fill="rgba(0,40,80,0.06)" transform="rotate(-2,590,445)"/>

      <!-- LAPTOP \u2014 main focal object -->
      <!-- Laptop lid/screen back -->
      <rect x="380" y="198" width="360" height="238" rx="14" fill="#DEDAD4" filter="url(#fdw-shadow)" transform="rotate(-2,560,317)"/>
      <!-- Screen bezel -->
      <rect x="392" y="208" width="336" height="218" rx="8" fill="#1C1C2E" transform="rotate(-2,560,317)"/>
      <!-- Screen display -->
      <rect x="398" y="214" width="324" height="206" rx="6" fill="url(#fdw-screen)" transform="rotate(-2,560,317)"/>
      <!-- Screen glow: subtle EXZY-blue content suggestion -->
      <rect x="404" y="220" width="312" height="194" rx="4" fill="#243A5E" opacity="0.6" transform="rotate(-2,560,317)"/>
      <!-- camera dot -->
      <circle cx="561" cy="216" r="3.5" fill="#0A0A1A" transform="rotate(-2,561,216)"/>
      <!-- Screen glare reflection -->
      <ellipse cx="475" cy="268" rx="30" ry="10" fill="rgba(255,255,255,0.07)" transform="rotate(-2,560,317)"/>
      <!-- Keyboard / base -->
      <rect x="392" y="430" width="336" height="34" rx="8" fill="#CCCAC4" filter="url(#fdw-soft)" transform="rotate(-2,560,447)"/>
      <!-- trackpad -->
      <rect x="482" y="436" width="160" height="24" rx="6" fill="#C0BEB8" transform="rotate(-2,560,448)"/>

      <!-- COFFEE MUG \u2014 right of laptop -->
      <ellipse cx="868" cy="388" rx="42" ry="26" fill="#55B8B8"/>
      <ellipse cx="868" cy="362" rx="42" ry="26" fill="#66C5C5"/>
      <rect x="826" y="362" width="84" height="26" fill="#66C5C5"/>
      <!-- Coffee liquid surface -->
      <ellipse cx="868" cy="362" rx="32" ry="19" fill="#7B4A28"/>
      <!-- Latte art suggestion -->
      <path d="M858 358 Q868 352 878 358" fill="none" stroke="rgba(240,220,180,0.5)" stroke-width="2" stroke-linecap="round"/>
      <!-- Handle -->
      <path d="M910 368 Q935 378 910 388" fill="none" stroke="#66C5C5" stroke-width="10" stroke-linecap="round"/>
      <path d="M910 368 Q935 378 910 388" fill="none" stroke="#7DD4D4" stroke-width="6" stroke-linecap="round"/>
      <!-- Steam wisps -->
      <path d="M854 352 Q858 336 853 320" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M868 348 Q873 330 868 312" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M882 352 Q887 336 882 320" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2.5" stroke-linecap="round"/>

      <!-- NOTEBOOK \u2014 left of laptop, slightly rotated -->
      <rect x="80" y="345" width="220" height="175" rx="7" fill="#F0EAD8" filter="url(#fdw-shadow)" transform="rotate(6,190,432)"/>
      <rect x="92" y="352" width="196" height="162" rx="4" fill="#FAFAF5" transform="rotate(6,190,432)"/>
      <!-- Spiral spine -->
      <rect x="80" y="345" width="14" height="175" rx="4" fill="#D4C48A" transform="rotate(6,190,432)"/>
      <!-- Ruled lines -->
      <line x1="106" y1="378" x2="278" y2="374" stroke="rgba(0,0,0,0.06)" stroke-width="1.5" transform="rotate(6,190,432)"/>
      <line x1="106" y1="395" x2="278" y2="391" stroke="rgba(0,0,0,0.06)" stroke-width="1.5" transform="rotate(6,190,432)"/>
      <line x1="106" y1="412" x2="278" y2="408" stroke="rgba(0,0,0,0.06)" stroke-width="1.5" transform="rotate(6,190,432)"/>
      <line x1="106" y1="429" x2="278" y2="425" stroke="rgba(0,0,0,0.06)" stroke-width="1.5" transform="rotate(6,190,432)"/>
      <line x1="106" y1="446" x2="278" y2="442" stroke="rgba(0,0,0,0.06)" stroke-width="1.5" transform="rotate(6,190,432)"/>
      <!-- Some handwriting/doodle suggestion -->
      <path d="M115 385 Q140 380 155 390 Q165 398 160 408" fill="none" stroke="rgba(0,60,120,0.18)" stroke-width="1.5" stroke-linecap="round" transform="rotate(6,190,432)"/>
      <line x1="115" y1="420" x2="185" y2="418" stroke="rgba(0,60,120,0.12)" stroke-width="1.5" stroke-linecap="round" transform="rotate(6,190,432)"/>

      <!-- PEN beside notebook -->
      <rect x="308" y="355" width="9" height="135" rx="4.5" fill="#0FA8A8" filter="url(#fdw-soft)" transform="rotate(10,312,422)"/>
      <polygon points="312,350 307,340 317,340" fill="#0D9090" transform="rotate(10,312,345)"/>
      <rect x="308" y="466" width="9" height="18" rx="4.5" fill="#0D9090" transform="rotate(10,312,475)"/>

      <!-- DESK SUCCULENT \u2014 far right -->
      <ellipse cx="1300" cy="460" rx="36" ry="22" fill="#707070"/>
      <ellipse cx="1300" cy="438" rx="36" ry="22" fill="#888888"/>
      <rect x="1264" y="438" width="72" height="22" fill="#888888"/>
      <!-- Leaves -->
      <ellipse cx="1300" cy="416" rx="16" ry="26" fill="#5AAA60"/>
      <ellipse cx="1283" cy="416" rx="13" ry="20" fill="#4CAF54" transform="rotate(-28,1283,416)"/>
      <ellipse cx="1317" cy="416" rx="13" ry="20" fill="#66BB6A" transform="rotate(28,1317,416)"/>
      <ellipse cx="1291" cy="404" rx="10" ry="16" fill="#43A047" transform="rotate(-18,1291,404)"/>
      <ellipse cx="1310" cy="404" rx="10" ry="16" fill="#388E3C" transform="rotate(18,1310,404)"/>

      <!-- POST-IT NOTE on laptop screen edge -->
      <rect x="666" y="318" width="52" height="44" rx="2" fill="#66C5C5" opacity="0.85" filter="url(#fdw-soft)" transform="rotate(3,692,340)"/>
      <line x1="672" y1="328" x2="712" y2="327" stroke="rgba(0,0,0,0.08)" stroke-width="1.2" transform="rotate(3,692,340)"/>
      <line x1="672" y1="337" x2="712" y2="336" stroke="rgba(0,0,0,0.08)" stroke-width="1.2" transform="rotate(3,692,340)"/>
      <line x1="672" y1="346" x2="700" y2="345" stroke="rgba(0,0,0,0.08)" stroke-width="1.2" transform="rotate(3,692,340)"/>

      <!-- PHONE \u2014 right side of desk -->
      <rect x="1060" y="378" width="70" height="118" rx="14" fill="#2A2838" filter="url(#fdw-soft)" transform="rotate(-6,1095,437)"/>
      <rect x="1066" y="386" width="58" height="102" rx="9" fill="#1A1828" transform="rotate(-6,1095,437)"/>
      <rect x="1078" y="480" width="30" height="4" rx="2" fill="rgba(255,255,255,0.2)" transform="rotate(-6,1095,482)"/>

    </svg>
  </div>

  <!-- \u2500\u2500 GRADIENT OVERLAY so text is legible over scene \u2500\u2500 -->
  <div class="fdw-overlay" aria-hidden="true"></div>

  <!-- \u2500\u2500 CHAPTER OPENING TEXT \u2500\u2500 -->
  <div class="fdw-text">

    <p class="fdw-chapter-tag">
      <span class="fdw-tag-line"></span>
      Chapter One &nbsp;\xB7&nbsp; \u0E1A\u0E17\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E36\u0E48\u0E07
    </p>

    <h1 class="fdw-h1">
      <span class="fdw-h1-intro">\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49\u0E04\u0E37\u0E2D</span>
      <span class="fdw-h1-main">\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01</span>
      <span class="fdw-h1-place">\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 \u0E17\u0E35\u0E48 <em>EXZY</em></span>
    </h1>

    <p class="fdw-lead">\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E23\u0E39\u0E49\u0E17\u0E38\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E43\u0E19\u0E27\u0E31\u0E19\u0E40\u0E14\u0E35\u0E22\u0E27<br>\u0E41\u0E04\u0E48\u0E21\u0E32\u0E16\u0E36\u0E07\u0E01\u0E47\u0E1E\u0E2D \u2014 \u0E17\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E40\u0E23\u0E32\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E44\u0E27\u0E49\u0E43\u0E2B\u0E49\u0E41\u0E25\u0E49\u0E27</p>

    <a href="#fd3-sec1" class="fdw-cta">
      \u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>

  </div>

</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SECTION 1: Tasks \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<section class="fd3-section fd3-sec-tasks" id="fd3-sec1">
  <div class="fd3-sec-head fdb-reveal">
    <div class="fd3-sec-tag">\u0E20\u0E32\u0E23\u0E01\u0E34\u0E08\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49</div>
    <h2 class="fd3-sec-title">\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49</h2>
    <p class="fd3-sec-sub">\u0E2B\u0E25\u0E31\u0E07 Orientation \u0E40\u0E2A\u0E23\u0E47\u0E08 \u2014 \u0E17\u0E33 2 tasks \u0E19\u0E35\u0E49\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A\u0E01\u0E48\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E1A\u0E49\u0E32\u0E19</p>
  </div>

  <div class="fd3-task-grid">

    <!-- Task 01: Calendar -->
    <div class="fd3-task-card fd3-task-card--cal fdb-reveal fdb-delay1">
      <!-- illustrated calendar graphic \u2014 decorative background -->
      <div class="fd3-card-graphic" aria-hidden="true">
        <svg viewBox="0 0 160 180" xmlns="http://www.w3.org/2000/svg">
          <!-- Calendar shell -->
          <rect width="160" height="180" rx="14" fill="rgba(102,197,197,0.10)"/>
          <!-- Top header bar -->
          <rect width="160" height="44" rx="14" fill="rgba(102,197,197,0.30)"/>
          <rect y="30" width="160" height="14" fill="rgba(102,197,197,0.30)"/>
          <!-- Month label -->
          <rect x="42" y="14" width="76" height="10" rx="5" fill="rgba(255,255,255,0.55)"/>
          <!-- Nav chevrons -->
          <path d="M18 18 L14 22 L18 26" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M142 18 L146 22 L142 26" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <!-- Day-of-week headers -->
          <g fill="rgba(0,64,128,0.25)">
            <rect x="8"   y="52" width="16" height="6" rx="3"/>
            <rect x="30"  y="52" width="16" height="6" rx="3"/>
            <rect x="52"  y="52" width="16" height="6" rx="3"/>
            <rect x="74"  y="52" width="16" height="6" rx="3"/>
            <rect x="96"  y="52" width="16" height="6" rx="3"/>
            <rect x="118" y="52" width="16" height="6" rx="3"/>
            <rect x="140" y="52" width="14" height="6" rx="3"/>
          </g>
          <!-- Week rows -->
          <g fill="rgba(0,64,128,0.10)">
            <rect x="8"   y="65" width="16" height="16" rx="4"/>
            <rect x="30"  y="65" width="16" height="16" rx="4"/>
            <rect x="52"  y="65" width="16" height="16" rx="4"/>
            <rect x="74"  y="65" width="16" height="16" rx="4"/>
            <rect x="96"  y="65" width="16" height="16" rx="4"/>
            <rect x="118" y="65" width="16" height="16" rx="4"/>
            <rect x="140" y="65" width="14" height="16" rx="4"/>

            <rect x="8"   y="87" width="16" height="16" rx="4"/>
            <rect x="30"  y="87" width="16" height="16" rx="4"/>
            <!-- TODAY: highlighted -->
            <rect x="52"  y="87" width="16" height="16" rx="4" fill="rgba(102,197,197,0.75)"/>
            <rect x="74"  y="87" width="16" height="16" rx="4"/>
            <rect x="96"  y="87" width="16" height="16" rx="4"/>
            <rect x="118" y="87" width="16" height="16" rx="4"/>
            <rect x="140" y="87" width="14" height="16" rx="4"/>

            <rect x="8"   y="109" width="16" height="16" rx="4"/>
            <rect x="30"  y="109" width="16" height="16" rx="4"/>
            <rect x="52"  y="109" width="16" height="16" rx="4"/>
            <rect x="74"  y="109" width="16" height="16" rx="4"/>
            <rect x="96"  y="109" width="16" height="16" rx="4"/>
            <rect x="118" y="109" width="16" height="16" rx="4"/>
            <rect x="140" y="109" width="14" height="16" rx="4"/>

            <rect x="8"   y="131" width="16" height="16" rx="4"/>
            <rect x="30"  y="131" width="16" height="16" rx="4"/>
            <rect x="52"  y="131" width="16" height="16" rx="4"/>
            <rect x="74"  y="131" width="16" height="16" rx="4"/>
            <rect x="96"  y="131" width="16" height="16" rx="4"/>
          </g>
          <!-- event dot on highlighted day -->
          <circle cx="60" cy="95" r="3" fill="rgba(255,255,255,0.9)"/>
          <!-- two event bars below grid -->
          <rect x="8"  y="154" width="70" height="8" rx="4" fill="rgba(102,197,197,0.35)"/>
          <rect x="84" y="154" width="50" height="8" rx="4" fill="rgba(0,64,128,0.18)"/>
          <rect x="8"  y="166" width="55" height="8" rx="4" fill="rgba(0,64,128,0.12)"/>
        </svg>
      </div>
      <div class="fd3-task-body">
        <div class="fd3-task-header">
          <div class="fd3-task-ico" style="color:#66C5C5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <div>
            <div class="fd3-task-num" style="color:#66C5C5">Task 01</div>
            <div class="fd3-task-name">Subscribe Google Calendar</div>
          </div>
        </div>

        <p class="fd3-task-desc">Subscribe \u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19 EXZY \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E19\u0E31\u0E14\u0E2B\u0E21\u0E32\u0E22\u0E41\u0E25\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E42\u0E14\u0E22\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34</p>

        <div class="fd3-flow">
          <div class="fd3-flow-step">
            <div class="fd3-flow-icon">\u{1F4E7}</div>
            <div class="fd3-flow-text">\u0E23\u0E31\u0E1A Email<br>\u0E04\u0E33\u0E40\u0E0A\u0E34\u0E0D\u0E08\u0E32\u0E01 HR</div>
          </div>
          <svg class="fd3-flow-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <div class="fd3-flow-step">
            <div class="fd3-flow-icon">\u{1F4C5}</div>
            <div class="fd3-flow-text">\u0E01\u0E14<br>Open Calendar</div>
          </div>
          <svg class="fd3-flow-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <div class="fd3-flow-step fd3-flow-step-last">
            <div class="fd3-flow-icon">\u2705</div>
            <div class="fd3-flow-text">\u0E01\u0E14 Subscribe<br>\u0E17\u0E31\u0E49\u0E07 2 \u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19</div>
          </div>
        </div>

        <div class="fd3-task-note">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          \u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A Email? \u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D HR \u0E44\u0E14\u0E49\u0E17\u0E35\u0E48
          <a href="mailto:${hrEmail}" class="fd3-task-note-email">${hrEmail}</a>
        </div>
      </div>
    </div>

    <!-- Task 02: Timesheet -->
    <div class="fd3-task-card fd3-task-card--ts fdb-reveal fdb-delay2">
      <!-- illustrated document/spreadsheet graphic -->
      <div class="fd3-card-graphic" aria-hidden="true">
        <svg viewBox="0 0 150 180" xmlns="http://www.w3.org/2000/svg">
          <!-- Document with dog-ear corner -->
          <polygon points="0,0 110,0 150,40 150,180 0,180" fill="rgba(0,64,128,0.09)"/>
          <!-- Dog-ear fold -->
          <polygon points="110,0 110,40 150,40" fill="rgba(0,64,128,0.18)"/>
          <!-- Document header stripe -->
          <rect width="110" height="30" fill="rgba(0,64,128,0.18)"/>
          <!-- EXZY label bar in header -->
          <rect x="12" y="10" width="55" height="8" rx="4" fill="rgba(102,197,197,0.55)"/>
          <rect x="12" y="20" width="38" height="5" rx="2" fill="rgba(255,255,255,0.3)"/>
          <!-- Column headers row -->
          <rect x="8"  y="38" width="52" height="7" rx="3" fill="rgba(0,64,128,0.22)"/>
          <rect x="66" y="38" width="28" height="7" rx="3" fill="rgba(0,64,128,0.22)"/>
          <rect x="100" y="38" width="24" height="7" rx="3" fill="rgba(0,64,128,0.22)"/>
          <!-- Data rows -->
          <g fill="rgba(0,64,128,0.10)">
            <rect x="8"  y="52" width="48" height="6" rx="2"/>
            <rect x="66" y="52" width="22" height="6" rx="2"/>
            <rect x="100" y="52" width="20" height="6" rx="2"/>

            <rect x="8"  y="64" width="42" height="6" rx="2"/>
            <rect x="66" y="64" width="26" height="6" rx="2"/>
            <rect x="100" y="64" width="18" height="6" rx="2"/>

            <rect x="8"  y="76" width="50" height="6" rx="2"/>
            <rect x="66" y="76" width="20" height="6" rx="2"/>
            <rect x="100" y="76" width="22" height="6" rx="2" fill="rgba(102,197,197,0.4)"/>

            <rect x="8"  y="88" width="44" height="6" rx="2"/>
            <rect x="66" y="88" width="24" height="6" rx="2"/>
            <rect x="100" y="88" width="20" height="6" rx="2"/>

            <rect x="8"  y="100" width="46" height="6" rx="2"/>
            <rect x="66" y="100" width="22" height="6" rx="2"/>
            <rect x="100" y="100" width="18" height="6" rx="2"/>
          </g>
          <!-- Divider -->
          <line x1="6" y1="114" x2="144" y2="114" stroke="rgba(0,64,128,0.15)" stroke-width="1"/>
          <!-- Total/footer row -->
          <rect x="8"  y="120" width="62" height="7" rx="3" fill="rgba(0,64,128,0.16)"/>
          <rect x="100" y="120" width="26" height="7" rx="3" fill="rgba(102,197,197,0.45)"/>
          <!-- Signature lines -->
          <line x1="8"  y1="140" x2="65" y2="140" stroke="rgba(0,64,128,0.2)" stroke-width="1.5"/>
          <line x1="80" y1="140" x2="144" y2="140" stroke="rgba(0,64,128,0.2)" stroke-width="1.5"/>
          <rect x="8"  y="144" width="32" height="4" rx="2" fill="rgba(0,64,128,0.1)"/>
          <rect x="80" y="144" width="40" height="4" rx="2" fill="rgba(0,64,128,0.1)"/>
          <!-- Approval stamp circle -->
          <circle cx="118" cy="162" r="16" fill="none" stroke="rgba(102,197,197,0.45)" stroke-width="2"/>
          <circle cx="118" cy="162" r="11" fill="none" stroke="rgba(102,197,197,0.25)" stroke-width="1" stroke-dasharray="3 2"/>
          <rect x="110" y="159" width="16" height="6" rx="3" fill="rgba(102,197,197,0.4)"/>
        </svg>
      </div>
      <div class="fd3-task-body">
        <div class="fd3-task-header">
          <div class="fd3-task-ico" style="color:#F59E0B">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <div>
            <div class="fd3-task-num" style="color:#004080">Task 02</div>
            <div class="fd3-task-name">\u0E01\u0E23\u0E2D\u0E01 Timesheet</div>
          </div>
        </div>

        <p class="fd3-task-desc">\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32-\u0E2D\u0E2D\u0E01\u0E07\u0E32\u0E19\u0E15\u0E32\u0E21\u0E08\u0E23\u0E34\u0E07 HR \u0E08\u0E30\u0E2A\u0E48\u0E07\u0E44\u0E1F\u0E25\u0E4C Excel \u0E43\u0E2B\u0E49\u0E17\u0E32\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25 \u0E01\u0E23\u0E2D\u0E01\u0E17\u0E38\u0E01\u0E27\u0E31\u0E19 \u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2A\u0E48\u0E07\u0E2A\u0E34\u0E49\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19</p>

        <div class="fd3-flow">
          <div class="fd3-flow-step">
            <div class="fd3-flow-icon">\u{1F4C2}</div>
            <div class="fd3-flow-text">\u0E23\u0E31\u0E1A\u0E44\u0E1F\u0E25\u0E4C<br>Timesheet \u0E08\u0E32\u0E01 HR</div>
          </div>
          <svg class="fd3-flow-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <div class="fd3-flow-step">
            <div class="fd3-flow-icon">\u270F\uFE0F</div>
            <div class="fd3-flow-text">\u0E40\u0E1B\u0E34\u0E14\u0E44\u0E1F\u0E25\u0E4C<br>\u0E01\u0E23\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49</div>
          </div>
          <svg class="fd3-flow-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <div class="fd3-flow-step fd3-flow-step-last">
            <div class="fd3-flow-icon">\u{1F5A8}\uFE0F</div>
            <div class="fd3-flow-text">\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2A\u0E48\u0E07 HR<br>\u0E2A\u0E34\u0E49\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19</div>
          </div>
        </div>

        <a href="#/resources/timesheet" class="fd3-task-link" data-link>
          \u0E14\u0E39\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D Timesheet \u0E09\u0E1A\u0E31\u0E1A\u0E40\u0E15\u0E47\u0E21
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>

  </div>
</section>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SECTION 2: Timeline \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<section class="fd3-section fd3-sec-timeline" id="fd3-sec2">
  <div class="fd3-sec-head fdb-reveal">
    <div class="fd3-sec-tag fd3-sec-tag-alt">\u0E15\u0E32\u0E23\u0E32\u0E07\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01</div>
    <h2 class="fd3-sec-title">4 \u0E0A\u0E48\u0E27\u0E07\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E43\u0E19\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01</h2>
    <p class="fd3-sec-sub">\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01\u0E41\u0E1A\u0E48\u0E07\u0E40\u0E1B\u0E47\u0E19 4 \u0E0A\u0E48\u0E27\u0E07\u0E2B\u0E25\u0E31\u0E01 \u2014 \u0E2D\u0E48\u0E32\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E43\u0E08\u0E41\u0E25\u0E30\u0E23\u0E39\u0E49\u0E27\u0E48\u0E32\u0E08\u0E30\u0E40\u0E01\u0E34\u0E14\u0E2D\u0E30\u0E44\u0E23\u0E02\u0E36\u0E49\u0E19</p>
  </div>

  <div class="fd3-tl">

    <div class="fd3-tl-item fdb-reveal" style="--tl:#66C5C5">
      <div class="fd3-tl-side"><div class="fd3-tl-num">01</div><div class="fd3-tl-line"></div></div>
      <div class="fd3-tl-card">
        <div class="fd3-tl-tag">\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E27\u0E31\u0E19</div>
        <div class="fd3-tl-title">Orientation</div>
        <p class="fd3-tl-sub">\u0E1B\u0E10\u0E21\u0E19\u0E34\u0E40\u0E17\u0E28\u0E01\u0E31\u0E1A HR \u0E23\u0E39\u0E49\u0E08\u0E31\u0E01 EXZY \u0E41\u0E25\u0E30\u0E17\u0E38\u0E01\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E34\u0E48\u0E21\u0E07\u0E32\u0E19</p>
        <div class="fd3-orientation-map" aria-label="Orientation flow">
          <div class="fd3-orient-step">
            <span class="fd3-orient-icon">\u{1F3E2}</span>
            <strong>\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01 EXZY</strong>
            <small>\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E41\u0E25\u0E30\u0E27\u0E34\u0E18\u0E35\u0E17\u0E33\u0E07\u0E32\u0E19</small>
          </div>
          <div class="fd3-orient-step">
            <span class="fd3-orient-icon">\u{1F4C4}</span>
            <strong>\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E2A\u0E33\u0E04\u0E31\u0E0D</strong>
            <small>\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22\u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E17\u0E23\u0E32\u0E1A</small>
          </div>
          <div class="fd3-orient-step">
            <span class="fd3-orient-icon">\u{1F4BB}</span>
            <strong>\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32 Tools</strong>
            <small>\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E43\u0E2B\u0E49\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19</small>
          </div>
          <div class="fd3-orient-step">
            <span class="fd3-orient-icon">\u{1F4C5}</span>
            <strong>\u0E1C\u0E39\u0E01 Calendar</strong>
            <small>\u0E23\u0E31\u0E1A\u0E19\u0E31\u0E14\u0E2B\u0E21\u0E32\u0E22\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34</small>
          </div>
        </div>
        <div class="fd3-tl-quote">"\u0E16\u0E32\u0E21\u0E44\u0E14\u0E49\u0E17\u0E38\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07 \u2014 Orientation \u0E04\u0E37\u0E2D\u0E40\u0E27\u0E25\u0E32\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E17\u0E35\u0E48\u0E08\u0E30\u0E40\u0E01\u0E47\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A" <em>\u2014 HR Team</em></div>
      </div>
    </div>

    <div class="fd3-tl-item fdb-reveal fdb-delay1" style="--tl:#004080">
      <div class="fd3-tl-side"><div class="fd3-tl-num">02</div><div class="fd3-tl-line"></div></div>
      <div class="fd3-tl-card">
        <div class="fd3-tl-tag">\u0E2D\u0E31\u0E15\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19</div>
        <div class="fd3-tl-title">Metropolis</div>
        <p class="fd3-tl-sub">Work Theme & CI \u0E02\u0E2D\u0E07 EXZY \u2014 \u0E01\u0E33\u0E2B\u0E19\u0E14\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E20\u0E32\u0E1E\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C\u0E41\u0E25\u0E30\u0E41\u0E19\u0E27\u0E04\u0E34\u0E14\u0E43\u0E19\u0E07\u0E32\u0E19\u0E17\u0E38\u0E01\u0E0A\u0E34\u0E49\u0E19</p>
        <div class="fd3-tl-pills"><span>Work Theme \u0E02\u0E2D\u0E07\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17</span><span>\u0E2A\u0E48\u0E07\u0E1C\u0E25\u0E15\u0E48\u0E2D\u0E07\u0E32\u0E19\u0E17\u0E38\u0E01\u0E0A\u0E34\u0E49\u0E19</span><span>\u0E17\u0E38\u0E01\u0E04\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E23\u0E39\u0E49</span></div>
        <div class="fd3-tl-quote">"Metropolis \u0E04\u0E37\u0E2D\u0E27\u0E34\u0E18\u0E35\u0E17\u0E35\u0E48 EXZY \u0E21\u0E2D\u0E07\u0E42\u0E25\u0E01\u0E41\u0E25\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E07\u0E32\u0E19 \u2014 \u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E34\u0E48\u0E21\u0E17\u0E33\u0E0A\u0E34\u0E49\u0E19\u0E41\u0E23\u0E01"</div>
      </div>
    </div>

    <div class="fd3-tl-item fdb-reveal fdb-delay1" style="--tl:#2A8DA8">
      <div class="fd3-tl-side"><div class="fd3-tl-num">03</div><div class="fd3-tl-line"></div></div>
      <div class="fd3-tl-card">
        <div class="fd3-tl-tag">\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E31\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E4C</div>
        <div class="fd3-tl-title">Mentor & \u0E17\u0E35\u0E21</div>
        <p class="fd3-tl-sub">\u0E1E\u0E1A Mentor \u0E41\u0E25\u0E30\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E43\u0E19\u0E17\u0E35\u0E21 \u2014 \u0E04\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E0A\u0E48\u0E27\u0E22\u0E04\u0E38\u0E13\u0E15\u0E25\u0E2D\u0E14\u0E0A\u0E48\u0E27\u0E07 Internship</p>
        <div class="fd3-tl-persons">
          <div class="fd3-tl-person" style="--pc:#66C5C5">
            <div class="fd3-tl-person-av"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>
            <div><div class="fd3-tl-person-role">Mentor</div><div class="fd3-tl-person-tip">\u0E04\u0E19\u0E41\u0E23\u0E01\u0E17\u0E35\u0E48\u0E04\u0E27\u0E23\u0E16\u0E32\u0E21\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E15\u0E34\u0E14\u0E1B\u0E31\u0E0D\u0E2B\u0E32</div></div>
          </div>
          <div class="fd3-tl-person" style="--pc:#004080">
            <div class="fd3-tl-person-av"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg></div>
            <div><div class="fd3-tl-person-role">Team Lead</div><div class="fd3-tl-person-tip">\u0E04\u0E38\u0E22\u0E44\u0E14\u0E49\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23 Feedback \u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21</div></div>
          </div>
          <div class="fd3-tl-person" style="--pc:#2A8DA8">
            <div class="fd3-tl-person-av"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <div><div class="fd3-tl-person-role">Teammates</div><div class="fd3-tl-person-tip">\u0E41\u0E19\u0E30\u0E19\u0E33\u0E15\u0E31\u0E27\u0E41\u0E25\u0E30\u0E08\u0E33\u0E0A\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49</div></div>
          </div>
        </div>
      </div>
    </div>

    <div class="fd3-tl-item fdb-reveal fdb-delay1" style="--tl:#F59E0B">
      <div class="fd3-tl-side"><div class="fd3-tl-num">04</div></div>
      <div class="fd3-tl-card">
        <div class="fd3-tl-tag">\u0E01\u0E48\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E1A\u0E49\u0E32\u0E19</div>
        <div class="fd3-tl-title">\u0E01\u0E23\u0E2D\u0E01 Timesheet</div>
        <p class="fd3-tl-sub">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32-\u0E2D\u0E2D\u0E01\u0E07\u0E32\u0E19\u0E15\u0E32\u0E21\u0E08\u0E23\u0E34\u0E07 \u0E01\u0E23\u0E2D\u0E01\u0E22\u0E49\u0E2D\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E44\u0E14\u0E49 \u0E41\u0E15\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2A\u0E48\u0E07\u0E17\u0E38\u0E01\u0E2A\u0E34\u0E49\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19</p>
        <div class="fd3-tl-ts">
          <div class="fd3-tl-ts-row"><span class="fd3-tl-ts-k">\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32 / \u0E2D\u0E2D\u0E01</span><span class="fd3-tl-ts-v">\u0E01\u0E23\u0E2D\u0E01\u0E15\u0E32\u0E21\u0E08\u0E23\u0E34\u0E07\u0E17\u0E38\u0E01\u0E27\u0E31\u0E19</span></div>
          <div class="fd3-tl-ts-row"><span class="fd3-tl-ts-k">\u0E01\u0E23\u0E2D\u0E01\u0E22\u0E49\u0E2D\u0E19\u0E2B\u0E25\u0E31\u0E07</span><span class="fd3-tl-ts-v fd3-tl-ts-ok">\u0E17\u0E33\u0E44\u0E14\u0E49\u0E15\u0E25\u0E2D\u0E14</span></div>
          <div class="fd3-tl-ts-row fd3-tl-ts-warn"><span class="fd3-tl-ts-k">\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331 \u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</span><span class="fd3-tl-ts-v">\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2A\u0E48\u0E07 HR \u2014 \u0E2B\u0E49\u0E32\u0E21\u0E25\u0E37\u0E21!</span></div>
        </div>
        <a href="#/resources/timesheet" class="fd3-tl-cta" data-link>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          \u0E14\u0E39\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D Timesheet \u0E09\u0E1A\u0E31\u0E1A\u0E40\u0E15\u0E47\u0E21
        </a>
      </div>
    </div>

  </div>
</section>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SECTION 3: Handbook \u2014 flows into footer \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<section class="fd3-section fd3-sec-more" id="fd3-sec3">
  <div class="fd3-more-inner">
    <div class="fd3-more-head fdb-reveal">
      <h2 class="fd3-more-title">\u0E22\u0E31\u0E07\u0E21\u0E35\u0E2D\u0E35\u0E01\u0E40\u0E22\u0E2D\u0E30\u0E43\u0E19 Handbook</h2>
      <p class="fd3-more-sub">\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01\u0E1C\u0E48\u0E32\u0E19\u0E44\u0E1B \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E35\u0E49\u0E08\u0E30\u0E21\u0E35\u0E1B\u0E23\u0E30\u0E42\u0E22\u0E0A\u0E19\u0E4C\u0E15\u0E25\u0E2D\u0E14\u0E0A\u0E48\u0E27\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</p>
    </div>

    <div class="fd3-more-entries fdb-reveal">
      <a href="#/getting-started/orientation" class="fd3-more-entry" data-link>
        <span class="fd3-more-entry-dot" style="background:#66C5C5"></span>
        <div class="fd3-more-entry-body">
          <div class="fd3-more-entry-title">Orientation & \u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28</div>
          <div class="fd3-more-entry-desc">Orientation slides \xB7 Wi-Fi \xB7 \u0E2B\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21</div>
        </div>
        <svg class="fd3-more-entry-arr" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="#/policy/code-of-conduct" class="fd3-more-entry" data-link>
        <span class="fd3-more-entry-dot" style="background:#004080"></span>
        <div class="fd3-more-entry-body">
          <div class="fd3-more-entry-title">Work Policy</div>
          <div class="fd3-more-entry-desc">Core Values \xB7 Dress Code \xB7 \u0E01\u0E32\u0E23\u0E25\u0E32</div>
        </div>
        <svg class="fd3-more-entry-arr" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="#/resources/timesheet" class="fd3-more-entry" data-link>
        <span class="fd3-more-entry-dot" style="background:#8B5CF6"></span>
        <div class="fd3-more-entry-body">
          <div class="fd3-more-entry-title">Resources & FAQs</div>
          <div class="fd3-more-entry-desc">Timesheet \xB7 \u0E04\u0E33\u0E16\u0E32\u0E21\u0E1E\u0E1A\u0E1A\u0E48\u0E2D\u0E22 18 \u0E02\u0E49\u0E2D</div>
        </div>
        <svg class="fd3-more-entry-arr" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="#/showcase/experiences" class="fd3-more-entry" data-link>
        <span class="fd3-more-entry-dot" style="background:#EC4899"></span>
        <div class="fd3-more-entry-body">
          <div class="fd3-more-entry-title">Showcase \u0E23\u0E38\u0E48\u0E19\u0E1E\u0E35\u0E48</div>
          <div class="fd3-more-entry-desc">\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E41\u0E25\u0E30\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E08\u0E32\u0E01 intern \u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E21\u0E32</div>
        </div>
        <svg class="fd3-more-entry-arr" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>

    <div class="fd3-more-home fdb-reveal">
      <a href="#/home" class="fd3-more-home-btn" data-link>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        \u0E40\u0E1B\u0E34\u0E14 Handbook \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14
      </a>
    </div>
  </div>
</section>

</div>
`;
  }

  // js/pages/orientation.js
  var renderOrientation = () => pageWrap({
    crumbs: [["Home", "#/home"], ["Getting Started", null], ["Orientation", null]],
    title: "Orientation",
    lead: "\u0E17\u0E1A\u0E17\u0E27\u0E19\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E1F\u0E31\u0E07\u0E43\u0E19 Orientation \u2014 slides, \u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21, \u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E08\u0E30\u0E44\u0E14\u0E49\u0E17\u0E33 \u0E41\u0E25\u0E30\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E1B\u0E23\u0E30\u0E42\u0E22\u0E0A\u0E19\u0E4C\u0E15\u0E48\u0E32\u0E07 \u0E46",
    toc: [
      ["slides", "\u0E2A\u0E44\u0E25\u0E14\u0E4C\u0E1B\u0E10\u0E21\u0E19\u0E34\u0E40\u0E17\u0E28"],
      ["values", "EXZY Core Values"],
      ["intro", "\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A EXZY"],
      ["projects", "\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E08\u0E30\u0E44\u0E14\u0E49\u0E17\u0E33"],
      ["benefits", "\u0E40\u0E1A\u0E35\u0E49\u0E22\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21"],
      ["next", "\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E16\u0E31\u0E14\u0E44\u0E1B"]
    ],
    body: `
    <h2 id="slides">\u0E2A\u0E44\u0E25\u0E14\u0E4C\u0E1B\u0E10\u0E21\u0E19\u0E34\u0E40\u0E17\u0E28</h2>
    <p>\u0E2A\u0E23\u0E38\u0E1B\u0E17\u0E38\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E1F\u0E31\u0E07\u0E43\u0E19\u0E27\u0E31\u0E19 Orientation \u0E44\u0E27\u0E49\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48 \u2014 \u0E40\u0E1B\u0E34\u0E14\u0E14\u0E39\u0E44\u0E14\u0E49\u0E40\u0E2A\u0E21\u0E2D \u0E2B\u0E23\u0E37\u0E2D\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49</p>

    <div class="slides-full-embed" id="slides-embed-area">
      <div class="slides-embed-header">
        <span class="slides-icon">${I.book}</span>
        <span class="slides-title" data-text="orientation_slides_name">Mini Internship Orientation</span>
        <div class="slides-embed-actions">
          <a href="#" data-link-key="orientation_slides_url" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">\u0E40\u0E1B\u0E34\u0E14\u0E41\u0E17\u0E47\u0E1A\u0E43\u0E2B\u0E21\u0E48 ${I.external}</a>
          <a href="#" data-link-key="orientation_pdf_url" download="Mini-Internship-Orientation.pdf" class="btn btn-primary btn-sm">${I.download} \u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14 PDF</a>
        </div>
      </div>
      <div class="slides-embed-body" id="slides-embed-body">
        <div class="slides-embed-empty">\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E44\u0E25\u0E14\u0E4C\u0E1B\u0E10\u0E21\u0E19\u0E34\u0E40\u0E17\u0E28\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19\u0E02\u0E13\u0E30\u0E19\u0E35\u0E49</div>
      </div>
    </div>

    <h2 id="values">EXZY Core Values</h2>
    <p>5 \u0E41\u0E19\u0E27\u0E04\u0E34\u0E14\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E40\u0E1A\u0E37\u0E49\u0E2D\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E17\u0E38\u0E01\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48 EXZY \u2014 \u0E04\u0E38\u0E13\u0E08\u0E30\u0E44\u0E14\u0E49\u0E40\u0E2B\u0E47\u0E19\u0E41\u0E25\u0E30\u0E43\u0E0A\u0E49\u0E2A\u0E34\u0E48\u0E07\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E35\u0E49\u0E17\u0E38\u0E01\u0E27\u0E31\u0E19</p>

    <!-- Compact CV Preview -->
    <div class="cv-wrap" style="gap:12px; margin-bottom:20px;">
      ${[
      { c: "cv-c1", num: "01", name: "Win as a Team", tag: "Goal \xB7 Work+ \xB7 Support" },
      { c: "cv-c2", num: "02", name: "Innovative", tag: "Value added \xB7 Learn \xB7 Take risk" },
      { c: "cv-c3", num: "03", name: "Positive & Open", tag: "Energy \xB7 Listening \xB7 Speaking" },
      { c: "cv-c4", num: "04", name: "Professional & Dynamic", tag: "Adapt \xB7 Commit \xB7 Prepare" },
      { c: "cv-c5", num: "05", name: "Aesthetic Design", tag: "Tidiness \xB7 Experience \xB7 WOW" }
    ].map((v, i) => `
        <div class="cv-card ${v.c} anim-up" data-delay="${i * 50}" style="--gap:0">
          <div class="cv-card-head" style="padding:18px 24px; gap:16px;">
            <div class="cv-card-big-num" style="font-size:2rem;">${v.num}</div>
            <div class="cv-card-text-col">
              <div class="cv-card-name" style="font-size:1rem;">${v.name}</div>
              <p class="cv-card-tagline" style="font-size:12.5px;">${v.tag}</p>
            </div>
          </div>
        </div>
      `).join("")}
    </div>

    <a href="#/policy/code-of-conduct" class="btn btn-ghost" data-link style="margin-top:4px;">\u0E14\u0E39 Core Values \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ${I.arrow}</a>

    <h2 id="intro">\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A EXZY</h2>
    <p><strong>"Excellence by design, Advance by technology"</strong></p>
    <p>EXZY \u0E04\u0E37\u0E2D\u0E1C\u0E39\u0E49\u0E40\u0E0A\u0E35\u0E48\u0E22\u0E27\u0E0A\u0E32\u0E0D\u0E14\u0E49\u0E32\u0E19 <strong>Smart Office Solution</strong> \u0E41\u0E1A\u0E1A\u0E04\u0E23\u0E1A\u0E27\u0E07\u0E08\u0E23 \u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A \u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 \u0E44\u0E1B\u0E08\u0E19\u0E16\u0E36\u0E07\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E33\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E22\u0E38\u0E04\u0E43\u0E2B\u0E21\u0E48 \u0E17\u0E31\u0E49\u0E07\u0E23\u0E30\u0E1A\u0E1A\u0E08\u0E2D\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21 \u0E23\u0E30\u0E1A\u0E1A\u0E40\u0E02\u0E49\u0E32-\u0E2D\u0E2D\u0E01\u0E2D\u0E31\u0E08\u0E09\u0E23\u0E34\u0E22\u0E30 Video Conference \u0E41\u0E25\u0E30 Digital Signage \u2014 \u0E43\u0E19\u0E10\u0E32\u0E19\u0E30 Intern \u0E04\u0E38\u0E13\u0E08\u0E30\u0E44\u0E14\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E02\u0E2D\u0E07\u0E17\u0E35\u0E21\u0E08\u0E23\u0E34\u0E07 \u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E41\u0E04\u0E48\u0E2A\u0E31\u0E07\u0E40\u0E01\u0E15\u0E01\u0E32\u0E23\u0E13\u0E4C</p>
    <p style="font-size:13.5px; color: var(--ink-muted);">\u0E2D\u0E22\u0E32\u0E01\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01 EXZY \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21? <a href="https://www.exzysmartoffice.com" target="_blank" rel="noopener" class="inline-link">\u0E40\u0E22\u0E35\u0E48\u0E22\u0E21\u0E0A\u0E21\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C ${I.external}</a></p>

    <h2 id="projects">\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E08\u0E30\u0E44\u0E14\u0E49\u0E17\u0E33</h2>
    <p>\u0E15\u0E25\u0E2D\u0E14\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 Intern \u0E17\u0E38\u0E01\u0E04\u0E19\u0E08\u0E30\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C <strong>3 \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17</strong> \u2014 \u0E41\u0E15\u0E48\u0E25\u0E30\u0E41\u0E1A\u0E1A\u0E21\u0E35\u0E08\u0E38\u0E14\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E15\u0E48\u0E32\u0E07\u0E01\u0E31\u0E19</p>

    <div class="proj-cards">
      <div class="proj-card anim-up">
        <div class="proj-num">01</div>
        <h4>Project or Report</h4>
        <p>\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A\u0E14\u0E39\u0E41\u0E25\u0E41\u0E25\u0E30\u0E19\u0E33\u0E2A\u0E48\u0E07\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22</p>
      </div>
      <div class="proj-card anim-up" data-delay="80">
        <div class="proj-num">02</div>
        <h4>Team Project</h4>
        <p>\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E02\u0E2D\u0E07\u0E41\u0E15\u0E48\u0E25\u0E30 Team Assign \u0E43\u0E2B\u0E49\u0E15\u0E32\u0E21\u0E17\u0E31\u0E01\u0E29\u0E30\u0E41\u0E25\u0E30\u0E2A\u0E32\u0E22\u0E07\u0E32\u0E19</p>
      </div>
      <div class="proj-card anim-up" data-delay="160">
        <div class="proj-num">03</div>
        <h4>HR Project</h4>
        <p>\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E17\u0E35\u0E48 HR Assign \u0E43\u0E2B\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19\u0E07\u0E32\u0E19\u0E20\u0E32\u0E22\u0E43\u0E19\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23</p>
      </div>
    </div>

    <div class="callout anim-up" style="margin-top:20px;">
      <span class="ic">${I.info}</span>
      <div>
        <h4>\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38</h4>
        <p>\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E2D\u0E32\u0E08\u0E41\u0E15\u0E01\u0E15\u0E48\u0E32\u0E07\u0E01\u0E31\u0E19\u0E15\u0E32\u0E21\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22\u0E2B\u0E23\u0E37\u0E2D\u0E17\u0E31\u0E01\u0E29\u0E30 \u2014 Intern \u0E17\u0E38\u0E01\u0E04\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07</p>
      </div>
    </div>

    <h2 id="benefits">\u0E40\u0E1A\u0E35\u0E49\u0E22\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21</h2>

    <!-- Benefits mini-cards -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:20px 0 28px;">
      <div style="background:linear-gradient(135deg,rgba(102,197,197,.08),rgba(0,64,128,.04)); border:1px solid rgba(102,197,197,.25); border-radius:var(--radius); padding:20px;">
        <div style="font-size:10.5px; font-weight:800; letter-spacing:.1em; text-transform:uppercase; color:var(--cyan); margin-bottom:8px;">\u0E43\u0E19\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28</div>
        <div style="font-family:var(--display); font-size:2.2rem; font-weight:900; color:var(--ink); line-height:1;">200 \u0E3F</div>
        <div style="font-size:13px; color:var(--muted); margin-top:4px;">\u0E15\u0E48\u0E2D\u0E27\u0E31\u0E19</div>
      </div>
      <div style="background:linear-gradient(135deg,rgba(245,158,11,.08),rgba(245,158,11,.03)); border:1px solid rgba(245,158,11,.25); border-radius:var(--radius); padding:20px;">
        <div style="font-size:10.5px; font-weight:800; letter-spacing:.1em; text-transform:uppercase; color:#D97706; margin-bottom:8px;">\u0E19\u0E2D\u0E01\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48</div>
        <div style="font-family:var(--display); font-size:2.2rem; font-weight:900; color:var(--ink); line-height:1;">300 \u0E3F</div>
        <div style="font-size:13px; color:var(--muted); margin-top:4px;">\u0E15\u0E48\u0E2D\u0E27\u0E31\u0E19</div>
      </div>
    </div>

    <p>\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E23\u0E31\u0E1A\u0E40\u0E1A\u0E35\u0E49\u0E22\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07 (\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E48\u0E07\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331 \u0E02\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19):</p>
    <ul>
      <li>\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E0B\u0E47\u0E19\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 \u2014 \u0E2A\u0E48\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</li>
      <li>\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 Intern Timesheet \u2014 <a href="#/resources/timesheet" data-link class="inline-link">\u0E14\u0E39\u0E27\u0E34\u0E18\u0E35\u0E01\u0E23\u0E2D\u0E01</a> \u2014 \u0E2A\u0E48\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</li>
      <li>\u0E2A\u0E33\u0E40\u0E19\u0E32 Bookbank \u0E02\u0E2D\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19 \u2014 \u0E2A\u0E48\u0E07\u0E41\u0E04\u0E48\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E41\u0E23\u0E01</li>
      <li style="margin-top:6px;color:var(--navy);font-weight:600;">\u{1F4C5} \u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E48\u0E07: \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331 \u0E02\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19 \xB7 \u{1F4C4} \u0E27\u0E34\u0E18\u0E35\u0E2A\u0E48\u0E07: \u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2D\u0E2D\u0E01\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29\u0E41\u0E25\u0E30\u0E22\u0E37\u0E48\u0E19\u0E43\u0E2B\u0E49 HR \u0E17\u0E35\u0E48\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28</li>
    </ul>

    <h3>Workshop \u0E41\u0E25\u0E30 Dining</h3>
    <p>EXZY \u0E08\u0E31\u0E14\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 Workshop \u0E40\u0E2A\u0E23\u0E34\u0E21\u0E17\u0E31\u0E01\u0E29\u0E30 \u0E41\u0E25\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 Dining \u0E1B\u0E23\u0E30\u0E08\u0E33\u0E40\u0E14\u0E37\u0E2D\u0E19/\u0E17\u0E35\u0E21 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E31\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E4C\u0E17\u0E35\u0E48\u0E14\u0E35\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E48\u0E27\u0E21\u0E07\u0E32\u0E19</p>
    <div class="callout callout-note anim-up" style="margin-top:12px;">
      <span class="ic">${I.info}</span>
      <div><p>Intern \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E2A\u0E19\u0E43\u0E08 \u0E41\u0E25\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E44\u0E14\u0E49\u0E15\u0E32\u0E21\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E43\u0E08</p></div>
    </div>

    <div id="next" class="also-explore anim-up" style="margin-top:40px;">
      <div class="ae-label">\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48</div>
      <div class="ae-links">
        <a href="#/policy/code-of-conduct" class="ae-chip" data-link>${I.shield} Core Values</a>
        <a href="#/policy/internship" class="ae-chip" data-link>${I.clock} Internship Policy</a>
        <a href="#/resources/timesheet" class="ae-chip" data-link>${I.doc} Timesheet</a>
        <a href="#/employee/org-chart" class="ae-chip" data-link>${I.people} \u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23</a>
      </div>
    </div>
  `
  });

  // js/pages/wifi.js
  var renderWifi = () => pageWrap({
    crumbs: [["Home", "#/home"], ["Getting Started", null], ["Office Wi-Fi", null]],
    title: "Office Wi-Fi",
    lead: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 \u0E41\u0E25\u0E49\u0E27\u0E2A\u0E41\u0E01\u0E19 QR \u0E2B\u0E23\u0E37\u0E2D\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22",
    body: `
    <!-- Network type selector -->
    <div class="wn-selector">
      <button class="wn-sel-btn wn-sel-active" data-wifi-tab-v2="staff">
        <span class="wn-sel-pip"></span>
        <div class="wn-sel-info">
          <span class="wn-sel-title">\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19 / Intern</span>
          <span class="wn-sel-ssid">ExzyUniFi</span>
        </div>
      </button>
      <button class="wn-sel-btn wn-sel-guest" data-wifi-tab-v2="guest">
        <span class="wn-sel-pip wn-pip-guest"></span>
        <div class="wn-sel-info">
          <span class="wn-sel-title">\u0E41\u0E02\u0E01 (Guest)</span>
          <span class="wn-sel-ssid">Exzy_Guest</span>
        </div>
      </button>
    </div>

    <!-- Staff panel -->
    <div class="wn-panel" data-wifi-panel-v2="staff">
      <div class="wn-main">
        <!-- QR side -->
        <div class="wn-qr-side">
          <div class="wn-qr-box">
            <div class="wn-qr" data-qr="staff"></div>
          </div>
          <p class="wn-qr-tip">\u0E40\u0E1B\u0E34\u0E14\u0E01\u0E25\u0E49\u0E2D\u0E07 \u2192 \u0E0A\u0E35\u0E49\u0E17\u0E35\u0E48 QR \u2192 \u0E01\u0E14 \u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D</p>
        </div>
        <!-- Info side -->
        <div class="wn-info-side">
          <div class="wn-network-badge">STAFF NETWORK</div>
          <div class="wn-cred">
            <div class="wn-cred-row">
              <span class="wn-cred-k">Network (SSID)</span>
              <div class="wn-cred-v">
                <code data-text="wifi_staff_ssid">ExzyUniFi</code>
                <button class="wn-copy" data-copy="wifi_staff_ssid" title="\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
            <div class="wn-cred-row">
              <span class="wn-cred-k">Password</span>
              <div class="wn-cred-v">
                <code class="wifi-pass-dots" id="v2-staff-pass-display">\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022</code>
                <button class="wn-copy" id="v2-staff-pass-toggle" title="\u0E41\u0E2A\u0E14\u0E07">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
                <button class="wn-copy" data-copy="wifi_staff_pass" title="\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
          </div>
          <button class="wn-connect-btn wf2-connect-btn" data-wifi="staff">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
            \u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A + \u0E40\u0E1B\u0E34\u0E14 Wi-Fi Settings
          </button>
          <p class="wn-note">\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19 / Intern \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 \u2014 \u0E44\u0E21\u0E48\u0E41\u0E0A\u0E23\u0E4C\u0E01\u0E31\u0E1A\u0E1A\u0E38\u0E04\u0E04\u0E25\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01</p>
        </div>
      </div>
    </div>

    <!-- Guest panel -->
    <div class="wn-panel wn-panel-guest" data-wifi-panel-v2="guest" hidden>
      <div class="wn-main">
        <div class="wn-qr-side">
          <div class="wn-qr-box wn-qr-box-guest">
            <div class="wn-qr" data-qr="guest"></div>
          </div>
          <p class="wn-qr-tip">\u0E40\u0E1B\u0E34\u0E14\u0E01\u0E25\u0E49\u0E2D\u0E07 \u2192 \u0E0A\u0E35\u0E49\u0E17\u0E35\u0E48 QR \u2192 \u0E01\u0E14 \u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D</p>
        </div>
        <div class="wn-info-side">
          <div class="wn-network-badge wn-badge-guest">GUEST NETWORK</div>
          <div class="wn-cred">
            <div class="wn-cred-row">
              <span class="wn-cred-k">Network (SSID)</span>
              <div class="wn-cred-v">
                <code data-text="wifi_guest_ssid">Exzy_Guest</code>
                <button class="wn-copy" data-copy="wifi_guest_ssid" title="\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
            <div class="wn-cred-row">
              <span class="wn-cred-k">Password</span>
              <div class="wn-cred-v">
                <code class="wifi-pass-dots" id="v2-guest-pass-display">\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022</code>
                <button class="wn-copy" id="v2-guest-pass-toggle" title="\u0E41\u0E2A\u0E14\u0E07">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
                <button class="wn-copy" data-copy="wifi_guest_pass" title="\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
          </div>
          <button class="wn-connect-btn wn-connect-guest wf2-connect-btn" data-wifi="guest">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
            \u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A + \u0E40\u0E1B\u0E34\u0E14 Wi-Fi Settings
          </button>
          <p class="wn-note">\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E41\u0E02\u0E01\u0E17\u0E35\u0E48\u0E21\u0E32\u0E40\u0E22\u0E37\u0E2D\u0E19\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 \u2014 \u0E41\u0E0A\u0E23\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E01\u0E31\u0E1A\u0E04\u0E19\u0E17\u0E35\u0E48\u0E21\u0E32\u0E1E\u0E1A\u0E01\u0E31\u0E19\u0E08\u0E23\u0E34\u0E07 \u0E46</p>
        </div>
      </div>
    </div>

    <!-- How to connect steps -->
    <div class="wn-how">
      <div class="wn-how-label">\u0E27\u0E34\u0E18\u0E35\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D</div>
      <div class="wn-how-steps">
        <div class="wn-how-step">
          <div class="wn-how-n">1</div>
          <div class="wn-how-content">
            <div class="wn-how-title">\u0E2A\u0E41\u0E01\u0E19 QR Code</div>
            <div class="wn-how-desc">\u0E40\u0E1B\u0E34\u0E14\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E16\u0E37\u0E2D \u0E0A\u0E35\u0E49\u0E17\u0E35\u0E48 QR \u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19 \u2014 \u0E01\u0E14\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D Wi-Fi \u0E17\u0E31\u0E19\u0E17\u0E35</div>
          </div>
        </div>
        <div class="wn-how-sep">\u0E2B\u0E23\u0E37\u0E2D</div>
        <div class="wn-how-step">
          <div class="wn-how-n">2</div>
          <div class="wn-how-content">
            <div class="wn-how-title">\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A</div>
            <div class="wn-how-desc">\u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21 "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A" \u2014 \u0E23\u0E2B\u0E31\u0E2A\u0E08\u0E30\u0E16\u0E39\u0E01\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E44\u0E1B clipboard \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E1B\u0E34\u0E14 Settings</div>
          </div>
        </div>
        <div class="wn-how-step">
          <div class="wn-how-n">3</div>
          <div class="wn-how-content">
            <div class="wn-how-title">\u0E40\u0E25\u0E37\u0E2D\u0E01 SSID \u0E41\u0E25\u0E49\u0E27\u0E27\u0E32\u0E07\u0E23\u0E2B\u0E31\u0E2A</div>
            <div class="wn-how-desc">\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22 \u2192 \u0E27\u0E32\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19 \u2192 \u0E01\u0E14 \u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D</div>
          </div>
        </div>
      </div>
    </div>

    <div class="callout" style="margin-top:28px;">
      <span class="ic">${I.shield}</span>
      <div>
        <h4>\u0E23\u0E31\u0E01\u0E29\u0E32\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22</h4>
        <p>\u0E23\u0E2B\u0E31\u0E2A Staff Wi-Fi \u0E43\u0E0A\u0E49\u0E20\u0E32\u0E22\u0E43\u0E19\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 \u2014 \u0E16\u0E49\u0E32\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E43\u0E2B\u0E49\u0E41\u0E08\u0E49\u0E07 IT \u0E2B\u0E23\u0E37\u0E2D\u0E1E\u0E35\u0E48\u0E43\u0E19\u0E17\u0E35\u0E21</p>
      </div>
    </div>
  `
  });

  // js/pages/meeting-rooms.js
  var renderMeetingRooms = () => pageWrap({
    crumbs: [["Home", "#/home"], ["Getting Started", null], ["Meeting Rooms", null]],
    title: "Meeting Rooms",
    lead: "\u0E2B\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E43\u0E19\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 EXZY \u0E21\u0E35\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 4 \u0E2B\u0E49\u0E2D\u0E07\u0E01\u0E23\u0E30\u0E08\u0E32\u0E22\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19 2 \u0E0A\u0E31\u0E49\u0E19 \u2014 \u0E08\u0E2D\u0E07\u0E44\u0E14\u0E49\u0E2B\u0E25\u0E32\u0E22\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E15\u0E32\u0E21\u0E2A\u0E30\u0E14\u0E27\u0E01",
    body: `
    <!-- Overview Stats -->
    <div class="mr-overview anim-up">
      <div class="mr-ov-item">
        <div class="mr-ov-icon-wrap">${I.door}</div>
        <span class="mr-ov-num" data-count-to="4">4</span>
        <span class="mr-ov-lbl">\u0E2B\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21</span>
      </div>
      <div class="mr-ov-sep"></div>
      <div class="mr-ov-item">
        <div class="mr-ov-icon-wrap"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/></svg></div>
        <span class="mr-ov-num" data-count-to="2">2</span>
        <span class="mr-ov-lbl">\u0E0A\u0E31\u0E49\u0E19</span>
      </div>
      <div class="mr-ov-sep"></div>
      <div class="mr-ov-item">
        <div class="mr-ov-icon-wrap">${I.calendar}</div>
        <span class="mr-ov-num">3</span>
        <span class="mr-ov-lbl">\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E08\u0E2D\u0E07</span>
      </div>
    </div>

    <!-- Floor 1 -->
    <div class="mr-v2-section">
      <div class="mr-v2-floor-label anim-left">
        <span class="mr-v2-floor-badge">\u0E0A\u0E31\u0E49\u0E19 1</span>
        <div class="mr-v2-floor-line"></div>
        <span class="mr-v2-floor-cnt">1 \u0E2B\u0E49\u0E2D\u0E07</span>
      </div>

      <div class="mr-v2-main anim-up" data-delay="80">
        <div class="mr-v2-vis">
          <svg class="mr-room-plan" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="8" width="224" height="144" rx="10" stroke="rgba(102,197,197,0.45)" stroke-width="2" fill="rgba(102,197,197,0.04)"/>
            <rect x="58" y="46" width="124" height="68" rx="6" stroke="rgba(0,64,128,0.35)" stroke-width="2" fill="rgba(0,64,128,0.07)"/>
            <rect x="38" y="57" width="12" height="10" rx="2" fill="rgba(0,64,128,0.22)"/><rect x="38" y="74" width="12" height="10" rx="2" fill="rgba(0,64,128,0.22)"/>
            <rect x="190" y="57" width="12" height="10" rx="2" fill="rgba(0,64,128,0.22)"/><rect x="190" y="74" width="12" height="10" rx="2" fill="rgba(0,64,128,0.22)"/>
            <rect x="70" y="28" width="12" height="11" rx="2" fill="rgba(0,64,128,0.22)"/><rect x="100" y="28" width="12" height="11" rx="2" fill="rgba(0,64,128,0.22)"/><rect x="130" y="28" width="12" height="11" rx="2" fill="rgba(0,64,128,0.22)"/><rect x="160" y="28" width="12" height="11" rx="2" fill="rgba(0,64,128,0.22)"/>
            <rect x="70" y="121" width="12" height="11" rx="2" fill="rgba(0,64,128,0.22)"/><rect x="100" y="121" width="12" height="11" rx="2" fill="rgba(0,64,128,0.22)"/><rect x="130" y="121" width="12" height="11" rx="2" fill="rgba(0,64,128,0.22)"/><rect x="160" y="121" width="12" height="11" rx="2" fill="rgba(0,64,128,0.22)"/>
            <rect x="18" y="56" width="6" height="48" rx="3" fill="rgba(102,197,197,0.55)"/>
            <circle cx="120" cy="80" r="22" stroke="rgba(102,197,197,0.18)" stroke-width="1.5" fill="none"/>
          </svg>
          <div class="mr-v2-vis-cap">${I.people}&ensp;6\u20138 \u0E17\u0E48\u0E32\u0E19</div>
        </div>
        <div class="mr-v2-info">
          <div class="mr-v2-head">
            <div class="mr-v2-name"><span>X</span>cellent</div>
            <span class="mr-room-badge mr-room-closed">\u0E2B\u0E49\u0E2D\u0E07\u0E1B\u0E34\u0E14</span>
          </div>
          <p class="mr-v2-desc">\u0E2B\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E2B\u0E25\u0E31\u0E01\u0E02\u0E2D\u0E07\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 \u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E20\u0E32\u0E22\u0E43\u0E19\u0E17\u0E35\u0E21 \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32\u0E2B\u0E23\u0E37\u0E2D\u0E41\u0E02\u0E01\u0E08\u0E32\u0E01\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01</p>
          <div class="mr-v2-meta">
            <div class="mr-v2-meta-item">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              6\u20138 \u0E04\u0E19
            </div>
            <div class="mr-v2-meta-item">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
              \u0E0A\u0E31\u0E49\u0E19 1
            </div>
          </div>
          <div class="mr-v2-tags">
            <span class="mr-v2-tag">\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E20\u0E32\u0E22\u0E43\u0E19</span>
            <span class="mr-v2-tag">\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32 / \u0E41\u0E02\u0E01</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Floor 2 -->
    <div class="mr-v2-section">
      <div class="mr-v2-floor-label anim-left" data-delay="80">
        <span class="mr-v2-floor-badge">\u0E0A\u0E31\u0E49\u0E19 2</span>
        <div class="mr-v2-floor-line"></div>
        <span class="mr-v2-floor-cnt">3 \u0E2B\u0E49\u0E2D\u0E07</span>
      </div>

      <div class="mr-v2-grid">
        <div class="mr-v2-card anim-up" data-delay="100">
          <div class="mr-v2-card-vis">
            <svg viewBox="0 0 160 96" fill="none">
              <rect x="5" y="5" width="150" height="86" rx="6" stroke="rgba(102,197,197,0.4)" stroke-width="1.5" fill="rgba(102,197,197,0.04)"/>
              <rect x="20" y="26" width="34" height="20" rx="3" stroke="rgba(0,64,128,0.3)" stroke-width="1.5" fill="rgba(0,64,128,0.06)"/>
              <rect x="63" y="26" width="34" height="20" rx="3" stroke="rgba(0,64,128,0.3)" stroke-width="1.5" fill="rgba(0,64,128,0.06)"/>
              <rect x="106" y="26" width="34" height="20" rx="3" stroke="rgba(0,64,128,0.3)" stroke-width="1.5" fill="rgba(0,64,128,0.06)"/>
              <rect x="42" y="58" width="76" height="16" rx="3" stroke="rgba(0,64,128,0.3)" stroke-width="1.5" fill="rgba(0,64,128,0.06)"/>
            </svg>
          </div>
          <div class="mr-v2-card-body">
            <div class="mr-v2-card-head">
              <div class="mr-v2-card-name"><span>X</span>pert Area</div>
              <span class="mr-room-badge mr-room-open">\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14</span>
            </div>
            <div class="mr-v2-cap">${I.people}<span>6\u20138 \u0E17\u0E48\u0E32\u0E19</span></div>
            <p class="mr-v2-card-desc">\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E42\u0E15\u0E4A\u0E30\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E41\u0E1A\u0E1A\u0E40\u0E1B\u0E34\u0E14\u0E42\u0E25\u0E48\u0E07 \u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E14\u0E21\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E01\u0E25\u0E38\u0E48\u0E21</p>
            <div class="mr-v2-tags">
              <span class="mr-v2-tag">\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E01\u0E25\u0E38\u0E48\u0E21</span>
              <span class="mr-v2-tag">\u0E23\u0E30\u0E14\u0E21\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14</span>
            </div>
          </div>
        </div>

        <div class="mr-v2-card anim-up" data-delay="200">
          <div class="mr-v2-card-vis">
            <svg viewBox="0 0 160 96" fill="none">
              <rect x="5" y="5" width="150" height="86" rx="6" stroke="rgba(102,197,197,0.4)" stroke-width="1.5" fill="rgba(102,197,197,0.04)"/>
              <rect x="42" y="32" width="76" height="38" rx="4" stroke="rgba(0,64,128,0.3)" stroke-width="1.5" fill="rgba(0,64,128,0.06)"/>
              <rect x="24" y="39" width="10" height="9" rx="2" fill="rgba(0,64,128,0.22)"/>
              <rect x="126" y="39" width="10" height="9" rx="2" fill="rgba(0,64,128,0.22)"/>
              <rect x="52" y="18" width="10" height="8" rx="2" fill="rgba(0,64,128,0.22)"/>
              <rect x="75" y="18" width="10" height="8" rx="2" fill="rgba(0,64,128,0.22)"/>
              <rect x="98" y="18" width="10" height="8" rx="2" fill="rgba(0,64,128,0.22)"/>
            </svg>
          </div>
          <div class="mr-v2-card-body">
            <div class="mr-v2-card-head">
              <div class="mr-v2-card-name"><span>X</span>tream Room</div>
              <span class="mr-room-badge mr-room-closed">\u0E2B\u0E49\u0E2D\u0E07\u0E1B\u0E34\u0E14</span>
            </div>
            <div class="mr-v2-cap">${I.people}<span>3\u20135 \u0E17\u0E48\u0E32\u0E19</span></div>
            <p class="mr-v2-card-desc">\u0E2B\u0E49\u0E2D\u0E07\u0E02\u0E19\u0E32\u0E14\u0E01\u0E25\u0E32\u0E07 \u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E01\u0E25\u0E38\u0E48\u0E21\u0E40\u0E25\u0E47\u0E01\u0E2B\u0E23\u0E37\u0E2D Workshop</p>
            <div class="mr-v2-tags">
              <span class="mr-v2-tag">\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E01\u0E25\u0E38\u0E48\u0E21\u0E40\u0E25\u0E47\u0E01</span>
              <span class="mr-v2-tag">Workshop</span>
            </div>
          </div>
        </div>

        <div class="mr-v2-card anim-up" data-delay="300">
          <div class="mr-v2-card-vis">
            <svg viewBox="0 0 160 96" fill="none">
              <rect x="5" y="5" width="150" height="86" rx="6" stroke="rgba(102,197,197,0.4)" stroke-width="1.5" fill="rgba(102,197,197,0.04)"/>
              <rect x="54" y="32" width="52" height="30" rx="4" stroke="rgba(0,64,128,0.3)" stroke-width="1.5" fill="rgba(0,64,128,0.06)"/>
              <rect x="35" y="37" width="10" height="9" rx="2" fill="rgba(0,64,128,0.22)"/>
              <rect x="115" y="37" width="10" height="9" rx="2" fill="rgba(0,64,128,0.22)"/>
              <rect x="63" y="18" width="10" height="8" rx="2" fill="rgba(0,64,128,0.22)"/>
              <rect x="87" y="18" width="10" height="8" rx="2" fill="rgba(0,64,128,0.22)"/>
            </svg>
          </div>
          <div class="mr-v2-card-body">
            <div class="mr-v2-card-head">
              <div class="mr-v2-card-name"><span>X</span>tar Room</div>
              <span class="mr-room-badge mr-room-closed">\u0E2B\u0E49\u0E2D\u0E07\u0E1B\u0E34\u0E14</span>
            </div>
            <div class="mr-v2-cap">${I.people}<span>2\u20133 \u0E17\u0E48\u0E32\u0E19</span></div>
            <p class="mr-v2-card-desc">\u0E2B\u0E49\u0E2D\u0E07\u0E02\u0E19\u0E32\u0E14\u0E40\u0E25\u0E47\u0E01 \u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A 1:1 \u0E2B\u0E23\u0E37\u0E2D\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E2A\u0E31\u0E49\u0E19\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E01\u0E34\u0E08</p>
            <div class="mr-v2-tags">
              <span class="mr-v2-tag">1:1</span>
              <span class="mr-v2-tag">Quick Sync</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="callout callout-warn anim-up">
      <span class="ic">${I.info}</span>
      <div>
        <h4>\u26A0\uFE0F Intern \u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E08\u0E2D\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E40\u0E2D\u0E07\u0E44\u0E14\u0E49\u0E42\u0E14\u0E22\u0E15\u0E23\u0E07</h4>
        <p>\u0E2B\u0E32\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E2B\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21 \u0E43\u0E2B\u0E49\u0E41\u0E08\u0E49\u0E07\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E08\u0E2D\u0E07\u0E41\u0E17\u0E19 \u2014 \u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E2D\u0E07\u0E2A\u0E07\u0E27\u0E19\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19 EXZY \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19</p>
      </div>
    </div>

    <!-- Booking Methods V2 -->
    <h2>\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E08\u0E2D\u0E07 (\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19)</h2>
    <p class="mr-book-lead">\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E08\u0E2D\u0E07\u0E1C\u0E48\u0E32\u0E19 3 \u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E19\u0E35\u0E49\u0E44\u0E14\u0E49\u0E15\u0E32\u0E21\u0E2A\u0E30\u0E14\u0E27\u0E01</p>
    <div class="book-method-grid">
      <div class="book-method-card anim-up" data-delay="0">
        <div class="book-method-num">01</div>
        <div class="book-method-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </div>
        <h4>Website</h4>
        <p><a href="https://exzyoffice.exzycloud.com" target="_blank" rel="noopener" class="inline-link">exzyoffice.exzycloud.com</a><br/>\u0E08\u0E2D\u0E07\u0E1C\u0E48\u0E32\u0E19\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C\u0E44\u0E14\u0E49\u0E17\u0E38\u0E01\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C</p>
      </div>
      <div class="book-method-card anim-up" data-delay="100">
        <div class="book-method-num">02</div>
        <div class="book-method-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 3v18M3 9h6M3 15h6"/></svg>
        </div>
        <h4>\u0E08\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07</h4>
        <p>\u0E41\u0E15\u0E30\u0E17\u0E35\u0E48\u0E41\u0E1C\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E15\u0E32\u0E23\u0E32\u0E07\u0E41\u0E25\u0E30\u0E08\u0E2D\u0E07\u0E0A\u0E48\u0E27\u0E07\u0E27\u0E48\u0E32\u0E07\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22</p>
      </div>
      <div class="book-method-card anim-up" data-delay="200">
        <div class="book-method-num">03</div>
        <div class="book-method-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="currentColor" stroke="none"/></svg>
        </div>
        <h4>App W+</h4>
        <p>\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14\u0E41\u0E2D\u0E1B W+ \u0E1A\u0E19\u0E21\u0E37\u0E2D\u0E16\u0E37\u0E2D \u2014 \u0E08\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E14\u0E39\u0E15\u0E32\u0E23\u0E32\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E44\u0E14\u0E49\u0E17\u0E38\u0E01\u0E17\u0E35\u0E48\u0E17\u0E38\u0E01\u0E40\u0E27\u0E25\u0E32</p>
      </div>
    </div>

    <div class="callout" style="margin-top:28px;">
      <span class="ic">${I.info}</span>
      <div>
        <h4>\u0E01\u0E48\u0E2D\u0E19\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E2B\u0E49\u0E2D\u0E07</h4>
        <p>\u0E40\u0E01\u0E47\u0E1A\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C \u0E1B\u0E34\u0E14\u0E44\u0E1F \u0E1B\u0E34\u0E14\u0E08\u0E2D \u0E41\u0E25\u0E30\u0E17\u0E34\u0E49\u0E07\u0E02\u0E22\u0E30\u0E01\u0E48\u0E2D\u0E19\u0E2D\u0E2D\u0E01\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07 \u2014 \u0E16\u0E49\u0E32\u0E40\u0E08\u0E2D\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E21\u0E35\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E41\u0E08\u0E49\u0E07 IT \u0E44\u0E14\u0E49\u0E40\u0E25\u0E22</p>
      </div>
    </div>

    <div class="page-cta-strip">
      <div>
        <h4>\u0E14\u0E39\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22\u0E27\u0E48\u0E32\u0E41\u0E15\u0E48\u0E25\u0E30\u0E17\u0E35\u0E21\u0E17\u0E33\u0E2D\u0E30\u0E44\u0E23</h4>
        <p>\u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23 EXZY \u2014 \u0E23\u0E39\u0E49\u0E44\u0E27\u0E49\u0E08\u0E30\u0E44\u0E14\u0E49\u0E23\u0E39\u0E49\u0E27\u0E48\u0E32\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E43\u0E04\u0E23\u0E15\u0E2D\u0E19\u0E44\u0E2B\u0E19</p>
      </div>
      <div class="cta-btns">
        <a href="#/employee/org-chart" class="btn btn-primary" data-link>\u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23 ${I.arrow}</a>
      </div>
    </div>
  `
  });

  // js/pages/org-chart.js
  var depts = [
    {
      title: "Business Development",
      abbr: "BD",
      color: "#66C5C5",
      icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
      desc: "\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08\u0E41\u0E25\u0E30\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E15\u0E25\u0E32\u0E14"
    },
    {
      title: "Marketing",
      abbr: "MKT",
      color: "#F59E0B",
      icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      desc: "\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E41\u0E1A\u0E23\u0E19\u0E14\u0E4C\u0E41\u0E25\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07 Awareness"
    },
    {
      title: "HR",
      abbr: "HR",
      color: "#10B981",
      icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      desc: "\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23\u0E41\u0E25\u0E30\u0E14\u0E39\u0E41\u0E25 Intern"
    },
    {
      title: "Accounting",
      abbr: "ACC",
      color: "#3B82F6",
      icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="8" y1="3" x2="8" y2="21"/><path d="M11 8h4M11 12h4M11 16h4"/></svg>`,
      desc: "\u0E01\u0E32\u0E23\u0E40\u0E07\u0E34\u0E19 \u0E1A\u0E31\u0E0D\u0E0A\u0E35 \u0E41\u0E25\u0E30\u0E40\u0E1A\u0E35\u0E49\u0E22\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07"
    },
    {
      title: "Development",
      abbr: "DEV",
      color: "#8B5CF6",
      icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      desc: "\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E0B\u0E2D\u0E1F\u0E15\u0E4C\u0E41\u0E27\u0E23\u0E4C\u0E41\u0E25\u0E30\u0E23\u0E30\u0E1A\u0E1A"
    },
    {
      title: "Solution Engineer",
      abbr: "SE",
      color: "#EC4899",
      icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 15.54a5 5 0 0 1 0-7.07"/></svg>`,
      desc: "\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 Solution"
    },
    {
      title: "Design",
      abbr: "DSN",
      color: "#F97316",
      icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 22L6.5 14.5C6.5 14.5 3 13 3 10c0-3 2-5 5-5"/></svg>`,
      desc: "\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A UX/UI \u0E41\u0E25\u0E30\u0E2A\u0E37\u0E48\u0E2D\u0E01\u0E23\u0E32\u0E1F\u0E34\u0E01"
    },
    {
      title: "IT Support",
      abbr: "ITS",
      color: "#06B6D4",
      icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
      desc: "\u0E14\u0E39\u0E41\u0E25\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C IT \u0E41\u0E25\u0E30 Network"
    },
    {
      title: "Sales",
      abbr: "SLS",
      color: "#EF4444",
      icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
      desc: "\u0E02\u0E32\u0E22\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E41\u0E25\u0E30\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E07 EXZY"
    }
  ];
  var renderOrgChart = () => pageWrap({
    crumbs: [["Home", "#/home"], ["Company", null], ["Org Chart", null]],
    title: "\u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23",
    lead: "EXZY \u0E21\u0E35 9 \u0E41\u0E1C\u0E19\u0E01\u0E2B\u0E25\u0E31\u0E01 \u2014 \u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01\u0E41\u0E15\u0E48\u0E25\u0E30\u0E1D\u0E48\u0E32\u0E22\u0E41\u0E25\u0E30\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A\u0E01\u0E48\u0E2D\u0E19\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01",
    body: `
    <!-- Company Header Card -->
    <div class="oc-company-card oc-company-card-sm anim-up">
      <div class="oc-company-eyebrow">Head Office \xB7 Bangkok</div>
      <div class="oc-company-name">EXZY Co., Ltd.</div>
      <div class="oc-company-tagline">"Excellence by design, Advance by technology"</div>
    </div>

    <!-- Connector -->
    <div class="oc-connector" aria-hidden="true">
      <div class="oc-connector-stem"></div>
      <div class="oc-connector-branch"></div>
    </div>

    <!-- Department Grid V2 -->
    <div class="oc-dept-grid">
      ${depts.map((d, i) => `
        <div class="oc-dept-v2 anim-up" data-delay="${i * 40}" style="--dv-color:${d.color}">
          <div class="oc-dept-v2-icon">${d.icon}</div>
          <div>
            <div class="oc-dept-v2-abbr">${d.abbr}</div>
            <div class="oc-dept-v2-name">${d.title}</div>
          </div>
          <div class="oc-dept-v2-desc">${d.desc}</div>
        </div>
      `).join("")}
    </div>

    <div class="callout" style="margin-top:48px;">
      <span class="ic">${I.info}</span>
      <div>
        <h4>\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E27\u0E48\u0E32\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E1C\u0E19\u0E01\u0E44\u0E2B\u0E19?</h4>
        <p>\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E07\u0E27\u0E25 \u2014 HR \u0E08\u0E30\u0E41\u0E08\u0E49\u0E07\u0E41\u0E1C\u0E19\u0E01\u0E41\u0E25\u0E30\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E43\u0E2B\u0E49\u0E04\u0E38\u0E13\u0E17\u0E23\u0E32\u0E1A\u0E01\u0E48\u0E2D\u0E19\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01 \xB7 \u0E14\u0E39\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E17\u0E35\u0E21\u0E44\u0E14\u0E49\u0E43\u0E19 <a href="#/employee/directory" data-link>Employee Directory</a></p>
      </div>
    </div>
  `
  });

  // js/pages/directory.js
  var renderDirectory = () => {
    if (!isDirectoryUnlocked()) {
      return pageWrap({
        crumbs: [["Home", "#/home"], ["Company", null], ["Employee Contact", null]],
        title: "Employee Contact",
        lead: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E16\u0E39\u0E01\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E44\u0E27\u0E49 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E43\u0E2A\u0E48\u0E23\u0E2B\u0E31\u0E2A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E14\u0E39\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25",
        body: `
        <div class="dir-gate">
          <div class="dir-gate-card anim-up">
            <div class="dir-gate-icon">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <h3 class="dir-gate-title">Protected Employee Contact</h3>
            <p class="dir-gate-desc">\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27\u0E02\u0E2D\u0E07\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19 \u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E23\u0E2B\u0E31\u0E2A\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E02\u0E49\u0E32\u0E14\u0E39\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D</p>
            <form class="dir-gate-form" id="dir-gate-form">
              <input type="password" class="dir-pw-input" id="dir-pw-input" placeholder="\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E14\u0E39\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25" autocomplete="off" />
              <button type="submit" class="dir-pw-btn" id="dir-pw-btn">${I.lock} \u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01</button>
            </form>
            <div class="dir-gate-err" id="dir-gate-err" hidden>${I.info} \u0E23\u0E2B\u0E31\u0E2A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 \u2014 \u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07 \u0E2B\u0E23\u0E37\u0E2D\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E23\u0E2B\u0E31\u0E2A\u0E43\u0E19 Admin Panel</div>
            <div class="dir-gate-hint">\u0E23\u0E2B\u0E31\u0E2A\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19: <code style="background:#f0f4f8;padding:2px 6px;border-radius:4px;font-size:12px;">hr@exzy</code> &nbsp;\xB7&nbsp; \u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48 Admin Panel</div>
          </div>
        </div>
      `
      });
    }
    const DATA = window.EMPLOYEE_DATA || { records: [], teams: [] };
    const emps = DATA.records.slice().sort((a, b) => {
      const na = parseInt((a.id || "").replace(/\D/g, ""), 10);
      const nb = parseInt((b.id || "").replace(/\D/g, ""), 10);
      const va = isNaN(na) ? Infinity : na;
      const vb = isNaN(nb) ? Infinity : nb;
      return va - vb;
    });
    const teams = [...new Set(emps.map((e) => e.team).filter(Boolean))].sort();
    return pageWrap({
      crumbs: [["Home", "#/home"], ["Company", null], ["Employee Directory", null]],
      title: "Employee Directory",
      lead: "\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E0A\u0E37\u0E48\u0E2D \u0E2D\u0E35\u0E40\u0E21\u0E25 \u0E2B\u0E23\u0E37\u0E2D\u0E17\u0E35\u0E21\u0E02\u0E2D\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E48\u0E27\u0E21\u0E07\u0E32\u0E19 \u2014 \u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E04\u0E49\u0E19\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22",
      body: `
      <div class="dir-topbar">
        <span class="dir-mode-badge">${I.lock} Protected Data</span>
        <button class="dir-lock-btn" id="dir-lock-btn" type="button">${I.lock} \u0E25\u0E47\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25</button>
      </div>

      <div class="dir-toolbar">
        <div class="dir-search">
          <span class="dir-search-ico">${I.search}</span>
          <input type="text" id="dir-q" placeholder="\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E14\u0E49\u0E27\u0E22\u0E23\u0E2B\u0E31\u0E2A, \u0E0A\u0E37\u0E48\u0E2D, \u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E48\u0E19, \u0E2D\u0E35\u0E40\u0E21\u0E25 \u0E2B\u0E23\u0E37\u0E2D\u0E17\u0E35\u0E21..." />
        </div>
        <select id="dir-team">
          <option value="">\u0E17\u0E38\u0E01\u0E17\u0E35\u0E21</option>
          ${teams.map((t) => `<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`).join("")}
        </select>
        <div class="dir-count" id="dir-count">${emps.length} \u0E04\u0E19</div>
      </div>

      <div class="dir-table-wrap">
        <table class="dir-table" id="dir-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>\u0E0A\u0E37\u0E48\u0E2D-\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25 (EN)</th>
              <th>\u0E0A\u0E37\u0E48\u0E2D (TH)</th>
              <th>\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E48\u0E19</th>
              <th>\u0E17\u0E35\u0E21</th>
              <th>\u0E2D\u0E35\u0E40\u0E21\u0E25</th>
              <th>\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23</th>
            </tr>
          </thead>
          <tbody id="dir-tbody">
            ${emps.map((e) => `
              <tr data-team="${escapeHtml(e.team || "")}" data-search="${escapeHtml(((e.id || "") + " " + (e.fullName || "") + " " + (e.thaiName || "") + " " + (e.nickname || "") + " " + (e.team || "") + " " + (e.email || "")).toLowerCase())}">
                <td class="dir-id">${escapeHtml(e.id || "\u2014")}</td>
                <td>${escapeHtml(e.fullName || "\u2014")}</td>
                <td>${escapeHtml(e.thaiName || "\u2014")}</td>
                <td>${escapeHtml(e.nickname || "\u2014")}</td>
                <td>${e.team ? `<span class="dir-tag">${escapeHtml(e.team)}</span>` : '<span class="dir-muted">\u2014</span>'}</td>
                <td>${e.email ? `<a href="mailto:${escapeHtml(e.email)}" class="dir-email">${escapeHtml(e.email)}</a>` : '<span class="dir-muted">\u2014</span>'}</td>
                <td>${escapeHtml(e.mobile || "") || '<span class="dir-muted">\u2014</span>'}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
        <div id="dir-empty" class="dir-empty" hidden>\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E19</div>
      </div>

      <div class="callout" style="margin-top:24px;">
        <span class="ic">${I.info}</span>
        <div>
          <h4>\u0E2B\u0E32\u0E44\u0E21\u0E48\u0E40\u0E08\u0E2D?</h4>
          <p>\u0E25\u0E2D\u0E07\u0E16\u0E32\u0E21\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07 \u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E48\u0E07\u0E40\u0E21\u0E25\u0E2B\u0E32 HR \u0E17\u0E35\u0E48 <a href="mailto:hr@exzyteam.com">hr@exzyteam.com</a> \u0E44\u0E14\u0E49\u0E40\u0E25\u0E22</p>
        </div>
      </div>
    `
    });
  };

  // js/pages/policy.js
  var renderCodeOfConduct = () => pageWrap({
    crumbs: [["Home", "#/home"], ["Work Policy", null], ["Core Values", null]],
    title: "EXZY Core Values",
    lead: "Excellence by design, Advance by technology \u2014 5 \u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E08\u0E30\u0E44\u0E14\u0E49\u0E22\u0E34\u0E19 \u0E44\u0E14\u0E49\u0E43\u0E0A\u0E49 \u0E41\u0E25\u0E30\u0E44\u0E14\u0E49\u0E40\u0E2B\u0E47\u0E19\u0E17\u0E38\u0E01\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48",
    body: `
    <div class="cv-wrap">

      <div class="cv-card cv-c1 anim-up" data-delay="0">
        <div class="cv-card-head">
          <div class="cv-card-num-col">
            <span class="cv-card-big-num">01</span>
          </div>
          <div class="cv-card-text-col">
            <div class="cv-card-name">Win as a Team</div>
            <p class="cv-card-tagline">\u0E23\u0E39\u0E49\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19 \u0E17\u0E33\u0E07\u0E32\u0E19\u0E2B\u0E19\u0E31\u0E01\u0E43\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E02\u0E2D\u0E07\u0E15\u0E19 \u0E41\u0E25\u0E30\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E17\u0E35\u0E21\u0E43\u0E2B\u0E49\u0E44\u0E1B\u0E16\u0E36\u0E07\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22\u0E01\u0E31\u0E19</p>
          </div>
        </div>
        <div class="cv-card-body">
          <div class="cv-point"><span class="cv-point-k">Goal</span><span class="cv-point-v">\u0E23\u0E39\u0E49\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E17\u0E35\u0E21 \u0E27\u0E32\u0E07\u0E41\u0E1C\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1A\u0E23\u0E23\u0E25\u0E38\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19</span></div>
          <div class="cv-point"><span class="cv-point-k">Work+</span><span class="cv-point-v">\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A\u0E07\u0E32\u0E19\u0E43\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E14\u0E35 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E17\u0E35\u0E21\u0E1A\u0E23\u0E23\u0E25\u0E38\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E44\u0E14\u0E49\u0E17\u0E31\u0E19\u0E40\u0E27\u0E25\u0E32</span></div>
          <div class="cv-point"><span class="cv-point-k">Support</span><span class="cv-point-v">\u0E1B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E27\u0E41\u0E25\u0E30\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19\u0E17\u0E35\u0E21 \u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48\u0E1E\u0E1A\u0E2D\u0E38\u0E1B\u0E2A\u0E23\u0E23\u0E04</span></div>
        </div>
      </div>

      <div class="cv-card cv-c2 anim-up" data-delay="80">
        <div class="cv-card-head">
          <div class="cv-card-num-col">
            <span class="cv-card-big-num">02</span>
          </div>
          <div class="cv-card-text-col">
            <div class="cv-card-name">Innovative</div>
            <p class="cv-card-tagline">\u0E01\u0E25\u0E49\u0E32\u0E04\u0E34\u0E14\u0E19\u0E2D\u0E01\u0E01\u0E23\u0E2D\u0E1A \u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E2A\u0E34\u0E48\u0E07\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E40\u0E2A\u0E21\u0E2D \u0E41\u0E25\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E38\u0E13\u0E04\u0E48\u0E32\u0E08\u0E32\u0E01\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35</p>
          </div>
        </div>
        <div class="cv-card-body">
          <div class="cv-point"><span class="cv-point-k">Value added</span><span class="cv-point-v">\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E38\u0E13\u0E04\u0E48\u0E32\u0E43\u0E2B\u0E21\u0E48\u0E14\u0E49\u0E27\u0E22 technology</span></div>
          <div class="cv-point"><span class="cv-point-k">Learn &amp; Improve</span><span class="cv-point-v">\u0E2D\u0E31\u0E1B\u0E2A\u0E01\u0E34\u0E25\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E40\u0E2A\u0E21\u0E2D \u0E44\u0E21\u0E48\u0E2B\u0E22\u0E38\u0E14\u0E1E\u0E31\u0E12\u0E19\u0E32</span></div>
          <div class="cv-point"><span class="cv-point-k">Take risk</span><span class="cv-point-v">\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E48\u0E22\u0E07 \u0E41\u0E25\u0E49\u0E27\u0E01\u0E25\u0E49\u0E32\u0E15\u0E31\u0E14\u0E2A\u0E34\u0E19\u0E43\u0E08</span></div>
        </div>
      </div>

      <div class="cv-card cv-c3 anim-up" data-delay="160">
        <div class="cv-card-head">
          <div class="cv-card-num-col">
            <span class="cv-card-big-num">03</span>
          </div>
          <div class="cv-card-text-col">
            <div class="cv-card-name">Positive &amp; Open</div>
            <p class="cv-card-tagline">\u0E21\u0E35\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E14\u0E35 \u0E40\u0E1B\u0E34\u0E14\u0E23\u0E31\u0E1A\u0E1F\u0E31\u0E07\u0E17\u0E38\u0E01\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19 \u0E41\u0E25\u0E30\u0E1E\u0E39\u0E14\u0E15\u0E23\u0E07\u0E44\u0E1B\u0E15\u0E23\u0E07\u0E21\u0E32\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2A\u0E23\u0E23\u0E04\u0E4C</p>
          </div>
        </div>
        <div class="cv-card-body">
          <div class="cv-point"><span class="cv-point-k">Energy</span><span class="cv-point-v">\u0E01\u0E23\u0E30\u0E15\u0E37\u0E2D\u0E23\u0E37\u0E2D\u0E23\u0E49\u0E19 \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1A\u0E23\u0E23\u0E22\u0E32\u0E01\u0E32\u0E28\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E14\u0E35</span></div>
          <div class="cv-point"><span class="cv-point-k">Listening</span><span class="cv-point-v">\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E08\u0E23\u0E31\u0E1A\u0E1F\u0E31\u0E07\u0E44\u0E2D\u0E40\u0E14\u0E35\u0E22\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19\u0E17\u0E35\u0E48\u0E41\u0E15\u0E01\u0E15\u0E48\u0E32\u0E07</span></div>
          <div class="cv-point"><span class="cv-point-k">Speaking</span><span class="cv-point-v">\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E08\u0E23\u0E34\u0E07\u0E43\u0E08 \u0E43\u0E2B\u0E49 feedback \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E31\u0E19</span></div>
        </div>
      </div>

      <div class="cv-card cv-c4 anim-up" data-delay="240">
        <div class="cv-card-head">
          <div class="cv-card-num-col">
            <span class="cv-card-big-num">04</span>
          </div>
          <div class="cv-card-text-col">
            <div class="cv-card-name">Professional &amp; Dynamic</div>
            <p class="cv-card-tagline">\u0E17\u0E33\u0E07\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E21\u0E37\u0E2D\u0E2D\u0E32\u0E0A\u0E35\u0E1E \u0E22\u0E37\u0E14\u0E2B\u0E22\u0E38\u0E48\u0E19\u0E44\u0E14\u0E49 \u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A\u0E07\u0E32\u0E19\u0E15\u0E32\u0E21\u0E17\u0E35\u0E48\u0E23\u0E31\u0E1A\u0E1B\u0E32\u0E01\u0E40\u0E2A\u0E21\u0E2D</p>
          </div>
        </div>
        <div class="cv-card-body">
          <div class="cv-point"><span class="cv-point-k">Adapt</span><span class="cv-point-v">\u0E1B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E27\u0E44\u0E14\u0E49\u0E40\u0E23\u0E47\u0E27\u0E43\u0E19\u0E17\u0E38\u0E01\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C</span></div>
          <div class="cv-point"><span class="cv-point-k">Commit</span><span class="cv-point-v">\u0E17\u0E33\u0E15\u0E32\u0E21\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E23\u0E31\u0E1A\u0E1B\u0E32\u0E01 \u0E2A\u0E48\u0E07\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E15\u0E32\u0E21\u0E01\u0E33\u0E2B\u0E19\u0E14</span></div>
          <div class="cv-point"><span class="cv-point-k">Prepare &amp; Reliable</span><span class="cv-point-v">\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E15\u0E31\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07 \u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E19\u0E48\u0E32\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E16\u0E37\u0E2D\u0E43\u0E19\u0E17\u0E38\u0E01\u0E07\u0E32\u0E19</span></div>
        </div>
      </div>

      <div class="cv-card cv-c5 anim-up" data-delay="320">
        <div class="cv-card-head">
          <div class="cv-card-num-col">
            <span class="cv-card-big-num">05</span>
          </div>
          <div class="cv-card-text-col">
            <div class="cv-card-name">Aesthetic Design</div>
            <p class="cv-card-tagline">\u0E17\u0E38\u0E01\u0E07\u0E32\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E30\u0E2D\u0E32\u0E14 \u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22 \u0E2A\u0E27\u0E22\u0E07\u0E32\u0E21 \u0E41\u0E25\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E14\u0E35\u0E43\u0E19\u0E17\u0E38\u0E01\u0E08\u0E38\u0E14\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A</p>
          </div>
        </div>
        <div class="cv-card-body">
          <div class="cv-point"><span class="cv-point-k">Tidiness</span><span class="cv-point-v">\u0E2A\u0E30\u0E2D\u0E32\u0E14 \u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22 \u0E17\u0E31\u0E49\u0E07\u0E01\u0E32\u0E23\u0E41\u0E15\u0E48\u0E07\u0E01\u0E32\u0E22\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E07\u0E32\u0E19</span></div>
          <div class="cv-point"><span class="cv-point-k">Good Experience</span><span class="cv-point-v">\u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E1C\u0E39\u0E49\u0E23\u0E31\u0E1A\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E14\u0E35</span></div>
          <div class="cv-point"><span class="cv-point-k">WOW &amp; Cool</span><span class="cv-point-v">\u0E17\u0E33\u0E07\u0E32\u0E19\u0E43\u0E2B\u0E49\u0E19\u0E48\u0E32\u0E1B\u0E23\u0E30\u0E17\u0E31\u0E1A\u0E43\u0E08 \u0E42\u0E14\u0E14\u0E40\u0E14\u0E48\u0E19 \u0E41\u0E25\u0E30\u0E40\u0E01\u0E34\u0E19\u0E04\u0E27\u0E32\u0E21\u0E04\u0E32\u0E14\u0E2B\u0E27\u0E31\u0E07</span></div>
        </div>
      </div>

    </div>

    <div class="callout" style="margin-top:36px;">
      <span class="ic">${I.sparkle}</span>
      <div>
        <h4>\u0E19\u0E33 Core Values \u0E44\u0E1B\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19</h4>
        <p>\u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E35\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E01\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48 \u2014 Intern \u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E21\u0E31\u0E19\u0E08\u0E23\u0E34\u0E07 \u0E46 \u0E17\u0E38\u0E01\u0E27\u0E31\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E1A\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</p>
      </div>
    </div>
  `
  });
  var renderInternshipPolicy = () => pageWrap({
    crumbs: [["Home", "#/home"], ["Work Policy", null], ["Internship Policy", null]],
    title: "Internship Policy",
    lead: "\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E08\u0E33\u0E17\u0E38\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07 \u2014 \u0E2D\u0E48\u0E32\u0E19\u0E04\u0E23\u0E31\u0E49\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E48\u0E2D\u0E19 \u0E41\u0E25\u0E49\u0E27\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E14\u0E39\u0E44\u0E14\u0E49\u0E40\u0E2A\u0E21\u0E2D\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E2A\u0E07\u0E2A\u0E31\u0E22",
    body: `
    <!-- Policy Hero Banner -->
    <div class="policy-time-hero anim-up">
      <div class="policy-time-main">
        <h2 style="color:#fff !important">9:00 \u2013 18:00 <span style="opacity:.5;font-weight:400;">/</span> 10:00 \u2013 19:00</h2>
        <p>\u0E40\u0E27\u0E25\u0E32\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \xB7 \u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C \u2013 \u0E28\u0E38\u0E01\u0E23\u0E4C \xB7 \u0E02\u0E36\u0E49\u0E19\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E31\u0E1A\u0E41\u0E1C\u0E19\u0E01\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22</p>
      </div>
      <div class="policy-time-stats">
        <div class="pts-item">
          <span class="pts-num" data-count-to="8">8</span>
          <span class="pts-label">\u0E0A\u0E21./\u0E27\u0E31\u0E19</span>
        </div>
        <div class="pts-item">
          <span class="pts-num" data-count-to="1">1</span>
          <span class="pts-label">\u0E0A\u0E21.\u0E1E\u0E31\u0E01\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07</span>
        </div>
        <div class="pts-item">
          <span class="pts-num" data-count-to="15">15</span>
          <span class="pts-label">\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14/\u0E1B\u0E35</span>
        </div>
      </div>
    </div>

    <h2>\u0E15\u0E32\u0E23\u0E32\u0E07\u0E27\u0E31\u0E19\u0E17\u0E33\u0E07\u0E32\u0E19 (\u0E41\u0E25\u0E49\u0E27\u0E41\u0E15\u0E48\u0E41\u0E1C\u0E19\u0E01)</h2>
    <div class="shift-row anim-up">
      <div class="shift-item">
        <div class="shift-label">\u0E01\u0E30 A \xB7 \u0E1A\u0E32\u0E07\u0E41\u0E1C\u0E19\u0E01</div>
        <div class="shift-time">9:00 \u2013 18:00</div>
        <div class="shift-noon">\u0E1E\u0E31\u0E01\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07 12:00 \u2013 13:00</div>
      </div>
      <div class="shift-divider">\u0E2B\u0E23\u0E37\u0E2D</div>
      <div class="shift-item">
        <div class="shift-label">\u0E01\u0E30 B \xB7 \u0E1A\u0E32\u0E07\u0E41\u0E1C\u0E19\u0E01</div>
        <div class="shift-time">10:00 \u2013 19:00</div>
        <div class="shift-noon">\u0E1E\u0E31\u0E01\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07 12:00 \u2013 13:00</div>
      </div>
    </div>
    <div class="callout anim-up" style="margin-bottom:28px;">
      <span class="ic">${I.info}</span>
      <div>
        <h4>\u0E40\u0E27\u0E25\u0E32\u0E17\u0E33\u0E07\u0E32\u0E19\u0E02\u0E36\u0E49\u0E19\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E31\u0E1A\u0E41\u0E1C\u0E19\u0E01\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22</h4>
        <p>\u0E16\u0E32\u0E21\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E2B\u0E23\u0E37\u0E2D HR \u0E27\u0E48\u0E32\u0E41\u0E1C\u0E19\u0E01\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E01\u0E30\u0E44\u0E2B\u0E19 \u2014 \u0E17\u0E33\u0E07\u0E32\u0E19 8 \u0E0A\u0E21. (\u0E44\u0E21\u0E48\u0E23\u0E27\u0E21\u0E1E\u0E31\u0E01\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07 1 \u0E0A\u0E21.) \u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C \u2013 \u0E28\u0E38\u0E01\u0E23\u0E4C</p>
      </div>
    </div>

    <h2>\u0E02\u0E49\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E33\u0E04\u0E31\u0E0D</h2>
    <div class="rule-grid">
      <div class="rule-card">
        <div class="rule-icon">${I.door}</div>
        <div class="rule-body">
          <h4>\u0E21\u0E32\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 \u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E17\u0E35\u0E48 Assign \u0E44\u0E27\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19</h4>
          <p>\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E02\u0E49\u0E32\u0E1D\u0E36\u0E01\u0E17\u0E35\u0E48\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 EXZY \u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E17\u0E35\u0E48\u0E17\u0E35\u0E21 Assign \u0E44\u0E27\u0E49 \u2014 \u0E44\u0E21\u0E48\u0E41\u0E19\u0E48\u0E43\u0E08 \u0E43\u0E2B\u0E49\u0E16\u0E32\u0E21\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E01\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07 \xB7 <strong>\u0E44\u0E21\u0E48\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15 WFH</strong> \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A Intern</p>
        </div>
      </div>
      <div class="rule-card">
        <div class="rule-icon">${I.clock}</div>
        <div class="rule-body">
          <h4>\u0E25\u0E07\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32 \u2013 \u0E2D\u0E2D\u0E01\u0E17\u0E38\u0E01\u0E27\u0E31\u0E19</h4>
          <p>\u0E01\u0E23\u0E2D\u0E01 Timesheet \u0E17\u0E38\u0E01\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E21\u0E32 \u2014 \u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E40\u0E0B\u0E47\u0E19\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07\u0E15\u0E32\u0E21\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07</p>
        </div>
      </div>
      <div class="rule-card">
        <div class="rule-icon">${I.doc}</div>
        <div class="rule-body">
          <h4>\u0E14\u0E39\u0E41\u0E25\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E14\u0E49\u0E27\u0E22\u0E19\u0E30</h4>
          <p>\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E15\u0E48\u0E32\u0E07 \u0E46 \u0E40\u0E2D\u0E07\u0E40\u0E25\u0E22 \u2014 \u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E0A\u0E48\u0E27\u0E22\u0E41\u0E19\u0E30\u0E19\u0E33\u0E44\u0E14\u0E49 \u0E41\u0E15\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E40\u0E2D\u0E07\u0E14\u0E49\u0E27\u0E22</p>
        </div>
      </div>
      <div class="rule-card">
        <div class="rule-icon">${I.calendar}</div>
        <div class="rule-body">
          <h4>\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 15 \u0E27\u0E31\u0E19/\u0E1B\u0E35</h4>
          <p>Subscribe Staff holiday calendar \u0E44\u0E27\u0E49\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22 \u2014 \u0E08\u0E30\u0E44\u0E14\u0E49\u0E44\u0E21\u0E48\u0E1E\u0E25\u0E32\u0E14\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14\u0E02\u0E2D\u0E07\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17</p>
        </div>
      </div>
    </div>

    <div class="page-cta-strip">
      <div>
        <h4>\u0E2D\u0E48\u0E32\u0E19 Policy \u0E41\u0E25\u0E49\u0E27 \u2014 \u0E44\u0E1B\u0E14\u0E39 Timesheet \u0E01\u0E31\u0E19\u0E15\u0E48\u0E2D</h4>
        <p>\u0E01\u0E23\u0E2D\u0E01\u0E43\u0E2B\u0E49\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 \u0E2A\u0E48\u0E07\u0E17\u0E38\u0E01\u0E2A\u0E34\u0E49\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19 \u0E41\u0E25\u0E49\u0E27\u0E08\u0E30\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E1A\u0E35\u0E49\u0E22\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E15\u0E23\u0E07\u0E40\u0E27\u0E25\u0E32</p>
      </div>
      <div class="cta-btns">
        <a href="#/resources/timesheet" class="btn btn-primary" data-link>\u0E14\u0E39 Timesheet ${I.arrow}</a>
      </div>
    </div>
  `
  });
  var renderDressCode = () => pageWrap({
    crumbs: [["Home", "#/home"], ["Work Policy", null], ["Dress Code", null]],
    title: "Dress Code",
    lead: "\u0E41\u0E15\u0E48\u0E07\u0E15\u0E31\u0E27\u0E22\u0E31\u0E07\u0E44\u0E07\u0E14\u0E35? \u2014 \u0E41\u0E19\u0E27\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E41\u0E15\u0E48\u0E07\u0E01\u0E32\u0E22\u0E17\u0E35\u0E48 EXZY \u0E15\u0E32\u0E21\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C",
    body: `
    <!-- Dress Hero V2 -->
    <div class="dress-hero-v2 anim-up">
      <div>
        <div class="dress-tag-v2">EXZY Core Value \xB7 Tidiness</div>
        <h3>\u0E2A\u0E30\u0E2D\u0E32\u0E14 \u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22 \u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21</h3>
        <p>"\u0E1E\u0E23\u0E49\u0E2D\u0E21 \u0E2A\u0E30\u0E2D\u0E32\u0E14\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22 \u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E01\u0E32\u0E23\u0E41\u0E15\u0E48\u0E07\u0E01\u0E32\u0E22\u0E43\u0E2B\u0E49\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21" \u2014 \u0E15\u0E32\u0E21 EXZY Core Values \u0E01\u0E32\u0E23\u0E41\u0E15\u0E48\u0E07\u0E01\u0E32\u0E22\u0E17\u0E35\u0E48\u0E14\u0E35\u0E04\u0E37\u0E2D\u0E2A\u0E48\u0E27\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E02\u0E2D\u0E07\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E21\u0E37\u0E2D\u0E2D\u0E32\u0E0A\u0E35\u0E1E\u0E41\u0E25\u0E30\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21\u0E02\u0E2D\u0E07\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17</p>
      </div>
      <div class="dress-hero-img">
        <img src="dress-code-reference.png" alt="EXZY professional dress example" />
      </div>
    </div>

    <h2>\u0E01\u0E32\u0E23\u0E41\u0E15\u0E48\u0E07\u0E01\u0E32\u0E22\u0E43\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C</h2>
    <div class="dress-grid-v2">
      <div class="dress-card-v2 anim-up">
        <div class="dress-card-v2-icon" style="background:rgba(102,197,197,.12); color:#0e6060;">${I.shirt}</div>
        <div class="dress-card-v2-style" style="color:#0e6060;">Smart Casual</div>
        <h4>\u0E27\u0E31\u0E19\u0E17\u0E33\u0E07\u0E32\u0E19\u0E1B\u0E01\u0E15\u0E34</h4>
        <ul>
          <li>\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E42\u0E1B\u0E42\u0E25 / \u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E40\u0E0A\u0E34\u0E49\u0E15</li>
          <li>\u0E01\u0E32\u0E07\u0E40\u0E01\u0E07\u0E1C\u0E49\u0E32 / \u0E01\u0E32\u0E07\u0E40\u0E01\u0E07\u0E22\u0E35\u0E19\u0E2A\u0E35\u0E40\u0E02\u0E49\u0E21</li>
          <li>\u0E23\u0E2D\u0E07\u0E40\u0E17\u0E49\u0E32\u0E1C\u0E49\u0E32\u0E43\u0E1A / \u0E04\u0E31\u0E17\u0E0A\u0E39 \u0E2A\u0E35\u0E2A\u0E38\u0E20\u0E32\u0E1E</li>
        </ul>
      </div>
      <div class="dress-card-v2 anim-up" data-delay="80">
        <div class="dress-card-v2-icon" style="background:rgba(59,130,246,.12); color:#1e3a8a;">${I.people}</div>
        <div class="dress-card-v2-style" style="color:#1e3a8a;">Business Casual</div>
        <h4>\u0E21\u0E35\u0E19\u0E31\u0E14\u0E1E\u0E1A\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32</h4>
        <ul>
          <li>\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E40\u0E0A\u0E34\u0E49\u0E15\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E1A\u0E25\u0E40\u0E0B\u0E2D\u0E23\u0E4C</li>
          <li>\u0E01\u0E32\u0E07\u0E40\u0E01\u0E07 / \u0E01\u0E23\u0E30\u0E42\u0E1B\u0E23\u0E07\u0E17\u0E23\u0E07\u0E2A\u0E38\u0E20\u0E32\u0E1E</li>
          <li>\u0E23\u0E2D\u0E07\u0E40\u0E17\u0E49\u0E32\u0E2B\u0E38\u0E49\u0E21\u0E2A\u0E49\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E04\u0E31\u0E17\u0E0A\u0E39</li>
        </ul>
      </div>
      <div class="dress-card-v2 anim-up" data-delay="160">
        <div class="dress-card-v2-icon" style="background:rgba(139,92,246,.12); color:#4c1d95;">${I.sparkle}</div>
        <div class="dress-card-v2-style" style="color:#4c1d95;">Casual Friday</div>
        <h4>\u0E27\u0E31\u0E19\u0E28\u0E38\u0E01\u0E23\u0E4C / \u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21</h4>
        <ul>
          <li>\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E22\u0E37\u0E14\u0E2A\u0E30\u0E2D\u0E32\u0E14 \u0E44\u0E21\u0E48\u0E21\u0E35\u0E25\u0E32\u0E22\u0E44\u0E21\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21</li>
          <li>\u0E01\u0E32\u0E07\u0E40\u0E01\u0E07\u0E22\u0E35\u0E19 / \u0E01\u0E32\u0E07\u0E40\u0E01\u0E07 chino</li>
          <li>\u0E23\u0E2D\u0E07\u0E40\u0E17\u0E49\u0E32\u0E1C\u0E49\u0E32\u0E43\u0E1A</li>
        </ul>
      </div>
    </div>

    <h2>\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E04\u0E27\u0E23\u0E43\u0E2A\u0E48</h2>
    <div class="dress-dont-grid">
      <div class="dress-dont-item"><span class="dress-dont-x">\u2715</span> \u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E01\u0E25\u0E49\u0E32\u0E21 / \u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E41\u0E02\u0E19\u0E01\u0E38\u0E14</div>
      <div class="dress-dont-item"><span class="dress-dont-x">\u2715</span> \u0E01\u0E32\u0E07\u0E40\u0E01\u0E07\u0E02\u0E32\u0E2A\u0E31\u0E49\u0E19 (\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E40\u0E02\u0E48\u0E32)</div>
      <div class="dress-dont-item"><span class="dress-dont-x">\u2715</span> \u0E23\u0E2D\u0E07\u0E40\u0E17\u0E49\u0E32\u0E41\u0E15\u0E30</div>
      <div class="dress-dont-item"><span class="dress-dont-x">\u2715</span> \u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E1C\u0E49\u0E32\u0E23\u0E31\u0E14\u0E23\u0E39\u0E1B / \u0E42\u0E1B\u0E4A\u0E40\u0E1B\u0E25\u0E37\u0E2D\u0E22\u0E40\u0E01\u0E34\u0E19\u0E44\u0E1B</div>
      <div class="dress-dont-item"><span class="dress-dont-x">\u2715</span> \u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E17\u0E35\u0E48\u0E21\u0E35\u0E25\u0E32\u0E22\u0E44\u0E21\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21\u0E43\u0E19\u0E17\u0E35\u0E48\u0E17\u0E33\u0E07\u0E32\u0E19</div>
      <div class="dress-dont-item"><span class="dress-dont-x">\u2715</span> \u0E0A\u0E38\u0E14\u0E2D\u0E2D\u0E01\u0E01\u0E33\u0E25\u0E31\u0E07\u0E01\u0E32\u0E22</div>
    </div>

    <div class="callout anim-up">
      <span class="ic">${I.sparkle}</span>
      <div>
        <h4>\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E21\u0E48\u0E41\u0E19\u0E48\u0E43\u0E08 \u0E43\u0E2B\u0E49\u0E2A\u0E31\u0E07\u0E40\u0E01\u0E15\u0E17\u0E35\u0E21</h4>
        <p>\u0E44\u0E21\u0E48\u0E41\u0E19\u0E48\u0E43\u0E08\u0E01\u0E47\u0E44\u0E21\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E23 \u2014 \u0E25\u0E2D\u0E07\u0E14\u0E39\u0E27\u0E48\u0E32\u0E1E\u0E35\u0E48 \u0E46 \u0E43\u0E19\u0E17\u0E35\u0E21\u0E41\u0E15\u0E48\u0E07\u0E22\u0E31\u0E07\u0E44\u0E07 \u0E2B\u0E23\u0E37\u0E2D\u0E08\u0E30\u0E16\u0E32\u0E21\u0E15\u0E23\u0E07 \u0E46 \u0E01\u0E47\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22</p>
      </div>
    </div>
  `
  });
  var renderLeave = () => pageWrap({
    crumbs: [["Home", "#/home"], ["Work Policy", null], ["Leave & Absence", null]],
    title: "Leave & Absence",
    lead: "\u0E1B\u0E48\u0E27\u0E22 \u0E2B\u0E23\u0E37\u0E2D\u0E21\u0E35\u0E18\u0E38\u0E23\u0E30 \u2014 \u0E41\u0E08\u0E49\u0E07\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25 HR \u0E17\u0E33\u0E15\u0E32\u0E21\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E07\u0E48\u0E32\u0E22 \u0E46 \u0E19\u0E35\u0E49",
    body: `
    <div class="callout anim-up">
      <span class="ic">${I.info}</span>
      <div>
        <h4>\u0E01\u0E32\u0E23\u0E25\u0E32\u0E08\u0E30\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E01\u0E47\u0E1A\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49</h4>
        <p>\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E40\u0E0B\u0E47\u0E19\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07\u0E15\u0E32\u0E21\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 \u2014 \u0E25\u0E32\u0E1A\u0E48\u0E2D\u0E22\u0E2D\u0E32\u0E08\u0E2A\u0E48\u0E07\u0E1C\u0E25\u0E15\u0E48\u0E2D\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E48\u0E07\u0E2A\u0E16\u0E32\u0E1A\u0E31\u0E19 \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E27\u0E31\u0E19\u0E25\u0E32\u0E43\u0E2B\u0E49\u0E14\u0E35\u0E19\u0E30</p>
      </div>
    </div>

    <h2>\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E25\u0E32\u0E07\u0E32\u0E19 \u2014 3 \u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19</h2>

    <div class="leave-process">
      <div class="leave-step anim-left" data-delay="0">
        <div class="leave-step-node">1</div>
        <div class="leave-step-card">
          <h4>\u0E41\u0E08\u0E49\u0E07 Teamlead \u0E41\u0E25\u0E30 Senior</h4>
          <p>\u0E41\u0E08\u0E49\u0E07\u0E02\u0E2D\u0E25\u0E32\u0E01\u0E31\u0E1A Teamlead \u0E41\u0E25\u0E30 Senior \u0E01\u0E48\u0E2D\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E41\u0E23\u0E01 \u0E01\u0E48\u0E2D\u0E19\u0E2A\u0E48\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25</p>
        </div>
      </div>
      <div class="leave-step anim-left" data-delay="100">
        <div class="leave-step-node">2</div>
        <div class="leave-step-card">
          <h4>\u0E2A\u0E48\u0E07 Email \u0E41\u0E08\u0E49\u0E07\u0E01\u0E32\u0E23\u0E25\u0E32\u0E43\u0E2B\u0E49 HR</h4>
          <p>\u0E2A\u0E48\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E41\u0E08\u0E49\u0E07\u0E25\u0E32\u0E44\u0E1B\u0E17\u0E35\u0E48 <a href="mailto:hr@exzyteam.com" class="inline-link">hr@exzyteam.com</a> \u0E23\u0E30\u0E1A\u0E38\u0E40\u0E2B\u0E15\u0E38\u0E1C\u0E25\u0E41\u0E25\u0E30\u0E08\u0E33\u0E19\u0E27\u0E19\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E25\u0E32</p>
        </div>
      </div>
      <div class="leave-step anim-left" data-delay="200">
        <div class="leave-step-node">3</div>
        <div class="leave-step-card">
          <h4>CC \u0E2D\u0E35\u0E40\u0E21\u0E25 Teamlead \u0E41\u0E25\u0E30 Senior</h4>
          <p>CC \u0E2D\u0E35\u0E40\u0E21\u0E25\u0E44\u0E1B\u0E2B\u0E32 Teamlead \u0E41\u0E25\u0E30 Senior \u0E43\u0E19\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E17\u0E38\u0E01\u0E04\u0E19\u0E23\u0E31\u0E1A\u0E17\u0E23\u0E32\u0E1A\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E01\u0E31\u0E19</p>
        </div>
      </div>
    </div>

    <h2>\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E27\u0E25\u0E32\u0E41\u0E08\u0E49\u0E07\u0E25\u0E32</h2>
    <div class="leave-deadline-row">
      <div class="leave-dl-card leave-dl-sick anim-up">
        <div class="leave-dl-type">\u0E25\u0E32\u0E1B\u0E48\u0E27\u0E22</div>
        <div class="leave-dl-time">\u0E01\u0E48\u0E2D\u0E19 11:00 \u0E19.</div>
        <div class="leave-dl-note">\u0E02\u0E2D\u0E07\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E25\u0E32\u0E07\u0E32\u0E19</div>
      </div>
      <div class="leave-dl-card leave-dl-biz anim-up" data-delay="80">
        <div class="leave-dl-type">\u0E25\u0E32\u0E01\u0E34\u0E08\u0E18\u0E38\u0E23\u0E30</div>
        <div class="leave-dl-time">\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32 1 \u0E27\u0E31\u0E19</div>
        <div class="leave-dl-note">\u0E27\u0E31\u0E19\u0E17\u0E33\u0E01\u0E32\u0E23\u0E01\u0E48\u0E2D\u0E19\u0E27\u0E31\u0E19\u0E25\u0E32</div>
      </div>
    </div>

    <div class="callout anim-up">
      <span class="ic">${I.shield}</span>
      <div>
        <h4>\u0E01\u0E32\u0E23\u0E25\u0E32\u0E17\u0E35\u0E48\u0E21\u0E32\u0E01\u0E40\u0E01\u0E34\u0E19\u0E44\u0E1B</h4>
        <p>\u0E16\u0E49\u0E32\u0E25\u0E32\u0E1A\u0E48\u0E2D\u0E22\u0E08\u0E19\u0E40\u0E01\u0E34\u0E19\u0E44\u0E1B\u0E41\u0E25\u0E30\u0E17\u0E35\u0E21\u0E40\u0E2B\u0E47\u0E19\u0E27\u0E48\u0E32\u0E44\u0E21\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21 \u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E2D\u0E32\u0E08\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E22\u0E38\u0E15\u0E34\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E41\u0E08\u0E49\u0E07\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22 \u2014 \u0E40\u0E1B\u0E34\u0E14\u0E43\u0E08\u0E04\u0E38\u0E22\u0E01\u0E31\u0E1A\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E2A\u0E21\u0E2D\u0E19\u0E30</p>
      </div>
    </div>
  `
  });

  // js/pages/resources.js
  var renderTimesheet = () => pageWrap({
    crumbs: [["Home", "#/home"], ["Resources", null], ["Timesheet", null]],
    title: "Intern Timesheet",
    lead: "\u0E01\u0E23\u0E2D\u0E01\u0E17\u0E38\u0E01\u0E27\u0E31\u0E19 \u0E2A\u0E48\u0E07\u0E17\u0E38\u0E01\u0E2A\u0E34\u0E49\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19 \u2014 \u0E41\u0E04\u0E48\u0E19\u0E35\u0E49\u0E40\u0E25\u0E22 \u0E14\u0E39\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E41\u0E25\u0E30\u0E27\u0E34\u0E18\u0E35\u0E01\u0E23\u0E2D\u0E01\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48",
    body: `
    <!-- Timesheet Hero Banner -->
    <div class="ts-hero-banner anim-up">
      <div class="ts-hero-left">
        <h2 style="color:#fff !important">\u0E01\u0E23\u0E2D\u0E01\u0E17\u0E38\u0E01\u0E27\u0E31\u0E19 \xB7 \u0E2A\u0E48\u0E07\u0E2A\u0E34\u0E49\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19</h2>
        <p>HR \u0E08\u0E30\u0E2A\u0E48\u0E07\u0E44\u0E1F\u0E25\u0E4C Excel Timesheet \u0E43\u0E2B\u0E49\u0E17\u0E32\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01</p>
        <div class="ts-hero-badges">
          <span class="ts-hero-badge">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            \u0E2A\u0E48\u0E07\u0E17\u0E38\u0E01\u0E2A\u0E34\u0E49\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19
          </span>
          <span class="ts-hero-badge">
            ${I.calendar} \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331
          </span>
          <span class="ts-hero-badge">
            ${I.doc} \u0E1E\u0E34\u0E21\u0E1E\u0E4C + \u0E22\u0E37\u0E48\u0E19 HR
          </span>
        </div>
      </div>
    </div>

    <!-- Visual Steps -->
    <div class="ts-steps-visual">
      <div class="ts-step-v anim-up" data-delay="0">
        <div class="ts-step-node" style="background:var(--cyan)">1</div>
        <div class="ts-step-title">\u0E23\u0E31\u0E1A\u0E44\u0E1F\u0E25\u0E4C\u0E08\u0E32\u0E01 HR</div>
        <div class="ts-step-desc">HR \u0E2A\u0E48\u0E07 Excel Timesheet \u0E43\u0E2B\u0E49\u0E17\u0E32\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01</div>
      </div>
      <div class="ts-step-v anim-up" data-delay="80">
        <div class="ts-step-node" style="background:#3B82F6">2</div>
        <div class="ts-step-title">\u0E01\u0E23\u0E2D\u0E01\u0E17\u0E38\u0E01\u0E27\u0E31\u0E19</div>
        <div class="ts-step-desc">\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32-\u0E2D\u0E2D\u0E01\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E17\u0E33\u0E43\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E27\u0E31\u0E19</div>
      </div>
      <div class="ts-step-v anim-up" data-delay="160">
        <div class="ts-step-node" style="background:#8B5CF6">3</div>
        <div class="ts-step-title">\u0E23\u0E30\u0E1A\u0E38\u0E01\u0E32\u0E23\u0E25\u0E32</div>
        <div class="ts-step-desc">\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14/\u0E25\u0E32 \u0E23\u0E30\u0E1A\u0E38\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E43\u0E19\u0E04\u0E2D\u0E25\u0E31\u0E21\u0E19\u0E4C Summary</div>
      </div>
      <div class="ts-step-v anim-up" data-delay="240">
        <div class="ts-step-node" style="background:#EF4444">4</div>
        <div class="ts-step-title">\u0E22\u0E37\u0E48\u0E19 HR \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331</div>
        <div class="ts-step-desc">\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 \u0E41\u0E25\u0E49\u0E27\u0E22\u0E37\u0E48\u0E19\u0E43\u0E2B\u0E49 HR \u0E17\u0E35\u0E48\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28\u0E42\u0E14\u0E22\u0E15\u0E23\u0E07</div>
      </div>
    </div>

    <h2>\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 Timesheet</h2>
    <p>\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 Timesheet \u0E02\u0E2D\u0E07 EXZY \u0E21\u0E35\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49 \u2014 \u0E43\u0E0A\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E49\u0E32\u0E07\u0E2D\u0E34\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25</p>
    <figure class="ts-figure">
      <img src="timesheet-sample.png" alt="\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 Intern Timesheet \u0E02\u0E2D\u0E07 EXZY" />
      <figcaption>\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 Intern Timesheet \xB7 \u0E2A\u0E48\u0E07\u0E43\u0E2B\u0E49 HR \u0E17\u0E38\u0E01\u0E2A\u0E34\u0E49\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</figcaption>
    </figure>

    <h2 style="margin-top:48px;">\u0E04\u0E2D\u0E25\u0E31\u0E21\u0E19\u0E4C\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E23\u0E2D\u0E01</h2>
    <div class="ts-col-grid">
      <div class="ts-col-item anim-up"><div class="ts-col-n">1</div><div class="ts-col-info"><strong>Date</strong><span>\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">2</div><div class="ts-col-info"><strong>Time In / Time Out</strong><span>\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32 \u2013 \u0E2D\u0E2D\u0E01 (\u0E15\u0E32\u0E21\u0E01\u0E30\u0E02\u0E2D\u0E07\u0E41\u0E1C\u0E19\u0E01)</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">3</div><div class="ts-col-info"><strong>Project Name</strong><span>\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E17\u0E33\u0E43\u0E19\u0E27\u0E31\u0E19\u0E19\u0E31\u0E49\u0E19</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">4</div><div class="ts-col-info"><strong>Summary of Task</strong><span>\u0E2A\u0E23\u0E38\u0E1B\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E17\u0E33\u0E43\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E27\u0E31\u0E19</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">5</div><div class="ts-col-info"><strong>Location</strong><span>\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 (\u0E40\u0E0A\u0E48\u0E19 EXZY Office)</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">6</div><div class="ts-col-info"><strong>Total Hours</strong><span>\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E23\u0E27\u0E21\u0E43\u0E19\u0E27\u0E31\u0E19\u0E19\u0E31\u0E49\u0E19 (\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19 8)</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">7</div><div class="ts-col-info"><strong>Incharge Name</strong><span>\u0E0A\u0E37\u0E48\u0E2D\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07 / Supervisor</span></div></div>
    </div>

    <h2 style="margin-top:48px;">\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E48\u0E07\u0E43\u0E2B\u0E49 HR \u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</h2>
    <p>\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E48\u0E07 <strong>\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331 \u0E02\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</strong> \u2014 \u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29\u0E41\u0E25\u0E30\u0E22\u0E37\u0E48\u0E19\u0E43\u0E2B\u0E49 HR \u0E42\u0E14\u0E22\u0E15\u0E23\u0E07\u0E17\u0E35\u0E48\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28</p>
    <ul>
      <li><strong>\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19</strong> \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E0B\u0E47\u0E19\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 \u2014 \u0E2A\u0E48\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</li>
      <li><strong>\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 Intern Timesheet</strong> (\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2D\u0E2D\u0E01\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29) \u2014 \u0E2A\u0E48\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</li>
      <li><strong>\u0E2A\u0E33\u0E40\u0E19\u0E32 Bookbank \u2014 KBank</strong> \u2014 \u0E2A\u0E48\u0E07\u0E41\u0E04\u0E48\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E41\u0E23\u0E01</li>
    </ul>

    <div class="callout anim-up">
      <span class="ic">${I.doc}</span>
      <div>
        <h4>\u0E27\u0E34\u0E18\u0E35\u0E2A\u0E48\u0E07 \u2014 \u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E41\u0E25\u0E30\u0E22\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29\u0E17\u0E35\u0E48\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28</h4>
        <p>\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E2D\u0E2D\u0E01\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29 \u0E41\u0E25\u0E49\u0E27\u0E19\u0E33\u0E22\u0E37\u0E48\u0E19\u0E43\u0E2B\u0E49 HR \u0E42\u0E14\u0E22\u0E15\u0E23\u0E07\u0E17\u0E35\u0E48\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 <strong>\u0E20\u0E32\u0E22\u0E43\u0E19\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331</strong> \u0E02\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19 \u2014 \u0E44\u0E21\u0E48\u0E23\u0E31\u0E1A\u0E17\u0E32\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25</p>
      </div>
    </div>

    <div class="page-cta-strip">
      <div>
        <h4>\u0E22\u0E31\u0E07\u0E21\u0E35\u0E04\u0E33\u0E16\u0E32\u0E21\u0E2D\u0E35\u0E01\u0E44\u0E2B\u0E21?</h4>
        <p>\u0E21\u0E35\u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48 Intern \u0E16\u0E32\u0E21\u0E1A\u0E48\u0E2D\u0E22\u0E23\u0E27\u0E21\u0E44\u0E27\u0E49\u0E43\u0E19 FAQs \u2014 \u0E14\u0E39\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22</p>
      </div>
      <div class="cta-btns">
        <a href="#/resources/faqs" class="btn btn-primary" data-link>\u0E14\u0E39 FAQs ${I.arrow}</a>
      </div>
    </div>
  `
  });
  var renderFaqs = () => pageWrap({
    crumbs: [["Home", "#/home"], ["Resources", null], ["FAQs", null]],
    title: "Frequently Asked Questions",
    lead: "\u0E23\u0E27\u0E21\u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48 Intern \u0E16\u0E32\u0E21\u0E1A\u0E48\u0E2D\u0E22\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14 \u2014 \u0E40\u0E0A\u0E47\u0E04\u0E15\u0E23\u0E07\u0E19\u0E35\u0E49\u0E01\u0E48\u0E2D\u0E19 \u0E41\u0E25\u0E49\u0E27\u0E2D\u0E32\u0E08\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E16\u0E32\u0E21\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E22",
    body: `
    <!-- Filter Tabs -->
    <div class="faq-filter" id="faq-filter">
      <button class="faq-filter-btn is-active" data-faq-cat="all">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
        \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14
      </button>
      <button class="faq-filter-btn" data-faq-cat="work">
        ${I.doc} \u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19
      </button>
      <button class="faq-filter-btn" data-faq-cat="leave">
        ${I.help} \u0E01\u0E32\u0E23\u0E25\u0E32
      </button>
      <button class="faq-filter-btn" data-faq-cat="life">
        ${I.people} \u0E0A\u0E35\u0E27\u0E34\u0E15\u0E43\u0E19\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28
      </button>
      <button class="faq-filter-btn" data-faq-cat="growth">
        ${I.rocket} \u0E01\u0E32\u0E23\u0E40\u0E15\u0E34\u0E1A\u0E42\u0E15
      </button>
    </div>

    <div class="faq-group is-visible" data-faq-group="work">
      <div class="faq-section-hd">
        <span class="faq-section-ico">${I.doc}</span>
        <h2>\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19</h2>
      </div>
      <div class="accordion">
        ${acc("1. \u0E27\u0E31\u0E19\u0E41\u0E23\u0E01\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E2D\u0E30\u0E44\u0E23\u0E1A\u0E49\u0E32\u0E07?", '\u0E21\u0E32\u0E16\u0E36\u0E07\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 9:45 \u0E19. (\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E27\u0E25\u0E32 10:00 \u0E19.) \xB7 \u0E1E\u0E1A\u0E01\u0E31\u0E1A HR \u0E17\u0E35\u0E48\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19 \xB7 \u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19\u0E41\u0E25\u0E30\u0E2A\u0E33\u0E40\u0E19\u0E32 Bookbank \u0E02\u0E2D\u0E07 KBank (\u0E43\u0E0A\u0E49\u0E41\u0E04\u0E48\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E41\u0E23\u0E01) \xB7 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E42\u0E19\u0E49\u0E15\u0E1A\u0E38\u0E4A\u0E01\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E2B\u0E32\u0E01\u0E21\u0E35 \xB7 \u0E2D\u0E48\u0E32\u0E19 Orientation \u0E02\u0E2D\u0E07 EXZY \u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01\u0E40\u0E21\u0E19\u0E39 <a href="#/getting-started/orientation" data-link>Orientation</a>')}
        ${acc("2. Wi-Fi \u0E43\u0E0A\u0E49\u0E23\u0E2B\u0E31\u0E2A\u0E2D\u0E30\u0E44\u0E23? \u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E22\u0E31\u0E07\u0E44\u0E07?", '<strong>Staff Wi-Fi:</strong> SSID <code>ExzyUniFi</code> \xB7 Password <code>maetyzxe</code><br/><strong>Guest Wi-Fi:</strong> SSID <code>Exzy_Guest</code> \xB7 Password <code>imaguest</code><br/>\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E49\u0E32 <a href="#/getting-started/wifi" data-link>Office Wi-Fi</a> \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E41\u0E01\u0E19 QR code \u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E44\u0E14\u0E49\u0E17\u0E31\u0E19\u0E17\u0E35')}
        ${acc("3. \u0E40\u0E27\u0E25\u0E32\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E22\u0E31\u0E07\u0E44\u0E07? \u0E1E\u0E31\u0E01\u0E01\u0E25\u0E32\u0E07\u0E27\u0E31\u0E19\u0E01\u0E35\u0E48\u0E42\u0E21\u0E07?", "\u0E40\u0E27\u0E25\u0E32\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 <strong>9:00 \u2013 18:00 \u0E19.</strong> \u0E2B\u0E23\u0E37\u0E2D <strong>10:00 \u2013 19:00 \u0E19.</strong> \u0E02\u0E36\u0E49\u0E19\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E31\u0E1A\u0E41\u0E1C\u0E19\u0E01 \u2014 \u0E43\u0E2B\u0E49\u0E16\u0E32\u0E21\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E27\u0E48\u0E32\u0E41\u0E1C\u0E19\u0E01\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E01\u0E30\u0E44\u0E2B\u0E19 \xB7 \u0E1E\u0E31\u0E01\u0E01\u0E25\u0E32\u0E07\u0E27\u0E31\u0E19 <strong>12:00 \u2013 13:00 \u0E19.</strong> \xB7 \u0E27\u0E31\u0E19\u0E25\u0E30 8 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07 \xB7 \u0E21\u0E35\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E1B\u0E35 15 \u0E27\u0E31\u0E19")}
        ${acc("4. Timesheet \u0E2A\u0E48\u0E07\u0E22\u0E31\u0E07\u0E44\u0E07? \u0E2A\u0E48\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E2B\u0E23\u0E48?", 'HR \u0E08\u0E30\u0E2A\u0E48\u0E07\u0E44\u0E1F\u0E25\u0E4C Excel Timesheet \u0E43\u0E2B\u0E49\u0E04\u0E38\u0E13\u0E17\u0E32\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01 \xB7 \u0E01\u0E23\u0E2D\u0E01\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32-\u0E2D\u0E2D\u0E01\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E17\u0E35\u0E48\u0E17\u0E33\u0E43\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E27\u0E31\u0E19 \xB7 \u0E2A\u0E48\u0E07\u0E01\u0E25\u0E31\u0E1A\u0E43\u0E2B\u0E49 HR \u0E17\u0E38\u0E01\u0E2A\u0E34\u0E49\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19 (\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331) \xB7 \u0E14\u0E39\u0E04\u0E2D\u0E25\u0E31\u0E21\u0E19\u0E4C\u0E41\u0E25\u0E30\u0E27\u0E34\u0E18\u0E35\u0E01\u0E23\u0E2D\u0E01\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E49\u0E32 <a href="#/resources/timesheet" data-link>Timesheet</a>')}
        ${acc("5. \u0E40\u0E1A\u0E35\u0E49\u0E22\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E40\u0E17\u0E48\u0E32\u0E44\u0E2B\u0E23\u0E48? \u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E48\u0E07\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E2D\u0E30\u0E44\u0E23\u0E1A\u0E49\u0E32\u0E07?", "<strong>\u0E27\u0E31\u0E19\u0E25\u0E30 200 \u0E1A\u0E32\u0E17</strong> \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \xB7 <strong>\u0E27\u0E31\u0E19\u0E25\u0E30 300 \u0E1A\u0E32\u0E17</strong> \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E19\u0E2D\u0E01\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48<br/>\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E48\u0E07 (\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E48\u0E07 <strong>\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331 \u0E02\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</strong>):<br/>\xB7 \u0E2A\u0E33\u0E40\u0E19\u0E32\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E0B\u0E47\u0E19\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 (\u0E2A\u0E48\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19)<br/>\xB7 \u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 Intern Timesheet (\u0E2A\u0E48\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19)<br/>\xB7 \u0E2A\u0E33\u0E40\u0E19\u0E32 Bookbank KBank (\u0E2A\u0E48\u0E07\u0E41\u0E04\u0E48\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E41\u0E23\u0E01)<br/><strong>\u0E27\u0E34\u0E18\u0E35\u0E2A\u0E48\u0E07:</strong> \u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29\u0E41\u0E25\u0E30\u0E22\u0E37\u0E48\u0E19\u0E43\u0E2B\u0E49 HR \u0E42\u0E14\u0E22\u0E15\u0E23\u0E07\u0E17\u0E35\u0E48\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 \u2014 \u0E44\u0E21\u0E48\u0E23\u0E31\u0E1A\u0E17\u0E32\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25")}
        ${acc("6. \u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E1A\u0E49\u0E32\u0E19 (WFH) \u0E44\u0E14\u0E49\u0E44\u0E2B\u0E21?", "<strong>\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49</strong> \u2014 Intern \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E02\u0E49\u0E32\u0E1D\u0E36\u0E01\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E17\u0E35\u0E48\u0E17\u0E35\u0E21 Assign \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 \u0E17\u0E32\u0E07\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E44\u0E21\u0E48\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E43\u0E2B\u0E49\u0E02\u0E2D\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E08\u0E32\u0E01\u0E17\u0E35\u0E48\u0E1A\u0E49\u0E32\u0E19")}
      </div>
    </div>

    <div class="faq-group is-visible" data-faq-group="leave">
      <div class="faq-section-hd">
        <span class="faq-section-ico">${I.help}</span>
        <h2>\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E32 / \u0E1B\u0E48\u0E27\u0E22 / \u0E01\u0E34\u0E08\u0E18\u0E38\u0E23\u0E30</h2>
      </div>
      <div class="accordion">
        ${acc("7. \u0E23\u0E39\u0E49\u0E2A\u0E36\u0E01\u0E44\u0E21\u0E48\u0E2A\u0E1A\u0E32\u0E22 \u0E21\u0E32\u0E17\u0E33\u0E07\u0E32\u0E19\u0E44\u0E21\u0E48\u0E44\u0E2B\u0E27 \u0E17\u0E33\u0E22\u0E31\u0E07\u0E44\u0E07?", '<strong>1.</strong> \u0E41\u0E08\u0E49\u0E07 Teamlead \u0E41\u0E25\u0E30 Senior \u0E17\u0E31\u0E19\u0E17\u0E35\u0E15\u0E2D\u0E19\u0E15\u0E37\u0E48\u0E19\u0E19\u0E2D\u0E19<br/><strong>2.</strong> \u0E2A\u0E48\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E41\u0E08\u0E49\u0E07\u0E25\u0E32\u0E16\u0E36\u0E07 <a href="mailto:hr@exzyteam.com">hr@exzyteam.com</a> <strong>\u0E01\u0E48\u0E2D\u0E19 11:00 \u0E19.</strong> \u0E02\u0E2D\u0E07\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E25\u0E32<br/><strong>3.</strong> CC \u0E2D\u0E35\u0E40\u0E21\u0E25 Teamlead \u0E41\u0E25\u0E30 Senior \u0E14\u0E49\u0E27\u0E22<br/>\xB7 \u0E43\u0E19\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E43\u0E2B\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E1E\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08\u0E41\u0E25\u0E30\u0E08\u0E33\u0E19\u0E27\u0E19\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E2B\u0E22\u0E38\u0E14 \xB7 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E25\u0E32\u0E08\u0E30\u0E44\u0E21\u0E48\u0E19\u0E31\u0E1A\u0E40\u0E1B\u0E47\u0E19\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19')}
        ${acc("8. \u0E21\u0E35\u0E18\u0E38\u0E23\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E32 \u0E17\u0E33\u0E22\u0E31\u0E07\u0E44\u0E07?", "\u0E2A\u0E48\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E41\u0E08\u0E49\u0E07\u0E25\u0E32 <strong>\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32 1 \u0E27\u0E31\u0E19\u0E17\u0E33\u0E01\u0E32\u0E23</strong> \u0E44\u0E1B\u0E17\u0E35\u0E48 HR + CC Teamlead/Senior \xB7 \u0E23\u0E30\u0E1A\u0E38\u0E40\u0E2B\u0E15\u0E38\u0E1C\u0E25\u0E1E\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08 \xB7 \u0E1E\u0E22\u0E32\u0E22\u0E32\u0E21\u0E25\u0E32\u0E40\u0E17\u0E48\u0E32\u0E17\u0E35\u0E48\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E23\u0E32\u0E30\u0E01\u0E32\u0E23\u0E25\u0E32\u0E44\u0E21\u0E48\u0E19\u0E31\u0E1A\u0E40\u0E1B\u0E47\u0E19\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19")}
        ${acc("9. \u0E25\u0E32\u0E40\u0E23\u0E35\u0E22\u0E19 / \u0E25\u0E32\u0E2A\u0E2D\u0E1A \u0E17\u0E33\u0E22\u0E31\u0E07\u0E44\u0E07?", "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D HR \u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E25\u0E30\u0E41\u0E08\u0E49\u0E07\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19/\u0E2A\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22 \xB7 HR \u0E41\u0E25\u0E30 Teamlead \u0E08\u0E30\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E32\u0E22\u0E01\u0E23\u0E13\u0E35 \xB7 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E1A\u0E2B\u0E23\u0E37\u0E2D\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22\u0E2A\u0E33\u0E04\u0E31\u0E0D \u0E46 \u0E1B\u0E01\u0E15\u0E34\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E08\u0E30\u0E43\u0E2B\u0E49\u0E04\u0E27\u0E32\u0E21\u0E23\u0E48\u0E27\u0E21\u0E21\u0E37\u0E2D")}
      </div>
    </div>

    <div class="faq-group is-visible" data-faq-group="life">
      <div class="faq-section-hd">
        <span class="faq-section-ico">${I.people}</span>
        <h2>\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E43\u0E19\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28</h2>
      </div>
      <div class="accordion">
        ${acc("10. \u0E1E\u0E31\u0E01\u0E01\u0E25\u0E32\u0E07\u0E27\u0E31\u0E19\u0E17\u0E32\u0E19\u0E02\u0E49\u0E32\u0E27\u0E17\u0E35\u0E48\u0E44\u0E2B\u0E19\u0E14\u0E35?", "\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 EXZY \u0E15\u0E31\u0E49\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E17\u0E35\u0E48\u0E15\u0E36\u0E01 Metropolis \u0E0B\u0E36\u0E48\u0E07\u0E21\u0E35\u0E23\u0E49\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E04\u0E32\u0E40\u0E1F\u0E48\u0E2B\u0E25\u0E32\u0E22\u0E23\u0E49\u0E32\u0E19\u0E2D\u0E22\u0E39\u0E48\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E23\u0E2D\u0E1A \u0E46:<br/>\xB7 <strong>\u0E43\u0E19\u0E15\u0E36\u0E01 Metropolis</strong> \u2014 \u0E21\u0E35\u0E23\u0E49\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E23\u0E49\u0E32\u0E19\u0E01\u0E32\u0E41\u0E1F\u0E0A\u0E31\u0E49\u0E19 G<br/>\xB7 <strong>\u0E2B\u0E49\u0E32\u0E07\u0E43\u0E01\u0E25\u0E49\u0E40\u0E04\u0E35\u0E22\u0E07</strong> \u2014 \u0E21\u0E35\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E49\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22\u0E23\u0E32\u0E04\u0E32<br/>\xB7 <strong>Food delivery</strong> \u2014 \u0E2A\u0E31\u0E48\u0E07 LineMan / GrabFood / Foodpanda \u0E21\u0E32\u0E17\u0E32\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28<br/>\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01 \u0E46 \u0E41\u0E19\u0E30\u0E19\u0E33\u0E43\u0E2B\u0E49\u0E25\u0E2D\u0E07\u0E0A\u0E27\u0E19\u0E1E\u0E35\u0E48\u0E43\u0E19\u0E17\u0E35\u0E21\u0E44\u0E1B\u0E17\u0E32\u0E19\u0E14\u0E49\u0E27\u0E22")}
        ${acc("11. \u0E1B\u0E23\u0E34\u0E49\u0E19\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E41\u0E01\u0E19\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 \u0E17\u0E33\u0E22\u0E31\u0E07\u0E44\u0E07?", "\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28\u0E21\u0E35\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1B\u0E23\u0E34\u0E49\u0E19/\u0E2A\u0E41\u0E01\u0E19\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 \u2014 \u0E2A\u0E2D\u0E1A\u0E16\u0E32\u0E21\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E2B\u0E23\u0E37\u0E2D\u0E1E\u0E35\u0E48\u0E43\u0E19\u0E17\u0E35\u0E21\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32 \xB7 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27 (\u0E40\u0E0A\u0E48\u0E19 \u0E2A\u0E33\u0E40\u0E19\u0E32\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19) \u0E41\u0E19\u0E30\u0E19\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E21\u0E32\u0E08\u0E32\u0E01\u0E17\u0E35\u0E48\u0E1A\u0E49\u0E32\u0E19")}
      </div>
    </div>

    <div class="faq-group is-visible" data-faq-group="growth">
      <div class="faq-section-hd">
        <span class="faq-section-ico">${I.rocket}</span>
        <h2>\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E40\u0E15\u0E34\u0E1A\u0E42\u0E15</h2>
      </div>
      <div class="accordion">
        ${acc("12. \u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E2D\u0E30\u0E44\u0E23\u0E1A\u0E49\u0E32\u0E07\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19?", "Intern \u0E08\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C 3 \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17:<br/><strong>1. Project / Report</strong> \u2014 \u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E19\u0E33\u0E2A\u0E48\u0E07\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22<br/><strong>2. Dev Team Project</strong> \u2014 \u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E17\u0E35\u0E48 Dev Team led by EXZY Assign \u0E43\u0E2B\u0E49<br/><strong>3. HR / BD Project</strong> \u2014 \u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E17\u0E35\u0E48 HR \u0E2B\u0E23\u0E37\u0E2D BD Assign \u0E43\u0E2B\u0E49<br/>\u0E17\u0E31\u0E49\u0E07 3 \u0E02\u0E49\u0E2D\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E48\u0E07\u0E15\u0E32\u0E21\u0E23\u0E30\u0E22\u0E30\u0E40\u0E27\u0E25\u0E32\u0E17\u0E35\u0E48\u0E17\u0E32\u0E07\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22\u0E41\u0E25\u0E30 EXZY \u0E01\u0E33\u0E2B\u0E19\u0E14")}
        ${acc("13. \u0E44\u0E21\u0E48\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22 \u0E17\u0E33\u0E22\u0E31\u0E07\u0E44\u0E07?", "<strong>\u0E16\u0E32\u0E21\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E17\u0E31\u0E19\u0E17\u0E35</strong> \u2014 \u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49\u0E04\u0E19\u0E40\u0E14\u0E35\u0E22\u0E27 \xB7 \u0E40\u0E02\u0E35\u0E22\u0E19 notes \u0E01\u0E48\u0E2D\u0E19\u0E16\u0E32\u0E21\u0E27\u0E48\u0E32\u0E15\u0E23\u0E07\u0E44\u0E2B\u0E19\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08 \u0E08\u0E30\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E15\u0E2D\u0E1A\u0E44\u0E14\u0E49\u0E15\u0E23\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E14\u0E47\u0E19")}
      </div>
    </div>

    <div class="callout" style="margin-top:32px;">
      <span class="ic">${I.mail}</span>
      <div>
        <h4>\u0E21\u0E35\u0E04\u0E33\u0E16\u0E32\u0E21\u0E2D\u0E37\u0E48\u0E19 \u0E46?</h4>
        <p>\u0E16\u0E32\u0E21\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E42\u0E14\u0E22\u0E15\u0E23\u0E07 \u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E48\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E16\u0E36\u0E07 HR \u0E17\u0E35\u0E48 <a href="mailto:hr@exzyteam.com"><strong>hr@exzyteam.com</strong></a></p>
      </div>
    </div>

    <div class="page-cta-strip">
      <div>
        <h4>\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E14\u0E39\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E02\u0E2D\u0E07\u0E23\u0E38\u0E48\u0E19\u0E1E\u0E35\u0E48?</h4>
        <p>Intern \u0E23\u0E38\u0E48\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E1D\u0E32\u0E01\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C \u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21 \u0E41\u0E25\u0E30 Project \u0E44\u0E27\u0E49\u0E17\u0E35\u0E48 Showcase</p>
      </div>
      <div class="cta-btns">
        <a href="#/showcase/experiences" class="btn btn-ghost" data-link>Intern Experiences ${I.arrow}</a>
        <a href="#/showcase/blog" class="btn btn-primary" data-link>Intern Blog ${I.arrow}</a>
      </div>
    </div>

    <script>
      (function() {
        var filter = document.getElementById('faq-filter');
        if (!filter) return;
        filter.addEventListener('click', function(e) {
          var btn = e.target.closest('.faq-filter-btn');
          if (!btn) return;
          var cat = btn.dataset.faqCat;
          document.querySelectorAll('.faq-filter-btn').forEach(function(b) { b.classList.remove('is-active'); });
          btn.classList.add('is-active');
          document.querySelectorAll('.faq-group').forEach(function(g) {
            if (cat === 'all' || g.dataset.faqGroup === cat) g.classList.add('is-visible');
            else g.classList.remove('is-visible');
          });
        });
      })();
    <\/script>
  `
  });

  // app.js
  var Pages = {
    home: () => renderHome(),
    "first-day": () => renderFirstDay(loadAdminData()),
    "getting-started/orientation": () => renderOrientation(),
    "getting-started/wifi": () => renderWifi(),
    "getting-started/meeting-rooms": () => renderMeetingRooms(),
    "employee/org-chart": () => renderOrgChart(),
    "employee/directory": () => renderDirectory(),
    "policy/code-of-conduct": () => renderCodeOfConduct(),
    "policy/internship": () => renderInternshipPolicy(),
    "policy/dress-code": () => renderDressCode(),
    "policy/leave": () => renderLeave(),
    "resources/timesheet": () => renderTimesheet(),
    "resources/faqs": () => renderFaqs(),
    "showcase/experiences": () => showcasePage("experiences"),
    "showcase/projects": () => showcasePage("experiences"),
    "showcase/blog": () => showcasePage("blog")
  };
  var app = document.getElementById("app");
  function resolve(hash) {
    let route = hash.replace(/^#\/?/, "").trim();
    if (!route) route = "home";
    return route;
  }
  function render() {
    const hash = location.hash || "#/home";
    const route = resolve(hash);
    const renderFn = Pages[route] || Pages.home;
    app.classList.add("page-exiting");
    setTimeout(function() {
      app.innerHTML = renderFn();
      app.classList.remove("page-exiting");
      app.classList.add("page-entering");
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
      hydratePage();
      updateActiveNav(route);
      setTimeout(function() {
        app.classList.remove("page-entering");
      }, 700);
    }, 110);
  }
  function hydratePage() {
    const data = loadAdminData();
    document.querySelectorAll("[data-text]").forEach((el) => {
      const k = el.getAttribute("data-text");
      if (el.getAttribute("data-masked") === "true") return;
      if (data[k] !== void 0 && data[k] !== "") el.textContent = data[k];
    });
    document.querySelectorAll("[data-link-key]").forEach((el) => {
      const k = el.getAttribute("data-link-key");
      if (data[k]) el.setAttribute("href", data[k]);
    });
    const slidesBody = document.getElementById("slides-embed-body");
    if (slidesBody) {
      const slidesUrl = data.orientation_slides_url;
      if (slidesUrl) {
        slidesBody.innerHTML = `<iframe src="${slidesUrl}" class="slides-pdf-frame" allowfullscreen></iframe>`;
      }
    }
    const wifiTabs = document.querySelectorAll(".wifi-tab[data-wifi-tab]");
    if (wifiTabs.length) {
      wifiTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          const target = tab.getAttribute("data-wifi-tab");
          document.querySelectorAll(".wifi-tab").forEach((t) => t.classList.toggle("is-active", t === tab));
          document.querySelectorAll(".wifi-panel").forEach((p) => {
            p.hidden = p.getAttribute("data-wifi-panel") !== target;
          });
        });
      });
    }
    document.querySelectorAll(".wifi-qr[data-qr], .wn-qr[data-qr], .wf2-qr[data-qr]").forEach((box) => {
      const which = box.getAttribute("data-qr");
      const ssid = which === "staff" ? data.wifi_staff_ssid : data.wifi_guest_ssid;
      const pass = which === "staff" ? data.wifi_staff_pass : data.wifi_guest_pass;
      const wifiStr = `WIFI:T:WPA;S:${ssid};P:${pass};;`;
      try {
        if (typeof qrcode !== "function") throw new Error("QR library is not loaded");
        const q = qrcode(0, "L");
        q.addData(wifiStr);
        q.make();
        box.innerHTML = q.createSvgTag(5, 4);
      } catch (e) {
        box.innerHTML = '<p style="color:var(--muted); font-size:13px; padding:20px;">QR \u0E44\u0E21\u0E48\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19</p>';
      }
    });
    (function() {
      var revEls = document.querySelectorAll(".fdb-reveal");
      if (!revEls.length) return;
      var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
          if (e.isIntersecting) {
            e.target.classList.add("fdb-vis");
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.07 });
      revEls.forEach(function(el) {
        obs.observe(el);
      });
    })();
    var fdaTabs = document.querySelectorAll(".fda-tab");
    if (fdaTabs.length) {
      window.fdaTab = function(idx) {
        document.querySelectorAll(".fda-tab").forEach(function(t, i) {
          t.classList.toggle("active", i === idx);
        });
        document.querySelectorAll(".fda-panel").forEach(function(p, i) {
          p.classList.toggle("active", i === idx);
        });
      };
      fdaTabs.forEach(function(tab, idx) {
        tab.addEventListener("click", function() {
          window.fdaTab(idx);
        });
      });
    }
    document.querySelectorAll("[data-copy]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const k = btn.getAttribute("data-copy");
        const val = loadAdminData()[k];
        if (!val) return;
        if (navigator.clipboard?.writeText) {
          navigator.clipboard.writeText(val).then(() => {
            btn.classList.add("is-copied");
            showToast("\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E41\u0E25\u0E49\u0E27");
            setTimeout(() => btn.classList.remove("is-copied"), 1500);
          });
        }
      });
    });
    document.querySelectorAll("[data-toggle-pass]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-toggle-pass");
        const span = document.querySelector(`.wifi-pass-val[data-text="${key}"]`);
        if (!span) return;
        const masked = span.getAttribute("data-masked") === "true";
        if (masked) {
          const realVal = loadAdminData()[key] || span.textContent;
          span.textContent = realVal;
          span.setAttribute("data-masked", "false");
          btn.innerHTML = '<span class="pass-toggle-eye"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg></span>\u0E0B\u0E48\u0E2D\u0E19';
        } else {
          span.textContent = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
          span.setAttribute("data-masked", "true");
          btn.innerHTML = '<span class="pass-toggle-eye"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></span>\u0E41\u0E2A\u0E14\u0E07';
        }
      });
    });
    document.querySelectorAll(".wifi-connect").forEach((btn) => {
      btn.addEventListener("click", () => {
        const which = btn.getAttribute("data-wifi");
        const d = loadAdminData();
        const ssid = which === "staff" ? d.wifi_staff_ssid : d.wifi_guest_ssid;
        const pass = which === "staff" ? d.wifi_staff_pass : d.wifi_guest_pass;
        if (navigator.clipboard?.writeText) {
          navigator.clipboard.writeText(pass).then(() => {
            showToast(`\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E02\u0E2D\u0E07 ${ssid} \u0E41\u0E25\u0E49\u0E27 \xB7 \u0E40\u0E1B\u0E34\u0E14\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32 Wi-Fi`);
          });
        }
      });
    });
    (function() {
      var tabs = document.querySelectorAll("[data-wifi-tab-v2]");
      if (!tabs.length) return;
      tabs.forEach(function(tab) {
        tab.addEventListener("click", function() {
          var target = tab.getAttribute("data-wifi-tab-v2");
          tabs.forEach(function(t) {
            t.classList.remove("is-active", "wn-sel-active");
          });
          tab.classList.add("is-active", "wn-sel-active");
          document.querySelectorAll("[data-wifi-panel-v2]").forEach(function(p) {
            p.hidden = p.getAttribute("data-wifi-panel-v2") !== target;
          });
        });
      });
    })();
    (function() {
      function wirePassToggle(btnId, displayId, defaultPass) {
        var btn = document.getElementById(btnId);
        var display = document.getElementById(displayId);
        if (!btn || !display) return;
        btn.addEventListener("click", function() {
          var d = loadAdminData();
          var raw = (btnId.includes("staff") ? d.wifi_staff_pass : d.wifi_guest_pass) || defaultPass;
          if (display.textContent.includes("\u2022")) {
            display.textContent = raw;
          } else {
            display.textContent = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
          }
        });
      }
      wirePassToggle("v2-staff-pass-toggle", "v2-staff-pass-display", "maetyzxe");
      wirePassToggle("v2-guest-pass-toggle", "v2-guest-pass-display", "imaguest");
    })();
    document.querySelectorAll(".wf2-connect-btn").forEach(function(btn) {
      btn.addEventListener("click", function() {
        var which = btn.getAttribute("data-wifi");
        var d = loadAdminData();
        var ssid = which === "staff" ? d.wifi_staff_ssid : d.wifi_guest_ssid;
        var pass = which === "staff" ? d.wifi_staff_pass : d.wifi_guest_pass;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(pass || "").then(function() {
            showToast("\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E02\u0E2D\u0E07 " + ssid + " \u0E41\u0E25\u0E49\u0E27 \xB7 \u0E40\u0E1B\u0E34\u0E14\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32 Wi-Fi");
          });
        }
      });
    });
    const dirGateForm = document.getElementById("dir-gate-form");
    const dirPwInput = document.getElementById("dir-pw-input");
    const dirGateErr = document.getElementById("dir-gate-err");
    if (dirGateForm && dirPwInput) {
      dirGateForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const typed = dirPwInput.value.trim();
        const expected = getDirectoryAccessKey();
        if (!typed) return;
        if (typed === expected) {
          setDirectoryUnlocked(true);
          showToast("\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01 Employee Contact \u0E41\u0E25\u0E49\u0E27");
          render();
          return;
        }
        if (dirGateErr) dirGateErr.hidden = false;
        dirPwInput.classList.add("is-error");
      });
      dirPwInput.addEventListener("input", () => {
        if (dirGateErr) dirGateErr.hidden = true;
        dirPwInput.classList.remove("is-error");
      });
    }
    const dirLockBtn = document.getElementById("dir-lock-btn");
    if (dirLockBtn) {
      dirLockBtn.addEventListener("click", () => {
        setDirectoryUnlocked(false);
        showToast("\u0E25\u0E47\u0E2D\u0E01 Employee Contact \u0E41\u0E25\u0E49\u0E27");
        render();
      });
    }
    const dirQ = document.getElementById("dir-q");
    const dirTeam = document.getElementById("dir-team");
    const dirCount = document.getElementById("dir-count");
    const dirEmpty = document.getElementById("dir-empty");
    const dirRows = document.querySelectorAll("#dir-tbody tr");
    if (dirQ && dirRows.length) {
      const filterDir = () => {
        const q = dirQ.value.trim().toLowerCase();
        const team = dirTeam.value;
        let n = 0;
        dirRows.forEach((tr) => {
          const matchQ = !q || tr.dataset.search.includes(q);
          const matchT = !team || tr.dataset.team === team;
          const show = matchQ && matchT;
          tr.style.display = show ? "" : "none";
          if (show) n++;
        });
        dirCount.textContent = `${n} \u0E04\u0E19`;
        dirEmpty.hidden = n > 0;
      };
      dirQ.addEventListener("input", filterDir);
      dirTeam.addEventListener("change", filterDir);
    }
    app.querySelectorAll("[data-scroll-to]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = btn.getAttribute("data-scroll-to");
        const target = document.getElementById(id);
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
      });
    });
    app.querySelectorAll(".acc-item").forEach((item) => {
      const trigger = item.querySelector(".acc-trigger");
      const body = item.querySelector(".acc-body");
      trigger.addEventListener("click", () => {
        const isOpen = item.classList.toggle("open");
        if (isOpen) {
          body.style.maxHeight = body.scrollHeight + "px";
        } else {
          body.style.maxHeight = "0";
        }
      });
    });
    const tocLinks = app.querySelectorAll(".toc a[data-anchor]");
    if (tocLinks.length) {
      tocLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const id = link.getAttribute("href").slice(1);
          const target = document.getElementById(id);
          if (target) {
            const top = target.getBoundingClientRect().top + window.scrollY - 90;
            window.scrollTo({ top, behavior: "smooth" });
          }
        });
      });
      const sections = Array.from(app.querySelectorAll(".prose h2[id]"));
      const onScroll = () => {
        const y = window.scrollY + 110;
        let active = sections[0];
        for (const s of sections) {
          if (s.offsetTop <= y) active = s;
        }
        tocLinks.forEach((l) => l.classList.remove("is-active"));
        if (active) {
          const link = app.querySelector(`.toc a[href="#${active.id}"]`);
          if (link) link.classList.add("is-active");
        }
      };
      window.removeEventListener("scroll", window.__tocScroll || (() => {
      }));
      window.__tocScroll = onScroll;
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
    (function() {
      var els = app.querySelectorAll(".fade-up, .anim-up, .anim-down, .anim-left, .anim-right, .anim-scale, .anim-pop, .anim-blur");
      if (!els.length) return;
      var timers = /* @__PURE__ */ new WeakMap();
      var io = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
          var el = e.target;
          if (timers.has(el)) {
            clearTimeout(timers.get(el));
            timers.delete(el);
          }
          if (e.isIntersecting) {
            var delay = parseInt(el.getAttribute("data-delay") || "0", 10);
            var tid = setTimeout(function() {
              el.classList.add("is-visible");
            }, delay);
            timers.set(el, tid);
          } else {
            el.classList.remove("is-visible");
          }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -20px 0px" });
      els.forEach(function(el) {
        var parent = el.parentElement;
        if (parent && !el.hasAttribute("data-delay")) {
          var siblings = Array.from(parent.querySelectorAll(":scope > .fade-up, :scope > .anim-up, :scope > .anim-scale, :scope > .anim-pop"));
          var idx = siblings.indexOf(el);
          if (idx > 0) el.setAttribute("data-delay", String(idx * 90));
        }
        io.observe(el);
      });
    })();
    (function() {
      var nav = app.querySelector("#tl-nav");
      var panels = app.querySelector("#tl-panels");
      if (!nav || !panels) return;
      var tabs = Array.prototype.slice.call(nav.querySelectorAll(".tl-tab"));
      var panes = Array.prototype.slice.call(panels.querySelectorAll(".tl-panel"));
      var fill = app.querySelector("#tl-track-fill");
      var active = 0;
      function activate(idx) {
        idx = Math.max(0, Math.min(tabs.length - 1, idx));
        active = idx;
        tabs.forEach(function(t, i) {
          t.classList.toggle("is-active", i === idx);
        });
        panes.forEach(function(p, i) {
          p.classList.toggle("is-active", i === idx);
        });
        if (fill && tabs.length > 1) {
          var pct = idx / (tabs.length - 1) * 100;
          fill.style.width = pct + "%";
        }
      }
      tabs.forEach(function(tab, i) {
        tab.addEventListener("click", function() {
          activate(i);
        });
      });
      activate(0);
    })();
    app.querySelectorAll("[data-count-to]").forEach(function(el) {
      var target = parseFloat(el.getAttribute("data-count-to"));
      var prefix = el.getAttribute("data-count-prefix") || "";
      var suffix = el.getAttribute("data-count-suffix") || "";
      var started = false;
      var io2 = new IntersectionObserver(function(entries) {
        if (!entries[0].isIntersecting || started) return;
        started = true;
        io2.disconnect();
        var t0 = performance.now();
        function tick(now) {
          var t = Math.min((now - t0) / 1100, 1);
          var v = 1 - Math.pow(1 - t, 3);
          el.textContent = prefix + Math.round(target * v).toLocaleString() + suffix;
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }, { threshold: 0.5 });
      io2.observe(el);
    });
  }
  function updateActiveNav(route) {
    document.querySelectorAll(".nav-links a, .nav-right a").forEach((a) => {
      const href = a.getAttribute("href") || "";
      const r = href.replace(/^#\/?/, "");
      a.classList.toggle("is-active", r === route);
    });
    document.querySelectorAll(".nav-group").forEach((g) => {
      const hasActive = g.querySelector(".nav-menu a.is-active");
      const toggle = g.querySelector(".nav-toggle");
      if (toggle) toggle.classList.toggle("is-active", !!hasActive);
    });
  }
  function initNav() {
    const navbar = document.getElementById("navbar");
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a[data-link]");
      if (a) {
        const href = a.getAttribute("href");
        if (href && href.startsWith("#")) {
          document.querySelectorAll(".nav-group.open").forEach((g) => g.classList.remove("open"));
          if (navbar.classList.contains("mobile-open")) {
            setTimeout(() => setMobileMenu(false), 50);
          }
        }
      }
    });
    document.querySelectorAll(".nav-group").forEach((group) => {
      const toggle = group.querySelector(".nav-toggle");
      const isMobile = () => window.matchMedia("(max-width: 760px)").matches;
      group.addEventListener("mouseenter", () => {
        if (isMobile()) return;
        document.querySelectorAll(".nav-group.open").forEach((g) => {
          if (g !== group) g.classList.remove("open");
        });
        group.classList.add("open");
        toggle.setAttribute("aria-expanded", "true");
      });
      group.addEventListener("mouseleave", () => {
        if (isMobile()) return;
        group.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const wasOpen = group.classList.contains("open");
        document.querySelectorAll(".nav-group.open").forEach((g) => g.classList.remove("open"));
        if (!wasOpen) {
          group.classList.add("open");
          toggle.setAttribute("aria-expanded", "true");
        } else {
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav-group")) {
        document.querySelectorAll(".nav-group.open").forEach((g) => g.classList.remove("open"));
      }
    });
    const burger = document.getElementById("burger");
    const navLinks = document.querySelector(".nav-links");
    const navRight = document.querySelector(".nav-right");
    const showcaseGroup = navRight ? navRight.querySelector(".nav-group") : null;
    function setMobileMenu(open) {
      if (open) {
        navbar.classList.add("mobile-open");
        if (showcaseGroup && navLinks && showcaseGroup.parentElement !== navLinks) {
          showcaseGroup.classList.add("nav-showcase-mobile");
          navLinks.appendChild(showcaseGroup);
        }
      } else {
        navbar.classList.remove("mobile-open");
        if (showcaseGroup && navRight && showcaseGroup.parentElement !== navRight) {
          showcaseGroup.classList.remove("nav-showcase-mobile");
          navRight.appendChild(showcaseGroup);
        }
        document.querySelectorAll(".nav-group.open").forEach((g) => g.classList.remove("open"));
      }
    }
    burger.addEventListener("click", () => {
      setMobileMenu(!navbar.classList.contains("mobile-open"));
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760 && navbar.classList.contains("mobile-open")) {
        setMobileMenu(false);
      }
    });
    const onScroll = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
  function initAdminMode() {
    const adminBar = document.getElementById("admin-bar");
    const loginModal = document.getElementById("admin-login");
    const modal = document.getElementById("admin-modal");
    const modalBody = document.getElementById("admin-modal-body");
    const pwInput = document.getElementById("admin-pw");
    const pwErr = document.getElementById("admin-pw-err");
    const loginSubmit = document.getElementById("admin-login-submit");
    const openBtn = document.getElementById("admin-open");
    const exitBtn = document.getElementById("admin-exit");
    const saveBtn = document.getElementById("admin-save");
    if (isAdmin()) {
      adminBar.hidden = false;
    }
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.altKey && e.shiftKey && (e.key === "H" || e.key === "h")) {
        e.preventDefault();
        if (isAdmin()) openAdminModal();
        else showAdminLogin();
      }
    });
    const logo = document.querySelector(".nav-logo");
    let clicks = 0, clickTimer = null;
    if (logo) {
      logo.addEventListener("click", (e) => {
        clicks++;
        if (clickTimer) clearTimeout(clickTimer);
        if (clicks >= 8) {
          e.preventDefault();
          clicks = 0;
          if (isAdmin()) openAdminModal();
          else showAdminLogin();
        } else {
          clickTimer = setTimeout(() => {
            clicks = 0;
          }, 3e3);
        }
      });
    }
    function showAdminLogin() {
      loginModal.hidden = false;
      pwErr.hidden = true;
      pwInput.value = "";
      setTimeout(() => pwInput.focus(), 50);
    }
    function hideAdminLogin() {
      loginModal.hidden = true;
    }
    function openAdminModal() {
      modalBody.innerHTML = buildAdminForm();
      modal.hidden = false;
      modalBody.querySelectorAll(".admin-tab").forEach((tab) => {
        tab.addEventListener("click", () => {
          modalBody.querySelectorAll(".admin-tab").forEach((t) => t.classList.remove("is-active"));
          modalBody.querySelectorAll(".admin-section").forEach((s) => s.style.display = "none");
          tab.classList.add("is-active");
          const target = modalBody.querySelector(`.admin-section[data-tab="${tab.dataset.tab}"]`);
          if (target) target.style.display = "block";
        });
      });
      initShowcaseAdmin();
    }
    function closeAdminModal() {
      modal.hidden = true;
    }
    function escAttr(s) {
      return String(s || "").replace(/"/g, "&quot;").replace(/</g, "&lt;");
    }
    function buildAdminForm() {
      const d = loadAdminData();
      return `
      <div class="admin-tabs">
        <button class="admin-tab is-active" data-tab="wifi">Wi-Fi</button>
        <button class="admin-tab" data-tab="links">\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 &amp; \u0E25\u0E34\u0E07\u0E01\u0E4C</button>
        <button class="admin-tab" data-tab="showcase">Showcase</button>
        <button class="admin-tab" data-tab="hr">\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 HR</button>
      </div>

      <div class="admin-section" data-tab="wifi">
        <div class="admin-section-title">Wi-Fi \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19 / Intern</div>
        <div class="admin-field">
          <label>SSID (\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22)</label>
          <input class="admin-input mono" data-field="wifi_staff_ssid" value="${escAttr(d.wifi_staff_ssid)}" />
        </div>
        <div class="admin-field">
          <label>\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19</label>
          <input class="admin-input mono" data-field="wifi_staff_pass" value="${escAttr(d.wifi_staff_pass)}" />
        </div>
        <div class="admin-section-title" style="margin-top:24px;">Wi-Fi \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E41\u0E02\u0E01 (Guest)</div>
        <div class="admin-field">
          <label>SSID (\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22)</label>
          <input class="admin-input mono" data-field="wifi_guest_ssid" value="${escAttr(d.wifi_guest_ssid)}" />
        </div>
        <div class="admin-field">
          <label>\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19</label>
          <input class="admin-input mono" data-field="wifi_guest_pass" value="${escAttr(d.wifi_guest_pass)}" />
        </div>
      </div>

      <div class="admin-section" data-tab="links" style="display:none;">
        <div class="admin-section-title">\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 Orientation</div>
        <div class="admin-field">
          <label>Google Slides embed URL (\u0E41\u0E2A\u0E14\u0E07\u0E41\u0E1A\u0E1A iframe)</label>
          <input class="admin-input mono" data-field="orientation_slides_url" value="${escAttr(d.orientation_slides_url)}" placeholder="https://docs.google.com/presentation/d/.../embed?..." />
          <p class="hint">Google Slides \u2192 File \u2192 Share \u2192 Publish to web \u2192 Embed \u2192 \u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01 src \u0E02\u0E2D\u0E07 iframe \u0E21\u0E32\u0E27\u0E32\u0E07\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48</p>
        </div>
        <div class="admin-field">
          <label>\u0E25\u0E34\u0E07\u0E01\u0E4C PDF \u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14 (Google Drive \u0E2B\u0E23\u0E37\u0E2D URL \u0E15\u0E23\u0E07)</label>
          <input class="admin-input mono" data-field="orientation_pdf_url" value="${escAttr(d.orientation_pdf_url)}" placeholder="https://drive.google.com/uc?export=download&id=..." />
          <p class="hint">\u0E2B\u0E32\u0E01\u0E43\u0E0A\u0E49 Google Drive: \u0E40\u0E1B\u0E34\u0E14\u0E44\u0E1F\u0E25\u0E4C \u2192 Share \u2192 Copy link \u0E41\u0E25\u0E49\u0E27\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19 /view \u0E40\u0E1B\u0E47\u0E19 /export?format=pdf \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E14\u0E49\u0E15\u0E23\u0E07</p>
        </div>
        <div class="admin-section-title" style="margin-top:24px;">Employee Directory</div>
        <div class="admin-field">
          <label>Google Sheet embed URL</label>
          <input class="admin-input mono" data-field="directory_sheet_url" value="${escAttr(d.directory_sheet_url)}" placeholder="https://docs.google.com/spreadsheets/d/.../pubhtml?widget=true&headers=false" />
          <p class="hint">Google Sheet \u2192 File \u2192 Share \u2192 Publish to web \u2192 Embed \u2192 \u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01 src \u0E02\u0E2D\u0E07 iframe</p>
        </div>
        <div class="admin-field">
          <label>\u0E23\u0E2B\u0E31\u0E2A\u0E40\u0E02\u0E49\u0E32 Employee Contact</label>
          <input class="admin-input mono" data-field="directory_access_key" value="${escAttr(d.directory_access_key || ADMIN_PASSWORD)}" placeholder="\u0E15\u0E31\u0E49\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32 Employee Contact" />
          <p class="hint">\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E2B\u0E19\u0E49\u0E32 Employee Contact \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19</p>
        </div>
      </div>

      <div class="admin-section" data-tab="showcase" style="display:none;">
        <input type="hidden" id="sc-json" data-field="showcase_items" value="${escAttr(d.showcase_items || "[]")}" />

        <div class="admin-section-title" style="margin-bottom:12px;">\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23 Intern Showcase</div>
        <div class="admin-sc-tabs" id="sc-tabs">
          <button class="admin-sc-tab is-active" data-sc="experiences">Experiences</button>
          <button class="admin-sc-tab" data-sc="projects">Projects</button>
          <button class="admin-sc-tab" data-sc="blog">Blog</button>
        </div>

        <div id="sc-list" style="margin:16px 0 0;"></div>

        <div style="border-top:1px solid var(--line-soft); margin-top:20px; padding-top:18px;">
          <div class="admin-section-title" style="margin-bottom:12px;">\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E21\u0E48</div>
          <div class="admin-field">
            <label>\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48</label>
            <select class="admin-input" id="sc-cat">
              <option value="experiences">Experiences (\u0E04\u0E25\u0E34\u0E1B / \u0E23\u0E35\u0E27\u0E34\u0E27)</option>
              <option value="projects">Projects (\u0E1C\u0E25\u0E07\u0E32\u0E19)</option>
              <option value="blog">Blog (\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21)</option>
            </select>
          </div>
          <div class="admin-field">
            <label>\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07 / Title</label>
            <input class="admin-input" id="sc-title" placeholder="\u0E40\u0E0A\u0E48\u0E19 \u0E2B\u0E19\u0E36\u0E48\u0E07\u0E27\u0E31\u0E19\u0E43\u0E19\u0E0A\u0E35\u0E27\u0E34\u0E15 intern Designer" />
          </div>
          <div class="admin-field" style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
            <div>
              <label>Badge / Platform</label>
              <input class="admin-input" id="sc-badge" placeholder="TikTok, Medium, Project\u2026" />
            </div>
            <div>
              <label>Meta (\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 / \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17)</label>
              <input class="admin-input" id="sc-meta" placeholder="2 \u0E19\u0E32\u0E17\u0E35, 8 min read, UI/UX\u2026" />
            </div>
          </div>
          <div class="admin-field">
            <label>\u0E25\u0E34\u0E07\u0E01\u0E4C URL (\u0E16\u0E49\u0E32\u0E21\u0E35)</label>
            <input class="admin-input mono" id="sc-url" placeholder="https://..." />
          </div>
          <button class="btn btn-primary" id="sc-add" style="width:100%; margin-top:4px; justify-content:center;">
            ${I.plus} \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23
          </button>
        </div>
      </div>

      <div class="admin-section" data-tab="hr" style="display:none;">
        <div class="admin-section-title">\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D HR</div>
        <div class="admin-field">
          <label>\u0E0A\u0E37\u0E48\u0E2D HR</label>
          <input class="admin-input" data-field="hr_name" value="${escAttr(d.hr_name)}" />
        </div>
        <div class="admin-field">
          <label>\u0E2D\u0E35\u0E40\u0E21\u0E25 HR</label>
          <input class="admin-input mono" data-field="hr_email" value="${escAttr(d.hr_email)}" />
        </div>
        <div class="admin-field">
          <label>\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23 HR</label>
          <input class="admin-input mono" data-field="hr_phone" value="${escAttr(d.hr_phone)}" />
        </div>
      </div>
    `;
    }
    function initShowcaseAdmin() {
      const jsonField = modalBody.querySelector("#sc-json");
      if (!jsonField) return;
      let scItems = [];
      try {
        scItems = JSON.parse(jsonField.value || "[]");
      } catch (e) {
      }
      let activeScTab = "experiences";
      const SC_LABEL = { experiences: "Experiences", projects: "Projects", blog: "Blog" };
      function syncJson() {
        jsonField.value = JSON.stringify(scItems);
      }
      function renderList() {
        const listEl = modalBody.querySelector("#sc-list");
        if (!listEl) return;
        const filtered = scItems.filter((i) => i.category === activeScTab);
        if (filtered.length === 0) {
          listEl.innerHTML = `<p style="font-size:13px; color:var(--muted); padding:10px 0; margin:0;">\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E43\u0E19 ${SC_LABEL[activeScTab]}</p>`;
          return;
        }
        listEl.innerHTML = filtered.map((item) => {
          const idx = scItems.indexOf(item);
          const crossSvg = I.check.replace("M20 6L9 17l-5-5", "M18 6L6 18M6 6l12 12");
          return `<div class="sc-admin-item" data-idx="${idx}">
          <div class="sc-admin-info">
            <span class="badge" style="font-size:11px; padding:2px 9px; border-radius:6px;">${escAttr(item.badge)}</span>
            <span class="sc-admin-title">${escAttr(item.title)}</span>
            <span class="sc-admin-meta">${escAttr(item.meta)}</span>
            ${item.url ? `<a href="${escAttr(item.url)}" target="_blank" class="sc-admin-link">${I.external}</a>` : ""}
          </div>
          <button class="sc-del-btn" data-idx="${idx}" title="\u0E25\u0E1A" aria-label="\u0E25\u0E1A">${crossSvg}</button>
        </div>`;
        }).join("");
        listEl.querySelectorAll(".sc-del-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const idx = parseInt(btn.dataset.idx, 10);
            scItems.splice(idx, 1);
            syncJson();
            renderList();
          });
        });
      }
      modalBody.querySelectorAll(".admin-sc-tab").forEach((tab) => {
        tab.addEventListener("click", () => {
          modalBody.querySelectorAll(".admin-sc-tab").forEach((t) => t.classList.remove("is-active"));
          tab.classList.add("is-active");
          activeScTab = tab.dataset.sc;
          const catSel = modalBody.querySelector("#sc-cat");
          if (catSel) catSel.value = activeScTab;
          renderList();
        });
      });
      const addBtn = modalBody.querySelector("#sc-add");
      if (addBtn) {
        addBtn.addEventListener("click", () => {
          const titleEl = modalBody.querySelector("#sc-title");
          const badgeEl = modalBody.querySelector("#sc-badge");
          const metaEl = modalBody.querySelector("#sc-meta");
          const urlEl = modalBody.querySelector("#sc-url");
          const catEl = modalBody.querySelector("#sc-cat");
          const title = (titleEl ? titleEl.value : "").trim();
          if (!title) {
            titleEl && titleEl.focus();
            return;
          }
          const newItem = {
            id: Date.now().toString(36),
            category: catEl ? catEl.value : "experiences",
            badge: (badgeEl ? badgeEl.value : "").trim(),
            meta: (metaEl ? metaEl.value : "").trim(),
            title,
            url: (urlEl ? urlEl.value : "").trim()
          };
          scItems.push(newItem);
          syncJson();
          activeScTab = newItem.category;
          modalBody.querySelectorAll(".admin-sc-tab").forEach((t) => {
            t.classList.toggle("is-active", t.dataset.sc === activeScTab);
          });
          if (titleEl) titleEl.value = "";
          if (badgeEl) badgeEl.value = "";
          if (metaEl) metaEl.value = "";
          if (urlEl) urlEl.value = "";
          renderList();
        });
      }
      renderList();
    }
    loginSubmit.addEventListener("click", tryLogin);
    pwInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") tryLogin();
    });
    function tryLogin() {
      const val = pwInput.value.trim();
      if (val === ADMIN_PASSWORD) {
        setAdmin(true);
        adminBar.hidden = false;
        hideAdminLogin();
        showToast("\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A Admin \u0E41\u0E25\u0E49\u0E27");
        openAdminModal();
      } else {
        pwErr.hidden = false;
        pwInput.value = "";
        pwInput.focus();
      }
    }
    saveBtn.addEventListener("click", () => {
      const data = loadAdminData();
      modalBody.querySelectorAll("[data-field]").forEach((input) => {
        const k = input.getAttribute("data-field");
        data[k] = input.value;
      });
      if (saveAdminData(data)) {
        showToast("\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E41\u0E25\u0E49\u0E27");
        closeAdminModal();
        render();
      } else {
        showToast("\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E43\u0E19\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01");
      }
    });
    openBtn.addEventListener("click", openAdminModal);
    exitBtn.addEventListener("click", () => {
      setAdmin(false);
      adminBar.hidden = true;
      showToast("\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01 Admin Mode \u0E41\u0E25\u0E49\u0E27");
    });
    document.querySelectorAll("[data-close]").forEach((el) => {
      el.addEventListener("click", () => {
        const target = el.getAttribute("data-close");
        if (target === "login") hideAdminLogin();
        else closeAdminModal();
      });
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (!modal.hidden) closeAdminModal();
        if (!loginModal.hidden) hideAdminLogin();
      }
    });
  }
  function initEnhancements() {
    if (!document.getElementById("scroll-progress")) {
      const bar = document.createElement("div");
      bar.id = "scroll-progress";
      document.body.insertBefore(bar, document.body.firstChild);
    }
    const progressBar = document.getElementById("scroll-progress");
    const onScrollProgress = function() {
      const scroll = window.scrollY || window.pageYOffset;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? Math.min(100, scroll / docH * 100) : 0;
      if (progressBar) progressBar.style.width = pct + "%";
    };
    window.removeEventListener("scroll", window.__scrollProgress || (() => {
    }));
    window.__scrollProgress = onScrollProgress;
    window.addEventListener("scroll", onScrollProgress, { passive: true });
    onScrollProgress();
    if (!document.getElementById("cursor-glow")) {
      const glow = document.createElement("div");
      glow.id = "cursor-glow";
      document.body.appendChild(glow);
    }
    const glowEl = document.getElementById("cursor-glow");
    const onMouseMove = function(e) {
      if (glowEl) {
        glowEl.style.left = e.clientX + "px";
        glowEl.style.top = e.clientY + "px";
      }
    };
    document.removeEventListener("mousemove", document.__cursorGlow || (() => {
    }));
    document.__cursorGlow = onMouseMove;
    document.addEventListener("mousemove", onMouseMove, { passive: true });
    const hero = document.querySelector(".hero");
    if (hero && !hero.querySelector(".hero-shape")) {
      ["a", "b", "c"].forEach((s) => {
        const d = document.createElement("div");
        d.className = "hero-shape shape-" + s;
        hero.appendChild(d);
      });
    }
    const shapes = Array.from(document.querySelectorAll(".hero .hero-shape"));
    const onParallax = () => {
      const sc = window.scrollY || window.pageYOffset;
      shapes.forEach((el, i) => {
        const depth = (i + 1) * 0.03;
        el.style.transform = `translateY(${Math.round(sc * depth)}px)`;
      });
    };
    window.removeEventListener("scroll", window.__heroParallax || (() => {
    }));
    window.__heroParallax = onParallax;
    window.addEventListener("scroll", onParallax, { passive: true });
    onParallax();
    document.querySelectorAll(".page-hero-band").forEach((band) => {
      if (band.querySelector(".phb-orb")) return;
      [1, 2].forEach((n) => {
        const orb = document.createElement("div");
        orb.className = `phb-orb phb-orb-${n}`;
        band.appendChild(orb);
      });
    });
    const tiltTargets = [
      ".card",
      ".reference-card",
      ".journey-card",
      ".cv-card",
      ".hb-card",
      ".team-card",
      ".wifi-card",
      ".mr-room-card",
      ".mr-feat-card",
      ".ptask-card",
      ".howto-step",
      ".rule-card",
      ".show-real-card",
      ".hbe-card",
      ".proj-card"
    ].join(",");
    document.querySelectorAll(tiltTargets).forEach((el) => {
      if (el.__tiltAttached) return;
      el.__tiltAttached = true;
      el.style.transformOrigin = "center";
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) / r.width;
        const dy = (e.clientY - cy) / r.height;
        el.style.transform = `perspective(900px) rotateX(${dy * -5}deg) rotateY(${dx * 7}deg) translateZ(6px)`;
        el.style.transition = "transform 0.1s ease";
      });
      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
        el.style.transition = "transform 0.6s cubic-bezier(0.34,1.2,0.64,1)";
        setTimeout(() => {
          el.style.transition = "";
        }, 650);
      });
    });
    document.querySelectorAll(".hb-link").forEach((el) => {
      if (el.__tiltAttached) return;
      el.__tiltAttached = true;
      el.style.transformOrigin = "center";
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) / r.width;
        const dy = (e.clientY - cy) / r.height;
        el.style.transform = `perspective(800px) rotateX(${dy * -6}deg) rotateY(${dx * 10}deg) translateZ(8px)`;
        el.style.transition = "transform 0.1s ease";
      });
      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
        el.style.transition = "transform 0.5s ease";
        setTimeout(() => {
          el.style.transition = "";
        }, 550);
      });
    });
    document.querySelectorAll(".btn-primary, .btn-cta-hero, .btn-hero").forEach((btn) => {
      if (btn.__magneticAttached) return;
      btn.__magneticAttached = true;
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) * 0.18;
        const dy = (e.clientY - cy) * 0.18;
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
        btn.style.transition = "transform 0.15s ease";
      });
      btn.addEventListener("pointerleave", () => {
        btn.style.transform = "";
        btn.style.transition = "transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)";
        setTimeout(() => {
          btn.style.transition = "";
        }, 600);
      });
    });
    document.querySelectorAll(".btn-primary, .btn-hero").forEach((btn) => {
      if (btn.__rippleAttached) return;
      btn.__rippleAttached = true;
      btn.style.position = "relative";
      btn.style.overflow = "hidden";
      btn.addEventListener("click", (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const ripple = document.createElement("span");
        ripple.className = "btn-ripple btn-ripple-wow";
        ripple.style.cssText = `left:${x}px;top:${y}px;width:${r.width * 2}px;height:${r.width * 2}px;margin-left:-${r.width}px;margin-top:-${r.width}px`;
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 750);
      });
    });
    document.querySelectorAll(".btn-cta-hero, .btn-hero").forEach((btn) => {
      if (btn.__sparkleAttached) return;
      btn.__sparkleAttached = true;
      btn.classList.add("btn-sparkle");
      btn.addEventListener("pointerenter", () => {
        for (let i = 0; i < 6; i++) {
          setTimeout(() => {
            const p = document.createElement("span");
            p.className = "btn-sparkle-particle";
            const angle = Math.random() * Math.PI * 2;
            const dist = 20 + Math.random() * 30;
            p.style.cssText = `
            left:${40 + Math.random() * 20}%;
            top:${20 + Math.random() * 60}%;
            --sx:${Math.cos(angle) * dist}px;
            --sy:${Math.sin(angle) * dist}px;
            width:${3 + Math.random() * 4}px;
            height:${3 + Math.random() * 4}px;
          `;
            btn.appendChild(p);
            setTimeout(() => p.remove(), 750);
          }, i * 60);
        }
      });
    });
    document.querySelectorAll(".section-eyebrow, .eyebrow").forEach((el) => {
      if (el.__eyebrowAttached) return;
      el.__eyebrowAttached = true;
      el.classList.add("section-eyebrow-line");
      const io = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      }, { threshold: 0.5 });
      io.observe(el);
    });
    document.querySelectorAll(".priority-section, .tl-section, .hb-section, .reference-section").forEach((sec) => {
      if (!sec.previousElementSibling || sec.querySelector(".section-sep")) return;
      const sep = document.createElement("hr");
      sep.className = "section-sep";
      sec.insertBefore(sep, sec.firstChild);
    });
    setupScrollWaypoints();
  }
  function setupScrollWaypoints() {
    const appEl = document.getElementById("app");
    if (!appEl) return;
    const waypointDefs = [
      { id: "priority-tasks", label: "\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33" },
      { id: "day1", label: "\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01" },
      { id: "handbook", label: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E04\u0E31\u0E0D" }
    ];
    const found = waypointDefs.filter((w) => appEl.querySelector("#" + w.id));
    if (found.length < 2) {
      const existing = document.getElementById("scroll-waypoints");
      if (existing) existing.style.display = "none";
      return;
    }
    let wp = document.getElementById("scroll-waypoints");
    if (wp) wp.remove();
    wp = document.createElement("nav");
    wp.id = "scroll-waypoints";
    wp.setAttribute("aria-label", "Page sections");
    wp.innerHTML = found.map(
      (w, i) => `<div class="swp-item" data-target="${w.id}" data-idx="${i}" role="button" tabindex="0" aria-label="${w.label}">
      <span class="swp-label">${w.label}</span>
      <span class="swp-dot"></span>
    </div>`
    ).join("");
    document.body.appendChild(wp);
    const update = function() {
      const scroll = window.scrollY;
      wp.classList.toggle("is-visible", scroll > 120);
      found.forEach((w, i) => {
        const el = appEl.querySelector("#" + w.id);
        const item = wp.querySelector(`[data-idx="${i}"]`);
        if (el && item) {
          const rect = el.getBoundingClientRect();
          item.classList.toggle(
            "is-active",
            rect.top <= window.innerHeight * 0.6 && rect.bottom >= 0
          );
        }
      });
    };
    window.removeEventListener("scroll", window.__waypointScroll || (() => {
    }));
    window.__waypointScroll = update;
    window.addEventListener("scroll", update, { passive: true });
    update();
    wp.querySelectorAll(".swp-item").forEach((item) => {
      const go = () => {
        const target = appEl.querySelector("#" + item.getAttribute("data-target"));
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      item.addEventListener("click", go);
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter") go();
      });
    });
  }
  function boot() {
    document.getElementById("year").textContent = (/* @__PURE__ */ new Date()).getFullYear();
    initNav();
    initAdminMode();
    render();
    setTimeout(initEnhancements, 80);
    window.addEventListener("hashchange", () => {
      render();
      setTimeout(initEnhancements, 80);
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
