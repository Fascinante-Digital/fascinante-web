import Image from 'next/image';
import type { CSSProperties } from 'react';

import { cn } from '@/lib/utils';

type ThreeDMarqueeProps = {
  images: string[];
  className?: string;
};

type RowProps = {
  images: string[];
  reverse?: boolean;
  duration: string;
};

function MarqueeRow({ images, reverse = false, duration }: RowProps) {
  const repeated = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div
        className={cn(
          'hero239-marquee-track flex min-w-max gap-4 md:gap-5',
          reverse && 'hero239-marquee-reverse',
        )}
        style={{ '--hero239-duration': duration } as CSSProperties}
      >
        {repeated.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative h-28 w-44 overflow-hidden rounded-2xl border border-white/35 bg-white/10 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.55)] backdrop-blur-sm sm:h-32 sm:w-52 lg:h-36 lg:w-56"
          >
            <Image
              src={src}
              alt="Hero visual"
              fill
              sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 224px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ThreeDMarquee({ images, className }: ThreeDMarqueeProps) {
  const rowSize = Math.max(1, Math.ceil(images.length / 3));
  const rowA = images.slice(0, rowSize);
  const rowB = images.slice(rowSize, rowSize * 2);
  const rowC = images.slice(rowSize * 2);

  return (
    <div
      className={cn(
        'relative w-full [perspective:1200px] [transform-style:preserve-3d]',
        className,
      )}
    >
      <div className="hero239-mask [transform:rotateX(18deg)_rotateY(-8deg)] space-y-4 sm:space-y-5">
        <MarqueeRow images={rowA} duration="36s" />
        <MarqueeRow
          images={rowB.length > 0 ? rowB : rowA}
          reverse
          duration="42s"
        />
        <MarqueeRow images={rowC.length > 0 ? rowC : rowA} duration="48s" />
      </div>
    </div>
  );
}
