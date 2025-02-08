import { useState } from "react"
import { motion } from "framer-motion"
import React from "react"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login:", { email, password })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block mb-1 text-white">
          Email
        </label>
        <motion.input
          whileFocus={{ scale: 1.05 }}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 text-white placeholder-gray-300"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-1 text-white">
          Password
        </label>
        <motion.input
          whileFocus={{ scale: 1.05 }}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 text-white placeholder-gray-300"
          placeholder="Enter your password"
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300"
      >
        Login
      </motion.button>
    </form>
  )
}

