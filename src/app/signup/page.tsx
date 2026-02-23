import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { isPublicUrlConfigured, publicAuthUrls } from '@/lib/public-env';
import { siteConfig, toAbsoluteUrl } from '@/lib/site';

const description =
  'Continue to the secure sign up portal managed by Fascinante Digital authentication services.';

export const metadata: Metadata = {
  title: 'Sign Up',
  description,
  alternates: {
    canonical: '/signup',
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: 'website',
    url: toAbsoluteUrl('/signup'),
    title: `Sign Up | ${siteConfig.name}`,
    description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
  },
};

export default function SignupPage() {
  const signupHref = publicAuthUrls.signup;
  const loginHref = publicAuthUrls.login;
  const signupConfigured = isPublicUrlConfigured(signupHref);
  const loginConfigured = isPublicUrlConfigured(loginHref);

  return (
    <section id="fascinante-signup" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 md:px-6">
        <div className="bg-features-hero mx-auto max-w-2xl rounded-[16px] px-6 py-12 text-center sm:px-8 sm:py-16 md:py-20">
          <p className="text-tagline text-sm">Account Access</p>
          <h1 className="text-foreground text-h1 mt-3 font-medium tracking-tight">
            Create your account
          </h1>
          <p className="text-muted-foreground mx-auto mt-3 max-w-lg text-sm sm:text-base">
            Account registration is handled by our secure authentication
            provider. Continue to the sign up portal.
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3">
            {signupConfigured ? (
              <Button asChild variant="marketing" className="w-full">
                <Link href={signupHref}>Continue to Sign Up</Link>
              </Button>
            ) : (
              <Button variant="marketing" className="w-full" disabled>
                Sign Up Temporarily Unavailable
              </Button>
            )}

            {loginConfigured ? (
              <Button
                asChild
                variant="outline"
                className="h-11 w-full rounded-[8px]"
              >
                <Link href={loginHref}>Already have an account? Sign In</Link>
              </Button>
            ) : null}
          </div>

          {!signupConfigured ? (
            <p className="text-muted-foreground mt-5 text-xs">
              Configure `NEXT_PUBLIC_AUTH_SIGNUP_URL` in Vercel to enable this
              action.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
