'use client';

type FascinanteMissionProps = {
  overline?: string;
  primary?: string;
  secondary?: string;
  showDivider?: boolean;
};

export default function FascinanteMission({
  overline = 'Our Mission',
  primary = `At Fascinante Digital, we're building the place to pay for today's businesses.`,
  secondary = `Our mission is to build the first premium payment platform for everyone.`,
  showDivider = true,
}: FascinanteMissionProps) {
  return (
    <section id="fascinante-mission" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-12 sm:py-16 md:px-6 md:py-20">
        <p className="text-tagline text-sm sm:text-base">{overline}</p>

        <h2 className="text-foreground text-h2 mt-4 font-semibold tracking-tighter text-balance">
          <span>{primary} </span>
          <span className="text-muted-foreground">{secondary}</span>
        </h2>

        {showDivider && (
          <div className="border-border/60 mt-10 h-px w-full border-t" />
        )}
      </div>
    </section>
  );
}
