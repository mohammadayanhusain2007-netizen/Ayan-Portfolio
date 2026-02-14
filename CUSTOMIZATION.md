# Portfolio Configuration & Customization Guide

This file documents how to customize every aspect of your portfolio.

## 🎨 Visual Customization

### Color Scheme

Edit `css/style.css` (lines 1-13) to change the color theme:

```css
:root {
    --primary-color: #667eea;      /* Main brand color */
    --secondary-color: #764ba2;    /* Accent gradient */
    --accent-color: #f093fb;       /* Highlight accents */
    --text-dark: #1a1a1a;          /* Text color (light mode) */
    --text-light: #666666;         /* Muted text color */
    --bg-light: #ffffff;           /* Background light */
    --bg-gray: #f8f9fa;            /* Secondary background */
    --border-color: #e0e0e0;       /* Border color */
}
```

### Pre-made Color Schemes

**Professional Blue**
```css
--primary-color: #2563eb;
--secondary-color: #1e40af;
--accent-color: #3b82f6;
```

**Vibrant Orange**
```css
--primary-color: #f97316;
--secondary-color: #ea580c;
--accent-color: #fb923c;
```

**Cool Teal**
```css
--primary-color: #06b6d4;
--secondary-color: #0891b2;
--accent-color: #67e8f9;
```

**Modern Red**
```css
--primary-color: #dc2626;
--secondary-color: #991b1b;
--accent-color: #ef4444;
```

**Forest Green**
```css
--primary-color: #059669;
--secondary-color: #065f46;
--accent-color: #10b981;
```

### Typography

Edit font families in `css/style.css`:

```css
--font-primary: 'Segoe UI', Tahoma, Geneva, sans-serif;  /* Body text */
--font-secondary: 'Georgia', serif;                        /* Headings */
```

**Using Google Fonts:**

1. Add to `index.html` `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

2. Update CSS variables:
```css
--font-primary: 'Poppins', sans-serif;
--font-secondary: 'Playfair Display', serif;
```

**Popular Font Combinations:**
- Poppins + Inter (modern)
- Montserrat + Open Sans (professional)
- Raleway + Lato (clean)
- Bebas Neue + Source Sans Pro (bold)

## 📝 Content Customization

### Personal Information

**Name and Title**
```html
<!-- In hero section -->
<h1>Hi, I'm <span class="gradient-text">YOUR NAME</span></h1>
<p class="hero-subtitle">YOUR JOB TITLE</p>
```

**Bio/About Section**
```html
<!-- In about section -->
<p>Your bio text here...</p>
```

**Contact Information**
```html
<!-- Email -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- Phone -->
<a href="tel:+1234567890">+1 234 567 890</a>

<!-- Location -->
<p>Your City, Country</p>
```

### Adding Projects

In the projects section, each project follows this structure:

```html
<article class="project-card">
    <div class="project-image">
        <div class="project-placeholder">
            <!-- SVG or <img> tag -->
        </div>
    </div>
    <h3>Project Name</h3>
    <p>Project description (2-3 sentences)</p>
    <div class="project-tags">
        <span class="tag">Technology1</span>
        <span class="tag">Technology2</span>
    </div>
    <div class="project-links">
        <a href="https://project-link.com" class="link-btn">View Project</a>
        <a href="https://github.com/repo" class="link-btn-secondary">Source Code</a>
    </div>
</article>
```

**To add more projects:**
1. Copy an entire `<article class="project-card">` block
2. Update title, description, and links
3. Add your technologies in tags

### Adding Skills

Skills are organized by category. To add or modify:

```html
<div class="skill-category">
    <h3>Category Name</h3>
    <div class="skill-list">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
        <span class="skill-tag">Skill 3</span>
    </div>
</div>
```

### Adding Achievements

```html
<div class="achievement-card">
    <div class="achievement-icon">🏆</div>  <!-- Change emoji -->
    <h3>Achievement Title</h3>
    <p class="issuer">Issued by: Organization</p>
    <p class="date">Year</p>
    <p>Description of achievement</p>
</div>
```

### Social Links

Update in contact section:

```html
<a href="https://github.com/yourprofile" target="_blank" class="social-icon" title="GitHub">
    <!-- GitHub link -->
</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank" class="social-icon" title="LinkedIn">
    <!-- LinkedIn link -->
</a>
```

## 📊 Layout Customization

### Grid Columns

Modify grid layouts by changing `grid-template-columns`:

```css
/* Projects Grid - change columns */
.projects-grid {
    grid-template-columns: repeat(4, 1fr);  /* 4 columns instead of 3 */
}

/* Skills Grid - change columns */
.skills-grid {
    grid-template-columns: repeat(2, 1fr);  /* 2 columns instead of auto-fit */
}
```

### Section Spacing

Adjust padding between sections:

```css
.section {
    padding: 8rem 0;  /* Increase from 6rem for more space */
}
```

### Container Width

Maximum width of content:

```css
.container {
    max-width: 1400px;  /* Increase from 1200px for wider layout */
}
```

## 🎬 Animation Customization

### Disable Animations

For accessibility or performance, comment out animations:

```css
/* In css/style.css, comment out @keyframes sections */
/*
@keyframes slideInLeft {
    ...
}
*/
```

Or in JavaScript, disable animations:

```javascript
// Add to top of js/script.js
document.documentElement.style.setProperty('--transition', '0s');
```

### Animation Speed

Change animation duration (smaller = faster):

```css
:root {
    --transition: all 0.1s;  /* Faster transitions */
}

/* Or specific animations */
animation: slideInLeft 0.3s ease-out;  /* Faster from 0.8s */
```

### Custom Animations

Add new animations by defining keyframes:

```css
@keyframes customAnimation {
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

/* Apply to element */
.element {
    animation: customAnimation 0.6s ease-out;
}
```

## 🌙 Dark Mode Customization

### Disable Dark Mode

1. Remove or comment out theme toggle button in HTML
2. Remove dark mode styles from CSS
3. Comment out dark mode JavaScript

### Custom Dark Mode Colors

Modify in `css/style.css`:

```css
[data-theme="dark"] {
    --text-dark: #ffffff;         /* Change text color in dark mode */
    --text-light: #cccccc;
    --bg-light: #0d0d0d;          /* Darker background */
    --bg-gray: #1a1a1a;
    --border-color: #333333;
}
```

## 📱 Mobile Customization

### Hide Elements on Mobile

```css
@media (max-width: 768px) {
    .element-to-hide {
        display: none;
    }
}
```

### Stack Layouts

Force vertical stacking on mobile:

```css
@media (max-width: 768px) {
    .grid-layout {
        grid-template-columns: 1fr;  /* Single column */
    }
}
```

### Adjust Font Sizes for Mobile

```css
@media (max-width: 768px) {
    html {
        font-size: 14px;  /* Smaller on mobile */
    }
}
```

## 🔧 Advanced Customization

### Add New Sections

1. Create new section in HTML:
```html
<section id="section-name" class="section section-name">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <!-- Your content -->
    </div>
</section>
```

2. Add CSS for styling:
```css
.section-name {
    background-color: var(--bg-light);
}
```

3. Update navigation:
```html
<li><a href="#section-name" class="scroll-link">Section Name</a></li>
```

### Modify Navigation

Change navbar color:
```css
.navbar {
    background-color: var(--primary-color);  /* Colored navbar */
}
```

### Custom Hover Effects

```css
.element {
    transition: var(--transition);
}

.element:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    background-color: var(--primary-color);
    color: white;
}
```

## 📦 Optional Enhancements

### Add Particle Background

Uncomment in `js/script.js`:
```javascript
// Uncomment to enable particles
createParticles();
```

### Enable Typing Animation

Uncomment in `js/script.js`:
```javascript
// Uncomment to enable typing animation on hero subtitle
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    typeWriter(heroSubtitle, text);
}
```

### Add Analytics

Add Google Analytics to `index.html` `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Add Images

Optimize images and add to sections:
```html
<img src="assets/images/image-name.jpg" alt="Description" style="width: 100%; border-radius: 10px;">
```

## 🔍 Performance Optimization

### Image Optimization

1. Compress images using:
   - TinyPNG (tinypng.com)
   - ImageOptim
   - Adobe ImageReady

2. Use modern formats:
   - WebP format for better compression
   - Fallback to JPG/PNG

### CSS/JS Minification

1. Minify CSS and JavaScript for production
2. Use online tools or build processes
3. Can save 50-70% of file size

### Lazy Loading

Add to images:
```html
<img src="assets/images/image.jpg" loading="lazy" alt="Description">
```

## 📝 Notes & Future Updates

- Keep a changelog of modifications
- Test changes locally before deploying
- Keep backups of original files
- Document custom code for future reference

---

For more information, see `README.md` and `DEPLOYMENT_GUIDE.md`.
