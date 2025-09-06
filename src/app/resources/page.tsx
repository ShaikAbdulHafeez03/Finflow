import { Header } from "@/components/components/header"
import { Footer } from "@/components/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, TrendingUp, FileText, Calculator } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
    const blogPosts = [
        {
            id: 1,
            title: "How to Choose the Right CNC Machine Financing",
            excerpt:
                "A comprehensive guide to selecting the best financing option for your CNC machine purchase, including key factors to consider and common pitfalls to avoid.",
            category: "Equipment Financing",
            readTime: "8 min read",
            date: "March 15, 2024",
            icon: <TrendingUp className="h-5 w-5" />,
        },
        {
            id: 2,
            title: "A Guide to MSME Loan Documentation",
            excerpt:
                "Everything you need to know about preparing and organizing documents for your MSME loan application to ensure faster approval.",
            category: "Documentation",
            readTime: "6 min read",
            date: "March 10, 2024",
            icon: <FileText className="h-5 w-5" />,
        },
        {
            id: 3,
            title: "Understanding Interest Rates: Fixed vs Floating",
            excerpt:
                "Learn the differences between fixed and floating interest rates and how to choose the right option for your business loan.",
            category: "Financial Planning",
            readTime: "5 min read",
            date: "March 5, 2024",
            icon: <Calculator className="h-5 w-5" />,
        },
        {
            id: 4,
            title: "Textile Industry Financing: Modernization Trends",
            excerpt:
                "Explore the latest trends in textile machinery financing and how MSMEs are leveraging technology to stay competitive.",
            category: "Industry Insights",
            readTime: "7 min read",
            date: "February 28, 2024",
            icon: <BookOpen className="h-5 w-5" />,
        },
        {
            id: 5,
            title: "Working Capital vs Term Loans: Which is Right for You?",
            excerpt:
                "Compare working capital loans and term loans to understand which financing option best suits your business needs.",
            category: "Loan Types",
            readTime: "6 min read",
            date: "February 25, 2024",
            icon: <TrendingUp className="h-5 w-5" />,
        },
        {
            id: 6,
            title: "Digital Transformation in Manufacturing: Financing Your Upgrade",
            excerpt:
                "How to finance your digital transformation journey and the role of modern equipment loans in Industry 4.0 adoption.",
            category: "Technology",
            readTime: "9 min read",
            date: "February 20, 2024",
            icon: <BookOpen className="h-5 w-5" />,
        },
    ]

    const categories = [
        "All",
        "Equipment Financing",
        "Documentation",
        "Financial Planning",
        "Industry Insights",
        "Loan Types",
        "Technology",
    ]

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <Badge variant="secondary" className="mb-4">
                            Knowledge Hub
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
                            <span className="text-primary">Resources & Guides</span> for Smart Business Financing
                        </h1>
                        <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                            Stay informed with our expert insights, guides, and industry updates to make better financing decisions
                            for your business.
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

            {/* Blog Posts Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant="outline">{post.category}</Badge>
                                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">{post.icon}</div>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                        <Link href={`/resources/${post.id}`}>{post.title}</Link>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-pretty mb-4">{post.excerpt}</CardDescription>
                                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                                        <span>{post.date}</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <Button variant="ghost" className="p-0 h-auto font-medium text-primary" asChild>
                                        <Link href={`/resources/${post.id}`}>
                                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                        <p className="text-xl text-primary-foreground/80 mb-8">
                            Get the latest insights and financing tips delivered to your inbox monthly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-md text-foreground"
                            />
                            <Button variant="secondary" size="lg">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
