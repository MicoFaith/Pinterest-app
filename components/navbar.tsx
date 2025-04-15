"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import LoginModal from "@/components/login-modal"
import SignupModal from "@/components/signup-modal"

export default function Navbar() {
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
    <nav className="flex items-center justify-between px-4 py-3 bg-white z-20 relative">
      <div className="flex items-center">
        <Link href="/" className="flex items-center mr-6">
          <svg className="h-8 w-8 text-[#e60023]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.43.04-3.47l1.42-6.04s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.51.77 1.51 1.7 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.06-4.88-5-4.88-3.4 0-5.39 2.56-5.39 5.2 0 1.03.4 2.13.9 2.73.1.12.11.22.08.34l-.34 1.36c-.05.22-.18.27-.4.16-1.5-.7-2.43-2.89-2.43-4.65 0-3.78 2.75-7.26 7.92-7.26 4.17 0 7.4 2.97 7.4 6.93 0 4.14-2.6 7.46-6.22 7.46-1.21 0-2.35-.63-2.74-1.37l-.75 2.85c-.27 1.04-1 2.35-1.49 3.15A12 12 0 1 0 12 0z" />
          </svg>
          <span className="ml-1 text-[#e60023] font-bold text-xl">Pinterest</span>
        </Link>
        <Button variant="ghost" className="font-semibold">
          Explore
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="ghost" className="font-semibold">
          About
        </Button>
        <Button variant="ghost" className="font-semibold">
          Business
        </Button>
        <Link href="/blog" className="font-semibold">
          <Button variant="ghost" className="font-semibold">
            Blog
          </Button>
        </Link>
        <Button
          className="bg-[#e60023] hover:bg-[#ad081b] text-white rounded-full font-semibold"
          onClick={handleLoginClick}
        >
          Log in
        </Button>
        <Button variant="outline" className="rounded-full font-semibold" onClick={handleSignupClick}>
          Sign up
        </Button>
      </div>

      {/* Modals */}
      {showLoginModal && <LoginModal onClose={closeModals} onSignupClick={handleSignupClick} />}
      {showSignupModal && <SignupModal onClose={closeModals} onLoginClick={handleLoginClick} />}
    </nav>
  )
}
