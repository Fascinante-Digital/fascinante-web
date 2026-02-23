import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

type Integration = {
  name: string;
  description: string;
  icon: string; // e.g. /images/homepage/integrations/shopify.svg
  href?: string;
};

const INTEGRATIONS: Integration[] = [
  {
    name: 'Shopify integration',
    description:
      'Scale your e-commerce business with the leading commerce platform',
    icon: '/images/homepage/integrations/shopify.svg',
    href: '#',
  },
  {
    name: 'Slack integration',
    description:
      'Get real-time notifications and updates directly in your team channels',
    icon: '/images/homepage/integrations/slack.svg',
    href: '#',
  },
  {
    name: 'Zapier integration',
    description:
      'Connect apps and automate workflows without writing any code.',
    icon: '/images/homepage/integrations/zapier.svg',
    href: '#',
  },
  {
    name: 'Google integration',
    description:
      'Connect Google Analytics, Ads, and other Google tools seamlessly.',
    icon: '/images/homepage/integrations/google.svg',
    href: '#',
  },
  {
    name: 'Okta integration',
    description: 'Enterprise-grade security and authentication for your team.',
    icon: '/images/homepage/integrations/okta.svg',
    href: '#',
  },
  {
    name: 'Stripe integration',
    description:
      "Accept payments securely with the world's leading payment platform.",
    icon: '/images/homepage/integrations/stripe.svg',
    href: '#',
  },
];

function IntegrationCard({ item }: { item: Integration }) {
  return (
    <li className="bg-accent relative rounded-[16px] p-6 pb-8">
      <div className="pointer-events-none absolute -top-8 left-1/2 flex -translate-x-1/2 items-center justify-center">
        <div className="flex items-center justify-center rounded-full">
          <Image
            src={item.icon}
            alt={`${item.name} logo`}
            width={60}
            height={60}
          />
        </div>
      </div>

      <div className="pt-6">
        <h3 className="text-foreground text-h4 leading-tight font-medium">
          {item.name}
        </h3>
        <p className="text-muted-foreground mt-2 text-base font-normal">
          {item.description}
        </p>
      </div>
    </li>
  );
}

const FascinanteIntegrations = () => {
  return (
    <section
      id="fascinante-integrations"
      className="bg-background px-6 lg:px-0"
    >
      <div className="container px-0 py-16 text-center sm:py-20 md:px-6 md:py-28">
        <p className="text-tagline mb-4 text-sm leading-tight sm:text-base">
          Integrations
        </p>

        <h2 className="text-foreground mx-auto max-w-3xl text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
          Attract More Leads <br className="hidden sm:block" />
          and Convert Better
        </h2>

        <ul className="mt-10 grid gap-12 sm:grid-cols-2 sm:gap-6 md:mt-20 md:gap-8 lg:grid-cols-3 [@media(min-width:1024px)]:[&>li:nth-child(n+4)]:mt-8">
          {INTEGRATIONS.map((item) => (
            <IntegrationCard key={item.name} item={item} />
          ))}
        </ul>

        <p className="text-muted-foreground text-md text-md mx-auto mt-10 max-w-3xl font-normal md:mt-20">
          Connect your favorite marketing and business tools to streamline
          workflows. Integrate with Google Analytics, HubSpot, Salesforce,
          Mailchimp, and more.
        </p>

        <div className="mt-6 flex justify-center">
          <Button className="w-full sm:w-auto" variant="marketing" asChild>
            <Link href="/integrations">See All Integrations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FascinanteIntegrations;
