# EXZY Intern Handbook Website

เว็บไซต์ Intern Handbook เวอร์ชันใช้งานจริงจากไฟล์ต้นทาง:

- `Mini-Internship Orientation.pdf`
- `Exzy - Employee Contact.xlsx`
- `Noto_Sans_Thai.zip`

## ไฟล์หลัก

- `index.html`
- `styles.css`
- `app.js`
- `employee-data.js` (generated from Excel)
- `logo.png` (ใช้โลโก้ที่มีคำว่า EXZY)
- `mini-internship-orientation.pdf` (สำเนาใช้งานในเว็บ)
- `exzy-employee-contact.xlsx` (สำเนาใช้งานในเว็บ)

## สิ่งที่อัปเดตแล้ว

1. ใช้โลโก้ `Logo Exzy_Horizon.png` และพื้นหลังขาว
2. ฝัง `Mini-Internship Orientation.pdf` บนหน้า Orientation/Resources
3. หน้า Employee ใช้ข้อมูลจริงจาก `Exzy - Employee Contact.xlsx`
   - Department Teams
   - Org Chart (group by team)
   - Employee Directory พร้อมค้นหาและ filter ทีม
4. หน้า Code of Conduct ใช้ Core Values จากสไลด์ Orientation
5. หน้า Wi-Fi ใช้ข้อมูลจริง:
   - `ExzyUniFi / maetyzxe`
   - `Exzy_Guest / imaguest`
6. หน้า Timesheet เป็นคู่มือขั้นตอน (ไม่เปิดฟอร์มกรอกจากเว็บนี้)
7. `Intern Experiences` มีหลายช่อง และ HR แก้ไขได้ในหน้าเว็บ
   - ปุ่ม `Edit by HR`
   - ปุ่ม `Save`
   - ปุ่ม `Reset Default`
   - บันทึกผ่าน localStorage
8. เปลี่ยนฟอนต์เป็น Noto Sans Thai แบบ local (`./static/*.ttf`)

## วิธีเปิดเว็บ

```bash
cd "/Users/kppysn/Desktop/kppysN_workie/internship 1/intern_handbook"
python3 -m http.server 5500
```

เปิด:
- `http://localhost:5500`
# EXZY-intern-handbook-as-website
