import { I } from '../icons.js';
import { pageWrap } from '../helpers.js';
import { loadAdminData } from '../auth.js';

export const renderCodeOfConduct = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Work Policy", null], ["Core Values", null]],
  title: "EXZY Core Values",
  lead: "ค่านิยมที่สะท้อนอยู่ในงาน ทีม และวิธีคิดของ EXZY",
  body: `
    <div class="cv-wrap">

      <div class="cv-card cv-c1 anim-up" data-delay="0">
        <div class="cv-card-head">
          <div class="cv-card-num-col">
            <span class="cv-card-big-num">01</span>
          </div>
          <div class="cv-card-text-col">
            <div class="cv-card-name">Win as a Team</div>
            <p class="cv-card-tagline">รู้เป้าหมายร่วมกัน ทำงานหนักในส่วนของตน และช่วยเหลือทีมให้ไปถึงเป้าหมายด้วยกัน</p>
          </div>
        </div>
        <div class="cv-card-body">
          <div class="cv-point"><span class="cv-point-k">Goal</span><span class="cv-point-v">รู้เป้าหมายของทีม วางแผนเพื่อบรรลุเป้าหมายเดียวกัน</span></div>
          <div class="cv-point"><span class="cv-point-k">Work+</span><span class="cv-point-v">รับผิดชอบงานในส่วนตัวเองอย่างดี เพื่อให้ทีมบรรลุเป้าหมายได้ทันเวลา</span></div>
          <div class="cv-point"><span class="cv-point-k">Support</span><span class="cv-point-v">ปรับตัวและสนับสนุนทีม สื่อสารทุกครั้งที่พบอุปสรรค</span></div>
        </div>
      </div>

      <div class="cv-card cv-c2 anim-up" data-delay="80">
        <div class="cv-card-head">
          <div class="cv-card-num-col">
            <span class="cv-card-big-num">02</span>
          </div>
          <div class="cv-card-text-col">
            <div class="cv-card-name">Innovative</div>
            <p class="cv-card-tagline">กล้าคิดนอกกรอบ เรียนรู้สิ่งใหม่อยู่เสมอ และสร้างคุณค่าจากเทคโนโลยี</p>
          </div>
        </div>
        <div class="cv-card-body">
          <div class="cv-point"><span class="cv-point-k">Value added</span><span class="cv-point-v">สร้างคุณค่าใหม่ด้วย technology</span></div>
          <div class="cv-point"><span class="cv-point-k">Learn &amp; Improve</span><span class="cv-point-v">อัปสกิลตัวเองอยู่เสมอ ไม่หยุดพัฒนา</span></div>
          <div class="cv-point"><span class="cv-point-k">Take risk</span><span class="cv-point-v">ประเมินความเสี่ยง แล้วกล้าตัดสินใจ</span></div>
        </div>
      </div>

      <div class="cv-card cv-c3 anim-up" data-delay="160">
        <div class="cv-card-head">
          <div class="cv-card-num-col">
            <span class="cv-card-big-num">03</span>
          </div>
          <div class="cv-card-text-col">
            <div class="cv-card-name">Positive &amp; Open</div>
            <p class="cv-card-tagline">มีพลังงานที่ดี เปิดรับฟังทุกความคิดเห็น และพูดตรงไปตรงมาอย่างสร้างสรรค์</p>
          </div>
        </div>
        <div class="cv-card-body">
          <div class="cv-point"><span class="cv-point-k">Energy</span><span class="cv-point-v">กระตือรือร้น สร้างบรรยากาศการทำงานที่ดี</span></div>
          <div class="cv-point"><span class="cv-point-k">Listening</span><span class="cv-point-v">เปิดใจรับฟังไอเดียและความคิดเห็นที่แตกต่าง</span></div>
          <div class="cv-point"><span class="cv-point-k">Speaking</span><span class="cv-point-v">สื่อสารอย่างจริงใจ ให้ feedback เพื่อพัฒนากัน</span></div>
        </div>
      </div>

      <div class="cv-card cv-c4 anim-up" data-delay="240">
        <div class="cv-card-head">
          <div class="cv-card-num-col">
            <span class="cv-card-big-num">04</span>
          </div>
          <div class="cv-card-text-col">
            <div class="cv-card-name">Professional &amp; Dynamic</div>
            <p class="cv-card-tagline">ทำงานอย่างมืออาชีพ ยืดหยุ่นได้ และส่งมอบงานตามที่รับปากเสมอ</p>
          </div>
        </div>
        <div class="cv-card-body">
          <div class="cv-point"><span class="cv-point-k">Adapt</span><span class="cv-point-v">ปรับตัวได้เร็วในทุกสถานการณ์</span></div>
          <div class="cv-point"><span class="cv-point-k">Commit</span><span class="cv-point-v">ทำตามสิ่งที่รับปาก ส่งงานได้ตามกำหนด</span></div>
          <div class="cv-point"><span class="cv-point-k">Prepare &amp; Reliable</span><span class="cv-point-v">เตรียมตัวก่อนทุกครั้ง มีความน่าเชื่อถือในทุกงาน</span></div>
        </div>
      </div>

      <div class="cv-card cv-c5 anim-up" data-delay="320">
        <div class="cv-card-head">
          <div class="cv-card-num-col">
            <span class="cv-card-big-num">05</span>
          </div>
          <div class="cv-card-text-col">
            <div class="cv-card-name">Aesthetic Design</div>
            <p class="cv-card-tagline">ทุกงานต้องสะอาด เรียบร้อย สวยงาม และสร้างประสบการณ์ที่ดีในทุกจุดสัมผัส</p>
          </div>
        </div>
        <div class="cv-card-body">
          <div class="cv-point"><span class="cv-point-k">Tidiness</span><span class="cv-point-v">สะอาด เรียบร้อย ทั้งการแต่งกายและการจัดการงาน</span></div>
          <div class="cv-point"><span class="cv-point-k">Good Experience</span><span class="cv-point-v">ส่งมอบสิ่งที่ผู้รับได้รับประสบการณ์ที่ดี</span></div>
          <div class="cv-point"><span class="cv-point-k">WOW &amp; Cool</span><span class="cv-point-v">ทำงานให้น่าประทับใจ โดดเด่น และเกินความคาดหวัง</span></div>
        </div>
      </div>

    </div>

    <div class="callout" style="margin-top:36px;">
      <span class="ic">${I.sparkle}</span>
      <div>
        <h4>นำ Core Values ไปปรับใช้ในการทำงาน</h4>
        <p>ค่านิยมเหล่านี้เป็นแกนหลักของการทำงานของ EXZY หากเข้าใจและปรับใช้ค่านิยมเหล่านี้กับการทำงานของตัวเอง แปลว่าคุณกำลังเข้าใจความเป็น EXZY มากขึ้นแล้วล่ะ!</p>
      </div>
    </div>
  `,
});

export const renderInternshipPolicy = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Work Policy", null], ["Internship Policy", null]],
  title: "Internship Policy",
  lead: "เรื่องพื้นฐานที่ intern ควรรู้เกี่ยวกับเวลาเข้างาน สถานที่ฝึกงาน และนับชั่วโมงฝึกงาน",
  body: `
    <!-- Policy Hero Banner V2 -->
    <div class="policy-hero-v2 anim-up">
      <div class="phv2-left">
        <div class="phv2-eyebrow">
          <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="8" cy="8" r="7"/><path d="M8 5v3.5l2 2"/></svg>
          เวลาทำงาน
        </div>
        <div class="phv2-time">
          <span class="phv2-shift">9:00 – 18:00</span>
          <span class="phv2-or">หรือ</span>
          <span class="phv2-shift">10:00 – 19:00</span>
        </div>
        <p class="phv2-sub">จันทร์ – ศุกร์ · ขึ้นอยู่กับแผนกที่ได้รับมอบหมาย</p>
      </div>
      <div class="phv2-stats">
        <div class="phv2-stat">
          <span class="phv2-num" data-count-to="8">8</span>
          <span class="phv2-unit">ชั่วโมง</span>
          <span class="phv2-desc">ต่อวัน</span>
        </div>
        <div class="phv2-divider"></div>
        <div class="phv2-stat">
          <span class="phv2-num" data-count-to="1">1</span>
          <span class="phv2-unit">ชั่วโมง</span>
          <span class="phv2-desc">พักเที่ยง</span>
        </div>
        <div class="phv2-divider"></div>
        <div class="phv2-stat">
          <span class="phv2-num" data-count-to="15">15</span>
          <span class="phv2-unit">วัน</span>
          <span class="phv2-desc">หยุด/ปี</span>
        </div>
      </div>
    </div>

    <h2>ตารางวันทำงาน (แล้วแต่แผนก)</h2>
    <div class="shift-row anim-up">
      <div class="shift-item">
        <div class="shift-label">บางแผนก</div>
        <div class="shift-time">9:00 – 18:00</div>
        <div class="shift-noon">พักเที่ยง 12:00 – 13:00</div>
      </div>
      <div class="shift-divider">หรือ</div>
      <div class="shift-item">
        <div class="shift-label">บางแผนก</div>
        <div class="shift-time">10:00 – 19:00</div>
        <div class="shift-noon">พักเที่ยง 12:00 – 13:00</div>
      </div>
    </div>
    <div class="callout anim-up" style="margin-bottom:28px;">
      <span class="ic">${I.info}</span>
      <div>
        <h3>เวลาทำงานขึ้นอยู่กับแผนกที่ตัวเองอยู่</h3>
        <p>ถามพี่เลี้ยงหรือ HR ว่าแผนกของตัวเองยึดตามเวลาไหน - ทำงาน 8 ชม. (ไม่รวมพักเที่ยง 1 ชม.) จันทร์ – ศุกร์</p>
      </div>
    </div>

    <h2>ข้อกำหนดสำคัญ</h2>
    <div class="rule-grid">
      <div class="rule-card">
        <div class="rule-icon">${I.door}</div>
        <div class="rule-body">
          <h3>มาออฟฟิศ หรือสถานที่ที่ Assign ไว้เท่านั้น</h3>
          <p>ต้องเข้าฝึกงานที่ออฟฟิศ EXZY หรือสถานที่ที่ทีม Assign ไว้เท่านั้น <br><strong>ไม่อนุญาต WFH</strong> สำหรับ Intern แต่หากมีความจำเป็น ต้องแจ้งพี่เลี้ยง<br>และติดต่อ HR ก่อนเสมอ</p>
        </div>
      </div>
      <div class="rule-card">
        <div class="rule-icon">${I.clock}</div>
        <div class="rule-body">
          <h3>ลงเวลาเข้า – ออกทุกวัน</h3>
          <p>กรอก Timesheet ทุกวันที่มาทำงาน — บริษัทจะเซ็นรับรองตามชั่วโมงฝึกงานจริง</p>
        </div>
      </div>
      <div class="rule-card">
        <div class="rule-icon">${I.doc}</div>
        <div class="rule-body">
          <h3>ดูแลชั่วโมงตัวเองด้วยนะ</h3>
          <p>บริหารชั่วโมงฝึกงานและรับผิดชอบเอกสารต่าง ๆ ด้วยตัวเอง — พี่เลี้ยงช่วยแนะนำได้ แต่ต้องติดตามเองด้วย</p>
        </div>
      </div>
      <div class="rule-card">
        <div class="rule-icon">${I.calendar}</div>
        <div class="rule-body">
          <h3>วันหยุดบริษัท 15 วัน/ปี</h3>
          <p>Subscribe Staff holiday calendar ไว้ได้เลย จะได้ไม่พลาดวันหยุดของบริษัท</p>
        </div>
      </div>
    </div>

  `,
});

export const renderDressCode = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Work Policy", null], ["Dress Code", null]],
  title: "Dress Code",
  lead: "แนวทางการแต่งกายที่ EXZY สามารถปรับตามแต่ละสถานการณ์",
  body: `
    <!-- Dress Hero V2 -->
    <div class="dress-hero-v2 anim-up">
      <div>
        <div class="dress-tag-v2" style="color:#ffffff;">EXZY Core Value · Aesthetic Design</div>
        <h2 style="color:#ffffff;">สะอาด เรียบร้อย เหมาะสม</h2>
        <p style="color:rgba(255,255,255,.82);">"สะอาดเรียบร้อย และเตรียมการแต่งกายให้เหมาะสม" — ตาม EXZY Core Values การแต่งกายที่ดี<br>คือส่วนหนึ่งของความเป็นมืออาชีพและสะท้อนค่านิยมของบริษัท</p>
      </div>
      <div class="dress-hero-img dress-hero-img--asset">
        <img src="./static/dress-code-outfits.png" alt="ตัวอย่างเสื้อผ้าและรองเท้าสำหรับแต่งกายแบบ Smart Casual ที่ EXZY" loading="lazy" />
      </div>
    </div>

    <h2>การแต่งกายในแต่ละสถานการณ์</h2>
    <div class="dress-grid-v2">
      <div class="dress-card-v2 anim-up">
        <div class="dress-card-v2-icon" style="background:var(--cyan-soft); color:var(--navy);">${I.shirt}</div>
        <div class="dress-card-v2-style" style="color:var(--navy);">Smart Casual</div>
        <h3>วันทำงานปกติ</h3>
        <ul>
          <li>เสื้อโปโล / เสื้อยืดที่สุภาพ</li>
          <li>กางเกงผ้า / กางเกงยีน</li>
          <li>รองเท้าผ้าใบ / คัทชู สีสุภาพ</li>
        </ul>
      </div>
      <div class="dress-card-v2 anim-up" data-delay="80">
        <div class="dress-card-v2-icon" style="background:var(--mist); color:var(--ink);">${I.people}</div>
        <div class="dress-card-v2-style" style="color:var(--ink);">Business Casual</div>
        <h3>มีนัดพบลูกค้า</h3>
        <ul>
          <li>เสื้อเชิ้ต</li>
          <li>กางเกง / กระโปรงทรงสุภาพ</li>
          <li>รองเท้าหุ้มส้นหรือคัทชู</li>
        </ul>
      </div>
    </div>

    <h2>สิ่งที่ไม่ควรใส่</h2>
    <div class="dress-dont-grid">
      <div class="dress-dont-item"><span class="dress-dont-x">✕</span> เสื้อกล้าม / เสื้อแขนกุด</div>
      <div class="dress-dont-item"><span class="dress-dont-x">✕</span> กางเกงขาสั้น (เหนือเข่า)</div>
      <div class="dress-dont-item"><span class="dress-dont-x">✕</span> รองเท้าแตะ (สามารถนำมาเปลี่ยนได้หากมีความจำเป็น เช่น ฝนตกหรือบาดเจ็บ)</div>
      <div class="dress-dont-item"><span class="dress-dont-x">✕</span> เสื้อผ้ารัดรูป / โป๊เปลือยเกินไป</div>
      <div class="dress-dont-item"><span class="dress-dont-x">✕</span> เสื้อที่มีลายไม่เหมาะสมในที่ทำงาน</div>
      <div class="dress-dont-item"><span class="dress-dont-x">✕</span> ชุดออกกำลังกาย</div>
    </div>

    <div class="callout anim-up">
      <span class="ic">${I.sparkle}</span>
      <div>
        <h4>เมื่อไม่แน่ใจ ให้สังเกตเพื่อนร่วมงานคนอื่นดู</h4>
        <p>ลองดูว่าพี่ ๆ ในออฟฟิศแต่งตัวกันยังไง หากสงสัยสามารถถามพี่เลี้ยงได้เลย</p>
      </div>
    </div>
  `,
});

export const renderLeave = () => {
  const { hr_email: hrEmail = "hr@exzyteam.com" } = loadAdminData();
  return pageWrap({
  crumbs: [["Home", "#/home"], ["Work Policy", null], ["Leave & Absence", null]],
  title: "Leave & Absence",
  lead: "ป่วยหรือมีธุระ — แจ้งพี่เลี้ยงและส่งอีเมล HR ตามขั้นตอนนี้",
  body: `
    <h2>วิธีการลางาน — 3 ขั้นตอน</h2>

    <div class="leave-process">
      <div class="leave-step anim-left" data-delay="0">
        <div class="leave-step-node">1</div>
        <div class="leave-step-card">
          <h4>แจ้งพี่เลี้ยงและทีม</h4>
          <p>แจ้งขอลากับพี่เลี้ยงและทีมก่อนเป็นอันดับแรก ก่อนส่งอีเมลให้ hr</p>
        </div>
      </div>
      <div class="leave-step anim-left" data-delay="100">
        <div class="leave-step-node">2</div>
        <div class="leave-step-card">
          <h4>ส่ง Email แจ้งการลาให้ HR</h4>
          <p>ส่งอีเมลแจ้งลาไปที่ <a href="mailto:${hrEmail}" class="inline-link">${hrEmail}</a> ระบุเหตุผลและจำนวนวันที่จะลา</p>
        </div>
      </div>
      <div class="leave-step anim-left" data-delay="200">
        <div class="leave-step-node">3</div>
        <div class="leave-step-card">
          <h4>CC อีเมลพี่เลี้ยงและทีม</h4>
          <p>CC อีเมลไปหาพี่เลี้ยงและทีมในอีเมลเดียวกันกับ hr เพื่อให้ทุกคนรับทราบ</p>
        </div>
      </div>
    </div>

    <div class="callout anim-up">
      <span class="ic">${I.info}</span>
      <div>
        <h4>วันที่ลาจะไม่นับเป็นชั่วโมงฝึกงาน</h4>
        <p>บริษัทเซ็นรับรองตามชั่วโมงฝึกงานจริงเท่านั้น หากลาบ่อยอาจส่งผลต่อชั่วโมงฝึกงานที่ต้องยืนยันกับทางมหาวิทยาลัย จัดการวันลาและชั่วโมงฝึกงานให้ดีนะ!</p>
      </div>
    </div>

    <h2>กำหนดเวลาแจ้งลา</h2>
    <div class="leave-deadline-row">
      <div class="leave-dl-card leave-dl-sick anim-up">
        <div class="leave-dl-type">ลาป่วย</div>
        <div class="leave-dl-time">แจ้ง hr ก่อน 11:00 น.</div>
        <div class="leave-dl-note">ของวันที่ลางาน</div>
      </div>
      <div class="leave-dl-card leave-dl-biz anim-up" data-delay="80">
        <div class="leave-dl-type">ลากิจธุระ</div>
        <div class="leave-dl-time">แจ้ง hr ล่วงหน้า 1 วัน</div>
        <div class="leave-dl-note">วันทำการก่อนวันลา</div>
      </div>
    </div>

    <div class="callout anim-up">
      <span class="ic">${I.shield}</span>
      <div>
        <h4>หากลามากเกินไป จะเกิดอะไรขึ้น ?</h4>
        <p>ถ้าลาบ่อยจนเกินไปและทีมเห็นว่าไม่เหมาะสม บริษัทอาจพิจารณายุติการฝึกงานและแจ้งมหาวิทยาลัย หากมีปัญหาอะไรลองปรึกษาพี่เลี้ยงก่อนดีที่สุด</p>
      </div>
    </div>
  `,
});
};
