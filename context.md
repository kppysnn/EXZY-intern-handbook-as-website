# Project Context: EXZY Intern Handbook

## Project Overview

EXZY Intern Handbook เป็นเว็บไซต์คู่มือสำหรับนักศึกษาฝึกงานของ EXZY Co., Ltd. ใช้เป็นแหล่งข้อมูลหลักในช่วงวันแรกและตลอดช่วงฝึกงาน เพื่อช่วยให้ intern เข้าใจขั้นตอนเริ่มงาน โครงสร้างบริษัท นโยบายการทำงาน ข้อมูล Wi-Fi ห้องประชุม timesheet และ resource สำคัญโดยไม่ต้องถาม HR ซ้ำในเรื่องพื้นฐาน

กลุ่มผู้ใช้หลัก:

- New interns ของ EXZY โดยเฉพาะนักศึกษาฝึกงานที่ใช้งานในวันแรกหรือสัปดาห์แรก
- HR team ที่ต้องอัปเดตข้อมูลบางส่วนผ่าน admin UI บนเว็บ
- ผู้ใช้ภาษาไทยเป็นหลัก พร้อม English labels/secondary copy ตามบริบท

เป้าหมายของเว็บคือให้ intern เปิดเข้ามาแล้วรู้ทันทีว่า "ต้องทำอะไรต่อ" และต้องกลับมาดูข้อมูลได้ตลอดเวลา ไม่ใช่เพียงแค่วันแรกหรือช่วงแรกของการฝึกงานเท่านั้น โดยดีไซน์ต้องอ่านง่าย เป็นมิตร เป็นมืออาชีพ และไม่ให้ความรู้สึกเหมือน landing page เชิงการตลาด ต้องมีความ smart casual, profrsional ต้องมีความเป็นคนเมืองยุคใหม่ เรียบร้อย เนี๊ยบ 

website นี้ intern จะได้รับหลังจากเข้ากิจกรรม orientation กับ hr และ link ที่ได้รับจะเป็น Link ของหน้า first-day ที่มีเนื้อหาเป็น การเตือนสิ่งที่ต้องทำในวันแรก และบอก timeline ของสิ่งที่ต้องเจอในวันแรก และหน้า home จะเป็นหน้าที่มีความสำคัญ เมื่อผ่านความเป็นวันแรกไปแล้ว ก็จะเป็นการบอกว่านี่คือ intern handbook ที่รวบรวมข้อมูลทุกอย่างที่เกี่ยวข้องกับ intern ของ exzy

## Tech Stack

โปรเจกต์นี้เป็น static single-page website ไม่ใช่ Next.js และยังไม่มี TypeScript, Prisma, TailwindCSS หรือ backend/database

- HTML: `index.html`
- CSS: `styles.css`
- JavaScript: vanilla ES modules ใน `app.js` และ `js/**/*.js`
- Bundler: `esbuild`
- Output bundle: `bundle.js`
- Routing: hash-based routing เช่น `#/first-day`, `#/resources/timesheet`
- Data storage: `localStorage` และ `sessionStorage` สำหรับข้อมูล admin/showcase/session ฝั่ง browser
- Employee data: `employee-data.js` generated จาก Excel
- Fonts: local Noto Sans Thai files ใน `static/` และ Google Fonts fallback
- QR code: CDN script `qrcode-generator@1.4.4` ใน `index.html`
- Deployment: Vercel static deployment, config ใน `vercel.json`

## Core Files

- `index.html`: shell หลักของเว็บ, navbar, admin modal, footer, script/style includes
- `app.js`: app router, page hydration, admin interactions, UI behavior หลัง render
- `bundle.js`: generated output จาก esbuild ห้ามแก้ด้วยมือถ้าแก้ source ได้
- `styles.css`: stylesheet หลักของทั้งเว็บ
- `employee-data.js`: employee/contact data ที่ generate จาก Excel
- `js/pages/*.js`: page templates แต่ละหน้า เช่น first day, orientation, directory, policy, resources
- `js/helpers.js`: helper functions สำหรับ card, accordion, page wrapper, escaping
- `js/auth.js`: default admin data, local/session storage helpers, admin/directory access state
- `js/icons.js`: icon SVG strings
- `js/showcase.js`: intern showcase/blog page และ admin-editable showcase data
- `DESIGN.md`: design system และ visual rules
- `PRODUCT.md`: product purpose, audience, voice, accessibility principles
- `docs/exzy-intern-handbook-tone-guide.md`: tone guide และ copy checklist สำหรับการแก้ข้อความภาษาไทยบนเว็บ
- `README.md`: setup notes และข้อมูล source assets
- `vercel.json`: build command, output directory, SPA rewrite

## Folder Structure

```text
.
├── index.html              # Static app shell
├── app.js                  # Source entrypoint bundled by esbuild
├── bundle.js               # Generated browser bundle
├── styles.css              # Main CSS
├── employee-data.js        # Generated employee/contact data
├── js/
│   ├── auth.js             # Admin/session/localStorage helpers
│   ├── helpers.js          # Shared template helpers
│   ├── icons.js            # Shared SVG icon strings
│   ├── showcase.js         # Showcase rendering and data
│   └── pages/              # Page template modules
├── static/                 # Local Thai font files
├── docs/
│   └── exzy-intern-handbook-tone-guide.md
│                              # Tone guide and Thai copy checklist
├── DESIGN.md               # Design system
├── PRODUCT.md              # Product definition
├── README.md               # Project notes
├── package.json            # Build/watch scripts
└── vercel.json             # Vercel static deploy config
```

## Current Routes

Routes are defined in `app.js` inside the `Pages` object.

- `#/home`
- `#/first-day`
- `#/getting-started/orientation`
- `#/getting-started/wifi`
- `#/getting-started/meeting-rooms`
- `#/employee/org-chart`
- `#/employee/directory`
- `#/policy/code-of-conduct`
- `#/policy/internship`
- `#/policy/dress-code`
- `#/policy/leave`
- `#/resources/timesheet`
- `#/resources/faqs`
- `#/showcase/experiences`
- `#/showcase/blog`

## Commands

Install dependencies:

```bash
npm install
```

Build production bundle:

```bash
npm run build
```

Watch and rebuild `bundle.js` during development:

```bash
npm run watch
```

Serve locally:

```bash
python3 -m http.server 5500
```

Open:

```text
http://localhost:5500
```

Current `package.json` does not define `npm run dev` or `npm run lint`. If those workflows are needed later, add scripts explicitly before asking AI agents to use them.

## Coding Rules

- Keep the project vanilla JavaScript unless there is an explicit migration plan.
- Edit source files such as `app.js`, `js/pages/*.js`, `js/helpers.js`, `js/auth.js`, and `styles.css`; do not manually patch `bundle.js` except as a last resort.
- After editing JavaScript source, run `npm run build` so `bundle.js` matches source.
- Keep route definitions centralized in `app.js`.
- Keep page-level markup in `js/pages/*.js`; avoid growing unrelated page logic inside `app.js`.
- Keep reusable template helpers in `js/helpers.js`.
- Keep user-facing Thai copy natural and concise; English labels can support scanning but Thai is primary.
- Escape any dynamic user/admin-provided text before inserting into HTML. Use `escapeHtml` / `escapeAttr` from `js/helpers.js` or equivalent safe handling.
- Prefer `const` and `let`; avoid `var` in new code unless matching a specific existing legacy block.
- Prefer small, named functions for repeated behavior.
- Avoid introducing heavy dependencies for simple static-site behavior.
- Do not add framework-specific patterns such as React components, Next.js routing, Prisma calls, or Tailwind utility classes unless the project is intentionally migrated.

## UI and Design Rules

Follow `DESIGN.md` and `PRODUCT.md` as source of truth.

- Tone: warm, structured, professional, bilingual Thai-first.
- Design should feel like an internal handbook, not a SaaS marketing page.
- Prioritize scannability for anxious first-day interns.
- Use EXZY CI colors with restraint:
  - Teal `#66C5C5`
  - Navy `#004080`
  - White/background neutrals
- Use Noto Sans Thai and preserve generous Thai line-height.
- Respect WCAG AA contrast where possible.
- Respect reduced-motion preferences for animations.
- Navigation and interactive elements must be keyboard-accessible.
- Do not overuse gradients; the design system reserves the primary teal-to-navy gradient mainly for primary buttons/CTA.

## Security and Data Rules

This is a client-side static site. Anything in the repo or browser bundle can be viewed by users.

- Do not put real secrets, production passwords, private tokens, API keys, or sensitive internal credentials in client-side code.
- `js/auth.js` currently contains admin/default access strings and Wi-Fi values for this static workflow; treat them as convenience gates, not real security.
- `localStorage` and `sessionStorage` are not secure storage.
- Employee/contact data in `employee-data.js` is publicly served with the site unless deployment access is restricted elsewhere.
- Validate and sanitize admin-editable fields before rendering or embedding them.
- For URLs entered by admin, allow only expected protocols such as `https://`, `http://`, or safe relative paths where appropriate.
- Do not query a database directly from the browser. If a backend is added later, all database access must go through server-side API routes/services with input validation and authorization.
- Avoid adding third-party CDN scripts unless necessary; if added, document the reason and source.

## Content Rules

- Before editing Thai copy, headline, lead, CTA, labels, FAQ, policy text, or any intern-facing wording, read `docs/exzy-intern-handbook-tone-guide.md`.
- Keep intern-facing content practical: what to do, where to go, who to contact, and what to expect.
- Avoid corporate filler and long paragraphs.
- Keep Day 1 content action-oriented.
- Write like a senior coworker who already knows the way and helps a new intern check the next step without pressure.
- Avoid AI/marketing phrases such as “เริ่มต้นการเดินทาง”, “ปลดล็อกศักยภาพ”, “ยกระดับประสบการณ์”, and “ศูนย์รวมข้อมูลครบวงจร”.
- Treat HR contact details, Wi-Fi credentials, employee data, and orientation resources as sensitive enough to review before publishing.
- If content comes from PDFs, Excel files, or HR-provided source documents, preserve meaning and avoid inventing policy details.

## Build and Deployment Notes

- Vercel runs `npm run build`.
- Vercel output directory is project root `"."`.
- `vercel.json` rewrites all routes to `index.html`, which supports the SPA/hash routing setup.
- Because routing uses hashes, internal links should usually use `href="#/route-name"` with `data-link`.
- `bundle.js` should be regenerated before deploy after source JS changes.

## AI Agent Guidance

When helping with this project:

- First check `PRODUCT.md` and `DESIGN.md` before making broad UI/content changes.
- If the task involves wording or copy, read `docs/exzy-intern-handbook-tone-guide.md` before editing.
- Check `package.json` before assuming commands.
- Check `app.js` route map before adding or changing pages.
- Keep changes scoped; this project is a static handbook, so avoid large architecture changes without a direct request.
- If asked for Next.js, TypeScript, Prisma, TailwindCSS, API routes, or database rules, clarify that the current project does not use them unless the task is a migration.
- After code changes, run at least `npm run build`.
- For visual/UI changes, serve locally and inspect the relevant route in a browser when possible.
