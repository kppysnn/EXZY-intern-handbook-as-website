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
      <section class="hero">
        <div class="hero-inner">
          <div class="fade-up">
            <div class="hero-eyebrow"><span class="dot"></span> Welcome to EXZY · Intern Handbook</div>
            <h1>เริ่มต้นเส้นทาง<br/>การฝึกงานของคุณ<br/><span class="accent hero-accent-word">อย่างมั่นใจ</span></h1>
            <p class="lead">รวมข้อมูลทุกอย่างที่นักศึกษาฝึกงานต้องรู้ — ตั้งแต่วันแรกที่เข้าออฟฟิศ Wi-Fi, ทีมงาน, นโยบาย, ค่านิยมองค์กร, ไปจนถึงผลงานของรุ่นพี่ — ในที่เดียว</p>
            <div class="hero-ctas">
              <button class="btn btn-primary" data-scroll-to="first-day">
                เริ่มอ่านที่นี่ <span class="arrow">${I.arrow}</span>
              </button>
              <a href="#/getting-started/orientation" class="btn btn-ghost" data-link>
                ดู Orientation
              </a>
            </div>
            <div class="hero-scroll-hint" data-scroll-to="about" role="button" tabindex="0" aria-label="เลื่อนลงดูข้อมูล">
              <div class="hero-scroll-mouse">
                <div class="hero-scroll-wheel"></div>
              </div>
              <span class="hero-scroll-label">Scroll</span>
            </div>
          </div>
          <div class="hero-visual fade-up">
            <div class="hv-card hv-card-1">
              <h4><span class="ico">${I.calendar}</span> Orientation</h4>
              <p>ปฐมนิเทศวันแรก เรียนรู้เกี่ยวกับ EXZY และทีม</p>
              <div class="row">
                <span class="pill">Day 1</span>
                <span class="pill">Slides</span>
              </div>
            </div>
            <div class="hv-card hv-card-2">
              <h4><span class="ico">${I.clock}</span> Timesheet</h4>
              <p>กรอกเวลาเข้า-ออกงานทุกวัน และส่งทุกสิ้นเดือน</p>
              <div class="row">
                <span class="pill">Daily</span>
                <span class="pill">Monthly</span>
              </div>
            </div>
            <div class="hv-card hv-card-3">
              <h4><span class="ico">${I.wifi}</span> Office Wi-Fi</h4>
              <p>เชื่อมต่อ Wi-Fi ภายในออฟฟิศ</p>
              <div class="row"><span class="pill">SSID & Pass</span></div>
            </div>
          </div>
        </div>
      </section>

      <!-- STORY: ABOUT EXZY -->
      <section class="story-section story-section-light" id="about">
        <div class="story-inner">
          <span class="eyebrow">About EXZY</span>
          <h2 class="story-title">ที่นี่คือ EXZY</h2>
          <p class="story-lead">EXZY เป็นบริษัทที่ช่วยองค์กรต่าง ๆ <strong>ปรับออฟฟิศธรรมดาให้กลายเป็น Smart Office</strong> — ด้วยระบบและเทคโนโลยีที่ทำให้การทำงานง่ายขึ้น ฉลาดขึ้น และมีประสิทธิภาพมากขึ้น</p>
          <div class="story-content">
            <p>พูดง่าย ๆ ว่า EXZY ออกแบบและติดตั้งระบบสำหรับออฟฟิศ — เช่น ระบบจองห้องประชุม จองโต๊ะทำงาน ระบบเข้า-ออกอาคาร กล้อง CCTV อัจฉริยะ จอแสดงผลดิจิทัล และอุปกรณ์ประชุมทางไกล — แบบครบวงจรในจุดเดียว</p>
            <div class="about-products">
              <div class="about-product-item"><span class="ap-dot"></span>W+ Meet in Touch — ระบบจองห้องประชุม รองรับ Hybrid</div>
              <div class="about-product-item"><span class="ap-dot"></span>W+ Co Desk — จองโต๊ะทำงานแบบ Flexible</div>
              <div class="about-product-item"><span class="ap-dot"></span>W+ One Pass — เข้า-ออกอัจฉริยะ ผ่านใบหน้า / QR / แอป</div>
              <div class="about-product-item"><span class="ap-dot"></span>W+ Visitar — บริหารผู้มาติดต่อ แจ้งเตือนอัตโนมัติ</div>
              <div class="about-product-item"><span class="ap-dot"></span>Video Conference &amp; AV Solutions — ออกแบบ-ติดตั้งครบวงจร</div>
              <div class="about-product-item"><span class="ap-dot"></span>Digital Signage &amp; Interactive Display — สื่อสารภายในองค์กร</div>
            </div>
          </div>
          <a href="#/getting-started/orientation" class="btn btn-primary" data-link style="margin-top:28px;">
            เรียนรู้เพิ่มเติมที่ Orientation ${I.arrow}
          </a>
        </div>
      </section>

      <!-- STORY: 4-STEP JOURNEY -->
      <section class="story-section" id="first-day">
        <div class="story-inner">
          <span class="eyebrow">Your First Day</span>
          <h2 class="story-title">เริ่มต้น 4 ขั้นตอน<br/>สำหรับวันแรกของคุณ</h2>
          <p class="story-lead">ทำตามขั้นตอนเหล่านี้เพื่อเริ่มงานในวันแรกอย่างราบรื่น</p>

          <div class="story-journey">
            <div class="sj-step">
              <div class="sj-num">01</div>
              <div class="sj-icon">${I.rocket}</div>
              <h3>เข้า Orientation</h3>
              <p>เข้าร่วมกิจกรรมปฐมนิเทศกับพี่ HR เพื่อทำความรู้จักกับ EXZY วัฒนธรรมการทำงาน และทิศทางของบริษัท</p>
              <a href="#/getting-started/orientation" class="sj-link" data-link>ดู Orientation ${I.arrow}</a>
            </div>
            <div class="sj-step">
              <div class="sj-num">02</div>
              <div class="sj-icon">${I.door}</div>
              <h3>เข้า Metropolis</h3>
              <p>เข้าร่วมกิจกรรม Metropolis เพื่อศึกษารายละเอียดขององค์กร เป็นประโยชน์สำหรับการทำงานตลอดช่วงฝึกงาน</p>
            </div>
            <div class="sj-step">
              <div class="sj-num">03</div>
              <div class="sj-icon">${I.people}</div>
              <h3>พูดคุยกับทีม</h3>
              <p>พบเพื่อนร่วมงาน ทำความรู้จักกับพี่เลี้ยงและสมาชิกในแผนกของคุณ</p>
              <a href="#/employee/org-chart" class="sj-link" data-link>ดูโครงสร้างทีม ${I.arrow}</a>
            </div>
            <div class="sj-step">
              <div class="sj-num">04</div>
              <div class="sj-icon">${I.clock}</div>
              <h3>เริ่มกรอก Timesheet</h3>
              <p>HR ส่งไฟล์ Timesheet ให้ทางอีเมล — กรอกทุกวัน ส่งทุกสิ้นเดือน</p>
              <a href="#/resources/timesheet" class="sj-link" data-link>วิธีกรอก ${I.arrow}</a>
            </div>
          </div>
        </div>
      </section>

      <!-- STORY: CORE VALUES PREVIEW -->
      <section class="story-section story-section-dark" id="values">
        <div class="story-inner">
          <span class="eyebrow eyebrow-light">Core Values</span>
          <h2 class="story-title story-title-light">5 ค่านิยมที่กำหนด<br/>วิถีการทำงานของเรา</h2>
          <p class="story-lead story-lead-light">EXZY Core Values คือแกนหลักของการประเมินผลและการตัดสินใจในที่ทำงาน</p>

          <div class="values-preview">
            <a href="#/policy/code-of-conduct" class="vp-card vp-1" data-link>
              <div class="vp-num">01</div>
              <h4>Win as a team</h4>
              <p>รู้เป้าหมายร่วมกัน ทำงานเพื่อทีม และช่วยเหลือกันเมื่อมีอุปสรรค</p>
            </a>
            <a href="#/policy/code-of-conduct" class="vp-card vp-2" data-link>
              <div class="vp-num">02</div>
              <h4>Innovative</h4>
              <p>กล้าคิดใหม่ เรียนรู้อยู่เสมอ และสร้างคุณค่าจากเทคโนโลยี</p>
            </a>
            <a href="#/policy/code-of-conduct" class="vp-card vp-3" data-link>
              <div class="vp-num">03</div>
              <h4>Positive &amp; Open</h4>
              <p>มีพลังบวก เปิดรับฟังความคิดเห็น และสื่อสารกันอย่างตรงไปตรงมา</p>
            </a>
            <a href="#/policy/code-of-conduct" class="vp-card vp-4" data-link>
              <div class="vp-num">04</div>
              <h4>Professional &amp; Dynamic</h4>
              <p>ทำงานอย่างมืออาชีพ ปรับตัวได้เร็ว และส่งมอบงานตามที่รับปาก</p>
            </a>
            <a href="#/policy/code-of-conduct" class="vp-card vp-5" data-link>
              <div class="vp-num">05</div>
              <h4>Aesthetic Design</h4>
              <p>งานทุกชิ้นต้องสะอาด เรียบร้อย สวยงาม และสร้างประสบการณ์ที่ดี</p>
            </a>
          </div>
        </div>
      </section>

      <!-- STORY: KEY POLICIES AT A GLANCE -->
      <section class="story-section" id="policies">
        <div class="story-inner">
          <span class="eyebrow">Quick Facts</span>
          <h2 class="story-title">สิ่งที่คุณต้องรู้</h2>
          <p class="story-lead">ข้อมูลสำคัญที่ Intern ควรรู้ในวันแรก — ดูรายละเอียดได้ในแต่ละหน้า</p>

          <div class="fact-grid">
            <div class="fact-card">
              <div class="fact-icon">${I.clock}</div>
              <div class="fact-num">10:00–19:00</div>
              <div class="fact-label">เวลาฝึกงาน</div>
              <p>วันละ 8 ชั่วโมง · พักกลางวัน 12:00–13:00 · 15 วันหยุดต่อปี</p>
            </div>
            <div class="fact-card">
              <div class="fact-icon">${I.doc}</div>
              <div class="fact-num">200–300฿</div>
              <div class="fact-label">เบี้ยเลี้ยงรายวัน</div>
              <p>200฿ ในออฟฟิศ · 300฿ นอกสถานที่ · ส่งเอกสารวันที่ 30–31 ของเดือน</p>
            </div>
            <div class="fact-card">
              <div class="fact-icon">${I.mail}</div>
              <div class="fact-num"><span data-text="hr_email">hr@exzyteam.com</span></div>
              <div class="fact-label">ติดต่อ HR</div>
              <p>ส่งอีเมลเพื่อแจ้งลา ส่ง Timesheet หรือสอบถามทั่วไป</p>
            </div>
            <div class="fact-card">
              <div class="fact-icon">${I.shield}</div>
              <div class="fact-num">No WFH</div>
              <div class="fact-label">ฝึกที่ออฟฟิศ</div>
              <p>เข้าฝึกงานที่บริษัทหรือสถานที่ที่ทีม Assign เท่านั้น ไม่อนุญาตให้ทำที่บ้าน</p>
            </div>
          </div>
        </div>
      </section>

      <!-- STORY: WHAT EVERY INTERN GOES THROUGH -->
      <section class="story-section story-section-light" id="cycle">
        <div class="story-inner">
          <span class="eyebrow">Internship Cycle</span>
          <h2 class="story-title">วงจรการฝึกงานที่ EXZY</h2>
          <p class="story-lead">สิ่งที่ Intern ทุกคนจะได้เจอ ตั้งแต่วันแรกจนถึงวันสุดท้าย</p>

          <div class="cycle-grid">
            <div class="cycle-card">
              <div class="cycle-phase">Phase 1</div>
              <h3>สัปดาห์แรก</h3>
              <ul class="cycle-list">
                <li>ปฐมนิเทศและพบ HR</li>
                <li>ทำความรู้จักทีมและพี่เลี้ยง</li>
                <li>รับงาน Project แรก</li>
                <li>เริ่มกรอก Timesheet</li>
              </ul>
            </div>
            <div class="cycle-card">
              <div class="cycle-phase">Phase 2</div>
              <h3>ระหว่างฝึกงาน</h3>
              <ul class="cycle-list">
                <li>ทำงานในแผนกที่ Assign</li>
                <li>เข้าประชุมและคุยกับทีม</li>
                <li>ส่ง Timesheet ทุกสิ้นเดือน</li>
                <li>ร่วมกิจกรรม Workshop / Dining</li>
              </ul>
            </div>
            <div class="cycle-card">
              <div class="cycle-phase">Phase 3</div>
              <h3>ช่วงท้าย</h3>
              <ul class="cycle-list">
                <li>ส่งงาน Project ที่รับผิดชอบ</li>
                <li>เขียน Blog แบ่งปันประสบการณ์</li>
                <li>ประเมินผลกับพี่เลี้ยง</li>
                <li>ขอเอกสารรับรองจาก HR</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- STORY: QUICK ACCESS -->
      <section class="story-section" id="quick-access">
        <div class="story-inner">
          <span class="eyebrow">Explore More</span>
          <h2 class="story-title">หัวข้อที่ Intern อ่านบ่อย</h2>
          <p class="story-lead">เลือกหัวข้อที่ต้องการอ่านต่อ — ข้อมูลแต่ละหัวข้อมีรายละเอียดในหน้าเฉพาะ</p>

          <div class="card-grid">
            ${qCard("rocket", "Orientation", "ปฐมนิเทศ ค่านิยมองค์กร และโปรเจกต์ที่จะได้ทำ", "#/getting-started/orientation", true)}
            ${qCard("wifi", "Office Wi-Fi", "ข้อมูล Wi-Fi พร้อม QR code สแกนเชื่อมต่อ", "#/getting-started/wifi")}
            ${qCard("door", "Meeting Rooms", "ห้องประชุม วิธีจอง และอุปกรณ์ภายในห้อง", "#/getting-started/meeting-rooms")}
            ${qCard("clock", "Timesheet", "กรอกเวลาเข้า-ออกงานและส่งทุกสิ้นเดือน", "#/resources/timesheet")}
            ${qCard("people", "โครงสร้างบริษัท", "6 แผนกหลักของ EXZY", "#/employee/org-chart")}
            ${qCard("calendar", "วันลา", "วิธีการแจ้งลาและกำหนดเวลา", "#/policy/leave")}
            ${qCard("book", "Core Values", "5 ค่านิยมหลักของ EXZY", "#/policy/code-of-conduct")}
            ${qCard("help", "FAQs", "10 คำถามที่ Intern ถามบ่อย", "#/resources/faqs")}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="story-section story-section-cta">
        <div class="story-inner">
          <div class="cta-card">
            <div>
              <h3>พร้อมเริ่มต้นเส้นทางการฝึกงานแล้วหรือยัง?</h3>
              <p>เปิด Orientation เพื่อทำความรู้จัก EXZY และเตรียมพร้อมก่อนวันแรกที่เข้าออฟฟิศ</p>
            </div>
            <a href="#/getting-started/orientation" class="btn" data-link>
              เริ่ม Orientation ${I.arrow}
            </a>
          </div>
        </div>
      </section>
    `,

    // -------- ORIENTATION --------
    "getting-started/orientation": () => pageWrap({
      crumbs: [["Home", "#/home"], ["Getting Started", null], ["Orientation", null]],
      title: "Orientation",
      lead: "Welcome to EXZY! — ทุกสิ่งที่ต้องรู้ก่อนเริ่มฝึกงาน ตั้งแต่บริษัท ค่านิยม ไปจนถึงโปรเจกต์ที่จะได้ทำ",
      toc: [
        ["intro", "เกี่ยวกับ EXZY"],
        ["values", "EXZY Core Values"],
        ["projects", "โปรเจกต์ที่จะได้ทำ"],
        ["benefits", "เบี้ยเลี้ยงและกิจกรรม"],
        ["slides", "สไลด์ปฐมนิเทศ"],
        ["next", "ขั้นตอนถัดไป"],
      ],
      body: `
        <h2 id="intro">เกี่ยวกับ EXZY</h2>
        <p><strong>"Excellence by design, Advance by technology"</strong></p>
        <p>EXZY คือผู้เชี่ยวชาญด้าน <strong>Smart Office Solution</strong> แบบครบวงจร ให้บริการแบบ End-to-End Workplace Transformation — ตั้งแต่ระบบจองห้องประชุม ระบบเข้า-ออกอัจฉริยะ AV Solutions ไปจนถึง Digital Signage เพื่อยกระดับการทำงานขององค์กรในยุคใหม่</p>
        <p>ในฐานะ Intern ที่ EXZY คุณจะได้ทำงานร่วมกับทีมจริง ไม่ใช่งาน "ฝึกงาน" แบบทั่วไป — แต่เป็นโอกาสที่จะได้สัมผัสกระบวนการทำงานจริง และสร้างประสบการณ์ที่ติดตัวไปตลอด</p>

        <div class="callout">
          <span class="ic">${I.info}</span>
          <div>
            <h4>คำแนะนำก่อนวันแรก</h4>
            <p>ดูสไลด์ปฐมนิเทศจาก HR ด้านล่าง และอ่าน <a href="#/policy/code-of-conduct" data-link>Core Values</a> เพื่อเข้าใจวัฒนธรรมองค์กรของ EXZY ล่วงหน้า</p>
          </div>
        </div>

        <h2 id="values">EXZY Core Values</h2>
        <p>5 ค่านิยมหลักที่กำหนดวิถีการทำงานของทุกคนที่ EXZY — ใช้เป็นแนวทางในการทำงาน ปรับตัว และเติบโต</p>
        <ul>
          <li><strong>Win as a team</strong> — Goal, Work+, Support</li>
          <li><strong>Innovative</strong> — Value added, Learn and improve, Take risk</li>
          <li><strong>Positive &amp; Open</strong> — Positive Energy, Listening, Speaking</li>
          <li><strong>Professional &amp; Dynamic</strong> — Adapt, Commit, Prepare, Reliable</li>
          <li><strong>Aesthetic Design</strong> — Tidiness, Good Experience, WOW &amp; Cool</li>
        </ul>
        <a href="#/policy/code-of-conduct" class="btn btn-ghost" data-link style="margin-top:4px;">ดู Core Values ทั้งหมด ${I.arrow}</a>

        <h2 id="projects">โปรเจกต์ที่จะได้ทำ</h2>
        <p>ตลอดช่วงฝึกงาน Intern จะต้องรับผิดชอบโปรเจกต์ <strong>3 ประเภท</strong></p>

        <div class="proj-cards">
          <div class="proj-card">
            <div class="proj-num">01</div>
            <h4>Project or Report</h4>
            <p>โปรเจกต์หรือรายงานที่นักศึกษาฝึกงานรับผิดชอบดูแลและนำส่งมหาวิทยาลัย</p>
          </div>
          <div class="proj-card">
            <div class="proj-num">02</div>
            <h4>Team Project</h4>
            <p>โปรเจกต์ที่พี่เลี้ยงของแต่ละ Team เป็นผู้ Assign ให้ตามทักษะและสายงาน</p>
          </div>
          <div class="proj-card">
            <div class="proj-num">03</div>
            <h4>HR Project</h4>
            <p>โปรเจกต์ที่ HR เป็นผู้ Assign ให้ เพื่อสนับสนุนงานภายในองค์กร</p>
          </div>
        </div>

        <div class="callout" style="margin-top:20px;">
          <span class="ic">${I.info}</span>
          <div>
            <h4>กำหนดส่งงาน</h4>
            <p>ทั้ง 3 ประเภท Intern ต้องส่งตามระยะเวลาที่มหาวิทยาลัยและ EXZY กำหนด — ติดต่อพี่เลี้ยงทันทีหากมีข้อสงสัย</p>
          </div>
        </div>

        <h2 id="benefits">เบี้ยเลี้ยงและกิจกรรม</h2>
        <h3>1. เบี้ยเลี้ยง</h3>
        <ul>
          <li>รับเบี้ยเลี้ยงวันละ <strong>200 บาท</strong> ในวันที่เข้าฝึกงานที่บริษัทฯ</li>
          <li>รับเบี้ยเลี้ยงวันละ <strong>300 บาท</strong> ในวันที่เข้าฝึกงานนอกสถานที่</li>
        </ul>
        <p>เอกสารที่ต้องใช้ขอรับเบี้ยเลี้ยงรายเดือน (กำหนดส่งวันที่ 30–31 ของทุกเดือน):</p>
        <ul>
          <li>สำเนาบัตรประชาชน (ส่งทุกเดือน)</li>
          <li>เอกสาร Intern Timesheet — <a href="#/resources/timesheet" data-link>ดูวิธีกรอก</a> (ส่งทุกเดือน)</li>
          <li>สำเนา Bookbank — KBank (ส่งแค่เดือนแรก)</li>
        </ul>
        <h3>2. กิจกรรม Workshop และ Dining</h3>
        <p>EXZY จัดกิจกรรม Workshop เพื่อเสริมทักษะ และกิจกรรม Dining ประจำเดือน/ทีม เพื่อสร้างความสัมพันธ์ที่ดีระหว่างเพื่อนร่วมงาน</p>

        <h2 id="slides">สไลด์ปฐมนิเทศ</h2>
        <p>สไลด์ Orientation ของ EXZY — ครอบคลุมค่านิยมองค์กร นโยบายฝึกงาน Timesheet และทุกอย่างที่ต้องรู้ก่อนเริ่มงาน</p>

        <div class="slides-full-embed" id="slides-embed-area">
          <div class="slides-embed-header">
            <span class="slides-icon">${I.book}</span>
            <span class="slides-title" data-text="orientation_slides_name">Mini Internship Orientation</span>
            <div class="slides-embed-actions">
              <a href="#" data-link-key="orientation_slides_url" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">เปิดแท็บใหม่ ${I.external}</a>
              <a href="#" data-link-key="orientation_pdf_url" class="btn btn-primary btn-sm">${I.download} ดาวน์โหลด PDF</a>
            </div>
          </div>
          <div class="slides-embed-body" id="slides-embed-body">
            <!-- Filled by hydration: shows Google Slides iframe if URL set, else PDF inline -->
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

        <div class="also-explore">
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
      lead: "เชื่อมต่อ Wi-Fi ในออฟฟิศ — สแกน QR ด้วยกล้องมือถือเพื่อเชื่อมต่อทันที",
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
              <p class="wifi-hint" style="margin-top:8px;">เครือข่ายแยกสำหรับแขก — กรุณาแชร์เฉพาะกับผู้ที่มาเยี่ยมเยือนเท่านั้น</p>
            </div>
          </div>
        </div>

        <h2 style="margin-top:48px;">วิธีเชื่อมต่อ</h2>
        <div class="wifi-steps">
          <div class="wifi-step">
            <div class="wifi-step-num">1</div>
            <h4>สแกน QR Code</h4>
            <p>เปิดแอปกล้องของมือถือ ส่องไปที่ QR code ด้านบน — มือถือจะถามว่าจะเชื่อมต่อ Wi-Fi เลยหรือไม่</p>
          </div>
          <div class="wifi-step">
            <div class="wifi-step-num">2</div>
            <h4>หรือคัดลอกรหัส</h4>
            <p>กดปุ่ม "คัดลอกรหัส" — รหัสจะถูกคัดลอกเข้า clipboard · เปิดการตั้งค่า Wi-Fi ของอุปกรณ์</p>
          </div>
          <div class="wifi-step">
            <div class="wifi-step-num">3</div>
            <h4>เลือกเครือข่ายและวางรหัส</h4>
            <p>เลือก SSID ตามที่ระบุ → วางรหัส → กดเชื่อมต่อ</p>
          </div>
        </div>

        <div class="callout" style="margin-top:32px;">
          <span class="ic">${I.shield}</span>
          <div>
            <h4>ปลอดภัยและรักษาความลับ</h4>
            <p>กรุณาอย่าแชร์รหัสผ่าน Wi-Fi กับบุคคลภายนอกที่ไม่เกี่ยวข้อง · หากเชื่อมต่อไม่ได้ ติดต่อทีม IT</p>
          </div>
        </div>


      `,
    }),

    // -------- MEETING ROOMS --------
    "getting-started/meeting-rooms": () => pageWrap({
      crumbs: [["Home", "#/home"], ["Getting Started", null], ["Meeting Rooms", null]],
      title: "Meeting Rooms",
      lead: "ห้องประชุมภายในสำนักงาน — วิธีการจอง ผู้ใช้ตามจริง และอุปกรณ์ภายในแต่ละห้อง",
      body: `
        <h2>ห้องประชุมที่มี</h2>
        <div class="card-grid">
          <div class="card">
            <div class="icon-wrap">${I.door}</div>
            <h3>Room A — Boardroom</h3>
            <p>รองรับ 10–12 ที่นั่ง · TV 75" · ระบบประชุมทางไกล Zoom Rooms · กระดานไวท์บอร์ด</p>
          </div>
          <div class="card">
            <div class="icon-wrap">${I.door}</div>
            <h3>Room B — Collaboration</h3>
            <p>รองรับ 6–8 ที่นั่ง · TV 55" · HDMI / USB-C · กระดานไวท์บอร์ด</p>
          </div>
          <div class="card">
            <div class="icon-wrap">${I.door}</div>
            <h3>Room C — Quick Sync</h3>
            <p>รองรับ 4 ที่นั่ง · จอ external · เหมาะกับ 1:1 หรือ small standup</p>
          </div>
        </div>

        <h2>วิธีการจอง</h2>
        <ul>
          <li>ใช้ <strong>Google Calendar</strong> ค้นหา resource ที่ชื่อ "Meeting Room A/B/C"</li>
          <li>เลือกเวลาที่ต้องการและสร้าง event โดยใส่ผู้เข้าร่วมประชุมและห้อง</li>
          <li>หากห้องว่าง ระบบจะ confirm อัตโนมัติ</li>
          <li>กรุณายกเลิกถ้าไม่ได้ใช้ เพื่อให้ทีมอื่นใช้ได้</li>
        </ul>

        <div class="callout">
          <span class="ic">${I.info}</span>
          <div>
            <h4>กฎการใช้งาน</h4>
            <p>เก็บอุปกรณ์ ปิดไฟ ปิดจอ และทิ้งขยะก่อนออกจากห้องทุกครั้ง · หากพบอุปกรณ์ผิดปกติให้แจ้ง IT Support</p>
          </div>
        </div>

        <div class="page-cta-strip">
          <div>
            <h4>รู้จักออฟฟิศแล้ว — ทำความรู้จักทีมต่อเลย</h4>
            <p>ดูโครงสร้างองค์กรของ EXZY</p>
          </div>
          <div class="cta-btns">
            <a href="#/employee/org-chart" class="btn btn-primary" data-link>โครงสร้างองค์กร ${I.arrow}</a>
          </div>
        </div>
      `,
    }),

    // -------- EMPLOYEE: COMPANY STRUCTURE / ORG CHART --------
    "employee/org-chart": () => {
      const emps = DATA.records;
      const groups = [
        { title: "Technology", color: "1", teams: ["Dev", "SE", "IT Support", "IT Helpdesk", "S-IT Project Co", "S-Project Co"] },
        { title: "Design", color: "2", teams: ["Design"] },
        { title: "Sales & Business", color: "3", teams: ["Sales", "Pre-Sales", "Project Sales", "Tele Sales", "Sales Admin", "AE"] },
        { title: "Marketing & Customer", color: "4", teams: ["Marketing", "Customer Service"] },
        { title: "Operations", color: "5", teams: ["Operation", "PM", "PA", "MT", "Assistant Manager"] },
        { title: "Finance & Admin", color: "1", teams: ["Accounting", "HR"] },
      ];
      const existingTeams = new Set(emps.map(e => e.team));
      existingTeams.add("HR");
      const filtered = groups.map(g => ({
        ...g,
        teams: g.teams.filter(t => existingTeams.has(t)),
      })).filter(g => g.teams.length > 0);

      return pageWrap({
        crumbs: [["Home", "#/home"], ["Company", null], ["Org Chart", null]],
        title: "โครงสร้างองค์กร",
        lead: "แผนผังโครงสร้าง EXZY — แสดงสายบังคับบัญชาและทีมงานทั้งหมด",
        body: `
          <div class="org-tree-v2">
            <!-- Level 1: Executive -->
            <div class="org-level org-level-1">
              <div class="org-box org-box-exec">
                <div class="org-box-label">Executive</div>
                <div class="org-box-title">EXZY Company Limited</div>
                <div class="org-box-sub">CEO &amp; Executive Office</div>
              </div>
            </div>

            <div class="org-connector-v"></div>

            <!-- Level 2: 6 Departments -->
            <div class="org-level org-level-2">
              ${filtered.map((g, i) => `
                <div class="org-dept org-c${g.color}">
                  <div class="org-dept-head">
                    <span class="org-dept-label">Department</span>
                    <h4>${g.title}</h4>
                  </div>
                  <div class="org-dept-teams">
                    ${g.teams.map(t => `<div class="org-team">${t}</div>`).join("")}
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="callout" style="margin-top:48px;">
            <span class="ic">${I.info}</span>
            <div>
              <h4>ทีมของคุณคือทีมไหน?</h4>
              <p>HR จะแจ้งทีมและพี่เลี้ยงให้คุณทราบก่อนวันแรกของการฝึกงาน · ดูรายชื่อสมาชิกใน <a href="#/employee/directory" data-link>Employee Directory</a></p>
            </div>
          </div>


        `,
      });
    },

    // -------- EMPLOYEE: DIRECTORY (sorted by ID) --------
    "employee/directory": () => {
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
        lead: "ค้นหารายชื่อพนักงาน อีเมล และทีม — เรียงตามรหัสพนักงาน",
        body: `
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
                  <tr data-team="${e.team || ''}" data-search="${((e.id || '') + ' ' + (e.fullName||'') + ' ' + (e.thaiName||'') + ' ' + (e.nickname||'') + ' ' + (e.team||'') + ' ' + (e.email||'')).toLowerCase()}">
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
              <h4>หาคนที่ต้องการติดต่อไม่เจอ?</h4>
              <p>ติดต่อพี่เลี้ยงของคุณ หรือ HR ที่ <a href="mailto:hr@exzyteam.com">hr@exzyteam.com</a></p>
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
      lead: "Excellence by design, Advance by technology — 5 ค่านิยมหลักที่กำหนดวิถีการทำงานของทุกคนที่ EXZY",
      body: `
        <div class="values-grid">
          <div class="value-card value-1 value-card-1">
            <div class="value-num">01</div>
            <h3>Win as a team</h3>
            <p class="value-sub">รู้เป้าหมายร่วมกัน ทำงานหนักในส่วนของตน และช่วยเหลือทีมให้ไปถึงเป้าหมายด้วยกัน</p>
            <ul class="value-points">
              <li><strong>Goal</strong> — รู้เป้าหมายของทีม วางแผนให้ทุกคนมุ่งไปทิศทางเดียวกัน</li>
              <li><strong>Work+</strong> — รับผิดชอบงานในส่วนตัวเองให้ดี เพื่อให้ทีมส่งงานได้ทันเวลา</li>
              <li><strong>Support</strong> — ปรับตัวและสนับสนุนทีม สื่อสารทุกครั้งที่พบอุปสรรค</li>
            </ul>
          </div>

          <div class="value-card value-2 value-card-2">
            <div class="value-num">02</div>
            <h3>Innovative</h3>
            <p class="value-sub">กล้าคิดนอกกรอบ เรียนรู้สิ่งใหม่อยู่เสมอ และสร้างคุณค่าจากเทคโนโลยี</p>
            <ul class="value-points">
              <li><strong>Value added</strong> — สร้างสิ่งที่มีคุณค่าจริงผ่านเทคโนโลยี</li>
              <li><strong>Learn &amp; Improve</strong> — อัปสกิลตัวเองอยู่เสมอ ไม่หยุดพัฒนา</li>
              <li><strong>Take risk</strong> — ประเมินความเสี่ยง แล้วกล้าตัดสินใจ</li>
            </ul>
          </div>

          <div class="value-card value-3 value-card-3">
            <div class="value-num">03</div>
            <h3>Positive &amp; Open</h3>
            <p class="value-sub">มีพลังงานที่ดี เปิดรับฟังทุกความคิดเห็น และพูดตรงไปตรงมาอย่างสร้างสรรค์</p>
            <ul class="value-points">
              <li><strong>Energy</strong> — กระตือรือร้น สร้างบรรยากาศการทำงานที่ดี</li>
              <li><strong>Listening</strong> — เปิดใจรับฟังไอเดียและความคิดเห็นที่แตกต่าง</li>
              <li><strong>Speaking</strong> — สื่อสารอย่างจริงใจ ให้ feedback เพื่อพัฒนากัน</li>
            </ul>
          </div>

          <div class="value-card value-4 value-card-4">
            <div class="value-num">04</div>
            <h3>Professional &amp; Dynamic</h3>
            <p class="value-sub">ทำงานอย่างมืออาชีพ ยืดหยุ่นได้ และส่งมอบงานตามที่รับปากเสมอ</p>
            <ul class="value-points">
              <li><strong>Adapt</strong> — ปรับตัวได้เร็วในทุกสถานการณ์</li>
              <li><strong>Commit</strong> — ทำตามสิ่งที่รับปาก ส่งงานได้ตามกำหนด</li>
              <li><strong>Prepare &amp; Reliable</strong> — เตรียมตัวก่อนทุกครั้ง มีความน่าเชื่อถือในทุกงาน</li>
            </ul>
          </div>

          <div class="value-card value-5 value-card-5">
            <div class="value-num">05</div>
            <h3>Aesthetic Design</h3>
            <p class="value-sub">ทุกงานต้องสะอาด เรียบร้อย สวยงาม และสร้างประสบการณ์ที่ดีในทุกจุดสัมผัส</p>
            <ul class="value-points">
              <li><strong>Tidiness</strong> — สะอาด เรียบร้อย ทั้งการแต่งกายและการจัดการงาน</li>
              <li><strong>Good Experience</strong> — ส่งมอบสิ่งที่ผู้รับได้รับประสบการณ์ที่ดี</li>
              <li><strong>WOW &amp; Cool</strong> — ทำงานให้น่าประทับใจ โดดเด่น และเกินความคาดหวัง</li>
            </ul>
          </div>
        </div>

        <div class="callout" style="margin-top:36px;">
          <span class="ic">${I.sparkle}</span>
          <div>
            <h4>นำ Core Values ไปใช้ในการทำงาน</h4>
            <p>ค่านิยมเหล่านี้เป็นแกนหลักของการประเมินผลและการตัดสินใจในที่ทำงาน — Intern ที่ปฏิบัติตาม Core Values ครบจะมีโอกาสได้รับการพิจารณาเป็นพนักงานประจำหลังจบฝึกงาน</p>
          </div>
        </div>


      `,
    }),

    "policy/internship": () => pageWrap({
      crumbs: [["Home", "#/home"], ["Work Policy", null], ["Internship Policy", null]],
      title: "Internship Policy",
      lead: "ทุกอย่างที่ Intern ที่ EXZY ต้องรู้ในจุดเดียว — เวลาฝึกงาน วันหยุด และข้อกำหนดสำคัญ",
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
              <h4>ฝึกที่ออฟฟิศหรือสถานที่ที่ Assign</h4>
              <p>ต้องเข้าฝึกที่บริษัทหรือสถานที่ที่ทีม Assign เท่านั้น <strong>ไม่อนุญาตให้ฝึกจากที่บ้าน</strong> (No WFH)</p>
            </div>
          </div>
          <div class="rule-card">
            <div class="rule-icon">${I.clock}</div>
            <div class="rule-body">
              <h4>ลงเวลา Time In – Time Out</h4>
              <p>ลงเวลาเข้า – ออกบน Intern Timesheet ทุกวัน ทางบริษัทเซ็นรับรองตามชั่วโมงฝึกงานจริง</p>
            </div>
          </div>
          <div class="rule-card">
            <div class="rule-icon">${I.doc}</div>
            <div class="rule-body">
              <h4>บริหารชั่วโมงเอง</h4>
              <p>นักศึกษาต้องรับผิดชอบบริหารชั่วโมงฝึกงานและจัดทำเอกสารฝึกงานให้ครบด้วยตนเอง</p>
            </div>
          </div>
          <div class="rule-card">
            <div class="rule-icon">${I.calendar}</div>
            <div class="rule-body">
              <h4>วันหยุดประจำปี 15 วัน</h4>
              <p>กรุณา subscribe Staff holiday calendar เพื่อดูวันหยุดทั้งปีของบริษัท</p>
            </div>
          </div>
        </div>

        <div class="page-cta-strip">
          <div>
            <h4>รู้จัก Policy แล้ว — เตรียม Timesheet ต่อเลย</h4>
            <p>ส่ง Timesheet ให้ถูกต้องเพื่อรับเบี้ยเลี้ยงทุกสิ้นเดือน</p>
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
      lead: "แนวทางการแต่งกายในออฟฟิศ EXZY — สอดคล้องกับ Core Value 'Aesthetic Design · Tidiness'",
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

        <div class="callout">
          <span class="ic">${I.sparkle}</span>
          <div>
            <h4>เมื่อไม่แน่ใจ ให้สังเกตทีม</h4>
            <p>หากไม่แน่ใจว่าควรแต่งตัวอย่างไร ให้ลองสังเกตการแต่งตัวของพี่เลี้ยงและเพื่อนร่วมทีม หรือถามก่อนวันที่มีนัดพิเศษ</p>
          </div>
        </div>


      `,
    }),

    "policy/leave": () => pageWrap({
      crumbs: [["Home", "#/home"], ["Work Policy", null], ["Leave & Absence", null]],
      title: "Leave & Absence",
      lead: "การลาของ Intern — ลาเท่าที่จำเป็น",
      body: `
        <div class="callout">
          <span class="ic">${I.info}</span>
          <div>
            <h4>การลาจะไม่สามารถเก็บชั่วโมงการฝึกงานได้</h4>
            <p>ทางบริษัทเซ็นรับรองตามชั่วโมงฝึกงานจริงเท่านั้น กรุณาบริหารวันลาให้เหมาะสม</p>
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

        <div class="callout">
          <span class="ic">${I.shield}</span>
          <div>
            <h4>การลาที่มากเกินไป</h4>
            <p>หากมีการลางานที่มากเกินความจำเป็น และทางบริษัทและทีมเห็นไม่สมควร ทางบริษัทจะพิจารณายุติการฝึกงาน และแจ้งทางมหาวิทยาลัย</p>
          </div>
        </div>


      `,
    }),

    // -------- RESOURCES: HANDBOOK --------
    // -------- RESOURCES: TIMESHEET --------
    "resources/timesheet": () => pageWrap({
      crumbs: [["Home", "#/home"], ["Resources", null], ["Timesheet", null]],
      title: "Intern Timesheet",
      lead: "บันทึกเวลาฝึกงานและรายงานความคืบหน้า — Intern ทุกคนต้องส่ง Timesheet ให้ HR ทุกสิ้นเดือน",
      body: `
        <div class="callout">
          <span class="ic">${I.mail}</span>
          <div>
            <h4>HR จะส่งไฟล์ Timesheet ให้ทางอีเมล</h4>
            <p>HR จะส่งไฟล์ Intern Timesheet (Excel) ให้คุณทางอีเมลตั้งแต่วันแรกของการฝึกงาน — กรอกข้อมูลทุกวันและส่งกลับให้ HR ทุกสิ้นเดือน</p>
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
          <div class="ts-col"><span class="ts-col-num">1</span><div><strong>Date</strong><span>วันที่ฝึกงาน</span></div></div>
          <div class="ts-col"><span class="ts-col-num">2</span><div><strong>Time In / Time Out</strong><span>เวลาเข้า – ออก (10:00 – 19:00 น.)</span></div></div>
          <div class="ts-col"><span class="ts-col-num">3</span><div><strong>Project Name</strong><span>ชื่อโปรเจกต์ที่ทำในวันนั้น</span></div></div>
          <div class="ts-col"><span class="ts-col-num">4</span><div><strong>Summary of Task</strong><span>สรุปงานที่ทำในแต่ละวัน</span></div></div>
          <div class="ts-col"><span class="ts-col-num">5</span><div><strong>Location</strong><span>สถานที่ฝึกงาน (เช่น EXZY Office)</span></div></div>
          <div class="ts-col"><span class="ts-col-num">6</span><div><strong>Total Hours</strong><span>ชั่วโมงรวมในวันนั้น (มาตรฐาน 8)</span></div></div>
          <div class="ts-col"><span class="ts-col-num">7</span><div><strong>Incharge Name</strong><span>ชื่อพี่เลี้ยง / Supervisor</span></div></div>
        </div>

        <h2 style="margin-top:48px;">วิธีกรอกและส่ง Timesheet</h2>
        <div class="howto">
          <div class="howto-step">
            <div class="num">1</div>
            <h4>รับไฟล์จาก HR</h4>
            <p>HR จะส่งไฟล์ Excel Intern Timesheet ให้คุณทางอีเมล</p>
          </div>
          <div class="howto-step">
            <div class="num">2</div>
            <h4>กรอกทุกวัน</h4>
            <p>กรอกข้อมูลในวันที่ฝึกงานจริง ระบุงานที่ทำและเวลา</p>
          </div>
          <div class="howto-step">
            <div class="num">3</div>
            <h4>ระบุการลา</h4>
            <p>วันหยุด/ลาป่วย/ลากิจ ระบุประเภทในคอลัมน์ Summary</p>
          </div>
          <div class="howto-step">
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

        <div class="callout">
          <span class="ic">${I.mail}</span>
          <div>
            <h4>ส่งเอกสารให้</h4>
            <p>HR: <a href="mailto:hr@exzyteam.com"><strong>hr@exzyteam.com</strong></a> · พร้อม CC Teamlead และ Senior</p>
          </div>
        </div>

        <div class="page-cta-strip">
          <div>
            <h4>ยังมีข้อสงสัยอีกไหม?</h4>
            <p>ดูคำถามที่ Intern ถามบ่อยได้ใน FAQs — ครอบคลุมทุกเรื่องตั้งแต่วันแรกจนถึงวันสุดท้าย</p>
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
      lead: "คำถามที่ Intern ของ EXZY มักจะถามพี่เลี้ยงและพี่ HR — รวบรวมไว้ในที่เดียว",
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
              "ใช้ Google Calendar เพิ่ม Meeting Room A/B/C เป็น resource ในนัดประชุม · ระบบจะเช็คว่าห้องว่างหรือไม่ก่อนยืนยัน · ดูรายละเอียดและขนาดห้องที่หน้า <a href=\"#/getting-started/meeting-rooms\" data-link>Meeting Rooms</a>"
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
  function qCard(icon, title, desc, href, feature=false) {
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
      <div class="team-card">
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
          <div class="crumb">${crumbHtml}</div>
          <h1>${title}</h1>
          <p class="page-lead">${lead}</p>
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

  function showcasePage(active) {
    const tabs = [
      ["experiences", "Intern Experiences"],
      ["projects", "Intern Projects"],
      ["blog", "Intern's Blog"],
    ];
    const titleMap = {
      experiences: ["Intern Experiences", "รวมประสบการณ์ฝึกงาน — คลิป รีวิว และเรื่องเล่าจาก intern รุ่นพี่ที่เผยแพร่บนแพลตฟอร์มต่าง ๆ"],
      projects: ["Intern Projects", "ผลงานเด่นจากนักศึกษาฝึกงานในแต่ละปี — ตั้งแต่ฝั่ง engineering ไปจนถึง design และ marketing"],
      blog: ["Intern's Blog", "บทความและบทสัมภาษณ์เชิงลึก — เรื่องราวการเติบโตในแต่ละแผนกและ tips สำหรับ intern รุ่นถัดไป"],
    };

    const cards = {
      experiences: [
        sc("TikTok", "1–3 นาที", "Office atmosphere ที่ EXZY", "9 / 14"),
        sc("TikTok", "1–3 นาที", "หนึ่งวันในชีวิต intern Designer", "9 / 14"),
        sc("Short", "1 นาที", "Team culture แบบไม่ตัดต่อ", "9 / 14"),
        sc("Reels", "30 วินาที", "ผลงานสุดท้ายก่อนกลับมหาวิทยาลัย", "9 / 14"),
        sc("Story", "15 วินาที", "Behind the scenes ของ intern week", "9 / 14"),
        sc("TikTok", "2 นาที", "Q&A: เป็น intern ที่ EXZY ยังไง?", "9 / 14"),
      ],
      projects: [
        sc("Project", "Internal Tool", "Dashboard analytics สำหรับทีม Marketing", "4 / 3"),
        sc("Project", "UI/UX", "Redesign ระบบจองห้องประชุมภายใน", "4 / 3"),
        sc("Project", "Backend", "API integration สำหรับลูกค้าใหม่", "4 / 3"),
        sc("Project", "Brand", "Visual identity refresh — Sub-brand", "4 / 3"),
        sc("Project", "Mobile", "Internal mobile app prototype", "4 / 3"),
        sc("Project", "Data", "Customer journey insight report", "4 / 3"),
      ],
      blog: [
        sc("Medium", "8 min read", "จาก SE Intern สู่ Full-time ใน 4 เดือน", "16 / 10"),
        sc("Medium", "5 min read", "Lessons learned ในการทำงานกับลูกค้า enterprise", "16 / 10"),
        sc("Medium", "12 min read", "เรื่องราวการ onboard ทีม Design ที่ EXZY", "16 / 10"),
        sc("Blog", "6 min read", "Intern Mentorship — สิ่งที่ทำให้แตกต่าง", "16 / 10"),
      ],
    };

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
          <div class="showcase-grid">
            ${cards[active].join("")}
          </div>
        </div>
      </section>
    `;
  }

  function sc(badge, meta, title, ratio) {
    const ratioClass = ratio === "16 / 10" ? "aspect-blog" : ratio === "4 / 3" ? "aspect-project" : "";
    return `
      <a href="#" class="show-card fade-up">
        <div class="show-thumb ${ratioClass}">
          <span class="badge">${badge}</span>
          ${ratio === "9 / 14" ? `<span class="play">${I.play}</span>` : ''}
        </div>
        <div class="show-body">
          <h4>${title}</h4>
          <div class="show-meta">${I.sparkle} ${meta}</div>
        </div>
      </a>
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
      window.removeEventListener("scroll", window.__tocScroll || (()=>{}));
      window.__tocScroll = onScroll;
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
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
    directory_sheet_iframe: "",
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
    } catch (e) {}
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
    }

    function closeAdminModal() {
      modal.hidden = true;
    }

    function buildAdminForm() {
      const d = loadAdminData();
      return `
        <div class="admin-tabs">
          <button class="admin-tab is-active" data-tab="wifi">Wi-Fi</button>
          <button class="admin-tab" data-tab="links">ลิงก์เอกสาร</button>
          <button class="admin-tab" data-tab="hr">ข้อมูล HR</button>
        </div>

        <div class="admin-section" data-tab="wifi">
          <div class="admin-section-title">Wi-Fi สำหรับพนักงาน</div>
          <div class="admin-field">
            <label>SSID (ชื่อเครือข่าย)</label>
            <input class="admin-input mono" data-field="wifi_staff_ssid" value="${escAttr(d.wifi_staff_ssid)}" />
          </div>
          <div class="admin-field">
            <label>รหัสผ่าน</label>
            <input class="admin-input mono" data-field="wifi_staff_pass" value="${escAttr(d.wifi_staff_pass)}" />
          </div>

          <div class="admin-section-title" style="margin-top:24px;">Wi-Fi สำหรับแขก</div>
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
          <div class="admin-section-title">สไลด์ปฐมนิเทศ</div>
          <div class="admin-field">
            <label>ลิงก์ Google Slides (embed URL)</label>
            <input class="admin-input mono" data-field="orientation_slides_url" value="${escAttr(d.orientation_slides_url)}" placeholder="https://docs.google.com/presentation/d/.../embed?..." />
            <p class="hint">เปิด Google Slides → File → Share → Publish to web → Embed → คัดลอก src ของ iframe</p>
          </div>
          <div class="admin-field">
            <label>ลิงก์ดาวน์โหลด PDF (Orientation)</label>
            <input class="admin-input mono" data-field="orientation_pdf_url" value="${escAttr(d.orientation_pdf_url)}" placeholder="https://drive.google.com/.../view" />
          </div>

          <div class="admin-section-title" style="margin-top:24px;">Employee Directory</div>
          <div class="admin-field">
            <label>ลิงก์ Google Sheet (embed URL)</label>
            <input class="admin-input mono" data-field="directory_sheet_url" value="${escAttr(d.directory_sheet_url)}" placeholder="https://docs.google.com/spreadsheets/d/.../pubhtml?widget=true&headers=false" />
            <p class="hint">เปิด Google Sheet → File → Share → Publish to web → Embed → คัดลอก src ของ iframe</p>
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

    function escAttr(s) {
      return String(s || "").replace(/"/g, "&quot;").replace(/</g, "&lt;");
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

  // ===== Boot =====
  function boot() {
    document.getElementById("year").textContent = new Date().getFullYear();
    initNav();
    initAdminMode();
    render();
    window.addEventListener("hashchange", render);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
