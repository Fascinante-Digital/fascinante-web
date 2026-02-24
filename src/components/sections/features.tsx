import Image from 'next/image';

import AnimationCheckout from '../ui/animation-checkout';
import AnimationInvoicing from '../ui/animation-invoicing';
import AnimationPaymentLink from '../ui/animation-payment-link';
import AnimationRecurringBilling from '../ui/animation-recurring-bill';

type Feature = {
  title: string;
  description: string;
  image: string;
  href?: string;
};

const FEATURES: Feature[] = [
  {
    title: 'Review Requests',
    description:
      'Send review requests after each visit by SMS or email automatically.',
    image: '/images/homepage/features/animation1.svg',
  },
  {
    title: 'AI Replies',
    description:
      'Draft on-brand review replies with AI, then approve and publish in seconds.',
    image: '/images/homepage/features/recurring-billing.webp',
  },
  {
    title: 'Client Reporting',
    description:
      'Share monthly client reports showing review growth, rating trends, and completed actions.',
    image: '/images/homepage/features/invoicing.webp',
  },
  {
    title: 'Agency Control',
    description:
      'Manage multiple client locations from one dashboard and scale delivery without adding account managers.',
    image: '/images/homepage/features/payment-link.webp',
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const isCheckout = feature.title === 'Review Requests';
  const isRecurring = feature.title === 'AI Replies';
  const isInvoicing = feature.title === 'Client Reporting';
  const isPayment = feature.title === 'Agency Control';

  return (
    <div className="bg-card border-border-light relative flex flex-col rounded-[16px] border p-6 text-left shadow-[0_2px_8px_-1px_rgba(13,13,18,0.04)]">
      <h3 className="text-foreground text-lg font-medium sm:text-xl">
        {feature.title}
      </h3>
      <p className="text-muted-foreground mt-2 text-sm sm:text-base">
        {feature.description}
      </p>

      <div className="relative mt-6 w-full overflow-hidden rounded-[12px]">
        <div className="bg-accent relative h-[220px] w-full sm:h-[260px] md:h-[300px]">
          {isRecurring ? (
            <AnimationRecurringBilling className="absolute inset-0" />
          ) : isCheckout ? (
            <AnimationCheckout className="absolute inset-0" />
          ) : isInvoicing ? (
            <AnimationInvoicing className="absolute inset-0" />
          ) : isPayment ? (
            <AnimationPaymentLink className="absolute inset-0" />
          ) : (
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const FascinanteFeatures = () => {
  const [f1, f2, f3, f4] = FEATURES;

  return (
    <section id="fascinante-features" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-28">
        <p className="text-tagline mb-4 text-center text-sm sm:text-base">
          Features
        </p>

        <h2 className="text-foreground mx-auto max-w-3xl text-center text-3xl leading-tight font-semibold tracking-tighter text-balance sm:text-4xl md:text-5xl">
          Everything You Need to <br className="hidden sm:block" />
          Scale Reputation Revenue
        </h2>

        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-base sm:text-lg">
          Launch a white-label review service agencies can sell fast. Automate
          requests, replies, and reporting while protecting margins across every
          client account.
        </p>

        <div className="mt-12 flex flex-col gap-6 md:mt-14 md:gap-8 lg:flex-row">
          <div className="lg:flex-1">
            <FeatureCard feature={f1} />
          </div>
          <div className="lg:w-[500px]">
            <FeatureCard feature={f2} />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6 md:mt-8 md:gap-8 lg:flex-row">
          <div className="lg:w-[500px]">
            <FeatureCard feature={f3} />
          </div>
          <div className="lg:flex-1">
            <FeatureCard feature={f4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FascinanteFeatures;
