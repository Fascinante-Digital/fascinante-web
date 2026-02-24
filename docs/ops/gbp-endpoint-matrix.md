# GBP Endpoint Matrix (CLI + LLM)

Last validated: 2026-02-23

## Official references used

- GBP reference overview: https://developers.google.com/my-business/reference/rest?hl=es-419
  - Last updated shown by Google page: 2025-08-29 UTC
- Sunset schedule: https://developers.google.com/my-business/content/sunset-dates?hl=es-419
  - Last updated shown by Google page: 2025-08-29 UTC
- Account Management v1: https://developers.google.com/my-business/reference/accountmanagement/rest?hl=es-419
  - Last updated shown by Google page: 2025-07-25 UTC
- Business Information v1: https://developers.google.com/my-business/reference/businessinformation/rest?hl=es-419
  - Last updated shown by Google page: 2025-07-25 UTC
- Performance v1: https://developers.google.com/my-business/reference/performance/rest?hl=es-419
  - Last updated shown by Google page: 2025-07-25 UTC
- Q&A change log: https://developers.google.com/my-business/content/qanda/change-log?hl=es-419
  - Last updated shown by Google page: 2025-11-06 UTC

## Endpoint router (authoritative)

- `accounts`, `admins`, `invitations`, ownership transfer:
  - `https://mybusinessaccountmanagement.googleapis.com/v1`
- `locations` profile data (`title`, `address`, `phone`, `hours`, `attributes`, `categories`):
  - `https://mybusinessbusinessinformation.googleapis.com/v1`
- Performance metrics and keywords:
  - `https://businessprofileperformance.googleapis.com/v1`
- Features still in legacy surface (`reviews`, `localPosts`, `media`):
  - `https://mybusiness.googleapis.com/v4`

## Blocked/deprecated by default

- `accounts.locations.reportInsights` (v4) -> use Performance v1 methods.
- `mybusinessqanda.googleapis.com` -> API sunset completed (2025-11-03).
- `businesscalls` API -> sunset completed (2023-05-30).

## Required request headers/scopes

- Header for direct REST:
  - `X-Goog-User-Project: fascinante-digit-1698295291643`
- OAuth scopes:
  - `https://www.googleapis.com/auth/business.manage`
  - `https://www.googleapis.com/auth/webmasters.readonly`
  - `https://www.googleapis.com/auth/cloud-platform`

## Operational safety

- Validation requests: one at a time.
- Use exponential backoff for retryable errors.
- Preserve Google API errors exactly (status + reason + message).
