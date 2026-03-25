'use client'

import { useEffect, useRef, useState } from 'react'

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([false, false, false])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate steps one by one
            setTimeout(() => setVisibleSteps([true, false, false]), 100)
            setTimeout(() => setVisibleSteps([true, true, false]), 300)
            setTimeout(() => setVisibleSteps([true, true, true]), 500)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      icon: '📸',
      title: 'Snap',
      subtitle: 'Capture in Seconds',
      description: 'Photo, barcode, or text — log any meal in seconds. Works for home cooking, takeout, restaurant menus, and cafeteria food.',
      tag: '55% of users quit because it\'s too slow. Feedii is instant.',
    },
    {
      icon: '🧠',
      title: 'Analyze',
      subtitle: 'AI That Learns You',
      description: 'Get instant calories, macros, and nutrients. Feedii\'s AI remembers your meals — the more you use it, the more accurate it gets.',
      tag: 'Confidence score + one-tap correction → AI improves every time.',
    },
    {
      icon: '🎯',
      title: 'Guide',
      subtitle: 'What to Eat Next',
      description: 'Feedii doesn\'t just record — it tells you what to eat next based on your goals, remaining budget, and what you actually enjoy.',
      tag: '62% of users said next-meal suggestions would help them stay on track.',
    },
  ]

  return (
    <section id="how-it-works" ref={sectionRef} className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Most apps just record. Feedii <strong>guides</strong> you — from your first snap to your next meal decision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-500 ${
                visibleSteps[index]
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="card h-full pt-8">
                <div className="text-6xl mb-4 text-center">{step.icon}</div>
                <h3 className="heading-3 mb-1 text-center">{step.title}</h3>
                <p className="text-sm font-semibold text-primary-500 text-center mb-4">{step.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed mb-4">
                  {step.description}
                </p>
                {step.tag && (
                  <p className="text-xs text-gray-400 dark:text-gray-500 text-center italic border-t border-gray-100 dark:border-gray-800 pt-3">
                    {step.tag}
                  </p>
                )}
              </div>

              {/* Arrow between steps (not on mobile, not on last step) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 transform -translate-y-1/2 text-primary-300 dark:text-primary-700">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
