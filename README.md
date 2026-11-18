# Cabir Abbasov · AI Engineer

Personal portfolio of **Cabir Abbasov**, AI Engineer working on LLMs, NLP and
computer vision: multilingual PII detection and masking, LLM fine-tuning for
decision tasks, and document AI.

- GitHub: [Cabir22](https://github.com/Cabir22)
- LinkedIn: [cabir-abbasov](https://www.linkedin.com/in/cabir-abbasov/)
- Hugging Face: [Cab1r](https://huggingface.co/Cab1r)

Built with Next.js 16, React 19, Tailwind CSS, GSAP / Motion and a 3D keyboard
(`@chibi3d/runtime`, Three.js) where each keycap is a skill.

## Run locally

Requires Node.js 20.9+ and pnpm 11.

```bash
pnpm install
cp .env.example .env.local   # every variable is optional
pnpm dev                     # http://localhost:3000
```

Checks before committing:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Editing content

All content lives in `src/data/`:

| File | What it holds |
|---|---|
| `src/data/config.ts` | name, role, about text, SEO, email, social links, CV link |
| `src/data/constants.ts` | skills (3D keyboard keys) and experience |
| `src/data/projects.tsx` | projects, their tech-stack chips and modal content |
| `public/assets/` | images, e.g. `public/assets/projects-screenshots/` |

Keep the existing object shapes, then run `pnpm typecheck && pnpm build`.

Keyboard keys follow the order of `SKILLS`, 6 per row. `keyboardIcon` points
to an SVG in `public/assets/keyboard/logos/`. The SVG needs explicit
`width="512" height="512"` and a white fill (copy a glyph from
[Simple Icons](https://simpleicons.org) and add those attributes); an SVG with
only a `viewBox` renders as a blank key.

## Environment variables

See [`.env.example`](.env.example). All are optional:

| Variable | Effect when unset |
|---|---|
| `RESEND_API_KEY` | contact form shows a `mailto:` fallback instead of sending |
| `NEXT_PUBLIC_WS_URL` | live cursors, chat and the game stay hidden |
| `UMAMI_DOMAIN`, `UMAMI_SITE_ID` | no analytics script is loaded |

## Deployment

Deployed on Vercel. Every push to `main` triggers a production deploy; pushes
to other branches and pull requests get preview URLs.

## Credit

Design based on [3d-portfolio](https://github.com/Naresh-Khatri/3d-portfolio)
by Naresh Khatri, MIT licensed (see [LICENSE](LICENSE)).
