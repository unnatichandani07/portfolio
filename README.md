# Unnati Chandani — Portfolio
Static site: HTML + CSS + vanilla JS. No build step, no backend.

## Run locally (VS Code + Live Server)
1. Unzip and open the `unnati-portfolio` folder in VS Code (File > Open Folder).
2. Install the "Live Server" extension (Ritwick Dey).
3. Right-click `index.html` > "Open with Live Server". It opens at http://127.0.0.1:5500.
(Or run `python3 -m http.server` in the folder and visit http://localhost:8000.)
Fonts load from Google Fonts, so use an internet connection for the intended look.

## Customize
Everything configurable is at the top of `js/main.js` in `CONFIG`:
- `RESUME_URL` — replace `RESUME_URL_HERE`. Set `RESUME_DOWNLOAD:true` for a "Download Resume" button.
- `links` — add `gatyaDemo`, `pixelproofDemo`, `pixelproofCode`, `internshipCertificate`. Buttons stay hidden until set.
- Skills live in the `SKILLS` array. Colours are CSS variables at the top of `css/style.css`.
- Photo: replace `assets/portrait.jpg`.

## Pending / to confirm
- Resume URL; PixelProof repo URL; internship certificate URL. (Gatya and PixelProof live-demo URLs are set.)
- LinkedIn: uses the URL from your brief (`.../unnati-chandani-79b03237b`); your resume shows `.../unnati-chandani`. Confirm which is right.
- Gatya "bilingual": written as Hindi and English per your brief; resume only says "bilingual".
- SIH result: written as "Top 10 of 250+" (resume); your brief said "8th". Confirm.
- "AI for Beginners — HP LIFE" is not in the resume, so it is omitted. Add it if it is real.
- CGPA 9.13 (1st year) is shown because it is in the resume.

## v3 notes
- Resume buttons stay inactive (no message) until `RESUME_URL` in `js/main.js` is replaced.
- Project screenshots: `assets/pixelproof.jpg`, `assets/gatya.jpg`.
