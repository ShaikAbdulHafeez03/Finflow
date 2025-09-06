"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/components/header"
import { Footer } from "@/components/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage(null);
        setErrorMessage(null);

        try {
            await addDoc(collection(db, "contacts"), {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                company: formData.company,
                subject: formData.subject,
                message: formData.message,
                createdAt: serverTimestamp()
            });

            setSuccessMessage("Thank you! Your message has been sent.");
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                subject: "",
                message: "",
            });
        } catch (error: any) {
            console.error("Error saving contact:", error);
            setErrorMessage("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <Badge variant="secondary" className="mb-4">
                            Get in Touch
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
                            We're Here to <span className="text-primary">Help You Grow</span>
                        </h1>
                        <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                            Have questions about our financing solutions? Need support with your application? Our team of experts is
                            ready to assist you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information & Form */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                                <p className="text-lg text-muted-foreground text-pretty mb-8">
                                    Choose the most convenient way to reach us. We're committed to responding quickly and providing the
                                    support you need.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Office Address */}
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <MapPin className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-2">Head Office</h3>
                                                <p className="text-muted-foreground">
                                                    FinanceFlow Technologies Pvt. Ltd.
                                                    <br />
                                                    Tower A, 15th Floor
                                                    <br />
                                                    Business District, Bandra Kurla Complex
                                                    <br />
                                                    Mumbai, Maharashtra 400051
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Phone */}
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Phone className="h-6 w-6 text-secondary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-2">Phone Support</h3>
                                                <p className="text-muted-foreground mb-2">
                                                    <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                                                        +91 98765 43210
                                                    </a>
                                                </p>
                                                <p className="text-sm text-muted-foreground">Available 24/7 for existing customers</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Email */}
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Mail className="h-6 w-6 text-accent" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-2">Email Support</h3>
                                                <div className="space-y-1">
                                                    <p className="text-muted-foreground">
                                                        General Inquiries:{" "}
                                                        <a href="mailto:info@financeflow.com" className="text-primary hover:underline">
                                                            info@financeflow.com
                                                        </a>
                                                    </p>
                                                    <p className="text-muted-foreground">
                                                        Loan Support:{" "}
                                                        <a href="mailto:support@financeflow.com" className="text-primary hover:underline">
                                                            support@financeflow.com
                                                        </a>
                                                    </p>
                                                    <p className="text-muted-foreground">
                                                        Partnership:{" "}
                                                        <a href="mailto:partners@financeflow.com" className="text-primary hover:underline">
                                                            partners@financeflow.com
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* WhatsApp */}
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <MessageCircle className="h-6 w-6 text-green-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-2">WhatsApp Support</h3>
                                                <p className="text-muted-foreground mb-3">
                                                    Get instant support on WhatsApp for quick queries and updates.
                                                </p>
                                                <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
                                                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                                                        Chat on WhatsApp
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Business Hours */}
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Clock className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                                                <div className="space-y-1 text-muted-foreground">
                                                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                                                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                                                    <p>Sunday: Closed</p>
                                                    <p className="text-sm mt-2">Emergency support available 24/7 for existing customers</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                                    <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {successMessage && (
                                        <div className="mb-4 p-4 rounded-md bg-green-100 text-green-700 flex items-center space-x-2">
                                            <CheckCircle className="h-5 w-5" />
                                            <span>{successMessage}</span>
                                        </div>
                                    )}

                                    {errorMessage && (
                                        <div className="mb-4 p-4 rounded-md bg-red-100 text-red-700 flex items-center space-x-2">
                                            <AlertTriangle className="h-5 w-5" />
                                            <span>{errorMessage}</span>
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Full Name *</Label>
                                                <Input
                                                    id="name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email Address *</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number *</Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="company">Company Name</Label>
                                                <Input
                                                    id="company"
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Subject *</Label>
                                            <Select
                                                value={formData.subject}
                                                onValueChange={(value) => setFormData({ ...formData, subject: value })}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select inquiry type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="loan-inquiry">Loan Inquiry</SelectItem>
                                                    <SelectItem value="application-support">Application Support</SelectItem>
                                                    <SelectItem value="existing-loan">Existing Loan Support</SelectItem>
                                                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                                                    <SelectItem value="complaint">Complaint/Grievance</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message *</Label>
                                            <Textarea
                                                id="message"
                                                rows={5}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="Please provide details about your inquiry..."
                                                required
                                            />
                                        </div>

                                        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                "Sending..."
                                            ) : (
                                                <>
                                                    Send Message <Send className="ml-2 h-4 w-4" />
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
                        <p className="text-muted-foreground">Located in the heart of Mumbai's business district</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <Card>
                            <CardContent className="p-0">
                                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                        <p className="text-muted-foreground">Interactive map would be embedded here</p>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            Business District, Bandra Kurla Complex, Mumbai
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
                        <p className="text-muted-foreground">Choose the fastest way to get the help you need</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Card className="text-center">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-semibold mb-2">Call Us Now</h3>
                                <p className="text-sm text-muted-foreground mb-4">Speak directly with our loan experts</p>
                                <Button className="w-full" asChild>
                                    <a href="tel:+919876543210">Call +91 98765 43210</a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-secondary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                    <MessageCircle className="h-6 w-6 text-secondary" />
                                </div>
                                <h3 className="font-semibold mb-2">WhatsApp Chat</h3>
                                <p className="text-sm text-muted-foreground mb-4">Get instant responses to your queries</p>
                                <Button variant="outline" className="w-full bg-transparent" asChild>
                                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                                        Start WhatsApp Chat
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                    <Send className="h-6 w-6 text-accent" />
                                </div>
                                <h3 className="font-semibold mb-2">Schedule Demo</h3>
                                <p className="text-sm text-muted-foreground mb-4">Book a personalized consultation</p>
                                <Button variant="outline" className="w-full bg-transparent" asChild>
                                    <Link href="/demo">Schedule Demo</Link>
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
