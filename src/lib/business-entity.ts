import { siteConfig, toAbsoluteUrl } from '@/lib/site';

const organizationId = `${siteConfig.url}/#organization`;
const localBusinessId = `${siteConfig.url}/#localbusiness`;

export const businessProfile = {
  name: 'Fascinante Digital',
  legalName: 'Fascinante Digital',
  description:
    'Fascinante Digital helps growth-minded teams scale marketing, content, and customer engagement with modern digital strategies.',
  phoneDisplay: '(800) 886-4981',
  phoneE164: '+18008864981',
  email: 'info@fascinantedigital.com',
  websiteUrl: toAbsoluteUrl('/'),
  contactUrl: toAbsoluteUrl('/contact'),
  logoUrl: toAbsoluteUrl('/favicon/favicon.svg'),
  mapsUrl: 'https://maps.google.com/maps?cid=9354414571056660333',
  reviewUrl:
    'https://search.google.com/local/writereview?placeid=ChIJw_XSxKcywWgRbf-RlX2O0YE',
  address: {
    streetAddress: '2054 Vista Parkway, #400',
    addressLocality: 'West Palm Beach',
    addressRegion: 'Florida',
    postalCode: '33411',
    addressCountry: 'US',
  },
  displayHours: [
    'Monday-Friday: 8:00 AM - 5:00 PM',
    'Saturday: 9:00 AM - 2:00 PM',
    'Sunday: 10:00 AM - 3:00 PM',
  ],
} as const;

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId,
  name: businessProfile.name,
  legalName: businessProfile.legalName,
  url: businessProfile.websiteUrl,
  logo: businessProfile.logoUrl,
  image: businessProfile.logoUrl,
  description: businessProfile.description,
  email: businessProfile.email,
  telephone: businessProfile.phoneE164,
  sameAs: [businessProfile.mapsUrl],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: businessProfile.phoneE164,
      email: businessProfile.email,
      availableLanguage: ['en', 'es'],
      url: businessProfile.contactUrl,
    },
  ],
};

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': localBusinessId,
  name: businessProfile.name,
  url: businessProfile.websiteUrl,
  image: businessProfile.logoUrl,
  description: businessProfile.description,
  telephone: businessProfile.phoneE164,
  email: businessProfile.email,
  hasMap: businessProfile.mapsUrl,
  sameAs: [businessProfile.mapsUrl],
  parentOrganization: {
    '@id': organizationId,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: businessProfile.address.streetAddress,
    addressLocality: businessProfile.address.addressLocality,
    addressRegion: businessProfile.address.addressRegion,
    postalCode: businessProfile.address.postalCode,
    addressCountry: businessProfile.address.addressCountry,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'https://schema.org/Monday',
        'https://schema.org/Tuesday',
        'https://schema.org/Wednesday',
        'https://schema.org/Thursday',
        'https://schema.org/Friday',
      ],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'https://schema.org/Saturday',
      opens: '09:00',
      closes: '14:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'https://schema.org/Sunday',
      opens: '10:00',
      closes: '15:00',
    },
  ],
  mainEntityOfPage: businessProfile.contactUrl,
};
