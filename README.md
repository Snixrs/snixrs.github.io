# Snixrs Personal Brand Website

A modern, dark-themed personal brand website featuring glassmorphism UI, neon glow effects, and purple gradient accents. Fully static and optimized for GitHub Pages hosting.

## Features

- 🎨 **Dark Theme** with purple gradient accents
- ✨ **Glassmorphism UI** with subtle transparencies
- 🌟 **Animated Particles** background in hero section
- 📱 **Fully Responsive** mobile-first design
- ⚡ **Fast Loading** pure HTML/CSS/JS
- 🎯 **12 Sections**: Hero, About, Stats, Portfolio, Services, Tech Stack, Testimonials, Blog, Community, CTA, Contact, Footer

## Quick Start

1. Clone or download this repository
2. Open `index.html` in your browser
3. Or serve locally with any static server:
   ```bash
   npx serve .
   ```

## GitHub Pages Deployment

1. Push this folder to a GitHub repository
2. Go to Settings → Pages
3. Select branch `main` and folder `/ (root)`
4. Your site will be live at `https://yourusername.github.io/repo-name`

## Customization

### Update Your Info
Edit `index.html` and replace:
- Bio text in About section
- Project cards in Portfolio section
- Social media links (search for `href="#"`)
- Email address (`hello@snixrs.dev`)
- Stats numbers (data-count attributes)

### Change Colors
Edit `css/variables.css`:
```css
--primary: #8B5CF6;        /* Main purple */
--primary-dark: #6D28D9;   /* Darker purple */
--primary-light: #A78BFA;  /* Lighter purple */
```

### Replace Logo
Replace `assets/images/logo.svg` and `assets/images/favicon.svg` with your own.

## Project Structure

```
snixrs-website/
├── index.html              # Main HTML file
├── README.md               # This file
├── assets/
│   └── images/
│       ├── logo.svg        # Main logo
│       └── favicon.svg     # Browser favicon
├── css/
│   ├── variables.css       # Design tokens
│   ├── base.css            # Reset & utilities
│   ├── components.css      # UI components
│   ├── animations.css      # Animations
│   └── sections.css        # Section layouts
└── js/
    ├── main.js             # Core functionality
    ├── particles.js        # Particle system
    └── portfolio.js        # Portfolio filter
```

## Technologies

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Inter Font (Google Fonts)
- FontAwesome Icons

## License

MIT License - Feel free to use for personal or commercial projects.

---

Built with 💜 by Snixrs
