import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Users,
  Shield,
  ShoppingBag,
  DollarSign,
  Users2,
  ChevronRight,
  Phone,
  Mail,
  Download,
} from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BecomePartner } from "../become-partner";
import { BUSINESS_EMAIL } from "@/config/constants";

export default function SupportPage2() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 flex justify-center">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <a
                href="tel:+919693894599"
                className="hover:text-primary cursor-pointer"
              >
                +91 9693894599
              </a>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link href="#" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link href="#" aria-label="Youtube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-youtube"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </Link>
            <Link href="#" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
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
            <Link href="/" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link
              href="/#opportunities"
              className="font-medium hover:text-primary"
            >
              Opportunities
            </Link>
            <Link href="/support" className="font-medium text-primary">
              Support
            </Link>
            <Link href="/#about" className="font-medium hover:text-primary">
              About Us
            </Link>
            <Link href="/#contact" className="font-medium hover:text-primary">
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
        <section className="relative h-[50vh] bg-black">
          <Image
            src="/support-us/detail/image1.png"
            alt="Enfield Empire Support"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 flex items-center flex justify-center">
            <div className="container">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl font-bold mb-4">
                  Comprehensive Business Support
                </h1>
                <p className="text-xl mb-8">
                  We provide extensive support to ensure your Enfield Empire
                  business thrives from day one.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Request Support
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Overview */}
        <section className="py-20 flex justify-center">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Support Framework</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                At Enfield Empire, we believe in building long-term
                partnerships. Our comprehensive support system is designed to
                help you establish, grow, and sustain a successful Enfield
                Empire business in your market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Support Card 1 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Business Setup</CardTitle>
                  <CardDescription className="text-base">
                    Comprehensive support for location selection, showroom
                    design, and business setup with detailed operational
                    guidelines.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="#business-setup">
                    <Button variant="link" className="p-0 flex items-center">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Support Card 2 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Staff Training</CardTitle>
                  <CardDescription className="text-base">
                    Extensive training programs for sales, service, and
                    management teams to ensure operational excellence and
                    customer satisfaction.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="#staff-training">
                    <Button variant="link" className="p-0 flex items-center">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Support Card 3 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Marketing Support</CardTitle>
                  <CardDescription className="text-base">
                    Access to global marketing assets, local campaign support,
                    and digital marketing strategies to drive customer
                    acquisition.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="#marketing-support">
                    <Button variant="link" className="p-0 flex items-center">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Support Card 4 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <ShoppingBag className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Supply Chain Management</CardTitle>
                  <CardDescription className="text-base">
                    Efficient inventory management systems, regular supply of
                    motorcycles, parts, and accessories with optimized
                    logistics.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="#supply-chain">
                    <Button variant="link" className="p-0 flex items-center">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Support Card 5 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Financial Guidance</CardTitle>
                  <CardDescription className="text-base">
                    Business planning support, ROI projections, and guidance on
                    securing financing for your Royal Enfield business venture.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="#financial-guidance">
                    <Button variant="link" className="p-0 flex items-center">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Support Card 6 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Users2 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Community Building</CardTitle>
                  <CardDescription className="text-base">
                    Support for building and engaging with the local Enfield
                    Empire rider community through events, rides, and exclusive
                    experiences.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="#community-building">
                    <Button variant="link" className="p-0 flex items-center">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Support Sections */}
        <section
          id="business-setup"
          className="py-20 bg-muted flex justify-center"
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/support-us/detail/business-setup.png"
                  alt="Enfield Empire Showroom Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Business Setup</h2>
                <p className="text-muted-foreground mb-6">
                  Our business setup support is designed to help you establish a
                  successful Enfield Empire business from the ground up. We
                  provide comprehensive guidance on every aspect of setting up
                  your dealership, distribution center, or studio store.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Location Selection</h3>
                      <p className="text-muted-foreground">
                        Expert guidance on selecting the optimal location based
                        on market analysis, target demographics, and
                        accessibility factors.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Showroom Design</h3>
                      <p className="text-muted-foreground">
                        Detailed design guidelines and support for creating an
                        authentic Enfield Empire retail experience that reflects
                        our brand heritage.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Operational Guidelines</h3>
                      <p className="text-muted-foreground">
                        Comprehensive operational manuals covering all aspects
                        of day-to-day business operations, from sales processes
                        to after-sales service.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Technology Integration</h3>
                      <p className="text-muted-foreground">
                        Implementation of Enfield Empire&apos;s dealer
                        management system and digital tools for efficient
                        business operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Download Setup Guide
                  </Button>
                  <Button variant="outline">Request Consultation</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="staff-training" className="py-20 flex justify-center">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Staff Training</h2>
                <p className="text-muted-foreground mb-6">
                  Our comprehensive training programs ensure that your team has
                  the knowledge, skills, and passion to deliver an exceptional
                  Enfield Empire experience to customers. We offer specialized
                  training for different roles within your business.
                </p>

                <Tabs defaultValue="sales" className="mb-8">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="sales">Sales Training</TabsTrigger>
                    <TabsTrigger value="service">Service Training</TabsTrigger>
                    <TabsTrigger value="management">
                      Management Training
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="sales" className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <ChevronRight className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Product Knowledge</h3>
                        <p className="text-muted-foreground">
                          In-depth training on Enfield Empire motorcycle models,
                          features, technologies, and unique selling points.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <ChevronRight className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Sales Techniques</h3>
                        <p className="text-muted-foreground">
                          Customer engagement strategies, needs assessment, and
                          effective demonstration techniques specific to Enfield
                          Empire products.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <ChevronRight className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Accessory & Apparel Sales</h3>
                        <p className="text-muted-foreground">
                          Training on Enfield Empire&apos;s genuine accessories
                          and apparel lines to maximize additional revenue
                          streams.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="service" className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <ChevronRight className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Technical Training</h3>
                        <p className="text-muted-foreground">
                          Hands-on technical training for service technicians on
                          all Enfield Empire motorcycle models.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <ChevronRight className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Diagnostic Procedures</h3>
                        <p className="text-muted-foreground">
                          Training on Enfield Empire&apos;s diagnostic tools and
                          troubleshooting procedures for efficient service
                          operations.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <ChevronRight className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Service Management</h3>
                        <p className="text-muted-foreground">
                          Workshop management, service scheduling, and customer
                          service best practices for service departments.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="management" className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <ChevronRight className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Business Operations</h3>
                        <p className="text-muted-foreground">
                          Training on overall dealership management, KPI
                          tracking, and performance optimization strategies.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <ChevronRight className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Team Leadership</h3>
                        <p className="text-muted-foreground">
                          Leadership development for dealership managers to
                          effectively lead sales and service teams.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <ChevronRight className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Financial Management</h3>
                        <p className="text-muted-foreground">
                          Training on financial aspects of dealership
                          operations, inventory management, and profitability
                          optimization.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Training Calendar
                  </Button>
                  <Button variant="outline">Request Training</Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
                <Image
                  src="/support-us/detail/staff-training.png"
                  alt="Enfield Empire Staff Training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="marketing-support"
          className="py-20 bg-muted flex justify-center"
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/support-us/detail/marketing-support.png"
                  alt="Enfield Empire Marketing"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Marketing Support</h2>
                <p className="text-muted-foreground mb-6">
                  Our marketing support program provides you with the tools,
                  assets, and strategies to effectively promote Enfield Empire
                  in your market and drive customer acquisition for your
                  business.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Brand Assets</h3>
                      <p className="text-muted-foreground">
                        Access to Enfield Empire&apos;s global marketing assets,
                        including high-quality images, videos, and promotional
                        materials.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Local Campaign Support</h3>
                      <p className="text-muted-foreground">
                        Assistance in developing and executing local marketing
                        campaigns tailored to your specific market conditions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Digital Marketing</h3>
                      <p className="text-muted-foreground">
                        Support for digital marketing initiatives, including
                        social media strategies, content creation, and online
                        advertising.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Event Marketing</h3>
                      <p className="text-muted-foreground">
                        Guidelines and support for organizing local events, test
                        rides, and promotional activities to engage customers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Marketing Toolkit
                  </Button>
                  <Button variant="outline">Request Marketing Support</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="supply-chain" className="py-20 flex justify-center">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <ShoppingBag className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  Supply Chain Management
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our supply chain management support ensures that your business
                  has a consistent and efficient supply of motorcycles, parts,
                  and accessories to meet customer demand and optimize your
                  inventory investment.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Inventory Management</h3>
                      <p className="text-muted-foreground">
                        Advanced inventory management systems and tools to
                        optimize stock levels and reduce carrying costs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Supply Chain Optimization</h3>
                      <p className="text-muted-foreground">
                        Logistics support to ensure timely delivery of products
                        with optimized shipping routes and costs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Parts & Accessories</h3>
                      <p className="text-muted-foreground">
                        Regular supply of genuine Enfield Empire parts and
                        accessories to support after-sales service and
                        additional revenue streams.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Demand Forecasting</h3>
                      <p className="text-muted-foreground">
                        Tools and support for accurate demand forecasting to
                        optimize inventory levels based on seasonal trends and
                        market conditions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Supply Chain Guide
                  </Button>
                  <Button variant="outline">Order Management Portal</Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
                <Image
                  src="/support-us/detail/supply-chain.png"
                  alt="Enfield Empire Supply Chain"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="financial-guidance"
          className="py-20 bg-muted flex justify-center"
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/support-us/detail/finance.png"
                  alt="Enfield Empire Financial Planning"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Financial Guidance</h2>
                <p className="text-muted-foreground mb-6">
                  Our financial guidance support helps you plan, establish, and
                  grow a financially sustainable Royal Enfield business with
                  clear ROI projections and financing assistance.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Business Planning</h3>
                      <p className="text-muted-foreground">
                        Support in developing comprehensive business plans with
                        realistic financial projections based on market data.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">ROI Projections</h3>
                      <p className="text-muted-foreground">
                        Detailed return on investment projections for different
                        business models and market scenarios.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Financing Assistance</h3>
                      <p className="text-muted-foreground">
                        Guidance on securing financing options and potential
                        partnerships with financial institutions for business
                        establishment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">
                        Financial Performance Monitoring
                      </h3>
                      <p className="text-muted-foreground">
                        Tools and support for tracking financial performance and
                        identifying opportunities for improvement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Financial Planning Template
                  </Button>
                  <Button variant="outline">
                    Schedule Financial Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="community-building" className="py-20 flex justify-center">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <Users2 className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Community Building</h2>
                <p className="text-muted-foreground mb-6">
                  Our community building support helps you create and nurture a
                  vibrant local Enfield Empire rider community, fostering brand
                  loyalty and creating additional business opportunities.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Rider Events</h3>
                      <p className="text-muted-foreground">
                        Support for organizing and promoting local rides,
                        meetups, and events for Enfield Empire owners and
                        enthusiasts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Rider Clubs</h3>
                      <p className="text-muted-foreground">
                        Guidelines and support for establishing and growing
                        official Enfield Empire rider clubs in your region.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Exclusive Experiences</h3>
                      <p className="text-muted-foreground">
                        Access to Enfield Empire&apos;s global riding programs
                        and exclusive experiences to offer to your customers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Community Engagement</h3>
                      <p className="text-muted-foreground">
                        Strategies and tools for engaging with the local riding
                        community through digital platforms and in-person
                        events.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Community Building Guide
                  </Button>
                  <Button variant="outline">Event Planning Support</Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
                <Image
                  src="/support-us/detail/community.png"
                  alt="Enfield Empire Rider Community"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Process */}
        <section className="py-20 bg-muted flex justify-center">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Support Process</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                We&apos;ve designed a streamlined process to ensure you receive
                the support you need when you need it. Our dedicated partnership
                support team is always ready to assist you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">1</span>
                </div>
                <h3 className="font-bold mb-2">Request Support</h3>
                <p className="text-muted-foreground text-sm">
                  Submit your support request through our dedicated partner
                  portal or contact your regional support manager.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">2</span>
                </div>
                <h3 className="font-bold mb-2">Assessment</h3>
                <p className="text-muted-foreground text-sm">
                  Our support team assesses your request and identifies the most
                  appropriate resources to address your needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">3</span>
                </div>
                <h3 className="font-bold mb-2">Implementation</h3>
                <p className="text-muted-foreground text-sm">
                  We work with you to implement the required support, whether
                  it&apos;s training, marketing assistance, or business
                  guidance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">4</span>
                </div>
                <h3 className="font-bold mb-2">Follow-up</h3>
                <p className="text-muted-foreground text-sm">
                  We conduct regular follow-ups to ensure the support provided
                  has addressed your needs and to identify any additional
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 flex justify-center">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Partner Testimonials</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from our partners about their experience with Enfield
                Empire&apos;s business support programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  &quot;The business support from Enfield Empire has been
                  exceptional. From the initial setup to ongoing marketing and
                  training, they&apos;ve been with us every step of the way.
                  It&apos;s truly a partnership, not just a business
                  relationship.&quot;
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
                  &quot;The financial guidance and supply chain management
                  support from Enfield Empire has been instrumental in our
                  success. Their team helped us optimize our operations and
                  maximize profitability from day one.&quot;
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
                  &quot;The marketing support and community building programs
                  have been game-changers for our business. Royal Enfield&apos;s
                  support team helped us create a thriving local rider community
                  that drives consistent business growth.&quot;
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white flex justify-center">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Access Our Business Support?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Whether you&apos;re an existing partner or considering a Enfield
              Empire business opportunity, our comprehensive support programs
              are designed to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Request Support
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-black border-white hover:bg-black/4"
              >
                Partner Portal Login
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 flex justify-center">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our business support
                programs.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">
                  How soon after becoming a partner can I access the support
                  programs?
                </h3>
                <p className="text-muted-foreground">
                  All support programs are available immediately upon signing
                  your partnership agreement. Your dedicated regional manager
                  will guide you through the available resources during the
                  onboarding process.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">
                  Is there a cost associated with the support programs?
                </h3>
                <p className="text-muted-foreground">
                  Most of our standard support programs are included as part of
                  your partnership agreement at no additional cost. Some
                  specialized training programs or premium marketing services
                  may have associated fees, which will be clearly communicated.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">
                  How often is training provided for staff?
                </h3>
                <p className="text-muted-foreground">
                  Initial comprehensive training is provided during the business
                  setup phase. Refresher training and new product training are
                  scheduled regularly throughout the year. Additional training
                  can be requested as needed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">
                  Can I request customized support for my specific market?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we understand that each market has unique
                  characteristics. Our support programs can be tailored to
                  address specific regional needs and challenges. Discuss your
                  requirements with your regional support manager.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">
                  How do I access the marketing assets and materials?
                </h3>
                <p className="text-muted-foreground">
                  All marketing assets and materials are available through our
                  partner portal. You&apos;ll receive login credentials during
                  the onboarding process, giving you access to our comprehensive
                  digital asset management system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-muted flex justify-center">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Contact Our Support Team
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about our business support programs? Our
                  dedicated team is here to help you explore how we can support
                  your Enfield Empire business.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Support Hotline</h3>
                      <p className="text-muted-foreground">+91 9693894599</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email Support</h3>
                      <a
                        href={`mailto:${BUSINESS_EMAIL}?subject=Enfield Empire Support Request`}
                        className="text-muted-foreground hover:text-primary cursor-pointer"
                      >
                        {BUSINESS_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg mb-4">
                    Regional Support Centers
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold">North America</h4>
                      <p className="text-muted-foreground text-sm">
                        123 Business Avenue
                        <br />
                        Milwaukee, WI 12345
                        <br />
                        +91 9693894599
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold">Europe</h4>
                      <p className="text-muted-foreground text-sm">
                        456 Partner Street
                        <br />
                        London, UK EC1A 1BB
                        <br />
                        +44 (0) 20 1234 5678
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold">Asia Pacific</h4>
                      <p className="text-muted-foreground text-sm">
                        789 Dealer Road
                        <br />
                        Singapore 123456
                        <br />
                        +65 6123 4567
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold">India (Headquarters)</h4>
                      <p className="text-muted-foreground text-sm">
                        Enfield Empire Global HQ
                        <br />
                        Chennai, India 600042
                        <br />
                        +91 44 1234 5678
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Support Request Form</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium"
                      >
                        First Name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium"
                      >
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name
                    </label>
                    <input
                      id="company"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your Business Ltd."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="support-type"
                      className="text-sm font-medium"
                    >
                      Support Type
                    </label>
                    <select
                      id="support-type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select Support Type</option>
                      <option value="business-setup">Business Setup</option>
                      <option value="staff-training">Staff Training</option>
                      <option value="marketing">Marketing Support</option>
                      <option value="supply-chain">
                        Supply Chain Management
                      </option>
                      <option value="financial">Financial Guidance</option>
                      <option value="community">Community Building</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Support Request Details
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Please describe your support needs in detail..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Support Request
                  </Button>
                </form>
              </div>
            </div>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white"
                  aria-label="Youtube"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#opportunities"
                    className="text-gray-400 hover:text-white"
                  >
                    Partnership Opportunities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-gray-400 hover:text-white"
                  >
                    Business Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="text-gray-400 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Support Programs</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#business-setup"
                    className="text-gray-400 hover:text-white"
                  >
                    Business Setup
                  </Link>
                </li>
                <li>
                  <Link
                    href="#staff-training"
                    className="text-gray-400 hover:text-white"
                  >
                    Staff Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="#marketing-support"
                    className="text-gray-400 hover:text-white"
                  >
                    Marketing Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#supply-chain"
                    className="text-gray-400 hover:text-white"
                  >
                    Supply Chain Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="#financial-guidance"
                    className="text-gray-400 hover:text-white"
                  >
                    Financial Guidance
                  </Link>
                </li>
                <li>
                  <Link
                    href="#community-building"
                    className="text-gray-400 hover:text-white"
                  >
                    Community Building
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin mr-2 mt-0.5 text-gray-400"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-gray-400">
                    Main Block , Royan Enfield Tech Center , 296 , Rajiv Gandhi
                    Salai , Elcot Sez, Sholinganahllur, Chennai, Tamil Nadu
                    600119
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone mr-2 text-gray-400"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a
                    href="tel:+919693894599"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    +91 9693894599
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail mr-2 text-gray-400"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a
                    href={`mailto:${BUSINESS_EMAIL}?subject=Enfield Empire Business Inquiry`}
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    {BUSINESS_EMAIL}
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-clock mr-2 text-gray-400"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
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
