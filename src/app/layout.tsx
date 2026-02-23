import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig, toAbsoluteUrl } from '@/lib/site';

import { SiteBanner } from '../../apps/www/components/site-banner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: '%s | Fascinante Digital',
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Digital Marketing',
    'Growth Strategy',
    'Lead Generation',
    'Content Marketing',
    'Marketing Automation',
    'Fascinante Digital',
  ],
  authors: [{ name: 'Fascinante Team' }],
  creator: 'Fascinante Team',
  publisher: siteConfig.name,
  robots: { index: true, follow: true },
  manifest: '/favicon/site.webmanifest',
  appleWebApp: {
    title: siteConfig.name,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      {
        url: '/favicon/favicon-64x64.ico',
        sizes: '64x64',
        type: 'image/x-icon',
      },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: toAbsoluteUrl(siteConfig.defaultOgImagePath),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Open Graph image`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [toAbsoluteUrl(siteConfig.defaultOgImagePath)],
    creator: siteConfig.twitterHandle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`h-screen ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SiteBanner />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
