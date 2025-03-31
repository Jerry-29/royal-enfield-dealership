import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://royalenfield-dealership.com'),
  title: {
    default: 'Enfield Empire Dealership',
    template: '%s | Enfield Empire Dealership'
  },
  description: 'Partner with Enfield Empire to start your dealership journey. Exclusive motorcycle dealership opportunities across global locations.',
  keywords: [
    'Enfield Empire',
    'motorcycle dealership',
    'business opportunity',
    'franchise',
    'motorcycle business'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Enfield Empire Dealership',
    images: [{
      url: '/images/og-default.jpg',
      width: 1200,
      height: 630,
      alt: 'Enfield Empire Dealership'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@royalenfield',
    creator: '@royalenfield'
  },
  verification: {
    google: 'your-google-verification-code',
  }
}