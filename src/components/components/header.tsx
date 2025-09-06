"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="h-8 w-8 rounded bg-primary"></div>
                            <span className="text-xl font-bold text-foreground">FinanceFlow</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link href="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                            Products
                        </Link>
                        <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                            About Us
                        </Link>
                        <Link
                            href="/case-studies"
                            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                            Case Studies
                        </Link>
                        <Link
                            href="/resources"
                            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                            Resources
                        </Link>
                        <Link href="/partner" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                            Partner With Us
                        </Link>
                        <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                            Contact
                        </Link>
                    </nav>

                    {/* Desktop CTAs */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="outline" asChild>
                            <Link href="/demo">Schedule a Demo</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/apply">Apply Now</Link>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                            <Link href="/" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
                                Home
                            </Link>
                            <Link
                                href="/products"
                                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                            >
                                Products
                            </Link>
                            <Link href="/about" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
                                About Us
                            </Link>
                            <Link
                                href="/case-studies"
                                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                            >
                                Case Studies
                            </Link>
                            <Link
                                href="/resources"
                                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                            >
                                Resources
                            </Link>
                            <Link
                                href="/partner"
                                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                            >
                                Partner With Us
                            </Link>
                            <Link
                                href="/contact"
                                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                            >
                                Contact
                            </Link>
                            <div className="px-3 py-2 space-y-2">
                                <Button variant="outline" className="w-full bg-transparent" asChild>
                                    <Link href="/demo">Schedule a Demo</Link>
                                </Button>
                                <Button className="w-full" asChild>
                                    <Link href="/apply">Apply Now</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
