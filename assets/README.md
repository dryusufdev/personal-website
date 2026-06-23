# Assets

Drop media here. Filenames below match what `index.html` references - keep them the same,
or update the matching paths in `index.html`. Everything is optional: until a file exists,
the site shows a clean text fallback in its place, so nothing looks broken.

## Folder layout

```
assets/
├─ og-image.jpg             # social share preview (1200×630)
├─ og-template.html         # open + screenshot this to make og-image.jpg
├─ Mahmoud-Yusuf-CV.pdf     # CV download (may contain phone; the page never shows it)
├─ media/
│  └─ youtube-thumb.jpg     # "latest upload" card thumbnail (16:9, ~1200×675)
├─ spotify/
│  └─ playlist.jpg          # "soundtrack lately" playlist art (square, 300×300+)
├─ projects/
│  ├─ neuroflow.jpg
│  ├─ brain-basics.jpg
│  ├─ lifescore.jpg
│  └─ stem-capstone.jpg     # 16:9 screenshots, ~1200×675
└─ gallery/                 # photos - see the manifest below
```

## Gallery manifest

These files are already in `assets/gallery/`. The home "recently" collage uses the five
**named** photos; the gallery page "places lately" section uses the same five, and the
full grid uses `gallery-1…10`.

### Featured - "places lately" (home collage + top of gallery)

| File | Caption | Location | Alt text | Recommended crop |
|------|---------|----------|----------|------------------|
| `predalina-tampa.jpg` | predalina | Tampa, Florida | Amir sitting outside at Predalina in Tampa at night | portrait 4:5 |
| `miami-airport.jpg` | airport | Miami → Honduras | Airport travel moment before flying to Honduras | portrait 4:5 - **see privacy note** |
| `tegucigalpa-honduras.jpg` | tegucigalpa | Honduras | Street view in Tegucigalpa Honduras | portrait 4:5 |
| `gunna-concert-tampa.jpg` | gunna | Tampa, Florida | Gunna concert in Tampa with blue stage lighting | portrait 4:5 |
| `santa-monica.jpg` | santa monica | California | Amir standing near the ocean at sunset in Santa Monica California | portrait 4:5 |

### Bottom grid - "the rest" (phone camera-roll style)

The bottom gallery is laid out like an **iPhone Photos / phone camera roll**: a tight grid
(`.phone-gallery`, 4 columns desktop, 3 on tablet/mobile) of equal `3 / 4` cards, full color,
with the same hover overlay + lightbox. Order and metadata are set per item in `gallery.html`
(`data-caption`, `data-loc`, `alt`). Current map (in display order):

| File | Caption | Location | Alt |
|------|---------|----------|-----|
| `gallery-1.jpg` | los angeles | Los Angeles, California | Los Angeles California |
| `las-vegas.jpg` | las vegas | Las Vegas, Nevada | Casino floor in Las Vegas with colorful slot machines and neon lighting |
| `ovo-beverly-hills.jpg` | ovo | Beverly Hills, California | Inside the OVO store in Beverly Hills with clothing displayed on a rack |
| `downtown-los-angeles.jpg` | downtown la | Los Angeles, California | Driving view toward the downtown Los Angeles skyline at sunset |
| `denver-colorado.jpg` | denver | Denver, Colorado | Interior of Denver airport with open atrium and suspended airplane display |
| `dallas-texas.jpg` | dallas | Dallas, Texas | Airplane wing seen through a window during a flight near Dallas Texas |
| `gallery-3.jpg` | north florida fair | Tallahassee, Florida | North Florida Fair in Tallahassee at night |
| `gallery-4.jpg` | gunna concert | Tampa, Florida | Gunna concert in Tampa Florida |
| `gallery-5.jpg` | tegucigalpa | Honduras | Tegucigalpa Honduras |
| `gallery-6.jpg` | construction | Tegucigalpa, Honduras | Construction roof view in Tegucigalpa Honduras |
| `gallery-9.jpg` | yard house | Tampa, Florida | Yard House in Tampa Florida |
| `gallery-10.jpg` | capital one cafe | Tampa, Florida | Capital One Cafe coffee walk |

Not shown in the bottom grid (avoid duplicating the curated top section, or removed):
`gallery-2.jpg` (santa monica pier , featured up top as "santa monica") and `gallery-7.jpg`
(airport , featured up top). **`gallery-8.jpg` (3 corners pizza) was removed from the visible
gallery**; the file can stay in the folder but is no longer referenced on the site.

## Privacy, `miami-airport.jpg` / `gallery-7.jpg`

The original airport photo (`IMG_5981.JPEG`) showed a boarding pass with the passenger name
and record locator. Both `miami-airport.jpg` and `gallery-7.jpg` are **cropped** (not blurred)
to remove that boarding-pass band; the passport cover (no number is printed on the cover),
suitcase, and travel pose remain in full color. A spent luggage-tag barcode is still visible.

**If you re-crop or swap these files,** keep the boarding pass (name + record locator) out of
frame before publishing.

## Project previews

The Projects page shows a small browser-window preview (`.site-preview`) for each live site.
It lazy-loads an **iframe** of the real site; if the iframe is blocked (X-Frame-Options /
CSP `frame-ancestors`) or fails to load, the **fallback content stays visible** instead, so a
broken iframe is never shown. Each fallback uses an image plus the site name + "open site ↗".

| File | Used for | Notes |
|------|----------|-------|
| `projects/hydrocephalus-preview.png` | feature visual (hydrocephalus) | title slide, shown with `object-fit: contain` so the text stays readable |
| `projects/neuroflow.jpg` | NeuroFlow preview fallback (iframe: `neuroflows.vercel.app`) | optional; text fallback shows if absent |
| `projects/lifescore-icon.png` | LifeScore preview fallback (iframe: `lifescore.dev`) | app icon, fetched from the live site |
| `projects/brain-basics.jpg` | Brain Basics Lab preview fallback (iframe: `brainbasicslab.vercel.app`) | optional; text fallback shows if absent |
| `spotify/playlist.jpg` | home "soundtrack lately" card | square, 300×300+ |
| `og-image.jpg` | social share preview | 1200×630 (use `og-template.html`) |

## Finance / investing card

The home "stocks / investing" card is a **personal interest note, not financial advice**, and
it is intentionally vague. **Never** put any of the following on the website: exact portfolio
value, account balance, day gain/loss, share quantities, cost basis, dollar profit/loss, or
account screenshots. Percentages framed as highlights (e.g. "+200%+") and ticker symbols are
fine; private account values are not.

## Notes

- Photos display in **full color**. On hover, gallery/collage cards reveal a caption + location
  overlay (no grayscale effect).
- The bottom gallery is a fixed `3 / 4` camera-roll grid using `object-fit: cover`; set
  `object-position` inline on a photo if a face/building gets cropped awkwardly.
- Prefer compressed **JPG/WebP** (e.g. squoosh.app); a couple of the originals are ~4 MB and
  worth shrinking before deploy.
- Clicking any gallery photo opens a lightbox; captions/locations come from the
  `data-caption` / `data-loc` attributes in `gallery.html`.
