// js/pages/home.js — renderHome template
// Source of truth: this file. Build with: npm run build

export var renderHome = () => `

<section class="ex-home-hero" aria-label="EXZY Intern Handbook">
  <div class="ex-home-video-banner" aria-label="บรรยากาศที่ EXZY">
    <video class="ex-home-banner-video" src="./static/home-header-banner.mp4" autoplay muted defaultMuted loop playsinline webkit-playsinline preload="metadata" data-home-hero-video>
      <source src="./static/home-header-banner.mp4" type="video/mp4" />
    </video>
    <div class="ex-home-video-shade" aria-hidden="true"></div>
  </div>

  <div class="ex-home-hero-inner">
    <div class="ex-home-copy">
      <h1><span class="ex-home-h1-eyebrow">Welcome to</span>EXZY Internship<br>Handbook</h1>
      <p class="ex-home-lead">รวมข้อมูลที่ intern ต้องรู้ระหว่างฝึกงาน — งาน ทีม นโยบาย และคำตอบสำหรับทุกคำถาม</p>
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
      <span class="ex-must-eyebrow">Timesheet · HR Project</span>
      <h2 id="ex-home-start-title">Project สำหรับ intern มีอะไรบ้าง ?</h2>
      <p>intern ทุกคนจะต้องรับผิดชอบ 2 งานหลัก และต้องส่งให้กับ hr ตามที่กำหนด</p>
    </div>

    <div class="ex-must-grid">
      <article class="ex-must-card fdb-reveal">
        <div class="ex-must-photo"><img src="./static/card-timesheet-photo.png" alt="" loading="eager" style="object-position:center 60%" /></div>
        <div class="ex-must-content">
          <div class="ex-must-header">
            <span class="ex-must-label">01 · Timesheet</span>
            <span class="ex-must-pill ex-must-pill--teal">ส่งทุกเดือน</span>
          </div>
          <h3 class="ex-must-title">Intern Timesheet</h3>
          <ul class="ex-must-list">
            <li>กรอกเวลาเข้า-ออกและงานที่ได้รับมอบหมาย <strong>ทุกวัน</strong></li>
            <li>ส่งเอกสารเป็นกระดาษที่หน้าห้อง HR <strong>ชั้น 4</strong></li>
            <li>กำหนดส่ง <strong>วันที่ 30–31 ของทุกเดือน</strong></li>
          </ul>
          <a href="#/tasks/timesheet" class="ex-must-btn" data-link>ดูวิธีกรอก Timesheet →</a>
        </div>
      </article>

      <article class="ex-must-card fdb-reveal fdb-delay1">
        <div class="ex-must-photo"><img src="./static/card-project-photo.png" alt="" loading="eager" style="object-position:center 45%" /></div>
        <div class="ex-must-content">
          <div class="ex-must-header">
            <span class="ex-must-label">02 · HR Project</span>
            <span class="ex-must-pill ex-must-pill--amber">ก่อนจบฝึกงาน</span>
          </div>
          <h3 class="ex-must-title">HR Project</h3>
          <ul class="ex-must-list">
            <li>ชิ้นงานที่เล่าประสบการณ์การฝึกงาน</li>
            <li>เลือกรูปแบบได้ตามที่ถนัด ไม่ว่าจะเป็น <strong>คลิป บทความ โพสต์</strong></li>
            <li>ส่งก่อนสิ้นสุดการฝึกงาน <strong>2 อาทิตย์</strong></li>
            <li>ลงเผยแพร่บนช่องทาง <strong>public</strong></li>
          </ul>
          <a href="#/tasks/hr-bd-project" class="ex-must-btn" data-link>ดูรายละเอียด Project →</a>
        </div>
      </article>
    </div>

    <div class="ex-must-notice fdb-reveal">
      <span class="ex-must-notice-ico">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      </span>
      <div>
        <p>งานทั้งสองอย่างนี้เป็นส่วนหนึ่งของการฝึกงาน intern ทุกคนต้องส่งครบตามกำหนด ถึงจะผ่านการฝึกงาน</p>
        <p>ดูตัวอย่างผลงานจาก intern รุ่นก่อนได้ที่ <a href="#/showcase/experiences" data-link>Intern Showcase</a></p>
      </div>
    </div>
  </div>
</section>

<section class="ex-home-voices" aria-labelledby="ex-home-voices-title">
  <div class="ex-home-voices-inner">
    <div class="ex-home-section-intro fdb-reveal">
      <span class="ex-must-eyebrow">Intern Voices</span>
      <h2 id="ex-home-voices-title">ลองดูชีวิต intern ที่ EXZY จากคลิปจริง</h2>
      <p>คลิปจาก intern รุ่นก่อน ใช้ดูบรรยากาศการทำงาน ออฟฟิศ และชีวิตระหว่างฝึกงานก่อนเริ่มวันจริง</p>
    </div>

    <div class="ex-voice-grid">
      <article class="ex-voice-card fdb-reveal">
        <div class="ex-voice-video">
          <div class="yt-placeholder" style="background-image:url('./static/intern-voice-01-poster.jpg')">
            <div class="yt-placeholder-inner"><svg viewBox="0 0 24 24" width="36" height="36" fill="none"><rect width="24" height="24" rx="5" fill="#FF0000"/><polygon points="10,8 16,12 10,16" fill="#fff"/></svg><span>กำลังจะมาเร็ว ๆ นี้</span></div>
          </div>
        </div>
        <div class="ex-voice-copy">
          <span class="ex-voice-tag">คลิปจาก intern</span>
          <h3>เห็นภาพการฝึกงานก่อนเริ่มจริง</h3>
          <p>เปิดดูบรรยากาศจริงในออฟฟิศไว้ก่อน จะได้พอนึกออกว่าวันแรกและช่วงฝึกงานจะประมาณไหน</p>
        </div>
      </article>

      <article class="ex-voice-card fdb-reveal fdb-delay1">
        <div class="ex-voice-video">
          <div class="yt-placeholder" style="background-image:url('./static/intern-voice-02-poster.jpg')">
            <div class="yt-placeholder-inner"><svg viewBox="0 0 24 24" width="36" height="36" fill="none"><rect width="24" height="24" rx="5" fill="#FF0000"/><polygon points="10,8 16,12 10,16" fill="#fff"/></svg><span>กำลังจะมาเร็ว ๆ นี้</span></div>
          </div>
        </div>
        <div class="ex-voice-copy">
          <span class="ex-voice-tag">Intern life</span>
          <h3>อีกมุมจาก intern รุ่นก่อน</h3>
          <p>คลิปสั้น ๆ ที่ช่วยให้เห็นจังหวะชีวิตในบริษัทมากกว่าการอ่านคู่มืออย่างเดียว</p>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="ex-folders-section" id="ex-home-contents" aria-labelledby="ex-folders-title">
  <div class="ex-folders-inner">
    <div class="ex-home-section-intro fdb-reveal">
      <h2 id="ex-folders-title">รวมข้อมูลทั้งหมด<br>ที่ intern ต้องรู้ไว้ที่นี่</h2>
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
          <p>รายละเอียดของวันแรก สิ่งที่ต้องทำ และสิ่งที่จะได้เจอ<br>ในช่วงเริ่มต้นการฝึกงาน</p>
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
          <p>สิ่งที่ intern ต้องทำและส่งระหว่างฝึกงาน ทั้งเอกสารรายเดือน<br>และ HR project ก่อนจบฝึกงาน</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/tasks/timesheet" data-link class="ex-folder-doc"><span>01</span> Timesheet</a>
          <a href="#/tasks/hr-bd-project" data-link class="ex-folder-doc"><span>02</span> HR Project</a>
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
          <p>ข้อมูลเกี่ยวกับบริษัทและทีม</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/employee/org-chart" data-link class="ex-folder-doc"><span>01</span> โครงสร้างองค์กร</a>
        </div>
      </div>

      <div class="ex-folder ex-folder--teal fdb-reveal fdb-delay1" tabindex="0" aria-label="หมวดนโยบาย">
        <div class="ex-folder-tab">นโยบาย</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M16 3 L28 8v10c0 7-5 11-12 13C9 29 4 25 4 18V8L16 3Z"/><path d="M11 16l3 3 7-7"/></svg>
          </div>
          <h3>Work Policy</h3>
          <p>นโยบายและกฏระเบียบในการทำงาน</p>
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
      <p>เรื่องที่ช่วยให้ใช้ชีวิตในออฟฟิศได้ง่ายขึ้น ทั้งการเชื่อมต่อ Wi-Fi, ช่องทางการติดต่อ, การแจ้งลา <br>และคำถามเบื้องต้นที่ intern อาจต้องการรู้คำตอบ</p>
    </div>

    <div class="ex-quick-list">
      <a href="#/getting-started/wifi" data-link>
        <span class="ex-quick-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1.2" fill="currentColor" stroke="none"/></svg>
        </span>
        <span>Wi-Fi</span>
        <strong>เชื่อมต่ออินเทอร์เน็ต<br>ในออฟฟิศ</strong>
      </a>
      <a href="#/policy/leave" data-link>
        <span class="ex-quick-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 16l2 2 4-4"/></svg>
        </span>
        <span>Leave</span>
        <strong>ขั้นตอนการแจ้งลา<br>และการลาป่วย</strong>
      </a>
      <a href="#/resources/faqs" data-link>
        <span class="ex-quick-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17" stroke-width="3"/></svg>
        </span>
        <span>FAQs</span>
        <strong>คำถามที่ intern มักสงสัย</strong>
      </a>
    </div>
  </div>
</section>
`;
