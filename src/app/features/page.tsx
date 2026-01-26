import React from 'react';

import FascinanteCta from '@/components/sections/cta';
import FascinanteFeatureBenefits from '@/components/sections/feature-benefits';
import FascinanteFeaturePricing from '@/components/sections/feature-pricing';
import FascinanteFeaturesHero from '@/components/sections/features-section';
import FascinanteIntegrations from '@/components/sections/integrations';
import FascinanteFeaturesTabs from '@/components/sections/tabs';

const page = () => {
  return (
    <>
      <FascinanteFeaturesHero />
      <FascinanteFeatureBenefits />
      <FascinanteFeaturesTabs />
      <FascinanteFeaturePricing />
      <FascinanteIntegrations />
      <FascinanteCta />
    </>
  );
};

export default page;
