'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '"Working with Fascinante Digital transformed our online presence. Lead generation increased by 40% in just three months."',
    name: 'Charolette Hanlin',
    role: 'Co-Founder, Heroes Digital',
    avatar: '/images/homepage/testimonials/1.webp',
  },
  {
    quote:
      '"Their data-driven approach to marketing helped us reach the right audience at the right time."',
    name: 'Novák Balázs',
    role: 'Co-Founder, WooCommerce',
    avatar: '/images/homepage/testimonials/2.webp',
  },
  {
    quote:
      '"The team at Fascinante really understands digital marketing. Our conversion rates have never been higher."',
    name: 'Orosz Boldizsár',
    role: 'Founder, Okta',
    avatar: '/images/homepage/testimonials/3.webp',
  },
  {
    quote:
      '"Their strategic approach to SEO and content marketing drove significant organic growth for our business."',
    name: 'Floyd Miles',
    role: 'Co-Founder, Slack',
    avatar: '/images/homepage/testimonials/4.webp',
  },
  {
    quote:
      '"Professional, data-driven, and results-oriented. Exactly what we needed to scale our marketing."',
    name: 'Darrell Steward',
    role: 'Founder',
    avatar: '/images/homepage/testimonials/5.webp',
  },
  {
    quote:
      '"The ROI on our marketing campaigns improved dramatically after working with Fascinante Digital."',
    name: 'Devon Lane',
    role: 'Marketing, Google',
    avatar: '/images/homepage/testimonials/6.webp',
  },
  {
    quote:
      '"We consolidated our marketing tools into one platform—reporting and analytics are finally clear."',
    name: 'Jenny Wilson',
    role: 'CFO, Mailchimp',
    avatar: '/images/homepage/testimonials/1.webp',
  },
  {
    quote:
      '"The marketing automation alone paid for the investment in under a month."',
    name: 'Jacob Jones',
    role: 'VP Ops, Notion',
    avatar: '/images/homepage/testimonials/2.webp',
  },
  {
    quote:
      '"Their landing page optimization improved conversion and cut our acquisition costs in half."',
    name: 'Eleanor Pena',
    role: 'Head of Product, Square',
    avatar: '/images/homepage/testimonials/3.webp',
  },
  {
    quote:
      '"Our marketing team finally enjoys campaign reporting. Analytics are effortless now."',
    name: 'Courtney Henry',
    role: 'Marketing Lead, Spotify',
    avatar: '/images/homepage/testimonials/4.webp',
  },
  {
    quote:
      '"The audience insights gave us visibility we didn\'t know we were missing."',
    name: 'Leslie Alexander',
    role: 'Director, Airtable',
    avatar: '/images/homepage/testimonials/5.webp',
  },
  {
    quote:
      '"From content marketing to paid ads—everything lives in one place now."',
    name: 'Guy Hawkins',
    role: 'Founder, Raycast',
    avatar: '/images/homepage/testimonials/6.webp',
  },
];

function Card({ t }: { t: Testimonial }) {
  return (
    <li className="bg-card flex flex-col justify-between rounded-[16px] p-6">
      <p className="text-foreground text-base leading-relaxed font-normal md:text-base">
        {t.quote}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <Image
          src={t.avatar}
          alt={t.name}
          width={36}
          height={36}
          className="rounded-full"
        />
        <div>
          <div className="text-foreground mb-0.5 text-base leading-tight font-medium">
            {t.name}
          </div>
          <div className="text-muted-foreground text-sm font-normal">
            {t.role}
          </div>
        </div>
      </div>
    </li>
  );
}

export default function FascinanteTestimonials() {
  const [expanded, setExpanded] = useState(false);

  const VISIBLE = expanded ? TESTIMONIALS.length : 6;

  return (
    <section id="fascinante-testimonials" className="bg-accent px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-28">
        <p className="text-tagline mb-4 text-center text-sm leading-tight font-normal sm:text-base">
          Testimonials
        </p>

        <h2 className="text-foreground mx-auto max-w-4xl text-center text-3xl leading-tight font-semibold tracking-tighter text-balance sm:text-4xl md:text-5xl">
          See What Our <br className="hidden sm:block" />
          Clients Say About Us
        </h2>

        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-base font-normal sm:text-lg">
          Here&apos;s what some of our clients say about our marketing services
          and results.
        </p>

        <div className="relative mt-10 md:mt-14">
          {!expanded && (
            <div className="from-accent to-accent/0 pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t" />
          )}

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, VISIBLE).map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </ul>
        </div>

        <div
          className={`relative z-20 flex justify-center transition-all duration-300 ${
            expanded ? 'mt-8' : '-mt-6'
          }`}
        >
          <Button variant="marketing" onClick={() => setExpanded((s) => !s)}>
            {expanded ? 'Show Less' : 'See All Customer Stories'}
          </Button>
        </div>
      </div>
    </section>
  );
}
