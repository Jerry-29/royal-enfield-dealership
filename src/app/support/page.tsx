import { Metadata } from 'next'
import { supportMetadata } from '@/config/metadata/pages/support'
import SupportJsonLd from '@/components/seo/SupportJsonLd'
import SupportPage2 from "@/components/support-us";

export const metadata: Metadata = supportMetadata

const page = () => {
  return (
    <>
      <SupportJsonLd />
      <SupportPage2 />
    </>
  );
};

export default page;
