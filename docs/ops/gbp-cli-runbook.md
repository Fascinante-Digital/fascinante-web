# GBP + Search Console CLI Runbook

Last updated: 2026-02-23

## 0) Set project context

```bash
export GBP_PROJECT_ID=fascinante-digit-1698295291643
gcloud config set project fascinante-digit-1698295291643
```

## 1) Login (without auto-opening browser)

```bash
gcloud auth login --no-launch-browser
gcloud auth application-default login --no-launch-browser --scopes=https://www.googleapis.com/auth/business.manage,https://www.googleapis.com/auth/webmasters.readonly,https://www.googleapis.com/auth/cloud-platform
gcloud auth application-default set-quota-project fascinante-digit-1698295291643
```

## 2) Health checks

```bash
gcloud auth list
gcloud auth print-access-token --quiet
gcloud auth application-default print-access-token --quiet
```

## 3) Confirm required APIs are enabled

```bash
gcloud services list --enabled --project="fascinante-digit-1698295291643" --format="value(config.name)" | rg "mybusiness|businessprofileperformance|searchconsole"
```

If Search Console API is missing, enable it:

```bash
gcloud services enable searchconsole.googleapis.com --project="fascinante-digit-1698295291643"
```

## 4) Validate GBP access (single request)

```bash
ADC_TOKEN=$(gcloud auth application-default print-access-token --quiet)
curl -sS \
  -H "Authorization: Bearer ${ADC_TOKEN}" \
  -H "X-Goog-User-Project: fascinante-digit-1698295291643" \
  "https://mybusinessaccountmanagement.googleapis.com/v1/accounts"
```

Expected: JSON with `accounts` array.

## 5) Validate Search Console access (single request)

```bash
ADC_TOKEN=$(gcloud auth application-default print-access-token --quiet)
curl -sS \
  -H "Authorization: Bearer ${ADC_TOKEN}" \
  -H "X-Goog-User-Project: fascinante-digit-1698295291643" \
  "https://www.googleapis.com/webmasters/v3/sites"
```

Expected: JSON with `siteEntry` array.

## 6) URL Inspection check (single request)

```bash
ADC_TOKEN=$(gcloud auth application-default print-access-token --quiet)
curl -sS \
  -X POST \
  -H "Authorization: Bearer ${ADC_TOKEN}" \
  -H "Content-Type: application/json" \
  -H "X-Goog-User-Project: fascinante-digit-1698295291643" \
  "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect" \
  -d '{"inspectionUrl":"https://fascinantedigital.com/","siteUrl":"sc-domain:fascinantedigital.com","languageCode":"es-419"}'
```

If your Search Console property is URL-prefix instead of domain, use for example:

- `siteUrl`: `https://fascinantedigital.com/`

## 7) Error mapping

- `ACCESS_TOKEN_SCOPE_INSUFFICIENT`:
  - Re-run ADC login with required scopes.
- `SERVICE_DISABLED`:
  - Enable API in selected project.
- `PERMISSION_DENIED` with valid scopes:
  - Verify account has owner/manager permissions in GBP or Search Console property.

## 8) Request pacing

- Validation mode: 1 request at a time.
- If rate-limited, exponential backoff: 1s, 2s, 4s, 8s (with jitter).

## 9) Endpoint guardrail (before every new integration)

Run the endpoint resolver before adding/changing GBP calls:

```bash
./scripts/gbp-endpoint-resolver.sh locations
./scripts/gbp-endpoint-resolver.sh reviews
```

If the resolver returns `BLOCKED`, do not use that API path.

## 10) Preflight validator

Use this to validate project context, auth and required API enablement:

```bash
./scripts/gbp-preflight.sh "$GBP_PROJECT_ID"
```

Optional explicit project:

```bash
./scripts/gbp-preflight.sh fascinante-digit-1698295291643
```
