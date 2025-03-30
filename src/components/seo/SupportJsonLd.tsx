export default function SupportJsonLd() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What support do Royal Enfield dealers receive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Royal Enfield provides comprehensive support including technical training, marketing resources, business development guidance, and dedicated account management."
          }
        },
        {
          "@type": "Question",
          "name": "How can I access dealer training materials?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Authorized dealers can access training materials through our dealer portal, including technical workshops, sales training, and service documentation."
          }
        }
      ],
      "provider": {
        "@type": "Organization",
        "name": "Royal Enfield",
        "url": "https://royalenfield-dealership.com"
      }
    }
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    )
  }