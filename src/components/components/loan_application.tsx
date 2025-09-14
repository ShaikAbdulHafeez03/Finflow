// LoanApplicationModal.tsx - Corrected flow with sliders on Step 2
"use client"

import { useState, useEffect, useMemo } from "react"
import { collection, getDocs, query } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, Check, ChevronsUpDown, Package, Tag, ShieldCheck, Wallet, Percent } from "lucide-react"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

// --- INTERFACES ---

interface MachineOfferData {
    id: string;
    companyName: string;
    category: string;
    machineType: string;
    LMV_cat?: string;
    advance?: string;
    minRoi?: string;
    maxRoi?: string;
    minTenure?: string;
    maxTenure?: string;
}

interface FormData {
    name: string
    phone: string
    gstNumber: string
    machineCategory: string
    machineType: string
    loanType: string
    loanAmount: number
    loanTenure: number // in months
    interestRate: number // percentage
    agreeToTerms: boolean
}

// --- CONSTANTS & HELPERS ---

const LTV_MAP: { [key: string]: number } = {
    'A': 0.85, 'B': 0.80, 'C': 0.75, 'D': 0.70,
};
const DEFAULT_LTV = 0.70;

const formatToINR = (amount: number) => {
    return amount.toLocaleString('en-IN', {
        style: 'currency', currency: 'INR', maximumFractionDigits: 0,
    });
};

// --- COMPONENT ---

export function LoanApplicationModal() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState<FormData>({
        name: "", phone: "", gstNumber: "", machineCategory: "", machineType: "",
        loanType: "new", loanAmount: 600000, loanTenure: 24,
        interestRate: 12.5, agreeToTerms: false,
    })
    const [otpSent, setOtpSent] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [allMachineData, setAllMachineData] = useState<MachineOfferData[]>([]);
    // --- REVERTED: These states are now populated with ALL machines ---
    const [allCategories, setAllCategories] = useState<string[]>([]);
    const [machinesByCategory, setMachinesByCategory] = useState<Map<string, MachineOfferData[]>>(new Map());
    const [openCategory, setOpenCategory] = useState(false)
    const [openMachine, setOpenMachine] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const machineQuery = query(collection(db, "upoaddata"));
                const querySnapshot = await getDocs(machineQuery);
                const machines = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as MachineOfferData[];
                setAllMachineData(machines);

                // --- REVERTED: Logic to populate dropdowns with all available machines ---
                const categories = new Set<string>();
                const groupedMachines = new Map<string, MachineOfferData[]>();

                machines.forEach(machine => {
                    if (machine.category) {
                        categories.add(machine.category);
                        if (!groupedMachines.has(machine.category)) {
                            groupedMachines.set(machine.category, []);
                        }
                        if (!groupedMachines.get(machine.category)!.some(m => m.machineType === machine.machineType)) {
                            groupedMachines.get(machine.category)!.push(machine);
                        }
                    }
                });

                setAllCategories(Array.from(categories).sort());
                setMachinesByCategory(groupedMachines);
            } catch (error) {
                console.error("Error fetching machine data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredOffers = useMemo(() => {
        if (!formData.machineCategory || !formData.machineType) return [];

        return allMachineData.filter(offer => {
            const machineMatch = offer.category === formData.machineCategory && offer.machineType === formData.machineType;
            if (!machineMatch) return false;

            const extractNumber = (str: string | undefined, defaultValue: number) => {
                if (!str) return defaultValue;
                const match = str.match(/(\d+(\.\d+)?)/);
                return match ? parseFloat(match[0]) : defaultValue;
            };

            const minTenure = extractNumber(offer.minTenure, 0);
            const maxTenure = extractNumber(offer.maxTenure, Infinity);
            const tenureMatch = formData.loanTenure >= minTenure && formData.loanTenure <= maxTenure;

            const minRoi = extractNumber(offer.minRoi, 0);
            const maxRoi = extractNumber(offer.maxRoi, Infinity);
            const roiMatch = formData.interestRate >= minRoi && formData.interestRate <= maxRoi;

            return tenureMatch && roiMatch;
        });
    }, [formData.loanTenure, formData.interestRate, formData.machineCategory, formData.machineType, allMachineData]);

    const handleSendOtp = () => { setOtpSent(true) }
    const handleContinue = () => { if (step === 1) { setStep(2) } }
    const handleBack = () => { if (step === 2) { setStep(1) } }

    const calculateEmi = (amount: number, tenure: number, rate: number) => {
        if (rate <= 0 || tenure <= 0 || amount <= 0) return 0;
        const monthlyRate = rate / 100 / 12;
        const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
        return Math.round(emi);
    }

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
                    {/* --- REVERTED: Sliders removed from Step 1 --- */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Your Name (As per PAN)</Label>
                            <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Enter your full name" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <div className="flex gap-2">
                                <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Enter your phone number" className="flex-1" />
                                <Button variant="outline" onClick={handleSendOtp} disabled={!formData.phone || otpSent}>
                                    {otpSent ? "OTP Sent" : "Get OTP"}
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="gst">Company GST Number</Label>
                            <Input id="gst" value={formData.gstNumber} onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })} placeholder="Enter GST number" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="category">Machine Category</Label>
                            <Popover open={openCategory} onOpenChange={setOpenCategory}>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" role="combobox" className="w-full justify-between font-normal" disabled={isLoading}>
                                        {isLoading ? "Loading categories..." : formData.machineCategory || "Select machine category..."}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                    <Command>
                                        <CommandInput placeholder="Search category..." />
                                        <CommandEmpty>No category found.</CommandEmpty>
                                        <CommandGroup className="max-h-60 overflow-y-auto">
                                            {/* --- REVERTED: Dropdown now shows ALL categories --- */}
                                            {allCategories.map((category) => (
                                                <CommandItem key={category} value={category} onSelect={(currentValue: string) => {
                                                    setFormData({ ...formData, machineCategory: currentValue, machineType: "" });
                                                    setOpenCategory(false);
                                                }}>
                                                    <Check className={cn("mr-2 h-4 w-4", formData.machineCategory === category ? "opacity-100" : "opacity-0")} />
                                                    {category}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="machine">Machine Type/Model</Label>
                            <Popover open={openMachine} onOpenChange={setOpenMachine}>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" role="combobox" className="w-full justify-between font-normal" disabled={!formData.machineCategory}>
                                        {formData.machineType || "Select machine type..."}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                    <Command>
                                        <CommandInput placeholder="Search machine type..." />
                                        <CommandEmpty>No machine found.</CommandEmpty>
                                        <CommandGroup className="max-h-60 overflow-y-auto">
                                            {/* --- REVERTED: Dropdown now shows ALL machines for the selected category --- */}
                                            {(machinesByCategory.get(formData.machineCategory) || []).map((machine) => (
                                                <CommandItem key={machine.id} value={machine.machineType} onSelect={(currentValue: string) => {
                                                    setFormData({ ...formData, machineType: currentValue });
                                                    setOpenMachine(false);
                                                }}>
                                                    <Check className={cn("mr-2 h-4 w-4", formData.machineType === machine.machineType ? "opacity-100" : "opacity-0")} />
                                                    {machine.machineType}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="type">Type (New/Second Hand)</Label>
                            <Select value={formData.loanType} onValueChange={(value) => setFormData({ ...formData, loanType: value })}>
                                <SelectTrigger><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="new">New</SelectItem>
                                    <SelectItem value="second-hand">Second Hand</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" checked={formData.agreeToTerms} onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })} />
                            <Label htmlFor="terms" className="text-sm"> I agree to Terms & conditions </Label>
                        </div>

                        <Button onClick={handleContinue} className="w-full bg-primary hover:bg-primary/90" disabled={!formData.name || !formData.phone || !formData.agreeToTerms || !formData.machineCategory || !formData.machineType}>
                            Continue
                        </Button>
                    </div>
                </>
            )}

            {step === 2 && (
                <>
                    <DialogHeader>
                        <div className="flex items-center gap-4 mb-4">
                            <Button variant="ghost" size="sm" onClick={handleBack}><ArrowLeft className="h-4 w-4" /></Button>
                            <DialogTitle className="text-xl font-semibold">Customize Loan and Compare Offers</DialogTitle>
                        </div>
                    </DialogHeader>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <Card className="bg-gray-50">
                                <CardHeader>
                                    <CardTitle className="text-base">Your Selected Machine</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2"><Tag className="h-4 w-4 text-muted-foreground" /><span className="font-medium">{formData.machineCategory}</span></div>
                                        <div className="flex items-center gap-2"><Package className="h-4 w-4 text-muted-foreground" /><span className="font-medium">{formData.machineType}</span></div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* --- REVERTED: All three sliders are now here in Step 2 --- */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center text-lg">Adjust Your Loan Details</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 space-y-6">
                                    <div>
                                        <div className="flex justify-between items-center mb-2"><Label>Machine Price</Label><span className="font-semibold">{formatToINR(formData.loanAmount)}</span></div>
                                        <Slider value={[formData.loanAmount]} onValueChange={(v) => setFormData({ ...formData, loanAmount: v[0] })} max={5000000} min={50000} step={50000} />
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mb-2"><Label>Loan Tenure</Label><span className="font-semibold">{formData.loanTenure} months</span></div>
                                        <Slider value={[formData.loanTenure]} onValueChange={(v) => setFormData({ ...formData, loanTenure: v[0] })} max={84} min={6} step={3} />
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mb-2"><Label>Rate of Interest (p.a.)</Label><span className="font-semibold">{formData.interestRate.toFixed(1)}%</span></div>
                                        <Slider value={[formData.interestRate]} onValueChange={(v) => setFormData({ ...formData, interestRate: v[0] })} max={22} min={10} step={0.1} />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Matching Offers ({filteredOffers.length})</h3>
                            {filteredOffers.length > 0 ? (
                                filteredOffers.map((offer) => {
                                    const ltvPercent = LTV_MAP[offer.LMV_cat || ''] || DEFAULT_LTV;
                                    const maxFinanceAmount = formData.loanAmount * ltvPercent;
                                    const downPayment = formData.loanAmount - maxFinanceAmount;
                                    const emi = calculateEmi(maxFinanceAmount, formData.loanTenure, formData.interestRate);

                                    return (
                                        <Card key={offer.id} className="border-green-300 border-2 overflow-hidden">
                                            <CardContent className="p-4">
                                                <div className="flex justify-between items-start mb-4">
                                                    <h3 className="font-semibold text-primary text-lg">{offer.companyName}</h3>
                                                    <Button size="sm">Apply Now</Button>
                                                </div>
                                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
                                                    <div className="flex items-center gap-1.5"><Badge variant="outline">LTV CAT</Badge><span className="font-semibold">{offer.LMV_cat || 'N/A'}</span></div>
                                                    <div className="flex items-center gap-1.5"><Badge variant="outline">Advance</Badge><span className="font-semibold">{offer.advance || 'N/A'}</span></div>
                                                    <div className="flex items-center gap-1.5"><Badge variant="outline">ROI</Badge><span className="font-semibold">{`${offer.minRoi}%` || '...'} - {`${offer.maxRoi}%` || '...'}</span></div>
                                                    <div className="flex items-center gap-1.5"><Badge variant="outline">Tenure</Badge><span className="font-semibold">{`${offer.minTenure}` || '...'} - {`${offer.maxTenure} Months` || '...'}</span></div>
                                                </div>
                                            </CardContent>
                                            <div className="bg-muted p-4 space-y-3">
                                                <h4 className="font-semibold text-center">Loan Breakdown</h4>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="flex items-center gap-2 text-muted-foreground"><ShieldCheck className="h-4 w-4" /> Max Finance Amount</span>
                                                    <span className="font-bold text-green-600">{formatToINR(maxFinanceAmount)}</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="flex items-center gap-2 text-muted-foreground"><Wallet className="h-4 w-4" /> Your Down Payment</span>
                                                    <span className="font-bold text-red-600">{formatToINR(downPayment)}</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm pt-2 border-t">
                                                    <span className="flex items-center gap-2 text-muted-foreground"><Percent className="h-4 w-4" /> Monthly EMI</span>
                                                    <span className="font-bold">{formatToINR(emi)}</span>
                                                </div>
                                            </div>
                                        </Card>
                                    );
                                })
                            ) : (
                                <Card className="flex items-center justify-center p-8 bg-gray-50">
                                    <p className="text-center text-muted-foreground">
                                        No offers match your current criteria. <br /> Try adjusting your loan details.
                                    </p>
                                </Card>
                            )}
                        </div>
                    </div>
                </>
            )}
        </DialogContent>
    )
}