# Deploying react-vercel-demo to Vercel — Step-by-step

This file contains every small step (copy/paste commands and UI steps) to deploy the project to Vercel using either the Vercel Dashboard (recommended) or the Vercel CLI.

Prerequisites

- Node.js and npm installed (Node 18+ recommended).
- Git installed and a GitHub (or GitLab/Bitbucket) account.
- A Vercel account (https://vercel.com/signup).

Quick checklist (commands below show how to run these):

1. Initialize a git repository and push to GitHub
2. Connect repository to Vercel via Dashboard (or use Vercel CLI)
3. Configure build command and output directory
4. Deploy and verify routes

---

A. Prepare the repository locally

1. Open a terminal and change to the project folder:

```bash
cd /home/diffiter-006/rails_project/react-demo
```

2. Initialize git (skip if already a git repo):

```bash
git init
git add .
git commit -m "chore: initial commit - react-vercel-demo"
```

3. Create a GitHub repo and push (choose either web or CLI):

- Web: Create a new repo on GitHub.com, copy remote URL, then:

```bash
git remote add origin <YOUR_GITHUB_REPO_URL>
git branch -M main
git push -u origin main
```

- CLI (GitHub CLI - optional):

```bash
# install gh if needed: https://cli.github.com/
gh repo create myorg/react-vercel-demo --public --source=. --remote=origin --push
```

Replace `<YOUR_GITHUB_REPO_URL>` with the HTTPS or SSH URL GitHub gives you.

---

B. Recommended: Deploy via Vercel Dashboard (GUI)

1. Go to https://vercel.com and log in.
2. Click "New Project" → "Import Git Repository" and choose your Git provider (GitHub/GitLab/Bitbucket).
3. Select the repository you pushed in section A.
4. Vercel will try to detect the framework. If it detects Vite, it's fine. If not, choose "Other" or "Vite".
5. On the Setup screen, set (if shown):
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command (optional): `npm install`
6. Leave Environment Variables empty unless your app needs any — you can add them in the Vercel Project Settings later.
7. Click "Deploy". The deployment logs will show the `npm install` and `npm run build` steps.

Notes:
- The provided `vercel.json` in the repo rewrites all routes to `index.html` so SPA routes will work. See [vercel.json](vercel.json#L1).

---

C. Alternative: Deploy using Vercel CLI (terminal)

1. Install the Vercel CLI (optional globally):

```bash
npm i -g vercel
# or use npx vercel for one-off
```

2. Login to Vercel from terminal:

```bash
vercel login
```

3. Link the local project to Vercel (run in project root):

```bash
cd /home/diffiter-006/rails_project/react-demo
vercel link
```

Follow prompts to select the scope (your account or a team) and the project name. If you already imported the repo via dashboard, choose that project.

4. Deploy (preview):

```bash
vercel
```

5. Deploy to production (promote):

```bash
vercel --prod
```

When using CLI, if Vercel doesn't detect Vite correctly, pass the build options interactively or create a `vercel.json` (already present in this repo).

---

D. Verify routes and SPA behavior

1. After deployment finishes, open the provided Vercel URL.
2. Navigate to `/about` or other routes — they should render. If you get 404s on refresh, ensure `vercel.json` exists and contains the rewrite:

- This project already has `vercel.json` that rewrites all routes to `index.html`.

3. If client-side routes return 404, double-check:
   - `vercel.json` is at project root and committed
   - Build succeeded and `dist/index.html` exists

---

E. Environment variables (if needed)

- Add via Vercel Dashboard: Project → Settings → Environment Variables → Add
- Or CLI: `vercel env add NAME production`

When adding env vars, redeploy to pick them up.

---

F. Common troubleshooting

- Build fails with module errors: run `npm run build` locally and fix missing dependencies.
- Wrong Node version: set `engines.node` in `package.json` or configure via Vercel Project Settings ("Environment > Node Version").
- 404 on refresh: ensure `vercel.json` rewrite present and committed.
- Static assets not found: ensure path references are relative or absolute appropriate for Vite output.

---

G. Optional: Custom Domain & Redirects

1. Add domain in Vercel Dashboard → Domains → Add.
2. Follow DNS instructions from Vercel (CNAME/A records).
3. Use `vercel.json` or Dashboard for custom redirects/headers if needed.

---

H. Rollbacks & Logs

- Vercel dashboard shows previous deployments: open the project and select a prior deployment and click "Promote" to make it production.
- Logs: Project → Deployments → Select deployment → View Logs.

---

I. Quick copy/paste commands summary

```bash
# from project root
git init
git add .
git commit -m "initial: react-vercel-demo"
git remote add origin <YOUR_GIT_URL>
git push -u origin main

# using Vercel CLI
npm i -g vercel
vercel login
vercel link
vercel --prod
```

---

If you'd like, I can:

- Run the `git` commands here and push to a GitHub repo you provide access to, or
- Run `vercel --prod` from this environment if you authenticate (note: I cannot handle your credentials; you must run the login step locally), or
- Walk you through the Vercel Dashboard import step-by-step while you perform the clicks.

End of instructions.
