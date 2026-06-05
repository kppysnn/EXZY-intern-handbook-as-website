// js/pages/home.js — renderHome template
// Source of truth: this file. Build with: npm run build

export var renderHome = () => `

<section class="ex-home-hero" aria-label="EXZY Intern Handbook">
  <div class="ex-home-video-banner" aria-label="บรรยากาศที่ EXZY">
    <video class="ex-home-banner-video" src="./static/home-header-banner.mp4" autoplay muted defaultMuted loop playsinline webkit-playsinline preload="auto" data-home-hero-video>
      <source src="./static/home-header-banner.mp4" type="video/mp4" />
    </video>
    <div class="ex-home-video-shade" aria-hidden="true"></div>
  </div>

  <div class="ex-home-hero-inner">
    <div class="ex-home-copy">
      <p class="ex-home-kicker">
        <span class="ex-home-kicker-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" focusable="false">
            <path d="M8 6.5h10.5c3 0 5.5 2.4 5.5 5.5v13.5H12.8A4.8 4.8 0 0 1 8 20.7V6.5Z"/>
            <path d="M12.5 10.7h7.2M12.5 15h7.2M12.5 19.3h5.2"/>
          </svg>
        </span>
        Welcome to EXZY Internship
      </p>
      <h1>EXZY Intern Handbook</h1>
      <p class="ex-home-lead">ศูนย์รวมข้อมูลหลัง Orientation สำหรับ intern ที่อยากกลับมาเช็กทุกอย่างในที่เดียว: วันแรก ออฟฟิศ นโยบาย ทีม Timesheet และคำถามที่มักต้องถาม HR ซ้ำ</p>
      <div class="ex-home-actions">
        <a href="#ex-home-contents" class="ex-home-primary">
          \u0E40\u0E1B\u0E34\u0E14\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D Handbook
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </a>
        <a href="#/first-day" class="ex-home-secondary" data-link>\u0E44\u0E1B\u0E17\u0E35\u0E48 Day 1 Guide</a>
      </div>
    </div>
  </div>
  <a href="#ex-home-start" class="ex-home-scroll-cue" aria-label="เลื่อนลงไปดูส่วนถัดไป">
    <span>เลื่อนดูต่อ</span>
    <i aria-hidden="true"></i>
  </a>
</section>

<section class="ex-home-start" id="ex-home-start" aria-labelledby="ex-home-start-title">
  <div class="ex-home-start-inner">
    <div class="ex-home-section-intro fdb-reveal">
      <h2 id="ex-home-start-title">เริ่มจากสิ่งที่ intern มักต้องเปิดก่อน</h2>
      <p>หน้า First Day ยังคือจุดเริ่มของวันแรก ส่วน Home นี้คือโต๊ะสารบัญกลางที่ช่วยให้กลับมาหาข้อมูลได้เร็ว โดยไม่ต้องไล่อ่านอีเมลหลายฉบับ</p>
    </div>

    <div class="ex-start-grid">
      <a href="#/first-day" class="ex-start-card ex-start-card-primary fdb-reveal" data-link>
        <span class="ex-start-index">Start</span>
        <h3>Day 1 Guide</h3>
        <p>\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E02\u0E2D\u0E07\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01 \u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33 \u0E41\u0E25\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E08\u0E30\u0E44\u0E14\u0E49\u0E40\u0E08\u0E2D\u0E43\u0E19\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19</p>
        <strong>\u0E40\u0E1B\u0E34\u0E14\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01</strong>
      </a>
      <a href="#/getting-started/orientation" class="ex-start-card fdb-reveal fdb-delay1" data-link>
        <span class="ex-start-index">After Orientation</span>
        <h3>Orientation</h3>
        <p>\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E14\u0E39\u0E2A\u0E44\u0E25\u0E14\u0E4C \u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21 \u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C \u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19\u0E02\u0E2D\u0E07 EXZY</p>
        <strong>\u0E17\u0E1A\u0E17\u0E27\u0E19 Orientation</strong>
      </a>
      <a href="#/resources/timesheet" class="ex-start-card fdb-reveal fdb-delay2" data-link>
        <span class="ex-start-index">Every Month</span>
        <h3>Timesheet</h3>
        <p>\u0E14\u0E39\u0E27\u0E34\u0E18\u0E35\u0E01\u0E23\u0E2D\u0E01 \u0E40\u0E27\u0E25\u0E32\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07 \u0E41\u0E25\u0E30\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E22\u0E37\u0E48\u0E19\u0E43\u0E2B\u0E49 HR</p>
        <strong>\u0E14\u0E39\u0E27\u0E34\u0E18\u0E35\u0E01\u0E23\u0E2D\u0E01 Timesheet</strong>
      </a>
    </div>
  </div>
</section>

<section class="ex-folders-section" id="ex-home-contents" aria-labelledby="ex-folders-title">
  <div class="ex-folders-inner">
    <div class="ex-home-section-intro fdb-reveal">
      <h2 id="ex-folders-title">เปิดแฟ้มข้อมูลกลางของ EXZY Intern</h2>
      <p>ข้อมูลถูกแยกเป็นหมวดเหมือนแฟ้มเอกสารของ HR: แตะหรือโฟกัสที่โฟลเดอร์เพื่อดูหน้าที่เกี่ยวข้อง แล้วเลือกไปยังหัวข้อที่ต้องใช้ทันที</p>
    </div>

    <div class="ex-folder-grid">

      <div class="ex-folder ex-folder--cyan fdb-reveal" tabindex="0" aria-label="หมวดเริ่มต้น">
        <div class="ex-folder-tab">เริ่มต้น</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="7" width="26" height="20" rx="3"/><path d="M3 13h26M10 7V4M22 7V4"/><circle cx="16" cy="20" r="3" fill="currentColor" stroke="none"/></svg>
          </div>
          <h3>Day 1 Guide</h3>
          <p>ลิงก์ที่ intern ควรเห็นก่อนเริ่มงานจริง</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/first-day" data-link class="ex-folder-doc"><span>01</span> ตารางวันแรก</a>
          <a href="#/first-day" data-link class="ex-folder-doc"><span>02</span> สิ่งที่ต้องเตรียม</a>
          <a href="#/first-day" data-link class="ex-folder-doc"><span>03</span> คนที่ต้องรู้จัก</a>
        </div>
      </div>

      <div class="ex-folder ex-folder--navy fdb-reveal fdb-delay1" tabindex="0" aria-label="หมวดออฟฟิศ">
        <div class="ex-folder-tab">ออฟฟิศ</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="26" height="24" rx="3"/><path d="M10 4v24M10 12h16M10 19h16"/></svg>
          </div>
          <h3>Orientation & ออฟฟิศ</h3>
          <p>เรื่องพื้นฐานที่เคยกระจายอยู่หลายอีเมล</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/getting-started/orientation" data-link class="ex-folder-doc"><span>01</span> Orientation</a>
          <a href="#/getting-started/wifi" data-link class="ex-folder-doc"><span>02</span> Office Wi-Fi</a>
          <a href="#/getting-started/meeting-rooms" data-link class="ex-folder-doc"><span>03</span> Meeting Rooms</a>
        </div>
      </div>

      <div class="ex-folder ex-folder--slate fdb-reveal fdb-delay2" tabindex="0" aria-label="หมวดบริษัทและทีม">
        <div class="ex-folder-tab">บริษัท</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="16" cy="10" r="5"/><circle cx="7" cy="22" r="4"/><circle cx="25" cy="22" r="4"/><path d="M11 14 Q8 18 11 22M21 14 Q24 18 21 22"/></svg>
          </div>
          <h3>บริษัทและทีม</h3>
          <p>รู้ว่าใครอยู่ทีมไหนและควรติดต่อใคร</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/employee/org-chart" data-link class="ex-folder-doc"><span>01</span> โครงสร้างองค์กร</a>
          <a href="#/employee/directory" data-link class="ex-folder-doc"><span>02</span> Employee Contact</a>
        </div>
      </div>

      <div class="ex-folder ex-folder--teal fdb-reveal fdb-delay1" tabindex="0" aria-label="หมวดนโยบาย">
        <div class="ex-folder-tab">นโยบาย</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M16 3 L28 8v10c0 7-5 11-12 13C9 29 4 25 4 18V8L16 3Z"/><path d="M11 16l3 3 7-7"/></svg>
          </div>
          <h3>Work Policy</h3>
          <p>สิ่งที่ช่วยให้ทำงานถูกวิธีตั้งแต่สัปดาห์แรก</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/policy/code-of-conduct" data-link class="ex-folder-doc"><span>01</span> Core Values</a>
          <a href="#/policy/dress-code" data-link class="ex-folder-doc"><span>02</span> Dress Code</a>
          <a href="#/policy/leave" data-link class="ex-folder-doc"><span>03</span> Leave & Absence</a>
        </div>
      </div>

      <div class="ex-folder ex-folder--warm fdb-reveal fdb-delay2" tabindex="0" aria-label="หมวด Resources">
        <div class="ex-folder-tab">Resources</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="14" height="14" rx="2"/><rect x="14" y="14" width="14" height="14" rx="2"/><rect x="4" y="18" width="8" height="10" rx="2"/><rect x="20" y="4" width="8" height="8" rx="2"/></svg>
          </div>
          <h3>Resources</h3>
          <p>ของที่ต้องกลับมาใช้ระหว่างฝึกงาน</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/resources/timesheet" data-link class="ex-folder-doc"><span>01</span> Timesheet</a>
          <a href="#/resources/faqs" data-link class="ex-folder-doc"><span>02</span> FAQs</a>
          <a href="#/showcase/experiences" data-link class="ex-folder-doc"><span>03</span> Intern Showcase</a>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="ex-home-quick" aria-labelledby="ex-home-quick-title">
  <div class="ex-home-quick-inner">
    <div class="ex-home-section-intro fdb-reveal">
      <h2 id="ex-home-quick-title">\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E40\u0E1B\u0E34\u0E14\u0E1A\u0E48\u0E2D\u0E22</h2>
      <p>\u0E17\u0E32\u0E07\u0E25\u0E31\u0E14\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E21\u0E31\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</p>
    </div>

    <div class="ex-quick-list">
      <a href="#/getting-started/wifi" data-link>
        <span>Wi-Fi</span>
        <strong>\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E2D\u0E34\u0E19\u0E40\u0E17\u0E2D\u0E23\u0E4C\u0E40\u0E19\u0E47\u0E15\u0E43\u0E19\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28</strong>
      </a>
      <a href="#/employee/directory" data-link>
        <span>Contact</span>
        <strong>\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E04\u0E19\u0E43\u0E19\u0E17\u0E35\u0E21\u0E41\u0E25\u0E30\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D</strong>
      </a>
      <a href="#/policy/leave" data-link>
        <span>Leave</span>
        <strong>\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E25\u0E32\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1B\u0E48\u0E27\u0E22</strong>
      </a>
      <a href="#/resources/faqs" data-link>
        <span>FAQs</span>
        <strong>\u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48 intern \u0E21\u0E31\u0E01\u0E2A\u0E07\u0E2A\u0E31\u0E22</strong>
      </a>
    </div>
  </div>
</section>
`;
