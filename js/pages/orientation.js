import { I } from '../icons.js';
import { pageWrap } from '../helpers.js';

export const renderOrientation = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Getting Started", null], ["Orientation", null]],
  title: "Orientation",
  lead: "ทบทวนสิ่งที่ได้ฟังใน Orientation ทั้งรายละเอียดการฝึกงาน โปรเจกต์ที่ต้องรับผิดชอบ และเบี้ยเลี้ยงต่าง ๆ",
  toc: [
    ["slides", "สไลด์ปฐมนิเทศ"],
    ["intro", "เกี่ยวกับ EXZY"],
    ["values", "EXZY Core Values"],
    ["projects", "โปรเจกต์ที่จะได้ทำ"],
    ["benefits", "เบี้ยเลี้ยงและกิจกรรม"],
    ["next", "ขั้นตอนถัดไป"],
  ],
  body: `
    <h2 id="slides">สไลด์ปฐมนิเทศ</h2>
    <p>recap เรื่องที่ได้ฟังใน Orientation อยากรู้อะไรเพิ่ม สามารถอ่านที่ presentation นี้ได้เลย</p>

    <div class="slides-full-embed" id="slides-embed-area">
      <div class="slides-embed-header">
        <span class="slides-icon">${I.book}</span>
        <span class="slides-title" data-text="orientation_slides_name">Mini Internship Orientation</span>
        <div class="slides-embed-actions">
          <a href="./static/Mini-Internship-Orientation.pdf" data-link-key="orientation_slides_url" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">เปิดแท็บใหม่ ${I.external}</a>
          <a href="./static/Mini-Internship-Orientation.pdf" data-link-key="orientation_pdf_url" download="Mini-Internship-Orientation.pdf" class="btn btn-primary btn-sm">${I.download} ดาวน์โหลด PDF</a>
        </div>
      </div>
      <div class="slides-embed-body" id="slides-embed-body">
        <div class="slides-embed-empty">ไม่มีสไลด์ปฐมนิเทศให้แสดงในขณะนี้</div>
      </div>
    </div>

    <h2 id="intro">เกี่ยวกับ EXZY</h2>
    <div class="exzy-intro-card anim-up">
      <div class="exzy-intro-tagline">"Excellence by design, Advance by technology"</div>
      <p style="margin:0 0 12px;">EXZY คือผู้เชี่ยวชาญด้าน <strong>Smart Office Solution</strong> แบบครบวงจร ให้บริการตั้งแต่การออกแบบ ติดตั้ง ไปจนถึงเชื่อมต่อระบบสำนักงานยุคใหม่ ทั้งระบบจองห้องประชุม ระบบเข้า-ออกอัจฉริยะ Video Conference และ Digital Signage <br><br>ในฐานะ Intern ของ EXZY คุณจะได้เป็นส่วนหนึ่งของทีม มีส่วนร่วมในการทำงาน และได้สร้างผลงานของตัวเองอย่างแน่นอน</p>
      <p style="font-size:13px; color: var(--muted); margin:0;">อยากรู้จัก EXZY เพิ่มเติม? <a href="https://www.exzysmartoffice.com" target="_blank" rel="noopener" class="inline-link">เยี่ยมชมเว็บไซต์ ${I.external}</a></p>
    </div>

    <h2 id="values">EXZY Core Values</h2>
    <p>แนวคิดที่อยู่เบื้องหลังการทำงานของ EXZY — ลองทำความเข้าใจแต่ละข้อและนำไปปรับใช้ในการทำงานได้เลย</p>

    <!-- Compact CV Preview -->
    <div class="cv-wrap cv-compact">
      ${[
        { c:'cv-c1', num:'01', name:'Win as a Team',           tag:'Goal · Work+ · Support' },
        { c:'cv-c2', num:'02', name:'Innovative',              tag:'Value added · Learn · Take risk' },
        { c:'cv-c3', num:'03', name:'Positive & Open',         tag:'Energy · Listening · Speaking' },
        { c:'cv-c4', num:'04', name:'Professional & Dynamic',  tag:'Adapt · Commit · Prepare' },
        { c:'cv-c5', num:'05', name:'Aesthetic Design',        tag:'Tidiness · Experience · WOW' },
      ].map((v,i) => `
        <div class="cv-card ${v.c} anim-up" data-delay="${i*50}">
          <div class="cv-card-head">
            <div class="cv-card-big-num">${v.num}</div>
            <div class="cv-card-text-col">
              <div class="cv-card-name">${v.name}</div>
              <p class="cv-card-tagline">${v.tag}</p>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <a href="#/policy/code-of-conduct" class="btn btn-ghost" data-link style="margin-top:4px;">ดู Core Values ทั้งหมด ${I.arrow}</a>

    <h2 id="projects">โปรเจกต์ที่จะได้ทำ</h2>
    <p>ตลอดการฝึกงาน Intern ทุกคนจะรับผิดชอบโปรเจกต์ <strong>3 ประเภท</strong> โดยแต่ละแบบมีจุดประสงค์ต่างกัน</p>

    <div class="proj-cards">
      <div class="proj-card anim-up">
        <div class="proj-num">01</div>
        <h3>Project or Report</h3>
        <p>โปรเจกต์หรือรายงานที่รับผิดชอบดูแลและส่งกับทางมหาวิทยาลัย</p>
      </div>
      <div class="proj-card anim-up" data-delay="80">
        <div class="proj-num">02</div>
        <h3>Team Project</h3>
        <p>โปรเจกต์ที่พี่เลี้ยงของแต่ละ Team Assign ให้ตามทักษะและสายงาน</p>
      </div>
      <div class="proj-card anim-up" data-delay="160">
        <div class="proj-num">03</div>
        <h3>HR Project</h3>
        <p>Project ที่ HR assign ให้ เป็นการแชร์ประสบการณ์การฝึกงานที่ EXZY โดยต้องส่งก่อนจบฝึกงาน 2 อาทิตย์</p>
      </div>
    </div>

    <div class="callout anim-up" style="margin-top:20px;">
      <span class="ic">${I.info}</span>
      <div>
        <h3>หมายเหตุ</h3>
        <p>รูปแบบโปรเจกต์อาจแตกต่างกันตามเงื่อนไขมหาวิทยาลัยหรือทักษะของ intern แต่ละคน โดยทุกคนต้องรับผิดชอบงานที่ได้รับมอบหมายด้วยตัวเอง</p>
      </div>
    </div>

    <h2 id="benefits">เบี้ยเลี้ยงและกิจกรรม</h2>

    <div class="ob-allowance-card anim-up">
      <div class="ob-rates-row">
        <div class="ob-rate ob-rate--office">
          <div class="ob-rate-tag">ในออฟฟิศ</div>
          <div class="ob-rate-num">200 <span>฿</span></div>
          <div class="ob-rate-sub">ต่อวัน</div>
        </div>
        <div class="ob-rate ob-rate--field">
          <div class="ob-rate-tag">นอกสถานที่</div>
          <div class="ob-rate-num">300 <span>฿</span></div>
          <div class="ob-rate-sub">ต่อวัน</div>
        </div>
      </div>

      <div class="ob-docs-section">
        <div class="ob-docs-title">
          เอกสารที่ต้องใช้ในการขอรับเบี้ยเลี้ยง
          <span class="ob-docs-due">ส่งวันที่ 30–31 ของทุกเดือน</span>
        </div>
        <div class="ob-doc-rows">
          <div class="ob-doc-row">
            <span class="ob-doc-dot"></span>
            <div class="ob-doc-text">สำเนาบัตรประชาชน พร้อมเซ็นสำเนาถูกต้อง</div>
            <span class="ob-doc-freq ob-freq-monthly">ทุกเดือน</span>
          </div>
          <div class="ob-doc-row">
            <span class="ob-doc-dot"></span>
            <div class="ob-doc-text">เอกสาร Intern Timesheet — <a href="#/tasks/timesheet" data-link class="inline-link">ดูวิธีกรอก</a></div>
            <span class="ob-doc-freq ob-freq-monthly">ทุกเดือน</span>
          </div>
          <div class="ob-doc-row">
            <span class="ob-doc-dot"></span>
            <div class="ob-doc-text">สำเนา Bookbank ของบัญชีที่ต้องการใช้รับเงิน พร้อมเซ็นสำเนาถูกต้อง</div>
            <span class="ob-doc-freq ob-freq-once">เดือนแรก</span>
          </div>
        </div>
        <div class="ob-submit-info">
          <span><span aria-hidden="true">📅</span> กำหนดส่ง: วันที่ 30–31 ของทุกเดือน</span>
          <span class="ob-info-sep">·</span>
          <span><span aria-hidden="true">📄</span> วิธีส่ง: พิมพ์เอกสารเป็นกระดาษและนำไปใส่กล่องที่หน้าห้อง HR ที่ชั้น 4</span>
        </div>
      </div>
    </div>

    <h3>Workshop และ Dining 🎊</h3>
    <p>EXZY จัดกิจกรรม Workshop เสริมทักษะ และกิจกรรม Dining ประจำเดือน/ทีม เพื่อให้รู้จักทีมและเพื่อนร่วมงานมากขึ้น</p>
    <div class="callout callout-note anim-up" style="margin-top:12px;">
      <span class="ic">${I.info}</span>
      <div><p>Intern สามารถเลือกเข้าร่วมเฉพาะกิจกรรมที่สนใจ และสามารถปฏิเสธการเข้าร่วมได้ตามความสมัครใจ</p></div>
    </div>

    <div id="next" class="also-explore anim-up" style="margin-top:40px;">
      <div class="ae-label">อ่านต่อที่นี่</div>
      <div class="ae-links">
        <a href="#/policy/code-of-conduct" class="ae-chip" data-link>${I.shield} Core Values</a>
        <a href="#/policy/internship" class="ae-chip" data-link>${I.clock} Internship Policy</a>
        <a href="#/tasks/timesheet" class="ae-chip" data-link>${I.doc} Timesheet</a>
        <a href="#/tasks/hr-bd-project" class="ae-chip" data-link>${I.edit} HR Project</a>
        <a href="#/employee/org-chart" class="ae-chip" data-link>${I.people} โครงสร้างองค์กร</a>
      </div>
    </div>
  `,
});
