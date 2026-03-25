import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://feedii.com'),
  title: 'Feedii - AI Calorie Counter & Nutrition Tracker | Snap Photos to Track Meals',
  description: 'Snap a photo. Get instant nutrition insights. Powered by advanced AI. Track calories, macros, and micronutrients with the most accurate AI food recognition app.',
  keywords: [
    'nutrition tracking',
    'AI food recognition',
    'calorie counter',
    'macro tracking',
    'health app',
    'diet app',
    'food tracker',
    'meal tracker',
    'photo calorie counter',
    'AI nutrition app',
    'calorie tracking app',
    'food diary',
    'nutrition app',
    'diet tracker',
    'weight loss app',
    'fitness nutrition',
    'automatic food logging',
    'smart calorie counter',
  ],
  authors: [{ name: 'Feedii Team' }],
  openGraph: {
    title: 'Feedii - AI Calorie Counter & Nutrition Tracker | Snap Photos to Track Meals',
    description: 'Snap a photo. Get instant nutrition insights. Powered by advanced AI. Track calories, macros, and micronutrients with the most accurate AI food recognition app.',
    type: 'website',
    url: 'https://feedii.com',
    siteName: 'Feedii',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Feedii - AI Calorie Counter & Nutrition Tracker',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feedii - AI Calorie Counter & Nutrition Tracker | Snap Photos to Track Meals',
    description: 'Snap a photo. Get instant nutrition insights. Powered by advanced AI.',
    images: ['/og-image.png'],
    creator: '@feediiapp',
  },
  alternates: {
    canonical: 'https://feedii.com',
    languages: {
      'zh-CN': 'https://feedii.com/zh',
    },
  },
  other: {
    'apple-itunes-app': 'app-id=6753751575',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Feedii',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '12847',
    },
    description: 'Snap a photo. Get instant nutrition insights. Powered by advanced AI. Track calories, macros, and micronutrients with the most accurate AI food recognition app.',
    url: 'https://feedii.com',
    downloadUrl: 'https://apps.apple.com/app/id6753751575',
    screenshot: 'https://feedii.com/app-screenshot.png',
    softwareVersion: '1.0',
    author: {
      '@type': 'Organization',
      name: 'Feedii Team',
    },
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#4CAF50" />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('consent', 'default', {
                  analytics_storage: 'granted'
                });
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
