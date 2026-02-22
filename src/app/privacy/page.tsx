'use client';

import LegalArticle from '@/components/sections/legal-article';

import Privacy from './privacy.mdx';

export default function Page() {
  return (
    <LegalArticle
      overline="Legal"
      title="Privacy Policy"
      subtitle="How Fascinante Digital collects, uses, and protects your information."
      updatedAt="Updated Feb 2026"
    >
      <Privacy />
    </LegalArticle>
  );
}
