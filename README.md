# Ali Mohamed Nassef — Developer Portfolio

A personal portfolio site built with React, Vite, TypeScript, and Tailwind CSS,
ready to deploy to GitHub Pages.

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)
- Framer Motion (subtle animations)

## 1. Install dependencies

```bash
npm install
```

## 2. Run the website locally

```bash
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`) with hot reload.

## 3. Replace your photo (optional)

Your headshot is at `public/images/ali-nassef.png` and is already wired
into the Hero section (`src/data/profile.ts` isn't involved — the path is
set directly in `src/components/Hero.tsx`). To swap it, replace that file
with a new image of the same name, or update the `src` path in
`Hero.tsx` if you rename it.

## 4. Add your CV

Put your CV file in `public/cv/` and name it exactly:

```
public/cv/Ali_Mohamed_Nassef_CV.pdf
```

The "Download CV" button in the Hero section already points to this path
(`src/data/profile.ts` → `cvPath`), so no code changes are needed — just
replace the placeholder file.

## 5. Replace project screenshots

This starter ships without project screenshots (none were provided). To add
them:

1. Add your image files to `public/projects/` (create the folder).
2. Open `src/data/projects.ts` and `src/components/ProjectCard.tsx`.
3. Add an `imageUrl` field to the relevant project(s) and render an `<img>`
   at the top of the card, e.g. `src={`${import.meta.env.BASE_URL}projects/your-image.png`}`.

## 6. Update repository and demo links

Open `src/data/projects.ts`. Each project has `repoUrl` and `demoUrl` fields
currently set to `undefined` with a `// [ADD ...]` comment. Replace them with
real URLs as your repositories and live demos become available — the card
automatically switches from "coming soon" to a working link.

You should also add your LinkedIn URL in `src/data/profile.ts`
(`linkedin: '#'` → your real profile URL).

## 7. Build the website

```bash
npm run build
```

This type-checks the project and outputs a production build to `dist/`.

Preview the production build locally:

```bash
npm run preview
```

## 8. Deploy to GitHub Pages

This repo includes a GitHub Actions workflow at
`.github/workflows/deploy.yml` that builds and deploys automatically on
every push to `main`.

**Important — base path:** `vite.config.ts` sets `base: '/portfolio/'`,
which assumes your repository is named `portfolio` and the site is served
at `https://<your-username>.github.io/portfolio/`. If you name your
repository something else, update `base` in `vite.config.ts` to match
(e.g. `base: '/my-repo-name/'`), and update the link in `public/404.html`
too.

If you'd rather deploy manually instead of using the workflow:

```bash
npm run build
# then push the contents of dist/ to a `gh-pages` branch,
# or upload dist/ using your preferred deployment method
```

## 9. Configure the GitHub repository settings

1. Push this project to a GitHub repository (e.g. `AliNassef12/portfolio`).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually from the **Actions** tab).
5. Your site will be published at `https://AliNassef12.github.io/portfolio/`.

## Project structure

```
├── public/
│   ├── cv/                # Your CV goes here
│   ├── favicon.svg
│   └── 404.html           # Custom GitHub Pages 404 page
├── src/
│   ├── components/        # UI components (Navbar, Hero, Projects, etc.)
│   ├── data/               # Editable content: profile, skills, experience, projects
│   ├── hooks/               # useTheme, useActiveSection
│   ├── pages/               # NotFound (reference only; site has no router)
│   ├── types/               # Shared TypeScript interfaces
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/workflows/deploy.yml
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Editing content

All personal content lives in `src/data/`:

- `profile.ts` — name, title, USP, email, GitHub, LinkedIn, CV path
- `skills.ts` — technical skill groups, soft skills, languages
- `experience.ts` — work and training history
- `education.ts` — degrees and exchange programs
- `projects.ts` — project cards, including placeholders for unfinished details

Fields or notes marked `[ADD ...]` are placeholders — replace them with real
information as it becomes available.

## Accessibility & UX notes

- Dark/light theme detects system preference on first visit, and the choice
  is saved to `localStorage` afterward.
- `prefers-reduced-motion` is respected (animations are disabled for users
  who request it).
- Keyboard navigation and visible focus states are supported throughout.
- Semantic HTML and ARIA labels are used for interactive elements (theme
  toggle, mobile menu, navigation).

## License

This project is provided for personal use by Ali Mohamed Nassef. No license
is granted for reuse of personal content (name, photo, CV, bio).
