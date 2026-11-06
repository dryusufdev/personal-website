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

These files are already in `assets/gallery/`. The home "recently" collage uses six
**named** photos (the five originals plus `la-jolla.jpg`); the gallery page "places lately"
section uses the five originals, and the full square grid uses the named + `gallery-1…10`
photos listed below.

### Featured - "places lately" (home collage + top of gallery)

| File | Caption | Location | Alt text | Recommended crop |
|------|---------|----------|----------|------------------|
| `predalina-tampa.jpg` | predalina | Tampa, Florida | Amir sitting outside at Predalina in Tampa at night | portrait 4:5 |
| `ovo-beverly-hills.jpg` | ovo | Beverly Hills, California | Inside the OVO store in Beverly Hills with clothing displayed on a rack | portrait 4:5 |
| `tegucigalpa-honduras.jpg` | tegucigalpa | Honduras | Street view in Tegucigalpa Honduras | portrait 4:5 |
| `gunna-concert-tampa.jpg` | gunna | Tampa, Florida | Gunna concert in Tampa with blue stage lighting | portrait 4:5 |
| `santa-monica.jpg` | santa monica | California | Amir standing near the ocean at sunset in Santa Monica California | portrait 4:5 |

`ovo-beverly-hills.jpg` was promoted into this featured strip (replacing `miami-airport.jpg`)
and is therefore no longer repeated in the bottom grid. `miami-airport.jpg` is now unused
(the file stays in the folder).

### Bottom grid - "the rest" (phone camera-roll style)

The bottom gallery is a **camera-roll masonry**: `.phone-gallery` uses CSS multi-column
(`column-count: 4` desktop, 3 tablet, 2 mobile; `column-gap`) and each `.shot` is
`break-inside: avoid`. Images render at `width:100%; height:auto` (no `object-fit`), so
**every photo shows whole at its own aspect ratio and is never cropped**. The varied tile
heights give the wall its rhythm. Full color, staggered fade/scale reveal, lift-on-hover,
same hover overlay + lightbox. Order and metadata are per item in `gallery.html`
(`data-caption`, `data-loc`, `alt`); tiles no longer carry size classes. Current map
(reference list; the exact curated order lives in `gallery.html`. The roll is sequenced as a
loose story with smooth color transitions: a DC autumn chapter opens, then Tallahassee, Tampa,
the West Coast trip, travel, Honduras, and a sunset close):

| File | Caption | Location | Alt |
|------|---------|----------|-----|
| `georgetown-dc.jpg` | georgetown | Washington, DC | Autumn afternoon on a brick sidewalk lined with rowhouses in Georgetown Washington DC |
| `georgetown-dc-2.jpg` | georgetown | Washington, DC | Fall foliage over a tree-lined Georgetown street with brick rowhouses in Washington DC |
| `joint-custody-dc.jpg` | joint custody | Washington, DC | Inside Joint Custody record store in Washington DC with punk flyers and hanging records |
| `cns-annual-meeting.jpg` | cns annual meeting | Washington, DC | Amir with Lindsey Vonn at the Congress of Neurological Surgeons Annual Meeting in Washington DC |
| `ultra-bar-dc.jpg` | ultra bar | Washington, DC | Crowd outside Ultra Bar under blue lights at night in Washington DC |
| `planet-fitness-tallahassee.jpg` | planet fitness | Tallahassee, Florida | Amir walking through Planet Fitness by the judgement free wall in Tallahassee Florida |
| `faith-presbyterian-pumpkins.jpg` | pumpkin patch | Tallahassee, Florida | Rows of pumpkins at dusk at the Faith Presbyterian Church pumpkin patch in Tallahassee Florida |
| `tom-brown-park-tennis.jpg` | tennis | Tallahassee, Florida | Playing tennis at dusk on the courts at Tom Brown Park in Tallahassee Florida |
| `thrift-store-st-pete.jpg` | thrift store | St. Petersburg, Florida | Vintage thrift store with a blue and red graffiti mural in St. Petersburg Florida |
| `social-status-tampa.jpg` | social status | Tampa, Florida | Sneakers displayed on lit glass shelves at Social Status in Tampa Florida |
| `planet-fitness-tampa.jpg` | planet fitness | Tampa, Florida | Amir wearing a backwards cap at Planet Fitness in Tampa Florida |
| `tampa-sunset.jpg` | sunset | Tampa, Florida | Orange sunset sky over an empty parking lot in Tampa Florida |
| `urban-cantina-tampa.jpg` | urban cantina | Tampa, Florida | Street tacos with lime and onion at Urban Cantina in downtown Tampa Florida |
| `porsche-911-san-diego.jpg` | porsche | San Diego, California | Porsche 911 Carrera interior at a dealership in San Diego California |
| `uc-san-diego.jpg` | uc san diego | La Jolla, California | Amir at the UC San Diego undergraduate research conference in La Jolla California |
| `windansea-beach.jpg` | windansea | La Jolla, California | Sunset over the ocean at Windansea Beach in La Jolla California |
| `fashion-valley.jpg` | fashion valley | San Diego, California | Fashion Valley shopping center in San Diego California |
| `gallery-1.jpg` | los angeles | Los Angeles, California | Los Angeles California |
| `las-vegas.jpg` | las vegas | Las Vegas, Nevada | Casino floor in Las Vegas with colorful slot machines and neon lighting |
| `downtown-los-angeles.jpg` | downtown la | Los Angeles, California | Driving view toward the downtown Los Angeles skyline at sunset |
| `denver-colorado.jpg` | denver | Denver, Colorado | Interior of Denver airport with open atrium and suspended airplane display |
| `dallas-texas.jpg` | dallas | Dallas, Texas | Airplane wing seen through a window during a flight near Dallas Texas |
| `gallery-3.jpg` | north florida fair | Tallahassee, Florida | North Florida Fair in Tallahassee at night |
| `gallery-4.jpg` | gunna concert | Tampa, Florida | Gunna concert in Tampa Florida |
| `gallery-5.jpg` | tegucigalpa | Honduras | Tegucigalpa Honduras |
| `gallery-6.jpg` | construction | Tegucigalpa, Honduras | Construction roof view in Tegucigalpa Honduras |
| `gallery-9.jpg` | yard house | Tampa, Florida | Yard House in Tampa Florida |
| `gallery-10.jpg` | capital one cafe | Tampa, Florida | Capital One Cafe coffee walk |
| `watervue-grille-tampa.jpg` | watervue grille | Tampa, Florida | Amir sitting at WaterVue Grille in Tampa Florida on the Fourth of July |
| `seaworld-orlando.jpg` | seaworld | Orlando, Florida | Two people walking with their backs turned at SeaWorld Orlando at sunset |
| `sweetgreen-tampa.jpg` | sweetgreen | Tampa, Florida | Inside Sweetgreen in Hyde Park Tampa Florida |

`seaworld-orlando-2.jpg` (the solo, back-turned lantern shot) was removed from the site and
the file deleted.

The home "recently" collage features `predalina`, **`seaworld-orlando.jpg`** (Orlando; it
replaced the former airport photo), `tegucigalpa-honduras.jpg`, `gunna-concert-tampa.jpg`,
`santa-monica.jpg`, and **`la-jolla.jpg`** (green Porsche Macan on a palm-lined street at
sunset). `la-jolla.jpg` appears only on the home collage, not the gallery grid.

Not shown in the bottom grid (avoid duplicating the curated top section, or removed):
`gallery-2.jpg` (santa monica pier, featured up top as "santa monica") and `gallery-7.jpg`
(airport). **`gallery-8.jpg` (3 corners pizza) was removed from the visible gallery**; and
`miami-airport.jpg` is no longer referenced (the home collage now uses `seaworld-orlando.jpg`).
Unused files can stay in the folder.

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
| `projects/yusuf-cns-poster.pdf` + `.jpg` | hydrocephalus "posters & presentations" card 1 | CNS Annual Meeting digital poster #3020 + thumbnail (page 1 render) |
| `projects/yusuf-ucsd-presentation.pdf` + `.jpg` | hydrocephalus "posters & presentations" card 2 | UC San Diego slides (converted from `iNPH_UCSD_Presentation.pptx`); `.jpg` is the title slide |
| `projects/yusuf-msu-research-poster.pdf` + `.jpg` | hydrocephalus "posters & presentations" card 3 | MSU Summer Undergraduate Research Showcase poster + thumbnail |
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
- The bottom gallery is a masonry (CSS columns); photos show whole at their native aspect
  ratio with no cropping, so no `object-fit`/`object-position` tuning is needed there.
- Prefer compressed **JPG/WebP** (e.g. squoosh.app); a couple of the originals are ~4 MB and
  worth shrinking before deploy.
- Clicking any gallery photo opens a lightbox; captions/locations come from the
  `data-caption` / `data-loc` attributes in `gallery.html`.
