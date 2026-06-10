import { I } from '../icons.js';
import { pageWrap } from '../helpers.js';

export const renderHrBdProject = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Intern Tasks", null], ["HR Project", null]],
  title: "HR Project",
  lead: "งานที่ HR assign ให้ intern ทำก่อนจบฝึกงาน เลือกรูปแบบได้ตามที่ถนัด และต้องเผยแพร่บนช่องทาง public",
  toc: [
    ["about", "งานนี้คืองานอะไร ?"],
    ["format", "ทำเป็นรูปแบบไหนได้บ้าง ?"],
    ["timeline", "ต้องส่งเมื่อไหร่ ?"],
    ["submit", "ส่งงานยังไง ?"],
    ["examples", "ดูตัวอย่าง"],
  ],
  body: `
    <h2 id="about">งานนี้คืองานอะไร ?</h2>
    <p>HR Project เป็นงานที่ให้ intern สร้าง content เกี่ยวกับการฝึกงานที่ EXZY เช่น culture, employee activity, ประสบการณ์การทำงาน, งานที่ได้ลองทำ หรือสิ่งที่อยากเล่าให้หรือสื่อสารให้คนอื่นเห็นภาพการทำงานกับ EXZY มากขึ้น</p>
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
        <p>บทความเล่าประสบการณ์การฝึกงาน <br>สิ่งที่ได้ลองทำ หรือคำแนะนำ<br>สำหรับ intern คนอื่น ๆ</p>
      </div>
      <div class="proj-card anim-up" data-delay="160">
        <div class="proj-num">03</div>
        <h3>Graphic / Post</h3>
        <p>post ที่เล่าเรื่องการฝึกงาน<br>ให้อ่านง่ายบน social <br>หรือ public website <br>ที่ใส่ภาพประกอบการเล่าถึง<br>ประสบการณ์การฝึกงาน</p>
      </div>  
    </div>

    <h2 id="timeline">ต้องส่งเมื่อไหร่ ?</h2>
    <p>ควรส่งงานนี้อย่างน้อย <strong>2 อาทิตย์ก่อนจบการฝึกงาน</strong> เพื่อให้มีเวลาตรวจความเรียบร้อย แชร์ลิงก์ และแก้ไขถ้าจำเป็น</p>
    <ul>
      <li>เริ่มคิดหัวข้อได้ตั้งแต่เริ่มการฝึกงาน หลังจากเริ่มเห็นงานและทีมชัดขึ้น</li>
      <li>ทำ draft หรือ outline ก่อน เพื่อเช็กว่าเนื้อหาไม่หลุดจากโจทย์</li>
      <li>เผยแพร่บนช่องทาง public แล้วส่งงานกับ hr โดยตรง</li>
    </ul>

    <h2 id="submit">ส่งงานยังไง ?</h2>
    <p>ชิ้นงานต้องอยู่บนช่องทางที่เป็นสาธารณะ เช่น social media ต่าง ๆ, Medium, public blog หรือ website ที่เปิดให้เข้าถึงได้ ไม่ใช่ไฟล์ส่วนตัวที่เปิดไม่ได้จากภายนอก</p>
    <h2 id="examples">ดูตัวอย่างจาก intern รุ่นก่อน</h2>
    <p>Showcase คือพื้นที่รวมตัวอย่างงานของ intern รุ่นก่อน ใช้ดูเป็นแนวทางได้ ไม่จำเป็นต้องทำเหมือนคนอื่น ๆ สามารถเลือกวิธีเล่าประสบการณ์ที่เหมาะกับตัวเองและโจทย์ที่ได้เลย</p>
    <div class="page-cta-strip">
      <div>
        <h3>ยังไม่แน่ใจว่าจะทำแบบไหนดี ?</h3>
        <p>เริ่มจากดูตัวอย่างคลิป บทความ และโพสต์ของ intern รุ่นก่อน แล้วค่อยเลือกทำสิ่งที่เหมาะกับตัวเอง</p>
      </div>
      <div class="cta-btns">
        <a href="#/showcase/experiences" class="btn btn-ghost" data-link>ดู Intern Experiences ${I.arrow}</a>
        <a href="#/showcase/blog" class="btn btn-primary" data-link>ดู Intern Blog ${I.arrow}</a>
      </div>
    </div>
  `,
});
