'use client'

import { useState, useEffect, useRef } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
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

  const faqs = [
    {
      question: 'How does AI food recognition work?',
      answer: 'Feedii uses advanced computer vision and machine learning models trained on millions of food images. Simply snap a photo of your meal, and our AI instantly identifies the food items and provides accurate nutritional information. The system recognizes over 10,000 different foods with 99.9% accuracy.',
    },
    {
      question: 'Is my data private?',
      answer: 'Absolutely. We built Feedii with privacy as our top priority. All your data stays on your device - we never upload your photos or nutrition data to the cloud. There is no account required, no third-party tracking, and no data sharing. Your health data is yours alone.',
    },
    {
      question: 'What foods can Feedii recognize?',
      answer: 'Feedii can recognize over 10,000 different foods, including fruits, vegetables, meats, packaged foods, restaurant meals, and international cuisines. The AI is continuously learning and improving. If it misidentifies something, you can manually correct it to help improve accuracy.',
    },
    {
      question: 'Is there a subscription?',
      answer: 'No! We hate subscriptions too. Feedii offers a free tier with basic features and a one-time Pro upgrade for $3.99. Pay once, own it forever. No monthly fees, no hidden costs, and you get lifetime updates.',
    },
    {
      question: 'Which devices are supported?',
      answer: 'Feedii is currently available for iOS devices running iOS 15.0 or later. This includes iPhone 8 and newer models. We are working on an Android version and will announce availability soon.',
    },
    {
      question: 'How accurate is the nutrition data?',
      answer: 'Our nutrition database is sourced from the USDA, verified restaurant chains, and peer-reviewed nutritional studies. The AI estimates portion sizes with high accuracy using computer vision. While we strive for precision, results may vary by 5-10% depending on portion size and preparation methods.',
    },
  ]

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section id="faq" ref={sectionRef} className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about Feedii
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`card cursor-pointer transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              } ${openIndex === index ? 'ring-2 ring-primary-500' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white flex-1">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 flex-shrink-0 text-primary-500 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'max-h-96 mt-4 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
