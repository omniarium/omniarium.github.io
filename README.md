# omniarium

A small personal writing site. Built with React, TypeScript, and Vite.
Posts are plain Markdown files with minimal frontmatter.

## Adding a post

Add a new `.md` file to `src/content/posts/`. The filename becomes the
post's URL slug (e.g. `my-post.md` → `/posts/my-post`). Start the file with
frontmatter:

```md
---
title: My Post Title
date: 2024-05-01
excerpt: A one-line summary shown in the post list.
---

Your Markdown content goes here. Images work with normal
Markdown image syntax: ![alt text](path-or-url.jpg)
```

That's it — the post will automatically show up on the Posts page and the
homepage, sorted by date, no other registration needed.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deployment (GitHub Pages)

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the site
and deploys it to GitHub Pages automatically on every push to `main`.

To enable it:

1. Push this repo to GitHub as `omniarium` (or update `base` in
   `vite.config.ts` to match your repo name).
2. In the repo settings, go to **Pages** and set the source to
   **GitHub Actions**.
3. Push to `main` — the site will build and deploy automatically.

The site will be available at `https://<your-username>.github.io/omniarium/`.
