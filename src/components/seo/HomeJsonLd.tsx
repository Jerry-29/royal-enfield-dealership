export default function JsonLdSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Royal Enfield Business Partnerships",
    "url": "https://royalenfield-dealership.com",
    "logo": "https://royalenfield-dealership.com/logo.png",
    "description": "Partner with Royal Enfield to start your motorcycle business journey. Explore dealership opportunities worldwide.",
    "sameAs": [
      "https://facebook.com/royalenfield",
      "https://twitter.com/royalenfield",
      "https://instagram.com/royalenfield",
      "https://youtube.com/royalenfield"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Avenue",
      "addressLocality": "Corporate Park",
      "postalCode": "CP 12345",
      "addressCountry": "US"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "sales",
      "email": "partnerships@royalenfield-global.com",
      "availableLanguage": ["English"]
    }],
    "offers": {
      "@type": "AggregateOffer",
      "offers": [
        {
          "@type": "Offer",
          "name": "Exclusive Dealership",
          "description": "Full-scale Royal Enfield dealership opportunity"
        },
        {
          "@type": "Offer",
          "name": "Regional Distribution",
          "description": "Distribute Royal Enfield motorcycles in your region"
        },
        {
          "@type": "Offer",
          "name": "Studio Store",
          "description": "Compact Royal Enfield retail format"
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}