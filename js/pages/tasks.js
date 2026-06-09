import { I } from '../icons.js';
import { pageWrap } from '../helpers.js';

export const renderHrBdProject = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Intern Tasks", null], ["HR / BD Project", null]],
  title: "HR / BD Project",
  lead: "งาน content ที่ HR หรือ BD assign ให้ intern ทำก่อนจบฝึกงาน เลือกรูปแบบได้ตามถนัด และต้องเผยแพร่บนช่องทาง public",
  toc: [
    ["about", "งานนี้คืออะไร"],
    ["format", "ทำเป็นอะไรได้บ้าง"],
    ["timeline", "ต้องส่งเมื่อไหร่"],
    ["submit", "ส่งงานยังไง"],
    ["examples", "ดูตัวอย่าง"],
  ],
  body: `
    <h2 id="about">งานนี้คืออะไร</h2>
    <p>HR / BD Project เป็นงานที่ให้ intern สร้าง content เกี่ยวกับการฝึกงานที่ EXZY เช่น culture, employee activity, ประสบการณ์การทำงาน, งานที่ได้ลองทำ หรือสิ่งที่อยากเล่าให้ intern รุ่นถัดไปเห็นภาพมากขึ้น</p>
    <p>งานนี้ไม่ได้มีไว้แค่โชว์ผลงาน แต่เป็นหนึ่งในสิ่งที่ intern ต้องรับผิดชอบระหว่างฝึกงาน คู่กับการกรอก Timesheet และงานที่ได้รับจากทีมของตัวเอง</p>

    <h2 id="format">ทำเป็นอะไรได้บ้าง</h2>
    <p>เลือกรูปแบบที่ถนัดได้ ไม่จำเป็นต้องเหมือน intern รุ่นก่อน ขอแค่เนื้อหาเกี่ยวข้องกับการฝึกงาน และเผยแพร่ให้คนอื่นเข้าถึงได้จริง</p>
    <div class="proj-cards">
      <div class="proj-card anim-up">
        <div class="proj-num">01</div>
        <h3>Video / Short Clip</h3>
        <p>คลิปรีวิวฝึกงาน คลิปเล่าวันทำงาน หรือ short video สำหรับ TikTok, Reels หรือ YouTube Shorts</p>
      </div>
      <div class="proj-card anim-up" data-delay="80">
        <div class="proj-num">02</div>
        <h3>Article / Blog</h3>
        <p>บทความเล่าประสบการณ์ สิ่งที่ได้ลองทำ หรือคำแนะนำสำหรับ intern รุ่นถัดไป</p>
      </div>
      <div class="proj-card anim-up" data-delay="160">
        <div class="proj-num">03</div>
        <h3>Graphic / Post</h3>
        <p>ภาพสรุป carousel หรือ post ที่เล่าเรื่องการฝึกงานให้อ่านง่ายบน social หรือ public website</p>
      </div>
    </div>

    <h2 id="timeline">ต้องส่งเมื่อไหร่</h2>
    <p>ควรส่งงานนี้อย่างน้อย <strong>2 อาทิตย์ก่อนจบการฝึกงาน</strong> เพื่อให้มีเวลาตรวจความเรียบร้อย แชร์ลิงก์ และแก้ไขถ้าจำเป็น</p>
    <ul>
      <li>เริ่มคิดหัวข้อได้ตั้งแต่ช่วงกลางการฝึกงาน หลังจากเห็นงานและทีมชัดขึ้น</li>
      <li>ทำ draft หรือ outline ก่อน เพื่อเช็กว่าเนื้อหาไม่หลุดจากโจทย์</li>
      <li>เผยแพร่บนช่องทาง public แล้วส่งลิงก์ตามขั้นตอนที่ HR หรือ BD แจ้ง</li>
    </ul>

    <h2 id="submit">ส่งงานยังไง</h2>
    <p>ชิ้นงานต้องอยู่บนช่องทางที่คนอื่นเปิดดูได้ เช่น social media, Medium, public blog หรือ website ที่เปิดให้เข้าถึงได้ ไม่ใช่ไฟล์ส่วนตัวที่เปิดไม่ได้จากภายนอก</p>
    <div class="callout anim-up">
      <span class="ic">${I.doc}</span>
      <div>
        <h3>สิ่งที่ควรส่งให้ครบ</h3>
        <p>ส่งลิงก์ชิ้นงาน public พร้อมชื่อชิ้นงาน รูปแบบที่ทำ และชื่อช่องทางที่โพสต์ ถ้ามีข้อกำหนดเพิ่มในรอบของคุณ ให้ยึดตามที่ HR หรือ BD แจ้งเป็นหลัก</p>
      </div>
    </div>

    <h2 id="examples">ดูตัวอย่างจาก intern รุ่นก่อน</h2>
    <p>Showcase คือพื้นที่รวมตัวอย่างงานของ intern รุ่นก่อน ใช้ดูแนวทางได้ แต่ไม่ต้องทำซ้ำรูปแบบเดิม เลือกวิธีเล่าที่เหมาะกับตัวเองและโจทย์ที่ได้รับ</p>
    <div class="page-cta-strip">
      <div>
        <h3>ยังไม่แน่ใจว่าจะทำแบบไหนดี?</h3>
        <p>เริ่มจากดูตัวอย่างคลิป บทความ และโพสต์ที่ intern รุ่นก่อนเผยแพร่ไว้ แล้วค่อยเลือก format ที่เข้ากับตัวเอง</p>
      </div>
      <div class="cta-btns">
        <a href="#/showcase/experiences" class="btn btn-ghost" data-link>ดู Intern Experiences ${I.arrow}</a>
        <a href="#/showcase/blog" class="btn btn-primary" data-link>ดู Intern Blog ${I.arrow}</a>
      </div>
    </div>
  `,
});
