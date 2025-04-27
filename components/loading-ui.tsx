"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface LoadingUIProps {
  isVisible: boolean
}

const LoadingUI = ({ isVisible }: LoadingUIProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-background"
        >
          {/* Left Wall */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-primary"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
          />

          {/* Right Wall */}
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-primary"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
          />

          {/* Logo Container */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            <div className="relative w-32 h-32">
              <Image
                src="/logos/aletech.svg"
                alt="Aletech Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Language Change Text */}
          {/* <motion.div
            className="absolute bottom-12 left-0 right-0 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-lg md:text-xl font-medium tracking-wide text-foreground/80">
              Changing language...
            </span>
          </motion.div> */}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingUI 