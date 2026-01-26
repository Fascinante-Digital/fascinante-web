'use client';

import LegalArticle from '@/components/sections/legal-article';

import Terms from './terms.mdx';

export default function Page() {
  return (
    <LegalArticle
      overline="Legal"
      title="Terms of Service"
      subtitle="These terms govern your use of Fascinante Digital's services and website."
      updatedAt="Updated Jan 2026"
    >
      <Terms />
    </LegalArticle>
  );
}
