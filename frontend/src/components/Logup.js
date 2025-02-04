
import { useState } from "react"
import Logo from "./Logo"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import { motion } from "framer-motion"

export default function Home() {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <div className="flex h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
            <div className="m-auto bg-white bg-opacity-10 rounded-3xl shadow-xl backdrop-blur-md max-w-4xl w-full h-[600px] relative overflow-hidden">
                <motion.div
                    className="absolute w-1/2 h-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-3xl shadow-2xl"
                    initial={{ x: isLogin ? 0 : "100%" }}
                    animate={{ x: isLogin ? 0 : "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <div className="flex h-full">
                    {/* Logo Section */}
                    <div className="w-1/2 flex flex-col items-center justify-center p-12 text-white">
                        <Logo />
                        <h2 className="text-4xl font-bold mt-6">Welcome Back</h2>
                        <p className="text-lg mt-4">Enter your details to access your account</p>
                    </div>

                    {/* Form Section */}
                    <div className="w-1/2 flex items-center justify-center">
                        <div className="w-full max-w-md">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                                <h1 className="text-3xl font-bold mb-6 text-center text-white">
                                    {isLogin ? "Login" : "Sign Up"} to WebAlbum
                                </h1>
                                {isLogin ? <LoginForm /> : <SignupForm />}
                                <p className="mt-4 text-center text-white">
                                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                                    <button
                                        onClick={() => setIsLogin(!isLogin)}
                                        className="text-yellow-300 hover:underline font-semibold"
                                    >
                                        {isLogin ? "Sign Up" : "Login"}
                                    </button>
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

