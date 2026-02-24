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
      '"We launched review automation in one week and retained two clients that were about to churn."',
    name: 'Andrea Molina',
    role: 'Founder, Nexo Local Agency',
    avatar: '/images/homepage/testimonials/1.webp',
  },
  {
    quote:
      '"The white-label reports made our monthly meetings easier. Clients finally see proof of progress."',
    name: 'Victor Salazar',
    role: 'Account Director, Elevate Media',
    avatar: '/images/homepage/testimonials/2.webp',
  },
  {
    quote:
      '"Before this, review follow-up was manual chaos. Now our team runs all locations from one workflow."',
    name: 'Paula Rios',
    role: 'Operations Lead, Radius Growth',
    avatar: '/images/homepage/testimonials/3.webp',
  },
  {
    quote:
      '"We used to sell one-off services. With Fascinante, we now sell a recurring reputation program."',
    name: 'Luis Herrera',
    role: 'Owner, Atlas Performance Lab',
    avatar: '/images/homepage/testimonials/4.webp',
  },
  {
    quote:
      '"The AI draft replies save hours every week while keeping our brand voice consistent across clients."',
    name: 'Maria Contreras',
    role: 'Client Success Manager, Spark Local',
    avatar: '/images/homepage/testimonials/5.webp',
  },
  {
    quote:
      '"Direction requests were strong but conversions were weak. The playbooks fixed that in the first month."',
    name: 'Kevin Paredes',
    role: 'Founder, Momentum Demand',
    avatar: '/images/homepage/testimonials/6.webp',
  },
  {
    quote:
      '"Our team now responds to reviews with SLA discipline. Clients notice the consistency immediately."',
    name: 'Sofia Delgado',
    role: 'Service Lead, Loop Agency',
    avatar: '/images/homepage/testimonials/1.webp',
  },
  {
    quote:
      '"The onboarding was simple enough for our junior team, but robust enough for multi-location accounts."',
    name: 'Hector Nunez',
    role: 'COO, Growth Harbor',
    avatar: '/images/homepage/testimonials/2.webp',
  },
  {
    quote:
      '"We replaced three disconnected tools with one operating layer for review generation and reporting."',
    name: 'Camila Ortega',
    role: 'Director, Frontier Local',
    avatar: '/images/homepage/testimonials/3.webp',
  },
  {
    quote:
      '"The monthly reports are client-ready out of the box. Our team spends less time formatting slides."',
    name: 'Diego Alvarez',
    role: 'Head of Delivery, NorthScale',
    avatar: '/images/homepage/testimonials/4.webp',
  },
  {
    quote:
      '"As an agency, recurring revenue matters. This product gave us a service clients keep every month."',
    name: 'Valentina Ruiz',
    role: 'Founder, Prime Visibility Co.',
    avatar: '/images/homepage/testimonials/5.webp',
  },
  {
    quote:
      '"Our account managers can now focus on strategy because repetitive review tasks are automated."',
    name: 'Martin Vega',
    role: 'Partner, Elevate Growth Studio',
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
          See How Agencies <br className="hidden sm:block" />
          Scale Client Reputation Faster
        </h2>

        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-base font-normal sm:text-lg">
          Agencies use Fascinante to grow review velocity, protect ratings, and
          retain clients.
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
            {expanded ? 'Show Less' : 'See All Agency Stories'}
          </Button>
        </div>
      </div>
    </section>
  );
}
