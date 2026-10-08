# Vercel deployment

Production: https://phongkhamtamnhu.com

Project dashboard: https://vercel.com/dungtd2504s-projects/phongkhamtamnhu

Only this FE directory is deployed. The backend is not deployed. Login and form submissions currently show the backend-pending notice.

## Publish frontend changes

Run from this directory in PowerShell:

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
```

After validation, commit and push the changes to `main` in `dungtdhe173304/phong-kham-tam-nhu`. Git-based automatic deployment is connected.

Vercel project settings must use Root Directory `FE`, Framework `Next.js`, Install Command `npm ci`, Build Command `npm run build`, and the default Output Directory. The repository root contains both `BE` and `FE` and must not be deployed as an unconfigured static site.

On 2026-10-08, an empty Git deployment caused a platform-level 404. Production was restored to the verified frontend deployment `dpl_3CG349tdNkgq3F4nAWpkT86SPci4`, and the Git build settings above were applied. The root, contact and training pages returned HTTP 200 after recovery; the `www` redirect remained HTTP 308.

`vercel.json` selects Next.js with `npm ci` and `npm run build`. `.vercelignore` excludes local builds, dependencies, test artifacts, scripts, and environment files.

## Custom domain

`phongkhamtamnhu.com` and `www.phongkhamtamnhu.com` are attached to this project. Vercel has verified both DNS configurations at Tenten. The existing Tenten nameservers are retained, with the records returned by Vercel verification:

The primary domain is `https://phongkhamtamnhu.com`. The `www` domain is configured in Vercel to redirect permanently (HTTP 308) to the primary domain. Both domains have an issued HTTPS certificate.

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 216.198.79.1 |
| A | @ | 64.29.17.1 |
| CNAME | www | 392d1429ce0fd6f6.vercel-dns-017.com. |

Re-check after saving DNS:

```powershell
vercel.cmd domains verify phongkhamtamnhu.com --scope dungtd2504s-projects
vercel.cmd domains verify www.phongkhamtamnhu.com --scope dungtd2504s-projects
```

## Agent setup

The global Vercel CLI is installed and authenticated as `dungtd2504`. The user-scoped `vercel@openai-curated` plugin is installed and enabled.

The shared Codex MCP connection is enabled at `https://mcp.vercel.com`, and OAuth sign-in succeeded. Its configuration is in `C:\Users\thieu\.codex\config.toml`.

Reload the Codex client to load the new plugin and MCP tools. The current session could not call `search_vercel_documentation` or MCP `list_teams` because those tools were not loaded. Keep confirmation enabled for MCP mutations.
