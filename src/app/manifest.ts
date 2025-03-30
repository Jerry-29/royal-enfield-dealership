import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Royal Enfield Business Partnerships',
    short_name: 'RE Business',
    description: 'Explore Royal Enfield dealership opportunities and business partnerships. Join the legacy of the world\'s oldest motorcycle brand in continuous production.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#D4202C', // Royal Enfield Red
    scope: '/',
    id: 'royal-enfield-dealership',
    launch_handler: {
      client_mode: 'auto'
    },
    dir: 'ltr',
    lang: 'en',
    display_override: ['window-controls-overlay'],
    categories: [
      'business',
      'automotive',
      'shopping'
    ],
    icons: [
      {
        src: '/icons/favicon.ico',
        sizes: '16x16',
        type: 'image/x-icon'
      },
      {
        src: '/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    screenshots: [
      {
        src: '/screenshots/desktop-home.jpg',
        sizes: '1920x1080',
        type: 'image/jpeg',
        form_factor: 'wide',
        label: 'Royal Enfield Business Homepage'
      },
      {
        src: '/screenshots/desktop-opportunities.jpg',
        sizes: '1920x1080',
        type: 'image/jpeg',
        form_factor: 'wide',
        label: 'Partnership Opportunities'
      },
      {
        src: '/screenshots/mobile-home.jpg',
        sizes: '1080x1920',
        type: 'image/jpeg',
        form_factor: 'narrow',
        label: 'Mobile Homepage View'
      },
      {
        src: '/screenshots/mobile-support.jpg',
        sizes: '1080x1920',
        type: 'image/jpeg',
        form_factor: 'narrow',
        label: 'Mobile Support Page'
      }
    ],
    shortcuts: [
      {
        name: 'View Opportunities',
        url: '/opportunity',
        description: 'Explore dealership and partnership opportunities',
        icons: [{ src: '/icons/opportunities-192x192.png', sizes: '192x192' }]
      },
      {
        name: 'Dealer Support',
        url: '/support',
        description: 'Access dealer support and resources',
        icons: [{ src: '/icons/support-192x192.png', sizes: '192x192' }]
      },
      {
        name: 'Contact Us',
        url: '/contact',
        description: 'Get in touch with our business team',
        icons: [{ src: '/icons/contact-192x192.png', sizes: '192x192' }]
      }
    ],
    related_applications: [
      {
        platform: 'play',
        url: 'https://play.google.com/store/apps/details?id=com.royalenfield.business',
        id: 'com.royalenfield.business'
      },
      {
        platform: 'itunes',
        url: 'https://apps.apple.com/app/royal-enfield-business/id123456789'
      }
    ],
    prefer_related_applications: false,
    orientation: 'any'
  }
}