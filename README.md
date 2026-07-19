# Ricettine 🍋

*La piccola gazzetta della cucina italiana* — an Italian recipe site in a printed-newspaper style, with live portion scaling, an induction/gas method switch, and one-click language flags. Static, zero build step, free to host on GitHub Pages.

---

## What's inside

```
ricettine/
├── index.html            ← the whole site (HTML + CSS + JS + recipe data)
├── recipe-template.js    ← copy this block to add a new recipe
├── images/               ← drop your food photos here
└── README.md
```

Everything lives in `index.html` on purpose: it opens by double-click, renders identically locally and on GitHub Pages, and there's nothing to compile. When your collection gets large (say 50+ recipes) you can split recipes into separate JSON files — see *Scaling up* at the bottom.

---

## Deploy to GitHub Pages (free, ~3 minutes)

1. Create a new repository, e.g. **`ricettine`** (public).
2. Upload the contents of this folder to the repo root (drag-and-drop in the browser is fine).
3. Repo → **Settings** → **Pages** → *Source:* **Deploy from a branch** → branch **main**, folder **/ (root)** → **Save**.
4. Wait ~1 minute. Your site is live at `https://<your-username>.github.io/ricettine/`.

To use your own domain later (e.g. `ricettine.it`), add it under Settings → Pages → *Custom domain*.

**Local preview:** just open `index.html` in a browser. (No local server needed — there's no `fetch`, so `file://` works.)

---

## How the three interactive features work

### 1. Portion scaling
Every recipe is authored **for 2 servings**. The stepper multiplies each quantity by `people / 2` and rounds sensibly:
- **g / ml** → nearest whole number (nearest 5 above 100 g/ml).
- **countable things** (eggs, cloves, slices) → nearest ¼, shown with real fraction glyphs (1 ½ uova).
- **`q.b.` items** (salt, pepper, parsley) → never scaled; they stay "to taste". This is deliberate — salt, spices and cooking liquid don't scale linearly, so anything you mark `q.b.` sidesteps bad math.

You always send me the **2-person** version; the calibration is automatic.

### 2. Induction ⚡ / Gas 🔥
You always write the **induction** version of each step. For steps where the heat source matters, the recipe stores a **gas** variant too, and the toggle swaps the text live. The differences I bake in when writing the gas variant: gas heats the pan sides (not just the base), has no precise power numbers (flame-height cues instead of "7/9"), pre-heats slower, and has hot spots — so gas steps get lid/pre-heat/pan-rotation cues.

Steps that don't touch a hob are stored as plain `text` (same for both), and **if a recipe never uses the stove, the toggle hides itself automatically** (see Tiramisù and Negroni). No wasted UI.

### 3. Language flags 🇮🇹🇬🇧🇩🇪🇫🇷🇪🇸
Two layers:
- **Interface** (menus, buttons, labels) — fully translated in all 5 languages in the `I18N` object.
- **Recipe content** — each recipe carries its own translations (`{it: "...", en: "..."}`). Currently every recipe ships **Italian + English**; any missing language **falls back to Italian**, so nothing ever breaks. Add `de`, `fr`, `es` keys to a recipe whenever you want it fully localised.

The chosen language is remembered between visits.

> Flags use the cross-platform `flag-icons` library (via CDN) rather than emoji, because emoji flags don't render on Windows.

---

## Photos — the newspaper treatment

I can't generate photographs, but the site is built so photos aren't a bottleneck:

- **No photo yet?** Each recipe shows an engraved-style illustration placeholder (one per section). The site looks finished on day one.
- **Add a real photo:** drop it in `images/`, then set `image:"images/your-file.jpg"` on that recipe. It's automatically rendered in **halftone black-and-white with a dotted screen** — the printed-newspaper look — plus a caption and credit line.
- **"See in colour"** toggle on each recipe lifts the treatment when a reader wants the real colours.

Best source of photos is your own camera — one overhead shot per dish, even from a phone, looks great once the halftone filter is applied. Free stock (Unsplash / Pexels) works too; the filter unifies everything into one editorial style regardless of source.

---

## Adding a recipe

1. Open `recipe-template.js`, copy the object, fill it in (2 servings, induction).
2. Paste it into the `RECIPES = [ ... ]` array in `index.html`.
3. Commit. Done — it appears under its section automatically.

**Or just hand me the recipe** (2 people, induction — a photo of a handwritten card, a paragraph, whatever) and I'll return the finished, translated, gas-calibrated object ready to paste. That's the intended workflow.

The **first recipe in each section** is the front-page lead (larger). Reorder the array to change what leads.

---

## Scaling up (when you have lots of recipes)

The single-file setup is comfortable to a few hundred recipes. Past that, or when you'd rather manage one file per recipe in git:

1. Move each recipe object into `recipes/<id>.json`.
2. Add a `recipes/index.json` manifest listing the ids.
3. Replace the inline `RECIPES` array with a `fetch()` of the manifest + files at startup.

At that point you'll want to preview via a tiny local server (`python3 -m http.server`) because `fetch` doesn't work over `file://`. Tell me when you're ready and I'll do this migration for you.

---

## Customising the look

All colours are CSS variables at the top of the `<style>` block in `index.html`:
`--rosso` (accent red), `--oliva` (green), `--paper`, `--ink`. Fonts are Bodoni Moda (masthead) + Spectral (body) via Google Fonts. Change the masthead motto in the `I18N` `motto` keys.
