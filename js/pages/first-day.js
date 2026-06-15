// js/pages/first-day.js — renderFirstDay template
// Source of truth: this file. Build with: npm run build

export function renderFirstDay(data = {}) {
    const hrEmail = data.hr_email || "hr@exzyteam.com";
    return `
<div class="ex-day-page">

<section class="ex-day-hero ex-day-hero-v2" aria-label="Welcome to EXZY internship first day">
  <div class="ex-day-photo-frame" aria-label="บรรยากาศการเริ่มต้นฝึกงานที่ EXZY">
    <img src="./static/first-day-hero.png" alt="นักศึกษาฝึกงานนั่งประชุมร่วมกันในออฟฟิศ EXZY" />
  </div>
  <div class="ex-day-hero-inner">
    <div class="ex-day-hero-copy">
      <h1 class="ex-day-hero-h1">
        <span class="ex-day-h1-sub">วันแรกของการฝึกงาน</span>
        <span class="ex-day-h1-brand">Day 1 Guide</span>
      </h1>
      <p class="ex-day-hero-lead">ก่อนเริ่มงานวันนี้ มาเช็กสิ่งสำคัญที่ต้องทำ <br>และข้อมูลที่ควรรู้สำหรับวันแรกกัน!</p>
      <button type="button" class="ex-day-cta" data-scroll-to="ex-day-tasks">📍 เช็กสิ่งที่ต้องทำวันนี้</button>
    </div>
  </div>
</section>

<section class="ex-day-tasks" id="ex-day-tasks" aria-labelledby="ex-day-tasks-title">
  <div class="ex-section-head ex-section-head-center fdb-reveal">
    <h2 id="ex-day-tasks-title">2 เรื่องที่ต้องทำในวันแรก</h2>
    <p>อย่าลืม Subscribe Calendar เพื่อติดตามวันหยุดของบริษัท และกรอก Timesheet เพื่อลงเวลาเข้าออกงานในระหว่างการฝึกงาน</p>
  </div>

  <div class="ex-task-stage">
    <article class="ex-task-slip ex-task-calendar fdb-reveal fdb-delay1">
      <div class="ex-task-visual" aria-hidden="true">
        <img src="./static/task-calendar-3d.png" alt="Google Calendar" loading="lazy" />
      </div>
      <div class="ex-task-content">
        <span class="ex-task-badge">Task 01</span>
        <h3>Subscribe Google Calendar</h3>
        <p>HR จะส่งคำเชิญให้ทางอีเมล กดเปิด Calendar แล้ว subscribe ปฏิทินบริษัทเพื่อดูวันหยุดประจำปีของบริษัท</p>
        <div class="ex-mini-flow ex-mini-flow-emoji">
          <div class="ex-flow-step"><span aria-hidden="true">📧</span><b>รับ Email คำเชิญจาก HR</b></div>
          <i></i>
          <div class="ex-flow-step"><span aria-hidden="true">📅</span><b>กด Open Calendar</b></div>
          <i></i>
          <div class="ex-flow-step"><span aria-hidden="true">✅</span><b>กด Subscribe ปฏิทิน</b></div>
        </div>
        <p class="ex-task-note">ถ้าไม่ได้รับ Calendar invitation ติดต่อ HR ที่ <a href="mailto:${hrEmail}">${hrEmail}</a></p>
      </div>
    </article>

    <article class="ex-task-slip ex-task-timesheet fdb-reveal fdb-delay2">
      <div class="ex-task-visual" aria-hidden="true">
        <img src="./static/task-timesheet-3d.png" alt="Timesheet" loading="lazy" />
      </div>
      <div class="ex-task-content">
        <span class="ex-task-badge">Task 02</span>
        <h3>กรอก Timesheet</h3>
        <p>กรอกเวลาเข้าออกงานตามที่ได้รับมอบหมายในไฟล์ที่ HR ส่งให้ แนะนำให้ทำทุกวันจะได้ไม่ลืมสิ่งที่ทำ <br>และพิมพ์ส่ง HR เป็นกระดาษตอนสิ้นเดือน (วันที่ 30-31)</p>
        <div class="ex-mini-flow ex-mini-flow-emoji">
          <div class="ex-flow-step"><span aria-hidden="true">📂</span><b>รับไฟล์ Timesheet จาก HR</b></div>
          <i></i>
          <div class="ex-flow-step"><span aria-hidden="true">✏️</span><b>เปิดไฟล์และเริ่มกรอกข้อมูล</b></div>
          <i></i>
          <div class="ex-flow-step"><span aria-hidden="true">🖨️</span><b>พิมพ์ส่ง HR สิ้นเดือน <br>(วันที่ 30-31)</b></div>
        </div>
        <a href="#/tasks/timesheet" class="ex-task-btn" data-link>ดูคู่มือ Timesheet →</a>
      </div>
    </article>
  </div>
</section>

<section class="ex-day-road" aria-labelledby="ex-day-road-title">
  <div class="ex-section-head ex-section-head-center fdb-reveal">
    <h2 id="ex-day-road-title">เริ่มฝึกงานที่ EXZY ด้วย 4 เรื่องนี้</h2>
    <p>นี่คือสิ่งที่ intern จะได้เจอในช่วงเริ่มต้นการฝึกงาน</p>
  </div>

  <div class="ex-day-items-grid">
    <article class="ex-day-item fdb-reveal">
      <span class="ex-day-item-num">01</span>
      <h3>Orientation</h3>
      <p>ทำความรู้จัก EXZY ภาพรวมบริษัท นโยบาย การฝึกงาน และหากมีเรื่องที่อยากถาม สามารถถามพี่ HR ได้เลย</p>
      <div class="ex-road-mini">
        <span><span aria-hidden="true">🏢</span><b>EXZY</b></span>
        <span><span aria-hidden="true">💻</span><b>Tools</b></span>
        <span><span aria-hidden="true">📅</span><b>Calendar</b></span>
      </div>
    </article>

    <article class="ex-day-item fdb-reveal fdb-delay1">
      <span class="ex-day-item-num">02</span>
      <h3>Metropolis</h3>
      <p>Session จากทีม design <br>ที่จะพาไปรู้จัก Metropolis Concept <br>แนวคิดเบื้องหลัง Product Design <br>ของ EXZY</p>
      <div class="ex-road-mini">
        <span><img src="./exzy-square-icon.png" style="width:20px;height:20px;object-fit:contain;border-radius:4px;" alt="EXZY" loading="lazy"><b>Logo</b></span>
        <span><span aria-hidden="true">🎨</span><b>Color</b></span>
        <span><span aria-hidden="true">👥</span><b>People</b></span>
      </div>
    </article>

    <article class="ex-day-item fdb-reveal fdb-delay1">
      <span class="ex-day-item-num">03</span>
      <h3>Mentor &amp; Team</h3>
      <p>พูดคุยกับพี่เลี้ยงที่จะดูแลตลอดการฝึกงาน ทำความรู้จักกับสมาชิกในทีม และพูดคุยถึงความต้องการและความคาดหวังในการฝึกงาน</p>
      <div class="ex-road-mini">
        <span><span aria-hidden="true">🧭</span><b>Mentor</b></span>
        <span><span aria-hidden="true">🤝</span><b>Team</b></span>
        <span><span aria-hidden="true">💬</span><b>Ask</b></span>
      </div>
    </article>

    <article class="ex-day-item fdb-reveal fdb-delay2">
      <span class="ex-day-item-num">04</span>
      <h3>Timesheet</h3>
      <p>เริ่มกรอกเวลาเข้าออกตามที่ได้รับมอบหมายในไฟล์ที่ HR ส่งให้ และส่งเอกสารทุกสิ้นเดือน (วันที่ 30-31)</p>
      <div class="ex-road-mini">
        <button type="button" class="ex-inline-link" data-link><span aria-hidden="true">📋</span><b>ดูคู่มือ →</b></button>
      </div>
    </article>
  </div>
</section>

<section class="ex-day-videos" aria-labelledby="ex-day-videos-title">
  <div class="ex-section-head ex-section-head-center fdb-reveal">
    <h2 id="ex-day-videos-title">พักเที่ยงแล้ว ทานข้าวที่ไหนดี ? 🥘</h2>
    <p>รวมคลิปแนะนำร้านอาหารรอบออฟฟิศ ทั้งร้านเด็ดที่พี่ ๆ แนะนำ และร้านใกล้ที่เดินไปกินได้ง่าย ๆ ไม่ไกล</p>
  </div>

  <div class="ex-day-video-grid">
    <article class="ex-day-video-card fdb-reveal">
      <div class="ex-day-video-frame">
        <iframe src="https://www.youtube-nocookie.com/embed/FKzHY0kpHlE" title="ปักหมุดร้านเด็ดชาว EXZY" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="ex-day-video-copy">
        <span>แนะนำร้านเด็ด</span>
        <h3>ปักหมุดร้านเด็ดชาว EXZY</h3>
        <p>อยากรู้ว่าร้านไหนเด็ด ลองถามพี่ ๆ ที่ EXZY กัน! 🤩</p>
      </div>
    </article>

    <article class="ex-day-video-card fdb-reveal fdb-delay1">
      <div class="ex-day-video-frame">
        <iframe src="https://www.youtube-nocookie.com/embed/jWSrBLB4Mg0" title="แจกพิกัดร้านเด็ดรอบ EXZY" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="ex-day-video-copy">
        <span>พิกัดร้านอาหาร</span>
        <h3>รอบบริษัทของเรา<br>ร้านไหนน่ากินบ้าง&nbsp;?</h3>
        <p>พิกัดร้านอาหารใกล้บริษัท ที่สามารถเดินไปได้ <br>ไม่รู้จะไปกินที่ไหน ลองดูคลิปนี้เลย !</p>
      </div>
    </article>
  </div>
</section>

<section class="ex-day-more" aria-labelledby="ex-day-more-title">
  <div class="ex-day-more-inner fdb-reveal">

    <div class="ex-more-headline">
      <p class="ex-more-kicker"><span></span>Intern Handbook Map</p>
      <h2 id="ex-day-more-title">อ่านต่อใน <br>Intern Handbook</h2>
      <p>เรื่องที่ intern ควรรู้และต้องใช้ตลอดการฝึกงาน ตั้งแต่นโยบาย ออฟฟิศ คนในทีม และข้อมูลอื่น ๆ อีกมากมาย</p>
      <a href="#/" class="ex-more-home" data-link>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        กลับไปหน้า Home
      </a>
    </div>

    <div class="ex-more-chapters">
      <a href="#/getting-started/orientation" data-link class="ex-more-ch">
        <span class="ex-more-ch-num">01</span>
        <span class="ex-more-ch-ico" aria-hidden="true">🏢</span>
        <b>Orientation &amp; Office</b>
        <small>Wi-Fi, Meeting rooms, Orientation slides</small>
      </a>
      <a href="#/employee/org-chart" data-link class="ex-more-ch">
        <span class="ex-more-ch-num">02</span>
        <span class="ex-more-ch-ico" aria-hidden="true">👥</span>
        <b>บริษัทและทีม</b>
        <small>โครงสร้างองค์กร</small>
      </a>
      <a href="#/policy/code-of-conduct" data-link class="ex-more-ch">
        <span class="ex-more-ch-num">03</span>
        <span class="ex-more-ch-ico" aria-hidden="true">📋</span>
        <b>Work Policy</b>
        <small>Core Values, Dress Code, การลา</small>
      </a>
      <a href="#/tasks/hr-bd-project" data-link class="ex-more-ch">
        <span class="ex-more-ch-num">04</span>
        <span class="ex-more-ch-ico" aria-hidden="true">📝</span>
        <b>Intern Tasks</b>
        <small>Timesheet, HR / BD Project</small>
      </a>
      <a href="#/resources/faqs" data-link class="ex-more-ch">
        <span class="ex-more-ch-num">05</span>
        <span class="ex-more-ch-ico" aria-hidden="true">❔</span>
        <b>FAQs &amp; Resources</b>
        <small>คำถามที่มักเจอระหว่างฝึกงาน</small>
      </a>
    </div>

  </div>
</section>

</div>
`;
  }
