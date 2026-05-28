/* ============================================================
   EXZY Intern Handbook — App Logic (Router + Pages)
   ============================================================ */

(function () {
  "use strict";

  // ===== Employee data (from employee-data.js) =====
  const DATA = window.EMPLOYEE_DATA || { records: [], teams: [], totalRecords: 0, sourceFile: "", sheetName: "" };

  // ===== Icons (inline SVG) =====
  const I = {
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
    search: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  };

  // ===== Page Templates =====
  const Pages = {
    // -------- HOME --------
    home: () => `
      <!-- HERO -->
      <section class="hero hero-home">
        <div class="hero-bg-layer">
          <div class="hero-orb hero-orb-1"></div>
          <div class="hero-orb hero-orb-2"></div>
          <div class="hero-orb hero-orb-3"></div>
        </div>
        <div class="hero-home-inner">
          <div class="hero-home-left fade-up">
            <div class="hero-eyebrow"><span class="dot"></span> EXZY Intern Handbook</div>
            <h1>Orientation จบแล้ว <span class="accent hero-accent-word">มาเช็กสิ่งที่ต้องทำกันต่อเลย!</span></h1>
            <p class="lead">รวมสิ่งที่ต้องทำหลังเข้าร่วมกิจกรรม Orientation และข้อมูลสำคัญสำหรับ intern ไว้ให้แล้ว</p>
            <div class="hero-cta-wrap">
              <button class="btn btn-primary btn-cta-hero" data-scroll-to="priority-tasks">
                <span class="btn-cta-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span>
                ดูสิ่งที่ต้องทำก่อน
                <span class="arrow">${I.arrow}</span>
                <span class="btn-shine"></span>
              </button>
              <button class="btn btn-ghost-2" data-scroll-to="handbook">สำรวจข้อมูล</button>
            </div>
            <button class="hero-scroll-hint" data-scroll-to="priority-tasks">
              <div class="hero-scroll-mouse"><div class="hero-scroll-wheel"></div></div>
              <span class="hero-scroll-label">เลื่อนลงดู</span>
            </button>
          </div>

          <div class="hero-home-right anim-scale">
            <div class="hero-tasks-card">
              <div class="htc-header">
                <div class="htc-header-left">
                  <span class="htc-badge"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg> Today's Tasks</span>
                </div>
                <span class="htc-count-badge">2 รายการ</span>
              </div>
              <div class="htc-item htc-item-1">
                <div class="htc-num">01</div>
                <div class="htc-body">
                  <span class="htc-title">${I.calendar} ปฏิทิน EXZY Holiday</span>
                  <span class="htc-sub">Google Calendar Invite จาก HR</span>
                </div>
                <span class="htc-status htc-waiting">รอ Invite</span>
              </div>
              <div class="htc-item htc-item-2">
                <div class="htc-num">02</div>
                <div class="htc-body">
                  <span class="htc-title">${I.clock} กรอก Timesheet</span>
                  <span class="htc-sub">เริ่มได้เลยวันนี้</span>
                </div>
                <span class="htc-status htc-action">ทำได้เลย</span>
              </div>
              <div class="htc-footer">
                <span class="htc-footer-txt">เลื่อนลงดูรายละเอียด</span>
                <span class="htc-footer-arr">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                </span>
              </div>
            </div>
            <div class="hero-float-pill anim-up" data-delay="300">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>
              วันแรกของคุณ
            </div>
          </div>
        </div>
      </section>

      <!-- PRIORITY TASKS -->
      <section class="priority-section" id="priority-tasks">
        <div class="priority-inner">
          <div class="priority-header">
            <div class="anim-up">
              <span class="priority-overline">ทำก่อนสิ้นวันแรก</span>
              <h2 class="priority-title">ก่อนเริ่มงานวันนี้ อย่าลืมทำ 2 อย่างนี้ก่อน</h2>
            </div>
          </div>
          <div class="priority-cards">

            <!-- TASK 1: CALENDAR -->
            <div class="ptask-card ptask-card-waiting anim-up">
              <div class="ptask-card-top">
                <div class="ptask-num-badge">01</div>
                <div class="ptask-state-badge ptask-state-waiting">
                  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                  รอ Invite จาก HR
                </div>
              </div>
              <div class="ptask-icon-wrap ptask-icon-amber">${I.calendar}</div>
              <h3 class="ptask-title">Subscribe ปฏิทิน EXZY Holiday</h3>
              <p class="ptask-desc">HR จะส่ง Google Calendar Invite ทางอีเมล กดเปิดปฏิทินแล้วข้อมูลวันหยุดของบริษัท จะขึ้นบน Google Calendar ของคุณ</p>
              <div class="cal-flow ptask-action-box">
                <div class="cal-flow-step">
                  <div class="cal-flow-icon cal-flow-icon-mail">${I.mail}</div>
                  <div class="cal-flow-text">ได้รับ Invite<br/>จาก HR ทางอีเมล</div>
                </div>
                <div class="cal-flow-arrow">${I.arrow}</div>
                <div class="cal-flow-step">
                  <div class="cal-flow-icon cal-flow-icon-tap">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3"/><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/></svg>
                  </div>
                  <div class="cal-flow-text">คลิก<br/><strong>"เปิดปฏิทิน"</strong></div>
                </div>
                <div class="cal-flow-arrow">${I.arrow}</div>
                <div class="cal-flow-step">
                  <div class="cal-flow-icon cal-flow-icon-done">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <div class="cal-flow-text"><strong>EXZY Holiday</strong><br/>เพิ่มแล้ว</div>
                </div>
              </div>
              <div class="ptask-footnote">ยังไม่ได้รับ Invite? ติดต่อ HR ที่ <a href="mailto:hr@exzyteam.com" class="inline-link">hr@exzyteam.com</a></div>
            </div>

            <!-- TASK 2: TIMESHEET -->
            <div class="ptask-card ptask-card-action anim-up">
              <div class="ptask-card-top">
                <div class="ptask-num-badge">02</div>
                <div class="ptask-state-badge ptask-state-action">
                  <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  เริ่มได้เลยวันนี้
                </div>
              </div>
              <div class="ptask-icon-wrap ptask-icon-navy">${I.clock}</div>
              <h3 class="ptask-title">เริ่มกรอก Timesheet วันแรก</h3>
              <p class="ptask-desc">HR จะส่งไฟล์ Timesheet ทางอีเมล กรอกเวลาเข้า-ออกงานทุกวัน แล้วส่งทุกสิ้นเดือน </br>อย่าลืมกรอกของวันนี้ด้วยนะ!</p>
              <div class="ptask-info-row ptask-action-box">
                <div class="ptask-info-item">
                  <span class="ptask-info-label">กรอก</span>
                  <span class="ptask-info-val">ทุกวัน</span>
                </div>
                <div class="ptask-info-divider"></div>
                <div class="ptask-info-item">
                  <span class="ptask-info-label">ส่ง</span>
                  <span class="ptask-info-val">สิ้นเดือน</span>
                </div>
                <div class="ptask-info-divider"></div>
                <div class="ptask-info-item">
                  <span class="ptask-info-label">ส่งไปที่</span>
                  <span class="ptask-info-val">HR Email</span>
                </div>
              </div>
              <a href="#/resources/timesheet" class="ptask-cta" data-link>
                วิธีกรอก Timesheet ${I.arrow}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- DAY 1 INTERACTIVE TIMELINE -->
      <section class="day1-section" id="day1">
        <div class="day1-inner">
          <div class="day1-header">
            <div class="day1-header-stick">
              <span class="eyebrow">หลัง Orientation</span>
              <h2 class="story-title">4 ขั้นตอนสำคัญที่ต้องทำต่อ</h2>
            </div>
            <p class="story-lead day1-header-lead">เลื่อนลงทีละช่วงเพื่ออ่านให้ครบทุกขั้นตอน — วงล้อซ้ายจะหมุนตาม Timeline และรายละเอียดฝั่งขวาจะสไลด์เปลี่ยนทีละขั้น</p>
          </div>

          <div class="d1-scroll-story" id="d1-scroll-story">
            <div class="d1-sticky-shell">
              <div class="d1-wheel-col">
                <div class="d1-wheel-wrap">
                  <div class="d1-wheel" role="img" aria-label="Day 1 timeline wheel">
                    <div class="d1-wheel-core">
                      <span class="d1-wheel-core-step" data-d1-current>01</span>
                      <span class="d1-wheel-core-label">Step</span>
                    </div>
                    <span class="d1-wheel-dot d1-wheel-dot-1 is-active" data-d1dot="0"><span>01</span></span>
                    <span class="d1-wheel-dot d1-wheel-dot-2" data-d1dot="1"><span>02</span></span>
                    <span class="d1-wheel-dot d1-wheel-dot-3" data-d1dot="2"><span>03</span></span>
                    <span class="d1-wheel-dot d1-wheel-dot-4" data-d1dot="3"><span>04</span></span>
                  </div>
                </div>

                <div class="d1-step-list">
                  <button class="d1-step-btn is-active" data-d1step="0">
                    <span class="d1-btn-label">ขั้นตอนที่ 1</span>
                    <span class="d1-btn-name">Orientation</span>
                  </button>
                  <button class="d1-step-btn" data-d1step="1">
                    <span class="d1-btn-label">ขั้นตอนที่ 2</span>
                    <span class="d1-btn-name">Metropolis</span>
                  </button>
                  <button class="d1-step-btn" data-d1step="2">
                    <span class="d1-btn-label">ขั้นตอนที่ 3</span>
                    <span class="d1-btn-name">พบพี่เลี้ยง</span>
                  </button>
                  <button class="d1-step-btn" data-d1step="3">
                    <span class="d1-btn-label">ขั้นตอนที่ 4</span>
                    <span class="d1-btn-name">เริ่ม Timesheet</span>
                  </button>
                </div>
                <p class="d1-scroll-note">${I.clock} เลื่อนลงเพื่ออ่านทีละขั้นตอน</p>
              </div>

              <div class="d1-panels-col">
                <div class="d1-panel is-active" data-d1panel="0">
                  <div class="d1-panel-icon d1-icon-cyan">${I.rocket}</div>
                  <div class="d1-panel-eyebrow">ช่วงเช้า · วันแรก</div>
                  <h3 class="d1-panel-title">Orientation</h3>
                  <p class="d1-panel-desc">HR บรรยายภาพรวม EXZY ให้ฟังและแจกเอกสารประกอบ — เว็บนี้สร้างมาเพื่อให้คุณกลับมาดูซ้ำทุกข้อมูลที่ได้ฟังในวันนี้</p>
                  <div class="d1-panel-facts">
                    <div class="d1-fact"><span class="d1-fact-k">รูปแบบ</span><span class="d1-fact-v">บรรยาย + Q&A</span></div>
                    <div class="d1-fact"><span class="d1-fact-k">เอกสาร</span><span class="d1-fact-v">สไลด์ + คู่มือนี้</span></div>
                  </div>
                  <div class="d1-panel-tags">
                    <span class="day1-tag">Orientation Slides</span>
                    <span class="day1-tag">Company Overview</span>
                    <span class="day1-tag">EXZY Core Values</span>
                  </div>
                  <a href="#/getting-started/orientation" class="d1-panel-link" data-link>ดูสรุป Orientation ${I.arrow}</a>
                </div>

                <div class="d1-panel" data-d1panel="1">
                  <div class="d1-panel-icon d1-icon-amber">${I.door}</div>
                  <div class="d1-panel-eyebrow">ช่วงสาย · วันแรก</div>
                  <h3 class="d1-panel-title">Metropolis</h3>
                  <p class="d1-panel-desc">กิจกรรม Workshop ที่อธิบายธีมการทำงานของ EXZY — ช่วยให้คุณเข้าใจวิธีสื่อสาร วิธีคิด และวัฒนธรรมการทำงานที่นี่ได้เร็วขึ้น</p>
                  <div class="d1-panel-facts">
                    <div class="d1-fact"><span class="d1-fact-k">รูปแบบ</span><span class="d1-fact-v">Workshop กลุ่ม</span></div>
                    <div class="d1-fact"><span class="d1-fact-k">เป้าหมาย</span><span class="d1-fact-v">เข้าใจ Work Style</span></div>
                  </div>
                  <div class="d1-panel-tags">
                    <span class="day1-tag">Company Culture</span>
                    <span class="day1-tag">Work Style</span>
                    <span class="day1-tag">Communication</span>
                  </div>
                </div>

                <div class="d1-panel" data-d1panel="2">
                  <div class="d1-panel-icon d1-icon-navy">${I.people}</div>
                  <div class="d1-panel-eyebrow">ช่วงบ่าย · วันแรก</div>
                  <h3 class="d1-panel-title">พบพี่เลี้ยงและทีม</h3>
                  <p class="d1-panel-desc">โอกาสสำคัญที่คุณจะได้คุยกับพี่เลี้ยงโดยตรง — บอกความคาดหวัง ถามเรื่องโปรเจกต์ และทำความรู้จักกับทีมที่จะทำงานด้วยกัน</p>
                  <div class="d1-panel-facts">
                    <div class="d1-fact"><span class="d1-fact-k">พูดถึง</span><span class="d1-fact-v">โปรเจกต์ + ความคาดหวัง</span></div>
                    <div class="d1-fact"><span class="d1-fact-k">เตรียม</span><span class="d1-fact-v">คำถามที่อยากถาม</span></div>
                  </div>
                  <div class="d1-panel-tags">
                    <span class="day1-tag">Mentor Talk</span>
                    <span class="day1-tag">Team Intro</span>
                    <span class="day1-tag">Project Briefing</span>
                  </div>
                  <a href="#/employee/org-chart" class="d1-panel-link" data-link>ดูโครงสร้างทีม ${I.arrow}</a>
                </div>

                <div class="d1-panel" data-d1panel="3">
                  <div class="d1-panel-icon d1-icon-accent">${I.clock}</div>
                  <div class="d1-panel-eyebrow">ก่อนกลับบ้าน · วันแรก</div>
                  <h3 class="d1-panel-title">เริ่มกรอก Timesheet</h3>
                  <p class="d1-panel-desc">ก่อนออกจากออฟฟิศวันแรก ให้กรอกเวลาเข้า-ออกใน Timesheet ที่ HR ส่งมาให้ทางอีเมล — ทำทุกวัน และส่งรวมทุกสิ้นเดือน</p>
                  <div class="d1-panel-facts">
                    <div class="d1-fact"><span class="d1-fact-k">กรอก</span><span class="d1-fact-v">ทุกวันก่อนกลับ</span></div>
                    <div class="d1-fact"><span class="d1-fact-k">ส่ง</span><span class="d1-fact-v">ทุกสิ้นเดือน → HR</span></div>
                  </div>
                  <div class="d1-panel-tags">
                    <span class="day1-tag">Daily Log</span>
                    <span class="day1-tag">Monthly Submit</span>
                    <span class="day1-tag day1-tag-accent">สำคัญมาก</span>
                  </div>
                  <a href="#/resources/timesheet" class="d1-panel-link" data-link>วิธีกรอก Timesheet ${I.arrow}</a>
                </div>
              </div>
            </div>

            <div class="d1-scroll-track" aria-hidden="true">
              <div class="d1-scroll-slice" data-d1slice="0"></div>
              <div class="d1-scroll-slice" data-d1slice="1"></div>
              <div class="d1-scroll-slice" data-d1slice="2"></div>
              <div class="d1-scroll-slice" data-d1slice="3"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="hb-section" id="handbook">
        <div class="hb-inner">
          <div class="hb-header anim-up">
            <div>
              <span class="eyebrow">เปิดดูได้ตลอดเวลา</span>
              <h2 class="hb-title">รีเฟรชเนื้อหาที่ต้องใช้บ่อย</h2>
              <p class="hb-sub">ข้อมูลสำคัญที่ intern เปิดดูบ่อยหลัง orientation — เลือกหัวข้อที่ต้องการได้เลย</p>
            </div>
          </div>

          <div class="hb-groups">

            <div class="hb-group anim-up">
              <div class="hb-group-label">
                <span class="hb-group-dot hb-dot-cyan"></span>
                วันแรก & Orientation
              </div>
              <div class="hb-links">
                <a href="#/getting-started/orientation" class="hb-link" data-link>
                  <span class="hb-link-icon">${I.rocket}</span>
                  <span class="hb-link-body">
                    <span class="hb-link-title">Orientation</span>
                    <span class="hb-link-desc">สไลด์ สรุป และ Core Values</span>
                  </span>
                  <span class="hb-link-arrow">${I.arrow}</span>
                </a>
                <a href="#/employee/org-chart" class="hb-link" data-link>
                  <span class="hb-link-icon">${I.people}</span>
                  <span class="hb-link-body">
                    <span class="hb-link-title">โครงสร้างองค์กร</span>
                    <span class="hb-link-desc">รู้จักทีม แผนก และพี่เลี้ยง</span>
                  </span>
                  <span class="hb-link-arrow">${I.arrow}</span>
                </a>
                <a href="#/resources/timesheet" class="hb-link" data-link>
                  <span class="hb-link-icon">${I.clock}</span>
                  <span class="hb-link-body">
                    <span class="hb-link-title">Timesheet</span>
                    <span class="hb-link-desc">วิธีกรอก · กรอกทุกวัน · ส่งสิ้นเดือน</span>
                  </span>
                  <span class="hb-link-arrow">${I.arrow}</span>
                </a>
              </div>
            </div>

            <div class="hb-group anim-up">
              <div class="hb-group-label">
                <span class="hb-group-dot hb-dot-amber"></span>
                เครื่องมือออฟฟิศ
              </div>
              <div class="hb-links">
                <a href="#/getting-started/wifi" class="hb-link" data-link>
                  <span class="hb-link-icon">${I.wifi}</span>
                  <span class="hb-link-body">
                    <span class="hb-link-title">Office Wi-Fi</span>
                    <span class="hb-link-desc">SSID + รหัส + QR สแกนได้เลย</span>
                  </span>
                  <span class="hb-link-arrow">${I.arrow}</span>
                </a>
                <a href="#/getting-started/meeting-rooms" class="hb-link" data-link>
                  <span class="hb-link-icon">${I.door}</span>
                  <span class="hb-link-body">
                    <span class="hb-link-title">ห้องประชุม</span>
                    <span class="hb-link-desc">4 ห้อง ใน 2 ชั้น · วิธีจอง</span>
                  </span>
                  <span class="hb-link-arrow">${I.arrow}</span>
                </a>
                <a href="https://docs.google.com/spreadsheets/d/1FnaO7mN4blsn1lLTw1POPmE2OiA_pgsa/edit?usp=sharing&ouid=100864839701441436360&rtpof=true&sd=true" target="_blank" rel="noopener" class="hb-link">
                  <span class="hb-link-icon">${I.mail}</span>
                  <span class="hb-link-body">
                    <span class="hb-link-title">Employee Contact</span>
                    <span class="hb-link-desc">เบอร์โทรและอีเมลพนักงาน</span>
                  </span>
                  <span class="hb-link-arrow">${I.arrow}</span>
                </a>
              </div>
            </div>

            <div class="hb-group anim-up">
              <div class="hb-group-label">
                <span class="hb-group-dot hb-dot-navy"></span>
                นโยบาย & ควรรู้
              </div>
              <div class="hb-links">
                <a href="#/policy/internship" class="hb-link" data-link>
                  <span class="hb-link-icon">${I.shield}</span>
                  <span class="hb-link-body">
                    <span class="hb-link-title">นโยบายการฝึกงาน</span>
                    <span class="hb-link-desc">เวลางาน เบี้ยเลี้ยง กฎระเบียบ</span>
                  </span>
                  <span class="hb-link-arrow">${I.arrow}</span>
                </a>
                <a href="#/policy/leave" class="hb-link" data-link>
                  <span class="hb-link-icon">${I.calendar}</span>
                  <span class="hb-link-body">
                    <span class="hb-link-title">การขอลา</span>
                    <span class="hb-link-desc">วิธีลา · วันลา · ติดต่อ HR</span>
                  </span>
                  <span class="hb-link-arrow">${I.arrow}</span>
                </a>
                <a href="#/policy/dress-code" class="hb-link" data-link>
                  <span class="hb-link-icon">${I.shirt}</span>
                  <span class="hb-link-body">
                    <span class="hb-link-title">Dress Code</span>
                    <span class="hb-link-desc">Smart Casual · สิ่งที่ควรหลีกเลี่ยง</span>
                  </span>
                  <span class="hb-link-arrow">${I.arrow}</span>
                </a>
              </div>
            </div>

          </div>

          <!-- EXPLORE MORE SECTION (replaces hb-discover) -->
          <div class="hb-explore anim-up">
            <div class="hb-explore-bg">
              <div class="hbe-orb hbe-orb-1"></div>
              <div class="hbe-orb hbe-orb-2"></div>
              <div class="hbe-grid"></div>
            </div>
            <div class="hb-explore-content">
              <div class="hbe-head">
                <span class="hbe-eyebrow">ยังมีอีกเยอะเลย</span>
                <h3 class="hbe-title">สำรวจ EXZY Handbook</h3>
                <p class="hbe-sub">ข้อมูลครบทุกอย่างที่ต้องรู้ตลอดการฝึกงาน — ตั้งแต่วันแรกถึงวันสุดท้าย</p>
              </div>
              <div class="hbe-cards">
                <a href="#/policy/code-of-conduct" class="hbe-card" data-link>
                  <div class="hbe-card-icon">${I.shield}</div>
                  <div class="hbe-card-body">
                    <span class="hbe-card-title">Core Values</span>
                    <span class="hbe-card-sub">5 แนวคิดที่ EXZY ยึดถือ</span>
                  </div>
                  <span class="hbe-card-arr">${I.arrow}</span>
                </a>
                <a href="#/employee/org-chart" class="hbe-card" data-link>
                  <div class="hbe-card-icon">${I.people}</div>
                  <div class="hbe-card-body">
                    <span class="hbe-card-title">ทีมและแผนก</span>
                    <span class="hbe-card-sub">รู้จักทุกคนในองค์กร</span>
                  </div>
                  <span class="hbe-card-arr">${I.arrow}</span>
                </a>
                <a href="#/showcase/experiences" class="hbe-card" data-link>
                  <div class="hbe-card-icon">${I.sparkle}</div>
                  <div class="hbe-card-body">
                    <span class="hbe-card-title">ผลงาน Intern รุ่นพี่</span>
                    <span class="hbe-card-sub">แรงบันดาลใจจากรุ่นก่อน</span>
                  </div>
                  <span class="hbe-card-arr">${I.arrow}</span>
                </a>
                <a href="#/resources/faqs" class="hbe-card" data-link>
                  <div class="hbe-card-icon">${I.help}</div>
                  <div class="hbe-card-body">
                    <span class="hbe-card-title">FAQs</span>
                    <span class="hbe-card-sub">คำถามที่ intern ถามบ่อย</span>
                  </div>
                  <span class="hbe-card-arr">${I.arrow}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    `,

    // -------- ORIENTATION --------
    "getting-started/orientation": () => pageWrap({
      crumbs: [["Home", "#/home"], ["Getting Started", null], ["Orientation", null]],
      title: "Orientation",
      lead: "ทบทวนสิ่งที่ได้ฟังใน Orientation — slides, ค่านิยม, โปรเจกต์ที่จะได้ทำ และสิทธิประโยชน์ต่าง ๆ",
      toc: [
        ["slides", "สไลด์ปฐมนิเทศ"],
        ["values", "EXZY Core Values"],
        ["intro", "เกี่ยวกับ EXZY"],
        ["projects", "โปรเจกต์ที่จะได้ทำ"],
        ["benefits", "เบี้ยเลี้ยงและกิจกรรม"],
        ["next", "ขั้นตอนถัดไป"],
      ],
      body: `
        <h2 id="slides">สไลด์ปฐมนิเทศ</h2>
        <p>สรุปทุกอย่างที่คุณได้ฟังในวัน Orientation ไว้ที่นี่ — เปิดดูได้เสมอ หรือดาวน์โหลดเก็บไว้</p>

        <div class="slides-full-embed" id="slides-embed-area">
          <div class="slides-embed-header">
            <span class="slides-icon">${I.book}</span>
            <span class="slides-title" data-text="orientation_slides_name">Mini Internship Orientation</span>
            <div class="slides-embed-actions">
              <a href="mini-internship-orientation.pdf" data-link-key="orientation_slides_url" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">เปิดแท็บใหม่ ${I.external}</a>
              <a href="mini-internship-orientation.pdf" data-link-key="orientation_pdf_url" download="Mini-Internship-Orientation.pdf" class="btn btn-primary btn-sm">${I.download} ดาวน์โหลด PDF</a>
            </div>
          </div>
          <div class="slides-embed-body" id="slides-embed-body">
            <div class="slides-pdf-inline">
              <iframe
                src="mini-internship-orientation.pdf"
                class="slides-pdf-frame"
                title="EXZY Orientation PDF"
                allow="fullscreen">
              </iframe>
            </div>
          </div>
        </div>

        <h2 id="values">EXZY Core Values</h2>
        <p>5 แนวคิดที่อยู่เบื้องหลังทุกการทำงานที่ EXZY — คุณจะได้เห็นและใช้สิ่งเหล่านี้ทุกวัน</p>
        <ul>
          <li><strong>Win as a team</strong> — Goal, Work+, Support</li>
          <li><strong>Innovative</strong> — Value added, Learn and improve, Take risk</li>
          <li><strong>Positive &amp; Open</strong> — Positive Energy, Listening, Speaking</li>
          <li><strong>Professional &amp; Dynamic</strong> — Adapt, Commit, Prepare, Reliable</li>
          <li><strong>Aesthetic Design</strong> — Tidiness, Good Experience, WOW &amp; Cool</li>
        </ul>
        <a href="#/policy/code-of-conduct" class="btn btn-ghost" data-link style="margin-top:4px;">ดู Core Values ทั้งหมด ${I.arrow}</a>

        <h2 id="intro">เกี่ยวกับ EXZY</h2>
        <p><strong>"Excellence by design, Advance by technology"</strong></p>
        <p>EXZY คือผู้เชี่ยวชาญด้าน <strong>Smart Office Solution</strong> แบบครบวงจร ให้บริการตั้งแต่การออกแบบ ติดตั้ง ไปจนถึงเชื่อมต่อระบบสำนักงานยุคใหม่ ทั้งระบบจองห้องประชุม ระบบเข้า-ออกอัจฉริยะ Video Conference และ Digital Signage — ในฐานะ Intern คุณจะได้เป็นส่วนหนึ่งของทีมจริง ไม่ใช่แค่สังเกตการณ์</p>
        <p style="font-size:13.5px; color: var(--ink-muted);">อยากรู้จัก EXZY เพิ่มเติม? <a href="https://www.exzysmartoffice.com" target="_blank" rel="noopener" class="inline-link">เยี่ยมชมเว็บไซต์ ${I.external}</a></p>

        <h2 id="projects">โปรเจกต์ที่จะได้ทำ</h2>
        <p>ตลอดการฝึกงาน Intern ทุกคนจะรับผิดชอบโปรเจกต์ <strong>3 ประเภท</strong> — แต่ละแบบมีจุดประสงค์ต่างกัน</p>

        <div class="proj-cards"> 
          <div class="proj-card anim-up">
            <div class="proj-num">01</div>
            <h4>Project or Report</h4>
            <p>โปรเจกต์หรือรายงานที่รับผิดชอบดูแลและนำส่งมหาวิทยาลัย</p>
          </div>
          <div class="proj-card anim-up">
            <div class="proj-num">02</div>
            <h4>Team Project</h4>
            <p>โปรเจกต์ที่พี่เลี้ยงของแต่ละ Team Assign ให้ตามทักษะและสายงาน</p>
          </div>
          <div class="proj-card anim-up">
            <div class="proj-num">03</div>
            <h4>HR Project</h4>
            <p>โปรเจกต์ที่ HR Assign ให้เพื่อสนับสนุนงานภายในองค์กร</p>
          </div>
        </div>

        <div class="callout anim-up" style="margin-top:20px;">
          <span class="ic">${I.info}</span>
          <div>
            <h4>หมายเหตุ</h4>
            <p>รูปแบบโปรเจกต์อาจแตกต่างกันตามเงื่อนไขมหาวิทยาลัยหรือทักษะ — Intern ทุกคนต้องรับผิดชอบงานที่ได้รับมอบหมายด้วยตัวเอง</p>
          </div>
        </div>

        <h2 id="benefits">เบี้ยเลี้ยงและกิจกรรม</h2>
        <h3>1. เบี้ยเลี้ยง</h3>
        <ul>
          <li>รับเบี้ยเลี้ยงวันละ <strong>200 บาท</strong> สำหรับวันที่ฝึกงานที่บริษัทฯ</li>
          <li>รับเบี้ยเลี้ยงวันละ <strong>300 บาท</strong> สำหรับวันที่ฝึกงานนอกสถานที่</li>
        </ul>
        <p>เอกสารที่ต้องใช้ในการขอรับเบี้ยเลี้ยง (กำหนดส่งวันที่ 30–31 ของทุกเดือน):</p>
        <ul>
          <li>สำเนาบัตรประชาชน พร้อมเซ็นสำเนาถูกต้อง (ส่งทุกเดือน)</li>
          <li>เอกสาร Intern Timesheet — <a href="#/resources/timesheet" data-link class="inline-link">ดูวิธีกรอก</a> (ส่งทุกเดือน)</li>
          <li>สำเนา Bookbank ของบัญชีที่ต้องการใช้รับเงิน (ส่งแค่เดือนแรก)</li>
        </ul>
        <h3>2. Workshop และ Dining</h3>
        <p>EXZY จัดกิจกรรม Workshop เสริมทักษะ และกิจกรรม Dining ประจำเดือน/ทีม เพื่อสร้างความสัมพันธ์ที่ดีระหว่างเพื่อนร่วมงาน</p>
        <div class="callout callout-note anim-up" style="margin-top:12px;">
          <span class="ic">${I.info}</span>
          <div><p>Intern สามารถเลือกเข้าร่วมเฉพาะกิจกรรมที่สนใจ และสามารถปฏิเสธการเข้าร่วมได้ตามความสมัครใจ</p></div>
        </div>

        <div class="also-explore anim-up">
          <div class="ae-label">อ่านต่อที่นี่</div>
          <div class="ae-links">
            <a href="#/policy/code-of-conduct" class="ae-chip" data-link>${I.shield} Core Values</a>
            <a href="#/policy/internship" class="ae-chip" data-link>${I.clock} Internship Policy</a>
            <a href="#/resources/timesheet" class="ae-chip" data-link>${I.doc} Timesheet</a>
            <a href="#/employee/org-chart" class="ae-chip" data-link>${I.people} โครงสร้างองค์กร</a>
          </div>
        </div>
      `,
    }),

    // -------- WIFI --------
    "getting-started/wifi": () => pageWrap({
      crumbs: [["Home", "#/home"], ["Getting Started", null], ["Office Wi-Fi", null]],
      title: "Office Wi-Fi",
      lead: "เชื่อมต่อ Wi-Fi ออฟฟิศ สามารถสแกน QR ตรงนี้ได้เลย หรือจะก็อปรหัสไปวางก็ได้",
      body: `
        <div class="wifi-tabs">
          <button class="wifi-tab is-active" data-wifi-tab="staff">
            <span class="ic">${I.wifi}</span>
            <span>สำหรับพนักงาน / Intern</span>
          </button>
          <button class="wifi-tab" data-wifi-tab="guest">
            <span class="ic">${I.people}</span>
            <span>สำหรับแขก (Guest)</span>
          </button>
        </div>

        <div class="wifi-panel" data-wifi-panel="staff">
          <div class="wifi-panel-grid">
            <div class="wifi-qr-wrap">
              <div class="wifi-qr" data-qr="staff"></div>
              <p class="wifi-qr-cap">สแกนเพื่อเชื่อมต่อ Wi-Fi</p>
            </div>
            <div class="wifi-info-wrap">
              <div class="wifi-info-block">
                <span class="wifi-info-label">ชื่อเครือข่าย (SSID)</span>
                <div class="wifi-info-row">
                  <span class="wifi-info-val" data-text="wifi_staff_ssid">ExzyUniFi</span>
                  <button class="wifi-copy" data-copy="wifi_staff_ssid" title="คัดลอก SSID">${I.copy}</button>
                </div>
              </div>
              <div class="wifi-info-block">
                <span class="wifi-info-label">รหัสผ่าน</span>
                <div class="wifi-info-row">
                  <div class="wifi-pass-wrap">
                    <span class="wifi-info-val mono wifi-pass-val" data-text="wifi_staff_pass" data-masked="true">••••••••</span>
                    <button class="wifi-pass-toggle" data-toggle-pass="wifi_staff_pass" title="แสดง/ซ่อนรหัส">
                      <span class="pass-toggle-eye"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></span>แสดง
                    </button>
                  </div>
                  <button class="wifi-copy" data-copy="wifi_staff_pass" title="คัดลอกรหัส">${I.copy}</button>
                </div>
              </div>
              <button class="btn btn-primary wifi-cta wifi-connect" data-wifi="staff">${I.copy} คัดลอกรหัส และเปิดการตั้งค่า Wi-Fi</button>
            </div>
          </div>
        </div>

        <div class="wifi-panel" data-wifi-panel="guest" hidden>
          <div class="wifi-panel-grid">
            <div class="wifi-qr-wrap">
              <div class="wifi-qr" data-qr="guest"></div>
              <p class="wifi-qr-cap">สแกนเพื่อเชื่อมต่อ Guest Wi-Fi</p>
            </div>
            <div class="wifi-info-wrap">
              <div class="wifi-info-block">
                <span class="wifi-info-label">ชื่อเครือข่าย (SSID)</span>
                <div class="wifi-info-row">
                  <span class="wifi-info-val" data-text="wifi_guest_ssid">Exzy_Guest</span>
                  <button class="wifi-copy" data-copy="wifi_guest_ssid" title="คัดลอก SSID">${I.copy}</button>
                </div>
              </div>
              <div class="wifi-info-block">
                <span class="wifi-info-label">รหัสผ่าน</span>
                <div class="wifi-info-row">
                  <div class="wifi-pass-wrap">
                    <span class="wifi-info-val mono wifi-pass-val" data-text="wifi_guest_pass" data-masked="true">••••••••</span>
                    <button class="wifi-pass-toggle" data-toggle-pass="wifi_guest_pass" title="แสดง/ซ่อนรหัส">
                      <span class="pass-toggle-eye"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></span>แสดง
                    </button>
                  </div>
                  <button class="wifi-copy" data-copy="wifi_guest_pass" title="คัดลอกรหัส">${I.copy}</button>
                </div>
              </div>
              <button class="btn btn-primary wifi-cta wifi-connect" data-wifi="guest">${I.copy} คัดลอกรหัส และเปิดการตั้งค่า Wi-Fi</button>
              <p class="wifi-hint" style="margin-top:8px;">สำหรับแขกที่มาเยือนโดยเฉพาะ — แชร์เฉพาะกับคนที่มาพบกันจริง ๆ นะ</p>
            </div>
          </div>
        </div>

        <!-- How to connect section -->
        <div class="wifi-how-wrap anim-up">
          <div class="wifi-how-head">
            <div class="wifi-signal-graphic">
              <svg viewBox="0 0 80 56" fill="none" class="wifi-sig-svg">
                <path d="M40 44 C40 44 18 22 18 22" stroke="rgba(102,197,197,0.2)" stroke-width="3" stroke-linecap="round"/>
                <path d="M40 44 C40 44 62 22 62 22" stroke="rgba(102,197,197,0.2)" stroke-width="3" stroke-linecap="round"/>
                <path d="M28 33 C28 33 40 44 52 33" stroke="rgba(102,197,197,0.45)" stroke-width="3" stroke-linecap="round" fill="none"/>
                <path d="M14 20 C14 20 40 44 66 20" stroke="rgba(102,197,197,0.25)" stroke-width="3" stroke-linecap="round" fill="none"/>
                <path d="M4 10 C4 10 40 44 76 10" stroke="rgba(102,197,197,0.12)" stroke-width="3" stroke-linecap="round" fill="none"/>
                <circle cx="40" cy="44" r="4" fill="var(--cyan)"/>
              </svg>
            </div>
            <h2>วิธีเชื่อมต่อ</h2>
          </div>
          <div class="wifi-steps-v2">
            <div class="wifi-step-v2 anim-left" data-delay="0">
              <div class="wifi-sv2-left">
                <div class="wifi-sv2-num">1</div>
                <div class="wifi-sv2-line"></div>
              </div>
              <div class="wifi-sv2-body">
                <div class="wifi-sv2-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="17" y="17" width="4" height="4" rx="0.5" fill="currentColor" stroke="none"/><circle cx="17.5" cy="14.5" r="1" fill="currentColor" stroke="none"/><circle cx="20.5" cy="14.5" r="1" fill="currentColor" stroke="none"/><circle cx="20.5" cy="17.5" r="1" fill="currentColor" stroke="none"/></svg>
                </div>
                <h4>สแกน QR Code</h4>
                <p>เปิดแอปกล้องของมือถือ เพื่อสแกน QR code ด้านบน — มือถือจะถามว่าจะเชื่อมต่อ Wi-Fi เลยหรือไม่</p>
              </div>
            </div>
            <div class="wifi-step-v2 anim-left" data-delay="100">
              <div class="wifi-sv2-left">
                <div class="wifi-sv2-num">2</div>
                <div class="wifi-sv2-line"></div>
              </div>
              <div class="wifi-sv2-body">
                <div class="wifi-sv2-icon">${I.copy}</div>
                <h4>หรือคัดลอกรหัส</h4>
                <p>กดปุ่ม "คัดลอกรหัส" — รหัสจะถูกคัดลอกไปที่ clipboard · เปิดการตั้งค่า Wi-Fi ของอุปกรณ์</p>
              </div>
            </div>
            <div class="wifi-step-v2 anim-left" data-delay="200">
              <div class="wifi-sv2-left">
                <div class="wifi-sv2-num">3</div>
              </div>
              <div class="wifi-sv2-body">
                <div class="wifi-sv2-icon">${I.wifi}</div>
                <h4>เลือกเครือข่ายและวางรหัส</h4>
                <p>เลือก SSID ตามที่ระบุ → วางรหัส → กดเชื่อมต่อ</p>
              </div>
            </div>
          </div>
        </div>

        <div class="callout" style="margin-top:32px;">
          <span class="ic">${I.shield}</span>
          <div>
            <h4>เก็บรหัสไว้กับตัวนะ</h4>
            <p>รหัส Wi-Fi ใช้ภายในบริษัทเท่านั้น — ไม่แชร์กับคนภายนอก · ถ้าเชื่อมต่อไม่ได้ บอกพี่ในทีมหรือ IT ได้เลย</p>
          </div>
        </div>


      `,
    }),

    // -------- MEETING ROOMS --------
    "getting-started/meeting-rooms": () => pageWrap({
      crumbs: [["Home", "#/home"], ["Getting Started", null], ["Meeting Rooms", null]],
      title: "Meeting Rooms",
      lead: "ห้องประชุมในออฟฟิศ EXZY มีทั้งหมด 4 ห้องกระจายอยู่ใน 2 ชั้น — จองได้หลายช่องทางตามสะดวก",
      body: `
        <!-- Stats overview -->
        <div class="mr-overview anim-up">
          <div class="mr-ov-item">
            <div class="mr-ov-icon-wrap">${I.door}</div>
            <span class="mr-ov-num">4</span>
            <span class="mr-ov-lbl">ห้องประชุม</span>
          </div>
          <div class="mr-ov-sep"></div>
          <div class="mr-ov-item">
            <div class="mr-ov-icon-wrap"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/></svg></div>
            <span class="mr-ov-num">2</span>
            <span class="mr-ov-lbl">ชั้น</span>
          </div>
          <div class="mr-ov-sep"></div>
          <div class="mr-ov-item">
            <div class="mr-ov-icon-wrap">${I.calendar}</div>
            <span class="mr-ov-num">3</span>
            <span class="mr-ov-lbl">วิธีการจอง</span>
          </div>
        </div>

        <!-- Floor 1 -->
        <div class="mr-floor-sec">
          <div class="mr-floor-hd anim-left">
            <span class="mr-floor-pill">ชั้น 1</span>
            <div class="mr-floor-line"></div>
            <span class="mr-floor-count">1 ห้อง</span>
          </div>
          <div class="mr-feat-card anim-up" data-delay="100">
            <div class="mr-feat-vis">
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
              <div class="mr-vis-cap">${I.people}&ensp;6–8 ท่าน</div>
            </div>
            <div class="mr-feat-info">
              <div class="mr-feat-title-row">
                <div class="mr-feat-name"><span class="mr-x-accent">X</span>cellent</div>
                <span class="mr-room-badge mr-room-closed">ห้องปิด</span>
              </div>
              <p class="mr-feat-desc">ห้องประชุมหลักของออฟฟิศ เหมาะสำหรับการประชุมภายในทีม และการรับรองลูกค้าหรือแขกจากภายนอก</p>
              <div class="mr-feat-meta">
                <div class="mr-meta-row">
                  <span class="mr-meta-lbl">ความจุ</span>
                  <div class="mr-cap-dots">
                    ${Array(8).fill(0).map((_, i) => `<span class="mr-cap-dot${i < 6 ? ' active' : ''}"></span>`).join('')}
                    <span class="mr-cap-txt">6–8 คน</span>
                  </div>
                </div>
                <div class="mr-meta-row">
                  <span class="mr-meta-lbl">เหมาะกับ</span>
                  <div class="mr-feat-tags">
                    <span class="mr-use-tag">ประชุมภายใน</span>
                    <span class="mr-use-tag">รับรองลูกค้า / แขก</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Floor 2 -->
        <div class="mr-floor-sec">
          <div class="mr-floor-hd anim-left" data-delay="80">
            <span class="mr-floor-pill">ชั้น 2</span>
            <div class="mr-floor-line"></div>
            <span class="mr-floor-count">3 ห้อง</span>
          </div>
          <div class="mr-rooms-3">
            <div class="mr-room-card anim-up" data-delay="100">
              <div class="mr-room-plan-sm">
                <svg viewBox="0 0 160 96" fill="none">
                  <rect x="5" y="5" width="150" height="86" rx="6" stroke="rgba(102,197,197,0.4)" stroke-width="1.5" fill="rgba(102,197,197,0.04)"/>
                  <rect x="20" y="26" width="34" height="20" rx="3" stroke="rgba(0,64,128,0.3)" stroke-width="1.5" fill="rgba(0,64,128,0.06)"/>
                  <rect x="63" y="26" width="34" height="20" rx="3" stroke="rgba(0,64,128,0.3)" stroke-width="1.5" fill="rgba(0,64,128,0.06)"/>
                  <rect x="106" y="26" width="34" height="20" rx="3" stroke="rgba(0,64,128,0.3)" stroke-width="1.5" fill="rgba(0,64,128,0.06)"/>
                  <rect x="42" y="58" width="76" height="16" rx="3" stroke="rgba(0,64,128,0.3)" stroke-width="1.5" fill="rgba(0,64,128,0.06)"/>
                </svg>
              </div>
              <div class="mr-room-body">
                <div class="mr-room-hdr">
                  <div class="mr-room-nm"><span class="mr-x-sm">X</span>pert Area</div>
                  <span class="mr-room-badge mr-room-open">พื้นที่เปิด</span>
                </div>
                <div class="mr-room-cap">${I.people}<span>6–8 ท่าน</span></div>
                <p class="mr-room-desc">พื้นที่โต๊ะประชุมแบบเปิดโล่ง เหมาะสำหรับการระดมความคิดและประชุมกลุ่ม</p>
                <div class="mr-room-tags"><span>ประชุมกลุ่ม</span><span>ระดมความคิด</span></div>
              </div>
            </div>

            <div class="mr-room-card anim-up" data-delay="200">
              <div class="mr-room-plan-sm">
                <svg viewBox="0 0 160 96" fill="none">
                  <rect x="5" y="5" width="150" height="86" rx="6" stroke="rgba(102,197,197,0.4)" stroke-width="1.5" fill="rgba(102,197,197,0.04)"/>
                  <rect x="42" y="32" width="76" height="38" rx="4" stroke="rgba(0,64,128,0.3)" stroke-width="1.5" fill="rgba(0,64,128,0.06)"/>
                  <rect x="24" y="39" width="10" height="9" rx="2" fill="rgba(0,64,128,0.22)"/>
                  <rect x="126" y="39" width="10" height="9" rx="2" fill="rgba(0,64,128,0.22)"/>
                  <rect x="52" y="18" width="10" height="8" rx="2" fill="rgba(0,64,128,0.22)"/>
                  <rect x="75" y="18" width="10" height="8" rx="2" fill="rgba(0,64,128,0.22)"/>
                  <rect x="98" y="18" width="10" height="8" rx="2" fill="rgba(0,64,128,0.22)"/>
                  <rect x="52" y="76" width="10" height="8" rx="2" fill="rgba(0,64,128,0.22)"/>
                  <rect x="75" y="76" width="10" height="8" rx="2" fill="rgba(0,64,128,0.22)"/>
                  <rect x="98" y="76" width="10" height="8" rx="2" fill="rgba(0,64,128,0.22)"/>
                </svg>
              </div>
              <div class="mr-room-body">
                <div class="mr-room-hdr">
                  <div class="mr-room-nm"><span class="mr-x-sm">X</span>tream Room</div>
                  <span class="mr-room-badge mr-room-closed">ห้องปิด</span>
                </div>
                <div class="mr-room-cap">${I.people}<span>3–5 ท่าน</span></div>
                <p class="mr-room-desc">ห้องขนาดกลาง เหมาะสำหรับการประชุมกลุ่มเล็กหรือ Workshop</p>
                <div class="mr-room-tags"><span>ประชุมกลุ่มเล็ก</span><span>Workshop</span></div>
              </div>
            </div>

            <div class="mr-room-card anim-up" data-delay="300">
              <div class="mr-room-plan-sm">
                <svg viewBox="0 0 160 96" fill="none">
                  <rect x="5" y="5" width="150" height="86" rx="6" stroke="rgba(102,197,197,0.4)" stroke-width="1.5" fill="rgba(102,197,197,0.04)"/>
                  <rect x="54" y="32" width="52" height="30" rx="4" stroke="rgba(0,64,128,0.3)" stroke-width="1.5" fill="rgba(0,64,128,0.06)"/>
                  <rect x="35" y="37" width="10" height="9" rx="2" fill="rgba(0,64,128,0.22)"/>
                  <rect x="115" y="37" width="10" height="9" rx="2" fill="rgba(0,64,128,0.22)"/>
                  <rect x="63" y="18" width="10" height="8" rx="2" fill="rgba(0,64,128,0.22)"/>
                  <rect x="87" y="18" width="10" height="8" rx="2" fill="rgba(0,64,128,0.22)"/>
                </svg>
              </div>
              <div class="mr-room-body">
                <div class="mr-room-hdr">
                  <div class="mr-room-nm"><span class="mr-x-sm">X</span>tar Room</div>
                  <span class="mr-room-badge mr-room-closed">ห้องปิด</span>
                </div>
                <div class="mr-room-cap">${I.people}<span>2–3 ท่าน</span></div>
                <p class="mr-room-desc">ห้องขนาดเล็ก เหมาะสำหรับการพูดคุย 1:1 หรือประชุมสั้นเฉพาะกิจ</p>
                <div class="mr-room-tags"><span>1:1</span><span>Quick Sync</span></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Booking Methods -->
        <div class="mr-book-section anim-up">
          <h2>วิธีการจอง</h2>
          <p class="mr-book-lead">จองผ่าน 3 ช่องทางนี้ได้ตามสะดวก</p>
          <div class="mr-book-grid">
            <div class="mr-book-card anim-up" data-delay="100">
              <div class="mr-book-num">01</div>
              <div class="mr-book-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h4>Website</h4>
              <p><a href="https://exzyoffice.exzycloud.com" target="_blank" rel="noopener" class="inline-link">exzyoffice.exzycloud.com</a></p>
              <p class="mr-book-hint">เข้าระบบจองห้องผ่านเว็บไซต์ได้ทุกอุปกรณ์</p>
            </div>
            <div class="mr-book-card anim-up" data-delay="200">
              <div class="mr-book-num">02</div>
              <div class="mr-book-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 3v18M3 9h6M3 15h6"/></svg>
              </div>
              <h4>จองหน้าห้อง</h4>
              <p class="mr-book-hint">แตะที่แผงหน้าจอหน้าห้อง เพื่อดูตารางเวลาและจองช่วงที่ว่างได้เลย</p>
            </div>
            <div class="mr-book-card anim-up" data-delay="300">
              <div class="mr-book-num">03</div>
              <div class="mr-book-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="currentColor" stroke="none"/></svg>
              </div>
              <h4>App W+</h4>
              <p class="mr-book-hint">ดาวน์โหลดแอป W+ บนมือถือ — จองและดูตารางห้องได้ทุกที่ทุกเวลา</p>
            </div>
          </div>
        </div>

        <div class="callout" style="margin-top:28px;">
          <span class="ic">${I.info}</span>
          <div>
            <h4>ก่อนออกจากห้อง</h4>
            <p>เก็บอุปกรณ์ ปิดไฟ ปิดจอ และทิ้งขยะก่อนออกทุกครั้ง — ถ้าเจออุปกรณ์มีปัญหาแจ้ง IT ได้เลย</p>
          </div>
        </div>

        <div class="page-cta-strip">
          <div>
            <h4>ดูได้เลยว่าแต่ละทีมทำอะไร</h4>
            <p>โครงสร้างองค์กร EXZY — รู้ไว้จะได้รู้ว่าติดต่อใครตอนไหน</p>
          </div>
          <div class="cta-btns">
            <a href="#/employee/org-chart" class="btn btn-primary" data-link>โครงสร้างองค์กร ${I.arrow}</a>
          </div>
        </div>
      `,
    }),

    // -------- EMPLOYEE: COMPANY STRUCTURE / ORG CHART --------
    "employee/org-chart": () => {
      const groups = [
        { title: "Technology", color: "1", teams: ["Dev", "SE", "IT Support", "IT Helpdesk", "S-IT Project Co", "S-Project Co"] },
        { title: "Design", color: "2", teams: ["Design"] },
        { title: "Sales & Business", color: "3", teams: ["Sales", "Pre-Sales", "Project Sales", "Tele Sales", "Sales Admin", "AE"] },
        { title: "Marketing & Customer", color: "4", teams: ["Marketing", "Customer Service"] },
        { title: "Operations", color: "5", teams: ["Operation", "PM", "PA", "MT", "Assistant Manager"] },
        { title: "Finance & Admin", color: "1", teams: ["Accounting", "HR"] },
      ];

      return pageWrap({
        crumbs: [["Home", "#/home"], ["Company", null], ["Org Chart", null]],
        title: "โครงสร้างองค์กร",
        lead: "ทำความรู้จักทีม EXZY — 6 แผนกหลักที่คุณจะได้ทำงานด้วย ทั้งทางตรงและทางอ้อม",
        body: `
          <div class="oct-tree-wrap">
            <div class="oct-tree">
              <div class="oct-root-card anim-scale" data-delay="80">
                <div class="oct-root-hero">
                  <div class="oct-root-icon">
                    <img src="logo.png" alt="EXZY" />
                  </div>
                  <div class="oct-root-label">Head Office</div>
                </div>
                <div class="oct-root-title">EXZY Company Limited</div>
                <p class="oct-root-copy">ศูนย์กลางของทุกทีมและการตัดสินใจหลัก</p>
              </div>

              <div class="oct-root-stem"></div>
              <div class="oct-dept-branch"></div>

              <div class="oct-dept-grid">
                ${groups.map((g, i) => `
                  <div class="oct-dept-card anim-up" data-delay="${i * 70}">
                    <div class="oct-dept-head">
                      <span class="oct-dept-pill oct-dp-${g.color}">${g.title}</span>
                      <span class="oct-dept-count">${g.teams.length} ทีม</span>
                    </div>
                    <div class="oct-team-list">
                      ${g.teams.map(t => `<span class="oct-team-pill">${t}</span>`).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="callout" style="margin-top:48px;">
            <span class="ic">${I.info}</span>
            <div>
              <h4>ยังไม่รู้ว่าตัวเองอยู่ทีมไหน?</h4>
              <p>ไม่ต้องกังวล — HR จะแจ้งทีมและพี่เลี้ยงให้คุณทราบก่อนวันแรก · ดูรายชื่อพนักงานแต่ละทีมได้ใน <a href="#/employee/directory" data-link>Employee Directory</a></p>
            </div>
          </div>
        `,
      });
    },

    // -------- EMPLOYEE: DIRECTORY (sorted by ID) --------
    "employee/directory": () => {
      if (!isDirectoryUnlocked()) {
        return pageWrap({
          crumbs: [["Home", "#/home"], ["Company", null], ["Employee Contact", null]],
          title: "Employee Contact",
          lead: "ข้อมูลติดต่อพนักงานถูกป้องกันไว้ กรุณาใส่รหัสเพื่อเข้าดูข้อมูล",
          body: `
            <div class="dir-gate">
              <div class="dir-gate-card anim-up">
                <div class="dir-gate-icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <h3 class="dir-gate-title">Protected Employee Contact</h3>
                <p class="dir-gate-desc">เพื่อความเป็นส่วนตัวของพนักงาน หน้านี้ต้องใช้รหัสก่อนเข้าดูรายชื่อและข้อมูลติดต่อ</p>
                <form class="dir-gate-form" id="dir-gate-form">
                  <input type="password" class="dir-pw-input" id="dir-pw-input" placeholder="กรอกรหัสสำหรับดูข้อมูล" autocomplete="off" />
                  <button type="submit" class="dir-pw-btn" id="dir-pw-btn">${I.lock} ปลดล็อก</button>
                </form>
                <div class="dir-gate-err" id="dir-gate-err" hidden>${I.info} รหัสไม่ถูกต้อง กรุณาลองอีกครั้ง</div>
                <div class="dir-gate-hint">หากยังไม่มีรหัส กรุณาติดต่อ HR</div>
              </div>
            </div>
          `,
        });
      }

      const emps = DATA.records.slice().sort((a, b) => {
        // sort by numeric portion of ID (E001, E002, etc); IDs without numbers go last
        const na = parseInt((a.id || '').replace(/\D/g, ''), 10);
        const nb = parseInt((b.id || '').replace(/\D/g, ''), 10);
        const va = isNaN(na) ? Infinity : na;
        const vb = isNaN(nb) ? Infinity : nb;
        return va - vb;
      });
      const teams = [...new Set(emps.map(e => e.team).filter(Boolean))].sort();
      return pageWrap({
        crumbs: [["Home", "#/home"], ["Company", null], ["Employee Directory", null]],
        title: "Employee Directory",
        lead: "ค้นหาชื่อ อีเมล หรือทีมของเพื่อนร่วมงาน — พิมพ์ค้นได้เลย",
        body: `
          <div class="dir-topbar">
            <span class="dir-mode-badge">${I.lock} Protected Data</span>
            <button class="dir-lock-btn" id="dir-lock-btn" type="button">${I.lock} ล็อกข้อมูล</button>
          </div>

          <div class="dir-toolbar">
            <div class="dir-search">
              <span class="dir-search-ico">${I.search}</span>
              <input type="text" id="dir-q" placeholder="ค้นหาด้วยรหัส, ชื่อ, ชื่อเล่น, อีเมล หรือทีม..." />
            </div>
            <select id="dir-team">
              <option value="">ทุกทีม</option>
              ${teams.map(t => `<option value="${t}">${t}</option>`).join("")}
            </select>
            <div class="dir-count" id="dir-count">${emps.length} คน</div>
          </div>

          <div class="dir-table-wrap">
            <table class="dir-table" id="dir-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>ชื่อ-นามสกุล (EN)</th>
                  <th>ชื่อ (TH)</th>
                  <th>ชื่อเล่น</th>
                  <th>ทีม</th>
                  <th>อีเมล</th>
                  <th>เบอร์โทร</th>
                </tr>
              </thead>
              <tbody id="dir-tbody">
                ${emps.map(e => `
                  <tr data-team="${e.team || ''}" data-search="${((e.id || '') + ' ' + (e.fullName || '') + ' ' + (e.thaiName || '') + ' ' + (e.nickname || '') + ' ' + (e.team || '') + ' ' + (e.email || '')).toLowerCase()}">
                    <td class="dir-id">${e.id || '—'}</td>
                    <td>${e.fullName || '—'}</td>
                    <td>${e.thaiName || '—'}</td>
                    <td>${e.nickname || '—'}</td>
                    <td>${e.team ? `<span class="dir-tag">${e.team}</span>` : '<span class="dir-muted">—</span>'}</td>
                    <td>${e.email ? `<a href="mailto:${e.email}" class="dir-email">${e.email}</a>` : '<span class="dir-muted">—</span>'}</td>
                    <td>${e.mobile || '<span class="dir-muted">—</span>'}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
            <div id="dir-empty" class="dir-empty" hidden>ไม่พบข้อมูลที่ตรงกัน</div>
          </div>

          <div class="callout" style="margin-top:24px;">
            <span class="ic">${I.info}</span>
            <div>
              <h4>หาไม่เจอ?</h4>
              <p>ลองถามพี่เลี้ยง หรือส่งเมลหา HR ที่ <a href="mailto:hr@exzyteam.com">hr@exzyteam.com</a> ได้เลย</p>
            </div>
          </div>
        `,
      });
    },

    // -------- WORK POLICY (all pages share accordion-style detailed body) --------
    // -------- WORK POLICY: CORE VALUES (เดิมเรียก Code of Conduct) --------
    "policy/code-of-conduct": () => pageWrap({
      crumbs: [["Home", "#/home"], ["Work Policy", null], ["Core Values", null]],
      title: "EXZY Core Values",
      lead: "Excellence by design, Advance by technology — 5 ค่านิยมที่คุณจะได้ยิน ได้ใช้ และได้เห็นทุกวันที่นี่",
      body: `
        <div class="cv-stack">

          <div class="cv-card cv-c1 anim-up" data-delay="0">
            <div class="cv-card-bg-num">01</div>
            <div class="cv-card-inner">
              <div class="cv-card-left">
                <div class="cv-chip">01</div>
                <h3 class="cv-name">Win as a Team</h3>
                <p class="cv-sub">รู้เป้าหมายร่วมกัน ทำงานหนักในส่วนของตน และช่วยเหลือทีมให้ไปถึงเป้าหมายด้วยกัน</p>
              </div>
              <div class="cv-card-right">
                <div class="cv-pt"><span class="cv-pt-key">Goal</span><span class="cv-pt-val">รู้เป้าหมายของทีม วางแผนเพื่อบรรลุเป้าหมายเดียวกัน</span></div>
                <div class="cv-pt"><span class="cv-pt-key">Work+</span><span class="cv-pt-val">รับผิดชอบงานในส่วนตัวเองอย่างดี เพื่อให้ทีมบรรลุเป้าหมายได้ทันเวลา</span></div>
                <div class="cv-pt"><span class="cv-pt-key">Support</span><span class="cv-pt-val">ปรับตัวและสนับสนุนทีม สื่อสารทุกครั้งที่พบอุปสรรค</span></div>
              </div>
            </div>
          </div>

          <div class="cv-card cv-c2 anim-up" data-delay="80">
            <div class="cv-card-bg-num">02</div>
            <div class="cv-card-inner">
              <div class="cv-card-left">
                <div class="cv-chip">02</div>
                <h3 class="cv-name">Innovative</h3>
                <p class="cv-sub">กล้าคิดนอกกรอบ เรียนรู้สิ่งใหม่อยู่เสมอ และสร้างคุณค่าจากเทคโนโลยี</p>
              </div>
              <div class="cv-card-right">
                <div class="cv-pt"><span class="cv-pt-key">Value added</span><span class="cv-pt-val">สร้างคุณค่าใหม่ด้วย technology</span></div>
                <div class="cv-pt"><span class="cv-pt-key">Learn &amp; Improve</span><span class="cv-pt-val">อัปสกิลตัวเองอยู่เสมอ ไม่หยุดพัฒนา</span></div>
                <div class="cv-pt"><span class="cv-pt-key">Take risk</span><span class="cv-pt-val">ประเมินความเสี่ยง แล้วกล้าตัดสินใจ</span></div>
              </div>
            </div>
          </div>

          <div class="cv-card cv-c3 anim-up" data-delay="160">
            <div class="cv-card-bg-num">03</div>
            <div class="cv-card-inner">
              <div class="cv-card-left">
                <div class="cv-chip">03</div>
                <h3 class="cv-name">Positive &amp; Open</h3>
                <p class="cv-sub">มีพลังงานที่ดี เปิดรับฟังทุกความคิดเห็น และพูดตรงไปตรงมาอย่างสร้างสรรค์</p>
              </div>
              <div class="cv-card-right">
                <div class="cv-pt"><span class="cv-pt-key">Energy</span><span class="cv-pt-val">กระตือรือร้น สร้างบรรยากาศการทำงานที่ดี</span></div>
                <div class="cv-pt"><span class="cv-pt-key">Listening</span><span class="cv-pt-val">เปิดใจรับฟังไอเดียและความคิดเห็นที่แตกต่าง</span></div>
                <div class="cv-pt"><span class="cv-pt-key">Speaking</span><span class="cv-pt-val">สื่อสารอย่างจริงใจ ให้ feedback เพื่อพัฒนากัน</span></div>
              </div>
            </div>
          </div>

          <div class="cv-card cv-c4 anim-up" data-delay="240">
            <div class="cv-card-bg-num">04</div>
            <div class="cv-card-inner">
              <div class="cv-card-left">
                <div class="cv-chip">04</div>
                <h3 class="cv-name">Professional &amp; Dynamic</h3>
                <p class="cv-sub">ทำงานอย่างมืออาชีพ ยืดหยุ่นได้ และส่งมอบงานตามที่รับปากเสมอ</p>
              </div>
              <div class="cv-card-right">
                <div class="cv-pt"><span class="cv-pt-key">Adapt</span><span class="cv-pt-val">ปรับตัวได้เร็วในทุกสถานการณ์</span></div>
                <div class="cv-pt"><span class="cv-pt-key">Commit</span><span class="cv-pt-val">ทำตามสิ่งที่รับปาก ส่งงานได้ตามกำหนด</span></div>
                <div class="cv-pt"><span class="cv-pt-key">Prepare &amp; Reliable</span><span class="cv-pt-val">เตรียมตัวก่อนทุกครั้ง มีความน่าเชื่อถือในทุกงาน</span></div>
              </div>
            </div>
          </div>

          <div class="cv-card cv-c5 anim-up" data-delay="320">
            <div class="cv-card-bg-num">05</div>
            <div class="cv-card-inner">
              <div class="cv-card-left">
                <div class="cv-chip">05</div>
                <h3 class="cv-name">Aesthetic Design</h3>
                <p class="cv-sub">ทุกงานต้องสะอาด เรียบร้อย สวยงาม และสร้างประสบการณ์ที่ดีในทุกจุดสัมผัส</p>
              </div>
              <div class="cv-card-right">
                <div class="cv-pt"><span class="cv-pt-key">Tidiness</span><span class="cv-pt-val">สะอาด เรียบร้อย ทั้งการแต่งกายและการจัดการงาน</span></div>
                <div class="cv-pt"><span class="cv-pt-key">Good Experience</span><span class="cv-pt-val">ส่งมอบสิ่งที่ผู้รับได้รับประสบการณ์ที่ดี</span></div>
                <div class="cv-pt"><span class="cv-pt-key">WOW &amp; Cool</span><span class="cv-pt-val">ทำงานให้น่าประทับใจ โดดเด่น และเกินความคาดหวัง</span></div>
              </div>
            </div>
          </div>

        </div>

        <div class="callout" style="margin-top:36px;">
          <span class="ic">${I.sparkle}</span>
          <div>
            <h4>นำ Core Values ไปใช้ในการทำงาน</h4>
            <p>ค่านิยมเหล่านี้เป็นแกนหลักของการทำงานที่นี่ — Intern ที่ใช้มันจริง ๆ ในการทำงานทุกวัน มีโอกาสได้รับการพิจารณาเป็นพนักงานประจำหลังจบฝึกงาน</p>
          </div>
        </div>


      `,
    }),

    "policy/internship": () => pageWrap({
      crumbs: [["Home", "#/home"], ["Work Policy", null], ["Internship Policy", null]],
      title: "Internship Policy",
      lead: "ไม่ต้องจำทุกอย่าง — อ่านครั้งเดียวก่อน แล้วกลับมาดูได้เสมอเมื่อมีข้อสงสัย",
      body: `
        <!-- Hours visual — redesigned -->
        <div class="hours-hero">
          <div class="hours-main">
            <div class="hours-time-badge">10:00 – 19:00</div>
            <div class="hours-subtitle">เวลาฝึกงาน · จันทร์ – ศุกร์</div>
          </div>
          <div class="hours-divider"></div>
          <div class="hours-stats">
            <div class="hours-stat">
              <span class="hours-stat-num">8</span>
              <span class="hours-stat-label">ชั่วโมงต่อวัน</span>
            </div>
            <div class="hours-stat">
              <span class="hours-stat-num">1</span>
              <span class="hours-stat-label">ชม. พักเที่ยง</span>
              <span class="hours-stat-detail">12:00 – 13:00</span>
            </div>
            <div class="hours-stat">
              <span class="hours-stat-num">15</span>
              <span class="hours-stat-label">วันหยุด / ปี</span>
            </div>
          </div>
        </div>

        <!-- Day timeline — proportional linear bar -->
        <h2 style="margin-top:48px;">ตารางวันทำงานทั่วไป</h2>
        <div class="day-timeline">
          <div class="day-tl-track">
            <div class="day-tl-seg day-tl-morning" style="flex:2">
              <span class="day-tl-ts">10:00</span>
            </div>
            <div class="day-tl-seg day-tl-lunch" style="flex:1">
              <span class="day-tl-ts">12:00</span>
            </div>
            <div class="day-tl-seg day-tl-afternoon" style="flex:6">
              <span class="day-tl-ts">13:00</span>
            </div>
            <span class="day-tl-ts day-tl-end">19:00</span>
          </div>
          <div class="day-tl-labels">
            <div class="day-tl-lbl" style="flex:2">
              <span class="day-tl-name">ช่วงเช้า</span>
              <span class="day-tl-dur">ทำงาน · 2 ชม.</span>
            </div>
            <div class="day-tl-lbl" style="flex:1">
              <span class="day-tl-name">🍽 พักเที่ยง</span>
              <span class="day-tl-dur">1 ชม.</span>
            </div>
            <div class="day-tl-lbl" style="flex:6">
              <span class="day-tl-name">ช่วงบ่าย</span>
              <span class="day-tl-dur">ทำงาน · 6 ชม.</span>
            </div>
          </div>
        </div>

        <h2 style="margin-top:48px;">ข้อกำหนดสำคัญ</h2>
        <div class="rule-grid">
          <div class="rule-card">
            <div class="rule-icon">${I.door}</div>
            <div class="rule-body">
              <h4>มาออฟฟิศหรือสถานที่ที่ Assign เท่านั้น</h4>
              <p>ต้องเข้าฝึกที่บริษัทหรือสถานที่ที่ทีมกำหนด — <strong>ไม่อนุญาต WFH</strong> สำหรับ Intern</p>
            </div>
          </div>
          <div class="rule-card">
            <div class="rule-icon">${I.clock}</div>
            <div class="rule-body">
              <h4>ลงเวลาเข้า – ออกทุกวัน</h4>
              <p>กรอก Timesheet ทุกวันที่มา — บริษัทเซ็นรับรองตามชั่วโมงฝึกงานจริง ไม่ต้องเดา</p>
            </div>
          </div>
          <div class="rule-card">
            <div class="rule-icon">${I.doc}</div>
            <div class="rule-body">
              <h4>ดูแลชั่วโมงตัวเองด้วยนะ</h4>
              <p>บริหารชั่วโมงฝึกงานและเอกสารต่าง ๆ เองเลย — พี่เลี้ยงช่วยแนะนำได้ แต่ต้องติดตามเองด้วย</p>
            </div>
          </div>
          <div class="rule-card">
            <div class="rule-icon">${I.calendar}</div>
            <div class="rule-body">
              <h4>วันหยุดบริษัท 15 วัน</h4>
              <p>Subscribe Staff holiday calendar ไว้ได้เลย — จะได้ไม่พลาดวันหยุดของบริษัท</p>
            </div>
          </div>
        </div>

        <div class="page-cta-strip">
          <div>
            <h4>อ่าน Policy แล้ว — ไปดู Timesheet กันต่อ</h4>
            <p>กรอกให้ถูกต้อง ส่งทุกสิ้นเดือน แล้วจะได้รับเบี้ยเลี้ยงตรงเวลา</p>
          </div>
          <div class="cta-btns">
            <a href="#/resources/timesheet" class="btn btn-primary" data-link>ดู Timesheet ${I.arrow}</a>
          </div>
        </div>
      `,
    }),

    "policy/dress-code": () => pageWrap({
      crumbs: [["Home", "#/home"], ["Work Policy", null], ["Dress Code", null]],
      title: "Dress Code",
      lead: "แต่งตัวยังไงดี? — แนวทางการแต่งกายที่ EXZY ตามแต่ละสถานการณ์ ดูไว้เป็นแนวทางได้เลย",
      body: `
        <div class="dress-hero">
          <div class="dress-text">
            <div class="dress-tag">EXZY Core Value · Tidiness</div>
            <h3>สะอาด เรียบร้อย เหมาะสม</h3>
            <p>"พร้อม สะอาดเรียบร้อย เตรียมการแต่งกายให้เหมาะสม" — ตามที่ระบุใน EXZY Core Values การแต่งกายที่ดีคือส่วนหนึ่งของความเป็นมืออาชีพและสะท้อนค่านิยมของบริษัท</p>
          </div>
          <div class="dress-image">
            <img src="dress-code-reference.png" alt="EXZY professional dress example" />
          </div>
        </div>

        <h2 style="margin-top:48px;">การแต่งกายในแต่ละสถานการณ์</h2>
        <div class="dress-grid">
          <div class="dress-card">
            <div class="dress-icon dress-icon-1">${I.shirt}</div>
            <h4>วันทำงานปกติ</h4>
            <p class="dress-style">Smart Casual</p>
            <ul>
              <li>เสื้อโปโล / เสื้อเชิ้ต</li>
              <li>กางเกงผ้า / กางเกงยีนสีเข้ม</li>
              <li>รองเท้าผ้าใบ / รองเท้าคัทชู สีสุภาพ</li>
            </ul>
          </div>
          <div class="dress-card">
            <div class="dress-icon dress-icon-2">${I.people}</div>
            <h4>มีนัดพบลูกค้า</h4>
            <p class="dress-style">Business Casual</p>
            <ul>
              <li>เสื้อเชิ้ตหรือเบลเซอร์</li>
              <li>กางเกง / กระโปรงทรงสุภาพ</li>
              <li>รองเท้าหุ้มส้นหรือคัทชู</li>
            </ul>
          </div>
          <div class="dress-card">
            <div class="dress-icon dress-icon-3">${I.sparkle}</div>
            <h4>วันศุกร์ / กิจกรรม</h4>
            <p class="dress-style">Casual Friday</p>
            <ul>
              <li>เสื้อยืดสะอาด ไม่มีลายผิดกาลเทศะ</li>
              <li>กางเกงยีน / กางเกง chino</li>
              <li>รองเท้าผ้าใบ</li>
            </ul>
          </div>
        </div>

        <h2 style="margin-top:48px;">สิ่งที่ไม่ควรใส่</h2>
        <div class="dress-dont">
          <div class="dont-item"><span class="dont-x">✕</span> เสื้อกล้าม / เสื้อแขนกุด</div>
          <div class="dont-item"><span class="dont-x">✕</span> กางเกงขาสั้น (เหนือเข่า)</div>
          <div class="dont-item"><span class="dont-x">✕</span> รองเท้าแตะ</div>
          <div class="dont-item"><span class="dont-x">✕</span> เสื้อผ้ารัดรูป / โป๊เปลือยเกินไป</div>
          <div class="dont-item"><span class="dont-x">✕</span> เสื้อที่มีลายไม่เหมาะสมในที่ทำงาน</div>
          <div class="dont-item"><span class="dont-x">✕</span> ชุดออกกำลังกาย</div>
        </div>

        <div class="callout anim-up">
          <span class="ic">${I.sparkle}</span>
          <div>
            <h4>เมื่อไม่แน่ใจ ให้สังเกตทีม</h4>
            <p>ไม่แน่ใจก็ไม่เป็นไร — ลองดูว่าพี่ ๆ ในทีมแต่งยังไง หรือจะถามตรง ๆ ก็ได้เลย โดยเฉพาะวันที่มีนัดพิเศษ</p>
          </div>
        </div>


      `,
    }),

    "policy/leave": () => pageWrap({
      crumbs: [["Home", "#/home"], ["Work Policy", null], ["Leave & Absence", null]],
      title: "Leave & Absence",
      lead: "ป่วย หรือมีธุระ — บอกพี่เลี้ยงและส่งอีเมล HR ได้เลย ทำตามขั้นตอนนี้",
      body: `
        <div class="callout anim-up">
          <span class="ic">${I.info}</span>
          <div>
            <h4>การลาจะไม่สามารถเก็บชั่วโมงการฝึกงานได้</h4>
            <p>บริษัทเซ็นรับรองตามชั่วโมงฝึกงานจริงเท่านั้น — ลาบ่อยอาจส่งผลต่อชั่วโมงที่ต้องส่งสถาบัน จัดการวันลาให้ดีนะ</p>
          </div>
        </div>

        <h2>วิธีการลางาน</h2>
        <ul>
          <li><strong>1. แจ้งขอลา</strong> กับ Teamlead และ Senior</li>
          <li><strong>2. ส่ง Email แจ้งการลา</strong> ให้กับ HR ที่ <a href="mailto:hr@exzyteam.com">hr@exzyteam.com</a></li>
          <li><strong>3. CC Email</strong> Teamlead และ Senior</li>
        </ul>

        <h2>กำหนดเวลาแจ้งลา</h2>
        <div class="kv-list">
          <div class="kv-row">
            <div class="k">ลาป่วย</div>
            <div class="v">ส่งเรื่องขอลา <strong>ภายใน 11:00 น.</strong> ของวันที่ลางาน</div>
          </div>
          <div class="kv-row">
            <div class="k">ลากิจธุระ</div>
            <div class="v">ส่งเรื่องลา <strong>ล่วงหน้า 1 วันทำการ</strong></div>
          </div>
        </div>

        <div class="callout anim-up">
          <span class="ic">${I.shield}</span>
          <div>
            <h4>การลาที่มากเกินไป</h4>
            <p>ถ้าลาบ่อยจนเกินไปและทีมเห็นว่าไม่เหมาะสม บริษัทอาจพิจารณายุติการฝึกงานและแจ้งมหาวิทยาลัย — เปิดใจคุยกับพี่เลี้ยงก่อนเสมอนะ</p>
          </div>
        </div>


      `,
    }),

    // -------- RESOURCES: HANDBOOK --------
    // -------- RESOURCES: TIMESHEET --------
    "resources/timesheet": () => pageWrap({
      crumbs: [["Home", "#/home"], ["Resources", null], ["Timesheet", null]],
      title: "Intern Timesheet",
      lead: "กรอกทุกวัน ส่งทุกสิ้นเดือน — แค่นี้เลย ดูตัวอย่างและวิธีกรอกได้ที่นี่",
      body: `
        <div class="callout anim-up">
          <span class="ic">${I.mail}</span>
          <div>
            <h4>HR จะส่งไฟล์ Timesheet ให้ทางอีเมล</h4>
            <p>HR จะส่งไฟล์ Timesheet (Excel) มาให้ทางอีเมลตั้งแต่วันแรก — กรอกทุกวัน แล้วส่งกลับให้ HR ทุกสิ้นเดือนได้เลย</p>
          </div>
        </div>

        <h2>ตัวอย่างเอกสาร Timesheet</h2>
        <p>เอกสาร Timesheet ของ EXZY มีรูปแบบดังนี้ — สามารถใช้เป็นเอกสารอ้างอิงเมื่อกรอกข้อมูล</p>
        <figure class="ts-figure">
          <img src="timesheet-sample.png" alt="ตัวอย่างเอกสาร Intern Timesheet ของ EXZY" />
          <figcaption>ตัวอย่าง Intern Timesheet · ส่งให้ HR ทุกสิ้นเดือนของการฝึกงาน</figcaption>
        </figure>

        <h2 style="margin-top:48px;">คอลัมน์ที่ต้องกรอก</h2>
        <div class="ts-cols">
          <div class="ts-col anim-up"><span class="ts-col-num">1</span><div><strong>Date</strong><span>วันที่ฝึกงาน</span></div></div>
          <div class="ts-col anim-up"><span class="ts-col-num">2</span><div><strong>Time In / Time Out</strong><span>เวลาเข้า – ออก (10:00 – 19:00 น.)</span></div></div>
          <div class="ts-col anim-up"><span class="ts-col-num">3</span><div><strong>Project Name</strong><span>ชื่อโปรเจกต์ที่ทำในวันนั้น</span></div></div>
          <div class="ts-col anim-up"><span class="ts-col-num">4</span><div><strong>Summary of Task</strong><span>สรุปงานที่ทำในแต่ละวัน</span></div></div>
          <div class="ts-col anim-up"><span class="ts-col-num">5</span><div><strong>Location</strong><span>สถานที่ฝึกงาน (เช่น EXZY Office)</span></div></div>
          <div class="ts-col anim-up"><span class="ts-col-num">6</span><div><strong>Total Hours</strong><span>ชั่วโมงรวมในวันนั้น (มาตรฐาน 8)</span></div></div>
          <div class="ts-col anim-up"><span class="ts-col-num">7</span><div><strong>Incharge Name</strong><span>ชื่อพี่เลี้ยง / Supervisor</span></div></div>
        </div>

        <h2 style="margin-top:48px;">วิธีกรอกและส่ง Timesheet</h2>
        <div class="howto">
          <div class="howto-step anim-up">
            <div class="num">1</div>
            <h4>รับไฟล์จาก HR</h4>
            <p>HR จะส่งไฟล์ Excel Intern Timesheet ให้คุณทางอีเมล</p>
          </div>
          <div class="howto-step anim-up">
            <div class="num">2</div>
            <h4>กรอกทุกวัน</h4>
            <p>กรอกข้อมูลในวันที่ฝึกงานจริง ระบุงานที่ทำและเวลา</p>
          </div>
          <div class="howto-step anim-up">
            <div class="num">3</div>
            <h4>ระบุการลา</h4>
            <p>วันหยุด/ลาป่วย/ลากิจ ระบุประเภทในคอลัมน์ Summary</p>
          </div>
          <div class="howto-step anim-up">
            <div class="num">4</div>
            <h4>ส่งทุกสิ้นเดือน</h4>
            <p>ส่งไฟล์กลับให้ HR ทุกสิ้นเดือน (วันที่ 30–31)</p>
          </div>
        </div>

        <h2 style="margin-top:48px;">เอกสารที่ต้องส่งให้ HR ทุกเดือน</h2>
        <p>กำหนดส่งวันที่ <strong>30–31 ของทุกเดือน</strong> — เพื่อขอรับเบี้ยเลี้ยงรายเดือน</p>
        <ul>
          <li><strong>สำเนาบัตรประชาชน</strong> — ส่งทุกเดือน</li>
          <li><strong>เอกสาร Intern Timesheet</strong> — ส่งทุกเดือน</li>
          <li><strong>สำเนา Bookbank — KBank</strong> — ส่งแค่เดือนแรก</li>
        </ul>

        <div class="callout anim-up">
          <span class="ic">${I.mail}</span>
          <div>
            <h4>ส่งเอกสารให้</h4>
            <p>HR: <a href="mailto:hr@exzyteam.com"><strong>hr@exzyteam.com</strong></a> · พร้อม CC Teamlead และ Senior</p>
          </div>
        </div>

        <div class="page-cta-strip">
          <div>
            <h4>ยังมีคำถามอีกไหม?</h4>
            <p>มีคำถามที่ Intern ถามบ่อยรวมไว้ใน FAQs — ดูได้เลย อาจมีคำตอบที่กำลังหาอยู่พอดี</p>
          </div>
          <div class="cta-btns">
            <a href="#/resources/faqs" class="btn btn-primary" data-link>ดู FAQs ${I.arrow}</a>
          </div>
        </div>
      `,
    }),

    // -------- RESOURCES: FAQS --------
    "resources/faqs": () => pageWrap({
      crumbs: [["Home", "#/home"], ["Resources", null], ["FAQs", null]],
      title: "Frequently Asked Questions",
      lead: "รวมคำถามที่ Intern ถามบ่อยที่สุด — เช็คตรงนี้ก่อน แล้วอาจไม่ต้องถามพี่เลย",
      body: `
        <div class="faq-section">
          <h2 class="faq-section-title">
            <span class="faq-section-ico">${I.doc}</span>
            เรื่องการทำงาน
          </h2>
          <div class="accordion">
            ${acc(
        "1. วันแรกของการฝึกงาน ต้องเตรียมอะไรบ้าง?",
        "มาถึงออฟฟิศประมาณ 9:45 น. (ก่อนเวลา 10:00 น.) · พบกับ HR ที่ลงทะเบียน · เตรียมสำเนาบัตรประชาชนและสำเนา Bookbank ของ KBank (ใช้แค่เดือนแรก) · พร้อมโน้ตบุ๊กของตัวเองหากมี · อ่าน Orientation ของ EXZY ล่วงหน้าได้จากเมนู <a href=\"#/getting-started/orientation\" data-link>Orientation</a>"
      )}
            ${acc(
        "2. Wi-Fi ใช้รหัสอะไร? เชื่อมต่อยังไง?",
        "<strong>Staff Wi-Fi:</strong> SSID <code>ExzyUniFi</code> · Password <code>maetyzxe</code><br/><strong>Guest Wi-Fi:</strong> SSID <code>Exzy_Guest</code> · Password <code>imaguest</code><br/>ไปที่หน้า <a href=\"#/getting-started/wifi\" data-link>Office Wi-Fi</a> เพื่อสแกน QR code เชื่อมต่อได้ทันที"
      )}
            ${acc(
        "3. เวลาฝึกงานเป็นยังไง? พักกลางวันกี่โมง?",
        "เวลาฝึก <strong>10:00 – 19:00 น.</strong> · พักกลางวัน <strong>12:00 – 13:00 น.</strong> · วันละ 8 ชั่วโมง · มีวันหยุดประจำปี 15 วัน · กรุณา subscribe Staff holiday calendar เพื่อดูวันหยุด"
      )}
            ${acc(
        "4. Timesheet ส่งยังไง? ส่งเมื่อไหร่?",
        "HR จะส่งไฟล์ Excel Timesheet ให้คุณทางอีเมลตั้งแต่วันแรก · กรอกเวลาเข้า-ออกงานและรายละเอียดที่ทำในแต่ละวัน · ส่งกลับให้ HR ทุกสิ้นเดือน (วันที่ 30–31) · ดูคอลัมน์และวิธีกรอกที่หน้า <a href=\"#/resources/timesheet\" data-link>Timesheet</a>"
      )}
            ${acc(
        "5. เบี้ยเลี้ยงเท่าไหร่? ต้องส่งเอกสารอะไรบ้าง?",
        "<strong>วันละ 200 บาท</strong> เมื่อเข้าฝึกงานที่บริษัท · <strong>วันละ 300 บาท</strong> เมื่อเข้าฝึกงานนอกสถานที่<br/>เอกสารที่ต้องส่ง (กำหนดส่งวันที่ 30–31 ของทุกเดือน):<br/>· สำเนาบัตรประชาชน (ส่งทุกเดือน)<br/>· เอกสาร Intern Timesheet (ส่งทุกเดือน)<br/>· สำเนา Bookbank KBank (ส่งแค่เดือนแรก)"
      )}
            ${acc(
        "6. ฝึกงานที่บ้าน (WFH) ได้ไหม?",
        "<strong>ไม่ได้</strong> — Intern ต้องเข้าฝึกที่บริษัทหรือสถานที่ที่ทีม Assign เท่านั้น ทางบริษัทไม่อนุญาตให้ขอฝึกงานจากที่บ้าน"
      )}
          </div>
        </div>

        <div class="faq-section">
          <h2 class="faq-section-title">
            <span class="faq-section-ico">${I.help}</span>
            เรื่องการลา / ป่วย / กิจธุระ
          </h2>
          <div class="accordion">
            ${acc(
        "7. รู้สึกไม่สบาย มาทำงานไม่ไหว ทำยังไง?",
        "<strong>1.</strong> แจ้ง Teamlead และ Senior ทันทีตอนตื่นนอน<br/><strong>2.</strong> ส่งอีเมลแจ้งลาถึง <a href=\"mailto:hr@exzyteam.com\">hr@exzyteam.com</a> <strong>ก่อน 11:00 น.</strong> ของวันที่ลา<br/><strong>3.</strong> CC อีเมล Teamlead และ Senior ด้วย<br/>· ในอีเมลให้ระบุอาการพอเข้าใจและจำนวนวันที่จะหยุด · ระบุประเภทเป็น \"Sick Leave\" ใน Timesheet · วันที่ลาจะไม่นับเป็นชั่วโมงฝึกงาน"
      )}
            ${acc(
        "8. มีธุระต้องลา ทำยังไง?",
        "ส่งอีเมลแจ้งลา <strong>ล่วงหน้า 1 วันทำการ</strong> ไปที่ HR + CC Teamlead/Senior · ระบุเหตุผลพอเข้าใจ · พยายามลาเท่าที่จำเป็นเพราะการลาไม่นับเป็นชั่วโมงฝึกงาน"
      )}
            ${acc(
        "9. ลาเรียน / ลาสอบ ทำยังไง?",
        "ติดต่อ HR ล่วงหน้าและแจ้งกำหนดการเรียน/สอบของมหาวิทยาลัย · HR และ Teamlead จะพิจารณาเป็นรายกรณี · สำหรับการสอบหรือกิจกรรมมหาวิทยาลัยสำคัญ ๆ ปกติบริษัทจะให้ความร่วมมือ"
      )}
          </div>
        </div>

        <div class="faq-section">
          <h2 class="faq-section-title">
            <span class="faq-section-ico">${I.people}</span>
            ชีวิตในออฟฟิศ
          </h2>
          <div class="accordion">
            ${acc(
        "10. พักกลางวันทานข้าวที่ไหนดี?",
        "ออฟฟิศ EXZY ตั้งอยู่ที่ตึก Metropolis ซึ่งมีร้านอาหารและคาเฟ่หลายร้านอยู่บริเวณรอบ ๆ:<br/>· <strong>ในตึก Metropolis</strong> — มีร้านอาหารและร้านกาแฟชั้น G<br/>· <strong>ห้างใกล้เคียง</strong> — มีตัวเลือกร้านอาหารหลากหลายราคา<br/>· <strong>Food delivery</strong> — สั่ง LineMan / GrabFood / Foodpanda มาทานที่ออฟฟิศ<br/>วันแรก ๆ แนะนำให้ลองชวนพี่ในทีมไปทานด้วย จะได้รู้จักร้านที่ทีมเค้าชอบ"
      )}
            ${acc(
        "11. ร้านอาหารใกล้ออฟฟิศ ร้านไหนแนะนำ?",
        "แต่ละทีมมีร้านโปรดแตกต่างกัน — แนะนำให้ลองทักทายและถามพี่ในทีม จะได้ลองร้านใหม่ ๆ ตามที่พี่เค้าแนะนำ · กิจกรรม Dining ประจำเดือนของทีมก็เป็นโอกาสดีในการลองร้านใหม่ ๆ ร่วมกัน"
      )}
            ${acc(
        "12. จองห้องประชุมยังไง?",
        "จองได้ 3 ช่องทาง: <strong>Website</strong> ที่ exzyoffice.exzycloud.com · <strong>แผงหน้าจอหน้าห้อง</strong> — แตะเพื่อดูตารางและจองช่วงว่าง · <strong>App W+</strong> บนมือถือ · ดูรายละเอียดห้องทั้งหมดและข้อมูลเพิ่มเติมที่หน้า <a href=\"#/getting-started/meeting-rooms\" data-link>Meeting Rooms</a>"
      )}
            ${acc(
        "13. ปริ้นเอกสารหรือสแกนเอกสาร ทำยังไง?",
        "ออฟฟิศมีเครื่องปริ้น/สแกนสำหรับใช้งาน — สอบถามพี่เลี้ยงหรือพี่ในทีมเรื่องการเข้าถึงเครื่องและการตั้งค่า · สำหรับการพิมพ์เอกสารส่วนตัว (เช่น สำเนาบัตรประชาชนสำหรับยื่นกับ HR) แนะนำให้เตรียมมาจากที่บ้าน"
      )}
          </div>
        </div>

        <div class="faq-section">
          <h2 class="faq-section-title">
            <span class="faq-section-ico">${I.rocket}</span>
            การทำงานและการเติบโต
          </h2>
          <div class="accordion">
            ${acc(
        "14. ต้องทำโปรเจกต์อะไรบ้างระหว่างฝึกงาน?",
        "Intern จะต้องรับผิดชอบโปรเจกต์ 3 ประเภท:<br/><strong>1. Project / Report</strong> — โปรเจกต์ที่นำส่งมหาวิทยาลัย<br/><strong>2. Dev Team Project</strong> — โปรเจกต์ที่ Dev Team led by EXZY Assign ให้<br/><strong>3. HR / BD Project</strong> — โปรเจกต์ที่ HR หรือ BD Assign ให้<br/>ทั้ง 3 ข้อต้องส่งตามระยะเวลาที่ทางมหาวิทยาลัยและ EXZY กำหนด"
      )}
            ${acc(
        "15. ถ้าทำงานไม่ทันส่ง ต้องบอกใคร?",
        "<strong>บอกพี่เลี้ยงทันทีที่รู้ตัว</strong> ว่าจะส่งไม่ทัน — ห้ามเงียบหรือรอจนถึงวัน deadline · พี่เลี้ยงจะช่วยปรับ scope งานหรือยืดเวลาตามที่เหมาะสม · เป็นสิ่งที่สะท้อน Core Value \"Positive Speaking\" — สื่อสารตรงไปตรงมาเมื่อมีปัญหา"
      )}
            ${acc(
        "16. ไม่เข้าใจงานที่ได้รับมอบหมาย ทำยังไง?",
        "<strong>ถามพี่เลี้ยงทันที</strong> — ไม่ต้องเก็บไว้คนเดียว · เขียน notes ก่อนถามว่าตรงไหนที่ไม่เข้าใจ จะช่วยให้พี่เลี้ยงตอบได้ตรงประเด็น · ปกติพี่เลี้ยงจะใช้เวลา 15–30 นาทีในการอธิบายและตอบคำถามได้สบาย ๆ"
      )}
            ${acc(
        "17. หลังจบฝึกงาน มีโอกาสเป็นพนักงานประจำไหม?",
        "<strong>มี</strong> — Intern ที่มีผลงานโดดเด่นและปฏิบัติตาม EXZY Core Values ครบจะได้รับการพิจารณาเป็นพนักงานประจำ ขึ้นอยู่กับตำแหน่งที่เปิดรับ · อ่าน <a href=\"#/policy/code-of-conduct\" data-link>Core Values</a> เพื่อเข้าใจสิ่งที่บริษัทประเมิน"
      )}
            ${acc(
        "18. จบฝึกงานแล้วต้องทำอะไรบ้าง?",
        "ในสัปดาห์สุดท้าย:<br/>· ส่ง Project / Report ฉบับสุดท้ายให้พี่เลี้ยง<br/>· เขียน Blog แบ่งปันประสบการณ์ (Internal และ/หรือ Public)<br/>· นัดประเมินผลกับพี่เลี้ยง<br/>· ขอเอกสารรับรองการฝึกงานจาก HR · ส่ง Timesheet เดือนสุดท้าย"
      )}
          </div>
        </div>

        <div class="callout" style="margin-top:32px;">
          <span class="ic">${I.mail}</span>
          <div>
            <h4>มีคำถามอื่น ๆ?</h4>
            <p>ถามพี่เลี้ยงโดยตรง หรือส่งอีเมลถึง HR ที่ <a href="mailto:hr@exzyteam.com"><strong>hr@exzyteam.com</strong></a></p>
          </div>
        </div>

        <div class="page-cta-strip">
          <div>
            <h4>พร้อมดูผลงานและประสบการณ์ของรุ่นพี่?</h4>
            <p>Intern รุ่นก่อนฝากประสบการณ์ บทความ และ Project ไว้ที่ Showcase</p>
          </div>
          <div class="cta-btns">
            <a href="#/showcase/experiences" class="btn btn-ghost" data-link>Intern Experiences ${I.arrow}</a>
            <a href="#/showcase/blog" class="btn btn-primary" data-link>Intern Blog ${I.arrow}</a>
          </div>
        </div>
      `,
    }),

    // -------- SHOWCASE: EXPERIENCES --------
    "showcase/experiences": () => showcasePage("experiences"),
    "showcase/projects": () => showcasePage("projects"),
    "showcase/blog": () => showcasePage("blog"),
  };

  // ===== Helpers =====
  function qCard(icon, title, desc, href, feature = false) {
    return `
      <a href="${href}" class="card ${feature ? 'card-feature' : ''} is-link fade-up" data-link>
        <div class="icon-wrap">${I[icon]}</div>
        <h3>${title}</h3>
        <p>${desc}</p>
        <span class="card-link">ดูเพิ่ม ${I.arrow}</span>
      </a>
    `;
  }
  function teamCard(badge, title, sub, roles) {
    return `
      <div class="team-card anim-up">
        <div class="team-head">
          <div class="team-badge">${badge}</div>
          <div>
            <h4>${title}</h4>
            <div class="team-sub">${sub}</div>
          </div>
        </div>
        <div class="team-roles">${roles.map(r => `<span>${r}</span>`).join("")}</div>
      </div>
    `;
  }
  function acc(q, a) {
    return `
      <div class="acc-item">
        <button class="acc-trigger">${q}<span class="acc-icon">${I.plus}</span></button>
        <div class="acc-body"><div class="acc-body-inner">${a}</div></div>
      </div>
    `;
  }

  function pageWrap({ crumbs, title, lead, body, toc }) {
    const crumbHtml = crumbs.map(([t, href], i) => {
      const sep = i < crumbs.length - 1 ? ' <span style="opacity:.5; margin:0 6px;">/</span>' : '';
      return href
        ? `<a href="${href}" data-link>${t}</a>${sep}`
        : `<span>${t}</span>${sep}`;
    }).join("");

    const tocHtml = toc ? `
      <aside class="content-sticky">
        <nav class="toc">
          <div class="toc-title">On this page</div>
          ${toc.map(([id, label]) => `<a href="#${id}" data-anchor>${label}</a>`).join("")}
        </nav>
      </aside>
    ` : "";

    return `
      <section class="page-header">
        <div class="section-inner">
          <div class="crumb anim-up">${crumbHtml}</div>
          <h1 class="anim-up" data-delay="70">${title}</h1>
          <p class="page-lead anim-up" data-delay="140">${lead}</p>
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          <div class="${toc ? 'content-grid' : ''}">
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
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttr(s) {
    return escapeHtml(s);
  }

  // Real showcase data only (no mock cards)
  const REAL_SHOWCASE_ITEMS = Object.freeze([
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

    // Keep admin extensibility, but only accept valid external URLs
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

    return `
      <div class="show-real-media show-real-media-link">
        <div class="show-real-preview">
          <div class="show-real-preview-head">${escapeHtml(item.platform)} Preview</div>
          <p>${escapeHtml(item.preview || item.summary || "เปิดลิงก์เพื่ออ่าน/รับชมแบบเต็ม")}</p>
        </div>
      </div>
    `;
  }

  function renderShowcaseCard(item) {
    const safeUrl = escapeAttr(item.url || "#");
    const actionText = item.kind === "video" ? "ดูคลิปเต็ม" : "เปิดลิงก์ต้นฉบับ";
    const meta = item.track ? `<span class="show-real-track">${escapeHtml(item.track)}</span>` : "";
    const canonical = item.canonicalUrl
      ? `<a href="${escapeAttr(item.canonicalUrl)}" target="_blank" rel="noopener" class="show-real-canonical">canonical link ${I.external}</a>`
      : "";

    return `
      <article class="show-real-card fade-up">
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
            ${canonical}
          </div>
        </div>
      </article>
    `;
  }

  function showcasePage(active) {
    const tabs = [
      ["experiences", "Intern Experiences"],
      ["projects", "Intern Projects"],
      ["blog", "Intern's Blog"],
    ];
    const titleMap = {
      experiences: ["Intern Experiences", "รวมประสบการณ์ฝึกงาน — คลิป รีวิว และเรื่องเล่าจาก intern รุ่นพี่ที่เผยแพร่บนแพลตฟอร์มต่าง ๆ"],
      projects: ["Intern Projects", "หน้านี้แสดงเฉพาะผลงานจริงที่ได้รับอนุญาตให้นำเสนอ ตอนนี้กำลังรวบรวมรายการเพิ่มเติม"],
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
    app.innerHTML = renderFn();
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    hydratePage();
    updateActiveNav(route);
  }

  function hydratePage() {
    // ----- Apply admin data to placeholders -----
    const data = loadAdminData();
    document.querySelectorAll("[data-text]").forEach(el => {
      const k = el.getAttribute("data-text");
      // Don't overwrite masked password spans — they show •••••• until toggled
      if (el.getAttribute("data-masked") === "true") return;
      if (data[k] !== undefined && data[k] !== "") el.textContent = data[k];
    });
    document.querySelectorAll("[data-link-key]").forEach(el => {
      const k = el.getAttribute("data-link-key");
      if (data[k]) el.setAttribute("href", data[k]);
    });
    // Orientation slides: if admin has set a Google Slides URL, use that; else show PDF
    const slidesBody = document.getElementById("slides-embed-body");
    if (slidesBody) {
      const slidesUrl = data.orientation_slides_url;
      if (slidesUrl) {
        slidesBody.innerHTML = `<iframe src="${slidesUrl}" class="slides-pdf-frame" allowfullscreen></iframe>`;
      }
      // else keep the PDF iframe that is already rendered in the template
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
    document.querySelectorAll(".wifi-qr[data-qr]").forEach(box => {
      const which = box.getAttribute("data-qr");
      const ssid = which === "staff" ? data.wifi_staff_ssid : data.wifi_guest_ssid;
      const pass = which === "staff" ? data.wifi_staff_pass : data.wifi_guest_pass;
      const wifiStr = `WIFI:T:WPA;S:${ssid};P:${pass};;`;
      try {
        const q = qrcode(0, "L");
        q.addData(wifiStr);
        q.make();
        box.innerHTML = q.createSvgTag({ cellSize: 5, margin: 4, scalable: true });
      } catch (e) {
        box.innerHTML = '<p style="color:var(--muted); font-size:13px; padding:20px;">QR ไม่พร้อมใช้งาน</p>';
      }
    });

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
          // reveal: show real value
          const realVal = loadAdminData()[key] || span.textContent;
          span.textContent = realVal;
          span.setAttribute("data-masked", "false");
          btn.innerHTML = '<span class="pass-toggle-eye"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\"/><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"/></svg></span>ซ่อน';
        } else {
          span.textContent = "••••••••";
          span.setAttribute("data-masked", "true");
          btn.innerHTML = '<span class="pass-toggle-eye"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg></span>แสดง';
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

    // ----- Employee Directory gate / lock -----
    const dirGateForm = document.getElementById("dir-gate-form");
    const dirPwInput = document.getElementById("dir-pw-input");
    const dirGateErr = document.getElementById("dir-gate-err");
    if (dirGateForm && dirPwInput) {
      dirGateForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const typed = dirPwInput.value.trim();
        const expected = getDirectoryAccessKey();
        if (typed && typed === expected) {
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
    // ----- Scroll-triggered animation observer (re-triggers on every scroll) -----
    (function () {
      var els = app.querySelectorAll('.fade-up, .anim-up, .anim-down, .anim-left, .anim-right, .anim-scale');
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
          var siblings = Array.from(parent.querySelectorAll(':scope > .fade-up, :scope > .anim-up, :scope > .anim-scale'));
          var idx = siblings.indexOf(el);
          if (idx > 0) el.setAttribute('data-delay', String(idx * 90));
        }
        io.observe(el);
      });
    })();

    // ----- Scroll-driven Day 1 timeline -----
    (function() {
      var story = app.querySelector('#d1-scroll-story');
      if (!story) return;

      var btns = Array.prototype.slice.call(story.querySelectorAll('.d1-step-btn'));
      var panels = Array.prototype.slice.call(story.querySelectorAll('.d1-panel'));
      var dots = Array.prototype.slice.call(story.querySelectorAll('[data-d1dot]'));
      var slices = Array.prototype.slice.call(story.querySelectorAll('.d1-scroll-slice'));
      var current = story.querySelector('[data-d1-current]');
      var steps = Math.min(btns.length, panels.length);
      if (!steps) return;

      story.style.setProperty('--d1-step-count', String(steps));
      var active = -1;

      function activateStep(idx) {
        idx = Math.max(0, Math.min(steps - 1, idx));
        if (idx === active) return;
        active = idx;
        story.style.setProperty('--d1-progress', String(steps > 1 ? idx / (steps - 1) : 0));
        if (current) current.textContent = String(idx + 1).padStart(2, '0');

        btns.forEach(function(btn, i) {
          btn.classList.toggle('is-active', i === idx);
          btn.classList.toggle('is-done', i < idx);
        });

        dots.forEach(function(dot, i) {
          dot.classList.toggle('is-active', i === idx);
          dot.classList.toggle('is-done', i < idx);
        });

        panels.forEach(function(panel, i) {
          panel.classList.toggle('is-active', i === idx);
          panel.classList.toggle('is-before', i < idx);
          panel.classList.toggle('is-after', i > idx);
        });
      }

      function activateFromScroll() {
        if (window.matchMedia('(max-width: 980px)').matches) return;
        var vh = window.innerHeight || document.documentElement.clientHeight || 1;
        var total = Math.max(story.offsetHeight - vh, 1);
        var raw = (vh * 0.22 - story.getBoundingClientRect().top) / total;
        var progress = Math.max(0, Math.min(1, raw));
        var idx = Math.round(progress * (steps - 1));
        activateStep(idx);
      }

      btns.forEach(function(btn, i) {
        btn.addEventListener('click', function() {
          activateStep(i);
          if (window.matchMedia('(max-width: 980px)').matches) return;
          var slice = slices[i];
          if (!slice) return;
          var top = slice.getBoundingClientRect().top + window.scrollY - (window.innerHeight * 0.24);
          window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        });
      });

      window.removeEventListener('scroll', window.__day1ScrollStory || function() {});
      window.__day1ScrollStory = activateFromScroll;
      window.addEventListener('scroll', activateFromScroll, { passive: true });

      window.removeEventListener('resize', window.__day1ScrollStoryResize || function() {});
      window.__day1ScrollStoryResize = activateFromScroll;
      window.addEventListener('resize', activateFromScroll);

      activateStep(0);
      activateFromScroll();
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
    // mark parent group active too
    document.querySelectorAll(".nav-group").forEach(g => {
      const hasActive = g.querySelector(".nav-menu a.is-active");
      const toggle = g.querySelector(".nav-toggle");
      if (toggle) toggle.classList.toggle("is-active", !!hasActive);
    });
  }

  // ===== Nav dropdown + intercepts =====
  function initNav() {
    const navbar = document.getElementById("navbar");

    // Intercept link clicks
    document.addEventListener("click", e => {
      const a = e.target.closest("a[data-link]");
      if (a) {
        const href = a.getAttribute("href");
        if (href && href.startsWith("#")) {
          // close nav menus
          document.querySelectorAll(".nav-group.open").forEach(g => g.classList.remove("open"));
          if (navbar.classList.contains("mobile-open")) {
            // close after navigation completes so DOM moves don't race
            setTimeout(() => setMobileMenu(false), 50);
          }
        }
      }
    });

    // Dropdown toggles (desktop hover + click)
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

    // Close on outside click
    document.addEventListener("click", e => {
      if (!e.target.closest(".nav-group")) {
        document.querySelectorAll(".nav-group.open").forEach(g => g.classList.remove("open"));
      }
    });

    // Burger — moves Showcase group into main links on mobile so order is preserved
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
        // also close any open dropdowns
        document.querySelectorAll(".nav-group.open").forEach(g => g.classList.remove("open"));
      }
    }

    burger.addEventListener("click", () => {
      setMobileMenu(!navbar.classList.contains("mobile-open"));
    });

    // Reset on resize beyond mobile breakpoint
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760 && navbar.classList.contains("mobile-open")) {
        setMobileMenu(false);
      }
    });

    // Scrolled state
    const onScroll = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ===== Admin storage =====
  const ADMIN_STORE_KEY = "exzy_admin_data_v1";
  const ADMIN_SESSION_KEY = "exzy_admin_session";
  const DIR_ACCESS_SESSION_KEY = "exzy_directory_access_session";
  const ADMIN_PASSWORD = "hr@exzy"; // HR-shared password
  const DEFAULT_ADMIN_DATA = {
    wifi_staff_ssid: "ExzyUniFi",
    wifi_staff_pass: "maetyzxe",
    wifi_guest_ssid: "Exzy_Guest",
    wifi_guest_pass: "imaguest",
    hr_email: "hr@exzyteam.com",
    hr_name: "Ninan A. (นินัน)",
    hr_phone: "0926244471",
    orientation_slides_url: "",
    orientation_pdf_url: "",
    directory_sheet_url: "",
    directory_access_key: "hr@exzy",
    directory_sheet_iframe: "",
    showcase_items: "[]",   // JSON array of { id, category, badge, meta, title, url }
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
    } catch (e) { }
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
    } catch (e) { }
  }

  // ===== Page hydration helpers (used by hydratePage above) =====
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

    // Show admin bar if already authenticated
    if (isAdmin()) {
      adminBar.hidden = false;
    }

    // Trigger: Ctrl+Shift+A
    document.addEventListener("keydown", e => {
      // Trigger: Ctrl+Alt+Shift+H
      if (e.ctrlKey && e.altKey && e.shiftKey && (e.key === "H" || e.key === "h")) {
        e.preventDefault();
        if (isAdmin()) {
          openAdminModal();
        } else {
          showAdminLogin();
        }
      }
    });

    // Trigger: 5 clicks on logo within 2s
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
      // hook tab switching
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

    function buildAdminForm() {
      const d = loadAdminData();
      return `
        <div class="admin-tabs">
          <button class="admin-tab is-active" data-tab="wifi">Wi-Fi</button>
          <button class="admin-tab" data-tab="links">เอกสาร &amp; ลิงก์</button>
          <button class="admin-tab" data-tab="showcase">Showcase</button>
          <button class="admin-tab" data-tab="hr">ข้อมูล HR</button>
        </div>

        <!-- ===== Wi-Fi ===== -->
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

        <!-- ===== Documents & Links ===== -->
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

        <!-- ===== Showcase ===== -->
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

        <!-- ===== HR ===== -->
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

    function escAttr(s) {
      return String(s || "").replace(/"/g, "&quot;").replace(/</g, "&lt;");
    }

    // ===== Showcase admin sub-panel =====
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
          return `<div class="sc-admin-item" data-idx="${idx}">
            <div class="sc-admin-info">
              <span class="badge" style="font-size:11px; padding:2px 9px; border-radius:6px;">${escAttr(item.badge)}</span>
              <span class="sc-admin-title">${escAttr(item.title)}</span>
              <span class="sc-admin-meta">${escAttr(item.meta)}</span>
              ${item.url ? `<a href="${escAttr(item.url)}" target="_blank" class="sc-admin-link">${I.external}</a>` : ''}
            </div>
            <button class="sc-del-btn" data-idx="${idx}" title="ลบ" aria-label="ลบ">${I.check.replace('M20 6L9 17l-5-5', 'M18 6L6 18M6 6l12 12')}</button>
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

      // Tab switching inside showcase
      modalBody.querySelectorAll(".admin-sc-tab").forEach(tab => {
        tab.addEventListener("click", () => {
          modalBody.querySelectorAll(".admin-sc-tab").forEach(t => t.classList.remove("is-active"));
          tab.classList.add("is-active");
          activeScTab = tab.dataset.sc;
          // Sync category select
          const catSel = modalBody.querySelector("#sc-cat");
          if (catSel) catSel.value = activeScTab;
          renderList();
        });
      });

      // Add button
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
          // Switch to the added item's tab
          activeScTab = newItem.category;
          modalBody.querySelectorAll(".admin-sc-tab").forEach(t => {
            t.classList.toggle("is-active", t.dataset.sc === activeScTab);
          });
          // Clear form
          if (titleEl) titleEl.value = "";
          if (badgeEl) badgeEl.value = "";
          if (metaEl)  metaEl.value  = "";
          if (urlEl)   urlEl.value   = "";
          renderList();
        });
      }

      renderList();
    }

    // Login submit
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

    // Save
    saveBtn.addEventListener("click", () => {
      const data = loadAdminData();
      modalBody.querySelectorAll("[data-field]").forEach(input => {
        const k = input.getAttribute("data-field");
        data[k] = input.value;
      });
      if (saveAdminData(data)) {
        showToast("บันทึกแล้ว");
        closeAdminModal();
        // re-render current page so the new values appear
        render();
      } else {
        showToast("เกิดข้อผิดพลาดในการบันทึก");
      }
    });

    // Open / exit
    openBtn.addEventListener("click", openAdminModal);
    exitBtn.addEventListener("click", () => {
      setAdmin(false);
      adminBar.hidden = true;
      showToast("ออกจาก Admin Mode แล้ว");
    });

    // Close modals via overlay or X
    document.querySelectorAll("[data-close]").forEach(el => {
      el.addEventListener("click", () => {
        const target = el.getAttribute("data-close");
        if (target === "login") hideAdminLogin();
        else closeAdminModal();
      });
    });

    // Esc closes
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        if (!modal.hidden) closeAdminModal();
        if (!loginModal.hidden) hideAdminLogin();
      }
    });
  }

  // ===== Enhancements (animations & micro-interactions) =====
  function initEnhancements() {
    // Decorative hero shapes (inject once)
    const hero = document.querySelector('.hero');
    if (hero && !hero.querySelector('.hero-shape')) {
      ['a','b','c'].forEach(s => {
        const d = document.createElement('div');
        d.className = 'hero-shape shape-' + s;
        hero.appendChild(d);
      });
    }

    // Parallax for hero shapes
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

    // hb-link tilt interaction
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
        const rx = dy * -6;
        const ry = dx * 10;
        el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
      });
      el.addEventListener('pointerleave', () => {
        el.style.transform = '';
      });
    });

    // btn ripple for CTA
    document.querySelectorAll('.btn-hero').forEach(btn => {
      if (btn.__rippleAttached) return;
      btn.__rippleAttached = true;
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.addEventListener('click', e => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const ripple = document.createElement('span');
        ripple.className = 'btn-ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
      });
    });

    // cursor follower removed per user request
  }

  // ===== Boot =====
  function boot() {
    document.getElementById("year").textContent = new Date().getFullYear();
    initNav();
    initAdminMode();
    render();
    // run enhancements after initial render
    setTimeout(initEnhancements, 80);
    // re-run after route changes
    window.addEventListener("hashchange", () => { render(); setTimeout(initEnhancements, 80); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
