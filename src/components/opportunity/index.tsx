import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ChevronRight, ArrowRight, Check, Download, Globe, Store, Wrench, Building } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { BecomePartner } from "../become-partner"
import { BUSINESS_EMAIL } from "@/config/constants";
export default function OpportunitiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 flex justify-center">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91 9693894599</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>{BUSINESS_EMAIL}</span>
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
            <span className="text-2xl font-bold">ROYAL ENFIELD</span>
            <span className="ml-2 text-sm uppercase tracking-widest">
              Business Partnerships
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/opportunities" className="font-medium text-primary">
              Opportunities
            </Link>
            <Link href="/support" className="font-medium hover:text-primary">
              Support
            </Link>
            <Link href="/#about" className="font-medium hover:text-primary">
              About Us
            </Link>
            <Link href="/#contact" className="font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <BecomePartner/>
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-black flex justify-center">
          <Image
            src="/hero-section/image1.png"
            alt="Enfield Empire Partnership Opportunities"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-10">
            <div className="container flex justify-center center">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl font-bold mb-4">
                  Partnership Opportunities
                </h1>
                <p className="text-xl mb-8">
                  Join the Royal Enfield family with multiple business
                  partnership models designed to suit different markets and
                  investment capabilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Explore Models
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white/10"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 flex justify-center">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Find Your Perfect Partnership Model
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Royal Enfield offers a range of partnership models to suit
                different markets, investment capabilities, and business goals.
                Explore our options to find the perfect fit for your
                entrepreneurial journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Model Card 1 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Exclusive Dealership</CardTitle>
                  <CardDescription className="text-base">
                    Become an exclusive Royal Enfield dealer with sales,
                    service, and spare parts operations in your territory.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="#exclusive-dealership">
                    <Button variant="link" className="p-0 flex items-center">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Model Card 2 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Regional Distribution</CardTitle>
                  <CardDescription className="text-base">
                    Distribute Royal Enfield motorcycles, accessories, and parts
                    to a network of dealers in your region.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="#regional-distribution">
                    <Button variant="link" className="p-0 flex items-center">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Model Card 3 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Store className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Studio Store</CardTitle>
                  <CardDescription className="text-base">
                    Open a compact Royal Enfield showroom in premium urban
                    locations with lower investment requirements.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="#studio-store">
                    <Button variant="link" className="p-0 flex items-center">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Model Card 4 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <Wrench className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Service Center</CardTitle>
                  <CardDescription className="text-base">
                    Establish a dedicated Royal Enfield service center with
                    genuine parts and accessories sales.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="#service-center">
                    <Button variant="link" className="p-0 flex items-center">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-muted flex justify-center">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Partnership Models Comparison
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Compare our different partnership models to find the one that
                best suits your business goals, market conditions, and
                investment capacity.
              </p>
            </div>

            <div className="overflow-x-auto">
              <Table className="bg-white rounded-lg shadow-md">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Features</TableHead>
                    <TableHead>Exclusive Dealership</TableHead>
                    <TableHead>Regional Distribution</TableHead>
                    <TableHead>Studio Store</TableHead>
                    <TableHead>Service Center</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Investment Level
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-red-50 text-red-700 border-red-200"
                      >
                        High
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-red-50 text-red-700 border-red-200"
                      >
                        Very High
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-amber-50 text-amber-700 border-amber-200"
                      >
                        Medium
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        Low
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Space Requirement
                    </TableCell>
                    <TableCell>3,000-5,000 sq ft</TableCell>
                    <TableCell>10,000+ sq ft</TableCell>
                    <TableCell>800-1,500 sq ft</TableCell>
                    <TableCell>1,500-2,500 sq ft</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sales Rights</TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-600" />
                    </TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-600" />
                    </TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-600" />
                    </TableCell>
                    <TableCell>Limited Models</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Service Operations
                    </TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-600" />
                    </TableCell>
                    <TableCell>Through Dealer Network</TableCell>
                    <TableCell>Basic Service</TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-600" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Spare Parts Sales
                    </TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-600" />
                    </TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-600" />
                    </TableCell>
                    <TableCell>Limited Inventory</TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-600" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Accessories & Apparel
                    </TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-600" />
                    </TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-600" />
                    </TableCell>
                    <TableCell>
                      <Check className="h-5 w-5 text-green-600" />
                    </TableCell>
                    <TableCell>Limited Range</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Exclusivity Rights
                    </TableCell>
                    <TableCell>Territory-based</TableCell>
                    <TableCell>Regional</TableCell>
                    <TableCell>Limited Area</TableCell>
                    <TableCell>Service Territory</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Typical ROI Timeline
                    </TableCell>
                    <TableCell>24-36 months</TableCell>
                    <TableCell>36-48 months</TableCell>
                    <TableCell>18-24 months</TableCell>
                    <TableCell>12-18 months</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Best For</TableCell>
                    <TableCell>Established automotive businesses</TableCell>
                    <TableCell>
                      Large business groups with distribution experience
                    </TableCell>
                    <TableCell>
                      Urban entrepreneurs with retail experience
                    </TableCell>
                    <TableCell>Automotive service professionals</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Not sure which model is right for you? Our partnership team can
                help you evaluate your options.
              </p>
              <Button>Schedule a Consultation</Button>
            </div>
          </div>
        </section>

        {/* Detailed Partnership Models */}
        <section
          id="exclusive-dealership"
          className="py-20 flex justify-center"
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/bikes/bike1.png"
                  alt="Enfield Empire Dealership"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mr-4">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <Badge className="mb-2">Flagship Partnership</Badge>
                    <h2 className="text-3xl font-bold">Exclusive Dealership</h2>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Become an exclusive Royal Enfield dealer with comprehensive
                  sales, service, and spare parts operations in your territory.
                  This is our most comprehensive partnership model, offering the
                  full Royal Enfield experience to customers in your market.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Complete Business Model</h3>
                      <p className="text-muted-foreground">
                        Full-service dealership with motorcycle sales, service
                        center, spare parts, accessories, and apparel.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Territorial Exclusivity</h3>
                      <p className="text-muted-foreground">
                        Exclusive rights to sell Royal Enfield motorcycles
                        within your designated territory.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Multiple Revenue Streams</h3>
                      <p className="text-muted-foreground">
                        Generate income from new motorcycle sales, service
                        operations, spare parts, accessories, apparel, and used
                        motorcycle trade-ins.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Comprehensive Support</h3>
                      <p className="text-muted-foreground">
                        Full access to Royal Enfield&apos;s business support
                        programs, including setup assistance, staff training,
                        marketing support, and more.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-6 rounded-lg mb-8">
                  <h3 className="font-bold mb-2">Investment Overview</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Investment Range
                      </p>
                      <p className="font-bold">$500,000 - $1,000,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Space Requirement
                      </p>
                      <p className="font-bold">3,000 - 5,000 sq ft</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Staff Requirement
                      </p>
                      <p className="font-bold">10 - 15 personnel</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Expected ROI Timeline
                      </p>
                      <p className="font-bold">24 - 36 months</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Dealership Brochure
                  </Button>
                  <Button variant="outline">Apply for Dealership</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="regional-distribution"
          className="py-20 bg-muted flex justify-center"
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mr-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <Badge className="mb-2">Strategic Partnership</Badge>
                    <h2 className="text-3xl font-bold">
                      Regional Distribution
                    </h2>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Become a regional distributor for Royal Enfield with exclusive
                  rights to import, distribute, and develop a network of dealers
                  in your region. This high-level partnership is ideal for
                  established business groups with distribution experience.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Regional Exclusivity</h3>
                      <p className="text-muted-foreground">
                        Exclusive rights to import and distribute Royal Enfield
                        motorcycles, parts, and accessories in your region.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Dealer Network Development</h3>
                      <p className="text-muted-foreground">
                        Build and manage a network of Royal Enfield dealers
                        within your territory, creating a scalable business
                        model.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Supply Chain Management</h3>
                      <p className="text-muted-foreground">
                        Direct import relationship with Royal Enfield&apos;s
                        manufacturing facilities, with optimized logistics and
                        inventory management.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Brand Development</h3>
                      <p className="text-muted-foreground">
                        Lead Royal Enfield&apos;s brand development and
                        marketing initiatives across your entire region.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg mb-8">
                  <h3 className="font-bold mb-2">Investment Overview</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Investment Range
                      </p>
                      <p className="font-bold">$2,000,000 - $5,000,000+</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Facility Requirement
                      </p>
                      <p className="font-bold">10,000+ sq ft</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Team Requirement
                      </p>
                      <p className="font-bold">20+ personnel</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Expected ROI Timeline
                      </p>
                      <p className="font-bold">36 - 48 months</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Distribution Brochure
                  </Button>
                  <Button variant="outline">
                    Apply for Distribution Rights
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
                <Image
                  src="/bikes/bike2.png"
                  alt="Enfield Empire Distribution"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="studio-store" className="py-20 flex justify-center">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/bikes/bike3.png"
                  alt="Enfield Empire Studio Store"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mr-4">
                    <Store className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <Badge className="mb-2">Urban Partnership</Badge>
                    <h2 className="text-3xl font-bold">Studio Store</h2>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Open a compact Enfield Empire showroom in premium urban locations with lower investment requirements.
                  Studio Stores are designed for high-visibility areas with focused motorcycle displays and essential
                  services.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Lower Investment Entry</h3>
                      <p className="text-muted-foreground">
                        Start your Enfield Empire business with a lower capital investment compared to a full dealership.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Premium Urban Locations</h3>
                      <p className="text-muted-foreground">
                        Ideal for high-foot-traffic areas in urban centers where
                        a full dealership might not be feasible.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Focused Product Range</h3>
                      <p className="text-muted-foreground">
                        Display and sell key Enfield Empire models with a curated selection of accessories and apparel.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Basic Service Support</h3>
                      <p className="text-muted-foreground">
                        Offer basic maintenance services with the option to
                        partner with nearby service centers for major repairs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-6 rounded-lg mb-8">
                  <h3 className="font-bold mb-2">Investment Overview</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Investment Range
                      </p>
                      <p className="font-bold">$150,000 - $300,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Space Requirement
                      </p>
                      <p className="font-bold">800 - 1,500 sq ft</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Staff Requirement
                      </p>
                      <p className="font-bold">4 - 6 personnel</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Expected ROI Timeline
                      </p>
                      <p className="font-bold">18 - 24 months</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Studio Store Guide
                  </Button>
                  <Button variant="outline">Apply for Studio Store</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="service-center"
          className="py-20 bg-muted flex justify-center"
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mr-4">
                    <Wrench className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <Badge className="mb-2">Service Partnership</Badge>
                    <h2 className="text-3xl font-bold">Service Center</h2>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Establish a dedicated Enfield Empire service center with genuine parts and accessories sales. This
                  model is ideal for automotive service professionals looking to specialize in Enfield Empire
                  motorcycles.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Lowest Investment Entry</h3>
                      <p className="text-muted-foreground">
                        Start your Enfield Empire business with the lowest capital investment among our partnership
                        models.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Technical Expertise</h3>
                      <p className="text-muted-foreground">
                        Comprehensive technical training and support for servicing all Enfield Empire motorcycle models.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Genuine Parts Business</h3>
                      <p className="text-muted-foreground">
                        Authorized dealer of genuine Enfield Empire parts and accessories with direct supply chain
                        access.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Limited Motorcycle Sales</h3>
                      <p className="text-muted-foreground">
                        Option to sell select Enfield Empire models, with potential to upgrade to a full dealership over
                        time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg mb-8">
                  <h3 className="font-bold mb-2">Investment Overview</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Investment Range
                      </p>
                      <p className="font-bold">$100,000 - $200,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Space Requirement
                      </p>
                      <p className="font-bold">1,500 - 2,500 sq ft</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Staff Requirement
                      </p>
                      <p className="font-bold">5 - 8 personnel</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Expected ROI Timeline
                      </p>
                      <p className="font-bold">12 - 18 months</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Service Center Guide
                  </Button>
                  <Button variant="outline">Apply for Service Center</Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
                <Image
                  src="/bikes/bike4.png"
                  alt="Enfield Empire Service Center"
                  fill
                  className="object-cover"
                />
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
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our streamlined application process is designed to help you become a Enfield Empire business partner
                efficiently and effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">1</span>
                </div>
                <h3 className="font-bold mb-2">Initial Application</h3>
                <p className="text-muted-foreground text-sm">
                  Submit your application with business details and preferred
                  partnership model.
                </p>
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">2</span>
                </div>
                <h3 className="font-bold mb-2">Initial Screening</h3>
                <p className="text-muted-foreground text-sm">
                  Our team reviews your application and conducts an initial
                  assessment of market potential.
                </p>
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">3</span>
                </div>
                <h3 className="font-bold mb-2">Detailed Evaluation</h3>
                <p className="text-muted-foreground text-sm">
                  In-depth assessment of your business plan, location, financial
                  capacity, and market analysis.
                </p>
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">4</span>
                </div>
                <h3 className="font-bold mb-2">Partnership Agreement</h3>
                <p className="text-muted-foreground text-sm">
                  Finalize terms, sign partnership agreement, and complete
                  initial investment requirements.
                </p>
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="text-primary text-xl font-bold">5</span>
                </div>
                <h3 className="font-bold mb-2">Launch & Support</h3>
                <p className="text-muted-foreground text-sm">
                  Complete setup, training, and officially launch your Enfield Empire business with our ongoing support.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg">Start Your Application</Button>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-muted flex justify-center">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Partner Success Stories
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Hear from our successful business partners about their experience with Enfield Empire.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Success Story 1 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">JD</span>
                      </div>
                    </div>
                    <div>
                      <CardTitle>John Doe</CardTitle>
                      <CardDescription>
                        Exclusive Dealership, USA
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative mb-6">
                    <Image
                      src="/bikes/bike5.png"
                      alt="Enfield Empire Dealership USA"
                      height={200}
                      width={400}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                  <p className="italic text-muted-foreground mb-4">
                    &quot;Opening a Enfield Empire dealership was the best business decision I&apos;ve made. The support from the
                    company has been exceptional, and the growing demand for these motorcycles has exceeded our
                    projections.&quot;
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-bold">Results:</span> 120% sales
                    growth in first 2 years, ROI achieved in 30 months
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0">
                    Read Full Story →
                  </Button>
                </CardFooter>
              </Card>

              {/* Success Story 2 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">JS</span>
                      </div>
                    </div>
                    <div>
                      <CardTitle>Jane Smith</CardTitle>
                      <CardDescription>Studio Store, Europe</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative mb-6">
                    <Image
                      src="/bikes/bike4.png"
                      alt="Enfield Empire Studio Store Europe"
                      height={200}
                      width={400}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                  <p className="italic text-muted-foreground mb-4">
                    &quot;Starting with a Studio Store allowed me to enter the Enfield Empire business with a manageable
                    investment. The prime urban location and focused inventory model has proven highly profitable.&quot;
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-bold">Results:</span> Profitable
                    within 14 months, expanded to second location in year 3
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0">
                    Read Full Story →
                  </Button>
                </CardFooter>
              </Card>

              {/* Success Story 3 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">RJ</span>
                      </div>
                    </div>
                    <div>
                      <CardTitle>Robert Johnson</CardTitle>
                      <CardDescription>
                        Regional Distributor, Asia
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative mb-6">
                    <Image
                      src="/bikes/bike3.png"
                      alt="Enfield Empire Distribution Asia"
                      height={200}
                      width={400}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                  <p className="italic text-muted-foreground mb-4">
                    &quot;As a regional distributor, we&apos;ve built a network
                    of 15 dealerships across our territory. Royal Enfield&apos;s
                    growing popularity and our exclusive distribution rights
                    have created a thriving business ecosystem.&quot;
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-bold">Results:</span> 35%
                    year-over-year growth, network expanded from 5 to 15
                    dealerships
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0">
                    Read Full Story →
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button variant="outline">View More Success Stories</Button>
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
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Find answers to common questions about our partnership
                opportunities.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">
                  What are the financial requirements for becoming a Enfield Empire partner?
                </h3>
                <p className="text-muted-foreground">
                  Financial requirements vary by partnership model. Exclusive
                  dealerships typically require $500,000-$1,000,000 in
                  investment capital, while Studio Stores start at around
                  $150,000. We also assess liquid capital availability, net
                  worth, and credit history as part of our evaluation process.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">
                  Do I need prior experience in the motorcycle industry?
                </h3>
                <p className="text-muted-foreground">
                  While prior experience in the automotive or motorcycle industry is beneficial, it&apos;s not always
                  required. We value business acumen, entrepreneurial spirit, and passion for the Enfield Empire brand.
                  Our comprehensive training programs can help bridge any knowledge gaps.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">
                  How long does the application and approval process take?
                </h3>
                <p className="text-muted-foreground">
                  The timeline varies depending on the partnership model and
                  market conditions. Typically, the process takes 3-6 months
                  from initial application to final approval. Studio Stores and
                  Service Centers may have a faster timeline, while Regional
                  Distribution partnerships may take longer due to their
                  complexity.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">
                  What kind of ongoing support does Enfield Empire provide to partners?
                </h3>
                <p className="text-muted-foreground">
                  Enfield Empire provides comprehensive support including business setup assistance, staff training,
                  marketing support, supply chain management, financial guidance, and community building initiatives.
                  Our dedicated partnership support team works closely with you throughout your business journey.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">
                  Can I upgrade from one partnership model to another over time?
                </h3>
                <p className="text-muted-foreground">
                  Yes, many of our partners start with smaller formats like
                  Service Centers or Studio Stores and upgrade to full
                  dealerships as their business grows. We have established
                  pathways for progression and provide support during
                  transitions between partnership models.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white flex justify-center">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join the Enfield Empire Family?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Take the first step towards a rewarding business partnership with
              one of the world&apos;s most iconic motorcycle brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Apply for Partnership
              </Button>
              <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10">
                Download Information Pack
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 flex justify-center">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Contact Our Partnership Team
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about becoming a Enfield Empire business partner? Our dedicated team is here to help you
                  explore the opportunities.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-map-pin text-primary"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Global Headquarters</h3>
                      <p className="text-muted-foreground">Main Block , Royan Enfield Tech Center ,
296 , Rajiv Gandhi Salai , Elcot Sez, Sholinganahllur,
Chennai, Tamil Nadu 600119</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-phone text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Partnership Hotline</h3>
                      <p className="text-muted-foreground">+91 9693894599</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mail text-primary"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email Us</h3>
                      <p className="text-muted-foreground">business@enfieldempire.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">
                    Regional Partnership Offices
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
                <h3 className="text-xl font-bold mb-6">
                  Partnership Inquiry Form
                </h3>
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
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="+91 9693894599"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="partnership-type"
                      className="text-sm font-medium"
                    >
                      Partnership Type
                    </label>
                    <select
                      id="partnership-type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select Partnership Type</option>
                      <option value="dealership">Exclusive Dealership</option>
                      <option value="distribution">
                        Regional Distribution
                      </option>
                      <option value="studio">Studio Store</option>
                      <option value="service">Service Center</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium">
                      Proposed Location/Region
                    </label>
                    <input
                      id="location"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="City, State, Country"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your business experience, investment capacity, and why you're interested in partnering with Enfield Empire..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Inquiry
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
              <h3 className="text-xl font-bold mb-4">Enfield Empire Business</h3>
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
                    href="/opportunities"
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
              <h3 className="text-xl font-bold mb-4">Partnership Models</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#exclusive-dealership"
                    className="text-gray-400 hover:text-white"
                  >
                    Exclusive Dealership
                  </Link>
                </li>
                <li>
                  <Link
                    href="#regional-distribution"
                    className="text-gray-400 hover:text-white"
                  >
                    Regional Distribution
                  </Link>
                </li>
                <li>
                  <Link
                    href="#studio-store"
                    className="text-gray-400 hover:text-white"
                  >
                    Studio Store
                  </Link>
                </li>
                <li>
                  <Link
                    href="#service-center"
                    className="text-gray-400 hover:text-white"
                  >
                    Service Center
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
                  <span className="text-gray-400">Main Block , Royan Enfield Tech Center ,
296 , Rajiv Gandhi Salai , Elcot Sez, Sholinganahllur,
Chennai, Tamil Nadu 600119</span>
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
                  <span className="text-gray-400">+91 9693894599</span>
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
                  <span className="text-gray-400">business@enfieldempire.com</span>
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
            <p>&copy; {new Date().getFullYear()} Enfield Empire Business Partnerships. All rights reserved.</p>
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
