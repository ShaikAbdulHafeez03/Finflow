import { Header } from "@/components/components/header"
import { Footer } from "@/components/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, TrendingUp, Shield, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Our Story
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
              Empowering <span className="text-primary">Indian MSMEs</span> to Achieve Their Dreams
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Founded with a mission to bridge the financing gap for Indian MSMEs, FinanceFlow has been a trusted
              partner in business growth since our inception.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  To democratize access to business financing for Indian MSMEs by providing quick, transparent, and
                  flexible loan solutions that fuel growth and innovation across diverse industries.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  To become India's most trusted fintech partner for MSMEs, enabling millions of businesses to scale,
                  modernize, and contribute to the nation's economic growth through accessible financial solutions.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center">
                <img
                  src="./placeholder.svg?height=400&width=400&text=Team+Collaboration"
                  alt="Team collaboration and growth"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Our Founding Story</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Born from the vision to transform MSME financing in India
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Heart className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">The Beginning</h3>
                        <p className="text-muted-foreground">2019 - Founded with a purpose</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-pretty leading-relaxed">
                      FinanceFlow was founded by a team of financial services veterans who witnessed firsthand the
                      challenges faced by Indian MSMEs in accessing timely and affordable financing. Despite being the
                      backbone of India's economy, these businesses often struggled with lengthy approval processes,
                      rigid terms, and lack of understanding from traditional lenders.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">The Growth</h3>
                        <p className="text-muted-foreground">2020-2023 - Scaling impact</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-pretty leading-relaxed">
                      Starting with a focus on machinery loans, we quickly expanded our offerings to include working
                      capital and asset-backed financing. Our technology-driven approach, combined with deep industry
                      expertise, enabled us to serve over 10,000 MSMEs across 15+ states, disbursing over ₹5,000 crores
                      in loans.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Shield className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">The Commitment</h3>
                        <p className="text-muted-foreground">2024 & Beyond - Regulated excellence</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-pretty leading-relaxed">
                      Today, as a fully RBI-regulated NBFC, we continue to innovate and expand our services while
                      maintaining the highest standards of compliance and customer protection. Our commitment to
                      transparency, speed, and customer-centricity remains unwavering as we work towards our vision of
                      empowering every MSME in India.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Measurable results that reflect our commitment to MSME growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">MSMEs Financed</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">₹5,000 Cr+</div>
                <div className="text-muted-foreground">Total Disbursed</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">States Served</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">3 Days</div>
                <div className="text-muted-foreground">Avg. Sanction TAT</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Customer Satisfaction</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Partner Dealers</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Customer Support</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">RBI Compliant</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Experienced leaders driving innovation in MSME financing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Rajesh Kumar</h3>
                <p className="text-muted-foreground mb-3">Chief Executive Officer</p>
                <p className="text-sm text-muted-foreground text-pretty">
                  20+ years in financial services with expertise in MSME lending and fintech innovation. Previously led
                  lending operations at major NBFCs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Priya Sharma</h3>
                <p className="text-muted-foreground mb-3">Chief Technology Officer</p>
                <p className="text-sm text-muted-foreground text-pretty">
                  15+ years in fintech and digital transformation. Expert in building scalable lending platforms and
                  data-driven decision systems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Amit Patel</h3>
                <p className="text-muted-foreground mb-3">Chief Risk Officer</p>
                <p className="text-sm text-muted-foreground text-pretty">
                  18+ years in credit risk management and regulatory compliance. Former risk head at leading banks with
                  deep MSME sector knowledge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground text-pretty">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  We believe in complete transparency in our processes, pricing, and communication. No hidden fees, no
                  surprises - just honest, straightforward financing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Speed</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Time is money for businesses. Our technology-driven approach ensures quick decisions and fast
                  disbursals without compromising on quality.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Customer-Centricity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Every decision we make is guided by what's best for our customers. We listen, understand, and tailor
                  solutions to meet unique business needs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RBI Compliance */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary/5 rounded-2xl p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">RBI Regulated & Compliant</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-6">
                As a fully regulated Non-Banking Financial Company (NBFC) under the Reserve Bank of India, we adhere to
                the highest standards of financial conduct, customer protection, and regulatory compliance. Your trust
                and security are our top priorities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/fair-practices-code">View Fair Practices Code</Link>
                </Button>
                <Button variant="outline" className="bg-transparent" asChild>
                  <Link href="/grievance-redressal">Grievance Redressal</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl text-primary-foreground/80 text-pretty max-w-2xl mx-auto mb-8">
            Join thousands of MSMEs who trust FinanceFlow for their financing needs. Let's grow together.
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
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
