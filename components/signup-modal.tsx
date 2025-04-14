"use client"

import { useState } from "react"
import { X, Eye, EyeOff, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

interface SignupModalProps {
  onClose: () => void
  onLoginClick: () => void
}

export default function SignupModal({ onClose, onLoginClick }: SignupModalProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl max-w-md w-full relative p-8 max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>

        <div className="flex flex-col items-center mb-4">
          <svg className="h-10 w-10 text-[#e60023]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.43.04-3.47l1.42-6.04s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.51.77 1.51 1.7 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.06-4.88-5-4.88-3.4 0-5.39 2.56-5.39 5.2 0 1.03.4 2.13.9 2.73.1.12.11.22.08.34l-.34 1.36c-.05.22-.18.27-.4.16-1.5-.7-2.43-2.89-2.43-4.65 0-3.78 2.75-7.26 7.92-7.26 4.17 0 7.4 2.97 7.4 6.93 0 4.14-2.6 7.46-6.22 7.46-1.21 0-2.35-.63-2.74-1.37l-.75 2.85c-.27 1.04-1 2.35-1.49 3.15A12 12 0 1 0 12 0z" />
          </svg>
          <h1 className="text-3xl font-semibold mt-4">Welcome to Pinterest</h1>
          <p className="text-gray-600 mt-1">Find new ideas to try</p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="signup-email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input id="signup-email" type="email" placeholder="Email" className="w-full rounded-2xl" />
          </div>

          <div>
            <label htmlFor="signup-password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <Input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full rounded-2xl pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-1">
              <label htmlFor="birthdate" className="block text-sm font-medium">
                Birthdate
              </label>
              <div className="ml-1 rounded-full bg-gray-300 w-5 h-5 flex items-center justify-center text-xs text-white">
                i
              </div>
            </div>
            <div className="relative">
              <Input id="birthdate" type="text" placeholder="dd/mm/yyyy" className="w-full rounded-2xl pr-10" />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
          </div>

          <Button type="submit" className="w-full bg-[#e60023] hover:bg-[#ad081b] text-white rounded-full py-6">
            Continue
          </Button>
        </form>

        <div className="my-4 text-center text-sm text-gray-500">OR</div>

        <div className="flex items-center mb-4">
          <div className="flex items-center space-x-2 border rounded-full px-3 py-2 w-full">
            <div className="h-6 w-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs">
              F
            </div>
            <div className="flex-1 text-sm">
              <div>Continue as Faith</div>
              <div className="text-xs text-gray-500">faithmico25@gmail.com</div>
            </div>
            <svg className="h-5 w-5" viewBox="0 0 48 48" fill="none">
              <path
                fill="#4285F4"
                d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
              />
              <path
                fill="#34A853"
                d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
              />
              <path
                fill="#FBBC05"
                d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
              />
              <path
                fill="#EA4335"
                d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
              />
            </svg>
          </div>
        </div>

        <div className="text-xs text-center text-gray-600 mt-4">
          By continuing, you agree to Pinterest's{" "}
          <Link href="#" className="text-gray-700 hover:underline">
            Terms of Service
          </Link>{" "}
          and acknowledge you've read our{" "}
          <Link href="#" className="text-gray-700 hover:underline">
            Privacy Policy
          </Link>
          ,{" "}
          <Link href="#" className="text-gray-700 hover:underline">
            Notice at collection
          </Link>
          .
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm">
            Already a member?{" "}
            <button onClick={onLoginClick} className="text-gray-700 font-semibold hover:underline">
              Log in
            </button>
          </p>
        </div>

        <div className="mt-6 py-3 text-center border-t">
          <p className="text-sm font-medium">Create a free business account</p>
        </div>
      </div>
    </div>
  )
}
