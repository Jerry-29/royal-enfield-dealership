export default function OpportunityJsonLd() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Enfield Empire Partnership Opportunities",
      "description": "Explore exclusive Enfield Empire dealership and partnership opportunities worldwide.",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Exclusive Dealership",
            "description": "Become an exclusive Enfield Empire dealer with full rights to sales, service, and merchandise.",
            "category": "Business Opportunity",
            "areaServed": "Worldwide",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "500000",
              "maxPrice": "1000000",
              "priceCurrency": "USD"
            }
          },
          {
            "@type": "Offer",
            "name": "Distribution Partnership",
            "description": "Acquire distribution rights for Enfield Empire in your region.",
            "category": "Business Opportunity",
            "areaServed": "Regional",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "2000000",
              "priceCurrency": "USD"
            }
          },
          {
            "@type": "Offer",
            "name": "Studio Store",
            "description": "Launch a compact Enfield Empire retail format in prime urban locations.",
            "category": "Business Opportunity",
            "areaServed": "Urban Areas",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "200000",
              "maxPrice": "400000",
              "priceCurrency": "USD"
            }
          }
        ]
      },
      "provider": {
        "@type": "Organization",
        "name": "Enfield Empire",
        "url": "https://royalenfield-dealership.com",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-555-123-4567",
          "contactType": "sales"
        }
      }
    }
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    )
}