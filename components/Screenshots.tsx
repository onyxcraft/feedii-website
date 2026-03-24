'use client'

import { useEffect, useRef, useState } from 'react'

export default function Screenshots() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const screenshots = [
    {
      title: 'Food Scanning',
      description: 'Point, shoot, and instantly recognize any food',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Nutrition Breakdown',
      description: 'Detailed macro and micronutrient information',
      gradient: 'from-purple-400 to-purple-600',
    },
    {
      title: 'Daily Dashboard',
      description: 'Track your daily nutrition goals at a glance',
      gradient: 'from-green-400 to-green-600',
    },
    {
      title: 'Weekly Trends',
      description: 'Beautiful charts showing your progress over time',
      gradient: 'from-yellow-400 to-yellow-600',
    },
    {
      title: 'Community',
      description: 'Compete and share with health-conscious friends',
      gradient: 'from-pink-400 to-pink-600',
    },
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">See Feedii in Action</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A glimpse into the beautiful and intuitive interface designed for your health journey.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal Scroll Container */}
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className={`flex-none w-64 snap-center transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="card h-full">
                  {/* Phone Screen Mockup */}
                  <div className="relative aspect-[9/16] mb-4 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <div className={`absolute inset-0 bg-gradient-to-br ${screenshot.gradient} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${screenshot.gradient} opacity-50 blur-xl`}></div>
                    </div>
                    {/* Screen Content Placeholder */}
                    <div className="relative h-full p-4 flex flex-col">
                      <div className="h-8 bg-white/20 dark:bg-gray-700/20 rounded-lg mb-3"></div>
                      <div className="flex-1 bg-white/30 dark:bg-gray-700/30 rounded-lg"></div>
                      <div className="h-12 bg-white/20 dark:bg-gray-700/20 rounded-lg mt-3"></div>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {screenshot.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400 md:hidden">
            Swipe to see more
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
