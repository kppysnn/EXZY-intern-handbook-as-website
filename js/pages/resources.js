import { I } from '../icons.js';
import { pageWrap, acc } from '../helpers.js';

export const renderTimesheet = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Intern Tasks", null], ["Timesheet", null]],
  title: "Intern Timesheet",
  lead: "กรอกทุกวัน ส่งทุกสิ้นเดือน — แค่นี้เลย ดูตัวอย่างและวิธีกรอกได้ที่นี่",
  body: `
    <!-- Timesheet Rule Cards -->
    <div class="ts-rule-cards anim-up">
      <div class="ts-rule-card ts-rule-daily">
        <div class="ts-rule-icon">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div class="ts-rule-content">
          <div class="ts-rule-freq">ทุกวัน</div>
          <h3>กรอก Timesheet</h3>
          <p>ลงเวลาเข้า–ออก และงานที่ทำในแต่ละวัน ทำทันทีก่อนกลับบ้าน</p>
        </div>
      </div>
      <div class="ts-rule-card ts-rule-monthly">
        <div class="ts-rule-icon">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>
        </div>
        <div class="ts-rule-content">
          <div class="ts-rule-freq">สิ้นเดือน (30–31)</div>
          <h3>พิมพ์ + ยื่น HR</h3>
          <p>พิมพ์เอกสารออกกระดาษ แล้วยื่นให้ HR โดยตรงที่ออฟฟิศ</p>
        </div>
      </div>
    </div>

    <!-- Visual Steps V2 -->
    <div class="ts-steps-v2">
      ${[
        { n:'01', color:'var(--cyan)', title:'รับไฟล์จาก HR', desc:'HR ส่ง Excel Timesheet ให้ทางอีเมลตั้งแต่วันแรก', delay:0 },
        { n:'02', color:'var(--navy)', title:'กรอกทุกวัน', desc:'กรอกเวลาเข้า-ออกและงานที่ทำในแต่ละวัน', delay:60 },
        { n:'03', color:'var(--slate)', title:'ระบุการลา', desc:'วันหยุด/ลา ระบุประเภทในคอลัมน์ Summary', delay:120 },
        { n:'04', color:'#C0392B', title:'ยื่น HR วันที่ 30–31', desc:'พิมพ์เอกสาร แล้วยื่นให้ HR ที่ออฟฟิศโดยตรง', delay:180 },
      ].map(s => `
        <div class="tsv2-item anim-up" data-delay="${s.delay}">
          <div class="tsv2-num" style="background:${s.color}">${s.n}</div>
          <div class="tsv2-body">
            <div class="tsv2-title">${s.title}</div>
            <div class="tsv2-desc">${s.desc}</div>
          </div>
        </div>
      `).join('<div class="tsv2-arrow" aria-hidden="true"><svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h8M9 5l3 3-3 3"/></svg></div>')}
    </div>

    <h2>ตัวอย่างเอกสาร Timesheet</h2>
    <p>เอกสาร Timesheet ของ EXZY มีรูปแบบดังนี้ — ใช้เป็นอ้างอิงเมื่อกรอกข้อมูล</p>
    <figure class="ts-figure">
      <img src="timesheet-sample.png" alt="ตัวอย่างเอกสาร Intern Timesheet ของ EXZY" />
      <figcaption>ตัวอย่าง Intern Timesheet · ส่งให้ HR ทุกสิ้นเดือนของการฝึกงาน</figcaption>
    </figure>

    <h2 style="margin-top:48px;">คอลัมน์ที่ต้องกรอก</h2>
    <div class="ts-col-grid">
      <div class="ts-col-item anim-up"><div class="ts-col-n">1</div><div class="ts-col-info"><strong>Date</strong><span>วันที่ฝึกงาน</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">2</div><div class="ts-col-info"><strong>Time In / Time Out</strong><span>เวลาเข้า – ออก (ตามกะของแผนก)</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">3</div><div class="ts-col-info"><strong>Project Name</strong><span>ชื่อโปรเจกต์ที่ทำในวันนั้น</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">4</div><div class="ts-col-info"><strong>Summary of Task</strong><span>สรุปงานที่ทำในแต่ละวัน</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">5</div><div class="ts-col-info"><strong>Location</strong><span>สถานที่ฝึกงาน (เช่น EXZY Office)</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">6</div><div class="ts-col-info"><strong>Total Hours</strong><span>ชั่วโมงรวมในวันนั้น (มาตรฐาน 8)</span></div></div>
      <div class="ts-col-item anim-up"><div class="ts-col-n">7</div><div class="ts-col-info"><strong>Incharge Name</strong><span>ชื่อพี่เลี้ยง / Supervisor</span></div></div>
    </div>

    <h2 style="margin-top:48px;">เอกสารที่ต้องส่งให้ HR ทุกเดือน</h2>
    <p>กำหนดส่ง <strong>วันที่ 30–31 ของทุกเดือน</strong> — พิมพ์เอกสารออกกระดาษและยื่นให้ HR โดยตรงที่ออฟฟิศ</p>
    <ul>
      <li><strong>สำเนาบัตรประชาชน</strong> พร้อมเซ็นสำเนาถูกต้อง — ส่งทุกเดือน</li>
      <li><strong>เอกสาร Intern Timesheet</strong> (พิมพ์ออกกระดาษ) — ส่งทุกเดือน</li>
      <li><strong>สำเนา Bookbank — KBank</strong> — ส่งแค่เดือนแรก</li>
    </ul>

    <div class="callout anim-up">
      <span class="ic">${I.doc}</span>
      <div>
        <h3>วิธีส่ง — พิมพ์และยื่นกระดาษที่ออฟฟิศ</h3>
        <p>พิมพ์เอกสารทั้งหมดออกกระดาษ แล้วนำยื่นให้ HR โดยตรงที่ออฟฟิศ <strong>ภายในวันที่ 30–31</strong> ของทุกเดือน — ไม่รับทางอีเมล</p>
      </div>
    </div>

  `,
});

export const renderFaqs = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Resources", null], ["FAQs", null]],
  title: "Frequently Asked Questions",
  lead: "รวมคำถามที่ Intern ถามบ่อยที่สุด — เช็กตรงนี้ก่อน แล้วอาจไม่ต้องถามพี่เลย",
  body: `
    <!-- Filter Tabs -->
    <div class="faq-filter" id="faq-filter">
      <button class="faq-filter-btn is-active" data-faq-cat="all">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
        ทั้งหมด
      </button>
      <button class="faq-filter-btn" data-faq-cat="work">
        ${I.doc} การทำงาน
      </button>
      <button class="faq-filter-btn" data-faq-cat="leave">
        ${I.help} การลา
      </button>
      <button class="faq-filter-btn" data-faq-cat="life">
        ${I.people} ชีวิตในออฟฟิศ
      </button>
      <button class="faq-filter-btn" data-faq-cat="growth">
        ${I.rocket} การเติบโต
      </button>
    </div>

    <div class="faq-group is-visible" data-faq-group="work">
      <div class="faq-section-hd">
        <span class="faq-section-ico">${I.doc}</span>
        <h2>เรื่องการทำงาน</h2>
      </div>
      <div class="accordion">
        ${acc("1. วันแรกของการฝึกงาน ต้องเตรียมอะไรบ้าง?", "มาถึงออฟฟิศประมาณ 9:45 น. (ก่อนเวลา 10:00 น.) · พบกับ HR ที่ลงทะเบียน · เตรียมสำเนาบัตรประชาชนและสำเนา Bookbank ของ KBank (ใช้แค่เดือนแรก) · พร้อมโน้ตบุ๊กของตัวเองหากมี · อ่าน Orientation ของ EXZY ล่วงหน้าได้จากเมนู <a href=\"#/getting-started/orientation\" data-link>Orientation</a>")}
        ${acc("2. Wi-Fi ใช้รหัสอะไร? เชื่อมต่อยังไง?", "<strong>Staff Wi-Fi:</strong> SSID <code>ExzyUniFi</code> · Password <code>maetyzxe</code><br/><strong>Guest Wi-Fi:</strong> SSID <code>Exzy_Guest</code> · Password <code>imaguest</code><br/>ไปที่หน้า <a href=\"#/getting-started/wifi\" data-link>Office Wi-Fi</a> เพื่อสแกน QR code เชื่อมต่อได้ทันที")}
        ${acc("3. เวลาฝึกงานเป็นยังไง? พักกลางวันกี่โมง?", "เวลาฝึกงาน <strong>9:00 – 18:00 น.</strong> หรือ <strong>10:00 – 19:00 น.</strong> ขึ้นอยู่กับแผนก — ให้ถามพี่เลี้ยงว่าแผนกตัวเองใช้กะไหน · พักกลางวัน <strong>12:00 – 13:00 น.</strong> · วันละ 8 ชั่วโมง · มีวันหยุดประจำปี 15 วัน")}
        ${acc("4. Timesheet ส่งยังไง? ส่งเมื่อไหร่?", "HR จะส่งไฟล์ Excel Timesheet ให้คุณทางอีเมลตั้งแต่วันแรก · กรอกเวลาเข้า-ออกงานและรายละเอียดที่ทำในแต่ละวัน · ส่งกลับให้ HR ทุกสิ้นเดือน (วันที่ 30–31) · ดูคอลัมน์และวิธีกรอกที่หน้า <a href=\"#/tasks/timesheet\" data-link>Timesheet</a>")}
        ${acc("5. เบี้ยเลี้ยงเท่าไหร่? ต้องส่งเอกสารอะไรบ้าง?", "<strong>วันละ 200 บาท</strong> เมื่อเข้าฝึกงานที่บริษัท · <strong>วันละ 300 บาท</strong> เมื่อเข้าฝึกงานนอกสถานที่<br/>เอกสารที่ต้องส่ง (กำหนดส่ง <strong>วันที่ 30–31 ของทุกเดือน</strong>):<br/>· สำเนาบัตรประชาชน พร้อมเซ็นสำเนาถูกต้อง (ส่งทุกเดือน)<br/>· เอกสาร Intern Timesheet (ส่งทุกเดือน)<br/>· สำเนา Bookbank KBank (ส่งแค่เดือนแรก)<br/><strong>วิธีส่ง:</strong> พิมพ์เอกสารออกกระดาษและยื่นให้ HR โดยตรงที่ออฟฟิศ — ไม่รับทางอีเมล")}
        ${acc("6. ฝึกงานที่บ้าน (WFH) ได้ไหม?", "<strong>ไม่ได้</strong> — Intern ต้องเข้าฝึกที่บริษัทหรือสถานที่ที่ทีม Assign เท่านั้น ทางบริษัทไม่อนุญาตให้ขอฝึกงานจากที่บ้าน")}
      </div>
    </div>

    <div class="faq-group is-visible" data-faq-group="leave">
      <div class="faq-section-hd">
        <span class="faq-section-ico">${I.help}</span>
        <h2>เรื่องการลา / ป่วย / กิจธุระ</h2>
      </div>
      <div class="accordion">
        ${acc("7. รู้สึกไม่สบาย มาทำงานไม่ไหว ทำยังไง?", "<strong>1.</strong> แจ้ง Teamlead และ Senior ทันทีตอนตื่นนอน<br/><strong>2.</strong> ส่งอีเมลแจ้งลาถึง <a href=\"mailto:hr@exzyteam.com\">hr@exzyteam.com</a> <strong>ก่อน 11:00 น.</strong> ของวันที่ลา<br/><strong>3.</strong> CC อีเมล Teamlead และ Senior ด้วย<br/>· ในอีเมลให้ระบุอาการพอเข้าใจและจำนวนวันที่จะหยุด · วันที่ลาจะไม่นับเป็นชั่วโมงฝึกงาน")}
        ${acc("8. มีธุระต้องลา ทำยังไง?", "ส่งอีเมลแจ้งลา <strong>ล่วงหน้า 1 วันทำการ</strong> ไปที่ HR + CC Teamlead/Senior · ระบุเหตุผลพอเข้าใจ · พยายามลาเท่าที่จำเป็นเพราะการลาไม่นับเป็นชั่วโมงฝึกงาน")}
        ${acc("9. ลาเรียน / ลาสอบ ทำยังไง?", "ติดต่อ HR ล่วงหน้าและแจ้งกำหนดการเรียน/สอบของมหาวิทยาลัย · HR และ Teamlead จะพิจารณาเป็นรายกรณี · สำหรับการสอบหรือกิจกรรมมหาวิทยาลัยสำคัญ ๆ ปกติบริษัทจะให้ความร่วมมือ")}
      </div>
    </div>

    <div class="faq-group is-visible" data-faq-group="life">
      <div class="faq-section-hd">
        <span class="faq-section-ico">${I.people}</span>
        <h2>ชีวิตในออฟฟิศ</h2>
      </div>
      <div class="accordion">
        ${acc("10. พักกลางวันทานข้าวที่ไหนดี?", "ออฟฟิศ EXZY ตั้งอยู่ที่ตึก Metropolis ซึ่งมีร้านอาหารและคาเฟ่หลายร้านอยู่บริเวณรอบ ๆ:<br/>· <strong>ในตึก Metropolis</strong> — มีร้านอาหารและร้านกาแฟชั้น G<br/>· <strong>ห้างใกล้เคียง</strong> — มีตัวเลือกร้านอาหารหลากหลายราคา<br/>· <strong>Food delivery</strong> — สั่ง LineMan / GrabFood / Foodpanda มาทานที่ออฟฟิศ<br/>วันแรก ๆ แนะนำให้ลองชวนพี่ในทีมไปทานด้วย")}
        ${acc("11. ปริ้นเอกสารหรือสแกนเอกสาร ทำยังไง?", "ออฟฟิศมีเครื่องปริ้น/สแกนสำหรับใช้งาน — สอบถามพี่เลี้ยงหรือพี่ในทีมเรื่องการเข้าถึงเครื่องและการตั้งค่า · สำหรับการพิมพ์เอกสารส่วนตัว (เช่น สำเนาบัตรประชาชน) แนะนำให้เตรียมมาจากที่บ้าน")}
      </div>
    </div>

    <div class="faq-group is-visible" data-faq-group="growth">
      <div class="faq-section-hd">
        <span class="faq-section-ico">${I.rocket}</span>
        <h2>การทำงานและการเติบโต</h2>
      </div>
      <div class="accordion">
        ${acc("12. ต้องทำโปรเจกต์อะไรบ้างระหว่างฝึกงาน?", "Intern จะต้องรับผิดชอบโปรเจกต์ 3 ประเภท:<br/><strong>1. Project / Report</strong> โปรเจกต์ที่นำส่งมหาวิทยาลัย<br/><strong>2. Team Project</strong> โปรเจกต์ที่พี่เลี้ยงหรือทีม assign ให้ตามสายงาน<br/><strong>3. HR / BD Project</strong> งาน content ที่ HR หรือ BD assign ให้ ต้องเผยแพร่บนช่องทาง public และส่งก่อนจบฝึกงาน 2 อาทิตย์<br/>ดูรายละเอียดที่หน้า <a href=\"#/tasks/hr-bd-project\" data-link>HR / BD Project</a>")}
        ${acc("13. ไม่เข้าใจงานที่ได้รับมอบหมาย ทำยังไง?", "<strong>ถามพี่เลี้ยงทันที</strong> — ไม่ต้องเก็บไว้คนเดียว · เขียน notes ก่อนถามว่าตรงไหนที่ไม่เข้าใจ จะช่วยให้พี่เลี้ยงตอบได้ตรงประเด็น")}
      </div>
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
        <h3>กำลังจะทำ HR / BD Project?</h3>
        <p>ดูรายละเอียดงานก่อน แล้วค่อยเปิด Showcase เพื่อดูตัวอย่างจาก intern รุ่นก่อน</p>
      </div>
      <div class="cta-btns">
        <a href="#/tasks/hr-bd-project" class="btn btn-ghost" data-link>ดูรายละเอียดงาน ${I.arrow}</a>
        <a href="#/showcase/blog" class="btn btn-primary" data-link>Intern Blog ${I.arrow}</a>
      </div>
    </div>

  `,
});
