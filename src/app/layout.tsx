import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import ClientBody from '../app/real-estate/ClientBody';
import BootstrapClient from '../app/BootstrapClient';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Dennis Rental Naija',
  description:
    'Rent cars, apartments, and properties in Lagos, Nigeria. Dennis Rental Naija provides reliable and affordable rental services.',
  keywords:
    'car rental Lagos, shortlet Lagos, rent car Nigeria, luxury car hire, Lagos real estate, Dennis Rental Naija',
  authors: [{ name: 'Olusegun Dennis' }],
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://dennis-rental-naija.netlify.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="s4A6w-GoowIVExLiyPQ7mxq3L4FKM9l3SMNQKkRj3rQ"
        />
        <link
          rel="canonical"
          href="https://dennis-rental-naija.netlify.app"
        />
      </head>
      <body suppressHydrationWarning className={inter.className}>
        {/* Ensure client-only JS (tooltips, modals) works */}
        <BootstrapClient />

        <ClientBody>{children}</ClientBody>

        {/* LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Dennis Rental Naija",
              image:
                "https://dennis-rental-naija.netlify.app/assets/drnlogo.png",
              "@id": "https://dennis-rental-naija.netlify.app",
              url: "https://dennis-rental-naija.netlify.app",
              telephone: "+2348037331747",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lagos, Nigeria",
                addressLocality: "Lagos",
                addressRegion: "LA",
                postalCode: "100001",
                addressCountry: "NG",
              },
              description:
                "Dennis Rental Naija provides car rentals, apartment shortlets, and real estate services in Lagos, Nigeria.",
              sameAs: [
                "https://www.instagram.com/dennis_rental_naija",
                "https://www.facebook.com/dennis_rental_naija",
              ],
            }),
          }}
        />

        {/* FAQ structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Where can I rent a car in Lagos?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dennis Rental Naija offers affordable and reliable car rentals in Lagos with or without a driver.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I book a shortlet apartment in Lagos?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Simply browse our listings on the site and contact us via WhatsApp or call to make your reservation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer luxury car rentals?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! We have a fleet of luxury SUVs and sedans available for both personal and corporate use.",
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}