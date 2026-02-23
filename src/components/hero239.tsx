import { ArrowRight } from 'lucide-react';
import React from 'react';

import { ThreeDMarquee } from '@/components/aceternity/3d-marquee';
import { cn } from '@/lib/utils';

interface Hero239Props {
  className?: string;
}

const blockDefaultButtonClass =
  'focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*=size-])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none bg-primary text-primary-foreground hover:bg-primary/80 h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2';

const blockGhostButtonClass =
  'focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*=size-])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2';

const Hero239 = ({ className }: Hero239Props) => {
  const images = [
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img3.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img8.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img9.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img10.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img12.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img13.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img14.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img15.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img16.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img17.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img18.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img19.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img20.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img21.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img22.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img23.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img24.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img25.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img26.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img27.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img3.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img8.jpeg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img9.jpeg',
  ];

  return (
    <section className={cn('relative py-32', className)}>
      <div className="container flex flex-col items-center justify-center gap-5 text-center">
        <p className="bg-muted w-fit rounded-full px-4 py-1 text-sm uppercase">
          shadcnblocks
        </p>
        <h1 className="mt-3 max-w-xl text-5xl font-semibold tracking-tighter lg:max-w-3xl lg:text-6xl">
          Unlock the Premium Blocks Just one time payment
        </h1>
        <p className="text-muted-foreground max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
        <div className="flex items-center gap-4">
          <button
            type="button"
            data-slot="button"
            data-variant="default"
            data-size="default"
            className={blockDefaultButtonClass}
          >
            Get Started
          </button>
          <button
            type="button"
            data-slot="button"
            data-variant="ghost"
            data-size="default"
            className={blockGhostButtonClass}
          >
            Explore Benefits <ArrowRight />
          </button>
        </div>

        <div className="mt-15 flex h-full w-full items-center justify-center">
          <ThreeDMarquee className="rounded-none" images={images} />
        </div>
      </div>
    </section>
  );
};

export { Hero239 };
