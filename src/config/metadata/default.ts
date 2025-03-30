import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://royalenfield-dealership.com'),
  title: {
    default: 'Royal Enfield Dealership',
    template: '%s | Royal Enfield Dealership'
  },
  description: 'Partner with Royal Enfield to start your dealership journey. Exclusive motorcycle dealership opportunities across global locations.',
  keywords: [
    'Royal Enfield',
    'motorcycle dealership',
    'business opportunity',
    'franchise',
    'motorcycle business'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Royal Enfield Dealership',
    images: [{
      url: '/images/og-default.jpg',
      width: 1200,
      height: 630,
      alt: 'Royal Enfield Dealership'
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