import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - Feedii',
  description: 'Terms and conditions for using the Feedii app.',
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <div className="container-custom py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/" className="text-primary-500 hover:text-primary-600 transition-colors">
              ← Back to Home
            </Link>
          </div>

          <h1 className="heading-1 mb-8">Terms of Service</h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Last updated: March 23, 2026
            </p>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300">
                By downloading, installing, or using Feedii ("the App"), you agree to be bound by these
                Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">License to Use</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Feedii grants you a limited, non-exclusive, non-transferable, revocable license to use
                the App for personal, non-commercial purposes, subject to these Terms.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mt-4">
                <li>Modify, reverse engineer, or decompile the App</li>
                <li>Use the App for any illegal or unauthorized purpose</li>
                <li>Attempt to extract or replicate the AI models</li>
                <li>Resell, redistribute, or sublicense the App</li>
                <li>Use the App to harm others or violate their rights</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Health Disclaimer</h2>
              <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl border-2 border-yellow-200 dark:border-yellow-800 mb-4">
                <p className="text-gray-900 dark:text-white font-semibold mb-2">
                  IMPORTANT: Medical Disclaimer
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Feedii is a nutrition tracking tool and is NOT a medical device. The App is designed
                  for informational and educational purposes only.
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Feedii does not provide medical advice, diagnosis, or treatment</li>
                <li>Nutrition data may have a margin of error of 5-10%</li>
                <li>Always consult with a qualified healthcare provider before making health decisions</li>
                <li>Do not rely solely on the App for managing medical conditions</li>
                <li>The App is not intended to replace professional nutritional counseling</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                If you have specific dietary restrictions, allergies, or medical conditions, consult
                with your doctor or registered dietitian before using nutrition tracking apps.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Accuracy of Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We strive to provide accurate nutrition information using industry-leading AI and
                verified databases. However:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>AI recognition accuracy may vary based on photo quality and food complexity</li>
                <li>Nutrition values are estimates based on standard recipes and portion sizes</li>
                <li>Homemade and restaurant meals may have different nutritional content</li>
                <li>Users should verify critical nutrition information independently</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Pricing and Payments</h2>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Free Tier</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The free version of Feedii provides basic nutrition tracking features at no cost.
                We reserve the right to modify free tier limitations at any time.
              </p>

              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Pro Version</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The Pro version is available as a one-time purchase for $3.99 (USD). Pricing may vary
                by region. This purchase includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>Lifetime access to Pro features</li>
                <li>All future updates and improvements</li>
                <li>No recurring subscription fees</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                All purchases are processed through the Apple App Store and are subject to Apple's
                Terms of Service and refund policies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">User Responsibilities</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                As a user of Feedii, you are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Maintaining the security of your device</li>
                <li>Backing up your data if desired (via CSV export)</li>
                <li>Using the App in compliance with applicable laws</li>
                <li>Verifying nutrition information for critical dietary needs</li>
                <li>Not sharing your Pro license with others</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 dark:text-gray-300">
                All content, features, and functionality of Feedii, including but not limited to AI
                models, user interface, graphics, logos, and software, are owned by Feedii and are
                protected by copyright, trademark, and other intellectual property laws. Your use of
                the App does not grant you any ownership rights to these materials.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Feedii is provided "AS IS" without warranties of any kind</li>
                <li>We are not liable for any health outcomes resulting from use of the App</li>
                <li>We are not liable for data loss, though we encourage regular backups</li>
                <li>Our total liability shall not exceed the amount you paid for the App</li>
                <li>We are not responsible for third-party services or links</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Termination</h2>
              <p className="text-gray-700 dark:text-gray-300">
                You may stop using the App at any time by uninstalling it from your device. We reserve
                the right to terminate or suspend access to the App for violations of these Terms,
                though we will make reasonable efforts to provide notice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Updates and Changes</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update the App from time to time to add features, fix bugs, or improve
                performance. We may also modify these Terms. Continued use of the App after changes
                constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Age Requirement</h2>
              <p className="text-gray-700 dark:text-gray-300">
                You must be at least 13 years old to use Feedii. Users under 18 should use the App
                under parental supervision.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Governing Law</h2>
              <p className="text-gray-700 dark:text-gray-300">
                These Terms are governed by the laws of the United States, without regard to conflict
                of law provisions. Any disputes shall be resolved through binding arbitration in
                accordance with the American Arbitration Association rules.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have questions about these Terms, please contact us at:
              </p>
              <p className="text-primary-500 font-semibold mt-4">
                legal@feedii.app
              </p>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Severability</h2>
              <p className="text-gray-700 dark:text-gray-300">
                If any provision of these Terms is found to be unenforceable, the remaining provisions
                will continue in full force and effect.
              </p>
            </section>

            <div className="mt-12 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-2xl border-2 border-primary-200 dark:border-primary-800">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Questions?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We want these Terms to be clear and fair. If you have any questions or concerns,
                please reach out. We're here to help make your nutrition tracking experience as
                smooth as possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
