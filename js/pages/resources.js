import { I } from '../icons.js';
import { pageWrap, acc } from '../helpers.js';

export const renderTimesheet = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Resources", null], ["Timesheet", null]],
  title: "Intern Timesheet",
  lead: "กรอกทุกวัน ส่งทุกสิ้นเดือน — แค่นี้เลย ดูตัวอย่างและวิธีกรอกได้ที่นี่",
  body: `
    <!-- Timesheet Hero Banner -->
    <div class="ts-hero-banner anim-up">
      <div class="ts-hero-left">
        <h2 style="color:#fff !important">กรอกทุกวัน · ส่งสิ้นเดือน</h2>
        <p>HR จะส่งไฟล์ Excel Timesheet ให้ทางอีเมลตั้งแต่วันแรก</p>
        <div class="ts-hero-badges">
          <span class="ts-hero-badge">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            ส่งทุกสิ้นเดือน
          </span>
          <span class="ts-hero-badge">
            ${I.calendar} วันที่ 30–31
          </span>
          <span class="ts-hero-badge">
            ${I.doc} พิมพ์ + ยื่น HR
          </span>
        </div>
      </div>
    </div>

    <!-- Visual Steps -->
    <div class="ts-steps-visual">
      <div class="ts-step-v anim-up" data-delay="0">
        <div class="ts-step-node" style="background:var(--cyan)">1</div>
        <div class="ts-step-title">รับไฟล์จาก HR</div>
        <div class="ts-step-desc">HR ส่ง Excel Timesheet ให้ทางอีเมลตั้งแต่วันแรก</div>
      </div>
      <div class="ts-step-v anim-up" data-delay="80">
        <div class="ts-step-node" style="background:#3B82F6">2</div>
        <div class="ts-step-title">กรอกทุกวัน</div>
        <div class="ts-step-desc">กรอกเวลาเข้า-ออกและงานที่ทำในแต่ละวัน</div>
      </div>
      <div class="ts-step-v anim-up" data-delay="160">
        <div class="ts-step-node" style="background:#8B5CF6">3</div>
        <div class="ts-step-title">ระบุการลา</div>
        <div class="ts-step-desc">วันหยุด/ลา ระบุประเภทในคอลัมน์ Summary</div>
      </div>
      <div class="ts-step-v anim-up" data-delay="240">
        <div class="ts-step-node" style="background:#EF4444">4</div>
        <div class="ts-step-title">ยื่น HR วันที่ 30–31</div>
        <div class="ts-step-desc">พิมพ์เอกสาร แล้วยื่นให้ HR ที่ออฟฟิศโดยตรง</div>
      </div>
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
        <h4>วิธีส่ง — พิมพ์และยื่นกระดาษที่ออฟฟิศ</h4>
        <p>พิมพ์เอกสารทั้งหมดออกกระดาษ แล้วนำยื่นให้ HR โดยตรงที่ออฟฟิศ <strong>ภายในวันที่ 30–31</strong> ของทุกเดือน — ไม่รับทางอีเมล</p>
      </div>
    </div>

    <div class="page-cta-strip">
      <div>
        <h4>ยังมีคำถามอีกไหม?</h4>
        <p>มีคำถามที่ Intern ถามบ่อยรวมไว้ใน FAQs — ดูได้เลย</p>
      </div>
      <div class="cta-btns">
        <a href="#/resources/faqs" class="btn btn-primary" data-link>ดู FAQs ${I.arrow}</a>
      </div>
    </div>
  `,
});

export const renderFaqs = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Resources", null], ["FAQs", null]],
  title: "Frequently Asked Questions",
  lead: "รวมคำถามที่ Intern ถามบ่อยที่สุด — เช็คตรงนี้ก่อน แล้วอาจไม่ต้องถามพี่เลย",
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
        ${acc("4. Timesheet ส่งยังไง? ส่งเมื่อไหร่?", "HR จะส่งไฟล์ Excel Timesheet ให้คุณทางอีเมลตั้งแต่วันแรก · กรอกเวลาเข้า-ออกงานและรายละเอียดที่ทำในแต่ละวัน · ส่งกลับให้ HR ทุกสิ้นเดือน (วันที่ 30–31) · ดูคอลัมน์และวิธีกรอกที่หน้า <a href=\"#/resources/timesheet\" data-link>Timesheet</a>")}
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
        ${acc("12. ต้องทำโปรเจกต์อะไรบ้างระหว่างฝึกงาน?", "Intern จะต้องรับผิดชอบโปรเจกต์ 3 ประเภท:<br/><strong>1. Project / Report</strong> — โปรเจกต์ที่นำส่งมหาวิทยาลัย<br/><strong>2. Dev Team Project</strong> — โปรเจกต์ที่ Dev Team led by EXZY Assign ให้<br/><strong>3. HR / BD Project</strong> — โปรเจกต์ที่ HR หรือ BD Assign ให้<br/>ทั้ง 3 ข้อต้องส่งตามระยะเวลาที่ทางมหาวิทยาลัยและ EXZY กำหนด")}
        ${acc("13. ไม่เข้าใจงานที่ได้รับมอบหมาย ทำยังไง?", "<strong>ถามพี่เลี้ยงทันที</strong> — ไม่ต้องเก็บไว้คนเดียว · เขียน notes ก่อนถามว่าตรงไหนที่ไม่เข้าใจ จะช่วยให้พี่เลี้ยงตอบได้ตรงประเด็น")}
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

    <script>
      (function() {
        var filter = document.getElementById('faq-filter');
        if (!filter) return;
        filter.addEventListener('click', function(e) {
          var btn = e.target.closest('.faq-filter-btn');
          if (!btn) return;
          var cat = btn.dataset.faqCat;
          document.querySelectorAll('.faq-filter-btn').forEach(function(b) { b.classList.remove('is-active'); });
          btn.classList.add('is-active');
          document.querySelectorAll('.faq-group').forEach(function(g) {
            if (cat === 'all' || g.dataset.faqGroup === cat) g.classList.add('is-visible');
            else g.classList.remove('is-visible');
          });
        });
      })();
    </script>
  `,
});
