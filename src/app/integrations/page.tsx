import React from 'react';

import FascinanteAllIntegrations from '@/components/sections/all-integrations';
import FascinanteCta from '@/components/sections/cta';
import FascinanteIntegrationsHero from '@/components/sections/integrations-hero';

const page = () => {
  return (
    <>
      <FascinanteIntegrationsHero />
      <FascinanteAllIntegrations />
      <FascinanteCta />
    </>
  );
};

export default page;
