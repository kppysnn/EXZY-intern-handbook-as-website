import { I } from '../icons.js';
import { pageWrap } from '../helpers.js';

export const renderHrBdProject = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Intern Tasks", null], ["HR Project", null]],
  title: "HR Project",
  lead: "งานที่ HR assign ให้ intern รับผิดชอบในช่วงฝึกงาน เลือกรูปแบบได้ตามที่ถนัด และต้องเผยแพร่บนช่องทาง public",
  toc: [
    ["about", "assignment นี้คืออะไร ?"],
    ["format", "ทำเป็นรูปแบบไหนได้บ้าง ?"],
    ["timeline", "ต้องส่งเมื่อไหร่ ?"],
    ["submit", "ส่งงานยังไง ?"],
    ["examples", "ดูตัวอย่าง"],
  ],
  body: `
    <h2 id="about">assignment นี้คืออะไร ?</h2>
    <p>HR Project เป็น assignment ที่ให้ intern สร้าง content เกี่ยวกับการฝึกงานที่ EXZY เช่น culture, employee activity, ประสบการณ์การทำงาน, project ที่ได้รับมอบหมายจากทีม หรือสิ่งที่อยากเล่าหรือสื่อสารให้คนเห็นภาพการฝึกงานกับ EXZY มากขึ้น</p>
    <p>งานนี้เป็นงานที่ intern ต้องรับผิดชอบระหว่างฝึกงาน คู่กับการกรอก Timesheet และงานที่ได้รับจากทีมของตัวเอง</p>

    <h2 id="format">ทำเป็นรูปแบบไหนได้บ้าง ?</h2>
    <p>เลือกรูปแบบที่ถนัดได้ ไม่จำเป็นต้องทำเหมือน intern คนอื่น ๆ ขอแค่เนื้อหาเกี่ยวข้องกับการฝึกงาน และสามารถเผยแพร่ให้คนอื่นเข้าถึงได้จริง</p>
    <div class="proj-cards">
      <div class="proj-card anim-up">
        <div class="proj-num">01</div>
        <h3>Video / Short Clip</h3>
        <p>คลิปรีวิวฝึกงาน คลิปเล่าเรื่อง<br>เกี่ยวกับงาน หรือ short video สำหรับ TikTok, Reels หรือ <br>YouTube Shorts</p>
      </div>
      <div class="proj-card anim-up" data-delay="80">
        <div class="proj-num">02</div>
        <h3>Article / Blog</h3>
        <p>บทความเล่าเรื่องงานหรือ project ที่ได้รับมอบหมายจากทีม หรืออยากสื่อสารให้คนเห็นภาพการฝึกงานกับ EXZY มากขึ้น</p>
      </div>
      <div class="proj-card anim-up" data-delay="160">
        <div class="proj-num">03</div>
        <h3>Graphic / Post</h3>
        <p>post ที่เล่าเรื่องการฝึกงาน<br>ให้อ่านง่ายบน social <br>หรือ public website <br>ที่ใส่ภาพประกอบการเล่าถึง<br>ประสบการณ์การฝึกงาน</p>
      </div>  
    </div>

    <h2 id="timeline">ต้องส่งเมื่อไหร่ ?</h2>
    <p>ควรส่งงานนี้อย่างน้อย <strong>2 อาทิตย์ก่อนจบการฝึกงาน</strong> เพื่อให้มีเวลาตรวจความเรียบร้อย และแก้ไขก่อนส่งงานจริง ⏰</p>
    <ul>
      <li>วางแผนและปรึกษาพี่เลี้ยงว่าอยากทำงานออกมาในรูปแบบไหน</li>
      <li>ทำ draft หรือ outline ก่อน เพื่อเช็กว่าเนื้อหาไม่หลุดจากโจทย์</li>
      <li>ส่งให้พี่เลี้ยงและ HR ตรวจงาน</li>
      <li>เผยแพร่บนช่องทาง public แล้วส่งงานกับ HR โดยตรง</li>
    </ul>

    <h2 id="submit">ส่งงานยังไง ?</h2>
    <p>เมื่อตรวจสอบและได้รับการยืนยันจาก HR และพี่เลี้ยงแล้ว สามารถนำคอนเทนต์ไปเผยแพร่บนช่องทางสาธารณะ <br>เช่น social media ต่าง ๆ, Medium, public blog หรือ website ที่เปิดให้เข้าถึงได้ ไม่ใช่ไฟล์ส่วนตัวที่เปิดไม่ได้จากภายนอก</p>
    <h2 id="examples">ดูตัวอย่างจาก intern รุ่นก่อนได้ที่</h2>
    <p>Showcase คือพื้นที่รวมผลงานของ intern รุ่นก่อน ใช้ดูเป็นแนวทางได้ ไม่จำเป็นต้องทำเหมือนคนอื่น ๆ สามารถเลือกวิธีเล่าประสบการณ์ที่เหมาะกับตัวเองและโจทย์ที่ได้เลย</p>
    <a href="#/showcase/experiences" class="btn btn-primary" data-link>ดู Showcase ตัวอย่าง ${I.arrow}</a>
  `,
});
