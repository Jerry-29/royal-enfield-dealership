export default function SupportJsonLd() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What support do Enfield Empire dealers receive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enfield Empire provides comprehensive support including technical training, marketing resources, business development guidance, and dedicated account management."
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
        "name": "Enfield Empire",
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