import { Metadata } from 'next'

export const opportunityMetadata: Metadata = {
  title: 'Dealership & Partnership Opportunities | Enfield Empire',
  description: 'Explore exclusive Enfield Empire dealership opportunities. Choose from multiple partnership models including exclusive dealerships, distribution rights, and studio stores.',
  openGraph: {
    title: 'Enfield Empire Partnership Opportunities',
    description: 'Join the Enfield Empire family. Explore dealership and partnership opportunities worldwide.',
    images: [
      {
        url: '/images/og/opportunities.jpg',
        width: 1200,
        height: 630,
        alt: 'Enfield Empire Dealership Opportunities'
      }
    ]
  },
  alternates: {
    canonical: 'https://royalenfield-dealership.com/opportunity'
  }
}