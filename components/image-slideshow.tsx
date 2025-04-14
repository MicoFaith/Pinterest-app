"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Define image sets for the slideshow
const imageSets = [
  // Fashion set
  [
    { id: 1, src: "/placeholder.svg?height=800&width=600", alt: "Fashion outfit 1", aspectRatio: "2/3" },
    { id: 2, src: "/placeholder.svg?height=600&width=600", alt: "Fashion outfit 2", aspectRatio: "1/1" },
    { id: 3, src: "/placeholder.svg?height=900&width=600", alt: "Fashion outfit 3", aspectRatio: "2/3" },
    { id: 4, src: "/placeholder.svg?height=700&width=600", alt: "Fashion outfit 4", aspectRatio: "7/6" },
    { id: 5, src: "/placeholder.svg?height=800&width=600", alt: "Fashion outfit 5", aspectRatio: "4/3" },
  ],
  // Home decor set
  [
    { id: 6, src: "/placeholder.svg?height=600&width=600", alt: "Home decor 1", aspectRatio: "1/1" },
    { id: 7, src: "/placeholder.svg?height=900&width=600", alt: "Home decor 2", aspectRatio: "3/2" },
    { id: 8, src: "/placeholder.svg?height=800&width=600", alt: "Home decor 3", aspectRatio: "4/3" },
    { id: 9, src: "/placeholder.svg?height=700&width=600", alt: "Home decor 4", aspectRatio: "7/6" },
    { id: 10, src: "/placeholder.svg?height=800&width=600", alt: "Home decor 5", aspectRatio: "4/3" },
  ],
  // Food set
  [
    { id: 11, src: "/placeholder.svg?height=800&width=600", alt: "Food 1", aspectRatio: "4/3" },
    { id: 12, src: "/placeholder.svg?height=900&width=600", alt: "Food 2", aspectRatio: "3/2" },
    { id: 13, src: "/placeholder.svg?height=600&width=600", alt: "Food 3", aspectRatio: "1/1" },
    { id: 14, src: "/placeholder.svg?height=700&width=600", alt: "Food 4", aspectRatio: "7/6" },
    { id: 15, src: "/placeholder.svg?height=800&width=600", alt: "Food 5", aspectRatio: "4/3" },
  ],
  // Travel set
  [
    { id: 16, src: "/placeholder.svg?height=900&width=600", alt: "Travel 1", aspectRatio: "3/2" },
    { id: 17, src: "/placeholder.svg?height=800&width=600", alt: "Travel 2", aspectRatio: "4/3" },
    { id: 18, src: "/placeholder.svg?height=700&width=600", alt: "Travel 3", aspectRatio: "7/6" },
    { id: 19, src: "/placeholder.svg?height=600&width=600", alt: "Travel 4", aspectRatio: "1/1" },
    { id: 20, src: "/placeholder.svg?height=800&width=600", alt: "Travel 5", aspectRatio: "4/3" },
  ],
]

// Define slideshow themes that correspond to each image set
const slideshowThemes = [
  { heading: "new look outfit", color: "#4a95d0" },
  { heading: "home inspiration", color: "#6a8d73" },
  { heading: "recipe ideas", color: "#e67e22" },
  { heading: "travel destinations", color: "#9b59b6" },
]

interface ImageSlideshowProps {
  autoplaySpeed?: number
}

export default function ImageSlideshow({ autoplaySpeed = 5000 }: ImageSlideshowProps) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return

      setIsTransitioning(true)
      setActiveSlide(index)

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false)
      }, 600)
    },
    [isTransitioning],
  )

  const nextSlide = useCallback(() => {
    goToSlide((activeSlide + 1) % imageSets.length)
  }, [activeSlide, goToSlide, imageSets.length])

  const prevSlide = useCallback(() => {
    goToSlide((activeSlide - 1 + imageSets.length) % imageSets.length)
  }, [activeSlide, goToSlide, imageSets.length])

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, autoplaySpeed)

    return () => clearInterval(interval)
  }, [nextSlide, autoplaySpeed])

  return (
    <div className="relative w-full overflow-hidden">
      {/* Main content with heading */}
      <div className="relative flex flex-col items-center justify-center text-center px-4 py-12 z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Get your next</h1>
        <h2
          className="text-4xl md:text-5xl font-bold mb-8 transition-colors duration-500"
          style={{ color: slideshowThemes[activeSlide].color }}
        >
          {slideshowThemes[activeSlide].heading}
        </h2>

        {/* Carousel Indicators */}
        <div className="flex space-x-2 mt-4">
          {imageSets.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                activeSlide === index ? `w-6 transition-all duration-300 ease-in-out` : "w-2 bg-gray-300"
              }`}
              style={{
                backgroundColor: activeSlide === index ? slideshowThemes[activeSlide].color : undefined,
              }}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Image grid slideshow */}
      <div className="absolute inset-0 -z-10">
        {imageSets.map((imageSet, setIndex) => (
          <div
            key={setIndex}
            className={`absolute inset-0 grid grid-cols-5 gap-2 transition-opacity duration-500 ${
              activeSlide === setIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {imageSet.map((image) => (
              <div key={image.id} className="relative h-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={900}
                  className="object-cover h-full w-full"
                  style={{ aspectRatio: image.aspectRatio }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-20 hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-20 hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}
