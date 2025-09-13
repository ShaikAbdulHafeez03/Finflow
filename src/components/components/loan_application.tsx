"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft } from "lucide-react"



interface FormData {
    name: string
    phone: string
    gstNumber: string
    machineBrand: string
    machineModel: string
    machineType: string
    loanAmount: number
    loanTenure: number
    agreeToTerms: boolean
}

interface LenderOffer {
    id: string
    name: string
    logo: string
    eligibleAmount: number
    loanToValue: number
    tenure: number
    interestRate: number
    category: string
}

const lenderOffers: LenderOffer[] = [
    {
        id: "ugro",
        name: "UGRO",
        logo: "U",
        eligibleAmount: 1500000,
        loanToValue: 80,
        tenure: 5,
        interestRate: 12.3,
        category: "OEM CAT : A",
    },
    {
        id: "yesbank",
        name: "YES BANK",
        logo: "Y",
        eligibleAmount: 1500000,
        loanToValue: 70,
        tenure: 5,
        interestRate: 13.0,
        category: "OEM CAT : A",
    },
    {
        id: "chola",
        name: "Chola",
        logo: "C",
        eligibleAmount: 1500000,
        loanToValue: 60,
        tenure: 5,
        interestRate: 14.0,
        category: "OEM CAT : A",
    },
]

export function LoanApplicationModal() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        gstNumber: "",
        machineBrand: "",
        machineModel: "",
        machineType: "new",
        loanAmount: 600000,
        loanTenure: 24,
        agreeToTerms: false,
    })
    const [otpSent, setOtpSent] = useState(false)

    const handleSendOtp = () => {
        setOtpSent(true)
    }

    const handleContinue = () => {
        if (step === 1) {
            setStep(2)
        }
    }

    const handleBack = () => {
        if (step === 2) {
            setStep(1)
        }
    }

    const calculateEmi = (amount: number, tenure: number, rate: number) => {
        const monthlyRate = rate / 100 / 12
        const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1)
        return Math.round(emi)
    }

    const totalPayable =
        formData.loanAmount +
        (calculateEmi(formData.loanAmount, formData.loanTenure, 12.3) * formData.loanTenure - formData.loanAmount)
    const totalInterest = totalPayable - formData.loanAmount
    const emiAmount = calculateEmi(formData.loanAmount, formData.loanTenure, 12.3)

    return (
        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto" showCloseButton={true}>
            {step === 1 && (
                <>
                    <DialogHeader>
                        <div className="bg-primary text-primary-foreground p-6 -m-6 mb-6 rounded-t-lg">
                            <DialogTitle className="text-xl font-semibold text-center text-white">
                                Check Your Machine Loan Eligibility Instantly!
                            </DialogTitle>
                            <p className="text-center text-primary-foreground/90 mt-2">Compare Multiple Lenders in Seconds</p>
                        </div>
                    </DialogHeader>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Your Name (As per PAN)</Label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <div className="flex gap-2">
                                <Input
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="Enter your phone number"
                                    className="flex-1"
                                />
                                <Button variant="outline" onClick={handleSendOtp} disabled={!formData.phone || otpSent}>
                                    {otpSent ? "OTP Sent" : "Get OTP"}
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="gst">Company GST Number</Label>
                            <Input
                                id="gst"
                                value={formData.gstNumber}
                                onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })}
                                placeholder="Enter GST number"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="brand">Machine Brand/Name</Label>
                            <Input
                                id="brand"
                                value={formData.machineBrand}
                                onChange={(e) => setFormData({ ...formData, machineBrand: e.target.value })}
                                placeholder="Enter machine brand"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="model">Machine Model</Label>
                            <Input
                                id="model"
                                value={formData.machineModel}
                                onChange={(e) => setFormData({ ...formData, machineModel: e.target.value })}
                                placeholder="Enter machine model"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="type">Type (New/Second Hand)</Label>
                            <Select
                                value={formData.machineType}
                                onValueChange={(value) => setFormData({ ...formData, machineType: value })}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="new">New</SelectItem>
                                    <SelectItem value="second-hand">Second Hand</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="terms"
                                checked={formData.agreeToTerms}
                                onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                            />
                            <Label htmlFor="terms" className="text-sm">
                                I agree to Terms & conditions
                            </Label>
                        </div>

                        <Button
                            onClick={handleContinue}
                            className="w-full bg-primary hover:bg-primary/90"
                            disabled={!formData.name || !formData.phone || !formData.agreeToTerms}
                        >
                            Continue
                        </Button>
                    </div>
                </>
            )}

            {step === 2 && (
                <>
                    <DialogHeader>
                        <div className="flex items-center gap-4 mb-4">
                            <Button variant="ghost" size="sm" onClick={handleBack}>
                                <ArrowLeft className="h-4 w-4" />
                            </Button>
                            <DialogTitle className="text-xl font-semibold">Loan Details</DialogTitle>
                        </div>
                    </DialogHeader>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Side - Loan Configuration */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader className="bg-primary text-primary-foreground">
                                    <CardTitle className="text-center text-white">Loan Details</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 space-y-6">
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <Label>Required loan amount</Label>
                                            <span className="font-semibold">₹{formData.loanAmount.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-muted-foreground mb-3">
                                            <span>₹50,000</span>
                                            <span>₹50,00,000</span>
                                        </div>
                                        <Slider
                                            value={[formData.loanAmount]}
                                            onValueChange={(value) => setFormData({ ...formData, loanAmount: value[0] })}
                                            max={5000000}
                                            min={50000}
                                            step={50000}
                                            className="w-full"
                                        />
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <Label>Loan tenure</Label>
                                            <span className="font-semibold">{formData.loanTenure} months</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-muted-foreground mb-3">
                                            <span>6</span>
                                            <span>60 months</span>
                                        </div>
                                        <Slider
                                            value={[formData.loanTenure]}
                                            onValueChange={(value) => setFormData({ ...formData, loanTenure: value[0] })}
                                            max={60}
                                            min={6}
                                            step={6}
                                            className="w-full"
                                        />
                                    </div>

                                    <div className="bg-slate-900 text-white p-2 rounded-lg space-y-2">
                                        <div className="flex justify-between">
                                            <span>Total payable</span>
                                            <span className="font-bold">₹{totalPayable.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>EMI Installment</span>
                                            <span className="font-bold">₹{emiAmount.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Total Interest</span>
                                            <span className="font-bold">₹{totalInterest.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <Button className="w-full bg-primary hover:bg-primary/90">Compare Lenders</Button>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Side - Lender Offers */}
                        <div className="space-y-4">
                            {lenderOffers.map((lender) => (
                                <Card key={lender.id} className="border">
                                    <CardContent className="p-4">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center font-bold text-primary">
                                                    {lender.logo}
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold">{lender.name}</h3>
                                                    <Badge variant="secondary" className="text-xs">
                                                        {lender.category}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <Button size="sm" className="bg-primary hover:bg-primary/90">
                                                Apply
                                            </Button>
                                        </div>

                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Eligible Loan Amount:</span>
                                                <span className="font-semibold">₹{lender.eligibleAmount.toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Loan to Value ({lender.loanToValue}%):</span>
                                                <span className="font-semibold">
                                                    ₹{Math.round((lender.eligibleAmount * lender.loanToValue) / 100).toLocaleString()}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Tenure (up to):</span>
                                                <span className="font-semibold">{lender.tenure} Yrs</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Rate of Interest:</span>
                                                <span className="font-semibold">{lender.interestRate}% p.a</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </DialogContent>
    )
}
