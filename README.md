# Amir Yusuf - personal homepage

A minimal black-and-white personal site for **Amir Yusuf** - neuroscience student at
Florida State University, builder, and photo-taker. Static, lightweight, no framework,
no backend, no build step.

## Files

| File | Purpose |
|------|---------|
| `index.html` | All content + structure, SEO meta, Open Graph, schema.org Person JSON-LD |
| `styles.css` | Design system (CSS variables), layout, subtle motion, reduced-motion support |
| `script.js` | Mobile nav, fade-in on scroll, active-section nav state |
| `assets/` | Portrait, CV, project shots, gallery photos, Spotify album art - see `assets/README.md` |

## Pages

Home · Experiences · Projects · Gear · Gallery · Contact, plus a downloadable CV. Separate
static pages sharing `styles.css` and `script.js`; kept short and personal by design.

## Run locally

Plain static files - open `index.html`, or serve for clean relative paths:

```bash
npx serve .        # then open the printed localhost URL
# or:  python -m http.server 8080
```

## Deploy

Static, zero config on all of these:

- **GitHub Pages** - push, then Settings → Pages → deploy from `main` / root. (Repo named
  `<username>.github.io` gives a clean root URL.)
- **Netlify** - drag the folder onto app.netlify.com/drop, or connect the repo (no build command).
- **Vercel / Cloudflare Pages** - import the repo, framework "Other", no build command.

All four provision free HTTPS.

## Replace placeholders

| Placeholder | Where | Replace with |
|-------------|-------|--------------|
| `./assets/portrait.jpg` | Hero | Your portrait (shows "AY" fallback until added) |
| `./assets/projects/*.jpg` | Projects | 16:9 screenshots |
| `./assets/gallery/gallery-*.jpg` | Camera roll | Your photos (captions already set) |
| `./assets/now/album.jpg` + song/artist text | "soundtrack lately" card | Current track + Spotify link |
| `./assets/Mahmoud-Yusuf-CV.pdf` | CV buttons | Your CV PDF |
| Project card `href="#"` | Projects | Live project URLs |
| TikTok / Instagram `href="#"` | Contact | Final social URLs |
| `https://amiryusuf.com/` | canonical, OG, Twitter, JSON-LD | Your final domain |

Already wired: email `may23@fsu.edu`, LinkedIn + GitHub `dryusufdev`. **No phone number is
shown anywhere** - it can only live inside the CV PDF you upload.

## Domains

First-name-last-name reads best: **amiryusuf.com**, mahmoudyusuf.com, amiryusuf.dev. Connect
one in your host's dashboard and serve over HTTPS.

## Notes

- Photos are grayscale by default and turn to color on hover (CSS) - upload normal color images.
- Keep it short. The point of this site is whitespace and personality, not a second CV.
