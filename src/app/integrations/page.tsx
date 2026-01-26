import React from 'react';

import FascinanteCta from '@/components/sections/cta';
import FascinanteAllIntegrations from '@/components/sections/all-integrations';
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
