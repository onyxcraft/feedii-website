import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

export const metadata: Metadata = {
  title: 'Feedii - Track Nutrition Effortlessly with AI',
  description: 'Snap a photo. Get instant nutrition insights. Powered by advanced AI. Track calories, macros, and micronutrients with the most accurate AI food recognition app.',
  keywords: ['nutrition tracking', 'AI food recognition', 'calorie counter', 'macro tracking', 'health app', 'diet app'],
  authors: [{ name: 'Feedii Team' }],
  openGraph: {
    title: 'Feedii - Track Nutrition Effortlessly with AI',
    description: 'Snap a photo. Get instant nutrition insights. Powered by advanced AI.',
    type: 'website',
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
  return (
    <html lang="en" className="scroll-smooth">
      <head>
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
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
