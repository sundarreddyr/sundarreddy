# Portfolio maintenance

## Repository and deployment

- This repository contains Sundar Reddy's portfolio source. Preserve the existing root README.md; the owner maintains it.
- Production: https://sundar-reddy-portfolio.sundarreddy022.chatgpt.site/
- Existing Sites project: `appgprj_6ae46619f6508191b4ec6eaba8959134`.
- `.openai/hosting.json` preserves that identity and declares `dist` as the static output. Never create a replacement Site for an update.
- This is a buildless HTML/CSS/JavaScript site. `dist/` is the editable source, not generated output. There is no dependency installation or compilation step.
- GitHub pushes do not automatically deploy to the existing Sites URL. No continuous-deployment integration has been configured.
- GitHub is the intended working source going forward. Before editing, fetch its latest branch and compare with the latest Sites source: updates from another chat may exist only there. Reconcile differences and preserve unrelated changes; never overwrite newer work blindly.

## File map

- `dist/index.html`: page layout, introduction, skills, career, contact, and project cards.
- `dist/projects.js`: project content stored in `window.portfolioProjects`.
- `dist/app.js`: project dialogs, theme, navigation, and illustrative animations.
- `dist/style.css`: shared styling, responsive layouts, and dark mode.
- `dist/assets/Sundar_Reddy_Resume.pdf`: downloadable resume. Replace only with an owner-supplied or approved revision.
- `dist/assets/icons/`: local icons and their source/license notices. Retain the notices.
- `dist/favicon.svg`: site icon.

## Content and design

- Preserve the established light bento style, per-project gradients, wordmarks, dark mode, and responsive layout.
- Keep changes within the requested project or section. Do not rewrite other projects as a side effect.
- Project stories should be concise first-person engineering prose: establish ownership, explain the constraint before the decision, and describe what improved.
- Use connected short paragraphs, a comfortable reading width, and generous spacing. Avoid a technology inventory, numbered milestones, or repetitive Problem/Solution/Outcome blocks.
- Use `<strong><em>…</em></strong>` sparingly for important numbers or achievements.
- Livine Analytics uses the optional `story` array and `technicalNote` fields in projects.js, rendered by app.js. Other projects retain their existing bullet format until explicitly requested.
- Keep implementation detail in the Analytics replication disclosure. Do not link the likely `bakwc/mysql_ch_replicator` repository unless the owner or reliable project evidence confirms it is the library used.
- Analytics facts: joined Livine in 2022 as second SWE; 300+ reports/dashboards/touchpoints over 1.5 years; MySQL analytical reads moved to ClickHouse while transactions stayed on MySQL; migration latency >1 minute → 2–3 seconds.
- The separate ~60 seconds → ~5 seconds reporting-service metric must not be attributed to that migration.
- Versioned records for updates/deletes were this implementation's choice, not a claim that ClickHouse cannot update/delete.
- Keep unsupported metrics, cost savings, and unverified claims out. Ask for missing facts when necessary.
- Preserve accessibility: native dialog behavior, keyboard closure/focus restoration, readable contrast, accessible controls, reduced-motion support, and mobile layout.

## Local verification

Run from the repository root:

```sh
node --check dist/app.js
node --check dist/projects.js
git diff --check
python3 -m http.server 8000 --directory dist
```

Open the displayed local URL in an available browser. Check the changed card and dialog, replication disclosure when relevant, closing/reopening, light/dark themes, and a narrow mobile width. Confirm the resume and local assets still load. Stop the preview server when finished. In a managed Sites environment, follow its preview instructions instead of starting a separate server.

## Publishing to the existing live Site

1. Use the available Sites integration and read its current workflow instructions. Fetch the existing project's current audience and latest source and obtain fresh repository access. Never store credentials in files, commits, URLs, logs, or documentation.
2. Open the Sites-managed source checkout through the supported workflow. GitHub and Sites have separate Git histories; do not force-push one over the other.
3. Reconcile the newest source in both locations, then apply the approved portfolio files to that checkout. Preserve `.openai/hosting.json` and existing configuration. Keep the owner-maintained GitHub README.md unchanged.
4. Validate, push the matching Sites source, package static output, save a version, and deploy that exact version through Sites. Preserve the existing audience; the initial export was public.
5. Confirm deployment success and report the live URL. Report verification limits accurately. If repository access fails, report the exact error and distinguish committed changes from published changes.
6. Ensure the final site changes are also committed to GitHub so subsequent agents start with the same content. Avoid force pushes and resolve concurrent changes before updating a branch.

If Sites is unavailable, editing, local preview, and GitHub commits can still proceed. Clearly say the live Site has not been updated. Do not imply a GitHub push alone published it, or enable another hosting service without a request.
