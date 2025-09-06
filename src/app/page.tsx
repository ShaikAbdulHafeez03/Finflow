import { Header } from "@/components/components/header"
import { Footer } from "@/components/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, TrendingUp, ArrowRight, Zap, Users, Award } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Trusted by 10,000+ MSMEs
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Fast, Flexible <span className="text-primary">Machinery Loans</span> for Indian MSMEs
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Finance new or used equipment with quick decisions, clear terms, and predictable EMIs. Get loans up to
                  ₹10 Crore with minimal documentation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="/apply">Apply Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                  <Link href="/demo">Schedule a Demo</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>3-day disbursal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>No hidden fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>RBI regulated</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center">
                <video
                  src="https://www.mintifi.com/video/homepage.mp4"
                  className="w-full h-full object-contain"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Why Choose FinanceFlow?</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              We understand the unique needs of Indian MSMEs and provide tailored financing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Quick Disbursal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Get loans up to ₹3 Crore, disbursed within 3 working days with minimal documentation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Flexible Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  No additional collateral required for most machinery loans. Up to 100% LTV on select profiles.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Higher Ticket Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Access financing up to ₹10 Crore with tenures up to 10 years for large equipment purchases.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Simple Process</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Easy documentation and guided support for a hassle-free experience from application to disbursal.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Get your machinery loan in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Apply Online</h3>
              <p className="text-muted-foreground text-pretty">
                Fill out our simple online application form with your business and equipment details.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Share Details</h3>
              <p className="text-muted-foreground text-pretty">
                Upload required documents and provide equipment quotations for quick assessment.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Assessment</h3>
              <p className="text-muted-foreground text-pretty">
                Our team reviews your application and calls you back within 48 hours with a decision.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Sanction & Disbursal</h3>
              <p className="text-muted-foreground text-pretty">
                Once approved, funds are disbursed within 3 working days directly to your account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Options Comparison */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Choose Your Loan Option</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              We offer flexible financing solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <Badge className="w-fit mb-2">Most Popular</Badge>
                <CardTitle className="text-2xl">Standard Machinery Loan</CardTitle>
                <CardDescription className="text-lg">Perfect for rapid, collateral-light financing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Amount</span>
                    <span className="font-semibold">Up to ₹3 Crore</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tenure</span>
                    <span className="font-semibold">Up to 5 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing Time</span>
                    <span className="font-semibold">3 working days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Collateral</span>
                    <span className="font-semibold">Minimal required</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/products/machinery-loan">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Structured Asset Finance</CardTitle>
                <CardDescription className="text-lg">For high-value assets with flexible terms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Amount</span>
                    <span className="font-semibold">Up to ₹10 Crore</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tenure</span>
                    <span className="font-semibold">Up to 10 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">LTV</span>
                    <span className="font-semibold">Up to 100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Best For</span>
                    <span className="font-semibold">Large equipment</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/products/structured-finance">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Trusted by thousands of MSMEs across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-muted-foreground mb-4 text-pretty">
                  "FinanceFlow helped us expand our plastic manufacturing unit with a quick ₹2.5 Cr loan. The process
                  was transparent and our production capacity increased by 40%."
                </blockquote>
                <div>
                  <div className="font-semibold">Rajesh Kumar</div>
                  <div className="text-sm text-muted-foreground">Founder, Kumar Plastics</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-muted-foreground mb-4 text-pretty">
                  "As a textile manufacturer, getting the right financing was crucial. FinanceFlow's team understood our
                  needs and provided a structured solution that worked perfectly."
                </blockquote>
                <div>
                  <div className="font-semibold">Priya Singh</div>
                  <div className="text-sm text-muted-foreground">Director, Singh Textiles</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-muted-foreground mb-4 text-pretty">
                  "The documentation was minimal and the disbursal was incredibly fast. We got our packaging machinery
                  loan approved in just 4 days. Highly recommended!"
                </blockquote>
                <div>
                  <div className="font-semibold">Amit Sharma</div>
                  <div className="text-sm text-muted-foreground">CEO, Sharma Packaging</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl text-primary-foreground/80 text-pretty max-w-2xl mx-auto mb-8">
            Join thousands of MSMEs who have successfully expanded their operations with our machinery loans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="/contact">Contact Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/calculators/emi">Calculate EMI</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
