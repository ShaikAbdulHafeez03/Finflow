import { Header } from "@/components/components/header"
import { Footer } from "@/components/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cog, TrendingUp, Home } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <Badge variant="secondary" className="mb-4">
                            Comprehensive Financing Solutions
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
                            Tailored <span className="text-primary">Financial Products</span> for Every Business Need
                        </h1>
                        <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                            From machinery acquisition to working capital, we provide flexible financing solutions designed
                            specifically for Indian MSMEs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Machinery Loan */}
                        <Card className="relative group hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Cog className="h-6 w-6 text-primary" />
                                </div>
                                <Badge className="w-fit mb-2">Most Popular</Badge>
                                <CardTitle className="text-2xl">Machinery Loan (New & Used)</CardTitle>
                                <CardDescription className="text-lg">
                                    Our core offering for asset acquisition and business expansion
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Loan Amount</span>
                                        <span className="font-semibold">Up to ₹10 Crore</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Tenure</span>
                                        <span className="font-semibold">1-10 years</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Processing Time</span>
                                        <span className="font-semibold">3 working days</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">LTV</span>
                                        <span className="font-semibold">Up to 100%</span>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <h4 className="font-semibold mb-2">Industries We Serve:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">Machine Tools</Badge>
                                        <Badge variant="outline">Plastics</Badge>
                                        <Badge variant="outline">Printing</Badge>
                                        <Badge variant="outline">Textiles</Badge>
                                        <Badge variant="outline">Food Packaging</Badge>
                                    </div>
                                </div>

                                <Button className="w-full group-hover:bg-primary/90 transition-colors" asChild>
                                    <Link href="/products/machinery-loan">
                                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Working Capital */}
                        <Card className="relative group hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                                    <TrendingUp className="h-6 w-6 text-secondary" />
                                </div>
                                <CardTitle className="text-2xl">Working Capital Solutions</CardTitle>
                                <CardDescription className="text-lg">
                                    Flexible overdraft and cash credit facilities for operational needs
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Credit Limit</span>
                                        <span className="font-semibold">Up to ₹5 Crore</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Tenure</span>
                                        <span className="font-semibold">12 months renewable</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Interest</span>
                                        <span className="font-semibold">Competitive rates</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Repayment</span>
                                        <span className="font-semibold">Flexible</span>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <h4 className="font-semibold mb-2">Key Features:</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Revolving credit facility</li>
                                        <li>• Pay interest only on utilized amount</li>
                                        <li>• Quick access to funds</li>
                                        <li>• Minimal documentation</li>
                                    </ul>
                                </div>

                                <Button
                                    variant="outline"
                                    className="w-full bg-transparent group-hover:bg-muted transition-colors"
                                    asChild
                                >
                                    <Link href="/products/working-capital">
                                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Loan Against Property */}
                        <Card className="relative group hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                                    <Home className="h-6 w-6 text-accent" />
                                </div>
                                <CardTitle className="text-2xl">Loan Against Property</CardTitle>
                                <CardDescription className="text-lg">
                                    Unlock the value of your property for large-scale business expansion
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Loan Amount</span>
                                        <span className="font-semibold">Up to ₹15 Crore</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Tenure</span>
                                        <span className="font-semibold">Up to 15 years</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">LTV</span>
                                        <span className="font-semibold">Up to 70%</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Interest Rate</span>
                                        <span className="font-semibold">Attractive rates</span>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <h4 className="font-semibold mb-2">Property Types:</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Residential properties</li>
                                        <li>• Commercial properties</li>
                                        <li>• Industrial properties</li>
                                        <li>• Plot/Land with clear title</li>
                                    </ul>
                                </div>

                                <Button
                                    variant="outline"
                                    className="w-full bg-transparent group-hover:bg-muted transition-colors"
                                    asChild
                                >
                                    <Link href="/products/loan-against-property">
                                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Need Help Choosing the Right Product?</h2>
                    <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
                        Our experts are here to help you find the perfect financing solution for your business needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8" asChild>
                            <Link href="/demo">Schedule a Consultation</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                            <Link href="/calculators">Use Our Calculators</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
