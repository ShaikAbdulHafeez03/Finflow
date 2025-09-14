"use client"

import type React from "react"
import { useState, useEffect, useMemo } from "react"
import { collection, getDocs, query, orderBy, addDoc, deleteDoc, doc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Calendar,
  Phone,
  Mail,
  Building,
  Clock,
  IndianRupee,
  Upload,
  FileText,
  Trash2,
  MessageSquare,
  MapPin,
  Wrench,
  Tag,
} from "lucide-react"
import { toast } from "sonner"


// --- INTERFACES ---

interface DemoData {
  id: string;
  name: string;
  company: string;
  phone: string;
  city: string;
  equipmentType: string;
  loanAmount: string;
  preferredDate: string;
  preferredTime: string;
  createdAt: any;
}

interface ContactData {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: any;
}

interface MachineData {
  id: string;
  companyName: string;
  category: string;
  machineType: string;
  LMV_cat: string;
  minRoi?: string;
  maxRoi?: string;
  minTenure?: string;
  maxTenure?: string;
  advance?: string;
  createdAt: any;
}

interface GroupedCompanies {
  [companyName: string]: {
    [category: string]: MachineData[];
  };
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [demos, setDemos] = useState<DemoData[]>([])
  const [contacts, setContacts] = useState<ContactData[]>([])
  const [companies, setCompanies] = useState<MachineData[]>([])
  const [csvFile, setCsvFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(true)

  const groupedCompanies = useMemo(() => {
    return companies.reduce<GroupedCompanies>((acc, machine) => {
      const { companyName, category } = machine;
      if (!acc[companyName]) {
        acc[companyName] = {};
      }
      if (!acc[companyName][category]) {
        acc[companyName][category] = [];
      }
      acc[companyName][category].push(machine);
      return acc;
    }, {});
  }, [companies]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true)
      fetchData()
      toast.success("Login Successful", {
        description: "Welcome to the admin dashboard",
      })
    } else {
      toast.error("Login Failed", {
        description: "Invalid username or password",
      })
    }
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const demosQuery = query(collection(db, "demos"), orderBy("createdAt", "desc"));
      const demosSnapshot = await getDocs(demosQuery);
      setDemos(demosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as DemoData[]);

      const contactsQuery = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
      const contactsSnapshot = await getDocs(contactsQuery);
      setContacts(contactsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as ContactData[]);

      const companiesQuery = query(collection(db, "upoaddata"), orderBy("companyName", "asc"));
      const companiesSnapshot = await getDocs(companiesQuery);
      setCompanies(companiesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as MachineData[]);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch data", { description: error instanceof Error ? error.message : "An unknown error occurred." });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (collectionName: 'demos' | 'contacts' | 'upoaddata', docId: string) => {
    if (!window.confirm("Are you sure you want to delete this item? This action cannot be undone.")) {
      return;
    }
    const toastId = toast.loading("Deleting item...");
    try {
      await deleteDoc(doc(db, collectionName, docId));
      if (collectionName === 'demos') {
        setDemos(prev => prev.filter(item => item.id !== docId));
      } else if (collectionName === 'contacts') {
        setContacts(prev => prev.filter(item => item.id !== docId));
      } else if (collectionName === 'upoaddata') {
        setCompanies(prev => prev.filter(item => item.id !== docId));
      }
      toast.success("Item deleted successfully", { id: toastId });
    } catch (error) {
      console.error("Error deleting document: ", error);
      toast.error("Failed to delete item", {
        id: toastId,
        description: error instanceof Error ? error.message : "An unknown error occurred."
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "text/csv") {
      setCsvFile(file);
    } else {
      setCsvFile(null);
      toast.warning("Invalid File Type", { description: "Please select a valid CSV file." });
    }
  };

  const parseCSV = (csvText: string): { [key: string]: string }[] => {
    const lines = csvText.trim().split("\n")
    if (lines.length < 2) return []
    const headers = lines[0].split(",").map((h) => h.trim().toLowerCase().replace(/\s+/g, ""))
    const dataLines = lines.slice(1)

    return dataLines.map((line) => {
      const values = line.split(",").map((v) => v.trim())
      const row: { [key: string]: string } = {}
      headers.forEach((header, index) => {
        row[header] = values[index] || ""
      })
      return row
    })
  }

  const handleFileUpload = async () => {
    if (!csvFile) {
      toast.warning("No File Selected", { description: "Please select a CSV file to upload." })
      return
    }

    const promise = () => new Promise<number>(async (resolve, reject) => {
      try {
        setUploading(true)
        const csvText = await csvFile.text()
        const parsedData = parseCSV(csvText)

        if (parsedData.length === 0) {
          throw new Error("CSV file is empty or formatted incorrectly.")
        }

        const firstRow = parsedData[0];
        if (!firstRow || !('companyname' in firstRow)) {
          throw new Error("CSV file is missing the required 'Company Name' column.")
        }

        for (const row of parsedData) {
          const documentData: Omit<MachineData, "id"> = {
            companyName: row.companyname || "Unnamed Company",
            category: row.category || "Uncategorized",
            machineType: row.machinetype || "Unknown Machine",
            LMV_cat: row.lmv_cat || "N/A",
            minRoi: row.minroi || "",
            maxRoi: row.maxroi || "",
            minTenure: row.mintenure || "",
            maxTenure: row.maxtenure || "",
            advance: row.advance || "",
            createdAt: new Date(),
          }
          await addDoc(collection(db, "upoaddata"), documentData)
        }
        resolve(parsedData.length)
      } catch (error) {
        reject(error)
      } finally {
        setCsvFile(null)
        const fileInput = document.getElementById("csv-file") as HTMLInputElement
        if (fileInput) fileInput.value = ""
        setUploading(false)
        fetchData()
      }
    });

    toast.promise(promise, {
      loading: `Uploading and processing CSV file...`,
      success: (count) => `Successfully uploaded ${count} records.`,
      error: (err) => `Upload Failed: ${err instanceof Error ? err.message : 'Unknown error'}`,
    });
  }

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "N/A"
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString("en-IN", {
      year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
    })
  }

  // --- RENDER ---
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-blue-900">Admin Login</CardTitle>
            <CardDescription>Enter your credentials to access the admin dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Login</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-blue-900">FinanceFlow Admin Dashboard</h1>
            <Button onClick={handleLogout} variant="outline">Logout</Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="companies" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="demos">Scheduled Demos ({demos.length})</TabsTrigger>
            <TabsTrigger value="contacts">Contact Inquiries ({contacts.length})</TabsTrigger>
            <TabsTrigger value="companies">Machine Data ({companies.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="demos">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {loading && <p>Loading demos...</p>}
              {!loading && demos.length === 0 && (
                <Card className="md:col-span-2 lg:col-span-3"><CardContent className="p-6 text-center text-gray-500">No scheduled demos found.</CardContent></Card>
              )}
              {!loading && demos.map((demo) => (
                <Card key={demo.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{demo.name}</CardTitle>
                        <CardDescription>{demo.company}</CardDescription>
                      </div>
                      <Button variant="destructive" size="icon" onClick={() => handleDelete('demos', demo.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 flex-grow">
                    <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-gray-500" /><span>{demo.phone}</span></div>
                    <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gray-500" /><span>{demo.city}</span></div>
                    <div className="flex items-center gap-2"><Wrench className="h-4 w-4 text-gray-500" /><span>{demo.equipmentType}</span></div>
                    <div className="flex items-center gap-2"><IndianRupee className="h-4 w-4 text-gray-500" /><span>Loan: <b>{demo.loanAmount}</b></span></div>
                    <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-gray-500" /><span>{demo.preferredDate} at {demo.preferredTime}</span></div>
                  </CardContent>
                  <div className="text-xs text-gray-400 text-right p-2 border-t mt-2">
                    Submitted on: {formatDate(demo.createdAt)}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contacts">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {loading && <p>Loading contacts...</p>}
              {!loading && contacts.length === 0 && (
                <Card className="md:col-span-2 lg:col-span-3"><CardContent className="p-6 text-center text-gray-500">No contact inquiries found.</CardContent></Card>
              )}
              {!loading && contacts.map((contact) => (
                <Card key={contact.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{contact.name}</CardTitle>
                        <CardDescription>{contact.subject}</CardDescription>
                      </div>
                      <Button variant="destructive" size="icon" onClick={() => handleDelete('contacts', contact.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 flex-grow">
                    <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-gray-500" /><span>{contact.email}</span></div>
                    <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-gray-500" /><span>{contact.phone}</span></div>
                    <div className="flex items-start gap-2 pt-2 border-t mt-2">
                      <MessageSquare className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{contact.message}</p>
                    </div>
                  </CardContent>
                  <div className="text-xs text-gray-400 text-right p-2 border-t mt-2">
                    Submitted on: {formatDate(contact.createdAt)}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="companies" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Upload className="h-5 w-5" /> Upload Company Data</CardTitle>
                <CardDescription>
                  Choose a CSV file to upload. The file **must include a "Company Name" column**, along with others like Category and Machine Type.
                  For ranges, please use the column headers: `Min Tenure`, `Max Tenure`, `Min ROI`, and `Max ROI`.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="csv-file">CSV File</Label>
                  <Input id="csv-file" type="file" accept=".csv" onChange={handleFileChange} disabled={uploading} />
                </div>
                <Button onClick={handleFileUpload} disabled={!csvFile || uploading} className="w-full">
                  {uploading ? "Uploading..." : "Upload CSV"}
                </Button>
              </CardContent>
            </Card>

            <div>
              {loading && <p>Loading machine data...</p>}
              {!loading && companies.length === 0 && (
                <Card><CardContent className="p-6 text-center text-gray-500">No machine data found. Upload a CSV file to get started.</CardContent></Card>
              )}
              {!loading && (
                <Accordion type="multiple" className="w-full">
                  {Object.keys(groupedCompanies).map(companyName => (
                    <AccordionItem value={companyName} key={companyName}>
                      <AccordionTrigger className="text-xl font-semibold text-blue-800 bg-blue-50 px-4 rounded-t-lg">
                        <div className="flex items-center gap-2"><Building className="h-5 w-5" /> {companyName}</div>
                      </AccordionTrigger>
                      <AccordionContent className="p-4 bg-white">
                        <Accordion type="multiple" className="w-full">
                          {Object.keys(groupedCompanies[companyName]).map(category => (
                            <AccordionItem value={`${companyName}-${category}`} key={`${companyName}-${category}`}>
                              <AccordionTrigger className="font-medium text-gray-700">
                                <div className="flex items-center gap-2"><Tag className="h-4 w-4" /> {category}</div>
                              </AccordionTrigger>
                              <AccordionContent className="pt-4 space-y-4">
                                {groupedCompanies[companyName][category].map(item => (
                                  <Card key={item.id}>
                                    <CardHeader>
                                      <div className="flex justify-between items-start">
                                        <div>
                                          <CardTitle className="text-lg">{item.machineType}</CardTitle>
                                        </div>
                                        <Button variant="destructive" size="icon" onClick={() => handleDelete('upoaddata', item.id)}>
                                          <Trash2 className="h-4 w-4" />
                                        </Button>
                                      </div>
                                    </CardHeader>
                                    <CardContent>
                                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {(item.minRoi || item.maxRoi) && (
                                          <div className="flex items-center gap-2">
                                            <IndianRupee className="h-4 w-4 text-gray-500" />
                                            <span>ROI: <b>{item.minRoi || 'N/A'} - {item.maxRoi || 'N/A'}</b></span>
                                          </div>
                                        )}
                                        {item.LMV_cat && <div className="flex items-center gap-2"><Tag className="h-4 w-4 text-gray-500" /><span>LMV Category: <b>{item.LMV_cat}</b></span></div>}
                                        {(item.minTenure || item.maxTenure) && (
                                          <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-gray-500" />
                                            <span>Tenure: <b>{item.minTenure || 'N/A'} - {item.maxTenure || 'N/A'}</b></span>
                                          </div>
                                        )}
                                        {item.advance && <div className="flex items-center gap-2"><FileText className="h-4 w-4 text-gray-500" /><span>Advance: <b>{item.advance}</b></span></div>}
                                      </div>
                                    </CardContent>
                                  </Card>
                                ))}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}