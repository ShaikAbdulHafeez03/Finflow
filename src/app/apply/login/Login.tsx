// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// // import { useAuth } from "@/context/AuthContext"; // Assuming you have an AuthContext
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// // import { signInWithGoogle } from "@/firebase/firebase"; // Import your Firebase utils
// // import { toast } from "react-hot-toast";

// const LoginPage = () => {
//     // const { user } = useAuth();
//     const router = useRouter();
//     const [isLoading, setIsLoading] = useState(false);

//     // useEffect(() => {
//     //     if (user) {
//     //         router.push("/dashboard"); // Redirect if already logged in
//     //     }
//     // }, [user, router]);

//     const handleGoogleSignIn = async () => {
//         setIsLoading(true);
//         try {
//             await signInWithGoogle();
//             toast.success("Login successful!");
//             router.push("/dashboard");
//         } catch (error: any) {
//             console.error("Google Sign-In Error:", error.message);
//             toast.error(`Login failed: ${error.message}`);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             <Card className="w-full max-w-md">
//                 <CardHeader className="text-center">
//                     <CardTitle className="text-2xl font-bold">Login</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                     <Button
//                         variant="outline"
//                         className="w-full"
//                         onClick={handleGoogleSignIn}
//                         disabled={isLoading}
//                     >
//                         {isLoading ? "Logging in..." : "Sign In with Google"}
//                     </Button>
//                     <div className="text-center text-sm text-gray-500">
//                         Don't have an account?{" "}
//                         <Button variant="link" onClick={() => router.push("/signup")}>
//                             Sign Up
//                         </Button>
//                     </div>
//                 </CardContent>
//             </Card>
//         </div>
//     );
// };

// export default LoginPage;