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

### Full grid - "the rest"

| File | Caption | Location |
|------|---------|----------|
| `gallery-1.jpg` | california | California |
| `gallery-2.jpg` | sunset | California |
| `gallery-3.jpg` | fair night | - |
| `gallery-4.jpg` | concert | Tampa, Florida |
| `gallery-5.jpg` | honduras | Honduras |
| `gallery-6.jpg` | roof view | - |
| `gallery-7.jpg` | airport | Miami → Honduras - **same masked image as `miami-airport.jpg`** |
| `gallery-8.jpg` | pizza night | - |
| `gallery-9.jpg` | downtown | - |
| `gallery-10.jpg` | coffee walk | - |

## Privacy, `miami-airport.jpg` / `gallery-7.jpg`

The original airport photo (`IMG_5981.JPEG`) showed a boarding pass with the passenger name
and record locator. Both `miami-airport.jpg` and `gallery-7.jpg` are **cropped** (not blurred)
to remove that boarding-pass band; the passport cover (no number is printed on the cover),
suitcase, and travel pose remain in full color. A spent luggage-tag barcode is still visible.

**If you re-crop or swap these files,** keep the boarding pass (name + record locator) out of
frame before publishing.

## Other media

| File | Used for | Specs |
|------|----------|-------|
| `spotify/playlist.jpg` | home "soundtrack lately" card | square, 300×300+ |
| `projects/hydrocephalus.jpg` | projects feature image | 4:3 or 16:9 |
| `projects/neuroflow.jpg` | projects feature inset + home "currently building" | 16:9, ~1200×675 |
| `projects/lifescore.jpg` · `projects/brain-basics.jpg` | project cards | 16:9, ~1200×675 |
| `og-image.jpg` | social share preview | 1200×630 (use `og-template.html`) |

## Notes

- Photos display in **full color**. On hover, gallery/collage cards reveal a caption + location
  overlay (no grayscale effect).
- The full grid shows photos at natural height (no forced crop), so any aspect ratio works.
- Prefer compressed **JPG/WebP** (e.g. squoosh.app); a couple of the originals are ~4 MB and
  worth shrinking before deploy.
- Clicking any gallery photo opens a lightbox; captions/locations come from the
  `data-caption` / `data-loc` attributes in `gallery.html`.
