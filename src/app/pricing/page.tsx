import React from 'react';

import FascinanteCta from '@/components/sections/cta';
import FascinanteFaq from '@/components/sections/faq';
import FascinanteFeaturesIncluded from '@/components/sections/features-included';
import FascinantePricingHero from '@/components/sections/pricing-hero';

const page = () => {
  return (
    <>
      <FascinantePricingHero />
      <FascinanteFeaturesIncluded />
      <FascinanteFaq />
      <FascinanteCta />
    </>
  );
};

export default page;
