import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Explore Header */}
      <header className="border-b sticky top-0 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-3">
            <Link href="/" className="flex items-center mr-4">
              <svg className="h-8 w-8 text-[#e60023]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.43.04-3.47l1.42-6.04s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.51.77 1.51 1.7 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.06-4.88-5-4.88-3.4 0-5.39 2.56-5.39 5.2 0 1.03.4 2.13.9 2.73.1.12.11.22.08.34l-.34 1.36c-.05.22-.18.27-.4.16-1.5-.7-2.43-2.89-2.43-4.65 0-3.78 2.75-7.26 7.92-7.26 4.17 0 7.4 2.97 7.4 6.93 0 4.14-2.6 7.46-6.22 7.46-1.21 0-2.35-.63-2.74-1.37l-.75 2.85c-.27 1.04-1 2.35-1.49 3.15A12 12 0 1 0 12 0z" />
              </svg>
              <span className="ml-1 text-[#e60023] font-bold text-xl">Pinterest</span>
            </Link>
            <Button variant="ghost" className="font-semibold bg-black text-white rounded-full">
              Explore
            </Button>
            <div className="relative flex-1 mx-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for easy dinners, fashion, etc."
                className="w-full pl-10 py-2 rounded-full border border-gray-200"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="rounded-full">
                Log in
              </Button>
              <Button className="bg-[#e60023] hover:bg-[#ad081b] text-white rounded-full">Sign up</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="mb-12">
            <h1 className="text-4xl font-bold mb-8">Explore the best of Pinterest</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="rounded-2xl overflow-hidden relative group">
                <Image
                  src="/placeholder.svg?height=500&width=400&text=Nails"
                  alt="Rounded nails"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <p className="text-sm mb-1">Pretty and practical</p>
                  <h2 className="text-2xl font-bold">Rounded nails</h2>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl overflow-hidden relative group">
                <Image
                  src="/placeholder.svg?height=500&width=400&text=Travel"
                  alt="Solo travel ideas"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <p className="text-sm mb-1">Adventure for one</p>
                  <h2 className="text-2xl font-bold">Solo travel ideas</h2>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl overflow-hidden relative group">
                <Image
                  src="/placeholder.svg?height=500&width=400&text=Fashion"
                  alt="Wrong jacket theory"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <p className="text-sm mb-1">Better together</p>
                  <h2 className="text-2xl font-bold">Wrong jacket theory</h2>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="rounded-full px-8">
                See more
              </Button>
            </div>
          </section>

          {/* Categories Section */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Browse by category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Home Decor",
                "Fashion",
                "Beauty",
                "Food & Drink",
                "Travel",
                "DIY & Crafts",
                "Gardening",
                "Fitness",
                "Art",
                "Technology",
                "Quotes",
                "Photography",
              ].map((category, index) => (
                <Link
                  key={index}
                  href="#"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-center transition-colors"
                >
                  <div className="w-full aspect-square rounded-lg bg-white mb-3 flex items-center justify-center overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=120&width=120&text=${category}`}
                      alt={category}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium">{category}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <svg className="h-8 w-8 text-[#e60023]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.43.04-3.47l1.42-6.04s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.51.77 1.51 1.7 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.06-4.88-5-4.88-3.4 0-5.39 2.56-5.39 5.2 0 1.03.4 2.13.9 2.73.1.12.11.22.08.34l-.34 1.36c-.05.22-.18.27-.4.16-1.5-.7-2.43-2.89-2.43-4.65 0-3.78 2.75-7.26 7.92-7.26 4.17 0 7.4 2.97 7.4 6.93 0 4.14-2.6 7.46-6.22 7.46-1.21 0-2.35-.63-2.74-1.37l-.75 2.85c-.27 1.04-1 2.35-1.49 3.15A12 12 0 1 0 12 0z" />
              </svg>
              <span className="ml-2 text-gray-900 font-semibold">© 2025 Pinterest</span>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
