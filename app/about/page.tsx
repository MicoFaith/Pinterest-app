import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* About Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <svg className="h-8 w-8 text-[#e60023]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.43.04-3.47l1.42-6.04s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.51.77 1.51 1.7 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.06-4.88-5-4.88-3.4 0-5.39 2.56-5.39 5.2 0 1.03.4 2.13.9 2.73.1.12.11.22.08.34l-.34 1.36c-.05.22-.18.27-.4.16-1.5-.7-2.43-2.89-2.43-4.65 0-3.78 2.75-7.26 7.92-7.26 4.17 0 7.4 2.97 7.4 6.93 0 4.14-2.6 7.46-6.22 7.46-1.21 0-2.35-.63-2.74-1.37l-.75 2.85c-.27 1.04-1 2.35-1.49 3.15A12 12 0 1 0 12 0z" />
                </svg>
                <span className="ml-2 text-xl font-semibold">Newsroom</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/blog" className="text-gray-900 hover:text-gray-600 font-medium">
                News
              </Link>
              <Link href="#" className="text-gray-900 hover:text-gray-600 font-medium border-b-2 border-black">
                Company
              </Link>
              <Link href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                Impact
              </Link>
              <Link href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                Press assets
              </Link>
              <Link href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold">
                Get inspired{" "}
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Inspiration"
                  width={120}
                  height={60}
                  className="inline-block"
                />
              </h1>
              <h1 className="text-5xl font-bold">
                Then get started{" "}
                <span className="inline-flex items-center justify-center bg-green-500 rounded-full w-16 h-16">
                  <Check className="w-8 h-8 text-white" />
                </span>
              </h1>
              <h1 className="text-5xl font-bold">
                All on{" "}
                <svg className="inline-block h-16 w-16 text-[#e60023]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.43.04-3.47l1.42-6.04s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.51.77 1.51 1.7 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.06-4.88-5-4.88-3.4 0-5.39 2.56-5.39 5.2 0 1.03.4 2.13.9 2.73.1.12.11.22.08.34l-.34 1.36c-.05.22-.18.27-.4.16-1.5-.7-2.43-2.89-2.43-4.65 0-3.78 2.75-7.26 7.92-7.26 4.17 0 7.4 2.97 7.4 6.93 0 4.14-2.6 7.46-6.22 7.46-1.21 0-2.35-.63-2.74-1.37l-.75 2.85c-.27 1.04-1 2.35-1.49 3.15A12 12 0 1 0 12 0z" />
                </svg>{" "}
                Pinterest
              </h1>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-medium mb-8">About Pinterest</h2>
            <h3 className="text-4xl font-bold mb-8">
              Pinterest is a visual search and discovery platform for finding inspiration.
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-6">
                  People come to Pinterest to find ideas to try, buy and apply to their lives. It's like a visual
                  discovery engine for finding recipes, home ideas, style inspiration, DIY projects and more.
                </p>
                <p className="text-lg mb-6">
                  On Pinterest, you can collect and organize your ideas in a way that makes sense to you. Create boards
                  for specific projects or interests, and save Pins (visual bookmarks) to those boards.
                </p>
              </div>
              <div>
                <p className="text-lg mb-6">
                  Pinterest helps you discover ideas with recommendations based on your interests and activity. The more
                  you use Pinterest, the better it gets at showing you content you'll love.
                </p>
                <p className="text-lg mb-6">
                  Founded in 2010, Pinterest has grown to serve hundreds of millions of monthly users around the world,
                  with billions of ideas saved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Pinterest by the numbers</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-5xl font-bold text-[#e60023] mb-2">450M+</p>
                <p className="text-lg">Monthly active users</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-[#e60023] mb-2">240B+</p>
                <p className="text-lg">Pins saved</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-[#e60023] mb-2">5B+</p>
                <p className="text-lg">Boards created</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-[#e60023] mb-2">100+</p>
                <p className="text-lg">Countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our leadership team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="text-center">
                  <div className="mb-4 mx-auto rounded-full overflow-hidden w-40 h-40">
                    <Image
                      src={`/placeholder.svg?height=160&width=160&text=Leader+${item}`}
                      alt={`Team Member ${item}`}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {item === 1 ? "Jane Smith" : item === 2 ? "John Doe" : `Team Member ${item}`}
                  </h3>
                  <p className="text-gray-600">
                    {item === 1
                      ? "Chief Executive Officer"
                      : item === 2
                        ? "Chief Technology Officer"
                        : `Executive Role ${item}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    What is Pinterest
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Company
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Our Policies</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Copyright
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Brand guidelines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Newsroom
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Pinterest</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-gray-600">
            <p>© 2025 Pinterest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
