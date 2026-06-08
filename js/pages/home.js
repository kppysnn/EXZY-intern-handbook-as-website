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
      <p class="ex-home-lead">รวมข้อมูลที่ intern ต้องใช้ตลอดการฝึกงานไว้ที่นี่ — งานที่ต้องทำ ออฟฟิศ ทีม หรือนโยบาย <br>หากมีข้อสงสัย website นี้จะช่วยตอบคำถามนั้นเอง!</p>
      <div class="ex-home-actions">
        <a href="#ex-home-contents" class="ex-home-primary">
          ดูหัวข้อทั้งหมด
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </a>
        <a href="#/first-day" class="ex-home-secondary" data-link>เริ่มจาก Day 1 Guide</a>
      </div>
    </div>
  </div>
  <a href="#ex-home-start" class="ex-home-scroll-cue" aria-label="เลื่อนลงไปดูส่วนถัดไป">
    <span>เลื่อนเพื่อดูต่อ</span>
    <i aria-hidden="true"></i>
  </a>
</section>

<section class="ex-home-start" id="ex-home-start" aria-labelledby="ex-home-start-title">
  <div class="ex-home-start-inner">
    <div class="ex-home-section-intro fdb-reveal">
      <h2 id="ex-home-start-title">สามเรื่องที่ถูกเปิดดูบ่อย</h2>
      <p>สิ่งที่ต้องเจอในวันแรก ๆ งานที่ต้องทำ และข้อมูลที่อาจจะเปิดดูอยู่บ่อย ๆ</p>
    </div>

    <div class="ex-start-grid ex-start-grid-priority">
      <article class="ex-start-card ex-start-card--day1 fdb-reveal">
        <span class="ex-start-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="7" width="26" height="20" rx="3"/>
            <path d="M3 13h26M10 7V4M22 7V4"/>
            <circle cx="16" cy="21" r="2.5" fill="currentColor" stroke="none"/>
          </svg>
        </span>
        <h3>วันแรกจะเจออะไรบ้่าง</h3>
        <p>หากเพิ่งมาวันแรก แล้วยังไม่รู้ว่าจะเจอกับอะไรบ้าง ลองดู Day 1 Guide ได้ที่นี่</p>
        <div class="ex-start-actions">
          <a href="#/first-day" class="ex-start-link ex-start-link-primary" data-link>ดู Day 1 Guide</a>
        </div>
      </article>

      <article class="ex-start-card fdb-reveal fdb-delay1">
        <span class="ex-start-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 7h20v22H6z"/>
            <path d="M11 13h10M11 18h10M11 23h6"/>
            <path d="M22 4v6h6"/>
          </svg>
        </span>
        <h3>งานที่ต้องรับผิดชอบ</h3>
        <p>มี 2 อย่างที่ต้องทำตลอดการฝึกงานก็คือ การกรอก Timesheet ทุกวัน และส่ง HR / BD Project ก่อนจบฝึกงาน</p>
        <div class="ex-start-actions">
          <a href="#/tasks/timesheet" class="ex-start-link" data-link>Timesheet</a>
          <a href="#/tasks/hr-bd-project" class="ex-start-link" data-link>HR / BD Project</a>
          <a href="#/showcase/experiences" class="ex-start-link" data-link>ตัวอย่างงานรุ่นก่อน</a>
        </div>
      </article>

      <article class="ex-start-card fdb-reveal fdb-delay2">
        <span class="ex-start-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="16" cy="16" r="12"/>
            <path d="M10 16h12M16 10v12"/>
            <path d="M8 23c3-2 5-3 8-3s5 1 8 3"/>
          </svg>
        </span>
        <h3>ข้อมูลที่ใช้บ่อย</h3>
        <p>สิ่งที่ได้ใช้บ่อยระหว่างฝึกงาน เช่น Wi-Fi, รายชื่อพนักงาน, FAQs รวบรวมคำถาม-ตอบ ไว้ในที่เดียว</p>
        <div class="ex-start-actions">
          <a href="#/resources/faqs" class="ex-start-link" data-link>FAQs</a>
          <a href="#/getting-started/wifi" class="ex-start-link" data-link>Office Wi-Fi</a>
          <a href="#/employee/directory" class="ex-start-link" data-link>Employee Contact</a>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="ex-folders-section" id="ex-home-contents" aria-labelledby="ex-folders-title">
  <div class="ex-folders-inner">
    <div class="ex-home-section-intro fdb-reveal">
      <h2 id="ex-folders-title">เลือกหมวดที่อยากรู้</h2>
      <p>อยากรู้เรื่องไหน ? เลือกดูได้เลย</p>
    </div>

    <div class="ex-folder-grid">

      <div class="ex-folder ex-folder--cyan fdb-reveal" tabindex="0" aria-label="หมวดเริ่มต้น">
        <div class="ex-folder-tab">เริ่มต้น</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="7" width="26" height="20" rx="3"/><path d="M3 13h26M10 7V4M22 7V4"/><circle cx="16" cy="20" r="3" fill="currentColor" stroke="none"/></svg>
          </div>
          <h3>Day 1 Guide</h3>
          <p>รายละเอียดของวันแรก สิ่งที่ต้องทำ และสิ่งที่จะได้เจอในช่วงเริ่มต้นการฝึกงาน</p>
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
          <p>ข้อมูลเกี่ยวกับการ Orientation และรายละเอียดของออฟฟิศ</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/getting-started/orientation" data-link class="ex-folder-doc"><span>01</span> Orientation</a>
          <a href="#/getting-started/wifi" data-link class="ex-folder-doc"><span>02</span> Office Wi-Fi</a>
          <a href="#/getting-started/meeting-rooms" data-link class="ex-folder-doc"><span>03</span> Meeting Rooms</a>
        </div>
      </div>

      <div class="ex-folder ex-folder--warm fdb-reveal fdb-delay2" tabindex="0" aria-label="หมวดงานที่ต้องรับผิดชอบ">
        <div class="ex-folder-tab">Intern Tasks</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 5h18v24H7z"/><path d="M11 10h10M11 15h10M11 20h7"/><path d="M23 4v5h5"/></svg>
          </div>
          <h3>งานที่ต้องรับผิดชอบ</h3>
          <p>สิ่งที่ intern ต้องทำและส่งระหว่างฝึกงาน ทั้งเอกสารรายเดือนและงาน content ก่อนจบฝึกงาน</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/tasks/timesheet" data-link class="ex-folder-doc"><span>01</span> Timesheet</a>
          <a href="#/tasks/hr-bd-project" data-link class="ex-folder-doc"><span>02</span> HR / BD Project</a>
          <a href="#/showcase/experiences" data-link class="ex-folder-doc"><span>03</span> Showcase Examples</a>
        </div>
      </div>

      <div class="ex-folder ex-folder--slate fdb-reveal fdb-delay2" tabindex="0" aria-label="หมวดบริษัทและทีม">
        <div class="ex-folder-tab">บริษัท</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="16" cy="10" r="5"/><circle cx="7" cy="22" r="4"/><circle cx="25" cy="22" r="4"/><path d="M11 14 Q8 18 11 22M21 14 Q24 18 21 22"/></svg>
          </div>
          <h3>บริษัทและทีม</h3>
          <p>ข้อมูลเกี่ยวกับบริษัทและทีมงาน</p>
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
          <p>นโยบายและข้อบังคับในการทำงาน</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/policy/code-of-conduct" data-link class="ex-folder-doc"><span>01</span> Core Values</a>
          <a href="#/policy/dress-code" data-link class="ex-folder-doc"><span>02</span> Dress Code</a>
          <a href="#/policy/leave" data-link class="ex-folder-doc"><span>03</span> Leave & Absence</a>
        </div>
      </div>

      <div class="ex-folder ex-folder--cyan fdb-reveal fdb-delay2" tabindex="0" aria-label="หมวด Resources">
        <div class="ex-folder-tab">Resources</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="14" height="14" rx="2"/><rect x="14" y="14" width="14" height="14" rx="2"/><rect x="4" y="18" width="8" height="10" rx="2"/><rect x="20" y="4" width="8" height="8" rx="2"/></svg>
          </div>
          <h3>Resources</h3>
          <p>คำถามและข้อมูลอ้างอิงที่กลับมาเช็กได้ระหว่างฝึกงาน</p>
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
      <h2 id="ex-home-quick-title">ข้อมูลที่ใช้บ่อย</h2>
      <p>เรื่องที่ช่วยให้ใช้ชีวิตในออฟฟิศได้สะดวกขึ้น ทั้งการเชื่อมต่อ Wi-Fi, ช่องทางการติดต่อ, การแจ้งลา และคำถามเบื้องต้นที่ intern อาจต้องการรู้คำตอบ</p>
    </div>

    <div class="ex-quick-list">
      <a href="#/getting-started/wifi" data-link>
        <span>Wi-Fi</span>
        <strong>เชื่อมต่ออินเทอร์เน็ต<br>ในออฟฟิศ</strong>
      </a>
      <a href="#/employee/directory" data-link>
        <span>Contact</span>
        <strong>รายชื่อและช่องทางติดต่อคนในทีม</strong>
      </a>
      <a href="#/policy/leave" data-link>
        <span>Leave</span>
        <strong>ขั้นตอนการแจ้งลาและ<br>การลาป่วย</strong>
      </a>
      <a href="#/resources/faqs" data-link>
        <span>FAQs</span>
        <strong>คำถามที่ intern มักสงสัย</strong>
      </a>
    </div>
  </div>
</section>
`;
