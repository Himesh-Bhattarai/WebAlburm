import { motion } from "framer-motion"

export default function Logo() {
    return (
        <motion.div
            className="text-white text-8xl font-bold relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
            <div className="absolute -top-12 -left-12 w-24 h-24 border-8 border-white rounded-full opacity-50"></div>
            <div className="absolute -bottom-12 -right-12 w-24 h-24 border-8 border-white rounded-full opacity-50"></div>
            <span className="relative z-10">WA</span>
        </motion.div>
    )
}

