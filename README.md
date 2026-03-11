# Snixrs Personal Brand Website

A modern, dark-themed personal brand website featuring glassmorphism UI, neon glow effects, and purple gradient accents. Fully static and optimized!

## Features

- 🎨 **Dark Theme** with purple gradient accents
- ✨ **Glassmorphism UI** with subtle transparencies
- 🌟 **Animated Particles** background in hero section
- 📱 **Fully Responsive** mobile-first design
- ⚡ **Fast Loading** pure HTML/CSS/JS
- 🎯 **12 Sections**: Hero, About, Stats, Portfolio, Services, Tech Stack, Testimonials, Blog, Community, CTA, Contact, Footer

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
- Email address (`snixrs@outlook.com`)
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
root/
├── index.html                                  # Main HTML file
├── blog.html                                   # Blog file
├── README.md                                   # This file
├── assets/
│   └── images/
│       ├── logo.svg                            # Main logo
│       └── favicon.svg                         # Browser favicon
├── css/
│   ├── variables.css                           # Design tokens
│   ├── base.css                                # Reset & utilities
│   ├── components.css                          # UI components
│   ├── animations.css                          # Animations
│   └── sections.css                            # Section layouts
└── js/
    ├── main.js                                 # Core functionality
    ├── particles.js                            # Particle system
    └── portfolio.js                            # Portfolio filter
└── blog/
    ├── building-telegram-bots.html             # A blog article for SEO
    ├── mvp-development.html                    # A blog article for SEO
    └── ui-trends-2026.html                     # A blog article for SEO
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

---

Built with 💜 by [Snixrs](https://snixrs.github.io)  
CEO & Founder of [Roadvix](https://roadvix.com)
