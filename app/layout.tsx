import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
import { siteContent } from '@/data/content';
import Script from 'next/script';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: `${siteContent.site.name} - ${siteContent.site.tagline}`,
  description: siteContent.site.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: siteContent.site.name,
    title: `${siteContent.site.name} - ${siteContent.site.tagline}`,
    description: siteContent.site.description,
    images: [
      {
        url: siteContent.home.hero.backgroundImage,
        width: 1200,
        height: 630,
        alt: `${siteContent.site.name} Hero Image`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteContent.site.name} - ${siteContent.site.tagline}`,
    description: siteContent.site.description,
    images: [siteContent.home.hero.backgroundImage],
  },
  icons: {
    icon: '/logo-1.png',
  },
  themeColor: '#2563eb',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const MarketingModal = dynamic(() => import('@/components/MarketingModal'), { ssr: false });
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Script id="ld-json-org" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: siteContent.site.name,
            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
            logo: siteContent.site.logo,
            description: siteContent.site.description,
            sameAs: [],
            address: {
              '@type': 'PostalAddress',
              streetAddress: siteContent.location.address.street,
              addressLocality: siteContent.location.address.city,
              addressRegion: siteContent.location.address.state,
              postalCode: siteContent.location.address.zip,
            },
            contactPoint: {
              '@type': 'ContactPoint',
              email: siteContent.contact.info.email,
              telephone: siteContent.contact.info.phone,
              contactType: 'customer service',
            },
          })}
        </Script>
        <Navbar />
        <main className="min-h-screen">
          <MarketingModal />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}