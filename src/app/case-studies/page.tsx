import { Header } from "@/components/components/header"
import { Footer } from "@/components/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, Factory } from "lucide-react"
import Link from "next/link"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Success Stories
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
              Real <span className="text-primary">Success Stories</span> from Our MSME Partners
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Discover how FinanceFlow has helped thousands of MSMEs across India grow their businesses with our
              tailored financing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">MSMEs Financed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">₹5,000 Cr+</div>
              <div className="text-muted-foreground">Total Disbursed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3 Days</div>
              <div className="text-muted-foreground">Average Disbursal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Case Study 1: Shree Plastics */}
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Factory className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Shree Plastics</h3>
                    <p className="text-muted-foreground">Plastic Manufacturing</p>
                    <Badge className="mt-2">₹1.8 Crore Loan</Badge>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-balance mb-4">
                        Scaling Production for <span className="text-primary">Shree Plastics</span>
                      </h2>
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge variant="outline">Standard Machinery Loan</Badge>
                        <Badge variant="outline">₹1-3 Crore</Badge>
                        <Badge variant="outline">4 years tenure</Badge>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                        <p className="text-muted-foreground text-pretty">
                          Shree Plastics needed to upgrade its injection moulding machinery to meet increasing demand
                          but faced long approval times and rigid terms from traditional banks. This delayed their
                          ability to take on larger orders.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">Our Solution</h4>
                        <p className="text-muted-foreground text-pretty">
                          FinanceFlow provided a collateral-light Machinery Loan of ₹1.8 Crore for two new high-capacity
                          injection moulding machines. The process, from application to disbursal, took only 4 working
                          days.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">The Results</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-green-50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-green-600">40%</div>
                            <div className="text-sm text-green-700">Production Increase</div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-blue-600">25%</div>
                            <div className="text-sm text-blue-700">Revenue Growth</div>
                          </div>
                        </div>
                      </div>

                      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                        "Getting the loan from FinanceFlow was incredibly fast and straightforward. They understood our
                        urgent need to scale, and their flexible terms made all the difference."
                      </blockquote>
                      <div className="text-sm">
                        <div className="font-semibold">Mr. Ankit Sharma</div>
                        <div className="text-muted-foreground">Founder, Shree Plastics</div>
                      </div>
                    </div>

                    <Button className="w-full sm:w-auto" asChild>
                      <Link href="/apply">
                        Apply for Similar Solution <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Case Study 2: Bharat Handlooms */}
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-8 flex items-center justify-center lg:order-2">
                  <div className="text-center">
                    <Users className="h-16 w-16 text-secondary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Bharat Handlooms</h3>
                    <p className="text-muted-foreground">Textile Manufacturing</p>
                    <Badge variant="secondary" className="mt-2">
                      ₹4.5 Crore Loan
                    </Badge>
                  </div>
                </div>
                <div className="p-8 lg:order-1">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-balance mb-4">
                        Modernizing Textile Operations for <span className="text-secondary">Bharat Handlooms</span>
                      </h2>
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge variant="outline">Structured Asset Finance</Badge>
                        <Badge variant="outline">₹3-5 Crore</Badge>
                        <Badge variant="outline">7 years tenure</Badge>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                        <p className="text-muted-foreground text-pretty">
                          Bharat Handlooms, a heritage textile unit, needed to replace aging power looms with modern,
                          energy-efficient equivalents to reduce operational costs and improve fabric quality. They
                          required a larger loan amount than typically offered without extensive collateral.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">Our Solution</h4>
                        <p className="text-muted-foreground text-pretty">
                          FinanceFlow structured an Asset-Backed Machinery Loan of ₹4.5 Crore for 10 new automatic
                          weaving machines. The loan was approved with a higher LTV, leveraging the value of the new
                          machinery itself and a partial existing property.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">The Results</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-green-50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-green-600">30%</div>
                            <div className="text-sm text-green-700">Energy Savings</div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-blue-600">15%</div>
                            <div className="text-sm text-blue-700">Export Growth</div>
                          </div>
                        </div>
                      </div>

                      <blockquote className="border-l-4 border-secondary pl-4 italic text-muted-foreground">
                        "FinanceFlow didn't just offer a loan; they offered a partnership. Their team understood the
                        nuances of our business and structured a solution that allowed us to modernize without
                        liquidating assets."
                      </blockquote>
                      <div className="text-sm">
                        <div className="font-semibold">Ms. Priya Singh</div>
                        <div className="text-muted-foreground">Director, Bharat Handlooms</div>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
                      <Link href="/products/structured-finance">
                        Explore Structured Financing <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Case Study 3: FreshPack Innovations */}
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">FreshPack Innovations</h3>
                    <p className="text-muted-foreground">Food Packaging Startup</p>
                    <Badge variant="outline" className="mt-2">
                      ₹90 Lakhs Loan
                    </Badge>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-balance mb-4">
                        Empowering a Startup in Food Packaging -{" "}
                        <span className="text-accent">FreshPack Innovations</span>
                      </h2>
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge variant="outline">Standard Machinery Loan</Badge>
                        <Badge variant="outline">Under ₹1 Crore</Badge>
                        <Badge variant="outline">3 years tenure</Badge>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                        <p className="text-muted-foreground text-pretty">
                          FreshPack Innovations, a young and rapidly growing food packaging startup, needed to acquire
                          specialized high-speed packaging machinery to fulfill a large contract. As a newer entity,
                          traditional financing options were scarce due to limited financial history.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">Our Solution</h4>
                        <p className="text-muted-foreground text-pretty">
                          FinanceFlow offered a tailored Machinery Loan of ₹90 Lakhs, focusing on the strong potential
                          of their contract and the quality of the machinery. The application process was simplified for
                          MSMEs, with a focus on business viability.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">The Results</h4>
                        <div className="grid grid-cols-1 gap-4">
                          <div className="bg-green-50 rounded-lg p-4 text-center">
                            <div className="text-lg font-bold text-green-600">Achieved Profitability</div>
                            <div className="text-sm text-green-700">Within First Year of Operations</div>
                          </div>
                        </div>
                      </div>

                      <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                        "As a startup, securing a machinery loan felt daunting. FinanceFlow saw our vision and helped us
                        get the essential equipment we needed to kickstart our growth. Their support was instrumental."
                      </blockquote>
                      <div className="text-sm">
                        <div className="font-semibold">Mr. Rohan Gupta</div>
                        <div className="text-muted-foreground">CEO, FreshPack Innovations</div>
                      </div>
                    </div>

                    <Button className="w-full sm:w-auto" asChild>
                      <Link href="/apply">
                        Start Your Application Today <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-primary-foreground/80 text-pretty max-w-2xl mx-auto mb-8">
            Join thousands of MSMEs who have transformed their businesses with our financing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="/apply">Apply for Loan</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/demo">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
