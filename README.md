# Thomas Shin portfolio

Serve the static site from `site` with `python3 -m http.server 8000 --directory site`. Open http://localhost:8000. The site has no build step.

## Course reviews

Edit `site/course-reviews/reviews.json`. Add one object per course to the array with these keys.

| Key | Value |
| --- | --- |
| code | Course code |
| title | Course title |
| professor | Name of the professor you took it with |
| enjoyment | Number from 1 to 5 |
| difficulty | Number from 1 to 5, with 5 meaning most difficult |
| topics | Array of roughly two short bullet strings |

## Homepage

Replace the marked placeholders in `site/index.html` with your approved copy, experience, project tags, and links. Add your PDF at `site/resume.pdf` and set `resumePath` to `'/resume.pdf'` in `site/site.js` to activate the Resume link on both pages. Update the contact placeholder when the PDF and contact details are ready.
