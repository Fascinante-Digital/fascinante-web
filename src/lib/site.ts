const DEFAULT_SITE_URL = 'https://fascinantedigital.com';

function normalizeSiteUrl(value: string | undefined): string {
  const trimmed = value?.trim();
  if (!trimmed) {
    return DEFAULT_SITE_URL;
  }

  return trimmed.endsWith('/') ? trimmed.slice(0, -1) : trimmed;
}

export const siteConfig = {
  name: 'Fascinante Digital',
  description:
    'Fascinante Digital helps growth-minded teams scale marketing, content, and customer engagement with modern digital strategies.',
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  defaultOgImagePath: '/og-image.jpg',
  twitterHandle: '@fascinante',
} as const;

export function toAbsoluteUrl(pathname: string): string {
  return new URL(pathname, `${siteConfig.url}/`).toString();
}
