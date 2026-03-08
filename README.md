# Timurbek Ataullayev — Portfolio

React + Vite portfolio website with React Router DOM v6.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio-vite/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx          # Entry point
    ├── App.jsx           # Router setup
    ├── data.js           # All portfolio data
    ├── styles/
    │   └── global.css    # Global styles & CSS variables
    ├── hooks/
    │   └── useReveal.js  # Scroll reveal hook
    ├── components/
    │   ├── Navbar.jsx    # Sticky navbar + mobile menu
    │   ├── Navbar.css
    │   ├── Footer.jsx
    │   ├── Footer.css
    │   ├── ProjectCard.jsx
    │   ├── ProjectCard.css
    │   └── SkillIcons.jsx  # All tech SVG icons
    └── pages/
        ├── Home.jsx      # Hero + Skills preview + Projects preview
        ├── Home.css
        ├── About.jsx
        ├── About.css
        ├── Skills.jsx
        ├── Skills.css
        ├── Projects.jsx
        ├── Projects.css
        ├── Education.jsx  # Education + Languages
        ├── Education.css
        ├── Contact.jsx
        ├── Contact.css
        └── NotFound.jsx   # 404 page
```

## 🛠 Tech Stack
- **React 18** — UI library
- **Vite 5** — Build tool
- **React Router DOM v6** — Client-side routing (HashRouter)
- **CSS Modules** — Scoped styles per component
- **Google Fonts** — Syne + DM Sans + DM Mono

## 📄 Routes
| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About Me |
| `/skills` | Skills |
| `/projects` | Projects |
| `/education` | Education + Languages |
| `/contact` | Contact |
| `*` | 404 |
