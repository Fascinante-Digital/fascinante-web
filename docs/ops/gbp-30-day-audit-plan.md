# GBP 30-Day Audit & Optimization Plan (Template)

Last updated: 2026-02-23

## Objective

Improve local visibility, profile completeness, and conversion signals while staying fully compliant with Google Business Profile (GBP) policies.

## Scope and account

- Project: `<GCP_PROJECT_ID>`
- GBP account: `accounts/<ACCOUNT_ID>`
- Location: `locations/<LOCATION_ID>`

## Baseline snapshot (from API)

- Capture these fields and fill values in your private report:
  - authority state (`hasVoiceOfMerchant`, `hasBusinessAuthority`)
  - review count, average rating, and reply coverage
  - media count and media type distribution
  - local posts activity level
  - profile core field completeness (title, website, phone, address, hours, categories)

## KPI targets (30 days)

- Reviews replied: from partial coverage -> 100% replied.
- Media count: 1 -> at least 15 quality assets.
- Posts cadence: 0 -> 1-2 posts per week.
- Profile consistency: 100% NAP parity between website + GBP + JSON-LD.
- Performance tracking: weekly report with clicks/calls/directions trends.

## Weekly execution

### Week 1 — Data integrity and governance

- Confirm no profile drift:
  - name, phone, address, website, hours, categories.
- Confirm website NAP and JSON-LD parity.
- Build response templates for reviews in EN/ES.
- Validate API routing guardrails before any automation work.

### Week 2 — Reviews and trust signals

- Reply to all pending reviews.
- Define SLA: new review reply within 24-48h.
- Add owner response style guide:
  - friendly,
  - specific,
  - no prohibited claims.

### Week 3 — Media and profile freshness

- Upload high-quality assets in batches:
  - brand/logo,
  - office/location,
  - team,
  - process,
  - before/after case assets where allowed.
- Keep filenames and metadata clean and brand-consistent.

### Week 4 — Posts and performance loop

- Publish 4-8 posts in month 1 (1-2/week).
- Use UTM-tagged URLs for website CTA tracking.
- Pull performance metrics weekly and compare trendline.
- Summarize wins and define next 30-day priorities.

## Recommended API flow (single request pacing)

1. Account and access:
   - `mybusinessaccountmanagement.googleapis.com/v1/accounts`
2. Profile fields:
   - `mybusinessbusinessinformation.googleapis.com/v1/accounts/*/locations`
3. Reviews and replies:
   - `mybusiness.googleapis.com/v4/accounts/*/locations/*/reviews`
4. Media inventory:
   - `mybusiness.googleapis.com/v4/accounts/*/locations/*/media`
5. Posts inventory:
   - `mybusiness.googleapis.com/v4/accounts/*/locations/*/localPosts`
6. Authority state:
   - `mybusinessverifications.googleapis.com/v1/locations/*/VoiceOfMerchantState`
7. Performance:
   - `businessprofileperformance.googleapis.com/v1/locations/*:fetchMultiDailyMetricsTimeSeries`

## Notes

- Do not use Q&A API (`mybusinessqanda.googleapis.com`) — sunset completed.
- Do not use `reportInsights` in v4 — migrated to Performance API v1.
- Keep direct REST calls with `X-Goog-User-Project` header.
- Keep validation mode as one API request at a time.
