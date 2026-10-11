# Abderrahmane El Hihi — portfolio

React portfolio in English and French, using the Contact Sheet design.

## GitHub Pages

This repository is intended for `abderrahmane-el-hihi/abderrahmane-el-hihi.github.io`.
In **Settings → Pages**, select **GitHub Actions** as the publishing source.
Every push to `main` builds and checks the React app, then deploys `dist/`.
The website address is https://abderrahmane-el-hihi.github.io/ once deployment succeeds.

## Local development

Requires Node.js 20 or later.

```sh
npm ci
npm run build
npm run check
node serve.mjs
```

Open http://127.0.0.1:4173.

## Edit

- `src/App.jsx`: project descriptions, translations, project selection and case studies.
- `src/Lower.jsx`: biography, experience, education, research, contact and CV downloads.
- `src/styles.css`: responsive layout, fonts and reduced-motion styling.
- `dist/index.html`: HTML metadata and entry point.
- `dist/assets/`: self-hosted fonts, project images and the three original CV PDFs.

Keep `dist/assets/` when rebuilding. The build updates JavaScript and CSS alongside it.
Asset URLs begin at `/` because this is a GitHub user site served at the domain root.

The hero images are labelled illustrative interface studies. The NexaERP case study
includes a repository screenshot. Research descriptions are based on the supplied
Data Science CV, without unverified performance or adoption claims.

The GitHub Pages copy has no ChatGPT Sites configuration or runtime dependency.
