# Koushik Bandaru — Product Designer portfolio

Portfolio site with two case studies (CONNX and Telmy), each readable as a short recruiter summary or a full designer process.

Built with Vite, React 18 and TypeScript. No router or UI library: pages are plain components and navigation uses URL hashes (`#connx`, `#telmy-process`, …), so the build is fully static.

## Scripts

```bash
npm install
npm run dev        # local dev server
npm run build      # typecheck + production build into dist/
npm run preview    # serve the production build
```

## Structure

```
src/
  App.tsx                 page switcher, overlays, scroll-spy
  routes.ts               route ids and page titles
  context/
    SiteContext.tsx       current route + "Reading as" lens (recruiter / designer)
    OverlayContext.tsx    lightbox and résumé viewer state
  pages/                  Home, Connx, ConnxProcess, Telmy, TelmyProcess
  components/
    HashLink.tsx          in-app navigation or in-page scroll
    Shot.tsx              product screen with click-to-zoom
    PromoVideo.tsx        Telmy film (ambient autoplay respects reduced motion)
    ThemeSlider.tsx       continuous colour-scheme slider
    ResumeViewer.tsx      résumé preview + PDF download
    Lightbox.tsx, ResumeLink.tsx, CopyEmailButton.tsx
  hooks/                  useScrollSpy, useReducedMotion
  lib/                    theme maths (OKLab blending, WCAG contrast), images, storage
  styles/
    global.css            colour tokens, base, overlays, slider
    patterns.css          shared text/surface classes
    responsive.css        phone layout and wide-screen home rail
  assets/                 screens, portrait, video, résumé PDF
```

## Content placeholders

Some copy still holds bracketed placeholders to fill in, e.g. `[Remote?]`, the three reference quotes (`[Quote from …]`, `[Name]`, `[Role]`) and tool lists. Search the `src/pages` folder for `[` to find them.

## Deploying

`vite.config.ts` uses `base: './'`, so `dist/` works on any static host, including GitHub Pages project sites, Netlify and Vercel.
