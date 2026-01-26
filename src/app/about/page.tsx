import FascinanteCta from '@/components/sections/cta';
import FascinanteAboutHero from '@/components/sections/about-hero';
import FascinantePartnerLogos from '@/components/sections/partner-logos';
import FascinanteTeam from '@/components/sections/team';
import FascinanteThroughYears from '@/components/sections/trough-years';

export default function AboutPage() {
  return (
    <>
      <FascinanteAboutHero />
      <FascinanteThroughYears />
      <FascinanteTeam />
      <FascinantePartnerLogos />
      <FascinanteCta />
    </>
  );
}
