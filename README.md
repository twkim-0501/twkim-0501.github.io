# Taewoo Kim — Research & Engineering

Personal academic website for Taewoo Kim, an M.S. student in Computer Science at KAIST.

## Structure

- index.html: biography, selected research, experience, and education
- style.css: responsive academic layout
- language.js: English / Korean switch
- profile.jpg: portrait
- body-input.png, hand-generation.png, imu-motion.png: original research images from the research portfolio
- favicon.svg, .nojekyll: site icon and static GitHub Pages support

## Preview

Run `python -m http.server 8765 --bind 127.0.0.1` in this directory.
Open http://127.0.0.1:8765/.

## Publish

Upload these files to the root of twkim-0501/twkim-0501.github.io.
In Settings → Pages select Deploy from a branch → main → /(root).

## Content & images

Biography and experience are based on the supplied LinkedIn profile, CV, and research portfolio. Body/hand images come from the portfolio's selected qualitative results (physical model). The IMU image is a still from its motion-model comparison. These are existing research visuals, not generated or fabricated results. Ongoing work is explicitly marked as in preparation.

## Design

Independently implemented HTML/CSS, following the compact academic-page structure seen on https://jonbarron.info/ and https://serin-yoon.github.io/. No framework, build step, remote font, tracking script, or analytics service is required.
