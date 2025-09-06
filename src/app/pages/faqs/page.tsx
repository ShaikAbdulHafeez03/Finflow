import { Header } from "@/components/components/header"
import { Footer } from "@/components/components/footer"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function FAQsPage() {
    const faqCategories = [
        {
            title: "Eligibility & Documentation",
            faqs: [
                {
                    question: "What are the basic eligibility criteria for a machinery loan?",
                    answer:
                        "To be eligible for a machinery loan, your business should have: minimum 3 years of operations, annual turnover of ₹1 Crore or more, positive cash flow for the last 2 years, GST registration, credit score of 700+, and at least one owned property (business or residential).",
                },
                {
                    question: "What documents are required for loan application?",
                    answer:
                        "Key documents include: KYC documents of directors/partners, Certificate of incorporation, Partnership deed/MOA & AOA, GST registration certificate, last 3 years' audited financials, 12 months' bank statements, GST returns for 12 months, equipment quotation/proforma, and property documents if applicable.",
                },
                {
                    question: "Can startups apply for machinery loans?",
                    answer:
                        "Yes, startups with at least 1 year of operations and strong business potential can apply. We evaluate startups based on business viability, promoter background, and contract strength rather than just financial history.",
                },
                {
                    question: "Is GST registration mandatory?",
                    answer:
                        "Yes, GST registration is mandatory for all loan applicants as it helps us verify your business operations and turnover.",
                },
            ],
        },
        {
            title: "Loan Process & Approval",
            faqs: [
                {
                    question: "How long does the loan approval process take?",
                    answer:
                        "Our standard turnaround time is 3 working days from submission of complete documentation. For loans under ₹50 Lakhs with strong profiles, we often provide same-day approvals. Complex cases may take up to 7 working days.",
                },
                {
                    question: "Can I track my application status?",
                    answer:
                        "Yes, you can track your application status through our online portal or by contacting our customer support team. We also provide regular updates via SMS and email.",
                },
                {
                    question: "What happens after loan approval?",
                    answer:
                        "After approval, we'll send you the loan agreement for review and signature. Once signed and any additional conditions are met, funds are typically disbursed within 1-2 working days directly to your account or the equipment vendor.",
                },
                {
                    question: "Can my loan application be rejected?",
                    answer:
                        "Yes, applications may be rejected due to insufficient credit score, inadequate cash flow, incomplete documentation, or not meeting our eligibility criteria. We provide clear reasons for rejection and guidance on how to improve your application.",
                },
            ],
        },
        {
            title: "Loan Terms & Pricing",
            faqs: [
                {
                    question: "What are your interest rates?",
                    answer:
                        "Interest rates are determined based on your credit profile, business performance, loan amount, and tenure. We offer competitive rates starting from market-linked benchmarks. You'll receive a personalized rate quote based on your specific profile.",
                },
                {
                    question: "Are there any processing fees or hidden charges?",
                    answer:
                        "We believe in complete transparency. All fees including processing charges, documentation fees, and other applicable charges are clearly mentioned in the loan agreement. There are no hidden costs.",
                },
                {
                    question: "Can I choose between fixed and floating interest rates?",
                    answer:
                        "Yes, we offer both fixed and floating rate options. Fixed rates provide payment certainty, while floating rates may offer potential savings when market rates decline. Our team will help you choose the best option.",
                },
                {
                    question: "What is the maximum loan amount I can get?",
                    answer:
                        "We offer loans up to ₹10 Crore depending on your business profile, equipment value, and repayment capacity. The exact amount will be determined based on your financial assessment.",
                },
            ],
        },
        {
            title: "Collateral & Security",
            faqs: [
                {
                    question: "Is collateral always required?",
                    answer:
                        "No, collateral is not always required. For loans under ₹1 Crore with good credit profiles, we offer collateral-light financing. The machinery itself often serves as primary security, and additional collateral may be required based on loan amount and risk assessment.",
                },
                {
                    question: "What can be used as collateral?",
                    answer:
                        "Acceptable collateral includes residential or commercial properties, industrial land, existing machinery, fixed deposits, or government securities. The collateral value should typically be 1.25 to 1.5 times the loan amount.",
                },
                {
                    question: "Do you finance used machinery?",
                    answer:
                        "Yes, we finance both new and used machinery. For used equipment, we typically finance up to 70-80% of the machine value, and the equipment should not be older than 10 years. A technical evaluation may be required.",
                },
            ],
        },
        {
            title: "Repayment & Prepayment",
            faqs: [
                {
                    question: "What are the repayment options?",
                    answer:
                        "We offer flexible repayment options including monthly EMIs, quarterly payments, or structured payments aligned with your cash flow. Repayment tenure ranges from 1 to 10 years depending on the equipment type and loan amount.",
                },
                {
                    question: "Can I prepay my loan?",
                    answer:
                        "Yes, prepayment is allowed. For floating rate loans, there are typically no prepayment penalties after 6 months. For fixed rate loans, minimal prepayment charges may apply as per RBI guidelines.",
                },
                {
                    question: "What happens if I miss an EMI payment?",
                    answer:
                        "Missing EMI payments can impact your credit score and may attract penal charges. We recommend contacting us immediately if you anticipate payment difficulties. We can work with you to find a suitable solution.",
                },
                {
                    question: "Can I get a moratorium on EMI payments?",
                    answer:
                        "Yes, we may offer a moratorium period of up to 6 months in certain cases, especially for seasonal businesses or during equipment installation periods. This needs to be discussed and agreed upon at the time of loan sanction.",
                },
            ],
        },
    ]

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <Badge variant="secondary" className="mb-4">
                            Help Center
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
                            <span className="text-primary">Frequently Asked</span> Questions
                        </h1>
                        <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                            Find answers to common questions about our machinery loans, application process, and terms. Can't find
                            what you're looking for? Contact our support team.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Categories */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto space-y-8">
                        {faqCategories.map((category, categoryIndex) => (
                            <Card key={categoryIndex}>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <HelpCircle className="h-5 w-5 text-primary" />
                                        <span>{category.title}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Accordion type="single" collapsible className="space-y-2">
                                        {category.faqs.map((faq, faqIndex) => (
                                            <AccordionItem
                                                key={faqIndex}
                                                value={`${categoryIndex}-${faqIndex}`}
                                                className="border rounded-lg px-4"
                                            >
                                                <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                                                <AccordionContent className="text-muted-foreground text-pretty">{faq.answer}</AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Support */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                        <p className="text-muted-foreground">Our support team is here to help you</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Card className="text-center">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-semibold mb-2">Call Us</h3>
                                <p className="text-sm text-muted-foreground mb-4">Speak with our loan experts</p>
                                <Button className="w-full" asChild>
                                    <a href="tel:+919876543210">+91 98765 43210</a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-secondary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                    <MessageCircle className="h-6 w-6 text-secondary" />
                                </div>
                                <h3 className="font-semibold mb-2">WhatsApp</h3>
                                <p className="text-sm text-muted-foreground mb-4">Get instant support</p>
                                <Button variant="outline" className="w-full bg-transparent" asChild>
                                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                                        Chat Now
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                    <HelpCircle className="h-6 w-6 text-accent" />
                                </div>
                                <h3 className="font-semibold mb-2">Contact Form</h3>
                                <p className="text-sm text-muted-foreground mb-4">Send us a detailed message</p>
                                <Button variant="outline" className="w-full bg-transparent" asChild>
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
