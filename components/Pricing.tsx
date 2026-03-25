'use client'

import { useEffect, useRef, useState } from 'react'

export default function Pricing() {
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

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'Forever',
      description: 'Perfect for getting started with nutrition tracking',
      features: [
        'Basic food recognition',
        '5 scans per day',
        'Calorie tracking',
        'Basic nutrition data',
        'Daily history',
        'Privacy-first approach',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$3.99',
      period: 'One-time',
      description: 'Unlock the full power of AI nutrition tracking',
      features: [
        'Advanced AI recognition',
        'Unlimited scans',
        'Detailed analytics & insights',
        'Complete micronutrient data',
        'Unlimited history & exports',
        'Community challenges',
        'Premium support',
        'Lifetime updates',
      ],
      cta: 'Upgrade to Pro',
      highlighted: true,
      badge: 'Most Popular',
    },
  ]

  return (
    <section id="pricing" ref={sectionRef} className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            One-time purchase. No subscriptions. Ever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div
                className={`card h-full flex flex-col ${
                  plan.highlighted
                    ? 'border-2 border-primary-500 shadow-2xl scale-105'
                    : ''
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg
                        className={`w-6 h-6 flex-shrink-0 ${
                          plan.highlighted
                            ? 'text-primary-500'
                            : 'text-gray-400'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#download"
                  className={`block text-center font-semibold px-8 py-4 rounded-full transition-all duration-300 ${
                    plan.highlighted
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400">
            All plans include our privacy-first approach. Your data stays on your device.
          </p>
        </div>
      </div>
    </section>
  )
}
