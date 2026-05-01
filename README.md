# Sumit Kumar — Portfolio
> Professional portfolio website | Light Theme | Multi-page

---

## 📁 Folder Structure

```
portfolio/
├── index.html          ← Home / Hero page
├── about.html          ← About Me page
├── education.html      ← Education timeline
├── experience.html     ← Work experience
├── projects.html       ← Projects grid (add your links here!)
├── skills.html         ← Skills & proficiency bars
├── contact.html        ← Contact form & details
│
├── css/
│   └── style.css       ← All styles (CSS variables at top)
│
├── js/
│   └── main.js         ← Animations, nav, typed effect
│
└── assets/
    └── partials.html   ← Navbar & footer reference snippet
```

---

## ✏️ Adding Google Sheet Links to Projects

Open `projects.html` in VS Code. Press `Ctrl+F` and search for:

```
TODO: REPLACE
```

You'll find 9 comments like this:

```html
<!-- TODO: REPLACE href="#" with your Google Sheet link for FMS -->
<a href="#" target="_blank" class="project-link">View Project →</a>
```

Replace `href="#"` with your actual Google Sheets link. Example:

```html
<a href="https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit" target="_blank" class="project-link">View Project →</a>
```

---

## 🎨 Customizing Colors

Open `css/style.css` — at the very top you'll see CSS variables:

```css
:root {
  --bg:      #F8F7F4;   /* Page background */
  --navy:    #0F172A;   /* Dark headings */
  --blue:    #2563EB;   /* Accent / links */
  --slate:   #64748B;   /* Body text */
  /* ... */
}
```

Change any value to retheme the entire site instantly.

---

## 🔗 Update Your Personal Links

Search these in VS Code and replace with real values:

| What            | Search term              | Replace with                    |
|-----------------|--------------------------|----------------------------------|
| Website URL     | `http://www.example.com` | Your actual website              |
| Email           | Already correct ✅       | —                                |
| Phone           | Already correct ✅       | —                                |

---

## 🚀 How to Open Locally

Just double-click `index.html` to open in your browser.
Or use the VS Code **Live Server** extension for auto-reload.

---

## 📄 Pages Summary

| Page             | File               | What's on it                                  |
|------------------|--------------------|-----------------------------------------------|
| Home             | index.html         | Hero, typed animation, quick nav cards        |
| About            | about.html         | Bio, values, sticky info card                 |
| Education        | education.html     | Timeline — Delhi Uni, Ducat, BCI              |
| Experience       | experience.html    | Nutex Apparel & Godiva Bioadvances roles      |
| Projects         | projects.html      | 9 project cards with link placeholders        |
| Skills           | skills.html        | Skill bars, tools, languages                  |
| Contact          | contact.html       | Contact cards + working form                  |

---

*Built for Sumit Kumar · 2026*
