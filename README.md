# Dynamic Wedding Invite

Single-page web app realizzata con Next.js per un invito di matrimonio in stile storytelling con effetto parallax.

Il progetto include:

- Sezioni full-screen con sfondi fotografici e testo progressivo durante lo scroll.
- Story finale con video YouTube in background.
- Timeline orizzontale stilizzata nella sezione "Un Giorno Speciale".
- Sezione "Mappe e Indicazioni" con preview iframe dei luoghi e link rapidi a Google Maps.
- Layout responsive desktop/mobile.

## Stack

- Next.js (App Router)
- React
- Tailwind CSS v4 (via `@import "tailwindcss"`)

## Avvio in locale

Avvia il server di sviluppo:

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Script utili

```bash
npm run dev      # avvio sviluppo
npm run lint     # controllo qualità (eslint)
npm run build    # build produzione
npm run start    # avvio build produzione
```

## Struttura principale

- `src/app/page.js`: contenuto della single page (stories, timeline, mappe).
- `src/app/globals.css`: stile globale, parallax/sticky layout, timeline e sezioni informative.
- `public/`: asset statici locali (immagini location).

## Personalizzazione contenuti

Per aggiornare il contenuto dell’invito:

- modifica testi e dettagli dentro `sections` in `src/app/page.js`;
- sostituisci le immagini in `public/` e aggiorna i path `background`;
- aggiorna i link mappe (`href` e `iframe src`) nella sezione "Mappe e Indicazioni".

## Note

- Alcuni comportamenti di autoplay video dipendono dalle policy del browser.
- Su Safari/iPhone può essere necessario un refresh completo dopo modifiche a embed/CSS.

## Deploy

Puoi pubblicare il progetto su qualsiasi hosting compatibile con Next.js (es. Vercel).
