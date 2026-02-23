'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { isPublicUrlConfigured, publicAuthUrls } from '@/lib/public-env';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'Features', href: '/features' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'About Us', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const loginHref = publicAuthUrls.login;
  const loginEnabled = isPublicUrlConfigured(loginHref);

  const loginButton = useMemo(() => {
    if (!loginEnabled) {
      return (
        <Button
          size="sm"
          variant="outline"
          className="hidden sm:block lg:block"
          disabled
        >
          Login
        </Button>
      );
    }

    return (
      <Link href={loginHref} className="hidden sm:block lg:block">
        <Button size="sm" variant="outline">
          Login
        </Button>
      </Link>
    );
  }, [loginEnabled, loginHref]);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  return (
    <header className="bg-background border-border relative z-50 h-20 border-b px-6">
      <div className="container flex h-20 items-center justify-between px-0 lg:grid lg:grid-cols-[auto_1fr_auto]">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/layout/logo.svg"
            alt="Fascinante Digital"
            width={129}
            height={32}
            className="invert-0 dark:invert"
            priority
          />
        </Link>

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {NAV_ITEMS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'text-muted-foreground hover:text-foreground text-sm font-medium transition-colors',
                pathname === link.href && 'text-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          {loginButton}
          <Link href="/pricing" className="hidden sm:block lg:block">
            <Button variant="marketing">Get Started</Button>
          </Link>

          <div className="lg:block">
            <ThemeToggle />
          </div>

          <button
            className="text-muted-foreground relative flex size-8 lg:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle main menu"
          >
            <span className="sr-only">Toggle main menu</span>
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={cn(
                  'absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out',
                  isMenuOpen ? 'rotate-45' : '-translate-y-1.5',
                )}
              />
              <span
                aria-hidden="true"
                className={cn(
                  'absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out',
                  isMenuOpen ? 'opacity-0' : 'opacity-100',
                )}
              />
              <span
                aria-hidden="true"
                className={cn(
                  'absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out',
                  isMenuOpen ? '-rotate-45' : 'translate-y-1.5',
                )}
              />
            </div>
          </button>
        </div>
      </div>

      <div className="lg:hidden">
        <div
          className={cn(
            'border-border bg-background overflow-hidden border-t',
            'relative right-1/2 left-1/2 -mr-[50vw] -ml-[50vw] w-screen',
            'transition-[max-height] duration-300 ease-[cubic-bezier(.22,.61,.36,1)]',
            isMenuOpen
              ? 'pointer-events-auto max-h-[calc(100dvh-80px)]'
              : 'pointer-events-none max-h-0',
          )}
          aria-hidden={!isMenuOpen}
        >
          <div className="max-h-[calc(100dvh-80px)] overflow-auto">
            <div className="container px-2.5">
              <div className="px-5">
                <nav
                  className={cn(
                    'mt-8 mb-6 flex flex-col gap-6',
                    'transition-[transform,opacity] duration-300',
                    isMenuOpen
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-2 opacity-0',
                  )}
                >
                  {NAV_ITEMS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={cn(
                        'text-lg tracking-[-0.36px]',
                        pathname === link.href
                          ? 'text-foreground'
                          : 'text-muted-foreground',
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="mt-2 flex flex-col gap-3">
                    {loginEnabled ? (
                      <Link
                        href={loginHref}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Button className="w-full" size="sm" variant="outline">
                          Login
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        className="w-full"
                        size="sm"
                        variant="outline"
                        disabled
                      >
                        Login
                      </Button>
                    )}

                    <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>
                      <Button className="w-full" variant="marketing">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
