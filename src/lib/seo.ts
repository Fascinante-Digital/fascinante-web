import { toAbsoluteUrl } from '@/lib/site';

export function buildAlternates(pathname: string) {
  const absoluteUrl = toAbsoluteUrl(pathname);

  return {
    canonical: pathname,
    languages: {
      'en-US': absoluteUrl,
      'x-default': absoluteUrl,
    },
  };
}
