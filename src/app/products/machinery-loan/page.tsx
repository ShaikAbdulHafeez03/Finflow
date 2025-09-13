import { Header } from "@/components/components/header"
import { Footer } from "@/components/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Download, ArrowRight, Cog, Shield, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"
import { ApplyNowButton } from "@/components/components/apply-now-button"

export default function MachineryLoanPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <Badge variant="secondary" className="w-fit">
                                Most Popular Product
                            </Badge>
                            <h1 className="text-4xl lg:text-5xl font-bold text-balance leading-tight">
                                <span className="text-primary">Machinery Loans</span> for New & Used Equipment
                            </h1>
                            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                                Finance your business growth with our comprehensive machinery loan solutions. From CNC machines to
                                packaging equipment, we've got you covered.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <ApplyNowButton size="lg" variant="outline" className="text-lg px-8 bg-transparent"/>
                                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                                    <Link href="/calculators/emi">Calculate EMI</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center">
                                <img
                                    src="./placeholder.svg?height=400&width=400&text=Industrial+Machinery"
                                    alt="Industrial machinery and equipment"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Key Features & Benefits</h2>
                        <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                            Designed specifically for Indian MSMEs with flexible terms and quick processing
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card>
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <TrendingUp className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Loan amounts up to ₹10 Crore</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Finance large-scale equipment purchases with our high-value loan offerings
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Clock className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Tenures from 1 to 10 years</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Choose repayment terms that align with your business cash flow and equipment lifecycle
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Shield className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Up to 100% LTV on eligible assets</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Minimal down payment required for qualified machinery and equipment purchases
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <CheckCircle className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Quick disbursal within 3 working days</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>Fast processing ensures you don't miss out on business opportunities</CardDescription>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Cog className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Minimal documentation for loans under ₹1 Crore</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>Streamlined process with reduced paperwork for smaller loan amounts</CardDescription>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <TrendingUp className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Competitive, flexible interest rates</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>Attractive pricing with options for fixed or floating rate structures</CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Industries We Serve</h2>
                        <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                            Specialized financing solutions across diverse manufacturing sectors
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            "Machine Tools",
                            "Plastics",
                            "Printing",
                            "Woodworking",
                            "Textiles",
                            "Food Packaging",
                            "Automotive",
                            "Electronics",
                            "Pharmaceuticals",
                            "Chemical",
                            "Construction",
                            "Agriculture",
                        ].map((industry) => (
                            <Card key={industry} className="text-center p-4">
                                <CardContent className="p-0">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                                        <Cog className="h-6 w-6 text-primary" />
                                    </div>
                                    <p className="font-medium text-sm">{industry}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility & Documents */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Eligibility & Documentation</h2>
                            <p className="text-xl text-muted-foreground text-pretty">Simple requirements designed for MSMEs</p>
                        </div>

                        <Accordion type="single" collapsible className="space-y-4">
                            <AccordionItem value="eligibility" className="bg-background rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-semibold">Eligibility Criteria</AccordionTrigger>
                                <AccordionContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold mb-2">Business Requirements</h4>
                                            <ul className="space-y-1 text-muted-foreground">
                                                <li>• Minimum 3 years in business</li>
                                                <li>• Annual turnover of ₹1 Crore+</li>
                                                <li>• Positive cash flow for last 2 years</li>
                                                <li>• GST registered entity</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Credit Requirements</h4>
                                            <ul className="space-y-1 text-muted-foreground">
                                                <li>• Minimum credit score of 700+</li>
                                                <li>• No defaults in last 12 months</li>
                                                <li>• At least one owned property</li>
                                                <li>• Clean banking track record</li>
                                            </ul>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="documents" className="bg-background rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-semibold">Required Documents</AccordionTrigger>
                                <AccordionContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold mb-2">Business Documents</h4>
                                            <ul className="space-y-1 text-muted-foreground">
                                                <li>• KYC documents of directors/partners</li>
                                                <li>• Certificate of incorporation</li>
                                                <li>• Partnership deed/MOA & AOA</li>
                                                <li>• GST registration certificate</li>
                                                <li>• Shop establishment license</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Financial Documents</h4>
                                            <ul className="space-y-1 text-muted-foreground">
                                                <li>• Last 3 years' audited financials</li>
                                                <li>• 12 months' bank statements</li>
                                                <li>• GST returns for 12 months</li>
                                                <li>• Equipment quotation/proforma</li>
                                                <li>• Property documents (if applicable)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <div className="text-center mt-8">
                            <Button size="lg" variant="outline" className="bg-transparent" asChild>
                                <Link href="/downloads/document-checklist">
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Full Checklist
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Application Process</h2>
                        <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                            Simple 4-step process from application to disbursal
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                    1
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Submit Application</h3>
                                <p className="text-muted-foreground text-pretty text-sm">
                                    Complete our online form with business and equipment details
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                    2
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Document Verification</h3>
                                <p className="text-muted-foreground text-pretty text-sm">
                                    Upload required documents for quick verification
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                    3
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Credit Assessment</h3>
                                <p className="text-muted-foreground text-pretty text-sm">
                                    Our team evaluates and provides decision within 48 hours
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                    4
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Sanction & Disbursal</h3>
                                <p className="text-muted-foreground text-pretty text-sm">
                                    Funds disbursed within 3 working days of approval
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <Button size="lg" asChild>
                                <Link href="/apply/machinery-loan">
                                    Start Application <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Frequently Asked Questions</h2>
                            <p className="text-xl text-muted-foreground text-pretty">
                                Get answers to common questions about machinery loans
                            </p>
                        </div>

                        <Accordion type="single" collapsible className="space-y-4">
                            <AccordionItem value="collateral" className="bg-background rounded-lg px-6">
                                <AccordionTrigger>Is collateral always required for machinery loans?</AccordionTrigger>
                                <AccordionContent>
                                    No, collateral is not always required. For loans under ₹1 Crore with good credit profiles, we offer
                                    collateral-light financing. The machinery itself often serves as primary security, and additional
                                    collateral may be required based on loan amount and risk assessment.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="turnaround" className="bg-background rounded-lg px-6">
                                <AccordionTrigger>What is the typical turnaround time for loan approval?</AccordionTrigger>
                                <AccordionContent>
                                    Our standard turnaround time is 3 working days from the submission of complete documentation. For
                                    loans under ₹50 Lakhs with strong profiles, we can often provide same-day approvals. Complex cases may
                                    take up to 7 working days.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="fees" className="bg-background rounded-lg px-6">
                                <AccordionTrigger>Are there any hidden fees or charges?</AccordionTrigger>
                                <AccordionContent>
                                    We believe in complete transparency. All fees including processing charges, documentation fees, and
                                    any other applicable charges are clearly mentioned in our loan agreement. There are no hidden costs,
                                    and you'll receive a detailed fee structure before loan sanction.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="prepayment" className="bg-background rounded-lg px-6">
                                <AccordionTrigger>Can I prepay my loan without penalties?</AccordionTrigger>
                                <AccordionContent>
                                    Yes, we allow prepayment of loans. For floating rate loans, there are typically no prepayment
                                    penalties after 6 months. For fixed rate loans, minimal prepayment charges may apply as per RBI
                                    guidelines. Specific terms will be mentioned in your loan agreement.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="used-machinery" className="bg-background rounded-lg px-6">
                                <AccordionTrigger>Do you finance used machinery?</AccordionTrigger>
                                <AccordionContent>
                                    Yes, we finance both new and used machinery. For used equipment, we typically finance up to 70-80% of
                                    the machine value, and the equipment should not be older than 10 years. A technical evaluation may be
                                    required to assess the condition and remaining useful life.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="interest-rates" className="bg-background rounded-lg px-6">
                                <AccordionTrigger>How are interest rates determined?</AccordionTrigger>
                                <AccordionContent>
                                    Interest rates are determined based on several factors including your credit score, business vintage,
                                    financial performance, loan amount, and tenure. We offer competitive rates starting from market-linked
                                    benchmarks. You'll receive a personalized rate quote based on your specific profile.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* CTA Bar */}
            <section className="py-12 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Ready to Finance Your Next Equipment Purchase?</h3>
                            <p className="text-primary-foreground/80">
                                Join thousands of MSMEs who have grown their business with our machinery loans.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                                <Link href="/contact">Apply Now</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                                asChild
                            >
                                <Link href="/demo">Schedule Demo</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                                asChild
                            >
                                <Link href="/downloads/checklist">
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Checklist
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
