import { Metadata } from "next";
import { homeMetadata } from "@/config/metadata/page";
import JsonLdSchema from "@/components/seo/HomeJsonLd";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import DealershipMap from "@/components/dealership-map";
import { ContactUs } from "@/components/contact-us";
import { DownloProfile } from "@/components/profile-download";
import { LearnMore } from "@/components/learn-more";
import { BecomePartner } from "@/components/become-partner";
import { ExploreOpportunity } from "@/components/explore-opprtunity";
import { BUSINESS_EMAIL } from "@/config/constants";

export const metadata: Metadata = homeMetadata;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLdSchema />
      {/* Top Bar */}
      <div className="bg-black text-white py-2 flex justify-center">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>
                <a
                  href="tel:+919693894599"
                  className="hover:text-primary cursor-pointer"
                >
                  +91 9693894599{" "}
                </a>
              </span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <a
                href={`mailto:${BUSINESS_EMAIL}?subject=Enfield Empire Business Partnership Inquiry`}
                className="hover:text-primary cursor-pointer"
              >
                {BUSINESS_EMAIL}
              </a>
            </div>
          </div>
          <div className="flex space-x-3">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Youtube">
              <Youtube className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white sticky top-0 z-10 shadow-sm flex justify-center">
        <div className="container flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">ENFIELD EMPIRE</span>
            <span className="ml-2 text-sm uppercase tracking-widest">
              Business Partnerships
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="#" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link
              href="#opportunities"
              className="font-medium hover:text-primary"
            >
              Opportunities
            </Link>
            <Link href="#services" className="font-medium hover:text-primary">
              Support
            </Link>
            <Link href="#about" className="font-medium hover:text-primary">
              About Us
            </Link>
            <Link href="#contact" className="font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <BecomePartner />
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] bg-black ">
          <Image
            src="/hero-section/image1.png"
            alt="Enfield Empire Motorcycle"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 flex items-center flex justify-center">
            <div className="container">
              <div className="max-w-xl text-white">
                <h1 className="text-5xl font-bold mb-4">
                  Grow Your Business with Enfield Empire
                </h1>
                <p className="text-xl mb-8">
                  Partner with an iconic global brand. Open a Enfield Empire
                  dealership, distribution center, or showroom in your region.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ExploreOpportunity />
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-black border-white hover:bg-white/10"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section
          id="opportunities"
          className="py-20 bg-muted flex justify-center"
        >
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Partnership Opportunities
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join the Enfield Empire family with multiple business
                partnership models designed to suit different markets and
                investment capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Opportunity Card 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/bikes/bike1.png"
                    alt="Enfield Empire Dealership"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Exclusive Dealership
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Become an exclusive Enfield Empire dealer with sales,
                    service, and spare parts operations in your territory.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">High ROI</span>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>

              {/* Opportunity Card 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/bikes/bike2.png"
                    alt="Enfield Empire Distribution"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Regional Distribution
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Distribute Enfield Empire motorcycles, accessories, and
                    parts to a network of dealers in your region.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Exclusive Rights</span>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>

              {/* Opportunity Card 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/bikes/bike3.png"
                    alt="Enfield Empire Showroom"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Studio Store</h3>
                  <p className="text-muted-foreground mb-4">
                    Open a compact Enfield Empire showroom in premium urban
                    locations with lower investment requirements.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Lower Investment</span>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="gap-2">
                View All Opportunities
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="py-20 flex justify-center">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Why Partner With Enfield Empire
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join a global brand with over 120 years of heritage and a
                rapidly growing presence in markets worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/bikes/bike4.png"
                  alt="Enfield Empire Showroom Interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">
                  A Legacy of Excellence
                </h3>
                <p className="text-muted-foreground mb-6">
                  Enfield Empire is the oldest motorcycle brand in continuous
                  production, with a devoted global following and rapidly
                  expanding market presence. Our partners benefit from our
                  iconic status and growing demand.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <span>120+ years of brand heritage and recognition</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <span>Rapidly growing global market share</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <span>Comprehensive business support and training</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <span>
                      Multiple revenue streams (sales, service, accessories)
                    </span>
                  </li>
                </ul>
                <Button>Download Partnership Brochure</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Services */}
        <section id="services" className="py-20 bg-muted flex justify-center">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Comprehensive Business Support
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide extensive support to ensure your Enfield Empire
                business thrives from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Business Setup</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive support for location selection, showroom design,
                  and business setup with detailed operational guidelines.
                </p>
                <LearnMore />
              </div>

              {/* Service Card 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Staff Training</h3>
                <p className="text-muted-foreground mb-4">
                  Extensive training programs for sales, service, and management
                  teams to ensure operational excellence and customer
                  satisfaction.
                </p>
                <LearnMore />
              </div>

              {/* Service Card 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Marketing Support</h3>
                <p className="text-muted-foreground mb-4">
                  Access to global marketing assets, local campaign support, and
                  digital marketing strategies to drive customer acquisition.
                </p>
                <LearnMore />
              </div>

              {/* Service Card 4 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Supply Chain Management
                </h3>
                <p className="text-muted-foreground mb-4">
                  Efficient inventory management systems, regular supply of
                  motorcycles, parts, and accessories with optimized logistics.
                </p>
                <LearnMore />
              </div>

              {/* Service Card 5 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Financial Guidance</h3>
                <p className="text-muted-foreground mb-4">
                  Business planning support, ROI projections, and guidance on
                  securing financing for your Enfield Empire business venture.
                </p>
                <LearnMore />
              </div>

              {/* Service Card 6 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Community Building</h3>
                <p className="text-muted-foreground mb-4">
                  Support for building and engaging with the local Enfield
                  Empire rider community through events, rides, and exclusive
                  experiences.
                </p>
                <LearnMore />
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 flex justify-center">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Partnership Application Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A straightforward process to help you become a Enfield Empire
                business partner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">1</span>
                </div>
                <h3 className="font-bold mb-2">Initial Application</h3>
                <p className="text-muted-foreground text-sm">
                  Submit your application with business details and preferred
                  partnership model.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">2</span>
                </div>
                <h3 className="font-bold mb-2">Evaluation</h3>
                <p className="text-muted-foreground text-sm">
                  Our team evaluates your application, market potential, and
                  business capabilities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">3</span>
                </div>
                <h3 className="font-bold mb-2">Business Planning</h3>
                <p className="text-muted-foreground text-sm">
                  Develop a detailed business plan with our support team for
                  your specific market.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">4</span>
                </div>
                <h3 className="font-bold mb-2">Launch</h3>
                <p className="text-muted-foreground text-sm">
                  Complete setup, training, and officially launch your Royal
                  Enfield business.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg">Start Your Application</Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted flex justify-center">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  About Enfield Empire
                </h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 1901, Enfield Empire is the oldest motorcycle brand
                  in continuous production. Our motorcycles are known for their
                  classic styling, durability, and the unique experience they
                  offer to riders around the world.
                </p>
                <p className="text-muted-foreground mb-4">
                  With a strong global presence and rapidly expanding markets,
                  Enfield Empire offers exceptional business opportunities for
                  partners who share our passion for motorcycling and commitment
                  to excellence.
                </p>
                <p className="text-muted-foreground mb-8">
                  Our business partnership program is designed to support
                  entrepreneurs in establishing successful Enfield Empire
                  businesses while maintaining the brand&apos;s heritage and
                  values.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      60+
                    </div>
                    <div className="text-sm">Countries</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      2000+
                    </div>
                    <div className="text-sm">Global Touchpoints</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      120+
                    </div>
                    <div className="text-sm">Years of Heritage</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      850K+
                    </div>
                    <div className="text-sm">Annual Production</div>
                  </div>
                </div>
                <DownloProfile />
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/bikes/bike5.png"
                  alt="Enfield Empire Heritage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 flex justify-center">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from our successful business partners about their
                experience with Enfield Empire.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">JD</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">John Doe</h4>
                    <p className="text-sm text-muted-foreground">
                      Dealership Owner, USA
                    </p>
                  </div>
                </div>
                <p className="italic text-muted-foreground mb-4">
                  &quot;Opening a Enfield Empire dealership was the best
                  business decision I&apos;ve made. The support from the company
                  has been exceptional, and the growing demand for these
                  motorcycles has exceeded our projections.&quot;
                </p>
                <div className="flex text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">JS</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Jane Smith</h4>
                    <p className="text-sm text-muted-foreground">
                      Distributor, Europe
                    </p>
                  </div>
                </div>
                <p className="italic text-muted-foreground mb-4">
                  &quot;As a regional distributor for Enfield Empire, we&apos;ve
                  seen consistent growth year over year. The brand&apos;s appeal
                  continues to expand, and the business model has proven highly
                  profitable for our network of dealers.&quot;
                </p>
                <div className="flex text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">RJ</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Robert Johnson</h4>
                    <p className="text-sm text-muted-foreground">
                      Studio Store Owner, Asia
                    </p>
                  </div>
                </div>
                <p className="italic text-muted-foreground mb-4">
                  &quot;Starting with a smaller Studio Store format allowed me
                  to enter the Enfield Empire business with a manageable
                  investment. The support from the company has been outstanding,
                  and we&apos;re now expanding to a full dealership.&quot;
                </p>
                <div className="flex text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button variant="outline">View More Success Stories</Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white flex justify-center">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join the Enfield Empire Family?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Take the first step towards a rewarding business partnership with
              one of the world&apos;s most iconic motorcycle brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Apply for Partnership
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-black border-white hover:bg-black/10"
              >
                Download Information Pack
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactUs />

        {/* Map Section */}
        <section className="h-[500px] relative flex justify-center">
          <div className="absolute inset-0 bg-muted flex items-center justify-center">
            <DealershipMap />
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-12 flex justify-center">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Enfield Empire Business
              </h3>
              <p className="text-gray-400 mb-4">
                Your gateway to partnership opportunities with the world&apos;s
                oldest motorcycle brand in continuous production.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white"
                  aria-label="Youtube"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#opportunities"
                    className="text-gray-400 hover:text-white"
                  >
                    Partnership Opportunities
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-400 hover:text-white"
                  >
                    Business Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Partnership Types</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Exclusive Dealership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Regional Distribution
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Studio Store
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Service Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Spare Parts Distribution
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-gray-400" />
                  <span className="text-gray-400">
                    Main Block , Royan Enfield Tech Center , 296 , Rajiv Gandhi
                    Salai , Elcot Sez, Sholinganahllur, Chennai, Tamil Nadu
                    600119
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-gray-400" />
                  <span className="text-gray-400">+91 9693894599</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-gray-400" />
                  <span className="text-gray-400">
                    business@enfieldempire.com
                  </span>
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-gray-400" />
                  <span className="text-gray-400">
                    Mon-Fri: 9AM-6PM, Sat: 10AM-4PM
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Enfield Empire Business
              Partnerships. All rights reserved.
            </p>
            <p className="mt-2">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>{" "}
              |
              <Link href="#" className="hover:text-white ml-2">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
