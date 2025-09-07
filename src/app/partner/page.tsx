import { Header } from "@/components/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Clock, AlertCircle } from "lucide-react"

export default function GrievanceRedressalPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <Badge variant="secondary" className="mb-4">
                            Customer Protection
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
                            <span className="text-primary">Grievance Redressal</span> Mechanism
                        </h1>
                        <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                            We are committed to resolving your concerns promptly and fairly. Our structured grievance redressal
                            process ensures your complaints are addressed efficiently.
                        </p>
                    </div>
                </div>
            </section>

            {/* Escalation Matrix */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Escalation Matrix</h2>
                        <p className="text-xl text-muted-foreground text-pretty">
                            Follow this step-by-step process to ensure your grievance is resolved
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {/* Level 1 */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                                        1
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl">Customer Service Team</CardTitle>
                                        <CardDescription>First point of contact for all complaints</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-2">Contact Details:</h4>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center space-x-2">
                                                <Phone className="h-4 w-4 text-muted-foreground" />
                                                <span>+91 98765 43210</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Mail className="h-4 w-4 text-muted-foreground" />
                                                <span>support@Jumbo Money.com</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Resolution Timeline:</h4>
                                        <div className="flex items-center space-x-2 text-sm">
                                            <Clock className="h-4 w-4 text-muted-foreground" />
                                            <span>Within 7 working days</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Level 2 */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                        2
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl">Grievance Officer</CardTitle>
                                        <CardDescription>If not resolved at Level 1</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-2">Contact Details:</h4>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center space-x-2">
                                                <Phone className="h-4 w-4 text-muted-foreground" />
                                                <span>+91 98765 43211</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Mail className="h-4 w-4 text-muted-foreground" />
                                                <span>grievance@Jumbo Money.com</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Resolution Timeline:</h4>
                                        <div className="flex items-center space-x-2 text-sm">
                                            <Clock className="h-4 w-4 text-muted-foreground" />
                                            <span>Within 15 working days</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Level 3 */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                        3
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl">Principal Officer</CardTitle>
                                        <CardDescription>Final internal escalation</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-2">Contact Details:</h4>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center space-x-2">
                                                <Phone className="h-4 w-4 text-muted-foreground" />
                                                <span>+91 98765 43212</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Mail className="h-4 w-4 text-muted-foreground" />
                                                <span>principal@Jumbo Money.com</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Resolution Timeline:</h4>
                                        <div className="flex items-center space-x-2 text-sm">
                                            <Clock className="h-4 w-4 text-muted-foreground" />
                                            <span>Within 30 working days</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* External Authorities */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">External Authorities</h2>
                        <p className="text-xl text-muted-foreground text-pretty">
                            If your grievance is not resolved internally, you can approach these authorities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <AlertCircle className="h-5 w-5 text-primary" />
                                    <span>RBI Ombudsman</span>
                                </CardTitle>
                                <CardDescription>Reserve Bank of India Banking Ombudsman</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3 text-sm">
                                    <p>
                                        <strong>Website:</strong> cms.rbi.org.in
                                    </p>
                                    <p>
                                        <strong>Email:</strong> ombudsman@rbi.org.in
                                    </p>
                                    <p>
                                        <strong>Toll Free:</strong> 14448
                                    </p>
                                    <p className="text-muted-foreground">
                                        You can file a complaint if your grievance is not resolved within 30 days or if you are not
                                        satisfied with the resolution.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <AlertCircle className="h-5 w-5 text-primary" />
                                    <span>Consumer Forum</span>
                                </CardTitle>
                                <CardDescription>National Consumer Disputes Redressal Commission</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3 text-sm">
                                    <p>
                                        <strong>Website:</strong> ncdrc.nic.in
                                    </p>
                                    <p>
                                        <strong>Helpline:</strong> 1800-11-4000
                                    </p>
                                    <p className="text-muted-foreground">
                                        You can approach the consumer forum for disputes related to deficiency in service or unfair trade
                                        practices.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Important Notes */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <Card className="border-primary/20">
                            <CardHeader>
                                <CardTitle className="text-2xl">Important Guidelines</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-sm">
                                            <strong>Documentation:</strong> Please provide all relevant documents including loan agreement,
                                            correspondence, and transaction details when filing a complaint.
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-sm">
                                            <strong>Reference Number:</strong> You will receive a unique reference number for tracking your
                                            complaint status.
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-sm">
                                            <strong>Communication:</strong> We will keep you informed about the progress of your complaint via
                                            SMS, email, or phone calls.
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-sm">
                                            <strong>No Charges:</strong> There are no charges for filing a grievance through our internal
                                            mechanism.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Need to File a Complaint?</h2>
                    <p className="text-xl text-primary-foreground/80 text-pretty mb-8 max-w-2xl mx-auto">
                        We're here to help resolve your concerns. Contact our customer service team to get started.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary">
                            Call Support: +91 98765 43210
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                        >
                            Email: support@Jumbo Money.com
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
