import { Metadata } from 'next'

export const opportunityMetadata: Metadata = {
  title: 'Dealership & Partnership Opportunities | Royal Enfield',
  description: 'Explore exclusive Royal Enfield dealership opportunities. Choose from multiple partnership models including exclusive dealerships, distribution rights, and studio stores.',
  openGraph: {
    title: 'Royal Enfield Partnership Opportunities',
    description: 'Join the Royal Enfield family. Explore dealership and partnership opportunities worldwide.',
    images: [
      {
        url: '/images/og/opportunities.jpg',
        width: 1200,
        height: 630,
        alt: 'Royal Enfield Dealership Opportunities'
      }
    ]
  },
  alternates: {
    canonical: 'https://royalenfield-dealership.com/opportunity'
  }
}