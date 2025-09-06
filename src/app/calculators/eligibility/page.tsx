"use client"

import { useState } from "react"
import { Header } from "@/components/components/header"
import { Footer } from "@/components/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, TrendingUp } from "lucide-react"

interface EligibilityResult {
  eligible: boolean
  maxLoanAmount: number
  recommendedTenure: number
  creditScore: string
  recommendations: string[]
}

export default function EligibilityCalculatorPage() {
  const [formData, setFormData] = useState({
    annualTurnover: "",
    businessVintage: "",
    netProfit: "",
    existingLoans: "",
    creditScore: "",
    ownedProperty: "",
  })
  const [result, setResult] = useState<EligibilityResult | null>(null)
  const [showResult, setShowResult] = useState(false)

  const calculateEligibility = () => {
    const turnover = Number(formData.annualTurnover)
    const vintage = Number(formData.businessVintage)
    const profit = Number(formData.netProfit)
    const existingLoans = Number(formData.existingLoans)
    const creditScore = Number(formData.creditScore)
    const hasProperty = formData.ownedProperty === "yes"

    // Simple eligibility logic
    let eligible = true
    let maxLoanAmount = 0
    let creditScoreCategory = "Good"
    const recommendations: string[] = []

    // Basic eligibility checks
    if (turnover < 10000000) {
      // Less than 1 Crore
      eligible = false
      recommendations.push("Minimum annual turnover of ₹1 Crore required")
    }

    if (vintage < 3) {
      eligible = false
      recommendations.push("Minimum 3 years of business vintage required")
    }

    if (creditScore < 700) {
      eligible = false
      recommendations.push("Minimum credit score of 700 required")
    }

    if (profit <= 0) {
      eligible = false
      recommendations.push("Business should be profitable for loan eligibility")
    }

    // Calculate max loan amount if eligible
    if (eligible) {
      const profitMargin = (profit / turnover) * 100
      let multiplier = 2 // Base multiplier

      // Adjust multiplier based on various factors
      if (creditScore >= 750) {
        multiplier += 0.5
        creditScoreCategory = "Excellent"
      } else if (creditScore >= 700) {
        creditScoreCategory = "Good"
      }

      if (profitMargin > 15) {
        multiplier += 0.5
      } else if (profitMargin < 5) {
        multiplier -= 0.5
      }

      if (hasProperty) {
        multiplier += 0.5
      }

      if (vintage >= 10) {
        multiplier += 0.3
      }

      // Calculate max loan amount (typically 2-3x of annual profit)
      maxLoanAmount = Math.min(profit * multiplier, 10000000) // Cap at 1 Crore for this example

      // Adjust for existing loans
      const availableAmount = maxLoanAmount - existingLoans
      maxLoanAmount = Math.max(0, availableAmount)

      if (maxLoanAmount === 0) {
        eligible = false
        recommendations.push("Existing loan obligations are too high")
      } else {
        recommendations.push(
          `Based on your profile, you're eligible for up to ₹${(maxLoanAmount / 100000).toFixed(1)} Lakhs`,
        )
        recommendations.push("Consider applying for machinery loans with flexible tenure options")
        if (creditScore >= 750) {
          recommendations.push("Your excellent credit score qualifies you for preferential interest rates")
        }
      }
    }

    setResult({
      eligible,
      maxLoanAmount,
      recommendedTenure: eligible ? (maxLoanAmount > 5000000 ? 7 : 5) : 0,
      creditScore: creditScoreCategory,
      recommendations,
    })
    setShowResult(true)
  }

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
              Quick Assessment Tool
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
              <span className="text-primary">Eligibility Estimator</span> for Business Loans
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Get an instant estimate of your loan eligibility. This assessment is indicative and doesn't impact your
              credit score.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <CardTitle className="text-2xl">Business Information</CardTitle>
                  </div>
                  <CardDescription>Please provide accurate information for better assessment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="turnover">Annual Turnover (₹)</Label>
                    <Input
                      id="turnover"
                      type="number"
                      placeholder="e.g., 50000000"
                      value={formData.annualTurnover}
                      onChange={(e) => setFormData({ ...formData, annualTurnover: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vintage">Business Vintage (Years)</Label>
                    <Select
                      value={formData.businessVintage}
                      onValueChange={(value) => setFormData({ ...formData, businessVintage: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select business age" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Less than 1 year</SelectItem>
                        <SelectItem value="2">1-2 years</SelectItem>
                        <SelectItem value="3">3-5 years</SelectItem>
                        <SelectItem value="7">5-10 years</SelectItem>
                        <SelectItem value="12">More than 10 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="profit">Annual Net Profit (₹)</Label>
                    <Input
                      id="profit"
                      type="number"
                      placeholder="e.g., 5000000"
                      value={formData.netProfit}
                      onChange={(e) => setFormData({ ...formData, netProfit: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="existing">Existing Loan EMIs (₹/month)</Label>
                    <Input
                      id="existing"
                      type="number"
                      placeholder="e.g., 50000"
                      value={formData.existingLoans}
                      onChange={(e) => setFormData({ ...formData, existingLoans: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="credit">Credit Score</Label>
                    <Select
                      value={formData.creditScore}
                      onValueChange={(value) => setFormData({ ...formData, creditScore: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select credit score range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="600">Below 600</SelectItem>
                        <SelectItem value="650">600-650</SelectItem>
                        <SelectItem value="700">650-700</SelectItem>
                        <SelectItem value="750">700-750</SelectItem>
                        <SelectItem value="800">Above 750</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="property">Do you own any property?</Label>
                    <Select
                      value={formData.ownedProperty}
                      onValueChange={(value) => setFormData({ ...formData, ownedProperty: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    className="w-full"
                    size="lg"
                    onClick={calculateEligibility}
                    disabled={
                      !formData.annualTurnover ||
                      !formData.businessVintage ||
                      !formData.netProfit ||
                      !formData.creditScore
                    }
                  >
                    Check Eligibility
                  </Button>
                </CardContent>
              </Card>

              {/* Results Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Eligibility Assessment</CardTitle>
                  <CardDescription>
                    {showResult ? "Based on the information provided" : "Results will appear here after assessment"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!showResult ? (
                    <div className="flex items-center justify-center h-64 text-muted-foreground">
                      <div className="text-center">
                        <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Fill in your business details to get instant eligibility results</p>
                      </div>
                    </div>
                  ) : result ? (
                    <div className="space-y-6">
                      {/* Eligibility Status */}
                      <div
                        className={`rounded-lg p-4 text-center ${result.eligible ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
                      >
                        <div className="flex items-center justify-center mb-2">
                          {result.eligible ? (
                            <CheckCircle className="h-8 w-8 text-green-600" />
                          ) : (
                            <AlertCircle className="h-8 w-8 text-red-600" />
                          )}
                        </div>
                        <h3 className={`text-xl font-bold ${result.eligible ? "text-green-800" : "text-red-800"}`}>
                          {result.eligible ? "Congratulations! You are eligible" : "Not eligible at this time"}
                        </h3>
                        {result.eligible && (
                          <p className="text-green-700 mt-1">
                            You can apply for a machinery loan up to {formatCurrency(result.maxLoanAmount)}
                          </p>
                        )}
                      </div>

                      {/* Loan Details */}
                      {result.eligible && (
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-muted/50 rounded-lg p-4 text-center">
                            <div className="text-sm text-muted-foreground mb-1">Max Loan Amount</div>
                            <div className="text-xl font-bold text-primary">{formatCurrency(result.maxLoanAmount)}</div>
                          </div>
                          <div className="bg-muted/50 rounded-lg p-4 text-center">
                            <div className="text-sm text-muted-foreground mb-1">Recommended Tenure</div>
                            <div className="text-xl font-bold">{result.recommendedTenure} Years</div>
                          </div>
                        </div>
                      )}

                      {/* Credit Score */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Credit Score Category</span>
                          <Badge variant={result.creditScore === "Excellent" ? "default" : "secondary"}>
                            {result.creditScore}
                          </Badge>
                        </div>
                      </div>

                      {/* Recommendations */}
                      <div className="space-y-3">
                        <h4 className="font-semibold">Recommendations</h4>
                        <ul className="space-y-2">
                          {result.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      {result.eligible && (
                        <div className="space-y-3">
                          <Button className="w-full" size="lg">
                            Apply for Loan
                          </Button>
                          <Button variant="outline" className="w-full bg-transparent" size="lg">
                            Schedule Consultation
                          </Button>
                        </div>
                      )}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> This is an indicative assessment based on the information provided. Actual
              loan eligibility and terms will be determined after detailed evaluation of your business profile and
              documentation. This assessment does not guarantee loan approval.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
