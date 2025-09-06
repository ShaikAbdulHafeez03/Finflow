"use client"

import type React from "react"

import { useState } from "react"
import { collection, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Phone, Mail, Building, User, Clock, IndianRupee, Trash, CheckCircle, AlertTriangle } from "lucide-react"
import { useRouter } from "next/navigation";

interface DemoData {
    id: string
    name: string
    company: string
    phone: string
    city: string
    equipmentType: string
    loanAmount: string
    preferredDate: string
    preferredTime: string
    createdAt: any
}

interface ContactData {
    id: string
    name: string
    email: string
    phone: string
    subject: string
    message: string
    createdAt: any
}

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [demos, setDemos] = useState<DemoData[]>([])
    const [contacts, setContacts] = useState<ContactData[]>([])
    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const router = useRouter();

    // Simple hardcoded authentication (replace with proper auth in production)
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (username === process.env.NEXT_PUBLIC_USERNAME && password === process.env.NEXT_PUBLIC_PASSWORD) {
            setIsLoggedIn(true)
            fetchData()
            setSuccessMessage("Login Successful: Welcome to the admin dashboard");
            setErrorMessage(null);
        } else {
            setErrorMessage("Login Failed: Invalid username or password");
            setSuccessMessage(null);
        }
    }

    const fetchData = async () => {
        setLoading(true)
        try {
            // Fetch scheduled demos
            const demosQuery = query(collection(db, "demos"), orderBy("createdAt", "desc"))
            const demosSnapshot = await getDocs(demosQuery)
            const demosData = demosSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as DemoData[]
            setDemos(demosData)

            // Fetch contacts
            const contactsQuery = query(collection(db, "contacts"), orderBy("createdAt", "desc"))
            const contactsSnapshot = await getDocs(contactsQuery)
            const contactsData = contactsSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as ContactData[]
            setContacts(contactsData)
        } catch (error) {
            console.error("Error fetching data:", error)
            setErrorMessage("Failed to fetch data from Firebase");
            setSuccessMessage(null);
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        setUsername("")
        setPassword("")
        setDemos([])
        setContacts([])
        setSuccessMessage(null);
        setErrorMessage(null);
        router.push('/admin');
    }

    const formatDate = (timestamp: any) => {
        if (!timestamp) return "N/A"
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
        return date.toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    const handleDeleteDemo = async (id: string) => {
        try {
            await deleteDoc(doc(db, "demos", id));
            setDemos(demos.filter((demo) => demo.id !== id));
            setSuccessMessage("Demo request deleted successfully!");
            setErrorMessage(null);
        } catch (error) {
            console.error("Error deleting demo:", error);
            setErrorMessage("Failed to delete demo request.");
            setSuccessMessage(null);
        }
    };

    const handleDeleteContact = async (id: string) => {
        try {
            await deleteDoc(doc(db, "contacts", id));
            setContacts(contacts.filter((contact) => contact.id !== id));
            setSuccessMessage("Contact inquiry deleted successfully!");
            setErrorMessage(null);
        } catch (error) {
            console.error("Error deleting contact:", error);
            setErrorMessage("Failed to delete contact inquiry.");
            setSuccessMessage(null);
        }
    };


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
                                <Input
                                    id="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter username"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                                Login
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <h1 className="text-2xl font-bold text-blue-900">FinanceFlow Admin Dashboard</h1>
                        <Button onClick={handleLogout} variant="outline">
                            Logout
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Tabs defaultValue="demos" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="demos">Scheduled Demos ({demos.length})</TabsTrigger>
                        <TabsTrigger value="contacts">Contact Inquiries ({contacts.length})</TabsTrigger>
                    </TabsList>

                    <TabsContent value="demos" className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-gray-900">Demo Requests</h2>
                            <Button onClick={fetchData} disabled={loading}>
                                {loading ? "Refreshing..." : "Refresh Data"}
                            </Button>
                        </div>

                        <div className="grid gap-4">
                            {demos.length === 0 ? (
                                <Card>
                                    <CardContent className="p-6 text-center text-gray-500">No demo requests found</CardContent>
                                </Card>
                            ) : (
                                demos.map((demo) => (
                                    <Card key={demo.id}>
                                        <CardHeader>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <CardTitle className="text-lg">{demo.name}</CardTitle>
                                                    <CardDescription className="flex items-center gap-2 mt-1">
                                                        <Building className="h-4 w-4" />
                                                        {demo.company}
                                                    </CardDescription>
                                                </div>
                                                <Badge variant="secondary">{formatDate(demo.createdAt)}</Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex items-center gap-2">
                                                    <Phone className="h-4 w-4 text-blue-600" />
                                                    <span>{demo.phone}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <User className="h-4 w-4 text-blue-600" />
                                                    <span>{demo.city}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Building className="h-4 w-4 text-blue-600" />
                                                    <span>{demo.equipmentType}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <IndianRupee className="h-4 w-4 text-blue-600" />
                                                    <span>{demo.loanAmount}</span>
                                                </div>
                                            </div>
                                            {demo.preferredDate && (
                                                <div className="flex items-center gap-2 pt-2 border-t">
                                                    <Calendar className="h-4 w-4 text-green-600" />
                                                    <span>Preferred: {demo.preferredDate}</span>
                                                    {demo.preferredTime && (
                                                        <>
                                                            <Clock className="h-4 w-4 text-green-600 ml-4" />
                                                            <span>{demo.preferredTime}</span>
                                                        </>
                                                    )}
                                                </div>
                                            )}
                                            <Button variant="destructive" size="sm" onClick={() => handleDeleteDemo(demo.id)}>
                                                Delete <Trash className="ml-2 h-4 w-4" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))
                            )}
                        </div>
                    </TabsContent>

                    <TabsContent value="contacts" className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-gray-900">Contact Inquiries</h2>
                            <Button onClick={fetchData} disabled={loading}>
                                {loading ? "Refreshing..." : "Refresh Data"}
                            </Button>
                        </div>

                        <div className="grid gap-4">
                            {contacts.length === 0 ? (
                                <Card>
                                    <CardContent className="p-6 text-center text-gray-500">No contact inquiries found</CardContent>
                                </Card>
                            ) : (
                                contacts.map((contact) => (
                                    <Card key={contact.id}>
                                        <CardHeader>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <CardTitle className="text-lg">{contact.name}</CardTitle>
                                                    <CardDescription className="flex items-center gap-2 mt-1">
                                                        <Mail className="h-4 w-4" />
                                                        {contact.email}
                                                    </CardDescription>
                                                </div>
                                                <Badge variant="secondary">{formatDate(contact.createdAt)}</Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <Phone className="h-4 w-4 text-blue-600" />
                                                <span>{contact.phone}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-1">Subject:</h4>
                                                <p className="text-gray-700">{contact.subject}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-1">Message:</h4>
                                                <p className="text-gray-700 bg-gray-50 p-3 rounded-md">{contact.message}</p>
                                            </div>
                                            <Button variant="destructive" size="sm" onClick={() => handleDeleteContact(contact.id)}>
                                                Delete <Trash className="ml-2 h-4 w-4" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))
                            )}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
