export default function OpportunityJsonLd() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Royal Enfield Partnership Opportunities",
      "description": "Explore exclusive Royal Enfield dealership and partnership opportunities worldwide.",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Exclusive Dealership",
            "description": "Become an exclusive Royal Enfield dealer with full rights to sales, service, and merchandise.",
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
            "description": "Acquire distribution rights for Royal Enfield in your region.",
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
            "description": "Launch a compact Royal Enfield retail format in prime urban locations.",
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
        "name": "Royal Enfield",
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