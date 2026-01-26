import FascinanteCareersHero from '@/components/sections/careers-hero';
import FascinanteCta from '@/components/sections/cta';
import FascinanteJobOpenings from '@/components/sections/job-openings';
import FascinanteMission from '@/components/sections/mission';
import FascinantePerks from '@/components/sections/perks';

export default function AboutPage() {
  return (
    <>
      <FascinanteCareersHero />
      <FascinanteMission />
      <FascinantePerks />
      <FascinanteJobOpenings />
      <FascinanteCta />
    </>
  );
}
