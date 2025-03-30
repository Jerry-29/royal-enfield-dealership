import { PageMetadata } from '@/util/types'

export const homeMetadata: PageMetadata = {
  title: 'Royal Enfield Dealership & Business Partnership Opportunities',
  description: 'Start your business journey with Royal Enfield. Explore exclusive dealership, distribution, and studio store opportunities worldwide. Join the legacy of the world\'s oldest motorcycle brand in continuous production.',
  keywords: [
    'Royal Enfield dealership',
    'motorcycle franchise',
    'business partnership',
    'Royal Enfield distribution',
    'motorcycle dealership opportunity',
    'Royal Enfield studio store'
  ],
  alternates: {
    canonical: 'https://royalenfield-dealership.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://royalenfield-dealership.com',
    siteName: 'Royal Enfield Business Partnerships',
    title: 'Royal Enfield Dealership Opportunities',
    description: 'Partner with Royal Enfield to start your motorcycle dealership journey. Exclusive business opportunities available worldwide.',
    images: [
      {
        url: '/og/home-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Royal Enfield Dealership Opportunities'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@royalenfield',
    creator: '@royalenfield',
    title: 'Royal Enfield Dealership Opportunities',
    description: 'Partner with Royal Enfield to start your motorcycle dealership journey.',
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