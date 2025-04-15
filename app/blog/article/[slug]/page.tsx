import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Newsroom Header */}
      <header className="bg-white border-b">
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
              <Link href="/blog/company" className="text-gray-900 hover:text-gray-600 font-medium">
                Company
              </Link>
              <Link href="/blog/impact" className="text-gray-900 hover:text-gray-600 font-medium">
                Impact
              </Link>
              <Link href="/blog/press-assets" className="text-gray-900 hover:text-gray-600 font-medium">
                Press assets
              </Link>
              <Link href="/blog/contact" className="text-gray-900 hover:text-gray-600 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Newsroom
        </Link>

        <article>
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Pinterest invites Coachella fans to remix their style with top festival trends for 2025
            </h1>
            <p className="text-gray-600">March 25, 2025</p>
          </div>

          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=500&width=1000"
              alt="Pinterest Coachella collaboration"
              width={1000}
              height={500}
              className="w-full h-auto rounded-xl"
            />
          </div>

          <div className="prose max-w-none">
            <p>
              Pinterest today announced a new partnership with Coachella Valley Music and Arts Festival, offering fans a
              unique way to discover and remix their festival style for the upcoming 2025 event.
            </p>

            <p>
              The collaboration features a dedicated Pinterest board showcasing the top festival fashion trends, beauty
              looks, and accessories that are expected to dominate the desert landscape this year.
            </p>

            <h2>Trending Festival Styles</h2>

            <p>
              According to Pinterest's internal data, searches for "festival outfits" have increased by 43%
              year-over-year, with particular interest in sustainable and vintage-inspired looks.
            </p>

            <p>
              "Festival fashion has always been about self-expression and creativity," said Jane Smith, Pinterest's
              Chief Marketing Officer. "Our partnership with Coachella allows us to help fans discover and curate their
              perfect festival look while showcasing the latest trends that are inspiring our community."
            </p>

            <h2>Interactive Experience</h2>

            <p>
              In addition to digital inspiration, Pinterest will have a physical presence at the festival with an
              interactive installation where attendees can capture and share their unique styles, contributing to a
              real-time trend board that evolves throughout the event.
            </p>

            <p>
              The Pinterest x Coachella board is now live on the platform, featuring curated collections from top
              fashion influencers and designers who will be attending the festival.
            </p>

            <p>
              For more information about this partnership and to explore the trending festival styles, visit
              pinterest.com/coachella2025.
            </p>
          </div>
        </article>
      </main>

      {/* Related Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <Image
                src={`/placeholder.svg?height=300&width=400&text=Related+${item}`}
                alt={`Related Article ${item}`}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {item === 1
                    ? "Pinterest reveals top summer fashion trends"
                    : item === 2
                      ? "How creators are using Pinterest to build their brand"
                      : "Pinterest introduces new shopping features"}
                </h3>
                <p className="text-gray-600 text-sm">March {15 + item}, 2025</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12 py-8">
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
