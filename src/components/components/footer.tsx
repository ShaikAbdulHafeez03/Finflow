import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-muted border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* About Us */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold text-foreground mb-4">About Us</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link href="/about#team" className="text-muted-foreground hover:text-primary transition-colors">
                                    Leadership Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/about#mission" className="text-muted-foreground hover:text-primary transition-colors">
                                    Mission & Vision
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Products</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/products/machinery-loan"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Machinery Loans
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products/working-capital"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Working Capital
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products/loan-against-property"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Loan Against Property
                                </Link>
                            </li>
                            <li>
                                <Link href="/calculators" className="text-muted-foreground hover:text-primary transition-colors">
                                    EMI Calculator
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                                    Blog & Guides
                                </Link>
                            </li>
                            <li>
                                <Link href="/faqs" className="text-muted-foreground hover:text-primary transition-colors">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="/downloads" className="text-muted-foreground hover:text-primary transition-colors">
                                    Download Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/customer-education" className="text-muted-foreground hover:text-primary transition-colors">
                                    Customer Education
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/grievance-redressal"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Grievance Redressal
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-conditions" className="text-muted-foreground hover:text-primary transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/key-facts-statement"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Key Facts Statement
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/fair-practices-code"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Fair Practices Code
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">Mumbai, Maharashtra, India</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">+91 98765 43210</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">support@Jumbo Money.com</span>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="flex space-x-4 mt-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <FaFacebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <FaTwitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <FaLinkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center">
                    <p className="text-sm text-muted-foreground">© 2024 JumboMoney. All rights reserved. | Regulated by RBI</p>
                </div>
            </div>
        </footer>
    )
}
