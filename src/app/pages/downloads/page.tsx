import { Header } from "@/components/components/header"
import { Footer } from "@/components/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Shield, BookOpen, Calculator } from "lucide-react"

export default function DownloadsPage() {
    const downloads = [
        {
            title: "Document Checklist",
            description: "Complete list of documents required for machinery loan application",
            category: "Application",
            fileSize: "245 KB",
            icon: <FileText className="h-5 w-5" />,
            popular: true,
        },
        {
            title: "Key Facts Statement (KFS) Template",
            description: "Standard KFS format as per RBI guidelines for loan transparency",
            category: "Compliance",
            fileSize: "180 KB",
            icon: <Shield className="h-5 w-5" />,
            popular: false,
        },
        {
            title: "Fair Practices Code",
            description: "Our commitment to fair and transparent lending practices",
            category: "Compliance",
            fileSize: "320 KB",
            icon: <BookOpen className="h-5 w-5" />,
            popular: false,
        },
        {
            title: "EMI Calculator Spreadsheet",
            description: "Excel template to calculate EMIs and plan your loan repayment",
            category: "Tools",
            fileSize: "95 KB",
            icon: <Calculator className="h-5 w-5" />,
            popular: true,
        },
        {
            title: "Privacy Policy",
            description: "How we collect, use, and protect your personal information",
            category: "Legal",
            fileSize: "280 KB",
            icon: <Shield className="h-5 w-5" />,
            popular: false,
        },
        {
            title: "Terms & Conditions",
            description: "Terms governing the use of our services and loan products",
            category: "Legal",
            fileSize: "350 KB",
            icon: <FileText className="h-5 w-5" />,
            popular: false,
        },
        {
            title: "Grievance Redressal Process",
            description: "Step-by-step guide to file and track complaints",
            category: "Support",
            fileSize: "190 KB",
            icon: <BookOpen className="h-5 w-5" />,
            popular: false,
        },
        {
            title: "Loan Application Form",
            description: "Printable loan application form for offline submission",
            category: "Application",
            fileSize: "420 KB",
            icon: <FileText className="h-5 w-5" />,
            popular: true,
        },
    ]

    const categories = ["All", "Application", "Compliance", "Tools", "Legal", "Support"]

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <Badge variant="secondary" className="mb-4">
                            Resource Center
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
                            <span className="text-primary">Download Center</span>
                        </h1>
                        <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                            Access important documents, forms, and resources to help you with your loan application and understand our
                            services better.
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8 bg-muted/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={category === "All" ? "default" : "outline"}
                                size="sm"
                                className={category !== "All" ? "bg-transparent" : ""}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Downloads Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {downloads.map((item, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant={item.popular ? "default" : "outline"}>
                                            {item.popular ? "Popular" : item.category}
                                        </Badge>
                                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">{item.icon}</div>
                                    </div>
                                    <CardTitle className="text-lg">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-pretty mb-4">{item.description}</CardDescription>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm text-muted-foreground">{item.fileSize}</span>
                                        <span className="text-sm text-muted-foreground">PDF</span>
                                    </div>
                                    <Button className="w-full group-hover:bg-primary/90 transition-colors">
                                        <Download className="mr-2 h-4 w-4" />
                                        Download
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Help Section */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Need Help with Documents?</h2>
                        <p className="text-muted-foreground mb-8">
                            Our team is available to help you understand the requirements and assist with your application.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <a href="tel:+919876543210">Call Support</a>
                            </Button>
                            <Button size="lg" variant="outline" className="bg-transparent" asChild>
                                <a href="/contact">Contact Us</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
