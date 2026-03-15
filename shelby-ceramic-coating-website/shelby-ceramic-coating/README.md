# Shelby Ceramic Coating — Website

**Business:** Shelby Ceramic Coating  
**Owner:** Savvy  
**ABN:** 29 650 058 996  
**Phone:** 0490 699 614  
**Location:** Clayton, City of Monash VIC 3168  

---

## 🚀 Deployment Instructions

### Step 1 — Upload to GitHub

1. Create a free account at [github.com](https://github.com) if you don't have one
2. Click **"New repository"** (green button or `+` icon top right)
3. Name it: `shelby-ceramic-coating`
4. Set to **Public**
5. Click **Create repository**
6. Upload all files:
   - Click **"uploading an existing file"**
   - Drag the entire folder contents into the browser
   - Commit message: `Initial website launch`
   - Click **Commit changes**

> **Important:** Upload the full folder structure including `assets/css/`, `assets/js/`, `assets/images/` — not just the HTML files.

---

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up (use **Continue with GitHub**)
2. Click **"Add New Project"**
3. Select your `shelby-ceramic-coating` repository
4. Vercel will auto-detect it as a static site — click **Deploy**
5. Your site will be live at a `.vercel.app` URL within 60 seconds

#### Add Your Custom Domain
1. In Vercel dashboard → your project → **Settings → Domains**
2. Add: `shelbyceramiccoating.com.au`
3. Vercel will show you DNS records to add at your domain registrar
4. Add the A record and/or CNAME as shown
5. SSL is automatic — HTTPS is enabled within minutes

---

### Step 3 — Verify Forms (Formspree)

Forms are pre-configured to submit to your Formspree endpoints:

| Form | Formspree Endpoint |
|------|-------------------|
| Quote Form | `https://formspree.io/f/xgonlvwy` |
| Contact Form | `https://formspree.io/f/xnjgbnar` |

Both forms send to: `savvyceramiccoating@gmail.com`

**To verify forms are working:**
1. Submit a test quote on your live site
2. Check your Gmail inbox for the notification
3. Check your [Google Sheet](https://docs.google.com/spreadsheets/d/1AcMjtS4sibcUn4e4FgqB-zw0ZO1M1B0jWGJwEhbJPd4/edit?usp=sharing) for the lead

**To connect Google Sheets to Formspree:**
1. Log in to [formspree.io](https://formspree.io) with your account
2. Open your form → **Integrations**
3. Add **Google Sheets** integration
4. Paste your spreadsheet URL

---

### Step 4 — After Launch Checklist

- [ ] Submit sitemap to Google Search Console: `https://shelbyceramiccoating.com.au/sitemap.xml`
- [ ] Add your website URL to your Google Business Profile
- [ ] Verify the phone number `0490 699 614` is clickable on mobile
- [ ] Test the quote form and check Gmail + Google Sheet
- [ ] Test the contact form
- [ ] Replace the logo if a higher-resolution version is available
- [ ] Add real before/after photos to relevant pages

---

## 📁 File Structure

```
shelby-ceramic-coating/
├── index.html                              ← Homepage
├── ceramic-coating-clayton.html            ← Primary money page
├── ceramic-coating-mount-waverley.html     ← Suburb page
├── ceramic-coating-glen-waverley.html      ← Suburb page
├── ceramic-coating-oakleigh.html           ← Suburb page
├── ceramic-coating-mulgrave.html           ← Suburb page
├── ceramic-coating-bentleigh.html          ← Suburb page
├── paint-protection-new-cars-melbourne.html ← Service page
├── ceramic-coating-black-cars.html         ← Specialist page
├── ceramic-coating-vs-wax.html             ← Informational/AEO
├── how-long-ceramic-coating-last-melbourne.html ← Informational/AEO
├── privacy-policy.html
├── terms-of-use.html
├── thank-you.html                          ← Post-form submission
├── 404.html
├── sitemap.xml                             ← Submit to Google Search Console
├── robots.txt
├── vercel.json                             ← Vercel deployment config
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── main.js                         ← Forms, FAQ, animations
    │   └── components.js                   ← Nav + Footer injection
    └── images/
        └── shelby-logo.png
```

---

## 🔍 SEO Structure

| Page | Primary Keyword | Priority |
|------|----------------|----------|
| `index.html` | ceramic coating near me | ⭐⭐⭐⭐⭐ |
| `ceramic-coating-clayton.html` | ceramic coating Clayton | ⭐⭐⭐⭐⭐ |
| `ceramic-coating-mount-waverley.html` | ceramic coating Mount Waverley | ⭐⭐⭐⭐ |
| `ceramic-coating-glen-waverley.html` | ceramic coating Glen Waverley | ⭐⭐⭐⭐ |
| `ceramic-coating-oakleigh.html` | ceramic coating Oakleigh | ⭐⭐⭐ |
| `ceramic-coating-mulgrave.html` | ceramic coating Mulgrave | ⭐⭐⭐ |
| `ceramic-coating-bentleigh.html` | ceramic coating Bentleigh | ⭐⭐⭐ |
| `ceramic-coating-black-cars.html` | ceramic coating black cars Melbourne | ⭐⭐⭐⭐ |
| `paint-protection-new-cars-melbourne.html` | paint protection new cars Melbourne | ⭐⭐⭐⭐ |
| `ceramic-coating-vs-wax.html` | ceramic coating vs wax | ⭐⭐⭐ |
| `how-long-ceramic-coating-last-melbourne.html` | how long does ceramic coating last Melbourne | ⭐⭐⭐ |

---

## 🛡️ Anti-Spam

All forms include:
- **Honeypot field** (hidden `_gotcha` field — bots fill it, humans don't)
- **AJAX submission** (no page reload, smooth UX)
- Formspree's built-in spam filtering

---

## 📞 Contact Details on Site

- Phone: **0490 699 614** (displayed everywhere, email not shown publicly)
- ABN: **29 650 058 996**
- Location: **Clayton, City of Monash VIC 3168**
