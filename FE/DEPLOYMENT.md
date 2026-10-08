# Vercel deployment

Production: https://phongkhamtamnhu.vercel.app

Project dashboard: https://vercel.com/dungtd2504s-projects/phongkhamtamnhu

Only this FE directory is deployed. The backend is not deployed. Login and form submissions currently show the backend-pending notice.

## Publish frontend changes

Run from this directory in PowerShell:

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
vercel.cmd deploy --prod --yes --scope dungtd2504s-projects
```

The CLI uploads the current local files. Git-based automatic deployment is not connected.

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
