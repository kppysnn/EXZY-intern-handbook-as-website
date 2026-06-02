/* ============================================================
   EXZY Intern Handbook — App Logic (Router + Hydration)
   Page templates live in js/pages/*.js
   ============================================================ */

import { I } from './js/icons.js';
import {
  loadAdminData, saveAdminData, isAdmin, setAdmin,
  getDirectoryAccessKey, isDirectoryUnlocked, setDirectoryUnlocked,
  showToast, ADMIN_PASSWORD,
} from './js/auth.js';
import { showcasePage } from './js/showcase.js';
import { renderHome } from './js/pages/home.js';
import { renderFirstDay } from './js/pages/first-day.js';
import { renderOrientation } from './js/pages/orientation.js';
import { renderWifi } from './js/pages/wifi.js';
import { renderMeetingRooms } from './js/pages/meeting-rooms.js';
import { renderOrgChart } from './js/pages/org-chart.js';
import { renderDirectory } from './js/pages/directory.js';
import { renderCodeOfConduct, renderInternshipPolicy, renderDressCode, renderLeave } from './js/pages/policy.js';
import { renderTimesheet, renderFaqs } from './js/pages/resources.js';

// ===== Page Routes =====
const Pages = {
  home:                            () => renderHome(),
  "first-day":                     () => renderFirstDay(),
  "getting-started/orientation":   () => renderOrientation(),
  "getting-started/wifi":          () => renderWifi(),
  "getting-started/meeting-rooms": () => renderMeetingRooms(),
  "employee/org-chart":            () => renderOrgChart(),
  "employee/directory":            () => renderDirectory(),
  "policy/code-of-conduct":        () => renderCodeOfConduct(),
  "policy/internship":             () => renderInternshipPolicy(),
  "policy/dress-code":             () => renderDressCode(),
  "policy/leave":                  () => renderLeave(),
  "resources/timesheet":           () => renderTimesheet(),
  "resources/faqs":                () => renderFaqs(),
  "showcase/experiences":          () => showcasePage("experiences"),
  "showcase/projects":             () => showcasePage("experiences"),
  "showcase/blog":                 () => showcasePage("blog"),
};

// ===== ROUTER =====
const app = document.getElementById("app");

function resolve(hash) {
  let route = hash.replace(/^#\/?/, "").trim();
  if (!route) route = "home";
  return route;
}

function render() {
  const hash = location.hash || "#/home";
  const route = resolve(hash);
  const renderFn = Pages[route] || Pages.home;

  app.classList.add('page-exiting');
  setTimeout(function() {
    app.innerHTML = renderFn();
    app.classList.remove('page-exiting');
    app.classList.add('page-entering');
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    hydratePage();
    updateActiveNav(route);
    setTimeout(function() { app.classList.remove('page-entering'); }, 700);
  }, 110);
}

function hydratePage() {
  // ----- Apply admin data to placeholders -----
  const data = loadAdminData();
  document.querySelectorAll("[data-text]").forEach(el => {
    const k = el.getAttribute("data-text");
    if (el.getAttribute("data-masked") === "true") return;
    if (data[k] !== undefined && data[k] !== "") el.textContent = data[k];
  });
  document.querySelectorAll("[data-link-key]").forEach(el => {
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

  // ----- Wi-Fi tabs -----
  const wifiTabs = document.querySelectorAll(".wifi-tab[data-wifi-tab]");
  if (wifiTabs.length) {
    wifiTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-wifi-tab");
        document.querySelectorAll(".wifi-tab").forEach(t => t.classList.toggle("is-active", t === tab));
        document.querySelectorAll(".wifi-panel").forEach(p => {
          p.hidden = p.getAttribute("data-wifi-panel") !== target;
        });
      });
    });
  }

  // ----- Wi-Fi QR codes -----
  document.querySelectorAll(".wifi-qr[data-qr], .wn-qr[data-qr], .wf2-qr[data-qr]").forEach(box => {
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
      box.innerHTML = '<p style="color:var(--muted); font-size:13px; padding:20px;">QR ไม่พร้อมใช้งาน</p>';
    }
  });

  // ----- fdb/fdc scroll-reveal -----
  (function(){
    var revEls = document.querySelectorAll('.fdb-reveal');
    if (!revEls.length) return;
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('fdb-vis'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.07 });
    revEls.forEach(function(el){ obs.observe(el); });
  })();

  // ----- fda tab panels -----
  var fdaTabs = document.querySelectorAll('.fda-tab');
  if (fdaTabs.length) {
    window.fdaTab = function(idx){
      document.querySelectorAll('.fda-tab').forEach(function(t,i){ t.classList.toggle('active', i===idx); });
      document.querySelectorAll('.fda-panel').forEach(function(p,i){ p.classList.toggle('active', i===idx); });
    };
    fdaTabs.forEach(function(tab,idx){ tab.addEventListener('click', function(){ window.fdaTab(idx); }); });
  }

    // ----- Wi-Fi copy buttons -----
  document.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", () => {
      const k = btn.getAttribute("data-copy");
      const val = loadAdminData()[k];
      if (!val) return;
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(val).then(() => {
          btn.classList.add("is-copied");
          showToast("คัดลอกรหัสแล้ว");
          setTimeout(() => btn.classList.remove("is-copied"), 1500);
        });
      }
    });
  });

  // ----- Wi-Fi password show/hide toggle -----
  document.querySelectorAll("[data-toggle-pass]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-toggle-pass");
      const span = document.querySelector(`.wifi-pass-val[data-text="${key}"]`);
      if (!span) return;
      const masked = span.getAttribute("data-masked") === "true";
      if (masked) {
        const realVal = loadAdminData()[key] || span.textContent;
        span.textContent = realVal;
        span.setAttribute("data-masked", "false");
        btn.innerHTML = '<span class="pass-toggle-eye"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg></span>ซ่อน';
      } else {
        span.textContent = "••••••••";
        span.setAttribute("data-masked", "true");
        btn.innerHTML = '<span class="pass-toggle-eye"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></span>แสดง';
      }
    });
  });

  // ----- Wi-Fi "Connect" buttons -----
  document.querySelectorAll(".wifi-connect").forEach(btn => {
    btn.addEventListener("click", () => {
      const which = btn.getAttribute("data-wifi");
      const d = loadAdminData();
      const ssid = which === "staff" ? d.wifi_staff_ssid : d.wifi_guest_ssid;
      const pass = which === "staff" ? d.wifi_staff_pass : d.wifi_guest_pass;
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(pass).then(() => {
          showToast(`คัดลอกรหัสของ ${ssid} แล้ว · เปิดการตั้งค่า Wi-Fi`);
        });
      }
    });
  });

  // ----- Wi-Fi V3 tab toggle (data-wifi-tab-v2) -----
  (function() {
    var tabs = document.querySelectorAll('[data-wifi-tab-v2]');
    if (!tabs.length) return;
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        var target = tab.getAttribute('data-wifi-tab-v2');
        tabs.forEach(function(t) { t.classList.remove('is-active', 'wn-sel-active'); });
        tab.classList.add('is-active', 'wn-sel-active');
        document.querySelectorAll('[data-wifi-panel-v2]').forEach(function(p) {
          p.hidden = p.getAttribute('data-wifi-panel-v2') !== target;
        });
      });
    });
  })();

  // ----- Wi-Fi V3 password show/hide -----
  (function() {
    function wirePassToggle(btnId, displayId, defaultPass) {
      var btn = document.getElementById(btnId);
      var display = document.getElementById(displayId);
      if (!btn || !display) return;
      btn.addEventListener('click', function() {
        var d = loadAdminData();
        var raw = (btnId.includes('staff') ? d.wifi_staff_pass : d.wifi_guest_pass) || defaultPass;
        if (display.textContent.includes('•')) {
          display.textContent = raw;
        } else {
          display.textContent = '••••••••';
        }
      });
    }
    wirePassToggle('v2-staff-pass-toggle', 'v2-staff-pass-display', 'maetyzxe');
    wirePassToggle('v2-guest-pass-toggle', 'v2-guest-pass-display', 'imaguest');
  })();

  // ----- Wi-Fi V3 connect buttons -----
  document.querySelectorAll('.wf2-connect-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var which = btn.getAttribute('data-wifi');
      var d = loadAdminData();
      var ssid = which === 'staff' ? d.wifi_staff_ssid : d.wifi_guest_ssid;
      var pass = which === 'staff' ? d.wifi_staff_pass : d.wifi_guest_pass;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(pass || '').then(function() {
          showToast('คัดลอกรหัสของ ' + ssid + ' แล้ว · เปิดการตั้งค่า Wi-Fi');
        });
      }
    });
  });

  // ----- Employee Directory gate / lock -----
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
        showToast("ปลดล็อก Employee Contact แล้ว");
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
      showToast("ล็อก Employee Contact แล้ว");
      render();
    });
  }

  // ----- Employee Directory search / filter -----
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
      dirRows.forEach(tr => {
        const matchQ = !q || tr.dataset.search.includes(q);
        const matchT = !team || tr.dataset.team === team;
        const show = matchQ && matchT;
        tr.style.display = show ? "" : "none";
        if (show) n++;
      });
      dirCount.textContent = `${n} คน`;
      dirEmpty.hidden = n > 0;
    };
    dirQ.addEventListener("input", filterDir);
    dirTeam.addEventListener("change", filterDir);
  }

  // ----- Scroll-to buttons (data-scroll-to) -----
  app.querySelectorAll("[data-scroll-to]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-scroll-to");
      const target = document.getElementById(id);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  // ----- Accordion handlers -----
  app.querySelectorAll(".acc-item").forEach(item => {
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

  // ----- TOC scrollspy -----
  const tocLinks = app.querySelectorAll(".toc a[data-anchor]");
  if (tocLinks.length) {
    tocLinks.forEach(link => {
      link.addEventListener("click", e => {
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
      tocLinks.forEach(l => l.classList.remove("is-active"));
      if (active) {
        const link = app.querySelector(`.toc a[href="#${active.id}"]`);
        if (link) link.classList.add("is-active");
      }
    };
    window.removeEventListener("scroll", window.__tocScroll || (() => { }));
    window.__tocScroll = onScroll;
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ----- Scroll-triggered animation observer -----
  (function () {
    var els = app.querySelectorAll('.fade-up, .anim-up, .anim-down, .anim-left, .anim-right, .anim-scale, .anim-pop, .anim-blur');
    if (!els.length) return;
    var timers = new WeakMap();
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        var el = e.target;
        if (timers.has(el)) { clearTimeout(timers.get(el)); timers.delete(el); }
        if (e.isIntersecting) {
          var delay = parseInt(el.getAttribute('data-delay') || '0', 10);
          var tid = setTimeout(function() { el.classList.add('is-visible'); }, delay);
          timers.set(el, tid);
        } else {
          el.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
    els.forEach(function(el) {
      var parent = el.parentElement;
      if (parent && !el.hasAttribute('data-delay')) {
        var siblings = Array.from(parent.querySelectorAll(':scope > .fade-up, :scope > .anim-up, :scope > .anim-scale, :scope > .anim-pop'));
        var idx = siblings.indexOf(el);
        if (idx > 0) el.setAttribute('data-delay', String(idx * 90));
      }
      io.observe(el);
    });
  })();

  // ----- Tab Timeline (Day 1) -----
  (function() {
    var nav = app.querySelector('#tl-nav');
    var panels = app.querySelector('#tl-panels');
    if (!nav || !panels) return;

    var tabs = Array.prototype.slice.call(nav.querySelectorAll('.tl-tab'));
    var panes = Array.prototype.slice.call(panels.querySelectorAll('.tl-panel'));
    var fill = app.querySelector('#tl-track-fill');
    var active = 0;

    function activate(idx) {
      idx = Math.max(0, Math.min(tabs.length - 1, idx));
      active = idx;
      tabs.forEach(function(t, i) { t.classList.toggle('is-active', i === idx); });
      panes.forEach(function(p, i) { p.classList.toggle('is-active', i === idx); });
      if (fill && tabs.length > 1) {
        var pct = (idx / (tabs.length - 1)) * 100;
        fill.style.width = pct + '%';
      }
    }

    tabs.forEach(function(tab, i) {
      tab.addEventListener('click', function() { activate(i); });
    });

    activate(0);
  })();

  // ----- Counter animations -----
  app.querySelectorAll('[data-count-to]').forEach(function(el) {
    var target = parseFloat(el.getAttribute('data-count-to'));
    var prefix = el.getAttribute('data-count-prefix') || '';
    var suffix = el.getAttribute('data-count-suffix') || '';
    var started = false;
    var io2 = new IntersectionObserver(function(entries) {
      if (!entries[0].isIntersecting || started) return;
      started = true; io2.disconnect();
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
  document.querySelectorAll(".nav-links a, .nav-right a").forEach(a => {
    const href = a.getAttribute("href") || "";
    const r = href.replace(/^#\/?/, "");
    a.classList.toggle("is-active", r === route);
  });
  document.querySelectorAll(".nav-group").forEach(g => {
    const hasActive = g.querySelector(".nav-menu a.is-active");
    const toggle = g.querySelector(".nav-toggle");
    if (toggle) toggle.classList.toggle("is-active", !!hasActive);
  });
}

// ===== Nav dropdown + intercepts =====
function initNav() {
  const navbar = document.getElementById("navbar");

  document.addEventListener("click", e => {
    const a = e.target.closest("a[data-link]");
    if (a) {
      const href = a.getAttribute("href");
      if (href && href.startsWith("#")) {
        document.querySelectorAll(".nav-group.open").forEach(g => g.classList.remove("open"));
        if (navbar.classList.contains("mobile-open")) {
          setTimeout(() => setMobileMenu(false), 50);
        }
      }
    }
  });

  document.querySelectorAll(".nav-group").forEach(group => {
    const toggle = group.querySelector(".nav-toggle");
    const isMobile = () => window.matchMedia("(max-width: 760px)").matches;

    group.addEventListener("mouseenter", () => {
      if (isMobile()) return;
      document.querySelectorAll(".nav-group.open").forEach(g => { if (g !== group) g.classList.remove("open"); });
      group.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
    });
    group.addEventListener("mouseleave", () => {
      if (isMobile()) return;
      group.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
    toggle.addEventListener("click", e => {
      e.stopPropagation();
      const wasOpen = group.classList.contains("open");
      document.querySelectorAll(".nav-group.open").forEach(g => g.classList.remove("open"));
      if (!wasOpen) {
        group.classList.add("open");
        toggle.setAttribute("aria-expanded", "true");
      } else {
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".nav-group")) {
      document.querySelectorAll(".nav-group.open").forEach(g => g.classList.remove("open"));
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
      document.querySelectorAll(".nav-group.open").forEach(g => g.classList.remove("open"));
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

// ===== Admin Mode UI =====
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

  document.addEventListener("keydown", e => {
    if (e.ctrlKey && e.altKey && e.shiftKey && (e.key === "H" || e.key === "h")) {
      e.preventDefault();
      if (isAdmin()) openAdminModal();
      else showAdminLogin();
    }
  });

  const logo = document.querySelector(".nav-logo");
  let clicks = 0, clickTimer = null;
  if (logo) {
    logo.addEventListener("click", e => {
      clicks++;
      if (clickTimer) clearTimeout(clickTimer);
      if (clicks >= 8) {
        e.preventDefault();
        clicks = 0;
        if (isAdmin()) openAdminModal();
        else showAdminLogin();
      } else {
        clickTimer = setTimeout(() => { clicks = 0; }, 3000);
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
    modalBody.querySelectorAll(".admin-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        modalBody.querySelectorAll(".admin-tab").forEach(t => t.classList.remove("is-active"));
        modalBody.querySelectorAll(".admin-section").forEach(s => s.style.display = "none");
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
        <button class="admin-tab" data-tab="links">เอกสาร &amp; ลิงก์</button>
        <button class="admin-tab" data-tab="showcase">Showcase</button>
        <button class="admin-tab" data-tab="hr">ข้อมูล HR</button>
      </div>

      <div class="admin-section" data-tab="wifi">
        <div class="admin-section-title">Wi-Fi สำหรับพนักงาน / Intern</div>
        <div class="admin-field">
          <label>SSID (ชื่อเครือข่าย)</label>
          <input class="admin-input mono" data-field="wifi_staff_ssid" value="${escAttr(d.wifi_staff_ssid)}" />
        </div>
        <div class="admin-field">
          <label>รหัสผ่าน</label>
          <input class="admin-input mono" data-field="wifi_staff_pass" value="${escAttr(d.wifi_staff_pass)}" />
        </div>
        <div class="admin-section-title" style="margin-top:24px;">Wi-Fi สำหรับแขก (Guest)</div>
        <div class="admin-field">
          <label>SSID (ชื่อเครือข่าย)</label>
          <input class="admin-input mono" data-field="wifi_guest_ssid" value="${escAttr(d.wifi_guest_ssid)}" />
        </div>
        <div class="admin-field">
          <label>รหัสผ่าน</label>
          <input class="admin-input mono" data-field="wifi_guest_pass" value="${escAttr(d.wifi_guest_pass)}" />
        </div>
      </div>

      <div class="admin-section" data-tab="links" style="display:none;">
        <div class="admin-section-title">เอกสาร Orientation</div>
        <div class="admin-field">
          <label>Google Slides embed URL (แสดงแบบ iframe)</label>
          <input class="admin-input mono" data-field="orientation_slides_url" value="${escAttr(d.orientation_slides_url)}" placeholder="https://docs.google.com/presentation/d/.../embed?..." />
          <p class="hint">Google Slides → File → Share → Publish to web → Embed → คัดลอก src ของ iframe มาวางที่นี่</p>
        </div>
        <div class="admin-field">
          <label>ลิงก์ PDF ดาวน์โหลด (Google Drive หรือ URL ตรง)</label>
          <input class="admin-input mono" data-field="orientation_pdf_url" value="${escAttr(d.orientation_pdf_url)}" placeholder="https://drive.google.com/uc?export=download&id=..." />
          <p class="hint">หากใช้ Google Drive: เปิดไฟล์ → Share → Copy link แล้วเปลี่ยน /view เป็น /export?format=pdf เพื่อให้ดาวน์โหลดได้ตรง</p>
        </div>
        <div class="admin-section-title" style="margin-top:24px;">Employee Directory</div>
        <div class="admin-field">
          <label>Google Sheet embed URL</label>
          <input class="admin-input mono" data-field="directory_sheet_url" value="${escAttr(d.directory_sheet_url)}" placeholder="https://docs.google.com/spreadsheets/d/.../pubhtml?widget=true&headers=false" />
          <p class="hint">Google Sheet → File → Share → Publish to web → Embed → คัดลอก src ของ iframe</p>
        </div>
        <div class="admin-field">
          <label>รหัสเข้า Employee Contact</label>
          <input class="admin-input mono" data-field="directory_access_key" value="${escAttr(d.directory_access_key || ADMIN_PASSWORD)}" placeholder="ตั้งรหัสสำหรับหน้า Employee Contact" />
          <p class="hint">ใช้สำหรับปลดล็อกหน้า Employee Contact เพื่อดูข้อมูลติดต่อพนักงาน</p>
        </div>
      </div>

      <div class="admin-section" data-tab="showcase" style="display:none;">
        <input type="hidden" id="sc-json" data-field="showcase_items" value="${escAttr(d.showcase_items || '[]')}" />

        <div class="admin-section-title" style="margin-bottom:12px;">จัดการ Intern Showcase</div>
        <div class="admin-sc-tabs" id="sc-tabs">
          <button class="admin-sc-tab is-active" data-sc="experiences">Experiences</button>
          <button class="admin-sc-tab" data-sc="projects">Projects</button>
          <button class="admin-sc-tab" data-sc="blog">Blog</button>
        </div>

        <div id="sc-list" style="margin:16px 0 0;"></div>

        <div style="border-top:1px solid var(--line-soft); margin-top:20px; padding-top:18px;">
          <div class="admin-section-title" style="margin-bottom:12px;">เพิ่มรายการใหม่</div>
          <div class="admin-field">
            <label>หมวดหมู่</label>
            <select class="admin-input" id="sc-cat">
              <option value="experiences">Experiences (คลิป / รีวิว)</option>
              <option value="projects">Projects (ผลงาน)</option>
              <option value="blog">Blog (บทความ)</option>
            </select>
          </div>
          <div class="admin-field">
            <label>ชื่อเรื่อง / Title</label>
            <input class="admin-input" id="sc-title" placeholder="เช่น หนึ่งวันในชีวิต intern Designer" />
          </div>
          <div class="admin-field" style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
            <div>
              <label>Badge / Platform</label>
              <input class="admin-input" id="sc-badge" placeholder="TikTok, Medium, Project…" />
            </div>
            <div>
              <label>Meta (ความยาว / ประเภท)</label>
              <input class="admin-input" id="sc-meta" placeholder="2 นาที, 8 min read, UI/UX…" />
            </div>
          </div>
          <div class="admin-field">
            <label>ลิงก์ URL (ถ้ามี)</label>
            <input class="admin-input mono" id="sc-url" placeholder="https://..." />
          </div>
          <button class="btn btn-primary" id="sc-add" style="width:100%; margin-top:4px; justify-content:center;">
            ${I.plus} เพิ่มรายการ
          </button>
        </div>
      </div>

      <div class="admin-section" data-tab="hr" style="display:none;">
        <div class="admin-section-title">ข้อมูลติดต่อ HR</div>
        <div class="admin-field">
          <label>ชื่อ HR</label>
          <input class="admin-input" data-field="hr_name" value="${escAttr(d.hr_name)}" />
        </div>
        <div class="admin-field">
          <label>อีเมล HR</label>
          <input class="admin-input mono" data-field="hr_email" value="${escAttr(d.hr_email)}" />
        </div>
        <div class="admin-field">
          <label>เบอร์โทร HR</label>
          <input class="admin-input mono" data-field="hr_phone" value="${escAttr(d.hr_phone)}" />
        </div>
      </div>
    `;
  }

  function initShowcaseAdmin() {
    const jsonField = modalBody.querySelector("#sc-json");
    if (!jsonField) return;

    let scItems = [];
    try { scItems = JSON.parse(jsonField.value || "[]"); } catch (e) {}
    let activeScTab = "experiences";

    const SC_LABEL = { experiences: "Experiences", projects: "Projects", blog: "Blog" };

    function syncJson() {
      jsonField.value = JSON.stringify(scItems);
    }

    function renderList() {
      const listEl = modalBody.querySelector("#sc-list");
      if (!listEl) return;
      const filtered = scItems.filter(i => i.category === activeScTab);
      if (filtered.length === 0) {
        listEl.innerHTML = `<p style="font-size:13px; color:var(--muted); padding:10px 0; margin:0;">ยังไม่มีรายการใน ${SC_LABEL[activeScTab]}</p>`;
        return;
      }
      listEl.innerHTML = filtered.map((item) => {
        const idx = scItems.indexOf(item);
        const crossSvg = I.check.replace('M20 6L9 17l-5-5', 'M18 6L6 18M6 6l12 12');
        return `<div class="sc-admin-item" data-idx="${idx}">
          <div class="sc-admin-info">
            <span class="badge" style="font-size:11px; padding:2px 9px; border-radius:6px;">${escAttr(item.badge)}</span>
            <span class="sc-admin-title">${escAttr(item.title)}</span>
            <span class="sc-admin-meta">${escAttr(item.meta)}</span>
            ${item.url ? `<a href="${escAttr(item.url)}" target="_blank" class="sc-admin-link">${I.external}</a>` : ''}
          </div>
          <button class="sc-del-btn" data-idx="${idx}" title="ลบ" aria-label="ลบ">${crossSvg}</button>
        </div>`;
      }).join("");

      listEl.querySelectorAll(".sc-del-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const idx = parseInt(btn.dataset.idx, 10);
          scItems.splice(idx, 1);
          syncJson();
          renderList();
        });
      });
    }

    modalBody.querySelectorAll(".admin-sc-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        modalBody.querySelectorAll(".admin-sc-tab").forEach(t => t.classList.remove("is-active"));
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
        const metaEl  = modalBody.querySelector("#sc-meta");
        const urlEl   = modalBody.querySelector("#sc-url");
        const catEl   = modalBody.querySelector("#sc-cat");
        const title = (titleEl ? titleEl.value : "").trim();
        if (!title) { titleEl && titleEl.focus(); return; }
        const newItem = {
          id: Date.now().toString(36),
          category: catEl ? catEl.value : "experiences",
          badge: (badgeEl ? badgeEl.value : "").trim(),
          meta:  (metaEl  ? metaEl.value  : "").trim(),
          title,
          url:   (urlEl   ? urlEl.value   : "").trim(),
        };
        scItems.push(newItem);
        syncJson();
        activeScTab = newItem.category;
        modalBody.querySelectorAll(".admin-sc-tab").forEach(t => {
          t.classList.toggle("is-active", t.dataset.sc === activeScTab);
        });
        if (titleEl) titleEl.value = "";
        if (badgeEl) badgeEl.value = "";
        if (metaEl)  metaEl.value  = "";
        if (urlEl)   urlEl.value   = "";
        renderList();
      });
    }

    renderList();
  }

  loginSubmit.addEventListener("click", tryLogin);
  pwInput.addEventListener("keydown", e => { if (e.key === "Enter") tryLogin(); });
  function tryLogin() {
    const val = pwInput.value.trim();
    if (val === ADMIN_PASSWORD) {
      setAdmin(true);
      adminBar.hidden = false;
      hideAdminLogin();
      showToast("เข้าสู่ระบบ Admin แล้ว");
      openAdminModal();
    } else {
      pwErr.hidden = false;
      pwInput.value = "";
      pwInput.focus();
    }
  }

  saveBtn.addEventListener("click", () => {
    const data = loadAdminData();
    modalBody.querySelectorAll("[data-field]").forEach(input => {
      const k = input.getAttribute("data-field");
      data[k] = input.value;
    });
    if (saveAdminData(data)) {
      showToast("บันทึกแล้ว");
      closeAdminModal();
      render();
    } else {
      showToast("เกิดข้อผิดพลาดในการบันทึก");
    }
  });

  openBtn.addEventListener("click", openAdminModal);
  exitBtn.addEventListener("click", () => {
    setAdmin(false);
    adminBar.hidden = true;
    showToast("ออกจาก Admin Mode แล้ว");
  });

  document.querySelectorAll("[data-close]").forEach(el => {
    el.addEventListener("click", () => {
      const target = el.getAttribute("data-close");
      if (target === "login") hideAdminLogin();
      else closeAdminModal();
    });
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if (!modal.hidden) closeAdminModal();
      if (!loginModal.hidden) hideAdminLogin();
    }
  });
}

// ===== Enhancements (animations & micro-interactions) =====
function initEnhancements() {
  if (!document.getElementById('scroll-progress')) {
    const bar = document.createElement('div');
    bar.id = 'scroll-progress';
    document.body.insertBefore(bar, document.body.firstChild);
  }
  const progressBar = document.getElementById('scroll-progress');
  const onScrollProgress = function() {
    const scroll = window.scrollY || window.pageYOffset;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? Math.min(100, (scroll / docH) * 100) : 0;
    if (progressBar) progressBar.style.width = pct + '%';
  };
  window.removeEventListener('scroll', window.__scrollProgress || (()=>{}));
  window.__scrollProgress = onScrollProgress;
  window.addEventListener('scroll', onScrollProgress, { passive: true });
  onScrollProgress();

  if (!document.getElementById('cursor-glow')) {
    const glow = document.createElement('div');
    glow.id = 'cursor-glow';
    document.body.appendChild(glow);
  }
  const glowEl = document.getElementById('cursor-glow');
  const onMouseMove = function(e) {
    if (glowEl) {
      glowEl.style.left = e.clientX + 'px';
      glowEl.style.top = e.clientY + 'px';
    }
  };
  document.removeEventListener('mousemove', document.__cursorGlow || (()=>{}));
  document.__cursorGlow = onMouseMove;
  document.addEventListener('mousemove', onMouseMove, { passive: true });

  const hero = document.querySelector('.hero');
  if (hero && !hero.querySelector('.hero-shape')) {
    ['a','b','c'].forEach(s => {
      const d = document.createElement('div');
      d.className = 'hero-shape shape-' + s;
      hero.appendChild(d);
    });
  }

  const shapes = Array.from(document.querySelectorAll('.hero .hero-shape'));
  const onParallax = () => {
    const sc = window.scrollY || window.pageYOffset;
    shapes.forEach((el, i) => {
      const depth = (i + 1) * 0.03;
      el.style.transform = `translateY(${Math.round(sc * depth)}px)`;
    });
  };
  window.removeEventListener('scroll', window.__heroParallax || (()=>{}));
  window.__heroParallax = onParallax;
  window.addEventListener('scroll', onParallax, { passive: true });
  onParallax();

  document.querySelectorAll('.page-hero-band').forEach(band => {
    if (band.querySelector('.phb-orb')) return;
    [1, 2].forEach(n => {
      const orb = document.createElement('div');
      orb.className = `phb-orb phb-orb-${n}`;
      band.appendChild(orb);
    });
  });

  const tiltTargets = [
    '.card', '.reference-card', '.journey-card', '.cv-card',
    '.hb-card', '.team-card', '.wifi-card', '.mr-room-card',
    '.mr-feat-card', '.ptask-card', '.howto-step', '.rule-card',
    '.show-real-card', '.hbe-card', '.proj-card'
  ].join(',');
  document.querySelectorAll(tiltTargets).forEach(el => {
    if (el.__tiltAttached) return;
    el.__tiltAttached = true;
    el.style.transformOrigin = 'center';
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;
      el.style.transform = `perspective(900px) rotateX(${dy * -5}deg) rotateY(${dx * 7}deg) translateZ(6px)`;
      el.style.transition = 'transform 0.1s ease';
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
      el.style.transition = 'transform 0.6s cubic-bezier(0.34,1.2,0.64,1)';
      setTimeout(() => { el.style.transition = ''; }, 650);
    });
  });

  document.querySelectorAll('.hb-link').forEach(el => {
    if (el.__tiltAttached) return;
    el.__tiltAttached = true;
    el.style.transformOrigin = 'center';
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;
      el.style.transform = `perspective(800px) rotateX(${dy * -6}deg) rotateY(${dx * 10}deg) translateZ(8px)`;
      el.style.transition = 'transform 0.1s ease';
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
      el.style.transition = 'transform 0.5s ease';
      setTimeout(() => { el.style.transition = ''; }, 550);
    });
  });

  document.querySelectorAll('.btn-primary, .btn-cta-hero, .btn-hero').forEach(btn => {
    if (btn.__magneticAttached) return;
    btn.__magneticAttached = true;
    btn.addEventListener('pointermove', e => {
      const r = btn.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) * 0.18;
      const dy = (e.clientY - cy) * 0.18;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
      btn.style.transition = 'transform 0.15s ease';
    });
    btn.addEventListener('pointerleave', () => {
      btn.style.transform = '';
      btn.style.transition = 'transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)';
      setTimeout(() => { btn.style.transition = ''; }, 600);
    });
  });

  document.querySelectorAll('.btn-primary, .btn-hero').forEach(btn => {
    if (btn.__rippleAttached) return;
    btn.__rippleAttached = true;
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.addEventListener('click', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const ripple = document.createElement('span');
      ripple.className = 'btn-ripple btn-ripple-wow';
      ripple.style.cssText = `left:${x}px;top:${y}px;width:${r.width*2}px;height:${r.width*2}px;margin-left:-${r.width}px;margin-top:-${r.width}px`;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 750);
    });
  });

  document.querySelectorAll('.btn-cta-hero, .btn-hero').forEach(btn => {
    if (btn.__sparkleAttached) return;
    btn.__sparkleAttached = true;
    btn.classList.add('btn-sparkle');
    btn.addEventListener('pointerenter', () => {
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          const p = document.createElement('span');
          p.className = 'btn-sparkle-particle';
          const angle = (Math.random() * Math.PI * 2);
          const dist = 20 + Math.random() * 30;
          p.style.cssText = `
            left:${40+Math.random()*20}%;
            top:${20+Math.random()*60}%;
            --sx:${Math.cos(angle)*dist}px;
            --sy:${Math.sin(angle)*dist}px;
            width:${3+Math.random()*4}px;
            height:${3+Math.random()*4}px;
          `;
          btn.appendChild(p);
          setTimeout(() => p.remove(), 750);
        }, i * 60);
      }
    });
  });

  document.querySelectorAll('.section-eyebrow, .eyebrow').forEach(el => {
    if (el.__eyebrowAttached) return;
    el.__eyebrowAttached = true;
    el.classList.add('section-eyebrow-line');
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        el.classList.add('is-visible');
        io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(el);
  });

  document.querySelectorAll('.priority-section, .tl-section, .hb-section, .reference-section').forEach(sec => {
    if (!sec.previousElementSibling || sec.querySelector('.section-sep')) return;
    const sep = document.createElement('hr');
    sep.className = 'section-sep';
    sec.insertBefore(sep, sec.firstChild);
  });

  setupScrollWaypoints();
}

// ===== Scroll Waypoints =====
function setupScrollWaypoints() {
  const appEl = document.getElementById('app');
  if (!appEl) return;

  const waypointDefs = [
    { id: 'priority-tasks', label: 'สิ่งที่ต้องทำ' },
    { id: 'day1',            label: 'วันแรก' },
    { id: 'handbook',        label: 'ข้อมูลสำคัญ' },
  ];

  const found = waypointDefs.filter(w => appEl.querySelector('#' + w.id));
  if (found.length < 2) {
    const existing = document.getElementById('scroll-waypoints');
    if (existing) existing.style.display = 'none';
    return;
  }

  let wp = document.getElementById('scroll-waypoints');
  if (wp) wp.remove();

  wp = document.createElement('nav');
  wp.id = 'scroll-waypoints';
  wp.setAttribute('aria-label', 'Page sections');
  wp.innerHTML = found.map((w, i) =>
    `<div class="swp-item" data-target="${w.id}" data-idx="${i}" role="button" tabindex="0" aria-label="${w.label}">
      <span class="swp-label">${w.label}</span>
      <span class="swp-dot"></span>
    </div>`
  ).join('');
  document.body.appendChild(wp);

  const update = function() {
    const scroll = window.scrollY;
    wp.classList.toggle('is-visible', scroll > 120);
    found.forEach((w, i) => {
      const el = appEl.querySelector('#' + w.id);
      const item = wp.querySelector(`[data-idx="${i}"]`);
      if (el && item) {
        const rect = el.getBoundingClientRect();
        item.classList.toggle('is-active',
          rect.top <= window.innerHeight * 0.6 && rect.bottom >= 0
        );
      }
    });
  };
  window.removeEventListener('scroll', window.__waypointScroll || (()=>{}));
  window.__waypointScroll = update;
  window.addEventListener('scroll', update, { passive: true });
  update();

  wp.querySelectorAll('.swp-item').forEach(item => {
    const go = () => {
      const target = appEl.querySelector('#' + item.getAttribute('data-target'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    item.addEventListener('click', go);
    item.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
  });
}

// ===== Boot =====
function boot() {
  document.getElementById("year").textContent = new Date().getFullYear();
  initNav();
  initAdminMode();
  render();
  setTimeout(initEnhancements, 80);
  window.addEventListener("hashchange", () => { render(); setTimeout(initEnhancements, 80); });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
