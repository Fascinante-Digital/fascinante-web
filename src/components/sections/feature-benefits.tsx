'use client';

import Image from 'next/image';

type Benefit = {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt?: string;
};

const BENEFITS: Benefit[] = [
  {
    title: 'Generate More Leads',
    description:
      'Attract qualified prospects with targeted campaigns and optimized conversion funnels.',
    iconSrc: '/images/features/bar.svg',
    iconAlt: 'Lead generation icon',
  },
  {
    title: 'Real-Time Analytics',
    description:
      'Track campaign performance in real-time with detailed analytics and insights.',
    iconSrc: '/images/features/bell.svg',
    iconAlt: 'Analytics icon',
  },
  {
    title: 'Easy Campaign Management',
    description:
      'Manage all your marketing campaigns from a single, intuitive dashboard.',
    iconSrc: '/images/features/server.svg',
    iconAlt: 'Campaign management icon',
  },
];

export default function FascinanteFeatureBenefits({
  items = BENEFITS,
}: {
  items?: Benefit[];
}) {
  return (
    <section
      id="fascinante-feature-benefits"
      className="bg-background px-6 lg:px-0"
    >
      <div className="container px-0 py-12 sm:py-16 md:px-6 md:py-20">
        <ul className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3">
          {items.map(({ title, description, iconSrc, iconAlt }) => (
            <li key={title} className="text-start">
              <div className="border-border-light shadow-soft mb-6 flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border bg-white">
                <Image
                  src={iconSrc}
                  alt={iconAlt || ''}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                  priority={false}
                />
              </div>

              <h3 className="text-foreground text-base font-medium sm:text-lg">
                {title}
              </h3>
              <p className="text-muted-foreground mx-auto mt-2 text-sm sm:text-base">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
