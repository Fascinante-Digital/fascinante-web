#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage: ./scripts/gbp-endpoint-resolver.sh <capability>

Capabilities:
  accounts        account/admin access
  locations       location profile data (info/attributes/categories)
  performance     performance metrics
  reviews         reviews
  posts           local posts
  media           media assets
  reportInsights  legacy v4 insights method
  qanda           questions and answers
  calls           business calls
EOF
}

capability="${1:-}"
if [[ -z "${capability}" ]]; then
  usage
  exit 1
fi

case "${capability}" in
  accounts)
    echo "ALLOW  https://mybusinessaccountmanagement.googleapis.com/v1"
    echo "Use for accounts/admins/invitations/transfer."
    ;;
  locations)
    echo "ALLOW  https://mybusinessbusinessinformation.googleapis.com/v1"
    echo "Use for location profile data, attributes and categories."
    ;;
  performance)
    echo "ALLOW  https://businessprofileperformance.googleapis.com/v1"
    echo "Use for DailyMetrics and keyword impressions."
    ;;
  reviews|posts|media)
    echo "ALLOW  https://mybusiness.googleapis.com/v4"
    echo "Use only for v4-only resources (reviews/localPosts/media)."
    ;;
  reportInsights)
    echo "BLOCKED accounts.locations.reportInsights is sunset."
    echo "Use: businessprofileperformance.googleapis.com/v1/locations/*:fetchMultiDailyMetricsTimeSeries"
    exit 2
    ;;
  qanda)
    echo "BLOCKED mybusinessqanda.googleapis.com is sunset (2025-11-03)."
    exit 2
    ;;
  calls)
    echo "BLOCKED businesscalls API is sunset (2023-05-30)."
    exit 2
    ;;
  *)
    echo "Unknown capability: ${capability}" >&2
    usage
    exit 1
    ;;
esac
