export const PUBLIC_URL_FALLBACK = '#';

function toPublicUrl(value: string | undefined): string {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : PUBLIC_URL_FALLBACK;
}

export const publicAuthUrls = {
  login: toPublicUrl(process.env.NEXT_PUBLIC_AUTH_LOGIN_URL),
  signup: toPublicUrl(process.env.NEXT_PUBLIC_AUTH_SIGNUP_URL),
  forgotPassword: toPublicUrl(process.env.NEXT_PUBLIC_AUTH_FORGOT_PASSWORD_URL),
};

export function isPublicUrlConfigured(url: string): boolean {
  return url !== PUBLIC_URL_FALLBACK;
}
