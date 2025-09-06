"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/components/header"
import { Footer } from "@/components/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Download, Calculator } from "lucide-react"

interface EMIResult {
  emi: number
  totalAmount: number
  totalInterest: number
  monthlyBreakdown: Array<{
    month: number
    emi: number
    principal: number
    interest: number
    balance: number
  }>
}

export default function EMICalculatorPage() {
  const [principal, setPrincipal] = useState(1000000) // 10 Lakh
  const [rate, setRate] = useState(12) // 12%
  const [tenure, setTenure] = useState(5) // 5 years
  const [result, setResult] = useState<EMIResult | null>(null)

  const calculateEMI = () => {
    const monthlyRate = rate / 12 / 100
    const months = tenure * 12

    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)

    const totalAmount = emi * months
    const totalInterest = totalAmount - principal

    // Generate amortization schedule
    const monthlyBreakdown = []
    let balance = principal

    for (let month = 1; month <= months; month++) {
      const interestPayment = balance * monthlyRate
      const principalPayment = emi - interestPayment
      balance = balance - principalPayment

      monthlyBreakdown.push({
        month,
        emi: Math.round(emi),
        principal: Math.round(principalPayment),
        interest: Math.round(interestPayment),
        balance: Math.round(Math.max(0, balance)),
      })
    }

    setResult({
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      monthlyBreakdown,
    })
  }

  useEffect(() => {
    calculateEMI()
  }, [principal, rate, tenure])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Financial Planning Tool
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
              <span className="text-primary">EMI Calculator</span> for Machinery Loans
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Plan your loan repayments with our interactive EMI calculator. Get instant results and detailed
              amortization schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Input Section */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  <CardTitle className="text-2xl">Loan Details</CardTitle>
                </div>
                <CardDescription>Adjust the values below to calculate your EMI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Principal Amount */}
                <div className="space-y-3">
                  <Label htmlFor="principal" className="text-base font-medium">
                    Loan Amount
                  </Label>
                  <div className="space-y-2">
                    <Input
                      id="principal"
                      type="number"
                      value={principal}
                      onChange={(e) => setPrincipal(Number(e.target.value))}
                      className="text-lg"
                    />
                    <Slider
                      value={[principal]}
                      onValueChange={(value) => setPrincipal(value[0])}
                      max={10000000}
                      min={100000}
                      step={50000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₹1 Lakh</span>
                      <span className="font-medium">{formatCurrency(principal)}</span>
                      <span>₹1 Crore</span>
                    </div>
                  </div>
                </div>

                {/* Interest Rate */}
                <div className="space-y-3">
                  <Label htmlFor="rate" className="text-base font-medium">
                    Interest Rate (% per annum)
                  </Label>
                  <div className="space-y-2">
                    <Input
                      id="rate"
                      type="number"
                      value={rate}
                      onChange={(e) => setRate(Number(e.target.value))}
                      step="0.1"
                      className="text-lg"
                    />
                    <Slider
                      value={[rate]}
                      onValueChange={(value) => setRate(value[0])}
                      max={20}
                      min={8}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>8%</span>
                      <span className="font-medium">{rate}%</span>
                      <span>20%</span>
                    </div>
                  </div>
                </div>

                {/* Tenure */}
                <div className="space-y-3">
                  <Label htmlFor="tenure" className="text-base font-medium">
                    Loan Tenure (Years)
                  </Label>
                  <div className="space-y-2">
                    <Input
                      id="tenure"
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="text-lg"
                    />
                    <Slider
                      value={[tenure]}
                      onValueChange={(value) => setTenure(value[0])}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>1 Year</span>
                      <span className="font-medium">{tenure} Years</span>
                      <span>10 Years</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">EMI Calculation Results</CardTitle>
                <CardDescription>Based on your loan parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {result && (
                  <>
                    {/* Key Results */}
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-primary/5 rounded-lg p-4 text-center">
                        <div className="text-sm text-muted-foreground mb-1">Monthly EMI</div>
                        <div className="text-3xl font-bold text-primary">{formatCurrency(result.emi)}</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-muted/50 rounded-lg p-4 text-center">
                          <div className="text-sm text-muted-foreground mb-1">Total Amount</div>
                          <div className="text-xl font-semibold">{formatCurrency(result.totalAmount)}</div>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4 text-center">
                          <div className="text-sm text-muted-foreground mb-1">Total Interest</div>
                          <div className="text-xl font-semibold">{formatCurrency(result.totalInterest)}</div>
                        </div>
                      </div>
                    </div>

                    {/* Loan Breakdown */}
                    <div className="space-y-3">
                      <h4 className="font-semibold">Loan Breakdown</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Principal Amount</span>
                          <span className="font-medium">{formatCurrency(principal)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total Interest</span>
                          <span className="font-medium">{formatCurrency(result.totalInterest)}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="font-semibold">Total Payable</span>
                          <span className="font-semibold">{formatCurrency(result.totalAmount)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button className="w-full" size="lg">
                        Apply for This Loan
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent" size="lg">
                        <Download className="mr-2 h-4 w-4" />
                        Download Amortization Schedule
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Amortization Table */}
      {result && (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-balance mb-4">Amortization Schedule</h2>
                <p className="text-muted-foreground">Detailed month-wise breakdown of your loan repayment</p>
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold">Month</th>
                          <th className="px-4 py-3 text-right font-semibold">EMI</th>
                          <th className="px-4 py-3 text-right font-semibold">Principal</th>
                          <th className="px-4 py-3 text-right font-semibold">Interest</th>
                          <th className="px-4 py-3 text-right font-semibold">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.monthlyBreakdown.slice(0, 12).map((row) => (
                          <tr key={row.month} className="border-b">
                            <td className="px-4 py-3">{row.month}</td>
                            <td className="px-4 py-3 text-right">{formatCurrency(row.emi)}</td>
                            <td className="px-4 py-3 text-right">{formatCurrency(row.principal)}</td>
                            <td className="px-4 py-3 text-right">{formatCurrency(row.interest)}</td>
                            <td className="px-4 py-3 text-right">{formatCurrency(row.balance)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {result.monthlyBreakdown.length > 12 && (
                    <div className="p-4 text-center border-t">
                      <p className="text-muted-foreground mb-4">
                        Showing first 12 months. Download complete schedule for all {result.monthlyBreakdown.length}{" "}
                        months.
                      </p>
                      <Button variant="outline" className="bg-transparent">
                        <Download className="mr-2 h-4 w-4" />
                        Download Complete Schedule
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
