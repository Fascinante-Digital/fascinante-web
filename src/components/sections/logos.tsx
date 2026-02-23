import Image from 'next/image';

const ITEMS = [
  { name: 'Mercury', src: '/images/logos/adobe.svg' },
  { name: 'Watershed', src: '/images/logos/evernote.svg' },
  { name: 'Retool', src: '/images/logos/spotify.svg' },
  { name: 'Descript', src: '/images/logos/airtable.svg' },
  { name: 'Perplexity', src: '/images/logos/asana.svg' },
  { name: 'Monzo', src: '/images/logos/notion.svg' },
  { name: 'Ramp', src: '/images/logos/mailchimp.svg' },
  { name: 'Raycast', src: '/images/logos/medium.svg' },
  { name: 'Arc', src: '/images/logos/square.svg' },
];

const logoContainerClasses =
  'relative h-[24px] w-[96px] md:h-[40px] md:w-[160px]';

const logoImageClasses =
  'object-contain brightness-0 contrast-[90%] hue-rotate-[190deg] invert-[0.43] saturate-[180%] sepia-[0.06]';

const FascinanteLogos = () => {
  return (
    <section
      id="fascinante-logos"
      className="bg-background overflow-hidden px-6 lg:px-0"
    >
      <div className="container px-0 py-10 text-center sm:py-12 md:px-6 md:py-20">
        <p className="text-muted-foreground text-sm sm:text-base">
          Trusted by beloved partner and customer
        </p>

        <div className="mt-12 flex flex-col items-center gap-10 sm:gap-12 md:gap-20">
          {/* Top row */}
          <ul className="flex flex-nowrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {ITEMS.slice(0, 5).map((item) => (
              <li key={item.name} className="flex-shrink-0">
                <div className={logoContainerClasses}>
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className={logoImageClasses}
                    sizes="(max-width: 768px) 96px, 160px"
                  />
                </div>
              </li>
            ))}
          </ul>

          {/* Bottom row (slightly offset) */}
          <ul className="flex -translate-x-4 flex-nowrap items-center justify-center gap-8 sm:-translate-x-6 sm:gap-12 md:gap-16">
            {ITEMS.slice(5).map((item) => (
              <li key={item.name} className="flex-shrink-0">
                <div className={logoContainerClasses}>
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className={logoImageClasses}
                    sizes="(max-width: 768px) 96px, 160px"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FascinanteLogos;
