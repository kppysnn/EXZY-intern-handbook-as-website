export const renderHome = () => `

<section class="ex-home-hero" aria-label="EXZY Intern Handbook">
  <div class="ex-home-hero-inner">
    <div class="ex-home-copy">
      <p class="ex-home-kicker"><span></span>Official Intern Handbook</p>
      <h1>EXZY Intern Handbook</h1>
      <p class="ex-home-lead">คู่มือกลางสำหรับข้อมูลที่ Intern ต้องใช้หลัง Orientation: ออฟฟิศ นโยบาย คนที่ควรรู้จัก Timesheet คำถามที่พบบ่อย และเรื่องเล่าจากรุ่นพี่</p>
      <div class="ex-home-actions">
        <a href="#ex-home-contents" class="ex-home-primary">
          เปิดสารบัญ Handbook
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </a>
        <a href="#/first-day" class="ex-home-secondary" data-link>ไปที่ Day 1 Guide</a>
      </div>
    </div>

    <div class="ex-binder-scene fdb-reveal fdb-delay1" aria-label="แฟ้มดิจิทัล EXZY Intern Handbook">
      <div class="ex-binder-stack" aria-hidden="true">
        <div class="ex-binder-tab ex-binder-tab-1">Office</div>
        <div class="ex-binder-tab ex-binder-tab-2">People</div>
        <div class="ex-binder-tab ex-binder-tab-3">Policy</div>
        <div class="ex-binder-tab ex-binder-tab-4">Resources</div>
        <div class="ex-binder-page ex-binder-page-1">
          <span></span><span></span><span></span>
        </div>
        <div class="ex-binder-page ex-binder-page-2">
          <span></span><span></span><span></span>
        </div>
        <div class="ex-binder-cover">
          <div class="ex-binder-cover-top">
            <span class="ex-binder-logo">EXZY</span>
            <span class="ex-binder-year">Internship</span>
          </div>
          <div class="ex-binder-title">
            <span>Intern</span>
            <strong>Handbook</strong>
          </div>
          <div class="ex-binder-cover-lines">
            <span></span><span></span><span></span>
          </div>
          <div class="ex-binder-bottom">
            <span>Orientation & Office</span>
            <span>Policy</span>
            <span>Resources</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="ex-home-start" aria-labelledby="ex-home-start-title">
  <div class="ex-home-start-inner">
    <div class="ex-home-section-intro fdb-reveal">
      <h2 id="ex-home-start-title">เริ่มจากหน้าที่ใช้บ่อยที่สุด</h2>
      <p>ถ้าเพิ่งจบ Orientation หรือกำลังกลับมาเปิดข้อมูลระหว่างฝึกงาน สามหน้านี้คือจุดเริ่มที่เร็วที่สุด</p>
    </div>

    <div class="ex-start-grid">
      <a href="#/first-day" class="ex-start-card ex-start-card-primary fdb-reveal" data-link>
        <span class="ex-start-index">Start</span>
        <h3>Day 1 Guide</h3>
        <p>ภาพรวมของวันแรก สิ่งที่ต้องทำ และสิ่งที่จะได้เจอในช่วงเริ่มต้น</p>
        <strong>เปิดคู่มือวันแรก</strong>
      </a>
      <a href="#/getting-started/orientation" class="ex-start-card fdb-reveal fdb-delay1" data-link>
        <span class="ex-start-index">After Orientation</span>
        <h3>Orientation</h3>
        <p>กลับมาดูสไลด์ ค่านิยม โปรเจกต์ และข้อมูลพื้นฐานของ EXZY</p>
        <strong>ทบทวน Orientation</strong>
      </a>
      <a href="#/resources/timesheet" class="ex-start-card fdb-reveal fdb-delay2" data-link>
        <span class="ex-start-index">Every Month</span>
        <h3>Timesheet</h3>
        <p>ดูวิธีกรอก เวลาในการส่ง และเอกสารที่ต้องยื่นให้ HR</p>
        <strong>ดูวิธีกรอก Timesheet</strong>
      </a>
    </div>
  </div>
</section>

<section class="ex-home-contents" id="ex-home-contents" aria-labelledby="ex-home-contents-title">
  <div class="ex-home-contents-inner">
    <div class="ex-home-section-intro ex-home-section-intro-left fdb-reveal">
      <h2 id="ex-home-contents-title">Handbook Contents</h2>
      <p>เลือกหมวดที่ต้องการ แล้วเข้าไปอ่านรายละเอียดเต็มในหน้าของหมวดนั้น ๆ</p>
    </div>

    <div class="ex-chapter-index" aria-label="สารบัญ EXZY Intern Handbook">
      <article class="ex-chapter-row fdb-reveal">
        <div class="ex-chapter-mark"><span>01</span></div>
        <div class="ex-chapter-body">
          <p>Orientation & Office</p>
          <h3>เริ่มใช้งานออฟฟิศให้คล่อง</h3>
          <div class="ex-chapter-links">
            <a href="#/getting-started/orientation" data-link>Orientation</a>
            <a href="#/getting-started/wifi" data-link>Office Wi-Fi</a>
            <a href="#/getting-started/meeting-rooms" data-link>Meeting Rooms</a>
          </div>
        </div>
      </article>

      <article class="ex-chapter-row fdb-reveal fdb-delay1">
        <div class="ex-chapter-mark"><span>02</span></div>
        <div class="ex-chapter-body">
          <p>Company & People</p>
          <h3>รู้จักทีม โครงสร้าง และช่องทางติดต่อ</h3>
          <div class="ex-chapter-links">
            <a href="#/employee/org-chart" data-link>โครงสร้างองค์กร</a>
            <a href="#/employee/directory" data-link>Employee Contact</a>
          </div>
        </div>
      </article>

      <article class="ex-chapter-row fdb-reveal fdb-delay2">
        <div class="ex-chapter-mark"><span>03</span></div>
        <div class="ex-chapter-body">
          <p>Work Policy</p>
          <h3>กติกาการทำงานและสิ่งที่ควรรู้ระหว่างฝึกงาน</h3>
          <div class="ex-chapter-links">
            <a href="#/policy/code-of-conduct" data-link>Core Values</a>
            <a href="#/policy/internship" data-link>Internship Policy</a>
            <a href="#/policy/dress-code" data-link>Dress Code</a>
            <a href="#/policy/leave" data-link>Leave & Absence</a>
          </div>
        </div>
      </article>

      <article class="ex-chapter-row fdb-reveal fdb-delay1">
        <div class="ex-chapter-mark"><span>04</span></div>
        <div class="ex-chapter-body">
          <p>Resources</p>
          <h3>เอกสารและคำตอบที่กลับมาเปิดซ้ำได้เสมอ</h3>
          <div class="ex-chapter-links">
            <a href="#/resources/timesheet" data-link>Timesheet</a>
            <a href="#/resources/faqs" data-link>FAQs</a>
          </div>
        </div>
      </article>

      <article class="ex-chapter-row fdb-reveal fdb-delay2">
        <div class="ex-chapter-mark"><span>05</span></div>
        <div class="ex-chapter-body">
          <p>Showcase</p>
          <h3>ดูประสบการณ์จริงจาก intern รุ่นพี่</h3>
          <div class="ex-chapter-links">
            <a href="#/showcase/experiences" data-link>Intern Experiences</a>
            <a href="#/showcase/blog" data-link>Intern's Blog</a>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="ex-home-quick" aria-labelledby="ex-home-quick-title">
  <div class="ex-home-quick-inner">
    <div class="ex-home-section-intro fdb-reveal">
      <h2 id="ex-home-quick-title">กลับมาเปิดบ่อย</h2>
      <p>ทางลัดสำหรับข้อมูลที่มักต้องใช้ระหว่างฝึกงาน</p>
    </div>

    <div class="ex-quick-list">
      <a href="#/getting-started/wifi" data-link>
        <span>Wi-Fi</span>
        <strong>เชื่อมต่ออินเทอร์เน็ตในออฟฟิศ</strong>
      </a>
      <a href="#/employee/directory" data-link>
        <span>Contact</span>
        <strong>ค้นหาคนในทีมและช่องทางติดต่อ</strong>
      </a>
      <a href="#/policy/leave" data-link>
        <span>Leave</span>
        <strong>ขั้นตอนการแจ้งลาและการป่วย</strong>
      </a>
      <a href="#/resources/faqs" data-link>
        <span>FAQs</span>
        <strong>คำถามที่ intern มักสงสัย</strong>
      </a>
    </div>
  </div>
</section>
`;
