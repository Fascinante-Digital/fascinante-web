# GitHub Security Baseline (Free Plan)

Last updated: 2026-02-23

## Official references (validated)

- GitHub best practices for repositories (security features free on public repos)
- Secret scanning and push protection docs
- Dependabot alerts and dependency graph docs
- Code scanning availability docs (public repos supported on Free)

## Baseline controls for this repository

- Repository visibility: `public`
- Secret scanning: `enabled`
- Push protection: `enabled`
- Dependabot security updates: `enabled`
- Code scanning workflow: `.github/workflows/codeql.yml`
- Dependency review gate: `.github/workflows/dependency-review.yml`
- Dependabot version updates: `.github/dependabot.yml`
- Security policy: `SECURITY.md`

## Operating rules

- Never commit secrets, credentials, or API keys.
- Use GitHub repository secrets and environment variables in CI/deploy.
- Keep `.env*`, key material, and local credential files ignored by git.
- Rotate leaked secrets first, then remediate repository history if needed.

## Monthly checklist

1. Review Dependabot alerts and merge security updates.
2. Review CodeQL findings and close false positives with justification.
3. Review secret scanning alerts and bypass events.
4. Verify branch protection and required checks for `main`.
5. Confirm no credentials are tracked in git.

## Quick verification commands

```bash
gh api repos/alexanderovie/fascinante-web --jq '{visibility,security_and_analysis}'
gh api repos/alexanderovie/fascinante-web/vulnerability-alerts -i
```
