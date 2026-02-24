import Link from 'next/link';

import { Button } from '@/components/ui/button';

const FascinanteCta = () => {
  return (
    <section
      id="fascinante-cta"
      className="bg-tagline relative overflow-hidden px-6"
    >
      {/* dotted pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-[size:16px_16px] [color:oklch(1_0_89.88)] opacity-30" />

      {/* centered rectangle behind text */}
      <div className="bg-tagline pointer-events-none absolute top-0 left-1/2 h-full w-[500px] -translate-x-1/2" />

      <div className="relative container px-0 py-16 text-center sm:py-20 md:px-6 md:py-28">
        <h2 className="text-primary-foreground text-h2 mx-auto max-w-5xl font-semibold tracking-tighter text-balance">
          Scale Reputation
          <br className="hidden sm:block" /> for Every Client
        </h2>

        <p className="text-primary-foreground/80 mx-auto mt-4 max-w-2xl text-base font-normal sm:text-lg">
          Launch your white-label review engine and prove progress in 30 days.
        </p>

        <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
          {/* Primary button */}
          <Button
            asChild
            variant="marketing"
            className="!bg-primary-foreground !text-tagline hover:!bg-primary-foreground/90 w-full sm:w-auto"
          >
            <Link href="/contact">Book Demo</Link>
          </Button>

          {/* Transparent button */}
          <Button
            asChild
            variant="marketingGhost"
            className="!border-primary-foreground/30 !text-primary-foreground hover:!bg-primary-foreground/10 w-full border !bg-transparent sm:w-auto"
          >
            <Link href="/contact">Talk Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FascinanteCta;
