import { I } from '../icons.js';
import { pageWrap } from '../helpers.js';

export const renderOrientation = () => pageWrap({
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
          <a href="#" data-link-key="orientation_slides_url" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">เปิดแท็บใหม่ ${I.external}</a>
          <a href="#" data-link-key="orientation_pdf_url" download="Mini-Internship-Orientation.pdf" class="btn btn-primary btn-sm">${I.download} ดาวน์โหลด PDF</a>
        </div>
      </div>
      <div class="slides-embed-body" id="slides-embed-body">
        <div class="slides-embed-empty">ไม่มีสไลด์ปฐมนิเทศให้แสดงในขณะนี้</div>
      </div>
    </div>

    <h2 id="values">EXZY Core Values</h2>
    <p>5 แนวคิดที่อยู่เบื้องหลังทุกการทำงานที่ EXZY — คุณจะได้เห็นและใช้สิ่งเหล่านี้ทุกวัน</p>

    <!-- Compact CV Preview -->
    <div class="cv-wrap" style="gap:12px; margin-bottom:20px;">
      ${[
        { c:'cv-c1', num:'01', name:'Win as a Team',           tag:'Goal · Work+ · Support' },
        { c:'cv-c2', num:'02', name:'Innovative',              tag:'Value added · Learn · Take risk' },
        { c:'cv-c3', num:'03', name:'Positive & Open',         tag:'Energy · Listening · Speaking' },
        { c:'cv-c4', num:'04', name:'Professional & Dynamic',  tag:'Adapt · Commit · Prepare' },
        { c:'cv-c5', num:'05', name:'Aesthetic Design',        tag:'Tidiness · Experience · WOW' },
      ].map((v,i) => `
        <div class="cv-card ${v.c} anim-up" data-delay="${i*50}" style="--gap:0">
          <div class="cv-card-head" style="padding:18px 24px; gap:16px;">
            <div class="cv-card-big-num" style="font-size:2rem;">${v.num}</div>
            <div class="cv-card-text-col">
              <div class="cv-card-name" style="font-size:1rem;">${v.name}</div>
              <p class="cv-card-tagline" style="font-size:12.5px;">${v.tag}</p>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

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
      <div class="proj-card anim-up" data-delay="80">
        <div class="proj-num">02</div>
        <h4>Team Project</h4>
        <p>โปรเจกต์ที่พี่เลี้ยงของแต่ละ Team Assign ให้ตามทักษะและสายงาน</p>
      </div>
      <div class="proj-card anim-up" data-delay="160">
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

    <!-- Benefits mini-cards -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:20px 0 28px;">
      <div style="background:linear-gradient(135deg,rgba(102,197,197,.08),rgba(0,64,129,.04)); border:1px solid rgba(102,197,197,.25); border-radius:var(--radius); padding:20px;">
        <div style="font-size:10.5px; font-weight:800; letter-spacing:.1em; text-transform:uppercase; color:var(--cyan); margin-bottom:8px;">ในออฟฟิศ</div>
        <div style="font-family:var(--display); font-size:2.2rem; font-weight:900; color:var(--ink); line-height:1;">200 ฿</div>
        <div style="font-size:13px; color:var(--muted); margin-top:4px;">ต่อวัน</div>
      </div>
      <div style="background:linear-gradient(135deg,var(--warning-soft),rgba(248,249,250,.72)); border:1px solid rgba(255,204,0,.42); border-radius:var(--radius); padding:20px;">
        <div style="font-size:10.5px; font-weight:800; letter-spacing:.1em; text-transform:uppercase; color:var(--ink); margin-bottom:8px;">นอกสถานที่</div>
        <div style="font-family:var(--display); font-size:2.2rem; font-weight:900; color:var(--ink); line-height:1;">300 ฿</div>
        <div style="font-size:13px; color:var(--muted); margin-top:4px;">ต่อวัน</div>
      </div>
    </div>

    <p>เอกสารที่ต้องใช้ในการขอรับเบี้ยเลี้ยง (กำหนดส่งวันที่ 30–31 ของทุกเดือน):</p>
    <ul>
      <li>สำเนาบัตรประชาชน พร้อมเซ็นสำเนาถูกต้อง — ส่งทุกเดือน</li>
      <li>เอกสาร Intern Timesheet — <a href="#/resources/timesheet" data-link class="inline-link">ดูวิธีกรอก</a> — ส่งทุกเดือน</li>
      <li>สำเนา Bookbank ของบัญชีที่ต้องการใช้รับเงิน — ส่งแค่เดือนแรก</li>
      <li style="margin-top:6px;color:var(--navy);font-weight:600;">📅 กำหนดส่ง: วันที่ 30–31 ของทุกเดือน · 📄 วิธีส่ง: พิมพ์ออกกระดาษและยื่นให้ HR ที่ออฟฟิศ</li>
    </ul>

    <h3>Workshop และ Dining</h3>
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
        <a href="#/resources/timesheet" class="ae-chip" data-link>${I.doc} Timesheet</a>
        <a href="#/employee/org-chart" class="ae-chip" data-link>${I.people} โครงสร้างองค์กร</a>
      </div>
    </div>
  `,
});
