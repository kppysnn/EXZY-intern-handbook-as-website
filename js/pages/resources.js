import { I } from '../icons.js';
import { pageWrap, acc } from '../helpers.js';
import { loadAdminData } from '../auth.js';

export const renderTimesheet = () => {
  const { hr_email: hrEmail = "hr@exzyteam.com" } = loadAdminData();
  return pageWrap({
  crumbs: [["Home", "#/home"], ["Intern Tasks", null], ["Timesheet", null]],
  title: "Intern Timesheet",
  lead: "กรอกทุกวัน ส่งทุกสิ้นเดือน — ดูขั้นตอนและตัวอย่างเอกสารได้ด้านล่าง",
  body: `
    <div class="ts-flow-section">
      <p class="ts-flow-section-label">ขั้นตอนการกรอก Timesheet</p>
      <div class="ts-flow-v3 anim-up">
        ${[
          { n:'01', bg:'var(--cyan)',  when:'วันแรก',       what:'รับไฟล์จาก HR',   note:'HR แชร์ไฟล์ Timesheet ทางอีเมล' },
          { n:'02', bg:'var(--navy)',  when:'ทุกวัน',        what:'กรอก Timesheet',  note:'เวลาเข้า–ออก และงานที่ทำ' },
          { n:'03', bg:'var(--slate)', when:'เมื่อมีการลา', what:'ระบุการลา',        note:'ระบุประเภทในคอลัมน์ Summary' },
          { n:'04', bg:'var(--navy)',  when:'วันที่ 30–31',  what:'พิมพ์ + ส่งให้ HR', note:'ส่งเอกสารเป็นกระดาษ ที่กล่องหน้าห้องของ HR' },
        ].map(s => `
          <div class="ts-fv3-step">
            <div class="ts-fv3-dot" style="background:${s.bg}">${s.n}</div>
            <div class="ts-fv3-when">${s.when}</div>
            <div class="ts-fv3-what">${s.what}</div>
            <div class="ts-fv3-note">${s.note}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <h2>ตัวอย่างเอกสาร Timesheet 📄</h2>
    <p>เอกสาร Timesheet ของ EXZY มีรูปแบบดังนี้ — ใช้เป็นอ้างอิงเมื่อกรอกข้อมูล</p>
    <figure class="ts-figure">
      <img src="timesheet-sample.png" alt="ตัวอย่างเอกสาร Intern Timesheet ของ EXZY" loading="lazy" />
      <figcaption>ตัวอย่าง Intern Timesheet · ส่งให้ HR ทุกสิ้นเดือนของการฝึกงาน</figcaption>
    </figure>

    <div class="callout callout-note anim-up">
      <span class="ic">${I.mail}</span>
      <div>
        <h3>รับไฟล์ Timesheet จาก HR</h3>
        <p>เช็กอีเมลที่ได้ให้ไว้กับ HR — ไฟล์จะถูกส่งมาในวันแรกของการฝึกงาน หากไม่ได้รับ ติดต่อ <a href="mailto:${hrEmail}">${hrEmail}</a> ได้เลย</p>
      </div>
    </div>

    <h2 style="margin-top:48px;">ข้อมูลที่ต้องกรอก</h2>
    <div class="ts-col-grid">
      <div class="ts-col-item anim-up"><div class="ts-col-n">1</div><div class="ts-col-info"><strong>Date</strong><span>วันที่ฝึกงาน</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">2</div><div class="ts-col-info"><strong>Time In / Time Out</strong><span>เวลาเข้า – ออก (ใส่ข้อมูลตามจริง)</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">3</div><div class="ts-col-info"><strong>Project Name</strong><span>ชื่อโปรเจกต์ที่ทำในวันนั้น</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">4</div><div class="ts-col-info"><strong>Summary of Task</strong><span>สรุปงานที่ทำในแต่ละวัน</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">5</div><div class="ts-col-info"><strong>Location</strong><span>สถานที่ฝึกงาน (เช่น EXZY Office)</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">6</div><div class="ts-col-info"><strong>Total Hours</strong><span>ชั่วโมงรวมในวันนั้น (มาตรฐาน 8)</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">7</div><div class="ts-col-info"><strong>Incharge Name</strong><span>ชื่อพี่เลี้ยง / Supervisor</span></div></div>
    </div>

    <h2 style="margin-top:48px;">เอกสารที่ต้องส่งให้ HR ทุกเดือน 📮</h2>
    <p>กำหนดส่ง <strong>วันที่ 30–31 ของทุกเดือน</strong> — พิมพ์เอกสารเป็นกระดาษและนำไปใส่กล่องที่หน้าห้อง HR ที่ชั้น 4</p>
    <ul>
      <li><strong>สำเนาบัตรประชาชน</strong> พร้อมเซ็นสำเนาถูกต้อง — ส่งทุกเดือน</li>
      <li><strong>เอกสาร Intern Timesheet</strong> — ส่งทุกเดือน</li>
      <li><strong>สำเนา Bookbank — KBank</strong> — ส่งแค่เดือนแรก</li>
    </ul>

    <div class="callout anim-up">
      <span class="ic">${I.doc}</span>
      <div>
        <h3>วิธีส่ง</h3>
        <p>พิมพ์เอกสารและนำไปใส่กล่องที่หน้าห้อง HR ชั้น 4 <strong>ภายในวันที่ 30–31</strong> ของทุกเดือน (รับเอกสารเป็นกระดาษเท่านั้น)</p>
      </div>
    </div>

  `,
});
};

export const renderFaqs = () => {
  const { hr_email: hrEmail = "hr@exzyteam.com" } = loadAdminData();
  return pageWrap({
  crumbs: [["Home", "#/home"], ["Resources", null], ["FAQs", null]],
  title: "Frequently Asked Questions",
  lead: "รวมคำถามพร้อมคำตอบที่ Intern มักสงสัยเกี่ยวกับการฝึกงานที่ EXZY",
  body: `
    <!-- Filter Tabs -->
    <div class="faq-filter" id="faq-filter">
      <button type="button" class="faq-filter-btn is-active" data-faq-cat="all">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
        ทั้งหมด
      </button>
      <button type="button" class="faq-filter-btn" data-faq-cat="work">
        ${I.doc} การทำงาน
      </button>
      <button type="button" class="faq-filter-btn" data-faq-cat="leave">
        ${I.help} การลา
      </button>
      <button type="button" class="faq-filter-btn" data-faq-cat="life">
        ${I.people} ชีวิตในออฟฟิศ
      </button>
    </div>

    <div class="faq-group is-visible" data-faq-group="work">
      <div class="faq-section-hd">
        <span class="faq-section-ico">${I.doc}</span>
        <h2>เรื่องการทำงาน</h2>
      </div>
      <div class="accordion">
        ${acc("1. วันแรกของการฝึกงาน ต้องเตรียมอะไรบ้าง?", "นำอุปกรณ์ทำงานส่วนตัวมาด้วย · ถึงออฟฟิศก่อนเวลาเล็กน้อย ติดต่อพี่เลี้ยงผ่านช่องทางที่ HR ให้ไว้")}
        ${acc("2. Wi-Fi ใช้รหัสอะไร? เชื่อมต่อยังไง?", "ดูวิธีเชื่อมต่อ Wi-Fi ได้ที่หน้า <a href=\"#/getting-started/wifi\" data-link>Office Wi-Fi</a> ")}
        ${acc("3. เริ่มงานกี่โมง? พักกลางวันกี่โมง?", "เวลาฝึกงาน <strong>9:00 – 18:00 น.</strong> หรือ <strong>10:00 – 19:00 น.</strong> ขึ้นอยู่กับแผนกที่ตัวเองอยู่ · พักกลางวัน <strong>12:00 – 13:00 น.</strong> · ทำงานวันละ 8 ชั่วโมง (ไม่รวมพักเที่ยง) · ดูรายละเอียดที่ <a href=\"#/policy/internship\" data-link>Internship Policy</a>")}
        ${acc("4. Timesheet ส่งยังไง? ส่งเมื่อไหร่?", "HR จะแชร์ไฟล์ Timesheet ให้ทางอีเมลตั้งแต่วันแรก · กรอกเวลาเข้า-ออกและรายละเอียดงานที่ทำในแต่ละวัน · พิมพ์เอกสารและนำไปใส่กล่องหน้าห้อง HR ชั้น 4 <strong>ภายในวันที่ 30–31 ของทุกเดือน</strong> ดูวิธีกรอกที่หน้า <a href=\"#/tasks/timesheet\" data-link>Timesheet</a>")}
        ${acc("5. เบี้ยเลี้ยงเท่าไหร่? ต้องส่งเอกสารอะไรบ้าง?", "<strong>วันละ 200 บาท</strong> เมื่อฝึกงานที่บริษัท · <strong>วันละ 300 บาท</strong> เมื่อฝึกงานนอกสถานที่<br/>เอกสารที่ต้องส่ง (กำหนดส่ง <strong>วันที่ 30–31 ของทุกเดือน</strong>) :<br/>· สำเนาบัตรประชาชน พร้อมเซ็นสำเนาถูกต้อง — ส่งทุกเดือน<br/>· เอกสาร Intern Timesheet — ส่งทุกเดือน<br/>· สำเนา Bookbank ของบัญชีที่รับเงิน พร้อมเซ็นสำเนาถูกต้อง — ส่งแค่เดือนแรก<br/><strong>วิธีส่ง:</strong> พิมพ์เป็นกระดาษ ใส่กล่องหน้าห้อง HR ชั้น 4 — ไม่รับทางอีเมล")}
        ${acc("6. ฝึกงานที่บ้าน (WFH) ได้ไหม?", "<strong>ไม่ได้</strong>, Intern ต้องเข้าฝึกที่ออฟฟิศ EXZY หรือสถานที่ที่ทีม Assign ไว้เท่านั้น · หากมีความจำเป็น ต้องแจ้งพี่เลี้ยงและติดต่อ HR ก่อนเสมอ")}
        ${acc("7. ต้องทำโปรเจกต์อะไรบ้างระหว่างฝึกงาน?", "Intern รับผิดชอบโปรเจกต์ <strong>3 ประเภท</strong>:<br/><strong>1. Project / Report</strong> — โปรเจกต์หรือรายงานที่ส่งกับมหาวิทยาลัย<br/><strong>2. Team Project</strong> — โปรเจกต์ที่พี่เลี้ยง Assign ให้ตามสายงาน<br/><strong>3. HR Project</strong> — content เกี่ยวกับการฝึกงาน ต้องเผยแพร่บนช่องทาง public และส่งก่อนจบฝึกงาน 2 อาทิตย์<br/>ดูรายละเอียดที่หน้า <a href=\"#/tasks/hr-bd-project\" data-link>HR Project</a>")}
        ${acc("8. ไม่เข้าใจงานที่ได้รับมอบหมาย ทำยังไง?", "<strong>ถามพี่เลี้ยงทันที</strong> ไม่ต้องเก็บไว้คนเดียว พี่เลี้ยงที่มีหน้าที่ดูแลเราระหว่างการฝึกงาน จะช่วยเหลือและให้คำแนะนำได้เสมอ")}
      </div>
    </div>

    <div class="faq-group is-visible" data-faq-group="leave">
      <div class="faq-section-hd">
        <span class="faq-section-ico">${I.help}</span>
        <h2>เรื่องการลา</h2>
      </div>
      <div class="accordion">
        ${acc("9. รู้สึกไม่สบาย มาทำงานไม่ไหว ทำยังไง?", "<strong>1.</strong> แจ้งพี่เลี้ยงและทีมทันที<br/><strong>2.</strong> ส่งอีเมลแจ้งลาถึง <a href=\"mailto:${hrEmail}\">${hrEmail}</a> <strong>ก่อน 11:00 น.</strong> ของวันที่ลา<br/><strong>3.</strong> CC อีเมลพี่เลี้ยงและทีมไปด้วย<br/>ระบุอาการและจำนวนวันที่จะหยุด · วันที่ลาไม่นับเป็นชั่วโมงฝึกงาน · ดูขั้นตอนเพิ่มเติมที่ <a href=\"#/policy/leave\" data-link>Leave &amp; Absence</a>")}
        ${acc("10. มีธุระต้องลา ทำยังไง?", "<strong>1.</strong> แจ้งพี่เลี้ยงและทีมก่อน<br/><strong>2.</strong> ส่งอีเมลแจ้งลา <strong>ล่วงหน้า 1 วันทำการ</strong> ไปที่ <a href=\"mailto:${hrEmail}\">${hrEmail}</a><br/><strong>3.</strong> CC อีเมลพี่เลี้ยงและทีมไปด้วย<br/>ระบุเหตุผล · วันที่ลาไม่นับเป็นชั่วโมงฝึกงาน")}
        ${acc("11. ลาเรียน / ลาสอบ ทำยังไง?", "แจ้งพี่เลี้ยงและส่งอีเมล HR ล่วงหน้า พร้อมแนบกำหนดการสอบหรือตารางเรียนของมหาวิทยาลัย · บริษัทจะพิจารณาเป็นรายกรณี")}
      </div>
    </div>

    <div class="faq-group is-visible" data-faq-group="life">
      <div class="faq-section-hd">
        <span class="faq-section-ico">${I.people}</span>
        <h2>ชีวิตในออฟฟิศ</h2>
      </div>
      <div class="accordion">
        ${acc("12. พักกลางวันทานข้าวที่ไหนดี?", "ไปทานที่ร้านอาหารใกล้ ๆ ออฟฟิศ หรือจะสั่ง delivery มาทานที่ออฟฟิศก็ได้")}      </div>
    </div>

    <div class="callout" style="margin-top:32px;">
      <span class="ic">${I.mail}</span>
      <div>
        <h3>มีคำถามอื่น ๆ?</h3>
        <p>ถามพี่เลี้ยงโดยตรง หรือส่งอีเมลถึง HR ที่ <a href="mailto:hr@exzyteam.com"><strong>hr@exzyteam.com</strong></a></p>
      </div>
    </div>

    <div class="page-cta-strip">
      <div>
        <h3>กำลังจะทำ HR Project?</h3>
        <p>ดูรายละเอียดงานก่อน แล้วค่อยเปิด Showcase เพื่อดูตัวอย่างจาก intern รุ่นก่อน</p>
      </div>
      <div class="cta-btns">
        <a href="#/tasks/hr-bd-project" class="btn btn-ghost" data-link>ดูรายละเอียดงาน ${I.arrow}</a>
        <a href="#/showcase/experiences" class="btn btn-primary" data-link>Intern Showcase ${I.arrow}</a>
      </div>
    </div>

  `,
});
};
