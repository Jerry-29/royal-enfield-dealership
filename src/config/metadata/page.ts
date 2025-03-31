import { PageMetadata } from '@/util/types'

export const homeMetadata: PageMetadata = {
  title: 'Enfield Empire Dealership & Business Partnership Opportunities',
  description: 'Start your business journey with Enfield Empire. Explore exclusive dealership, distribution, and studio store opportunities worldwide. Join the legacy of the world\'s oldest motorcycle brand in continuous production.',
  keywords: [
    'Enfield Empire dealership',
    'motorcycle franchise',
    'business partnership',
    'Enfield Empire distribution',
    'motorcycle dealership opportunity',
    'Enfield Empire studio store'
  ],
  alternates: {
    canonical: 'https://royalenfield-dealership.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://royalenfield-dealership.com',
    siteName: 'Enfield Empire Business Partnerships',
    title: 'Enfield Empire Dealership Opportunities',
    description: 'Partner with Enfield Empire to start your motorcycle dealership journey. Exclusive business opportunities available worldwide.',
    images: [
      {
        url: '/og/home-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Enfield Empire Dealership Opportunities'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@royalenfield',
    creator: '@royalenfield',
    title: 'Enfield Empire Dealership Opportunities',
    description: 'Partner with Enfield Empire to start your motorcycle dealership journey.',
    images: ['/og/home-hero.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
}