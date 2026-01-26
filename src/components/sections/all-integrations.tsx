'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

type Integration = {
  name: string;
  description: string;
  icon: string; // e.g. "/images/homepage/integrations/slack.svg"
  href?: string;
};

const DEFAULT_ITEMS: Integration[] = [
  {
    name: 'Mailchimp',
    description:
      'Automate your email marketing campaigns and sync subscriber data across platforms.',
    icon: '/images/homepage/integrations/mailchimp.svg',
    href: '#',
  },
  {
    name: 'Zapier',
    description:
      'Connect apps and automate workflows without writing any code.',
    icon: '/images/homepage/integrations/zapier.svg',
    href: '#',
  },
  {
    name: 'Stripe',
    description:
      'Accept payments securely and sync billing data with your marketing analytics.',
    icon: '/images/homepage/integrations/stripe.svg',
    href: '#',
  },
  {
    name: 'Shopify',
    description:
      'Sync e-commerce data with your marketing campaigns for better targeting.',
    icon: '/images/homepage/integrations/shopify.svg',
    href: '#',
  },
  {
    name: 'Intercom',
    description:
      'Connect customer conversations with your marketing automation workflows.',
    icon: '/images/homepage/integrations/intercom.svg',
    href: '#',
  },
  {
    name: 'Google Analytics',
    description:
      'Track website performance and sync conversion data with your marketing tools.',
    icon: '/images/homepage/integrations/google.svg',
    href: '#',
  },
  {
    name: 'Okta',
    description:
      'Enterprise-grade security for your marketing team accounts and access management.',
    icon: '/images/homepage/integrations/okta.svg',
    href: '#',
  },
  {
    name: 'Slack',
    description:
      'Get real-time marketing notifications and alerts in your team channels.',
    icon: '/images/homepage/integrations/slack.svg',
    href: '#',
  },
];

export default function FascinanteAllIntegrations({
  items = DEFAULT_ITEMS,
  title = 'All Marketing Integrations',
  pageSize = 9,
}: {
  items?: Integration[];
  title?: string;
  pageSize?: number;
}) {
  const [visible, setVisible] = useState(pageSize);
  const canLoadMore = visible < items.length;

  return (
    <section
      id="fascinante-all-integrations"
      className="bg-background px-6 lg:px-0"
    >
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-24">
        <h2 className="text-foreground text-center text-h2 font-medium tracking-tight">
          {title}
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-18 lg:grid-cols-3">
          {items.slice(0, visible).map((it) => {
            const CardInner = (
              <article className="bg-card border-border-light shadow-light h-full rounded-[16px] border p-4">
                <div className="bg-accent flex h-[200px] w-full items-center justify-center rounded-[12px]">
                  <Image
                    src={it.icon}
                    alt=""
                    width={80}
                    height={80}
                    className="h-20 w-20 object-contain"
                  />
                </div>

                <h3 className="text-foreground mt-4 text-2xl font-medium">
                  {it.name.replace(/ integration$/i, '')}
                </h3>
                <p className="text-muted-foreground mt-2 text-[18px]">
                  {it.description}
                </p>
              </article>
            );

            return (
              <li key={it.name} className="h-full">
                {it.href ? (
                  <Link
                    href={it.href}
                    className="block h-full transition-transform hover:translate-y-[-2px]"
                    aria-label={it.name}
                  >
                    {CardInner}
                  </Link>
                ) : (
                  CardInner
                )}
              </li>
            );
          })}
        </ul>

        {canLoadMore && (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              onClick={() =>
                setVisible((v) => Math.min(v + pageSize, items.length))
              }
            >
              Load More Integrations
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
