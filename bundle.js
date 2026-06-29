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
  var DEFAULT_ADMIN_DATA = {
    wifi_staff_ssid: "ExzyUniFi",
    wifi_staff_pass: "",
    wifi_guest_ssid: "Exzy_Guest",
    wifi_guest_pass: "",
    hr_email: "hr@exzyteam.com",
    orientation_slides_url: "./static/Mini-Internship-Orientation.pdf",
    orientation_pdf_url: "./static/Mini-Internship-Orientation.pdf"
  };
  function loadAdminData() {
    try {
      const raw = localStorage.getItem(ADMIN_STORE_KEY);
      if (!raw) return { ...DEFAULT_ADMIN_DATA };
      const stored = JSON.parse(raw);
      const merged = { ...DEFAULT_ADMIN_DATA };
      for (const key of Object.keys(stored)) {
        if (stored[key] === "" && DEFAULT_ADMIN_DATA[key] !== "") continue;
        merged[key] = stored[key];
      }
      return merged;
    } catch (e) {
      return { ...DEFAULT_ADMIN_DATA };
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
      <button type="button" class="acc-trigger" aria-expanded="false">${q}<span class="acc-icon">${I.plus}</span></button>
      <div class="acc-body"><div class="acc-body-inner">${a}</div></div>
    </div>
  `;
  }
  var _sectionMeta = {
    "Getting Started": { num: "01", label: "Getting Started", section: "getting-started" },
    "Company & Office": { num: "01", label: "Getting Started", section: "getting-started" },
    "Intern Tasks": { num: "02", label: "Intern Tasks", section: "tasks" },
    "Company": { num: "03", label: "Company", section: "company" },
    "Employee": { num: "03", label: "Company", section: "company" },
    "Work Policy": { num: "04", label: "Work Policy", section: "policy" },
    "Resources": { num: "05", label: "Resources", section: "resources" },
    "Showcase": { num: "06", label: "Showcase", section: "showcase" },
    "Admin": { num: "07", label: "Admin", section: "admin" }
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
        <div class="phb-eyebrow anim-up">
          ${meta.label}
        </div>
        <h1 class="phb-title anim-up" data-delay="40">${title}</h1>
        <p class="phb-lead anim-up" data-delay="90">${lead}</p>
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
      titleHtml: "\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 <strong>Digital Marketing</strong> \u0E17\u0E33\u0E2D\u0E30\u0E44\u0E23\u0E1A\u0E49\u0E32\u0E07? \u0E44\u0E1B\u0E14\u0E39\u0E01\u0E31\u0E19\u0E40\u0E25\u0E22! \u{1F3AC} \u{1F4F2}",
      summary: "\u0E09\u0E34\u0E07\u0E46\u0E23\u0E35\u0E27\u0E34\u0E27 (@ching_cyy2) \u0E1E\u0E32\u0E14\u0E39\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E22 Digital Marketing <br>\u0E41\u0E1A\u0E1A day-in-the-life \u0E17\u0E38\u0E01 task \u0E17\u0E35\u0E48\u0E17\u0E33\u0E08\u0E23\u0E34\u0E07\u0E43\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E27\u0E31\u0E19 \u{1F3AC}",
      summaryHtml: "\u0E09\u0E34\u0E07\u0E46\u0E23\u0E35\u0E27\u0E34\u0E27 (@ching_cyy2) \u0E1E\u0E32\u0E14\u0E39\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E22 MK<br>\u0E41\u0E1A\u0E1A <strong>day-in-the-life</strong> \u0E17\u0E38\u0E01 task \u0E17\u0E35\u0E48\u0E17\u0E33\u0E08\u0E23\u0E34\u0E07\u0E43\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E27\u0E31\u0E19 \u{1F4CA}",
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
      titleHtml: "\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E22 <strong>Business Development</strong> \u{1F4BC} \u{1F91D}",
      summary: "EXZY \u0E23\u0E35\u0E27\u0E34\u0E27\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C intern \u0E2A\u0E32\u0E22 BD \u2014 \u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07\u0E17\u0E35\u0E48\u0E17\u0E33 <br>\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u0E41\u0E25\u0E30\u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E17\u0E35\u0E21 \u{1F4BC}",
      summaryHtml: "EXZY \u0E23\u0E35\u0E27\u0E34\u0E27\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C intern \u0E2A\u0E32\u0E22 BD \u2014 <strong>\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07</strong>\u0E17\u0E35\u0E48\u0E17\u0E33<br>\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u0E41\u0E25\u0E30\u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E17\u0E35\u0E21 \u{1F4DD}",
      preview: "\u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 2 \u0E40\u0E14\u0E37\u0E2D\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E08\u0E32\u0E01\u0E17\u0E35\u0E21\u0E08\u0E23\u0E34\u0E07",
      url: "https://www.facebook.com/share/p/17PWAui7fs/",
      canonicalUrl: "https://www.facebook.com/ExzyTech/posts/2609136702451677/",
      cover: "sc-medium-bd.jpg",
      coverPosition: "center 20%"
    },
    {
      category: "blog",
      kind: "link",
      platform: "Medium",
      track: "BD",
      title: "\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 EXZY \u0E01\u0E31\u0E1A\u0E41\u0E19\u0E27\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E17\u0E35\u0E48\u0E40\u0E15\u0E34\u0E1A\u0E42\u0E15\u0E41\u0E1A\u0E1A\u0E01\u0E49\u0E32\u0E27\u0E01\u0E23\u0E30\u0E42\u0E14\u0E14",
      titleHtml: "\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 EXZY \u0E01\u0E31\u0E1A<strong>\u0E41\u0E19\u0E27\u0E04\u0E34\u0E14\u0E17\u0E35\u0E48\u0E40\u0E15\u0E34\u0E1A\u0E42\u0E15\u0E41\u0E1A\u0E1A\u0E01\u0E49\u0E32\u0E27\u0E01\u0E23\u0E30\u0E42\u0E14\u0E14</strong> \u{1F331} \u{1F4A1}",
      summary: "@dangjaig \u0E40\u0E25\u0E48\u0E32\u0E1A\u0E17\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E25\u0E30\u0E41\u0E19\u0E27\u0E04\u0E34\u0E14\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E44\u0E1B<br>\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07\u0E43\u0E19\u0E2A\u0E32\u0E22 BD \u0E15\u0E25\u0E2D\u0E14\u0E0A\u0E48\u0E27\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u{1F331}",
      summaryHtml: "@dangjaig \u0E40\u0E25\u0E48\u0E32\u0E1A\u0E17\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E25\u0E30<strong>\u0E41\u0E19\u0E27\u0E04\u0E34\u0E14\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E44\u0E1B</strong><br>\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07\u0E43\u0E19\u0E2A\u0E32\u0E22 BD \u0E15\u0E25\u0E2D\u0E14\u0E0A\u0E48\u0E27\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u{1F4D6}",
      preview: "\u0E23\u0E35\u0E27\u0E34\u0E27\u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E15\u0E34\u0E1A\u0E42\u0E15\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07\u0E43\u0E19\u0E2A\u0E32\u0E22 Business Development",
      url: "https://medium.com/@dangjaig/\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17-exzy-\u0E01\u0E31\u0E1A\u0E41\u0E19\u0E27\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E17\u0E35\u0E48\u0E40\u0E15\u0E34\u0E1A\u0E42\u0E15\u0E41\u0E1A\u0E1A\u0E01\u0E49\u0E32\u0E27\u0E01\u0E23\u0E30\u0E42\u0E14\u0E14-eceb87feff69",
      cover: "sc-fb-bd.webp",
      coverPosition: "center 34%"
    },
    {
      category: "blog",
      kind: "link",
      platform: "Medium",
      track: "Dev",
      title: "\u0E23\u0E35\u0E27\u0E34\u0E27\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 Full-Stack Developer",
      titleHtml: "\u0E23\u0E35\u0E27\u0E34\u0E27\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 <strong>Full-Stack Developer</strong> \u26A1 \u{1F527}",
      summary: "@gubsitt2019 \u0E40\u0E25\u0E48\u0E32\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07 project \u0E08\u0E23\u0E34\u0E07<br>\u0E14\u0E49\u0E27\u0E22 React + Node.js \u0E15\u0E25\u0E2D\u0E14\u0E0A\u0E48\u0E27\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E43\u0E19\u0E17\u0E35\u0E21 Dev \u0E41\u0E25\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u26A1",
      summaryHtml: "@gubsitt2019 \u0E40\u0E25\u0E48\u0E32\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07 project \u0E08\u0E23\u0E34\u0E07<br>\u0E14\u0E49\u0E27\u0E22 <strong>React + Node.js</strong> \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E43\u0E19\u0E17\u0E35\u0E21 Dev \u{1F6E0}\uFE0F",
      preview: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2D\u0E48\u0E32\u0E19\u0E23\u0E35\u0E27\u0E34\u0E27\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E08\u0E23\u0E34\u0E07\u0E14\u0E49\u0E27\u0E22 React \u0E41\u0E25\u0E30 Node.js \u0E44\u0E14\u0E49\u0E17\u0E31\u0E49\u0E07\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22\u0E41\u0E25\u0E30 English",
      url: "https://medium.com/@gubsitt2019/full-stack-developer-internship-review-building-real-projects-with-react-and-node-js-b6b1323a95cc",
      cover: "sc-medium-dev.jpg",
      coverPosition: "left top",
      languageLinks: [
        {
          label: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22",
          action: "\u0E2D\u0E48\u0E32\u0E19\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22",
          title: "\u0E23\u0E35\u0E27\u0E34\u0E27\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 Full-Stack Developer",
          url: "https://medium.com/@gubsitt2019/\u0E23\u0E35\u0E27\u0E34\u0E27\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19-full-stack-developer-\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E08\u0E23\u0E34\u0E07\u0E14\u0E49\u0E27\u0E22-react-\u0E41\u0E25\u0E30-node-js-f5bc7e92857f",
          cover: "sc-medium-dev-th.png",
          coverPosition: "left top"
        },
        {
          label: "English",
          action: "Read in English",
          title: "Full-Stack Developer Internship Review",
          url: "https://medium.com/@gubsitt2019/full-stack-developer-internship-review-building-real-projects-with-react-and-node-js-b6b1323a95cc",
          cover: "sc-medium-dev.jpg",
          coverPosition: "left top"
        }
      ]
    },
    {
      category: "blog",
      kind: "link",
      platform: "Medium",
      track: "Dev",
      title: "2 \u0E40\u0E14\u0E37\u0E2D\u0E19\u0E43\u0E19\u0E17\u0E35\u0E21 Dev \u0E17\u0E35\u0E48 EXZY",
      titleHtml: "<strong>2 \u0E40\u0E14\u0E37\u0E2D\u0E19</strong>\u0E43\u0E19\u0E17\u0E35\u0E21 Dev \u0E17\u0E35\u0E48 EXZY \u{1F5A5}\uFE0F",
      summary: "@itthikorn.h \u0E40\u0E25\u0E48\u0E32\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 Full-Stack Developer \u0E43\u0E19\u0E17\u0E35\u0E21 Dev \u0E15\u0E25\u0E2D\u0E14 2 \u0E40\u0E14\u0E37\u0E2D\u0E19 \u0E17\u0E31\u0E49\u0E07\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E17\u0E33 \u0E27\u0E34\u0E18\u0E35\u0E17\u0E33\u0E07\u0E32\u0E19\u0E01\u0E31\u0E1A\u0E17\u0E35\u0E21 \u0E41\u0E25\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u{1F5A5}\uFE0F",
      summaryHtml: "@itthikorn.h \u0E40\u0E25\u0E48\u0E32\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 <strong>Full-Stack Developer</strong><br>\u0E17\u0E31\u0E49\u0E07\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E17\u0E33 \u0E27\u0E34\u0E18\u0E35\u0E17\u0E33\u0E07\u0E32\u0E19\u0E01\u0E31\u0E1A\u0E17\u0E35\u0E21 \u0E41\u0E25\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u{1F4AA}",
      preview: "\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 Full-Stack Developer \u0E08\u0E32\u0E01\u0E21\u0E38\u0E21\u0E02\u0E2D\u0E07 intern \u0E17\u0E35\u0E21 Dev",
      url: "https://medium.com/@itthikorn.h/2-\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E43\u0E19\u0E17\u0E35\u0E21-dev-\u0E17\u0E35\u0E48-exzy-\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19-full-stack-developer-\u0E17\u0E35\u0E48\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32\u0E07\u0E32\u0E19\u0E04\u0E37\u0E2D\u0E01\u0E32\u0E23\u0E40\u0E15\u0E34\u0E1A\u0E42\u0E15-a198091636c0",
      cover: "sc-medium-dev-itthikorn.png",
      coverPosition: "left top"
    },
    {
      category: "experiences",
      kind: "link",
      platform: "Lemon8",
      track: "Design",
      title: "\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 UX/UI Designer \u0E01\u0E31\u0E1A EXZY",
      titleHtml: "\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 <strong>UX/UI Designer</strong> \u0E01\u0E31\u0E1A EXZY \u{1F3A8}",
      summary: "@nongpor47 \u0E40\u0E25\u0E48\u0E32\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E22 UX/UI Designer<br>\u0E17\u0E31\u0E49\u0E07\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E17\u0E33 \u0E1A\u0E23\u0E23\u0E22\u0E32\u0E01\u0E32\u0E28 \u0E41\u0E25\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49",
      summaryHtml: "@nongpor47 \u0E40\u0E25\u0E48\u0E32\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E22 <strong>UX/UI Designer</strong><br>\u0E17\u0E31\u0E49\u0E07\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E17\u0E33 \u0E1A\u0E23\u0E23\u0E22\u0E32\u0E01\u0E32\u0E28 \u0E41\u0E25\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49",
      preview: "\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 UX/UI Designer \u0E01\u0E31\u0E1A EXZY \u0E1A\u0E19 Lemon8",
      url: "https://www.lemon8-app.com/@nongpor47/7655652919265575441?_r=1&_t=MGcEDFDULIMxFqW11PoPUARFxoUIqaXGcA38Nh98OpHdp73O2ZcSVXGLVZ%2Bh0Gg4izHQ5EtH54c8pBnJGX3QxDSXcBm0HCPWJPwJH3BtmJNDHaUDgC5yBBD81W%2BRVoJXNcIv0EgJQTGw&language=th&region=th&share_platform=copy&ui_language=th",
      cover: "sc-lemon8-ux-ui-designer.png",
      coverPosition: "center center"
    }
  ]);
  function getAllShowcaseItems() {
    const base = [...REAL_SHOWCASE_ITEMS];
    const adminData = loadAdminData();
    let adminItems = [];
    try {
      adminItems = JSON.parse(adminData.showcase_items || "[]");
    } catch (e) {
    }
    const adminReal = adminItems.filter((i) => i && /^https?:\/\//i.test(String(i.url || "").trim())).map((i) => ({
      category: i.category || "experiences",
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
    if (platform === "Lemon8") {
      return `<svg viewBox="0 0 24 24" width="15" height="15" fill="white"><path d="M18.1 3.5c-2-.8-5.1-.2-7.8 2.5L6 10.3c-2.7 2.7-3.3 5.8-2.5 7.8.7 1.8 2.4 2.8 4.7 2.6 2.3-.2 4.8-1.5 7-3.8l1.7-1.7c2.3-2.3 3.6-4.8 3.8-7 .2-2.3-.8-4-2.6-4.7ZM13 11.1c.7-.3 1-.7 1-1.1 0-.6-.5-.9-1.2-.9s-1.2.4-1.2.9c0 .5.4.8 1.4 1.1Zm-.2 6c-2.3 0-3.8-1.1-3.8-2.8 0-1 .6-1.7 1.7-2.3-.8-.5-1.2-1.2-1.2-2 0-1.6 1.3-2.7 3.3-2.7 1.9 0 3.3 1.1 3.3 2.7 0 .8-.4 1.4-1.2 2 1.1.6 1.7 1.3 1.7 2.3 0 1.7-1.5 2.8-3.8 2.8Zm0-1.7c1 0 1.6-.4 1.6-1.1 0-.6-.5-.9-1.6-1.2-1.1.3-1.6.6-1.6 1.2 0 .7.6 1.1 1.6 1.1Z"/><path d="M18.9 2.1c1.8.1 2.9 1.2 3 3-1.8-.1-2.9-1.2-3-3Z"/></svg>`;
    }
    return `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
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
      hash = (hash << 5) - hash + text.charCodeAt(i) | 0;
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
        const coverPosition = link.coverPosition || item.coverPosition ? ` style="object-position:${escapeAttr(link.coverPosition || item.coverPosition)}"` : "";
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
          <div class="slc-language-controls" aria-label="\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E20\u0E32\u0E29\u0E32 preview">
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
      const coverPosition = item.coverPosition ? ` style="object-position:${escapeAttr(item.coverPosition)}"` : "";
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
    const actionText = item.kind === "video" ? "\u0E14\u0E39\u0E04\u0E25\u0E34\u0E1B\u0E40\u0E15\u0E47\u0E21" : item.platform === "Medium" ? "\u0E2D\u0E48\u0E32\u0E19\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21" : item.platform === "Facebook" || item.platform === "Lemon8" ? "\u0E40\u0E1B\u0E34\u0E14\u0E42\u0E1E\u0E2A\u0E15\u0E4C" : "\u0E40\u0E1B\u0E34\u0E14\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E15\u0E49\u0E19\u0E09\u0E1A\u0E31\u0E1A";
    const meta = item.track ? `<span class="show-real-track">${escapeHtml(item.track)}</span>` : "";
    const platformClass = `show-real-card-${escapeAttr(String(item.platform || "external").toLowerCase())}`;
    const trackClass = item.track ? `show-real-card-track-${escapeAttr(item.track.toLowerCase())}` : "";
    const bilingualClass = Array.isArray(item.languageLinks) && item.languageLinks.length > 0 ? "show-real-card-bilingual" : "";
    const actions = Array.isArray(item.languageLinks) && item.languageLinks.length > 0 ? item.languageLinks.map((link) => `
        <a href="${escapeAttr(link.url || item.url || "#")}" target="_blank" rel="noopener" class="show-real-link show-real-link-language">
          <span>${escapeHtml(link.action || link.label || "\u0E40\u0E1B\u0E34\u0E14\u0E25\u0E34\u0E07\u0E01\u0E4C")}</span>
          ${I.external}
        </a>
      `).join("") : `<a href="${safeUrl}" target="_blank" rel="noopener" class="show-real-link">${actionText} ${I.external}</a>`;
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
  function showcasePage(_active) {
    const items = getAllShowcaseItems();
    const videoItems = items.filter((i) => i.kind === "video");
    const linkItems = items.filter((i) => i.kind !== "video");
    const emptyNote = items.length === 0 ? `<div class="show-real-empty">${I.info} \u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07\u0E43\u0E19\u0E2B\u0E21\u0E27\u0E14\u0E19\u0E35\u0E49</div>` : "";
    const videoHtml = videoItems.map(renderShowcaseCard).join("");
    const linkHtml = linkItems.map(renderShowcaseCard).join("");
    return `
    <section class="page-header">
      <div class="section-inner">
        <div class="crumb"><a href="#/home" data-link>Home</a> <span style="opacity:.5; margin:0 6px;">/</span> Intern Tasks <span style="opacity:.5; margin:0 6px;">/</span> Showcase</div>
        <h1>Intern Showcase</h1>
        <p class="page-lead">\u0E23\u0E27\u0E21\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07 intern \u0E23\u0E38\u0E48\u0E19\u0E01\u0E48\u0E2D\u0E19 \u0E17\u0E31\u0E49\u0E07\u0E04\u0E25\u0E34\u0E1B \u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21 \u0E41\u0E25\u0E30\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E1A\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07 public \u2728</p>
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

  // js/pages/home.js
  var renderHome = () => `

<section class="ex-home-hero" aria-label="EXZY Intern Handbook">
  <div class="ex-home-video-banner" aria-label="\u0E1A\u0E23\u0E23\u0E22\u0E32\u0E01\u0E32\u0E28\u0E17\u0E35\u0E48 EXZY">
    <video class="ex-home-banner-video" src="./static/home-header-banner.mp4" autoplay muted defaultMuted loop playsinline webkit-playsinline preload="metadata" data-home-hero-video></video>
    <div class="ex-home-video-shade" aria-hidden="true"></div>
  </div>

  <div class="ex-home-hero-inner">
    <div class="ex-home-copy">
      <h1><span class="ex-home-h1-eyebrow">Welcome to</span>EXZY Internship<br>Handbook</h1>
      <p class="ex-home-lead">\u0E23\u0E27\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48 intern \u0E15\u0E49\u0E2D\u0E07\u0E23\u0E39\u0E49\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u2014 \u0E07\u0E32\u0E19 \u0E17\u0E35\u0E21 \u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22 \u0E41\u0E25\u0E30\u0E04\u0E33\u0E15\u0E2D\u0E1A\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E17\u0E38\u0E01\u0E04\u0E33\u0E16\u0E32\u0E21</p>
      <div class="ex-home-actions">
        <button type="button" class="ex-home-primary" data-scroll-to="ex-home-contents">
          \u0E14\u0E39\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </button>
        <a href="#/first-day" class="ex-home-secondary" data-link>\u{1F31F} \u0E40\u0E23\u0E34\u0E48\u0E21\u0E08\u0E32\u0E01 Day 1 Guide</a>
      </div>
    </div>
  </div>
  <a href="#ex-home-start" class="ex-home-scroll-cue" aria-label="\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E25\u0E07\u0E44\u0E1B\u0E14\u0E39\u0E2A\u0E48\u0E27\u0E19\u0E16\u0E31\u0E14\u0E44\u0E1B">
    <span>\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E15\u0E48\u0E2D</span>
    <i aria-hidden="true"></i>
  </a>
</section>

<section class="ex-home-start" id="ex-home-start" aria-labelledby="ex-home-start-title">
  <div class="ex-home-start-inner">
    <div class="ex-home-section-intro fdb-reveal">
      <span class="ex-must-eyebrow">Timesheet \xB7 HR Project</span>
      <h2 id="ex-home-start-title">Project \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A intern \u0E21\u0E35\u0E2D\u0E30\u0E44\u0E23\u0E1A\u0E49\u0E32\u0E07?</h2>
      <p>intern \u0E17\u0E38\u0E01\u0E04\u0E19\u0E08\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A 2 \u0E07\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E01 \u0E41\u0E25\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E48\u0E07\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A HR \u0E15\u0E32\u0E21\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 \u{1F4CB}</p>
    </div>

    <div class="ex-must-grid">
      <article class="ex-must-card fdb-reveal">
        <div class="ex-must-photo"><img src="./static/card-timesheet-photo.png" alt="" loading="eager" style="object-position:center 60%" /></div>
        <div class="ex-must-content">
          <div class="ex-must-header">
            <span class="ex-must-label">01 \xB7 Timesheet</span>
            <span class="ex-must-pill ex-must-pill--teal">\u0E2A\u0E48\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</span>
          </div>
          <h3 class="ex-must-title">Intern Timesheet</h3>
          <ul class="ex-must-list">
            <li>\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32-\u0E2D\u0E2D\u0E01\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22 <strong>\u0E17\u0E38\u0E01\u0E27\u0E31\u0E19</strong></li>
            <li>\u0E2A\u0E48\u0E07\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07 HR <strong>\u0E0A\u0E31\u0E49\u0E19 4</strong></li>
            <li>\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E48\u0E07 <strong>\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331 \u0E02\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</strong></li>
          </ul>
          <a href="#/tasks/timesheet" class="ex-must-btn" data-link>\u0E14\u0E39\u0E27\u0E34\u0E18\u0E35\u0E01\u0E23\u0E2D\u0E01 Timesheet \u2192</a>
        </div>
      </article>

      <article class="ex-must-card fdb-reveal fdb-delay1">
        <div class="ex-must-photo"><img src="./static/card-project-photo.png" alt="" loading="eager" style="object-position:center 45%" /></div>
        <div class="ex-must-content">
          <div class="ex-must-header">
            <span class="ex-must-label">02 \xB7 HR Project</span>
            <span class="ex-must-pill ex-must-pill--amber">\u0E2A\u0E48\u0E07\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32 2 \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C</span>
          </div>
          <h3 class="ex-must-title">HR Project</h3>
          <ul class="ex-must-list">
            <li>\u0E2A\u0E48\u0E07\u0E43\u0E2B\u0E49\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30 HR \u0E15\u0E23\u0E27\u0E08 <strong>\u0E01\u0E48\u0E2D\u0E19\u0E08\u0E1A\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 2 \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C</strong></li>
            <li>\u0E0A\u0E34\u0E49\u0E19\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E40\u0E25\u0E48\u0E32\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</li>
            <li>\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E14\u0E49\u0E15\u0E32\u0E21\u0E17\u0E35\u0E48\u0E16\u0E19\u0E31\u0E14 \u0E44\u0E21\u0E48\u0E27\u0E48\u0E32\u0E08\u0E30\u0E40\u0E1B\u0E47\u0E19 <strong>\u0E04\u0E25\u0E34\u0E1B \u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21 \u0E42\u0E1E\u0E2A\u0E15\u0E4C</strong></li>
            <li>\u0E25\u0E07\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E1A\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07 <strong>public</strong></li>
          </ul>
          <a href="#/tasks/hr-bd-project" class="ex-must-btn" data-link>\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 Project \u2192</a>
        </div>
      </article>
    </div>

    <div class="ex-must-notice fdb-reveal">
      <span class="ex-must-notice-ico">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      </span>
      <div>
        <p>\u0E07\u0E32\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2A\u0E2D\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E35\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 intern \u0E17\u0E38\u0E01\u0E04\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E48\u0E07\u0E04\u0E23\u0E1A\u0E15\u0E32\u0E21\u0E01\u0E33\u0E2B\u0E19\u0E14 \u0E16\u0E36\u0E07\u0E08\u0E30\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</p>
        <p>\u0E14\u0E39\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E08\u0E32\u0E01 intern \u0E23\u0E38\u0E48\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48 <a href="#/showcase/experiences" data-link>Intern Showcase</a></p>
      </div>
    </div>
  </div>
</section>


<section class="ex-home-voices" aria-labelledby="ex-home-voices-title">
  <div class="ex-home-voices-inner">
    <div class="ex-home-section-intro fdb-reveal">
      <span class="ex-must-eyebrow">LIFE AT EXZY</span>
      <h2 id="ex-home-voices-title">\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48 EXZY \u0E40\u0E1B\u0E47\u0E19\u0E22\u0E31\u0E07\u0E44\u0E07\u0E1A\u0E49\u0E32\u0E07?</h2>
      <p>\u0E25\u0E2D\u0E07\u0E14\u0E39\u0E23\u0E35\u0E27\u0E34\u0E27\u0E08\u0E32\u0E01 intern \u0E17\u0E35\u0E48\u0E40\u0E04\u0E22\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E01\u0E31\u0E1A EXZY \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E2B\u0E47\u0E19\u0E1A\u0E23\u0E23\u0E22\u0E32\u0E01\u0E32\u0E28 \u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E17\u0E33 \u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E15\u0E25\u0E2D\u0E14\u0E0A\u0E48\u0E27\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u{1F469}\u{1F3FB}\u200D\u{1F4BB}</p>
    </div>

    <div class="ex-voice-featured fdb-reveal">
      <div class="ex-voice-featured-video">
        <iframe src="https://www.youtube-nocookie.com/embed/W53e2n_09bA" title="\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 Business Development \u0E17\u0E35\u0E48 EXZY \u2014 Dada" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="ex-voice-featured-copy">
        <span class="ex-voice-tag">Intern Review \xB7 BD</span>
        <h3>\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 Business&nbsp;Development \u0E17\u0E35\u0E48 EXZY \u{1F3AF}\u{1F4AC}\u{1F4DD}</h3>
        <p>\u0E19\u0E49\u0E2D\u0E07\u0E14\u0E32\u0E14\u0E49\u0E32 \u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32 BAScii \u0E08\u0E38\u0E2C\u0E32\u0E25\u0E07\u0E01\u0E23\u0E13\u0E4C\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22 <br>\u0E43\u0E19\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23 Founder Apprentice <br>\u0E40\u0E25\u0E48\u0E32\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E22 BD \u0E01\u0E31\u0E1A EXZY \u0E15\u0E25\u0E2D\u0E14 2 \u0E40\u0E14\u0E37\u0E2D\u0E19 \u2728</p>
      </div>
    </div>

    <div class="ex-voice-divider" aria-hidden="true"><span>\u0E04\u0E25\u0E34\u0E1B\u0E2A\u0E31\u0E49\u0E19 \u0E46 \u0E08\u0E32\u0E01 intern \u0E23\u0E38\u0E48\u0E19\u0E01\u0E48\u0E2D\u0E19 </span></div>

    <div class="ex-voice-grid">
      <article class="ex-voice-card fdb-reveal">
        <div class="ex-voice-video">
          <iframe src="https://www.youtube-nocookie.com/embed/T7hpAMXAo2I" title="Intern Review \u2014 Grace" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="ex-voice-copy">
          <span class="ex-voice-tag">Intern Review</span>
          <h3>\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E22 Digital Marketing \u0E01\u0E31\u0E1A EXZY \u{1F4A1}</h3>
          <p>\u0E19\u0E49\u0E2D\u0E07\u0E40\u0E01\u0E23\u0E0B Digital Marketing Intern \u0E23\u0E35\u0E41\u0E04\u0E1B\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E17\u0E33\u0E41\u0E25\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E15\u0E25\u0E2D\u0E14\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u{1F4F1}\u{1F4CA}</p>
        </div>
      </article>

      <article class="ex-voice-card fdb-reveal fdb-delay1">
        <div class="ex-voice-video">
          <iframe src="https://www.youtube-nocookie.com/embed/EhOba4jWhmI" title="Intern Review \u2014 Nikki" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="ex-voice-copy">
          <span class="ex-voice-tag">Intern Review</span>
          <h3>Recap UX/UI Designer Internship \u0E17\u0E35\u0E48 EXZY \u{1F3A8}\u{1F58C}\uFE0F</h3>
          <p>\u0E19\u0E49\u0E2D\u0E07\u0E19\u0E34\u0E01\u0E01\u0E35\u0E49 \u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32\u0E08\u0E32\u0E01\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E2A\u0E38\u0E23\u0E19\u0E32\u0E23\u0E35 <br>\u0E23\u0E35\u0E41\u0E04\u0E1B\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E17\u0E33\u0E15\u0E25\u0E2D\u0E14\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 4 \u0E40\u0E14\u0E37\u0E2D\u0E19 \u270D\uFE0F</p>
        </div>
      </article>

      <article class="ex-voice-card fdb-reveal fdb-delay2">
        <div class="ex-voice-video">
          <iframe src="https://www.youtube-nocookie.com/embed/ILybckeMZ7o" title="\u0E15\u0E32\u0E21\u0E15\u0E34\u0E14\u0E0A\u0E35\u0E27\u0E34\u0E15 Intern \u0E17\u0E35\u0E48 EXZY" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="ex-voice-copy">
          <span class="ex-voice-tag">Intern Life</span>
          <h3>5 \u0E40\u0E14\u0E37\u0E2D\u0E19\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 Developer \u0E17\u0E35\u0E48 EXZY \u{1F4BB} \u{1F9D1}\u{1F3FB}\u200D\u{1F4BB}</h3>
          <p>\u0E41\u0E0A\u0E23\u0E4C\u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E22 Developer \u0E17\u0E31\u0E49\u0E07\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E17\u0E33 \u0E17\u0E35\u0E21\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E48\u0E27\u0E21\u0E07\u0E32\u0E19 \u0E41\u0E25\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u{1F6E0}\uFE0F</p>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="ex-home-reminders" aria-labelledby="ex-home-reminders-title">
  <div class="ex-home-reminders-inner">
    <div class="ex-home-reminders-head fdb-reveal">
      <span class="ex-home-reminders-mark">\u203C\uFE0F \u0E2B\u0E49\u0E32\u0E21\u0E25\u0E37\u0E21 \u203C\uFE0F</span>
      <div>
        <h2 id="ex-home-reminders-title">\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E17\u0E31\u0E19\u0E40\u0E27\u0E25\u0E32</h2>
        <p>\u0E2D\u0E22\u0E48\u0E32\u0E25\u0E37\u0E21! HR Project \u0E41\u0E25\u0E30\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E08\u0E32\u0E01\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22\u0E04\u0E27\u0E23\u0E2A\u0E48\u0E07\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32<br>\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30 HR \u0E21\u0E35\u0E40\u0E27\u0E25\u0E32\u0E40\u0E0A\u0E47\u0E01 \u0E41\u0E01\u0E49 \u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E01\u0E25\u0E31\u0E1A\u0E43\u0E2B\u0E49\u0E17\u0E31\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14</p>
      </div>
    </div>

    <div class="ex-home-reminders-grid">
      <article class="ex-home-reminder-card ex-home-reminder-card--project fdb-reveal">
        <div class="ex-home-reminder-top">
          <span class="ex-home-reminder-label">\u2728 HR Project</span>
        </div>
        <strong class="ex-home-reminder-deadline">\u26A0\uFE0F \u0E2A\u0E48\u0E07\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32 2 \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C</strong>
        <p>\u0E2A\u0E48\u0E07 draft \u0E43\u0E2B\u0E49\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30 HR \u0E15\u0E23\u0E27\u0E08\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E21\u0E35\u0E40\u0E27\u0E25\u0E32\u0E40\u0E0A\u0E47\u0E01\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32 \u0E41\u0E01\u0E49\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 \u0E41\u0E25\u0E30\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E1A\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07 public \u0E44\u0E14\u0E49\u0E17\u0E31\u0E19</p>
        <a href="#/tasks/hr-bd-project" data-link>\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 HR Project \u2192</a>
      </article>

      <article class="ex-home-reminder-card ex-home-reminder-card--university fdb-reveal fdb-delay1">
        <div class="ex-home-reminder-top">
          <span class="ex-home-reminder-label">\u{1F4D1} \u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22</span>
        </div>
        <strong class="ex-home-reminder-deadline">\u26A0\uFE0F \u0E2A\u0E48\u0E07\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32 1 \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C</strong>
        <p>\u0E2B\u0E32\u0E01\u0E21\u0E35\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19 \u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 \u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E2B\u0E49<br>\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30 HR \u0E40\u0E0B\u0E47\u0E19 \u0E43\u0E2B\u0E49\u0E2A\u0E48\u0E07\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1C\u0E37\u0E48\u0E2D\u0E40\u0E27\u0E25\u0E32\u0E41\u0E01\u0E49\u0E44\u0E02<br>\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E17\u0E31\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E2D\u0E07\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22</p>
        <a href="#/policy/internship" data-link>\u0E14\u0E39 Internship Policy \u2192</a>
      </article>
    </div>
  </div>
</section>

<section class="ex-folders-section" id="ex-home-contents" aria-labelledby="ex-folders-title">
  <div class="ex-folders-inner">
    <div class="ex-home-section-intro fdb-reveal">
      <h2 id="ex-folders-title">\u0E23\u0E27\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14<br>\u0E17\u0E35\u0E48 intern \u0E15\u0E49\u0E2D\u0E07\u0E23\u0E39\u0E49\u0E44\u0E27\u0E49\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48</h2>
      <p>\u0E2D\u0E22\u0E32\u0E01\u0E23\u0E39\u0E49\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E44\u0E2B\u0E19? \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E14\u0E39\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22 \u{1F447}</p>
    </div>

    <div class="ex-folder-grid">

      <div class="ex-folder ex-folder--cyan fdb-reveal" tabindex="0" aria-label="\u0E2B\u0E21\u0E27\u0E14\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19">
        <div class="ex-folder-tab">\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="7" width="26" height="20" rx="3"/><path d="M3 13h26M10 7V4M22 7V4"/><circle cx="16" cy="20" r="3" fill="currentColor" stroke="none"/></svg>
          </div>
          <h3>Day 1 Guide</h3>
          <p>\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E02\u0E2D\u0E07\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01 \u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33 \u0E41\u0E25\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E08\u0E30\u0E44\u0E14\u0E49\u0E40\u0E08\u0E2D<br>\u0E43\u0E19\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/first-day" data-link class="ex-folder-doc"><span>01</span> \u0E15\u0E32\u0E23\u0E32\u0E07\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01</a>
          <a href="#/first-day" data-link class="ex-folder-doc"><span>02</span> \u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21</a>
          <a href="#/first-day" data-link class="ex-folder-doc"><span>03</span> \u0E04\u0E19\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01</a>
        </div>
      </div>

      <div class="ex-folder ex-folder--navy fdb-reveal fdb-delay1" tabindex="0" aria-label="\u0E2B\u0E21\u0E27\u0E14\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28">
        <div class="ex-folder-tab">\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="26" height="24" rx="3"/><path d="M10 4v24M10 12h16M10 19h16"/></svg>
          </div>
          <h3>Orientation & \u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28</h3>
          <p>\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23 Orientation \u0E41\u0E25\u0E30\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E02\u0E2D\u0E07\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/getting-started/orientation" data-link class="ex-folder-doc"><span>01</span> Orientation</a>
          <a href="#/getting-started/wifi" data-link class="ex-folder-doc"><span>02</span> Office Wi-Fi</a>
          <a href="#/getting-started/meeting-rooms" data-link class="ex-folder-doc"><span>03</span> Meeting Rooms</a>
        </div>
      </div>

      <div class="ex-folder ex-folder--warm fdb-reveal fdb-delay2" tabindex="0" aria-label="\u0E2B\u0E21\u0E27\u0E14\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A">
        <div class="ex-folder-tab">Intern Tasks</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 5h18v24H7z"/><path d="M11 10h10M11 15h10M11 20h7"/><path d="M23 4v5h5"/></svg>
          </div>
          <h3>\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A</h3>
          <p>\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48 intern \u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E17\u0E31\u0E49\u0E07\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E23\u0E32\u0E22\u0E40\u0E14\u0E37\u0E2D\u0E19<br>\u0E41\u0E25\u0E30 HR project \u0E01\u0E48\u0E2D\u0E19\u0E08\u0E1A\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/tasks/timesheet" data-link class="ex-folder-doc"><span>01</span> Timesheet</a>
          <a href="#/tasks/hr-bd-project" data-link class="ex-folder-doc"><span>02</span> HR Project</a>
          <a href="#/showcase/experiences" data-link class="ex-folder-doc"><span>03</span> Showcase Examples</a>
        </div>
      </div>

      <div class="ex-folder ex-folder--slate fdb-reveal fdb-delay2" tabindex="0" aria-label="\u0E2B\u0E21\u0E27\u0E14\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E41\u0E25\u0E30\u0E17\u0E35\u0E21">
        <div class="ex-folder-tab">\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="16" cy="10" r="5"/><circle cx="7" cy="22" r="4"/><circle cx="25" cy="22" r="4"/><path d="M11 14 Q8 18 11 22M21 14 Q24 18 21 22"/></svg>
          </div>
          <h3>\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E41\u0E25\u0E30\u0E17\u0E35\u0E21</h3>
          <p>\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E41\u0E25\u0E30\u0E17\u0E35\u0E21</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/employee/org-chart" data-link class="ex-folder-doc"><span>01</span> \u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23</a>
        </div>
      </div>

      <div class="ex-folder ex-folder--teal fdb-reveal fdb-delay1" tabindex="0" aria-label="\u0E2B\u0E21\u0E27\u0E14\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22">
        <div class="ex-folder-tab">\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M16 3 L28 8v10c0 7-5 11-12 13C9 29 4 25 4 18V8L16 3Z"/><path d="M11 16l3 3 7-7"/></svg>
          </div>
          <h3>Work Policy</h3>
          <p>\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22\u0E41\u0E25\u0E30\u0E01\u0E0E\u0E23\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E1A\u0E43\u0E19\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/policy/code-of-conduct" data-link class="ex-folder-doc"><span>01</span> Core Values</a>
          <a href="#/policy/dress-code" data-link class="ex-folder-doc"><span>02</span> Dress Code</a>
          <a href="#/policy/leave" data-link class="ex-folder-doc"><span>03</span> Leave & Absence</a>
        </div>
      </div>

      <div class="ex-folder ex-folder--cyan fdb-reveal fdb-delay2" tabindex="0" aria-label="\u0E2B\u0E21\u0E27\u0E14 Resources">
        <div class="ex-folder-tab">Resources</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="14" height="14" rx="2"/><rect x="14" y="14" width="14" height="14" rx="2"/><rect x="4" y="18" width="8" height="10" rx="2"/><rect x="20" y="4" width="8" height="8" rx="2"/></svg>
          </div>
          <h3>Resources</h3>
          <p>\u0E04\u0E33\u0E16\u0E32\u0E21\u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2D\u0E49\u0E32\u0E07\u0E2D\u0E34\u0E07\u0E17\u0E35\u0E48\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E40\u0E0A\u0E47\u0E01\u0E44\u0E14\u0E49\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/resources/faqs" data-link class="ex-folder-doc"><span>01</span> FAQs</a>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="ex-home-quick" aria-labelledby="ex-home-quick-title">
  <div class="ex-home-quick-inner">
    <div class="ex-home-section-intro fdb-reveal">
      <h2 id="ex-home-quick-title">\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E1A\u0E48\u0E2D\u0E22</h2>
      <p>\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E43\u0E0A\u0E49\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E43\u0E19\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22\u0E02\u0E36\u0E49\u0E19 \u0E17\u0E31\u0E49\u0E07\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D Wi-Fi, \u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D, \u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E25\u0E32 <br>\u0E41\u0E25\u0E30\u0E04\u0E33\u0E16\u0E32\u0E21\u0E40\u0E1A\u0E37\u0E49\u0E2D\u0E07\u0E15\u0E49\u0E19\u0E17\u0E35\u0E48 intern \u0E2D\u0E32\u0E08\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E23\u0E39\u0E49\u0E04\u0E33\u0E15\u0E2D\u0E1A \u{1F516}</p>
    </div>

    <div class="ex-quick-list">
      <a href="#/getting-started/wifi" data-link>
        <span class="ex-quick-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1.2" fill="currentColor" stroke="none"/></svg>
        </span>
        <span>Wi-Fi</span>
        <strong>\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E2D\u0E34\u0E19\u0E40\u0E17\u0E2D\u0E23\u0E4C\u0E40\u0E19\u0E47\u0E15<br>\u0E43\u0E19\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28</strong>
      </a>
      <a href="#/policy/leave" data-link>
        <span class="ex-quick-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 16l2 2 4-4"/></svg>
        </span>
        <span>Leave</span>
        <strong>\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E25\u0E32<br>\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E25\u0E32\u0E1B\u0E48\u0E27\u0E22</strong>
      </a>
      <a href="#/resources/faqs" data-link>
        <span class="ex-quick-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17" stroke-width="3"/></svg>
        </span>
        <span>FAQs</span>
        <strong>\u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48 intern \u0E21\u0E31\u0E01\u0E2A\u0E07\u0E2A\u0E31\u0E22</strong>
      </a>
    </div>
  </div>
</section>
`;

  // js/pages/first-day.js
  function renderFirstDay(data = {}) {
    const hrEmail = data.hr_email || "hr@exzyteam.com";
    return `
<div class="ex-day-page">

<section class="ex-day-hero ex-day-hero-v2" aria-label="Welcome to EXZY internship first day">
  <div class="ex-day-photo-frame" aria-label="\u0E1A\u0E23\u0E23\u0E22\u0E32\u0E01\u0E32\u0E28\u0E01\u0E32\u0E23\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48 EXZY">
    <img src="./static/first-day-hero.png" alt="\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E19\u0E31\u0E48\u0E07\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19\u0E43\u0E19\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 EXZY" />
  </div>
  <div class="ex-day-hero-inner">
    <div class="ex-day-hero-copy">
      <h1 class="ex-day-hero-h1">
        <span class="ex-day-h1-sub">\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</span>
        <span class="ex-day-h1-brand">Day 1 Guide</span>
      </h1>
      <p class="ex-day-hero-lead">\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E34\u0E48\u0E21\u0E07\u0E32\u0E19\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49 \u0E21\u0E32\u0E40\u0E0A\u0E47\u0E01\u0E2A\u0E34\u0E48\u0E07\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33 <br>\u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E04\u0E27\u0E23\u0E23\u0E39\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01\u0E01\u0E31\u0E19! \u2600\uFE0F</p>
      <button type="button" class="ex-day-cta" data-scroll-to="ex-day-tasks">\u{1F4CD} \u0E40\u0E0A\u0E47\u0E01\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49</button>
    </div>
  </div>
</section>

<section class="ex-day-tasks" id="ex-day-tasks" aria-labelledby="ex-day-tasks-title">
  <div class="ex-section-head ex-section-head-center fdb-reveal">
    <h2 id="ex-day-tasks-title">2 \u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E43\u0E19\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01</h2>
    <p>\u0E2D\u0E22\u0E48\u0E32\u0E25\u0E37\u0E21 Subscribe Calendar \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14\u0E02\u0E2D\u0E07\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E41\u0E25\u0E30\u0E01\u0E23\u0E2D\u0E01 Timesheet \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E25\u0E07\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32\u0E2D\u0E2D\u0E01\u0E07\u0E32\u0E19\u0E43\u0E19\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u{1F514}</p>
  </div>

  <div class="ex-task-stage">
    <article class="ex-task-slip ex-task-calendar fdb-reveal fdb-delay1">
      <div class="ex-task-visual" aria-hidden="true">
        <img src="./static/task-calendar-3d.png" alt="Google Calendar" loading="lazy" />
      </div>
      <div class="ex-task-content">
        <span class="ex-task-badge">Task 01</span>
        <h3>Subscribe Google Calendar</h3>
        <p>HR \u0E08\u0E30\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E40\u0E0A\u0E34\u0E0D\u0E43\u0E2B\u0E49\u0E17\u0E32\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25 \u0E01\u0E14\u0E40\u0E1B\u0E34\u0E14 Calendar \u0E41\u0E25\u0E49\u0E27 subscribe \u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E1B\u0E35\u0E02\u0E2D\u0E07\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17</p>
        <div class="ex-mini-flow ex-mini-flow-emoji">
          <div class="ex-flow-step"><span aria-hidden="true">\u{1F4E7}</span><b>\u0E23\u0E31\u0E1A\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E04\u0E33\u0E40\u0E0A\u0E34\u0E0D\u0E08\u0E32\u0E01 HR</b></div>
          <i></i>
          <div class="ex-flow-step"><span aria-hidden="true">\u{1F4C5}</span><b>\u0E01\u0E14 Open Calendar</b></div>
          <i></i>
          <div class="ex-flow-step"><span aria-hidden="true">\u2705</span><b>\u0E01\u0E14 Subscribe \u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19</b></div>
        </div>
        <p class="ex-task-note">\u0E16\u0E49\u0E32\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A calendar invitation \u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D HR \u0E17\u0E35\u0E48 <a href="mailto:${hrEmail}">${hrEmail}</a></p>
      </div>
    </article>

    <article class="ex-task-slip ex-task-timesheet fdb-reveal fdb-delay2">
      <div class="ex-task-visual" aria-hidden="true">
        <img src="./static/task-timesheet-3d.png" alt="Timesheet" loading="lazy" />
      </div>
      <div class="ex-task-content">
        <span class="ex-task-badge">Task 02</span>
        <h3>\u0E01\u0E23\u0E2D\u0E01 Timesheet</h3>
        <p>\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32\u0E2D\u0E2D\u0E01\u0E07\u0E32\u0E19\u0E15\u0E32\u0E21\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22\u0E43\u0E19\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48 HR \u0E2A\u0E48\u0E07\u0E43\u0E2B\u0E49 \u0E41\u0E19\u0E30\u0E19\u0E33\u0E43\u0E2B\u0E49\u0E17\u0E33\u0E17\u0E38\u0E01\u0E27\u0E31\u0E19\u0E08\u0E30\u0E44\u0E14\u0E49\u0E44\u0E21\u0E48\u0E25\u0E37\u0E21\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E17\u0E33 <br>\u0E41\u0E25\u0E30\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2A\u0E48\u0E07 HR \u0E40\u0E1B\u0E47\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29\u0E15\u0E2D\u0E19\u0E2A\u0E34\u0E49\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19 (\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331)</p>
        <div class="ex-mini-flow ex-mini-flow-emoji">
          <div class="ex-flow-step"><span aria-hidden="true">\u{1F4C2}</span><b>\u0E23\u0E31\u0E1A\u0E44\u0E1F\u0E25\u0E4C Timesheet \u0E08\u0E32\u0E01 HR</b></div>
          <i></i>
          <div class="ex-flow-step"><span aria-hidden="true">\u270F\uFE0F</span><b>\u0E40\u0E1B\u0E34\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E41\u0E25\u0E30\u0E40\u0E23\u0E34\u0E48\u0E21\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25</b></div>
          <i></i>
          <div class="ex-flow-step"><span aria-hidden="true">\u{1F5A8}\uFE0F</span><b>\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2A\u0E48\u0E07 HR \u0E2A\u0E34\u0E49\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19 <br>(\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331)</b></div>
        </div>
        <a href="#/tasks/timesheet" class="ex-task-btn" data-link>\u0E14\u0E39\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D Timesheet \u2192</a>
      </div>
    </article>
  </div>
</section>

<section class="ex-day-road" aria-labelledby="ex-day-road-title">
  <div class="ex-section-head ex-section-head-center fdb-reveal">
    <h2 id="ex-day-road-title">\u0E40\u0E23\u0E34\u0E48\u0E21\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48 EXZY \u0E14\u0E49\u0E27\u0E22 4 \u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E19\u0E35\u0E49</h2>
    <p>\u0E19\u0E35\u0E48\u0E04\u0E37\u0E2D\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48 intern \u0E08\u0E30\u0E44\u0E14\u0E49\u0E40\u0E08\u0E2D\u0E43\u0E19\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</p>
  </div>

  <div class="ex-day-items-grid">
    <article class="ex-day-item fdb-reveal">
      <span class="ex-day-item-num">01</span>
      <h3>Orientation</h3>
      <p>\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01 EXZY \u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22 \u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E41\u0E25\u0E30\u0E2B\u0E32\u0E01\u0E21\u0E35\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E32\u0E01\u0E16\u0E32\u0E21 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E16\u0E32\u0E21\u0E1E\u0E35\u0E48 HR \u0E44\u0E14\u0E49\u0E40\u0E25\u0E22</p>
      <div class="ex-road-mini">
        <span><span aria-hidden="true">\u{1F3E2}</span><b>EXZY</b></span>
        <span><span aria-hidden="true">\u{1F4BB}</span><b>Tools</b></span>
        <span><span aria-hidden="true">\u{1F4C5}</span><b>Calendar</b></span>
      </div>
    </article>

    <article class="ex-day-item fdb-reveal fdb-delay1">
      <span class="ex-day-item-num">02</span>
      <h3>Metropolis</h3>
      <p>Session \u0E08\u0E32\u0E01\u0E17\u0E35\u0E21 design <br>\u0E17\u0E35\u0E48\u0E08\u0E30\u0E1E\u0E32\u0E44\u0E1B\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01 Metropolis Concept <br>\u0E41\u0E19\u0E27\u0E04\u0E34\u0E14\u0E40\u0E1A\u0E37\u0E49\u0E2D\u0E07\u0E2B\u0E25\u0E31\u0E07 Product Design <br>\u0E02\u0E2D\u0E07 EXZY</p>
      <div class="ex-road-mini">
        <span><img src="./exzy-square-icon.png" style="width:20px;height:20px;object-fit:contain;border-radius:4px;" alt="EXZY" loading="lazy"><b>Logo</b></span>
        <span><span aria-hidden="true">\u{1F3A8}</span><b>Color</b></span>
        <span><span aria-hidden="true">\u{1F465}</span><b>People</b></span>
      </div>
    </article>

    <article class="ex-day-item fdb-reveal fdb-delay1">
      <span class="ex-day-item-num">03</span>
      <h3>Mentor &amp; Team</h3>
      <p>\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22\u0E01\u0E31\u0E1A\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E17\u0E35\u0E48\u0E08\u0E30\u0E14\u0E39\u0E41\u0E25\u0E15\u0E25\u0E2D\u0E14\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01\u0E01\u0E31\u0E1A\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E43\u0E19\u0E17\u0E35\u0E21 \u0E41\u0E25\u0E30\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22\u0E16\u0E36\u0E07\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E04\u0E32\u0E14\u0E2B\u0E27\u0E31\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</p>
      <div class="ex-road-mini">
        <span><span aria-hidden="true">\u{1F9ED}</span><b>Mentor</b></span>
        <span><span aria-hidden="true">\u{1F91D}</span><b>Team</b></span>
        <span><span aria-hidden="true">\u{1F4AC}</span><b>Ask</b></span>
      </div>
    </article>

    <article class="ex-day-item fdb-reveal fdb-delay2">
      <span class="ex-day-item-num">04</span>
      <h3>Timesheet</h3>
      <p>\u0E40\u0E23\u0E34\u0E48\u0E21\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32\u0E2D\u0E2D\u0E01\u0E15\u0E32\u0E21\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22\u0E43\u0E19\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48 HR \u0E2A\u0E48\u0E07\u0E43\u0E2B\u0E49 \u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E17\u0E38\u0E01\u0E2A\u0E34\u0E49\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19 (\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331)</p>
      <div class="ex-road-mini">
        <button type="button" class="ex-inline-link" data-link><span aria-hidden="true">\u{1F4CB}</span><b>\u0E14\u0E39\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D \u2192</b></button>
      </div>
    </article>
  </div>
</section>

<section class="ex-day-videos" aria-labelledby="ex-day-videos-title">
  <div class="ex-section-head ex-section-head-center fdb-reveal">
    <h2 id="ex-day-videos-title" style="white-space:nowrap;">\u{1F37D}\uFE0F \u0E1E\u0E31\u0E01\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E41\u0E25\u0E49\u0E27 \u0E17\u0E32\u0E19\u0E02\u0E49\u0E32\u0E27\u0E17\u0E35\u0E48\u0E44\u0E2B\u0E19\u0E14\u0E35? \u{1F958}</h2>
    <p>\u0E23\u0E27\u0E21\u0E04\u0E25\u0E34\u0E1B\u0E41\u0E19\u0E30\u0E19\u0E33\u0E23\u0E49\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E23\u0E2D\u0E1A\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 \u0E17\u0E31\u0E49\u0E07\u0E23\u0E49\u0E32\u0E19\u0E40\u0E14\u0E47\u0E14\u0E17\u0E35\u0E48\u0E1E\u0E35\u0E48 \u0E46 \u0E41\u0E19\u0E30\u0E19\u0E33 \u0E41\u0E25\u0E30\u0E23\u0E49\u0E32\u0E19\u0E43\u0E01\u0E25\u0E49\u0E17\u0E35\u0E48\u0E40\u0E14\u0E34\u0E19\u0E44\u0E1B\u0E01\u0E34\u0E19\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22 \u0E46 \u0E44\u0E21\u0E48\u0E44\u0E01\u0E25 \u{1F60B}\u{1F962}</p>
  </div>

  <div class="ex-day-video-grid">
    <article class="ex-day-video-card fdb-reveal">
      <div class="ex-day-video-frame">
        <iframe src="https://www.youtube-nocookie.com/embed/FKzHY0kpHlE" title="\u0E1B\u0E31\u0E01\u0E2B\u0E21\u0E38\u0E14\u0E23\u0E49\u0E32\u0E19\u0E40\u0E14\u0E47\u0E14\u0E0A\u0E32\u0E27 EXZY" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="ex-day-video-copy">
        <span>\u0E41\u0E19\u0E30\u0E19\u0E33\u0E23\u0E49\u0E32\u0E19\u0E40\u0E14\u0E47\u0E14</span>
        <h3>\u{1F4CC} \u0E1B\u0E31\u0E01\u0E2B\u0E21\u0E38\u0E14\u0E23\u0E49\u0E32\u0E19\u0E40\u0E14\u0E47\u0E14\u0E0A\u0E32\u0E27 EXZY</h3>
        <p>\u0E2D\u0E22\u0E32\u0E01\u0E23\u0E39\u0E49\u0E27\u0E48\u0E32\u0E23\u0E49\u0E32\u0E19\u0E44\u0E2B\u0E19\u0E40\u0E14\u0E47\u0E14 \u0E25\u0E2D\u0E07\u0E16\u0E32\u0E21\u0E1E\u0E35\u0E48 \u0E46 \u0E17\u0E35\u0E48 EXZY \u0E01\u0E31\u0E19! \u{1F929}\u{1F357}</p>
      </div>
    </article>

    <article class="ex-day-video-card fdb-reveal fdb-delay1">
      <div class="ex-day-video-frame">
        <iframe src="https://www.youtube-nocookie.com/embed/jWSrBLB4Mg0" title="\u0E41\u0E08\u0E01\u0E1E\u0E34\u0E01\u0E31\u0E14\u0E23\u0E49\u0E32\u0E19\u0E40\u0E14\u0E47\u0E14\u0E23\u0E2D\u0E1A EXZY" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="ex-day-video-copy">
        <span>\u0E1E\u0E34\u0E01\u0E31\u0E14\u0E23\u0E49\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23</span>
        <h3>\u{1F35C} \u0E23\u0E2D\u0E1A\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32 \u0E23\u0E49\u0E32\u0E19\u0E44\u0E2B\u0E19\u0E19\u0E48\u0E32\u0E01\u0E34\u0E19\u0E1A\u0E49\u0E32\u0E07?</h3>
        <p>\u0E1E\u0E34\u0E01\u0E31\u0E14\u0E23\u0E49\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E43\u0E01\u0E25\u0E49\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E14\u0E34\u0E19\u0E44\u0E1B\u0E44\u0E14\u0E49 <br>\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E30\u0E44\u0E1B\u0E01\u0E34\u0E19\u0E17\u0E35\u0E48\u0E44\u0E2B\u0E19 \u0E25\u0E2D\u0E07\u0E14\u0E39\u0E04\u0E25\u0E34\u0E1B\u0E19\u0E35\u0E49\u0E40\u0E25\u0E22! \u2728\u{1F37D}\uFE0F\u{1F60B}</p>
      </div>
    </article>
  </div>
</section>

<section class="ex-day-more" aria-labelledby="ex-day-more-title">
  <div class="ex-day-more-inner fdb-reveal">

    <div class="ex-more-headline">
      <p class="ex-more-kicker"><span></span>Intern Handbook Map</p>
      <h2 id="ex-day-more-title">\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D\u0E43\u0E19 <br>Intern Handbook \u{1F4DA}</h2>
      <p>\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48 intern \u0E04\u0E27\u0E23\u0E23\u0E39\u0E49\u0E41\u0E25\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E15\u0E25\u0E2D\u0E14\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22 \u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 \u0E04\u0E19\u0E43\u0E19\u0E17\u0E35\u0E21 \u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2D\u0E37\u0E48\u0E19 \u0E46 \u0E2D\u0E35\u0E01\u0E21\u0E32\u0E01\u0E21\u0E32\u0E22</p>
      <a href="#/" class="ex-more-home" data-link>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        \u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E2B\u0E19\u0E49\u0E32 Home
      </a>
    </div>

    <div class="ex-more-chapters">
      <a href="#/getting-started/orientation" data-link class="ex-more-ch">
        <span class="ex-more-ch-num">01</span>
        <span class="ex-more-ch-ico" aria-hidden="true">\u{1F3E2}</span>
        <b>Orientation &amp; Office</b>
        <small>Wi-Fi, Meeting Rooms, Orientation slides</small>
      </a>
      <a href="#/employee/org-chart" data-link class="ex-more-ch">
        <span class="ex-more-ch-num">02</span>
        <span class="ex-more-ch-ico" aria-hidden="true">\u{1F465}</span>
        <b>\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E41\u0E25\u0E30\u0E17\u0E35\u0E21</b>
        <small>\u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23</small>
      </a>
      <a href="#/policy/code-of-conduct" data-link class="ex-more-ch">
        <span class="ex-more-ch-num">03</span>
        <span class="ex-more-ch-ico" aria-hidden="true">\u{1F4CB}</span>
        <b>Work Policy</b>
        <small>Core Values, Dress Code, \u0E01\u0E32\u0E23\u0E25\u0E32</small>
      </a>
      <a href="#/tasks/hr-bd-project" data-link class="ex-more-ch">
        <span class="ex-more-ch-num">04</span>
        <span class="ex-more-ch-ico" aria-hidden="true">\u{1F4DD}</span>
        <b>Intern Tasks</b>
        <small>Timesheet, HR / BD Project</small>
      </a>
      <a href="#/resources/faqs" data-link class="ex-more-ch">
        <span class="ex-more-ch-num">05</span>
        <span class="ex-more-ch-ico" aria-hidden="true">\u2754</span>
        <b>FAQs &amp; Resources</b>
        <small>\u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48\u0E21\u0E31\u0E01\u0E40\u0E08\u0E2D\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</small>
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
    lead: "\u0E17\u0E1A\u0E17\u0E27\u0E19\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E1F\u0E31\u0E07\u0E43\u0E19 Orientation \u0E17\u0E31\u0E49\u0E07\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A \u0E41\u0E25\u0E30\u0E40\u0E1A\u0E35\u0E49\u0E22\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E15\u0E48\u0E32\u0E07 \u0E46",
    toc: [
      ["slides", "\u0E2A\u0E44\u0E25\u0E14\u0E4C\u0E1B\u0E10\u0E21\u0E19\u0E34\u0E40\u0E17\u0E28"],
      ["intro", "\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A EXZY"],
      ["values", "EXZY Core Values"],
      ["projects", "\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E08\u0E30\u0E44\u0E14\u0E49\u0E17\u0E33"],
      ["benefits", "\u0E40\u0E1A\u0E35\u0E49\u0E22\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21"],
      ["next", "\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E16\u0E31\u0E14\u0E44\u0E1B"]
    ],
    body: `
    <h2 id="slides">\u0E2A\u0E44\u0E25\u0E14\u0E4C\u0E1B\u0E10\u0E21\u0E19\u0E34\u0E40\u0E17\u0E28</h2>
    <p>recap \u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E1F\u0E31\u0E07\u0E43\u0E19 Orientation \u0E2D\u0E22\u0E32\u0E01\u0E23\u0E39\u0E49\u0E2D\u0E30\u0E44\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2D\u0E48\u0E32\u0E19\u0E17\u0E35\u0E48 presentation \u0E19\u0E35\u0E49\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22</p>

    <div class="slides-full-embed" id="slides-embed-area">
      <div class="slides-embed-header">
        <span class="slides-icon">${I.book}</span>
        <span class="slides-title" data-text="orientation_slides_name">Mini Internship Orientation</span>
        <div class="slides-embed-actions">
          <a href="./static/Mini-Internship-Orientation.pdf" data-link-key="orientation_slides_url" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">\u0E40\u0E1B\u0E34\u0E14\u0E41\u0E17\u0E47\u0E1A\u0E43\u0E2B\u0E21\u0E48 ${I.external}</a>
          <a href="./static/Mini-Internship-Orientation.pdf" data-link-key="orientation_pdf_url" download="Mini-Internship-Orientation.pdf" class="btn btn-primary btn-sm">${I.download} \u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14 PDF</a>
        </div>
      </div>
      <div class="slides-embed-body" id="slides-embed-body">
        <div class="slides-embed-empty">\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E44\u0E25\u0E14\u0E4C\u0E1B\u0E10\u0E21\u0E19\u0E34\u0E40\u0E17\u0E28\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19\u0E02\u0E13\u0E30\u0E19\u0E35\u0E49</div>
      </div>
    </div>

    <h2 id="intro">\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A EXZY</h2>
    <div class="exzy-intro-card anim-up">
      <div class="exzy-intro-tagline">"Excellence by design, Advanced by technology"</div>
      <p style="margin:0 0 12px;">EXZY \u0E04\u0E37\u0E2D\u0E1C\u0E39\u0E49\u0E40\u0E0A\u0E35\u0E48\u0E22\u0E27\u0E0A\u0E32\u0E0D\u0E14\u0E49\u0E32\u0E19 <strong>Smart Office Solutions</strong> \u0E41\u0E1A\u0E1A\u0E04\u0E23\u0E1A\u0E27\u0E07\u0E08\u0E23 \u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A \u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 \u0E44\u0E1B\u0E08\u0E19\u0E16\u0E36\u0E07\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E33\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E22\u0E38\u0E04\u0E43\u0E2B\u0E21\u0E48 \u0E17\u0E31\u0E49\u0E07\u0E23\u0E30\u0E1A\u0E1A\u0E08\u0E2D\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21 \u0E23\u0E30\u0E1A\u0E1A\u0E40\u0E02\u0E49\u0E32-\u0E2D\u0E2D\u0E01\u0E2D\u0E31\u0E08\u0E09\u0E23\u0E34\u0E22\u0E30 Video Conferencing \u0E41\u0E25\u0E30 Digital Signage <br><br>\u0E43\u0E19\u0E10\u0E32\u0E19\u0E30 Intern \u0E02\u0E2D\u0E07 EXZY \u0E04\u0E38\u0E13\u0E08\u0E30\u0E44\u0E14\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E02\u0E2D\u0E07\u0E17\u0E35\u0E21 \u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E27\u0E21\u0E43\u0E19\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19 \u0E41\u0E25\u0E30\u0E44\u0E14\u0E49\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E41\u0E19\u0E48\u0E19\u0E2D\u0E19</p>
      <p style="font-size:13px; color: var(--muted); margin:0;">\u0E2D\u0E22\u0E32\u0E01\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01 EXZY \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21? <a href="https://www.exzysmartoffice.com" target="_blank" rel="noopener" class="inline-link">\u0E40\u0E22\u0E35\u0E48\u0E22\u0E21\u0E0A\u0E21\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C ${I.external}</a></p>
    </div>

    <h2 id="values">EXZY Core Values</h2>
    <p>\u0E41\u0E19\u0E27\u0E04\u0E34\u0E14\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E40\u0E1A\u0E37\u0E49\u0E2D\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07 EXZY \u2014 \u0E25\u0E2D\u0E07\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08\u0E41\u0E15\u0E48\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E41\u0E25\u0E30\u0E19\u0E33\u0E44\u0E1B\u0E1B\u0E23\u0E31\u0E1A\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22</p>

    <!-- Compact CV Preview -->
    <div class="cv-wrap cv-compact">
      ${[
      { c: "cv-c1", num: "01", name: "Win as a Team", tag: "Goal \xB7 Work+ \xB7 Support" },
      { c: "cv-c2", num: "02", name: "Innovative", tag: "Value Added \xB7 Learn \xB7 Take Risks" },
      { c: "cv-c3", num: "03", name: "Positive & Open", tag: "Energy \xB7 Listening \xB7 Speaking" },
      { c: "cv-c4", num: "04", name: "Professional & Dynamic", tag: "Adapt \xB7 Commit \xB7 Prepare" },
      { c: "cv-c5", num: "05", name: "Aesthetic Design", tag: "Tidiness \xB7 Experience \xB7 WOW" }
    ].map((v, i) => `
        <div class="cv-card ${v.c} anim-up" data-delay="${i * 50}">
          <div class="cv-card-head">
            <div class="cv-card-big-num">${v.num}</div>
            <div class="cv-card-text-col">
              <div class="cv-card-name">${v.name}</div>
              <p class="cv-card-tagline">${v.tag}</p>
            </div>
          </div>
        </div>
      `).join("")}
    </div>

    <a href="#/policy/code-of-conduct" class="btn btn-ghost" data-link style="margin-top:4px;">\u0E14\u0E39 Core Values \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ${I.arrow}</a>

    <h2 id="projects">\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E08\u0E30\u0E44\u0E14\u0E49\u0E17\u0E33</h2>
    <p>\u0E15\u0E25\u0E2D\u0E14\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 Intern \u0E17\u0E38\u0E01\u0E04\u0E19\u0E08\u0E30\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C <strong>3 \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17</strong> \u0E42\u0E14\u0E22\u0E41\u0E15\u0E48\u0E25\u0E30\u0E41\u0E1A\u0E1A\u0E21\u0E35\u0E08\u0E38\u0E14\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E15\u0E48\u0E32\u0E07\u0E01\u0E31\u0E19</p>

    <div class="proj-cards">
      <div class="proj-card anim-up">
        <div class="proj-num">01</div>
        <h3>Project or Report</h3>
        <p>\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A\u0E41\u0E25\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E48\u0E07\u0E01\u0E31\u0E1A\u0E17\u0E32\u0E07\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22<br>\u0E16\u0E49\u0E32\u0E21\u0E35\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E2B\u0E49<br>\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30 HR \u0E40\u0E0B\u0E47\u0E19 \u0E43\u0E2B\u0E49\u0E2A\u0E48\u0E07\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22<br>1 \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C \u0E2B\u0E23\u0E37\u0E2D 5 \u0E27\u0E31\u0E19\u0E17\u0E33\u0E01\u0E32\u0E23</p>
      </div>
      <div class="proj-card anim-up" data-delay="80">
        <div class="proj-num">02</div>
        <h3>Team Project</h3>
        <p>\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E02\u0E2D\u0E07\u0E41\u0E15\u0E48\u0E25\u0E30 team assign \u0E43\u0E2B\u0E49\u0E15\u0E32\u0E21\u0E17\u0E31\u0E01\u0E29\u0E30\u0E41\u0E25\u0E30\u0E2A\u0E32\u0E22\u0E07\u0E32\u0E19</p>
      </div>
      <div class="proj-card anim-up" data-delay="160">
        <div class="proj-num">03</div>
        <h3>HR Project</h3>
        <p>Project \u0E17\u0E35\u0E48 HR assign \u0E43\u0E2B\u0E49 \u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E41\u0E0A\u0E23\u0E4C\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48 EXZY \u0E42\u0E14\u0E22\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E48\u0E07\u0E01\u0E48\u0E2D\u0E19\u0E08\u0E1A\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 2 \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C</p>
      </div>
    </div>

    <div class="callout anim-up" style="margin-top:20px;">
      <span class="ic">${I.info}</span>
      <div>
        <h3>\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38</h3>
        <p>\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E41\u0E25\u0E30\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E08\u0E32\u0E01\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22\u0E2D\u0E32\u0E08\u0E41\u0E15\u0E01\u0E15\u0E48\u0E32\u0E07\u0E01\u0E31\u0E19\u0E15\u0E32\u0E21\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E02\u0E2D\u0E07 intern \u0E41\u0E15\u0E48\u0E25\u0E30\u0E04\u0E19 \u0E42\u0E14\u0E22\u0E17\u0E38\u0E01\u0E04\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E0A\u0E47\u0E01\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E48\u0E07 \u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A \u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E43\u0E2B\u0E49\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30 HR \u0E15\u0E23\u0E27\u0E08\u0E15\u0E32\u0E21\u0E01\u0E33\u0E2B\u0E19\u0E14</p>
      </div>
    </div>

    <h2 id="benefits">\u0E40\u0E1A\u0E35\u0E49\u0E22\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21</h2>

    <div class="ob-allowance-card anim-up">
      <div class="ob-rates-row">
        <div class="ob-rate ob-rate--office">
          <div class="ob-rate-tag">\u0E43\u0E19\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28</div>
          <div class="ob-rate-num">200 <span>\u0E3F</span></div>
          <div class="ob-rate-sub">\u0E15\u0E48\u0E2D\u0E27\u0E31\u0E19</div>
        </div>
        <div class="ob-rate ob-rate--field">
          <div class="ob-rate-tag">\u0E19\u0E2D\u0E01\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48</div>
          <div class="ob-rate-num">300 <span>\u0E3F</span></div>
          <div class="ob-rate-sub">\u0E15\u0E48\u0E2D\u0E27\u0E31\u0E19</div>
        </div>
      </div>

      <div class="ob-docs-section">
        <div class="ob-docs-title">
          \u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E23\u0E31\u0E1A\u0E40\u0E1A\u0E35\u0E49\u0E22\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07
          <span class="ob-docs-due">\u0E2A\u0E48\u0E07\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331 \u0E02\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</span>
        </div>
        <div class="ob-doc-rows">
          <div class="ob-doc-row">
            <span class="ob-doc-dot"></span>
            <div class="ob-doc-text">\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E0B\u0E47\u0E19\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07</div>
            <span class="ob-doc-freq ob-freq-monthly">\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</span>
          </div>
          <div class="ob-doc-row">
            <span class="ob-doc-dot"></span>
            <div class="ob-doc-text">\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 Intern Timesheet \u2014 <a href="#/tasks/timesheet" data-link class="inline-link">\u0E14\u0E39\u0E27\u0E34\u0E18\u0E35\u0E01\u0E23\u0E2D\u0E01</a></div>
            <span class="ob-doc-freq ob-freq-monthly">\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</span>
          </div>
          <div class="ob-doc-row">
            <span class="ob-doc-dot"></span>
            <div class="ob-doc-text">\u0E2A\u0E33\u0E40\u0E19\u0E32 Book Bank \u0E02\u0E2D\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E0B\u0E47\u0E19\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07</div>
            <span class="ob-doc-freq ob-freq-once">\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E41\u0E23\u0E01</span>
          </div>
        </div>
        <div class="ob-submit-info">
          <span><span aria-hidden="true">\u{1F4C5}</span> \u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E48\u0E07: \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331 \u0E02\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</span>
          <span class="ob-info-sep">\xB7</span>
          <span><span aria-hidden="true">\u{1F4C4}</span> \u0E27\u0E34\u0E18\u0E35\u0E2A\u0E48\u0E07: \u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29\u0E41\u0E25\u0E30\u0E19\u0E33\u0E44\u0E1B\u0E43\u0E2A\u0E48\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07 HR \u0E17\u0E35\u0E48\u0E0A\u0E31\u0E49\u0E19 4</span>
        </div>
      </div>
    </div>

    <h3>Workshop \u0E41\u0E25\u0E30 Dining \u{1F38A}</h3>
    <p>EXZY \u0E08\u0E31\u0E14\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 Workshop \u0E40\u0E2A\u0E23\u0E34\u0E21\u0E17\u0E31\u0E01\u0E29\u0E30 \u0E41\u0E25\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 Dining \u0E1B\u0E23\u0E30\u0E08\u0E33\u0E40\u0E14\u0E37\u0E2D\u0E19/\u0E17\u0E35\u0E21 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01\u0E17\u0E35\u0E21\u0E41\u0E25\u0E30\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E48\u0E27\u0E21\u0E07\u0E32\u0E19\u0E21\u0E32\u0E01\u0E02\u0E36\u0E49\u0E19</p>
    <div class="callout callout-note anim-up" style="margin-top:12px;">
      <span class="ic">${I.info}</span>
      <div><p>Intern \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E2A\u0E19\u0E43\u0E08 \u0E41\u0E25\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E44\u0E14\u0E49\u0E15\u0E32\u0E21\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E43\u0E08</p></div>
    </div>

    <div id="next" class="also-explore anim-up" style="margin-top:40px;">
      <div class="ae-label">\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48</div>
      <div class="ae-links">
        <a href="#/policy/code-of-conduct" class="ae-chip" data-link>${I.shield} Core Values</a>
        <a href="#/policy/internship" class="ae-chip" data-link>${I.clock} Internship Policy</a>
        <a href="#/tasks/timesheet" class="ae-chip" data-link>${I.doc} Timesheet</a>
        <a href="#/tasks/hr-bd-project" class="ae-chip" data-link>${I.edit} HR Project</a>
        <a href="#/employee/org-chart" class="ae-chip" data-link>${I.people} \u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23</a>
      </div>
    </div>
  `
  });

  // js/pages/wifi.js
  var renderWifi = () => {
    const { hr_email: hrEmail = "hr@exzyteam.com" } = loadAdminData();
    return pageWrap({
      crumbs: [["Home", "#/home"], ["Company & Office", null], ["Office Wi-Fi", null]],
      title: "Office Wi-Fi",
      lead: "\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D Wi-Fi \u0E41\u0E25\u0E30\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E41\u0E02\u0E01 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E27\u0E34\u0E18\u0E35\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D HR \u0E2B\u0E32\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E27\u0E32\u0E21\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D",
      body: `
    <!-- Network cards -->
    <div class="wifi-net-cards">
      <div class="wifi-net-card wifi-net-staff anim-up">
        <div class="wifi-net-badge">\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19 / Intern</div>
        <div class="wifi-net-label">Network (SSID)</div>
        <div class="wifi-net-ssid-row">
          <code class="wifi-net-ssid" data-text="wifi_staff_ssid">ExzyUniFi</code>
          <button type="button" class="wn-copy wifi-net-copy" data-copy="wifi_staff_ssid" title="\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01 SSID">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          </button>
        </div>
        <div class="wifi-net-pass-row">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span>\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D HR</span>
        </div>
      </div>

      <div class="wifi-net-card wifi-net-guest anim-up" data-delay="80">
        <div class="wifi-net-badge wifi-net-badge-guest">\u0E41\u0E02\u0E01 (Guest)</div>
        <div class="wifi-net-label">Network (SSID)</div>
        <div class="wifi-net-ssid-row">
          <code class="wifi-net-ssid" data-text="wifi_guest_ssid">Exzy_Guest</code>
          <button type="button" class="wn-copy wifi-net-copy" data-copy="wifi_guest_ssid" title="\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01 SSID">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          </button>
        </div>
        <div class="wifi-net-pass-row">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span>\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D HR</span>
        </div>
      </div>
    </div>

    <!-- HR contact -->
    <div class="wifi-hr-block anim-up">
      <div class="wifi-hr-icon">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      </div>
      <div class="wifi-hr-copy">
        <div class="wifi-hr-title">\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D HR</div>
        <p class="wifi-hr-sub">\u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E17\u0E23\u0E32\u0E1A\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19 \u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D HR \u0E17\u0E32\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25</p>
        <a href="mailto:${hrEmail}" class="btn btn-primary wifi-hr-btn">${I.mail} \u0E2A\u0E48\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E2B\u0E32 HR</a>
      </div>
    </div>

    <div class="callout anim-up" style="margin-top:8px;">
      <span class="ic">${I.shield}</span>
      <div>
        <h4>\u0E23\u0E2B\u0E31\u0E2A Staff Wi-Fi \u0E2B\u0E49\u0E32\u0E21\u0E41\u0E0A\u0E23\u0E4C\u0E19\u0E30</h4>
        <p>\u0E43\u0E0A\u0E49\u0E44\u0E14\u0E49\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30 Intern \u2014 \u0E16\u0E49\u0E32\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E43\u0E2B\u0E49\u0E41\u0E08\u0E49\u0E07 HR \u0E2B\u0E23\u0E37\u0E2D\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07</p>
      </div>
    </div>
  `
    });
  };

  // js/pages/meeting-rooms.js
  var renderMeetingRooms = () => pageWrap({
    crumbs: [["Home", "#/home"], ["Getting Started", null], ["Meeting Rooms", null]],
    title: "Meeting Rooms",
    lead: "\u0E2B\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E43\u0E19\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 EXZY \u0E21\u0E35\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 4 \u0E2B\u0E49\u0E2D\u0E07 \u0E42\u0E14\u0E22\u0E08\u0E30\u0E2D\u0E22\u0E39\u0E48\u0E17\u0E35\u0E48\u0E0A\u0E31\u0E49\u0E19 1 \u0E41\u0E25\u0E30\u0E0A\u0E31\u0E49\u0E19 2",
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
        <div class="mr-ov-icon-wrap"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <span class="mr-ov-num">2\u20138</span>
        <span class="mr-ov-lbl">\u0E17\u0E48\u0E32\u0E19/\u0E2B\u0E49\u0E2D\u0E07</span>
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
          <img class="mr-room-photo" src="./static/meeting-room-xcellent.jpg" alt="\u0E20\u0E32\u0E22\u0E43\u0E19\u0E2B\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21 Xcellent \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E42\u0E15\u0E4A\u0E30\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E41\u0E25\u0E30\u0E08\u0E2D" loading="lazy" style="object-position: center 70%;" />
          <div class="mr-v2-vis-cap">${I.people}&ensp;6\u20138 \u0E17\u0E48\u0E32\u0E19</div>
        </div>
        <div class="mr-v2-info">
          <div class="mr-v2-head">
            <div class="mr-v2-name"><span>X</span>cellent</div>
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
            <img class="mr-room-photo mr-room-photo-sm" src="./static/meeting-room-xpert-area.jpg" alt="\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21 Xpert Area \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E42\u0E15\u0E4A\u0E30\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21 \u0E08\u0E2D \u0E41\u0E25\u0E30\u0E40\u0E01\u0E49\u0E32\u0E2D\u0E35\u0E49" loading="lazy" />
          </div>
          <div class="mr-v2-card-body">
            <div class="mr-v2-card-head">
              <div class="mr-v2-card-name"><span>X</span>pert Area</div>
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
            <div class="mr-room-gallery" aria-label="\u0E23\u0E39\u0E1B\u0E2B\u0E49\u0E2D\u0E07 Xtream Room">
              <img class="mr-room-photo mr-room-photo-sm" src="./static/meeting-room-xtream-front.jpg" alt="\u0E21\u0E38\u0E21\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07 Xtream Room \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E1B\u0E49\u0E32\u0E22\u0E2B\u0E49\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E08\u0E2D\u0E08\u0E2D\u0E07\u0E2B\u0E49\u0E2D\u0E07" loading="lazy" />
              <img class="mr-room-photo mr-room-photo-sm" src="./static/meeting-room-xtream-inside.jpg" alt="\u0E20\u0E32\u0E22\u0E43\u0E19\u0E2B\u0E49\u0E2D\u0E07 Xtream Room \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E42\u0E15\u0E4A\u0E30\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21 \u0E08\u0E2D \u0E41\u0E25\u0E30\u0E40\u0E01\u0E49\u0E32\u0E2D\u0E35\u0E49" loading="lazy" />
            </div>
            <div class="mr-room-gallery-dots" aria-hidden="true">
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="mr-v2-card-body">
            <div class="mr-v2-card-head">
              <div class="mr-v2-card-name"><span>X</span>tream Room</div>
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
            <div class="mr-room-gallery" aria-label="\u0E23\u0E39\u0E1B\u0E2B\u0E49\u0E2D\u0E07 Xtra Room">
              <img class="mr-room-photo mr-room-photo-sm" src="./static/meeting-room-xtra.jpg" alt="\u0E21\u0E38\u0E21\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07 Xtra Room \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E1B\u0E49\u0E32\u0E22\u0E2B\u0E49\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E08\u0E2D\u0E08\u0E2D\u0E07\u0E2B\u0E49\u0E2D\u0E07" loading="lazy" />
              <img class="mr-room-photo mr-room-photo-sm" src="./static/meeting-room-xtra-inside.jpg" alt="\u0E20\u0E32\u0E22\u0E43\u0E19\u0E2B\u0E49\u0E2D\u0E07 Xtra Room" loading="lazy" />
            </div>
            <div class="mr-room-gallery-dots" aria-hidden="true">
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="mr-v2-card-body">
            <div class="mr-v2-card-head">
              <div class="mr-v2-card-name"><span>X</span>tra Room</div>
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

    <div class="callout anim-up">
      <span class="ic">${I.people}</span>
      <div>
        <h4>\u0E01\u0E32\u0E23\u0E08\u0E2D\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21 \u{1F4C5}</h4>
        <p>Intern \u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E08\u0E2D\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21\u0E44\u0E14\u0E49\u0E40\u0E2D\u0E07 \u0E2B\u0E32\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E2B\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E30\u0E0A\u0E38\u0E21 \u0E43\u0E2B\u0E49\u0E41\u0E08\u0E49\u0E07\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E08\u0E2D\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E43\u0E2B\u0E49</p>
      </div>
    </div>

    <div class="callout anim-up" style="margin-top:12px;">
      <span class="ic">${I.info}</span>
      <div>
        <h4>\u0E01\u0E48\u0E2D\u0E19\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E2B\u0E49\u0E2D\u0E07 \u{1F4A1}</h4>
        <p>\u0E40\u0E01\u0E47\u0E1A\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C \u0E1B\u0E34\u0E14\u0E44\u0E1F \u0E1B\u0E34\u0E14\u0E08\u0E2D \u0E41\u0E25\u0E30\u0E17\u0E34\u0E49\u0E07\u0E02\u0E22\u0E30\u0E01\u0E48\u0E2D\u0E19\u0E2D\u0E2D\u0E01\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07</p>
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
      color: "#FFCC00",
      icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      desc: "\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E41\u0E1A\u0E23\u0E19\u0E14\u0E4C\u0E41\u0E25\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07 Awareness"
    },
    {
      title: "HR",
      abbr: "HR",
      color: "#82C566",
      icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      desc: "\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23\u0E41\u0E25\u0E30\u0E14\u0E39\u0E41\u0E25 Intern"
    },
    {
      title: "Accounting",
      abbr: "ACC",
      color: "#929EB4",
      icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="8" y1="3" x2="8" y2="21"/><path d="M11 8h4M11 12h4M11 16h4"/></svg>`,
      desc: "\u0E01\u0E32\u0E23\u0E40\u0E07\u0E34\u0E19 \u0E1A\u0E31\u0E0D\u0E0A\u0E35 \u0E41\u0E25\u0E30\u0E40\u0E1A\u0E35\u0E49\u0E22\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07"
    },
    {
      title: "Development",
      abbr: "DEV",
      color: "#004081",
      icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      desc: "\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E0B\u0E2D\u0E1F\u0E15\u0E4C\u0E41\u0E27\u0E23\u0E4C\u0E41\u0E25\u0E30\u0E23\u0E30\u0E1A\u0E1A"
    },
    {
      title: "Solution Engineer",
      abbr: "SE",
      color: "#586782",
      icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 15.54a5 5 0 0 1 0-7.07"/></svg>`,
      desc: "\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 Solution"
    },
    {
      title: "Design",
      abbr: "DSN",
      color: "#66C5C5",
      icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 22L6.5 14.5C6.5 14.5 3 13 3 10c0-3 2-5 5-5"/></svg>`,
      desc: "\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A UX/UI \u0E41\u0E25\u0E30\u0E2A\u0E37\u0E48\u0E2D\u0E01\u0E23\u0E32\u0E1F\u0E34\u0E01"
    },
    {
      title: "IT Support",
      abbr: "ITS",
      color: "#D0D6DF",
      icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
      desc: "\u0E14\u0E39\u0E41\u0E25\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C IT \u0E41\u0E25\u0E30 Network"
    },
    {
      title: "Sales",
      abbr: "SLS",
      color: "#F3554F",
      icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
      desc: "\u0E02\u0E32\u0E22\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E41\u0E25\u0E30\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E07 EXZY"
    }
  ];
  var renderOrgChart = () => pageWrap({
    crumbs: [["Home", "#/home"], ["Company", null], ["Org Chart", null]],
    title: "\u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23",
    lead: "EXZY \u0E21\u0E35 9 \u0E41\u0E1C\u0E19\u0E01\u0E2B\u0E25\u0E31\u0E01 \u0E46 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01\u0E41\u0E15\u0E48\u0E25\u0E30\u0E1D\u0E48\u0E32\u0E22\u0E41\u0E25\u0E30\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E04\u0E23\u0E48\u0E32\u0E27 \u0E46 \u0E44\u0E14\u0E49\u0E08\u0E32\u0E01\u0E41\u0E1C\u0E19\u0E20\u0E32\u0E1E\u0E19\u0E35\u0E49\u0E40\u0E25\u0E22 \u{1F3E2}",
    body: `
    <!-- Company HQ card (compact, centered) -->
    <div class="oc-hq-card anim-up">
      <div class="oc-hq-badge">Head Office \xB7 Bangkok</div>

      <div class="oc-hq-name">EXZY Co., Ltd.</div>
      <div class="oc-hq-tagline">"Excellence by design, Advanced by technology"</div>
      <div class="oc-hq-pills">
      </div>
    </div>

    <!-- Tree connector -->
    <div class="oc-tree-connector" aria-hidden="true">
      <div class="oc-tree-stem"></div>
      <div class="oc-tree-branch"></div>
    </div>

    <!-- Department cards -->
    <div class="oc-grid-v3">
      ${depts.map((d, i) => `
        <div class="oc-card-v3 anim-up" data-delay="${i * 35}" style="--oc3-accent:${d.color}">
          <div class="oc-card-v3-top">
            <div class="oc-card-v3-icon">${d.icon}</div>
            <span class="oc-card-v3-abbr">${d.abbr}</span>
          </div>
          <div class="oc-card-v3-title">${d.title}</div>
          <div class="oc-card-v3-desc">${d.desc}</div>
        </div>
      `).join("")}
    </div>

  `
  });

  // js/pages/policy.js
  var renderCodeOfConduct = () => pageWrap({
    crumbs: [["Home", "#/home"], ["Work Policy", null], ["Core Values", null]],
    title: "EXZY Core Values",
    lead: "\u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21\u0E17\u0E35\u0E48\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E07\u0E32\u0E19 \u0E17\u0E35\u0E21 \u0E41\u0E25\u0E30\u0E27\u0E34\u0E18\u0E35\u0E04\u0E34\u0E14\u0E02\u0E2D\u0E07 EXZY",
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
          <div class="cv-point"><span class="cv-point-k">Value Added</span><span class="cv-point-v">\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E38\u0E13\u0E04\u0E48\u0E32\u0E43\u0E2B\u0E21\u0E48\u0E14\u0E49\u0E27\u0E22 technology</span></div>
          <div class="cv-point"><span class="cv-point-k">Learn &amp; Improve</span><span class="cv-point-v">\u0E2D\u0E31\u0E1B\u0E2A\u0E01\u0E34\u0E25\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E40\u0E2A\u0E21\u0E2D \u0E44\u0E21\u0E48\u0E2B\u0E22\u0E38\u0E14\u0E1E\u0E31\u0E12\u0E19\u0E32</span></div>
          <div class="cv-point"><span class="cv-point-k">Take Risks</span><span class="cv-point-v">\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E48\u0E22\u0E07 \u0E41\u0E25\u0E49\u0E27\u0E01\u0E25\u0E49\u0E32\u0E15\u0E31\u0E14\u0E2A\u0E34\u0E19\u0E43\u0E08</span></div>
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
        <h4>\u0E19\u0E33 Core Values \u0E44\u0E1B\u0E1B\u0E23\u0E31\u0E1A\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19</h4>
        <p>\u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E35\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E01\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07 EXZY \u2014 \u0E25\u0E2D\u0E07\u0E19\u0E33\u0E44\u0E1B\u0E1B\u0E23\u0E31\u0E1A\u0E43\u0E0A\u0E49\u0E01\u0E31\u0E1A\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E2A\u0E31\u0E07\u0E40\u0E01\u0E15\u0E27\u0E48\u0E32\u0E04\u0E19\u0E43\u0E19\u0E17\u0E35\u0E21\u0E22\u0E36\u0E14\u0E16\u0E37\u0E2D\u0E2A\u0E34\u0E48\u0E07\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E35\u0E49\u0E22\u0E31\u0E07\u0E44\u0E07\u0E43\u0E19\u0E17\u0E32\u0E07\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34</p>
      </div>
    </div>
  `
  });
  var renderInternshipPolicy = () => pageWrap({
    crumbs: [["Home", "#/home"], ["Work Policy", null], ["Internship Policy", null]],
    title: "Internship Policy",
    lead: "\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19\u0E17\u0E35\u0E48 intern \u0E04\u0E27\u0E23\u0E23\u0E39\u0E49\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32\u0E07\u0E32\u0E19 \u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E41\u0E25\u0E30\u0E19\u0E31\u0E1A\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u23F0",
    body: `
    <!-- Policy Hero Banner V2 -->
    <div class="policy-hero-v2 anim-up">
      <div class="phv2-left">
        <div class="phv2-eyebrow">
          <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="8" cy="8" r="7"/><path d="M8 5v3.5l2 2"/></svg>
          \u0E40\u0E27\u0E25\u0E32\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19
        </div>
        <div class="phv2-time">
          <span class="phv2-shift">9:00 \u2013 18:00</span>
          <span class="phv2-or">\u0E2B\u0E23\u0E37\u0E2D</span>
          <span class="phv2-shift">10:00 \u2013 19:00</span>
        </div>
        <p class="phv2-sub">\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C \u2013 \u0E28\u0E38\u0E01\u0E23\u0E4C \xB7 \u0E02\u0E36\u0E49\u0E19\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E31\u0E1A\u0E41\u0E1C\u0E19\u0E01\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22</p>
      </div>
      <div class="phv2-stats">
        <div class="phv2-stat">
          <span class="phv2-num" data-count-to="8">8</span>
          <span class="phv2-unit">\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07</span>
          <span class="phv2-desc">\u0E15\u0E48\u0E2D\u0E27\u0E31\u0E19</span>
        </div>
        <div class="phv2-divider"></div>
        <div class="phv2-stat">
          <span class="phv2-num" data-count-to="1">1</span>
          <span class="phv2-unit">\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07</span>
          <span class="phv2-desc">\u0E1E\u0E31\u0E01\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07</span>
        </div>
        <div class="phv2-divider"></div>
        <div class="phv2-stat">
          <span class="phv2-num" data-count-to="15">15</span>
          <span class="phv2-unit">\u0E27\u0E31\u0E19</span>
          <span class="phv2-desc">\u0E2B\u0E22\u0E38\u0E14/\u0E1B\u0E35</span>
        </div>
      </div>
    </div>

    <h2>\u0E15\u0E32\u0E23\u0E32\u0E07\u0E27\u0E31\u0E19\u0E17\u0E33\u0E07\u0E32\u0E19 (\u0E41\u0E25\u0E49\u0E27\u0E41\u0E15\u0E48\u0E41\u0E1C\u0E19\u0E01)</h2>
    <div class="shift-row anim-up">
      <div class="shift-item">
        <div class="shift-label">\u0E1A\u0E32\u0E07\u0E41\u0E1C\u0E19\u0E01</div>
        <div class="shift-time">9:00 \u2013 18:00</div>
        <div class="shift-noon">\u0E1E\u0E31\u0E01\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07 12:00 \u2013 13:00</div>
      </div>
      <div class="shift-divider">\u0E2B\u0E23\u0E37\u0E2D</div>
      <div class="shift-item">
        <div class="shift-label">\u0E1A\u0E32\u0E07\u0E41\u0E1C\u0E19\u0E01</div>
        <div class="shift-time">10:00 \u2013 19:00</div>
        <div class="shift-noon">\u0E1E\u0E31\u0E01\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07 12:00 \u2013 13:00</div>
      </div>
    </div>
    <div class="callout anim-up" style="margin-bottom:28px;">
      <span class="ic">${I.info}</span>
      <div>
        <h3>\u0E40\u0E27\u0E25\u0E32\u0E17\u0E33\u0E07\u0E32\u0E19\u0E02\u0E36\u0E49\u0E19\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E31\u0E1A\u0E41\u0E1C\u0E19\u0E01\u0E17\u0E35\u0E48\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E2D\u0E22\u0E39\u0E48</h3>
        <p>\u0E16\u0E32\u0E21\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E2B\u0E23\u0E37\u0E2D HR \u0E27\u0E48\u0E32\u0E41\u0E1C\u0E19\u0E01\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E22\u0E36\u0E14\u0E15\u0E32\u0E21\u0E40\u0E27\u0E25\u0E32\u0E44\u0E2B\u0E19 - \u0E17\u0E33\u0E07\u0E32\u0E19 8 \u0E0A\u0E21. (\u0E44\u0E21\u0E48\u0E23\u0E27\u0E21\u0E1E\u0E31\u0E01\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07 1 \u0E0A\u0E21.) \u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C \u2013 \u0E28\u0E38\u0E01\u0E23\u0E4C</p>
      </div>
    </div>

    <h2>\u0E02\u0E49\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E33\u0E04\u0E31\u0E0D</h2>
    <div class="rule-grid">
      <div class="rule-card">
        <div class="rule-icon">${I.door}</div>
        <div class="rule-body">
          <h3>\u0E21\u0E32\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 \u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E17\u0E35\u0E48 assign \u0E44\u0E27\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19</h3>
          <p>\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E02\u0E49\u0E32\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 EXZY \u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E17\u0E35\u0E48\u0E17\u0E35\u0E21 assign \u0E44\u0E27\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 <br><strong>\u0E44\u0E21\u0E48\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15 WFH</strong> \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A Intern \u0E41\u0E15\u0E48\u0E2B\u0E32\u0E01\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19 \u0E15\u0E49\u0E2D\u0E07\u0E41\u0E08\u0E49\u0E07\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07<br>\u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D HR \u0E01\u0E48\u0E2D\u0E19\u0E40\u0E2A\u0E21\u0E2D</p>
        </div>
      </div>
      <div class="rule-card">
        <div class="rule-icon">${I.clock}</div>
        <div class="rule-body">
          <h3>\u0E25\u0E07\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32 \u2013 \u0E2D\u0E2D\u0E01\u0E17\u0E38\u0E01\u0E27\u0E31\u0E19 \u270F\uFE0F</h3>
          <p>\u0E01\u0E23\u0E2D\u0E01 Timesheet \u0E17\u0E38\u0E01\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E21\u0E32\u0E17\u0E33\u0E07\u0E32\u0E19 \u2014 \u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E08\u0E30\u0E40\u0E0B\u0E47\u0E19\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07\u0E15\u0E32\u0E21\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07</p>
        </div>
      </div>
      <div class="rule-card">
        <div class="rule-icon">${I.doc}</div>
        <div class="rule-body">
          <h3>\u0E14\u0E39\u0E41\u0E25\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E41\u0E25\u0E30\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E14\u0E49\u0E27\u0E22\u0E19\u0E30 \u{1F550}</h3>
          <p>\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E08\u0E32\u0E01\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22\u0E14\u0E49\u0E27\u0E22\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 <br>\u0E2B\u0E32\u0E01\u0E21\u0E35\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19 \u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 \u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E2B\u0E49<br>\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30 HR \u0E40\u0E0B\u0E47\u0E19 \u0E43\u0E2B\u0E49\u0E2A\u0E48\u0E07\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 <strong>1 \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C \u0E2B\u0E23\u0E37\u0E2D 5 \u0E27\u0E31\u0E19\u0E17\u0E33\u0E01\u0E32\u0E23</strong> \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1C\u0E37\u0E48\u0E2D\u0E40\u0E27\u0E25\u0E32\u0E41\u0E01\u0E49\u0E44\u0E02<br>\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E17\u0E31\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E2D\u0E07\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22</p>
        </div>
      </div>
      <div class="rule-card">
        <div class="rule-icon">${I.calendar}</div>
        <div class="rule-body">
          <h3>\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 15 \u0E27\u0E31\u0E19/\u0E1B\u0E35 \u{1F5D3}\uFE0F</h3>
          <p>Subscribe Staff Holiday Calendar \u0E44\u0E27\u0E49\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22 \u0E08\u0E30\u0E44\u0E14\u0E49\u0E44\u0E21\u0E48\u0E1E\u0E25\u0E32\u0E14\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14\u0E02\u0E2D\u0E07\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17</p>
        </div>
      </div>
    </div>

  `
  });
  var renderDressCode = () => pageWrap({
    crumbs: [["Home", "#/home"], ["Work Policy", null], ["Dress Code", null]],
    title: "Dress Code",
    lead: "\u0E41\u0E19\u0E27\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E41\u0E15\u0E48\u0E07\u0E01\u0E32\u0E22\u0E17\u0E35\u0E48 EXZY \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1B\u0E23\u0E31\u0E1A\u0E15\u0E32\u0E21\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C",
    body: `
    <!-- Dress Hero V2 -->
    <div class="dress-hero-v2 anim-up">
      <div>
        <div class="dress-tag-v2" style="color:#ffffff;">EXZY Core Value \xB7 Aesthetic Design</div>
        <h2 style="color:var(--on-dark);">\u0E2A\u0E30\u0E2D\u0E32\u0E14 \u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22 \u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21</h2>
        <p style="color:rgba(248,249,250,.82);">"\u0E2A\u0E30\u0E2D\u0E32\u0E14\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22 \u0E41\u0E25\u0E30\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E01\u0E32\u0E23\u0E41\u0E15\u0E48\u0E07\u0E01\u0E32\u0E22\u0E43\u0E2B\u0E49\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21" \u2014 \u0E15\u0E32\u0E21 EXZY Core Values \u0E01\u0E32\u0E23\u0E41\u0E15\u0E48\u0E07\u0E01\u0E32\u0E22\u0E17\u0E35\u0E48\u0E14\u0E35<br>\u0E04\u0E37\u0E2D\u0E2A\u0E48\u0E27\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E02\u0E2D\u0E07\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E21\u0E37\u0E2D\u0E2D\u0E32\u0E0A\u0E35\u0E1E\u0E41\u0E25\u0E30\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21\u0E02\u0E2D\u0E07\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17</p>
      </div>
      <div class="dress-hero-img dress-hero-img--asset">
        <img src="./static/dress-code-outfits.png" alt="\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E1C\u0E49\u0E32\u0E41\u0E25\u0E30\u0E23\u0E2D\u0E07\u0E40\u0E17\u0E49\u0E32\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E41\u0E15\u0E48\u0E07\u0E01\u0E32\u0E22\u0E41\u0E1A\u0E1A Smart Casual \u0E17\u0E35\u0E48 EXZY" loading="lazy" />
      </div>
    </div>

    <h2>\u0E01\u0E32\u0E23\u0E41\u0E15\u0E48\u0E07\u0E01\u0E32\u0E22\u0E43\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C</h2>
    <div class="dress-grid-v2">
      <div class="dress-card-v2 anim-up">
        <div class="dress-card-v2-icon" style="background:var(--cyan-soft); color:var(--navy);">${I.shirt}</div>
        <div class="dress-card-v2-style" style="color:var(--navy);">Smart Casual</div>
        <h3>\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 \u{1F3E2}</h3>
        <ul>
          <li>\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E40\u0E0A\u0E34\u0E49\u0E15\u0E41\u0E02\u0E19\u0E22\u0E32\u0E27/\u0E41\u0E02\u0E19\u0E2A\u0E31\u0E49\u0E19 \u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E42\u0E1B\u0E42\u0E25 \u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E22\u0E37\u0E14\u0E2A\u0E38\u0E20\u0E32\u0E1E</li>
          <li>\u0E01\u0E32\u0E07\u0E40\u0E01\u0E07\u0E02\u0E32\u0E22\u0E32\u0E27\u0E2B\u0E23\u0E37\u0E2D\u0E01\u0E23\u0E30\u0E42\u0E1B\u0E23\u0E07 (\u0E2A\u0E41\u0E25\u0E47\u0E04 \u0E1C\u0E49\u0E32 \u0E2B\u0E23\u0E37\u0E2D\u0E22\u0E35\u0E19\u0E2A\u0E4C)</li>
          <li>\u0E23\u0E2D\u0E07\u0E40\u0E17\u0E49\u0E32\u0E1C\u0E49\u0E32\u0E43\u0E1A \u0E04\u0E31\u0E17\u0E0A\u0E39 \u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E31\u0E14\u0E2A\u0E49\u0E19</li>
        </ul>
      </div>
      <div class="dress-card-v2 anim-up" data-delay="80">
        <div class="dress-card-v2-icon" style="background:var(--mist); color:var(--ink);">${I.people}</div>
        <div class="dress-card-v2-style" style="color:var(--ink);">Business Casual</div>
        <h3>\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E19\u0E2D\u0E01\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48 \u{1F697}</h3>
        <ul>
          <li>\u0E0A\u0E38\u0E14\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E40\u0E0A\u0E34\u0E49\u0E15\u0E41\u0E02\u0E19\u0E22\u0E32\u0E27 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2A\u0E27\u0E21\u0E40\u0E1A\u0E25\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E39\u0E17\u0E17\u0E31\u0E1A</li>
          <li>\u0E01\u0E32\u0E07\u0E40\u0E01\u0E07\u0E02\u0E32\u0E22\u0E32\u0E27\u0E2B\u0E23\u0E37\u0E2D\u0E01\u0E23\u0E30\u0E42\u0E1B\u0E23\u0E07 (\u0E2A\u0E41\u0E25\u0E47\u0E04 \u0E1C\u0E49\u0E32 \u0E2B\u0E23\u0E37\u0E2D\u0E22\u0E35\u0E19\u0E2A\u0E4C)</li>
          <li>\u0E23\u0E2D\u0E07\u0E40\u0E17\u0E49\u0E32\u0E1C\u0E49\u0E32\u0E43\u0E1A \u0E04\u0E31\u0E17\u0E0A\u0E39 \u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E31\u0E14\u0E2A\u0E49\u0E19</li>
        </ul>
      </div>
    </div>

    <h2>\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E04\u0E27\u0E23\u0E43\u0E2A\u0E48</h2>
    <div class="dress-dont-grid">
      <div class="dress-dont-item"><span class="dress-dont-x">\u2715</span> \u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E01\u0E25\u0E49\u0E32\u0E21 / \u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E41\u0E02\u0E19\u0E01\u0E38\u0E14</div>
      <div class="dress-dont-item"><span class="dress-dont-x">\u2715</span> \u0E01\u0E32\u0E07\u0E40\u0E01\u0E07\u0E02\u0E32\u0E2A\u0E31\u0E49\u0E19 (\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E40\u0E02\u0E48\u0E32)</div>
      <div class="dress-dont-item"><span class="dress-dont-x">\u2715</span> \u0E23\u0E2D\u0E07\u0E40\u0E17\u0E49\u0E32\u0E41\u0E15\u0E30 (\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E19\u0E33\u0E21\u0E32\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E44\u0E14\u0E49\u0E2B\u0E32\u0E01\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19 \u0E40\u0E0A\u0E48\u0E19 \u0E1D\u0E19\u0E15\u0E01\u0E2B\u0E23\u0E37\u0E2D\u0E1A\u0E32\u0E14\u0E40\u0E08\u0E47\u0E1A)</div>
      <div class="dress-dont-item"><span class="dress-dont-x">\u2715</span> \u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E1C\u0E49\u0E32\u0E23\u0E31\u0E14\u0E23\u0E39\u0E1B / \u0E42\u0E1B\u0E4A\u0E40\u0E1B\u0E25\u0E37\u0E2D\u0E22\u0E40\u0E01\u0E34\u0E19\u0E44\u0E1B</div>
      <div class="dress-dont-item"><span class="dress-dont-x">\u2715</span> \u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E17\u0E35\u0E48\u0E21\u0E35\u0E25\u0E32\u0E22\u0E44\u0E21\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21\u0E43\u0E19\u0E17\u0E35\u0E48\u0E17\u0E33\u0E07\u0E32\u0E19</div>
      <div class="dress-dont-item"><span class="dress-dont-x">\u2715</span> \u0E0A\u0E38\u0E14\u0E2D\u0E2D\u0E01\u0E01\u0E33\u0E25\u0E31\u0E07\u0E01\u0E32\u0E22</div>
    </div>

    <div class="callout anim-up">
      <span class="ic">${I.sparkle}</span>
      <div>
        <h4>\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E21\u0E48\u0E41\u0E19\u0E48\u0E43\u0E08 \u0E43\u0E2B\u0E49\u0E2A\u0E31\u0E07\u0E40\u0E01\u0E15\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E48\u0E27\u0E21\u0E07\u0E32\u0E19\u0E04\u0E19\u0E2D\u0E37\u0E48\u0E19\u0E14\u0E39 \u{1F440}</h4>
        <p>\u0E25\u0E2D\u0E07\u0E14\u0E39\u0E27\u0E48\u0E32\u0E1E\u0E35\u0E48 \u0E46 \u0E43\u0E19\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28\u0E41\u0E15\u0E48\u0E07\u0E15\u0E31\u0E27\u0E01\u0E31\u0E19\u0E22\u0E31\u0E07\u0E44\u0E07 \u0E2B\u0E32\u0E01\u0E2A\u0E07\u0E2A\u0E31\u0E22\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E16\u0E32\u0E21\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22</p>
      </div>
    </div>
  `
  });
  var renderLeave = () => {
    const { hr_email: hrEmail = "hr@exzyteam.com" } = loadAdminData();
    return pageWrap({
      crumbs: [["Home", "#/home"], ["Work Policy", null], ["Leave & Absence", null]],
      title: "Leave & Absence",
      lead: "\u0E1B\u0E48\u0E27\u0E22\u0E2B\u0E23\u0E37\u0E2D\u0E21\u0E35\u0E18\u0E38\u0E23\u0E30 \u2014 \u0E41\u0E08\u0E49\u0E07\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25 HR \u0E15\u0E32\u0E21\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49",
      body: `
    <h2>\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E25\u0E32\u0E07\u0E32\u0E19 \u2014 3 \u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19</h2>

    <div class="leave-process">
      <div class="leave-step anim-left" data-delay="0">
        <div class="leave-step-node">1</div>
        <div class="leave-step-card">
          <h4>\u0E41\u0E08\u0E49\u0E07\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30\u0E17\u0E35\u0E21 \u{1F4AC}</h4>
          <p>\u0E41\u0E08\u0E49\u0E07\u0E02\u0E2D\u0E25\u0E32\u0E01\u0E31\u0E1A\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30\u0E17\u0E35\u0E21\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E41\u0E23\u0E01 \u0E01\u0E48\u0E2D\u0E19\u0E2A\u0E48\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E43\u0E2B\u0E49 HR</p>
        </div>
      </div>
      <div class="leave-step anim-left" data-delay="100">
        <div class="leave-step-node">2</div>
        <div class="leave-step-card">
          <h4>\u0E2A\u0E48\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E41\u0E08\u0E49\u0E07\u0E01\u0E32\u0E23\u0E25\u0E32\u0E43\u0E2B\u0E49 HR \u2709\uFE0F</h4>
          <p>\u0E2A\u0E48\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E41\u0E08\u0E49\u0E07\u0E25\u0E32\u0E44\u0E1B\u0E17\u0E35\u0E48 <a href="mailto:${hrEmail}" class="inline-link">${hrEmail}</a> \u0E23\u0E30\u0E1A\u0E38\u0E40\u0E2B\u0E15\u0E38\u0E1C\u0E25\u0E41\u0E25\u0E30\u0E08\u0E33\u0E19\u0E27\u0E19\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E25\u0E32</p>
        </div>
      </div>
      <div class="leave-step anim-left" data-delay="200">
        <div class="leave-step-node">3</div>
        <div class="leave-step-card">
          <h4>CC \u0E2D\u0E35\u0E40\u0E21\u0E25\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30\u0E17\u0E35\u0E21 \u{1F4E4}</h4>
          <p>CC \u0E2D\u0E35\u0E40\u0E21\u0E25\u0E44\u0E1B\u0E2B\u0E32\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30\u0E17\u0E35\u0E21\u0E43\u0E19\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19\u0E01\u0E31\u0E1A HR \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E17\u0E38\u0E01\u0E04\u0E19\u0E23\u0E31\u0E1A\u0E17\u0E23\u0E32\u0E1A</p>
        </div>
      </div>
    </div>

    <div class="callout anim-up">
      <span class="ic">${I.info}</span>
      <div>
        <h4>\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E25\u0E32\u0E08\u0E30\u0E44\u0E21\u0E48\u0E19\u0E31\u0E1A\u0E40\u0E1B\u0E47\u0E19\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</h4>
        <p>\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E40\u0E0B\u0E47\u0E19\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07\u0E15\u0E32\u0E21\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 \u0E2B\u0E32\u0E01\u0E25\u0E32\u0E1A\u0E48\u0E2D\u0E22\u0E2D\u0E32\u0E08\u0E2A\u0E48\u0E07\u0E1C\u0E25\u0E15\u0E48\u0E2D\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E31\u0E1A\u0E17\u0E32\u0E07\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22 \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E27\u0E31\u0E19\u0E25\u0E32\u0E41\u0E25\u0E30\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E43\u0E2B\u0E49\u0E14\u0E35\u0E19\u0E30!</p>
      </div>
    </div>

    <h2>\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E27\u0E25\u0E32\u0E41\u0E08\u0E49\u0E07\u0E25\u0E32</h2>
    <div class="leave-deadline-row">
      <div class="leave-dl-card leave-dl-sick anim-up">
        <div class="leave-dl-type">\u{1F912} \u0E25\u0E32\u0E1B\u0E48\u0E27\u0E22</div>
        <div class="leave-dl-time">\u0E41\u0E08\u0E49\u0E07 HR \u0E01\u0E48\u0E2D\u0E19 11:00 \u0E19.</div>
        <div class="leave-dl-note">\u0E02\u0E2D\u0E07\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E25\u0E32\u0E07\u0E32\u0E19</div>
      </div>
      <div class="leave-dl-card leave-dl-biz anim-up" data-delay="80">
        <div class="leave-dl-type">\u{1F4CB} \u0E25\u0E32\u0E01\u0E34\u0E08\u0E18\u0E38\u0E23\u0E30</div>
        <div class="leave-dl-time">\u0E41\u0E08\u0E49\u0E07 HR \u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32 1 \u0E27\u0E31\u0E19</div>
        <div class="leave-dl-note">\u0E27\u0E31\u0E19\u0E17\u0E33\u0E01\u0E32\u0E23\u0E01\u0E48\u0E2D\u0E19\u0E27\u0E31\u0E19\u0E25\u0E32</div>
      </div>
    </div>

    <div class="callout anim-up">
      <span class="ic">${I.shield}</span>
      <div>
        <h4>\u0E2B\u0E32\u0E01\u0E25\u0E32\u0E21\u0E32\u0E01\u0E40\u0E01\u0E34\u0E19\u0E44\u0E1B \u0E08\u0E30\u0E40\u0E01\u0E34\u0E14\u0E2D\u0E30\u0E44\u0E23\u0E02\u0E36\u0E49\u0E19?</h4>
        <p>\u0E16\u0E49\u0E32\u0E25\u0E32\u0E1A\u0E48\u0E2D\u0E22\u0E08\u0E19\u0E40\u0E01\u0E34\u0E19\u0E44\u0E1B\u0E41\u0E25\u0E30\u0E17\u0E35\u0E21\u0E40\u0E2B\u0E47\u0E19\u0E27\u0E48\u0E32\u0E44\u0E21\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21 \u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E2D\u0E32\u0E08\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E22\u0E38\u0E15\u0E34\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E41\u0E08\u0E49\u0E07\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22 \u0E2B\u0E32\u0E01\u0E21\u0E35\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E2D\u0E30\u0E44\u0E23\u0E25\u0E2D\u0E07\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E01\u0E48\u0E2D\u0E19\u0E14\u0E35\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14</p>
      </div>
    </div>
  `
    });
  };

  // js/pages/resources.js
  var renderTimesheet = () => {
    const { hr_email: hrEmail = "hr@exzyteam.com" } = loadAdminData();
    return pageWrap({
      crumbs: [["Home", "#/home"], ["Intern Tasks", null], ["Timesheet", null]],
      title: "Intern Timesheet",
      lead: "\u0E01\u0E23\u0E2D\u0E01\u0E17\u0E38\u0E01\u0E27\u0E31\u0E19 \u0E2A\u0E48\u0E07\u0E17\u0E38\u0E01\u0E2A\u0E34\u0E49\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19 \u2014 \u0E14\u0E39\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E41\u0E25\u0E30\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E44\u0E14\u0E49\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07",
      body: `
    <div class="ts-flow-section">
      <p class="ts-flow-section-label">\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E01\u0E32\u0E23\u0E01\u0E23\u0E2D\u0E01 Timesheet</p>
      <div class="ts-flow-v3 anim-up">
        ${[
        { n: "01", bg: "var(--cyan)", when: "\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01", what: "\u0E23\u0E31\u0E1A\u0E44\u0E1F\u0E25\u0E4C\u0E08\u0E32\u0E01 HR", note: "HR \u0E41\u0E0A\u0E23\u0E4C\u0E44\u0E1F\u0E25\u0E4C Timesheet \u0E17\u0E32\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25" },
        { n: "02", bg: "var(--navy)", when: "\u0E17\u0E38\u0E01\u0E27\u0E31\u0E19", what: "\u0E01\u0E23\u0E2D\u0E01 Timesheet", note: "\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32\u2013\u0E2D\u0E2D\u0E01 \u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E17\u0E33" },
        { n: "03", bg: "var(--slate)", when: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23\u0E25\u0E32", what: "\u0E23\u0E30\u0E1A\u0E38\u0E01\u0E32\u0E23\u0E25\u0E32", note: "\u0E23\u0E30\u0E1A\u0E38\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E43\u0E19\u0E04\u0E2D\u0E25\u0E31\u0E21\u0E19\u0E4C Summary" },
        { n: "04", bg: "var(--navy)", when: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331", what: "\u0E1E\u0E34\u0E21\u0E1E\u0E4C + \u0E2A\u0E48\u0E07\u0E43\u0E2B\u0E49 HR", note: "\u0E2A\u0E48\u0E07\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29 \u0E17\u0E35\u0E48\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07\u0E02\u0E2D\u0E07 HR" }
      ].map((s) => `
          <div class="ts-fv3-step">
            <div class="ts-fv3-dot" style="background:${s.bg}">${s.n}</div>
            <div class="ts-fv3-when">${s.when}</div>
            <div class="ts-fv3-what">${s.what}</div>
            <div class="ts-fv3-note">${s.note}</div>
          </div>
        `).join("")}
      </div>
    </div>

    <h2>\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 Timesheet \u{1F4C4}</h2>
    <p>\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 Timesheet \u0E02\u0E2D\u0E07 EXZY \u0E21\u0E35\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49 \u2014 \u0E43\u0E0A\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E49\u0E32\u0E07\u0E2D\u0E34\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25</p>
    <figure class="ts-figure">
      <img src="timesheet-sample.png" alt="\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 Intern Timesheet \u0E02\u0E2D\u0E07 EXZY" loading="lazy" />
      <figcaption>\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 Intern Timesheet \xB7 \u0E2A\u0E48\u0E07\u0E43\u0E2B\u0E49 HR \u0E17\u0E38\u0E01\u0E2A\u0E34\u0E49\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</figcaption>
    </figure>

    <div class="callout callout-note anim-up">
      <span class="ic">${I.mail}</span>
      <div>
        <h3>\u0E23\u0E31\u0E1A\u0E44\u0E1F\u0E25\u0E4C Timesheet \u0E08\u0E32\u0E01 HR</h3>
        <p>\u0E40\u0E0A\u0E47\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E43\u0E2B\u0E49\u0E44\u0E27\u0E49\u0E01\u0E31\u0E1A HR \u2014 \u0E44\u0E1F\u0E25\u0E4C\u0E08\u0E30\u0E16\u0E39\u0E01\u0E2A\u0E48\u0E07\u0E21\u0E32\u0E43\u0E19\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A \u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D <a href="mailto:${hrEmail}">${hrEmail}</a> \u0E44\u0E14\u0E49\u0E40\u0E25\u0E22</p>
      </div>
    </div>

    <h2 style="margin-top:48px;">\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E23\u0E2D\u0E01</h2>
    <div class="ts-col-grid">
      <div class="ts-col-item anim-up"><div class="ts-col-n">1</div><div class="ts-col-info"><strong>Date</strong><span>\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">2</div><div class="ts-col-info"><strong>Time In / Time Out</strong><span>\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32 \u2013 \u0E2D\u0E2D\u0E01 (\u0E43\u0E2A\u0E48\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E32\u0E21\u0E08\u0E23\u0E34\u0E07)</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">3</div><div class="ts-col-info"><strong>Project Name</strong><span>\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E17\u0E33\u0E43\u0E19\u0E27\u0E31\u0E19\u0E19\u0E31\u0E49\u0E19</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">4</div><div class="ts-col-info"><strong>Summary of Task</strong><span>\u0E2A\u0E23\u0E38\u0E1B\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E17\u0E33\u0E43\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E27\u0E31\u0E19</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">5</div><div class="ts-col-info"><strong>Location</strong><span>\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 (\u0E40\u0E0A\u0E48\u0E19 EXZY Office)</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">6</div><div class="ts-col-info"><strong>Total Hours</strong><span>\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E23\u0E27\u0E21\u0E43\u0E19\u0E27\u0E31\u0E19\u0E19\u0E31\u0E49\u0E19 (\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19 8)</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">7</div><div class="ts-col-info"><strong>In-Charge Name</strong><span>\u0E0A\u0E37\u0E48\u0E2D\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07 / Supervisor</span></div></div>
    </div>

    <h2 style="margin-top:48px;">\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E48\u0E07\u0E43\u0E2B\u0E49 HR \u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19 \u{1F4EE}</h2>
    <p>\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E48\u0E07 <strong>\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331 \u0E02\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</strong> \u2014 \u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29\u0E41\u0E25\u0E30\u0E19\u0E33\u0E44\u0E1B\u0E43\u0E2A\u0E48\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07 HR \u0E17\u0E35\u0E48\u0E0A\u0E31\u0E49\u0E19 4</p>
    <ul>
      <li><strong>\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19</strong> \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E0B\u0E47\u0E19\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 \u2014 \u0E2A\u0E48\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</li>
      <li><strong>\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 Intern Timesheet</strong> \u2014 \u0E2A\u0E48\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</li>
      <li><strong>\u0E2A\u0E33\u0E40\u0E19\u0E32 Book Bank \u2014 KBank</strong> \u2014 \u0E2A\u0E48\u0E07\u0E41\u0E04\u0E48\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E41\u0E23\u0E01</li>
    </ul>

    <div class="callout anim-up">
      <span class="ic">${I.doc}</span>
      <div>
        <h3>\u0E27\u0E34\u0E18\u0E35\u0E2A\u0E48\u0E07</h3>
        <p>\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E41\u0E25\u0E30\u0E19\u0E33\u0E44\u0E1B\u0E43\u0E2A\u0E48\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07 HR \u0E0A\u0E31\u0E49\u0E19 4 <strong>\u0E20\u0E32\u0E22\u0E43\u0E19\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331</strong> \u0E02\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19 (\u0E23\u0E31\u0E1A\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19)</p>
      </div>
    </div>

  `
    });
  };
  var renderFaqs = () => {
    const { hr_email: hrEmail = "hr@exzyteam.com" } = loadAdminData();
    return pageWrap({
      crumbs: [["Home", "#/home"], ["Resources", null], ["FAQs", null]],
      title: "Frequently Asked Questions",
      lead: "\u0E23\u0E27\u0E21\u0E04\u0E33\u0E16\u0E32\u0E21\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E04\u0E33\u0E15\u0E2D\u0E1A\u0E17\u0E35\u0E48 Intern \u0E21\u0E31\u0E01\u0E2A\u0E07\u0E2A\u0E31\u0E22\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48 EXZY",
      body: `
    <!-- Filter Tabs -->
    <div class="faq-filter" id="faq-filter">
      <button type="button" class="faq-filter-btn is-active" data-faq-cat="all">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
        \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14
      </button>
      <button type="button" class="faq-filter-btn" data-faq-cat="work">
        ${I.doc} \u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19
      </button>
      <button type="button" class="faq-filter-btn" data-faq-cat="leave">
        ${I.help} \u0E01\u0E32\u0E23\u0E25\u0E32
      </button>
      <button type="button" class="faq-filter-btn" data-faq-cat="life">
        ${I.people} \u0E0A\u0E35\u0E27\u0E34\u0E15\u0E43\u0E19\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28
      </button>
    </div>

    <div class="faq-group is-visible" data-faq-group="work">
      <div class="faq-section-hd">
        <span class="faq-section-ico">${I.doc}</span>
        <h2>\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19</h2>
      </div>
      <div class="accordion">
        ${acc("1. \u0E27\u0E31\u0E19\u0E41\u0E23\u0E01\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E2D\u0E30\u0E44\u0E23\u0E1A\u0E49\u0E32\u0E07?", "\u0E19\u0E33\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E17\u0E33\u0E07\u0E32\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27\u0E21\u0E32\u0E14\u0E49\u0E27\u0E22 \xB7 \u0E16\u0E36\u0E07\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E27\u0E25\u0E32\u0E40\u0E25\u0E47\u0E01\u0E19\u0E49\u0E2D\u0E22 \u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E1C\u0E48\u0E32\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E17\u0E35\u0E48 HR \u0E43\u0E2B\u0E49\u0E44\u0E27\u0E49")}
        ${acc("2. Wi-Fi \u0E43\u0E0A\u0E49\u0E23\u0E2B\u0E31\u0E2A\u0E2D\u0E30\u0E44\u0E23? \u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E22\u0E31\u0E07\u0E44\u0E07?", '\u0E14\u0E39\u0E27\u0E34\u0E18\u0E35\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D Wi-Fi \u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E49\u0E32 <a href="#/getting-started/wifi" data-link>Office Wi-Fi</a>')}
        ${acc("3. \u0E40\u0E23\u0E34\u0E48\u0E21\u0E07\u0E32\u0E19\u0E01\u0E35\u0E48\u0E42\u0E21\u0E07? \u0E1E\u0E31\u0E01\u0E01\u0E25\u0E32\u0E07\u0E27\u0E31\u0E19\u0E01\u0E35\u0E48\u0E42\u0E21\u0E07?", '\u0E40\u0E27\u0E25\u0E32\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 <strong>9:00 \u2013 18:00 \u0E19.</strong> \u0E2B\u0E23\u0E37\u0E2D <strong>10:00 \u2013 19:00 \u0E19.</strong> \u0E02\u0E36\u0E49\u0E19\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E31\u0E1A\u0E41\u0E1C\u0E19\u0E01\u0E17\u0E35\u0E48\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E2D\u0E22\u0E39\u0E48 \xB7 \u0E1E\u0E31\u0E01\u0E01\u0E25\u0E32\u0E07\u0E27\u0E31\u0E19 <strong>12:00 \u2013 13:00 \u0E19.</strong> \xB7 \u0E17\u0E33\u0E07\u0E32\u0E19\u0E27\u0E31\u0E19\u0E25\u0E30 8 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07 (\u0E44\u0E21\u0E48\u0E23\u0E27\u0E21\u0E1E\u0E31\u0E01\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07) \xB7 \u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E17\u0E35\u0E48 <a href="#/policy/internship" data-link>Internship Policy</a>')}
        ${acc("4. Timesheet \u0E2A\u0E48\u0E07\u0E22\u0E31\u0E07\u0E44\u0E07? \u0E2A\u0E48\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E2B\u0E23\u0E48?", 'HR \u0E08\u0E30\u0E41\u0E0A\u0E23\u0E4C\u0E44\u0E1F\u0E25\u0E4C Timesheet \u0E43\u0E2B\u0E49\u0E17\u0E32\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01 \xB7 \u0E01\u0E23\u0E2D\u0E01\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32-\u0E2D\u0E2D\u0E01\u0E41\u0E25\u0E30\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E17\u0E33\u0E43\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E27\u0E31\u0E19 \xB7 \u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E41\u0E25\u0E30\u0E19\u0E33\u0E44\u0E1B\u0E43\u0E2A\u0E48\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07 HR \u0E0A\u0E31\u0E49\u0E19 4 <strong>\u0E20\u0E32\u0E22\u0E43\u0E19\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331 \u0E02\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</strong> \u0E14\u0E39\u0E27\u0E34\u0E18\u0E35\u0E01\u0E23\u0E2D\u0E01\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E49\u0E32 <a href="#/tasks/timesheet" data-link>Timesheet</a>')}
        ${acc("5. \u0E40\u0E1A\u0E35\u0E49\u0E22\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E40\u0E17\u0E48\u0E32\u0E44\u0E2B\u0E23\u0E48? \u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E48\u0E07\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E2D\u0E30\u0E44\u0E23\u0E1A\u0E49\u0E32\u0E07?", "<strong>\u0E27\u0E31\u0E19\u0E25\u0E30 200 \u0E1A\u0E32\u0E17</strong> \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \xB7 <strong>\u0E27\u0E31\u0E19\u0E25\u0E30 300 \u0E1A\u0E32\u0E17</strong> \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E19\u0E2D\u0E01\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48<br/>\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E48\u0E07 (\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E48\u0E07 <strong>\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 30\u201331 \u0E02\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19</strong>):<br/>\xB7 \u0E2A\u0E33\u0E40\u0E19\u0E32\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E0B\u0E47\u0E19\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 \u2014 \u0E2A\u0E48\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19<br/>\xB7 \u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 Intern Timesheet \u2014 \u0E2A\u0E48\u0E07\u0E17\u0E38\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19<br/>\xB7 \u0E2A\u0E33\u0E40\u0E19\u0E32 Book Bank \u0E02\u0E2D\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E17\u0E35\u0E48\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E0B\u0E47\u0E19\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 \u2014 \u0E2A\u0E48\u0E07\u0E41\u0E04\u0E48\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E41\u0E23\u0E01<br/><strong>\u0E27\u0E34\u0E18\u0E35\u0E2A\u0E48\u0E07:</strong> \u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29 \u0E43\u0E2A\u0E48\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07 HR \u0E0A\u0E31\u0E49\u0E19 4 \u2014 \u0E44\u0E21\u0E48\u0E23\u0E31\u0E1A\u0E17\u0E32\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25")}
        ${acc("6. \u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E1A\u0E49\u0E32\u0E19 (WFH) \u0E44\u0E14\u0E49\u0E44\u0E2B\u0E21?", "<strong>\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49</strong>, Intern \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E02\u0E49\u0E32\u0E1D\u0E36\u0E01\u0E17\u0E35\u0E48\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 EXZY \u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E17\u0E35\u0E48\u0E17\u0E35\u0E21 assign \u0E44\u0E27\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 \xB7 \u0E2B\u0E32\u0E01\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19 \u0E15\u0E49\u0E2D\u0E07\u0E41\u0E08\u0E49\u0E07\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D HR \u0E01\u0E48\u0E2D\u0E19\u0E40\u0E2A\u0E21\u0E2D")}
        ${acc("7. \u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E2D\u0E30\u0E44\u0E23\u0E1A\u0E49\u0E32\u0E07\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19?", 'Intern \u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C <strong>3 \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17</strong>:<br/><strong>1. Project / Report</strong> \u2014 \u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E48\u0E07\u0E01\u0E31\u0E1A\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22 \u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E48\u0E07\u0E43\u0E2B\u0E49\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30 HR \u0E15\u0E23\u0E27\u0E08\u0E15\u0E32\u0E21\u0E01\u0E33\u0E2B\u0E19\u0E14<br/><strong>2. Team Project</strong> \u2014 \u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07 assign \u0E43\u0E2B\u0E49\u0E15\u0E32\u0E21\u0E2A\u0E32\u0E22\u0E07\u0E32\u0E19<br/><strong>3. HR Project</strong> \u2014 content \u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E48\u0E07\u0E43\u0E2B\u0E49\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30 HR \u0E15\u0E23\u0E27\u0E08 \u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E1A\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07 public \u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E01\u0E48\u0E2D\u0E19\u0E08\u0E1A\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 2 \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C<br/>\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E49\u0E32 <a href="#/tasks/hr-bd-project" data-link>HR Project</a>')}
        ${acc("8. \u0E44\u0E21\u0E48\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22 \u0E17\u0E33\u0E22\u0E31\u0E07\u0E44\u0E07?", "<strong>\u0E16\u0E32\u0E21\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E17\u0E31\u0E19\u0E17\u0E35</strong> \u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E27\u0E49\u0E04\u0E19\u0E40\u0E14\u0E35\u0E22\u0E27 \u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E17\u0E35\u0E48\u0E21\u0E35\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E14\u0E39\u0E41\u0E25\u0E40\u0E23\u0E32\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E08\u0E30\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E41\u0E25\u0E30\u0E43\u0E2B\u0E49\u0E04\u0E33\u0E41\u0E19\u0E30\u0E19\u0E33\u0E44\u0E14\u0E49\u0E40\u0E2A\u0E21\u0E2D")}
      </div>
    </div>

    <div class="faq-group is-visible" data-faq-group="leave">
      <div class="faq-section-hd">
        <span class="faq-section-ico">${I.help}</span>
        <h2>\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E32</h2>
      </div>
      <div class="accordion">
        ${acc("9. \u0E23\u0E39\u0E49\u0E2A\u0E36\u0E01\u0E44\u0E21\u0E48\u0E2A\u0E1A\u0E32\u0E22 \u0E21\u0E32\u0E17\u0E33\u0E07\u0E32\u0E19\u0E44\u0E21\u0E48\u0E44\u0E2B\u0E27 \u0E17\u0E33\u0E22\u0E31\u0E07\u0E44\u0E07?", '<strong>1.</strong> \u0E41\u0E08\u0E49\u0E07\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30\u0E17\u0E35\u0E21\u0E17\u0E31\u0E19\u0E17\u0E35<br/><strong>2.</strong> \u0E2A\u0E48\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E41\u0E08\u0E49\u0E07\u0E25\u0E32\u0E16\u0E36\u0E07 <a href="mailto:${hrEmail}">${hrEmail}</a> <strong>\u0E01\u0E48\u0E2D\u0E19 11:00 \u0E19.</strong> \u0E02\u0E2D\u0E07\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E25\u0E32<br/><strong>3.</strong> CC \u0E2D\u0E35\u0E40\u0E21\u0E25\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30\u0E17\u0E35\u0E21\u0E44\u0E1B\u0E14\u0E49\u0E27\u0E22<br/>\u0E23\u0E30\u0E1A\u0E38\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E08\u0E33\u0E19\u0E27\u0E19\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E2B\u0E22\u0E38\u0E14 \xB7 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E25\u0E32\u0E44\u0E21\u0E48\u0E19\u0E31\u0E1A\u0E40\u0E1B\u0E47\u0E19\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \xB7 \u0E14\u0E39\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21\u0E17\u0E35\u0E48 <a href="#/policy/leave" data-link>Leave &amp; Absence</a>')}
        ${acc("10. \u0E21\u0E35\u0E18\u0E38\u0E23\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E32 \u0E17\u0E33\u0E22\u0E31\u0E07\u0E44\u0E07?", '<strong>1.</strong> \u0E41\u0E08\u0E49\u0E07\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30\u0E17\u0E35\u0E21\u0E01\u0E48\u0E2D\u0E19<br/><strong>2.</strong> \u0E2A\u0E48\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E41\u0E08\u0E49\u0E07\u0E25\u0E32 <strong>\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32 1 \u0E27\u0E31\u0E19\u0E17\u0E33\u0E01\u0E32\u0E23</strong> \u0E44\u0E1B\u0E17\u0E35\u0E48 <a href="mailto:${hrEmail}">${hrEmail}</a><br/><strong>3.</strong> CC \u0E2D\u0E35\u0E40\u0E21\u0E25\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30\u0E17\u0E35\u0E21\u0E44\u0E1B\u0E14\u0E49\u0E27\u0E22<br/>\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E2B\u0E15\u0E38\u0E1C\u0E25 \xB7 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E25\u0E32\u0E44\u0E21\u0E48\u0E19\u0E31\u0E1A\u0E40\u0E1B\u0E47\u0E19\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19')}
        ${acc("11. \u0E25\u0E32\u0E40\u0E23\u0E35\u0E22\u0E19 / \u0E25\u0E32\u0E2A\u0E2D\u0E1A \u0E17\u0E33\u0E22\u0E31\u0E07\u0E44\u0E07?", "\u0E41\u0E08\u0E49\u0E07\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25 HR \u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E41\u0E19\u0E1A\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E1A\u0E2B\u0E23\u0E37\u0E2D\u0E15\u0E32\u0E23\u0E32\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E02\u0E2D\u0E07\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22 \xB7 \u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E08\u0E30\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E32\u0E22\u0E01\u0E23\u0E13\u0E35")}
      </div>
    </div>

    <div class="faq-group is-visible" data-faq-group="life">
      <div class="faq-section-hd">
        <span class="faq-section-ico">${I.people}</span>
        <h2>\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E43\u0E19\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28</h2>
      </div>
      <div class="accordion">
        ${acc("12. \u0E1E\u0E31\u0E01\u0E01\u0E25\u0E32\u0E07\u0E27\u0E31\u0E19\u0E17\u0E32\u0E19\u0E02\u0E49\u0E32\u0E27\u0E17\u0E35\u0E48\u0E44\u0E2B\u0E19\u0E14\u0E35?", "\u0E44\u0E1B\u0E17\u0E32\u0E19\u0E17\u0E35\u0E48\u0E23\u0E49\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E43\u0E01\u0E25\u0E49 \u0E46 \u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 \u0E2B\u0E23\u0E37\u0E2D\u0E08\u0E30\u0E2A\u0E31\u0E48\u0E07 delivery \u0E21\u0E32\u0E17\u0E32\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28\u0E01\u0E47\u0E44\u0E14\u0E49")}      </div>
    </div>

    <div class="callout" style="margin-top:32px;">
      <span class="ic">${I.mail}</span>
      <div>
        <h3>\u0E21\u0E35\u0E04\u0E33\u0E16\u0E32\u0E21\u0E2D\u0E37\u0E48\u0E19 \u0E46?</h3>
        <p>\u0E16\u0E32\u0E21\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E42\u0E14\u0E22\u0E15\u0E23\u0E07 \u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E48\u0E07\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E16\u0E36\u0E07 HR \u0E17\u0E35\u0E48 <a href="mailto:hr@exzyteam.com"><strong>hr@exzyteam.com</strong></a></p>
      </div>
    </div>

    <div class="page-cta-strip">
      <div>
        <h3>\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E30\u0E17\u0E33 HR Project?</h3>
        <p>\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E07\u0E32\u0E19\u0E01\u0E48\u0E2D\u0E19 \u0E41\u0E25\u0E49\u0E27\u0E04\u0E48\u0E2D\u0E22\u0E40\u0E1B\u0E34\u0E14 Showcase \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E08\u0E32\u0E01 intern \u0E23\u0E38\u0E48\u0E19\u0E01\u0E48\u0E2D\u0E19</p>
      </div>
      <div class="cta-btns">
        <a href="#/tasks/hr-bd-project" class="btn btn-ghost" data-link>\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E07\u0E32\u0E19 ${I.arrow}</a>
        <a href="#/showcase/experiences" class="btn btn-primary" data-link>Intern Showcase ${I.arrow}</a>
      </div>
    </div>

  `
    });
  };

  // js/pages/tasks.js
  var renderHrBdProject = () => pageWrap({
    crumbs: [["Home", "#/home"], ["Intern Tasks", null], ["HR Project", null]],
    title: "HR Project",
    lead: "\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48 HR assign \u0E43\u0E2B\u0E49 intern \u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A\u0E43\u0E19\u0E0A\u0E48\u0E27\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E14\u0E49\u0E15\u0E32\u0E21\u0E17\u0E35\u0E48\u0E16\u0E19\u0E31\u0E14 \u0E41\u0E25\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E1A\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07 public",
    toc: [
      ["about", "Assignment \u0E19\u0E35\u0E49\u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23?"],
      ["format", "\u0E17\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E2B\u0E19\u0E44\u0E14\u0E49\u0E1A\u0E49\u0E32\u0E07?"],
      ["timeline", "\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E48\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E2B\u0E23\u0E48?"],
      ["submit", "\u0E2A\u0E48\u0E07\u0E07\u0E32\u0E19\u0E22\u0E31\u0E07\u0E44\u0E07?"],
      ["examples", "\u0E14\u0E39\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"]
    ],
    body: `
    <h2 id="about">Assignment \u0E19\u0E35\u0E49\u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23?</h2>
    <p>HR Project \u0E40\u0E1B\u0E47\u0E19 Assignment \u0E17\u0E35\u0E48\u0E43\u0E2B\u0E49 intern \u0E2A\u0E23\u0E49\u0E32\u0E07 content \u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48 EXZY \u0E40\u0E0A\u0E48\u0E19 culture, employee activity, \u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19, project \u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22\u0E08\u0E32\u0E01\u0E17\u0E35\u0E21 \u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E32\u0E01\u0E40\u0E25\u0E48\u0E32\u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E04\u0E19\u0E40\u0E2B\u0E47\u0E19\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E01\u0E31\u0E1A EXZY \u0E21\u0E32\u0E01\u0E02\u0E36\u0E49\u0E19</p>
    <p>\u0E07\u0E32\u0E19\u0E19\u0E35\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48 intern \u0E15\u0E49\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E04\u0E39\u0E48\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E01\u0E23\u0E2D\u0E01 Timesheet \u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E08\u0E32\u0E01\u0E17\u0E35\u0E21\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07</p>

    <h2 id="format">\u0E17\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E2B\u0E19\u0E44\u0E14\u0E49\u0E1A\u0E49\u0E32\u0E07?</h2>
    <p>\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E16\u0E19\u0E31\u0E14\u0E44\u0E14\u0E49 \u0E44\u0E21\u0E48\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19 intern \u0E04\u0E19\u0E2D\u0E37\u0E48\u0E19 \u0E46 \u0E02\u0E2D\u0E41\u0E04\u0E48\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E41\u0E25\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E43\u0E2B\u0E49\u0E04\u0E19\u0E2D\u0E37\u0E48\u0E19\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E44\u0E14\u0E49\u0E08\u0E23\u0E34\u0E07</p>
    <div class="proj-cards">
      <div class="proj-card anim-up">
        <div class="proj-num">01</div>
        <h3>Video / Short Clip \u{1F3AC}</h3>
        <p>\u0E04\u0E25\u0E34\u0E1B\u0E23\u0E35\u0E27\u0E34\u0E27\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E04\u0E25\u0E34\u0E1B\u0E40\u0E25\u0E48\u0E32\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07<br>\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E07\u0E32\u0E19 \u0E2B\u0E23\u0E37\u0E2D short video \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A TikTok, Reels \u0E2B\u0E23\u0E37\u0E2D <br>YouTube Shorts</p>
      </div>
      <div class="proj-card anim-up" data-delay="80">
        <div class="proj-num">02</div>
        <h3>Article / Blog \u270D\uFE0F</h3>
        <p>\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E40\u0E25\u0E48\u0E32\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E07\u0E32\u0E19\u0E2B\u0E23\u0E37\u0E2D project \u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22\u0E08\u0E32\u0E01\u0E17\u0E35\u0E21 \u0E2B\u0E23\u0E37\u0E2D\u0E2D\u0E22\u0E32\u0E01\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E04\u0E19\u0E40\u0E2B\u0E47\u0E19\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E01\u0E31\u0E1A EXZY \u0E21\u0E32\u0E01\u0E02\u0E36\u0E49\u0E19</p>
      </div>
      <div class="proj-card anim-up" data-delay="160">
        <div class="proj-num">03</div>
        <h3>Graphic / Post \u{1F3A8}</h3>
        <p>Post \u0E17\u0E35\u0E48\u0E40\u0E25\u0E48\u0E32\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19<br>\u0E43\u0E2B\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E07\u0E48\u0E32\u0E22\u0E1A\u0E19 social <br>\u0E2B\u0E23\u0E37\u0E2D public website <br>\u0E17\u0E35\u0E48\u0E43\u0E2A\u0E48\u0E20\u0E32\u0E1E\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E32\u0E16\u0E36\u0E07<br>\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</p>
      </div>
    </div>

    <h2 id="timeline">\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E48\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E2B\u0E23\u0E48?</h2>
    <div class="callout callout-warn anim-up" style="margin-bottom:18px;">
      <span class="ic">${I.info}</span>
      <div>
        <h4>Deadline \u0E2A\u0E33\u0E04\u0E31\u0E0D: \u0E2A\u0E48\u0E07\u0E01\u0E48\u0E2D\u0E19\u0E08\u0E1A\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 2 \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C</h4>
        <p>\u0E2A\u0E48\u0E07 draft \u0E43\u0E2B\u0E49\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30 HR \u0E15\u0E23\u0E27\u0E08\u0E25\u0E48\u0E27\u0E07\u0E2B\u0E19\u0E49\u0E32 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E21\u0E35\u0E40\u0E27\u0E25\u0E32\u0E40\u0E0A\u0E47\u0E01\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32 \u0E41\u0E01\u0E49\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 \u0E41\u0E25\u0E30\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E1A\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07 public \u0E44\u0E14\u0E49\u0E17\u0E31\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E08\u0E1A\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</p>
      </div>
    </div>
    <p>\u0E27\u0E32\u0E07\u0E41\u0E1C\u0E19\u0E07\u0E32\u0E19\u0E19\u0E35\u0E49\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E40\u0E19\u0E34\u0E48\u0E19 \u0E46 \u0E40\u0E1E\u0E23\u0E32\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E08\u0E32\u0E01\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30 HR \u0E01\u0E48\u0E2D\u0E19\u0E19\u0E33\u0E44\u0E1B\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E08\u0E23\u0E34\u0E07</p>
    <ul>
      <li>\u0E27\u0E32\u0E07\u0E41\u0E1C\u0E19\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30 HR \u0E27\u0E48\u0E32\u0E2D\u0E22\u0E32\u0E01\u0E17\u0E33\u0E07\u0E32\u0E19\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E43\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E2B\u0E19</li>
      <li>\u0E17\u0E33 draft \u0E2B\u0E23\u0E37\u0E2D outline \u0E01\u0E48\u0E2D\u0E19 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E0A\u0E47\u0E01\u0E27\u0E48\u0E32\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E44\u0E21\u0E48\u0E2B\u0E25\u0E38\u0E14\u0E08\u0E32\u0E01\u0E42\u0E08\u0E17\u0E22\u0E4C</li>
      <li>\u0E2A\u0E48\u0E07\u0E43\u0E2B\u0E49\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30 HR \u0E15\u0E23\u0E27\u0E08\u0E07\u0E32\u0E19</li>
      <li>\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E1A\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07 public \u0E41\u0E25\u0E49\u0E27\u0E2A\u0E48\u0E07\u0E07\u0E32\u0E19\u0E01\u0E31\u0E1A HR \u0E42\u0E14\u0E22\u0E15\u0E23\u0E07</li>
    </ul>

    <h2 id="submit">\u0E2A\u0E48\u0E07\u0E07\u0E32\u0E19\u0E22\u0E31\u0E07\u0E44\u0E07? \u{1F4E4}</h2>
    <p>\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E41\u0E25\u0E30\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E08\u0E32\u0E01\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30 HR \u0E41\u0E25\u0E49\u0E27 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E19\u0E33\u0E04\u0E2D\u0E19\u0E40\u0E17\u0E19\u0E15\u0E4C\u0E44\u0E1B\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E1A\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E30 <br>\u0E40\u0E0A\u0E48\u0E19 social media \u0E15\u0E48\u0E32\u0E07 \u0E46, Medium, public blog \u0E2B\u0E23\u0E37\u0E2D website \u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E2B\u0E49\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E44\u0E14\u0E49 \u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E44\u0E1F\u0E25\u0E4C\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01</p>
    <h2 id="examples">\u0E14\u0E39\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E08\u0E32\u0E01 intern \u0E23\u0E38\u0E48\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48 \u{1F440}</h2>
    <p>Showcase \u0E04\u0E37\u0E2D\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E23\u0E27\u0E21\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07 intern \u0E23\u0E38\u0E48\u0E19\u0E01\u0E48\u0E2D\u0E19 \u0E43\u0E0A\u0E49\u0E14\u0E39\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E19\u0E27\u0E17\u0E32\u0E07\u0E44\u0E14\u0E49 \u0E44\u0E21\u0E48\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E04\u0E19\u0E2D\u0E37\u0E48\u0E19 \u0E46 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E34\u0E18\u0E35\u0E40\u0E25\u0E48\u0E32\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E01\u0E31\u0E1A\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E42\u0E08\u0E17\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22</p>
    <a href="#/showcase/experiences" class="btn btn-primary" data-link>\u0E14\u0E39 Showcase \u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 ${I.arrow}</a>
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
    "policy/code-of-conduct": () => renderCodeOfConduct(),
    "policy/internship": () => renderInternshipPolicy(),
    "policy/dress-code": () => renderDressCode(),
    "policy/leave": () => renderLeave(),
    "tasks/timesheet": () => renderTimesheet(),
    "tasks/hr-bd-project": () => renderHrBdProject(),
    "resources/timesheet": () => renderTimesheet(),
    "resources/faqs": () => renderFaqs(),
    "showcase/experiences": () => showcasePage(),
    "showcase/projects": () => showcasePage(),
    "showcase/blog": () => showcasePage()
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
    document.querySelectorAll("[data-home-hero-video]").forEach((video) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      video.muted = true;
      video.defaultMuted = true;
      video.loop = true;
      video.playsInline = true;
      const tryPlay = () => {
        if (video.paused) {
          const p = video.play?.();
          if (p?.catch) p.catch(() => {
          });
        }
      };
      if (video.readyState >= 2) {
        tryPlay();
      } else {
        video.addEventListener("canplay", tryPlay, { once: true });
        video.addEventListener("loadeddata", tryPlay, { once: true });
      }
      requestAnimationFrame(tryPlay);
      [80, 250, 600, 1400].forEach((d) => setTimeout(tryPlay, d));
      window.addEventListener("pageshow", tryPlay, { once: true });
      document.addEventListener("visibilitychange", () => {
        if (!document.hidden && video.paused) tryPlay();
      }, { once: true });
    });
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
    document.querySelectorAll('.ex-folder[tabindex="0"]').forEach(function(folder) {
      folder.setAttribute("role", "button");
      folder.addEventListener("keydown", function(e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          var firstLink = folder.querySelector("a[href]");
          if (firstLink) firstLink.click();
        }
      });
    });
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
            showToast(`\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E02\u0E2D\u0E07 ${ssid} \u0E41\u0E25\u0E49\u0E27`);
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
      wirePassToggle("v2-staff-pass-toggle", "v2-staff-pass-display", "");
      wirePassToggle("v2-guest-pass-toggle", "v2-guest-pass-display", "");
    })();
    document.querySelectorAll(".wf2-connect-btn").forEach(function(btn) {
      btn.addEventListener("click", function() {
        var which = btn.getAttribute("data-wifi");
        var d = loadAdminData();
        var ssid = which === "staff" ? d.wifi_staff_ssid : d.wifi_guest_ssid;
        var pass = which === "staff" ? d.wifi_staff_pass : d.wifi_guest_pass;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(pass || "").then(function() {
            showToast("\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E02\u0E2D\u0E07 " + ssid + " \u0E41\u0E25\u0E49\u0E27");
          });
        }
      });
    });
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
      trigger.addEventListener("click", () => {
        const isOpen = item.classList.toggle("open");
        trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
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
    (function() {
      var filter = document.getElementById("faq-filter");
      if (!filter) return;
      filter.addEventListener("click", function(e) {
        var btn = e.target.closest(".faq-filter-btn");
        if (!btn) return;
        var cat = btn.dataset.faqCat;
        document.querySelectorAll(".faq-filter-btn").forEach(function(b) {
          b.classList.remove("is-active");
        });
        btn.classList.add("is-active");
        document.querySelectorAll(".faq-group").forEach(function(g) {
          if (cat === "all" || g.dataset.faqGroup === cat) g.classList.add("is-visible");
          else g.classList.remove("is-visible");
        });
      });
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
    const promotedNavItem = navRight ? navRight.querySelector("[data-nav-mobile-promote]") : null;
    function setMobileMenu(open) {
      if (open) {
        navbar.classList.add("mobile-open");
        burger?.setAttribute("aria-expanded", "true");
        if (promotedNavItem && navLinks && promotedNavItem.parentElement !== navLinks) {
          promotedNavItem.classList.add("nav-promoted-mobile");
          navLinks.appendChild(promotedNavItem);
        }
      } else {
        navbar.classList.remove("mobile-open");
        burger?.setAttribute("aria-expanded", "false");
        if (promotedNavItem && navRight && promotedNavItem.parentElement !== navRight) {
          promotedNavItem.classList.remove("nav-promoted-mobile");
          navRight.appendChild(promotedNavItem);
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
      if (progressBar) progressBar.style.transform = "scaleX(" + pct / 100 + ")";
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
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll(tiltTargets).forEach((el) => {
      if (prefersReducedMotion) return;
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
        el.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
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
        el.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
        setTimeout(() => {
          el.style.transition = "";
        }, 550);
      });
    });
    document.querySelectorAll(".btn-primary, .btn-cta-hero, .btn-hero").forEach((btn) => {
      if (prefersReducedMotion) return;
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
        btn.style.transition = "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)";
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
    setupStoryMotion();
  }
  function setupStoryMotion() {
    const appEl = document.getElementById("app");
    if (!appEl) return;
    const storyPage = appEl.querySelector(".ex-home-hero, .ex-day-page");
    let rail = document.getElementById("ex-story-rail");
    if (!storyPage) {
      if (rail) rail.remove();
      window.removeEventListener("scroll", window.__storyMotion || (() => {
      }));
      return;
    }
    if (!rail) {
      rail = document.createElement("div");
      rail.id = "ex-story-rail";
      rail.setAttribute("aria-hidden", "true");
      rail.innerHTML = "<span></span><i></i>";
      document.body.appendChild(rail);
    }
    const motionTargets = Array.from(appEl.querySelectorAll([
      ".ex-home-hero",
      ".ex-binder-scene",
      ".ex-home-start",
      ".ex-home-contents",
      ".ex-home-quick",
      ".ex-day-hero",
      ".ex-day-tasks",
      ".ex-day-road",
      ".ex-day-more",
      ".ex-info-roadmap"
    ].join(",")));
    const update = () => {
      const docH = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const pct = Math.min(1, Math.max(0, (window.scrollY || window.pageYOffset) / docH));
      rail.style.setProperty("--story-progress", pct.toFixed(4));
      document.documentElement.style.setProperty("--ex-scroll", pct.toFixed(4));
      motionTargets.forEach((el) => {
        const r = el.getBoundingClientRect();
        const center = (r.top + r.height / 2) / window.innerHeight;
        const local = Math.min(1, Math.max(0, 1 - Math.abs(center - 0.5) * 1.65));
        el.style.setProperty("--section-focus", local.toFixed(3));
        el.classList.toggle("is-scroll-focus", local > 0.52);
      });
    };
    window.removeEventListener("scroll", window.__storyMotion || (() => {
    }));
    window.__storyMotion = update;
    window.addEventListener("scroll", update, { passive: true });
    update();
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
