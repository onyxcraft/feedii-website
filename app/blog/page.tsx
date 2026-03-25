import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Feedii | Nutrition Tracking Tips & AI Food Recognition Insights',
  description: 'Learn about AI-powered nutrition tracking, calorie counting tips, and how to make the most of your health journey with Feedii.',
  openGraph: {
    title: 'Blog - Feedii | Nutrition Tracking Tips & AI Food Recognition Insights',
    description: 'Learn about AI-powered nutrition tracking, calorie counting tips, and how to make the most of your health journey with Feedii.',
  },
}

const articles = [
  {
    slug: 'ai-food-recognition',
    title: 'How AI Food Recognition is Changing Nutrition Tracking',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way we track our meals and nutrition, making healthy eating easier than ever.',
    date: 'March 24, 2026',
    readTime: '5 min read',
    category: 'Technology',
  },
  {
    slug: 'calorie-counting-tips',
    title: '5 Tips for Accurate Calorie Counting with Photo AI',
    excerpt: 'Master the art of calorie counting with AI-powered photo recognition. Learn best practices for accurate nutrition tracking.',
    date: 'March 23, 2026',
    readTime: '6 min read',
    category: 'Tips & Tricks',
  },
  {
    slug: 'feedii-vs-myfitnesspal',
    title: 'Feedii vs MyFitnessPal: Which Nutrition App is Right for You?',
    excerpt: 'An in-depth comparison of Feedii and MyFitnessPal to help you choose the best nutrition tracking app for your health goals.',
    date: 'March 22, 2026',
    readTime: '7 min read',
    category: 'Comparisons',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="container-custom py-6">
          <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Feedii Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Insights, tips, and updates on AI-powered nutrition tracking and healthy living
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="card group hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {article.date}
                    </span>
                    <span className="text-primary-600 dark:text-primary-400 font-medium group-hover:translate-x-1 transition-transform">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Ready to Transform Your Nutrition Tracking?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of users who are already tracking their nutrition effortlessly with AI
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all hover:scale-105"
          >
            Download Feedii
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
