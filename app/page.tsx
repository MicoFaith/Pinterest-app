"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import LoginModal from "@/components/login-modal"
import SignupModal from "@/components/signup-modal"
import ImageSlideshow from "@/components/image-slideshow"

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)

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
      {/* Image Slideshow */}
      <ImageSlideshow autoplaySpeed={6000} />

      {/* How it works section */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#ffffb3] py-3 px-4 flex justify-center items-center">
        <span className="font-medium">Here's how it works</span>
        <ChevronDown className="ml-1 h-5 w-5" />
      </div>

      {/* Modals */}
      {showLoginModal && <LoginModal onClose={closeModals} onSignupClick={handleSignupClick} />}
      {showSignupModal && <SignupModal onClose={closeModals} onLoginClick={handleLoginClick} />}
    </main>
  )
}
