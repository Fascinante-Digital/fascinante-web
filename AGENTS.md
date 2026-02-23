# Repository Agent Rules

These rules apply to any AI/LLM working in this repository.

## Google Business Profile (GBP) Operations

- Treat the following documentation as the policy source of truth:
  - https://developers.google.com/my-business/content/overview?hl=es-419
  - https://developers.google.com/my-business/content/accounts?hl=es-419
  - https://developers.google.com/my-business/content/oauth-overview?hl=es-419
  - https://developers.google.com/my-business/content/locations?hl=es-419
  - https://developers.google.com/my-business/content/best-practices?hl=es-419
  - https://developers.google.com/my-business/content/policies?hl=es-419
  - https://developers.google.com/my-business/content/limits?hl=es-419

- Use this Google Cloud project for GBP/Search Console CLI operations unless the user says otherwise:
  - `fascinante-digit-1698295291643`

- Required OAuth scopes for CLI/API work:
  - `https://www.googleapis.com/auth/business.manage`
  - `https://www.googleapis.com/auth/webmasters.readonly`
  - `https://www.googleapis.com/auth/cloud-platform`

- Operational safety rules:
  - Do not make burst traffic to Google APIs.
  - Run one validation request at a time unless the user asks for parallel calls.
  - Always include `X-Goog-User-Project: fascinante-digit-1698295291643` for direct REST calls.
  - Report API errors exactly and suggest the minimum corrective action.

- Policy constraints:
  - Follow GBP API policies for agency/third-party usage.
  - Do not propose forbidden uses (lead scraping, unauthorized automation, hidden access routing).
  - Prefer transparent, user-consented workflows.

## Frontend SEO Entity Work (when requested)

- Implement JSON-LD in rendered markup (`<script type="application/ld+json">`) rather than metadata fields.
- Keep visible business data consistent with structured data (NAP consistency).
- Validate with Rich Results Test and Search Console URL Inspection.
