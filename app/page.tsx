"use client"

import { useState } from "react"
import Image from "next/image"
import LoginModal from "@/components/login-modal"
import SignupModal from "@/components/signup-modal"
import { ChevronDown } from "lucide-react"

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [activeSlide, setActiveSlide] = useState(2)

  const handleLoginClick = () => {
    setShowLoginModal(true)
    setShowSignupModal(false)
  }

  const handleSignupClick = () => {
    setShowSignupModal(true)
    setShowLoginModal(false)
  }

  const closeModals = () => {
    setShowLoginModal(false)
    setShowSignupModal(false)
  }

  return (
    <main className="relative min-h-screen">
      {/* Background Image Grid */}
      <div className="absolute inset-0 grid grid-cols-5 gap-2 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="relative h-full">
            <Image
              src={`/placeholder.svg?height=600&width=300`}
              alt="Pinterest inspiration"
              width={300}
              height={600}
              className="object-cover h-full w-full"
            />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Get your next</h1>
        <h2 className="text-5xl font-bold text-[#4a95d0] mb-8">new look outfit</h2>

        {/* Carousel Indicators */}
        <div className="flex space-x-2 mt-4">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                activeSlide === index ? "w-6 bg-[#4a95d0]" : "w-2 bg-gray-300"
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* How it works section */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#ffffb3] py-3 px-4 flex justify-center items-center">
          <span className="font-medium">Here's how it works</span>
          <ChevronDown className="ml-1 h-5 w-5" />
        </div>
      </div>

      {/* Modals */}
      {showLoginModal && <LoginModal onClose={closeModals} onSignupClick={handleSignupClick} />}
      {showSignupModal && <SignupModal onClose={closeModals} onLoginClick={handleLoginClick} />}
    </main>
  )
}
