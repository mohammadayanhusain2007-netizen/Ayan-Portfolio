# QUICK START GUIDE

Get your portfolio up and running in 5 minutes!

## 🚀 Step 1: Local Preview (1 minute)

### Using Python (Recommended)
```bash
# Navigate to your portfolio folder
cd "c:\Users\moham\OneDrive\Desktop\Prtfolio"

# Python 3.x
python -m http.server 8000

# Then visit: http://localhost:8000
```

### Using Node.js
```bash
npm install -g http-server
http-server

# Then visit: http://localhost:8080
```

### Using VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

---

## ✏️ Step 2: Customize Content (2 minutes)

Open `index.html` and update:

1. **Your Name** (Search: "Mohammad Ayan Husain")
   ```html
   <h1>Hi, I'm <span class="gradient-text">YOUR NAME HERE</span></h1>
   ```

2. **Email** (Search: "your.email@example.com")
   ```html
   <a href="mailto:YOUR_EMAIL@example.com">YOUR_EMAIL@example.com</a>
   ```

3. **Phone** (Search: "+919999999999")
   ```html
   <a href="tel:+1234567890">+1 234 567 890</a>
   ```

4. **Social Links** (Search for "github.com", "linkedin.com", "twitter.com")

5. **Projects** - Update project cards with your projects

6. **Resume** - Add your `resume.pdf` to `assets/documents/`

---

## 🎨 Step 3: Customize Colors (Optional, 1 minute)

Open `css/style.css` and change these colors:

```css
:root {
    --primary-color: #667eea;      /* Main color */
    --secondary-color: #764ba2;    /* Accent color */
    --accent-color: #f093fb;       /* Highlight color */
}
```

Popular color combinations:
- **Professional Blue**: `#2563eb`, `#1e40af`
- **Modern Purple**: `#667eea`, `#764ba2` (current)
- **Vibrant Orange**: `#f97316`, `#ea580c`
- **Cool Teal**: `#06b6d4`, `#0891b2`

---

## 🚀 Step 4: Deploy Live (1 minute)

### Option A: GitHub Pages (Easiest)
```bash
# Create GitHub repo named: yourusername.github.io
# Upload these files
# Visit: https://yourusername.github.io
```

### Option B: Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Deploy! (Done in 1 minute)

### Option C: Vercel (Fastest)
```bash
npm install -g vercel
vercel
# Follow prompts
```

---

## 📋 Checklist Before Deploying

- [ ] Updated name and contact info
- [ ] Added profile image (optional)
- [ ] Added resume to `assets/documents/resume.pdf`
- [ ] Updated social media links
- [ ] Updated project information
- [ ] Tested locally (works in browser?)
- [ ] Tested dark/light mode toggle
- [ ] Tested mobile view (responsive?)

---

## 🔗 File Structure Reference

```
portfolio/
├── index.html              ← Main page (edit your content here)
├── css/
│   └── style.css          ← Styles (edit colors here)
├── js/
│   └── script.js          ← Functionality (usually don't need to edit)
├── assets/
│   ├── images/            ← Your photos
│   └── documents/
│       └── resume.pdf     ← Add your resume here
├── README.md              ← Documentation
└── DEPLOYMENT_GUIDE.md    ← Detailed deployment instructions
```

---

## ❓ Common Questions

**Q: How do I add more projects?**
A: Copy a project card in `index.html` and modify the content.

**Q: How do I change fonts?**
A: Edit `--font-primary` in `css/style.css`.

**Q: Why is my image not showing?**
A: Make sure the path is correct relative to index.html (e.g., `assets/images/photo.jpg`)

**Q: How do I enable form submissions?**
A: See DEPLOYMENT_GUIDE.md for Netlify Forms or Formspree setup.

**Q: Can I use this on a custom domain?**
A: Yes! After deployment, add your domain in platform settings (GitHub Pages/Netlify/Vercel).

---

## 📞 Need Help?

1. Check `README.md` for detailed documentation
2. Check `DEPLOYMENT_GUIDE.md` for deployment help
3. Open `index.html` in your browser's Developer Tools (F12) for errors
4. Visit platform-specific docs (GitHub/Netlify/Vercel)

---

**You're all set! 🎉**

Your portfolio is ready to impress recruiters!

### Next Steps:
1. Customize your information
2. Test locally
3. Deploy to GitHub Pages, Netlify, or Vercel
4. Share with recruiters and friends
5. Keep updating with new projects

Good luck! 🚀
