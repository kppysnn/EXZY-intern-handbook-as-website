# EXZY Intern Handbook — Project Rules for Claude

## Copy & Tone Workflow (MANDATORY)

เมื่อผู้ใช้สั่งให้แก้ข้อความ ปรับคำ ปรับ copy รีไรต์ tone หรือแก้ headline/lead/CTA/label/FAQ/policy copy ให้เปิดอ่านไฟล์นี้ก่อนเสมอ:

```
docs/exzy-intern-handbook-tone-guide.md
```

แนวทางหลัก:

- เขียนเหมือนเพื่อนร่วมงานที่รู้ทางแล้ว ช่วยพา intern ใหม่เช็กสิ่งที่ต้องทำแบบไม่กดดัน
- ชัดเจน เป็นกันเองแบบมืออาชีพ อ่านง่าย ไม่แข็ง ไม่เว่อร์ และไม่ดูเหมือน AI เขียน
- บอก action ที่ intern ต้องทำจริง ไม่ใช้คำสวยแต่กว้าง
- หลีกเลี่ยงคำแนวโฆษณา/AI เช่น “เริ่มต้นการเดินทาง”, “ปลดล็อกศักยภาพ”, “ยกระดับประสบการณ์”, “ศูนย์รวมข้อมูลครบวงจร”
- Thai copy เป็น primary voice; English labels ใช้เท่าที่จำเป็นและต้องเข้ากับบริบท handbook

หลังแก้ copy ใน `js/pages/*.js` หรือ `app.js` ให้รัน `npm run build` เพื่อ sync `bundle.js`

## Build & Deploy Workflow (MANDATORY)

เมื่อผู้ใช้สั่ง "commit and push", "push ขึ้น git", "deploy ไป Vercel" หรือคำที่มีความหมายเดียวกัน ให้ทำตามขั้นตอนนี้เสมอ:

### ขั้นตอน (ห้ามข้าม)

```
1. แก้ไขไฟล์ source จริง: js/pages/*.js (home.js, first-day.js ฯลฯ)
   → ห้ามแก้ bundle.js โดยตรง (มันคือ build output ไม่ใช่ source)

2. รัน build เพื่อ regenerate bundle.js จาก source ที่แก้ไขแล้ว:
   npm run build

3. Verify ว่า build สำเร็จและ content ครบ:
   node --check bundle.js

4. git add ทุกไฟล์ที่เปลี่ยน รวมถึง:
   - js/pages/*.js (source files ที่แก้)
   - bundle.js (built output)
   - styles.css (ถ้าแก้)
   - index.html (ถ้าแก้)
   - vercel.json (ถ้าแก้)

5. git commit พร้อม message ที่อธิบาย changes

6. git push origin main
```

### เหตุผล

- Vercel รัน `npm run build` ทุกครั้งที่ deploy
- ถ้าแก้ `bundle.js` โดยตรงแต่ไม่ sync กลับ source → Vercel จะ rebuild จาก source เก่า ทำให้ changes หาย
- Source of truth คือ `js/pages/*.js` และ `app.js`

### Project Structure

```
app.js              ← entry point (import จาก js/pages/*)
js/pages/
  home.js           ← renderHome() — หน้า Home
  first-day.js      ← renderFirstDay() — หน้า First Day
  orientation.js
  wifi.js
  ... (หน้าอื่นๆ)
bundle.js           ← BUILD OUTPUT (esbuild จาก app.js)
styles.css          ← ไฟล์ CSS ทั้งหมด
index.html          ← HTML shell (มี versioned CSS link)
vercel.json         ← Vercel config (buildCommand: npm run build)
```

### Quick Reference

```bash
# แก้หน้า home
code js/pages/home.js

# แก้หน้า first-day
code js/pages/first-day.js

# Build + commit + push
npm run build && \
git add js/pages/ bundle.js styles.css index.html && \
git commit -m "your message" && \
git push origin main
```
