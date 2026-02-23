'use client';

import Image from 'next/image';

type Stat = {
  value: string;
  label: string;
};

type FascinanteThroughYearsProps = {
  overline?: string;
  title?: string;
  paragraphs?: string[];
  stats?: Stat[];
  imageSrc?: string;
  imageAlt?: string;
};

const DEFAULT_PARAS = [
  `Our journey reflects years of dedication to helping businesses grow through strategic digital marketing. Since our founding, Fascinante Digital has helped countless clients achieve their marketing goals, adapting to the evolving digital landscape while maintaining our commitment to results.`,
  `With a proven track record of delivering measurable outcomes, we continue to refine our strategies based on data and real-world results. Our growth is reflected in the success of our clients and the trust they place in us.`,
];

const DEFAULT_STATS: Stat[] = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Clients Served' },
  { value: '95%', label: 'Client Retention' },
];

export default function FascinanteThroughYears({
  overline = 'Our Journey',
  title = 'Results That Support Our Strategy',
  paragraphs = DEFAULT_PARAS,
  stats = DEFAULT_STATS,
  imageSrc = '/images/about/years.webp',
  imageAlt = 'Fascinante Digital team collaborating',
}: FascinanteThroughYearsProps) {
  return (
    <section id="fascinante-through-years" className="bg-background px-6">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:gap-16">
          <div>
            <p className="text-tagline text-sm sm:text-base">{overline}</p>

            <h2 className="text-foreground mt-4 text-3xl leading-tight font-semibold tracking-tighter sm:text-5xl">
              {title.split('\n').map((line, i) => (
                <span key={i} className={i ? 'block' : undefined}>
                  {line}
                </span>
              ))}
            </h2>

            <div className="text-muted-foreground mt-5 space-y-4 text-base">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((s) => (
                <li key={s.value}>
                  <div className="bg-card border-border-light shadow-light rounded-[12px] border p-5">
                    <div className="text-tagline text-2xl font-medium sm:text-[28px]">
                      {s.value}
                    </div>
                    <div className="text-muted-foreground mt-1 text-sm">
                      {s.label}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-accent overflow-hidden rounded-[16px]">
            <div className="relative overflow-hidden rounded-t-[16px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1400}
                height={980}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
                priority={false}
              />
            </div>

            <div className="hidden md:block md:h-[220px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
