#!/usr/bin/env bash
set -euo pipefail

PROJECT_ID="${1:-${GBP_PROJECT_ID:-}}"

if [[ -z "${PROJECT_ID}" ]]; then
  echo "Usage: ./scripts/gbp-preflight.sh <project-id>"
  echo "Or set GBP_PROJECT_ID environment variable."
  exit 1
fi
REQUIRED_APIS=(
  "mybusinessaccountmanagement.googleapis.com"
  "mybusinessbusinessinformation.googleapis.com"
  "businessprofileperformance.googleapis.com"
  "searchconsole.googleapis.com"
)

echo "[1/6] Project context"
echo "Target project: ${PROJECT_ID}"
gcloud config set project "${PROJECT_ID}" >/dev/null

echo "[2/6] Auth status"
gcloud auth list --filter=status:ACTIVE --format="value(account)" | sed 's/^/Active account: /'

echo "[3/6] ADC token"
gcloud auth application-default print-access-token --quiet >/dev/null
echo "ADC token: OK"

echo "[4/6] ADC quota project"
gcloud auth application-default set-quota-project "${PROJECT_ID}" >/dev/null
echo "ADC quota project: ${PROJECT_ID}"

echo "[5/6] Enabled APIs"
enabled="$(gcloud services list --enabled --project="${PROJECT_ID}" --format="value(config.name)")"
for api in "${REQUIRED_APIS[@]}"; do
  if printf '%s\n' "${enabled}" | rg -q "^${api}$"; then
    echo "API OK: ${api}"
  else
    echo "API MISSING: ${api}"
  fi
done

echo "[6/6] Endpoint router smoke-check"
./scripts/gbp-endpoint-resolver.sh accounts
./scripts/gbp-endpoint-resolver.sh locations
./scripts/gbp-endpoint-resolver.sh performance

echo "Done."
