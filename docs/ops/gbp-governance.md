# GBP Governance (CLI + LLM)

Last updated: 2026-02-23

## Purpose

Define a safe, policy-compliant operating model for managing Google Business Profile (GBP) and Search Console from CLI with LLM assistance.

## Official sources

- GBP overview: https://developers.google.com/my-business/content/overview?hl=es-419
- Accounts: https://developers.google.com/my-business/content/accounts?hl=es-419
- OAuth overview: https://developers.google.com/my-business/content/oauth-overview?hl=es-419
- Locations: https://developers.google.com/my-business/content/locations?hl=es-419
- Best practices: https://developers.google.com/my-business/content/best-practices?hl=es-419
- Policies: https://developers.google.com/my-business/content/policies?hl=es-419
- Usage limits: https://developers.google.com/my-business/content/limits?hl=es-419

## Project and auth baseline

- Default project: `fascinante-digit-1698295291643`
- Required scopes:
  - `https://www.googleapis.com/auth/business.manage`
  - `https://www.googleapis.com/auth/webmasters.readonly`
  - `https://www.googleapis.com/auth/cloud-platform`
- For direct REST requests, include:
  - `X-Goog-User-Project: fascinante-digit-1698295291643`

## Operational model (pro pattern)

- Use user OAuth credentials for owner-authorized actions.
- Use explicit project context for all calls.
- Run one call at a time for validation and diagnostics.
- Keep immutable logs of command, timestamp, endpoint, and result.
- Apply exponential backoff on rate-limit or transient failures.

## Hard guardrails

- Do not automate forbidden actions under GBP policy.
- Do not proxy third parties through a single project in prohibited ways.
- Do not perform hidden or non-consensual account/location changes.
- Do not mask API errors; preserve status code and error payload.

## Verification definition of done

- GBP APIs enabled and callable with valid scope.
- Search Console API enabled and callable in the same project.
- Property ownership and access verified in Search Console.
- JSON-LD and visible NAP are consistent.
- Rich Results and URL Inspection pass for target pages.
