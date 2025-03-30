import { Metadata } from 'next'
import { opportunityMetadata } from '@/config/metadata/pages/opportunity'
import OpportunityJsonLd from '@/components/seo/Opportunity'
import OpportunitiesPage from '@/components/opportunity'
import React from 'react'

export const metadata: Metadata = opportunityMetadata

export default function page() {
  return (
    <div>
      <OpportunityJsonLd />
        <OpportunitiesPage/>
    </div>
  )
}
