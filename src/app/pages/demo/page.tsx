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
import { Calendar, Clock, CheckCircle, Users, Video, Phone } from "lucide-react"

export default function DemoPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        city: "",
        equipmentType: "",
        loanAmount: "",
        preferredTime: "",
        meetingType: "",
        additionalInfo: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <section className="py-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <CheckCircle className="h-8 w-8 text-green-600" />
                            </div>
                            <h1 className="text-4xl font-bold mb-4">Demo Scheduled Successfully!</h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                Thank you for scheduling a demo with us. Our team will contact you within 2 hours to confirm the meeting
                                details and send you the calendar invite.
                            </p>
                            <div className="space-y-4">
                                <p className="text-muted-foreground">
                                    <strong>What's Next?</strong>
                                </p>
                                <ul className="text-left text-muted-foreground space-y-2 max-w-md mx-auto">
                                    <li>• Our expert will call you to confirm the meeting</li>
                                    <li>• You'll receive a calendar invite with meeting details</li>
                                    <li>• We'll prepare a customized presentation for your needs</li>
                                    <li>• Get ready to explore how we can help your business grow</li>
                                </ul>
                            </div>
                            <div className="mt-8">
                                <Button asChild>
                                    <a href="/">Return to Homepage</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <Badge variant="secondary" className="mb-4">
                            Personalized Consultation
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
                            Schedule a <span className="text-primary">Free Demo</span> with Our Experts
                        </h1>
                        <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                            Get a personalized walkthrough of our financing solutions and discover how we can help your business grow.
                            No commitment required.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">What You'll Get in the Demo</h2>
                        <p className="text-muted-foreground">A comprehensive overview tailored to your business needs</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="text-center">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-semibold mb-2">Expert Consultation</h3>
                                <p className="text-sm text-muted-foreground">
                                    Speak with our financing experts who understand your industry
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-secondary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                    <CheckCircle className="h-6 w-6 text-secondary" />
                                </div>
                                <h3 className="font-semibold mb-2">Eligibility Assessment</h3>
                                <p className="text-sm text-muted-foreground">Get a preliminary assessment of your loan eligibility</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                    <Calendar className="h-6 w-6 text-accent" />
                                </div>
                                <h3 className="font-semibold mb-2">Customized Solutions</h3>
                                <p className="text-sm text-muted-foreground">
                                    Explore financing options tailored to your specific requirements
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                    <Clock className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-semibold mb-2">Process Walkthrough</h3>
                                <p className="text-sm text-muted-foreground">Understand our simple application and approval process</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Demo Scheduling Form */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Form */}
                            <div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-2xl">Schedule Your Demo</CardTitle>
                                        <CardDescription>
                                            Fill out the form below and we'll contact you within 2 hours to confirm your demo.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
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
                                                    <Label htmlFor="company">Company Name *</Label>
                                                    <Input
                                                        id="company"
                                                        value={formData.company}
                                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="city">City *</Label>
                                                    <Input
                                                        id="city"
                                                        value={formData.city}
                                                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="equipmentType">Equipment Type</Label>
                                                    <Select
                                                        value={formData.equipmentType}
                                                        onValueChange={(value) => setFormData({ ...formData, equipmentType: value })}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select equipment type" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="cnc-machines">CNC Machines</SelectItem>
                                                            <SelectItem value="printing-equipment">Printing Equipment</SelectItem>
                                                            <SelectItem value="textile-machinery">Textile Machinery</SelectItem>
                                                            <SelectItem value="packaging-machines">Packaging Machines</SelectItem>
                                                            <SelectItem value="plastic-machinery">Plastic Machinery</SelectItem>
                                                            <SelectItem value="woodworking-tools">Woodworking Tools</SelectItem>
                                                            <SelectItem value="food-processing">Food Processing Equipment</SelectItem>
                                                            <SelectItem value="other">Other</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="loanAmount">Approximate Loan Amount</Label>
                                                    <Select
                                                        value={formData.loanAmount}
                                                        onValueChange={(value) => setFormData({ ...formData, loanAmount: value })}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select loan amount range" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="under-50-lakhs">Under ₹50 Lakhs</SelectItem>
                                                            <SelectItem value="50-lakhs-1-crore">₹50 Lakhs - ₹1 Crore</SelectItem>
                                                            <SelectItem value="1-3-crores">₹1 - ₹3 Crores</SelectItem>
                                                            <SelectItem value="3-5-crores">₹3 - ₹5 Crores</SelectItem>
                                                            <SelectItem value="above-5-crores">Above ₹5 Crores</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="preferredTime">Preferred Time</Label>
                                                    <Select
                                                        value={formData.preferredTime}
                                                        onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select preferred time" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                                                            <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                                                            <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="meetingType">Meeting Preference</Label>
                                                <Select
                                                    value={formData.meetingType}
                                                    onValueChange={(value) => setFormData({ ...formData, meetingType: value })}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select meeting type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="video-call">Video Call (Google Meet/Zoom)</SelectItem>
                                                        <SelectItem value="phone-call">Phone Call</SelectItem>
                                                        <SelectItem value="in-person">In-Person Meeting</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="additionalInfo">Additional Information</Label>
                                                <Textarea
                                                    id="additionalInfo"
                                                    rows={3}
                                                    value={formData.additionalInfo}
                                                    onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                                                    placeholder="Tell us more about your financing needs or any specific questions you have..."
                                                />
                                            </div>

                                            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                                                {isSubmitting ? "Scheduling Demo..." : "Schedule Demo"}
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Calendar Placeholder & Info */}
                            <div className="space-y-8">
                                {/* Calendar Integration Placeholder */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center space-x-2">
                                            <Calendar className="h-5 w-5" />
                                            <span>Available Time Slots</span>
                                        </CardTitle>
                                        <CardDescription>Choose a convenient time for your personalized demo</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                                            <div className="text-center">
                                                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                                <p className="text-muted-foreground">Calendar integration would appear here</p>
                                                <p className="text-sm text-muted-foreground mt-2">(Calendly or similar booking system)</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Demo Information */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Demo Details</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <Clock className="h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <p className="font-medium">Duration: 30-45 minutes</p>
                                                <p className="text-sm text-muted-foreground">Comprehensive overview of our solutions</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <Video className="h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <p className="font-medium">Meeting Options</p>
                                                <p className="text-sm text-muted-foreground">Video call, phone, or in-person</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <Users className="h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <p className="font-medium">Expert Consultation</p>
                                                <p className="text-sm text-muted-foreground">Meet with our financing specialists</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <p className="font-medium">No Obligation</p>
                                                <p className="text-sm text-muted-foreground">Free consultation with no commitment</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Contact Info */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Need Immediate Help?</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <Phone className="h-5 w-5 text-primary" />
                                            <div>
                                                <p className="font-medium">Call us directly</p>
                                                <a href="tel:+919876543210" className="text-primary hover:underline">
                                                    +91 98765 43210
                                                </a>
                                            </div>
                                        </div>

                                        <Button variant="outline" className="w-full bg-transparent" asChild>
                                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                                                Chat on WhatsApp
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
