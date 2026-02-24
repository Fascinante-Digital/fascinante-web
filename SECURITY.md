# Security Policy

## Supported Versions

This project supports security fixes on the `main` branch.

## Reporting a Vulnerability

Please do not open public issues for potential vulnerabilities.

- Preferred channel: create a private security report in GitHub Security Advisories for this repository.
- Fallback contact: `security@fascinantedigital.com`

When reporting, include:

- Affected URL, route, or component path.
- Reproduction steps.
- Impact assessment (data exposure, auth bypass, privilege escalation, etc).
- Suggested remediation if available.

## Response Targets

- Acknowledge within 2 business days.
- Initial triage within 5 business days.
- Fix ETA shared after triage.

## Scope Notes

- Never commit API keys, tokens, credentials, or customer-sensitive data.
- Use GitHub repository secrets and environment variables for runtime configuration.
- If a secret leak is suspected, rotate the secret first, then remediate git history if required.
