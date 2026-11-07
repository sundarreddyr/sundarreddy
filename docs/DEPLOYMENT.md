# Portfolio deployment

## GitHub Pages (primary)

The public repository uses free GitHub Pages and standard Ubuntu Actions runners. No ChatGPT subscription, custom domain, third-party hosting account, or personal access token is required. GitHub's usage limits and terms still apply; no provider promises perpetual free hosting.

Expected URL after successful setup: https://sundarreddyr.github.io/sundarreddy/

### One-time setup

1. Open https://github.com/sundarreddyr/sundarreddy/settings/pages while signed into the owner account.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Open https://github.com/sundarreddyr/sundarreddy/actions/workflows/portfolio.yml and choose **Run workflow** on `main`. Alternatively rerun a failed initial run after enabling Pages.
4. Confirm the validation, deployment, and live verification jobs succeed. Use the URL shown on the `github-pages` environment and deployment summary for new resumes.

These steps are needed only if Pages was not enabled already. A successful upload/commit alone does not establish a successful deployment.

### Subsequent updates

Edit `dist/`, commit, and push to `main`. Pull requests validate but never deploy. The workflow uploads only `dist/`; the root README, agent instructions, repository configuration, and scripts are not published as website assets.

### Status in Actions

Open https://github.com/sundarreddyr/sundarreddy/actions.

| Job | What success means |
| --- | --- |
| Validate site and assets | JavaScript syntax, local asset paths, unique HTML IDs, PDF resume, and hosting configuration passed checks. |
| Deploy GitHub Pages | GitHub accepted the artifact and completed the Pages deployment; summary includes URL and commit. |
| Verify live Pages files and resume | The live page, JavaScript, CSS, favicon, and resume match the committed files byte for byte. |
| Check ChatGPT mirror (does not deploy) | The mirror was checked. Read the summary: a warning can mean it differs or could not be reached. A green job is not proof that the mirror was deployed. |

Pages failures commonly mean its source has not been set to GitHub Actions, Actions are disabled, or the `github-pages` environment has a pending protection rule. Inspect the failing step rather than repushing blindly.

### Rollback

Revert the unwanted site commit in GitHub and push the revert to `main`. CI redeploys that state. Do not force-push history. After a rollback, sync the legacy mirror separately while free publishing is authorized.

## ChatGPT Sites (legacy mirror)

Old resumes link to https://sundar-reddy-portfolio.sundarreddy022.chatgpt.site/.

Keep that existing public Site available. Its project ID remains in `.openai/hosting.json`. Future changes made through ChatGPT should publish the same `dist/` files to both hosts while the mirror is free.

The currently available Sites workflow does not expose a supported GitHub Actions deployment credential/API. The Pages workflow therefore cannot deploy the ChatGPT mirror in the same job. It checks the mirror and reports drift without pretending to publish it. There is no hourly sync task.

For each ChatGPT-managed update:

1. Fetch GitHub main and validate the final site files.
2. Push to GitHub and confirm the Pages deployment succeeded.
3. Read the Sites workflow, fetch the existing Site's audience and latest source, obtain fresh repository access, and open its checkout.
4. Reconcile changes, copy the same portfolio files, validate, push the Sites source, package static output, save a version, and deploy that version. Preserve public access and the existing project ID. Do not push GitHub history over Sites history.
5. Verify the live mirror with `python3 scripts/verify_live.py https://sundar-reddy-portfolio.sundarreddy022.chatgpt.site/`. Report its saved version and deployment result separately. Rerun the GitHub workflow if a refreshed mirror check is desired.

As documented November 7, 2026, OpenAI says hosting is free through December 31, 2026; metering and overages above the plan allowance start January 1, 2027. This is not a promise about behavior after subscription cancellation. Recheck current terms before continuing the mirror after the free period; do not authorize charges automatically. The GitHub Pages site is independent of ChatGPT.

References:
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/actions/concepts/billing-and-usage
- https://learn.chatgpt.com/docs/sites
