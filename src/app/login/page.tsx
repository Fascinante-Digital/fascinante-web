import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { isPublicUrlConfigured, publicAuthUrls } from '@/lib/public-env';
import { siteConfig, toAbsoluteUrl } from '@/lib/site';

const description =
  'Continue to the secure sign in portal managed by Fascinante Digital authentication services.';

export const metadata: Metadata = {
  title: 'Login',
  description,
  alternates: {
    canonical: '/login',
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: 'website',
    url: toAbsoluteUrl('/login'),
    title: `Login | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
};

export default function LoginPage() {
  const loginHref = publicAuthUrls.login;
  const signupHref = publicAuthUrls.signup;
  const forgotPasswordHref = publicAuthUrls.forgotPassword;
  const loginConfigured = isPublicUrlConfigured(loginHref);
  const signupConfigured = isPublicUrlConfigured(signupHref);
  const forgotPasswordConfigured = isPublicUrlConfigured(forgotPasswordHref);

  return (
    <section id="fascinante-login" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 md:px-6">
        <div className="bg-features-hero mx-auto max-w-2xl rounded-[16px] px-6 py-12 text-center sm:px-8 sm:py-16 md:py-20">
          <p className="text-tagline text-sm">Account Access</p>
          <h1 className="text-foreground text-h1 mt-3 font-semibold tracking-tighter">
            Sign in to continue
          </h1>
          <p className="text-muted-foreground mx-auto mt-3 max-w-lg text-sm sm:text-base">
            Authentication is managed securely by our backend and Auth0
            provider. Continue to the sign in portal.
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3">
            {loginConfigured ? (
              <Button asChild variant="marketing" className="w-full">
                <Link href={loginHref}>Continue to Sign In</Link>
              </Button>
            ) : (
              <Button variant="marketing" className="w-full" disabled>
                Sign In Temporarily Unavailable
              </Button>
            )}

            {signupConfigured ? (
              <Button
                asChild
                variant="outline"
                className="h-11 w-full rounded-[8px]"
              >
                <Link href={signupHref}>Create an Account</Link>
              </Button>
            ) : null}

            {forgotPasswordConfigured ? (
              <Link
                href={forgotPasswordHref}
                className="text-tagline mt-2 text-sm hover:underline"
              >
                Forgot password?
              </Link>
            ) : null}
          </div>

          {!loginConfigured ? (
            <p className="text-muted-foreground mt-5 text-xs">
              Configure `NEXT_PUBLIC_AUTH_LOGIN_URL` in Vercel to enable this
              action.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
