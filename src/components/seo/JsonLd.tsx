export default function JsonLd() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Enfield Empire Dealership",
      "url": "https://royalenfield-dealership.com",
      "logo": "https://royalenfield-dealership.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-555-5555",
        "contactType": "sales",
        "areaServed": "Worldwide",
        "availableLanguage": ["English"]
      },
      "sameAs": [
        "https://facebook.com/royalenfield",
        "https://twitter.com/royalenfield",
        "https://linkedin.com/company/royal-enfield"
      ]
    }
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    )
  }