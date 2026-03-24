import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - Feedii',
  description: 'Learn how Feedii protects your privacy and data.',
}

export default function PrivacyPolicy() {
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

          <h1 className="heading-1 mb-8">Privacy Policy</h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Last updated: March 23, 2026
            </p>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Our Commitment to Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                At Feedii, we believe that your health data is yours and yours alone. We've built our app
                with privacy as the foundation, not an afterthought. This Privacy Policy explains how we
                handle your information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Data Collection and Storage</h2>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">What We DON'T Do</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>We do NOT upload your food photos to our servers</li>
                <li>We do NOT store your nutrition data in the cloud</li>
                <li>We do NOT require you to create an account</li>
                <li>We do NOT share your data with third parties</li>
                <li>We do NOT use analytics or tracking services</li>
                <li>We do NOT sell your data to advertisers</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">What We Do</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>All food recognition happens on your device using on-device AI models</li>
                <li>All nutrition data is stored locally on your iPhone</li>
                <li>Your photos never leave your device</li>
                <li>You have complete control over your data</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">On-Device Processing</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Feedii uses advanced machine learning models that run entirely on your device. When you
                take a photo of your meal:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>The photo is processed by the AI model on your iPhone</li>
                <li>Nutrition data is calculated locally</li>
                <li>Results are stored in your device's local database</li>
                <li>No data is transmitted to external servers</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Technical Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                To provide core app functionality, we may collect minimal technical information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Device model and iOS version (for compatibility)</li>
                <li>Crash reports (optional, anonymized, and only if you opt-in)</li>
                <li>App version information</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                This information is collected only to ensure the app works properly on your device and
                is never linked to your identity or nutrition data.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Your Data Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Because all your data is stored locally on your device, you have complete control:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>You can delete all app data at any time through iOS Settings</li>
                <li>You can export your data to CSV format for backup</li>
                <li>Uninstalling the app removes all associated data</li>
                <li>No account deletion is needed because we don't have accounts</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Camera and Photo Access</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Feedii requests camera access to enable food scanning. We use this permission to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Capture photos of your meals for AI recognition</li>
                <li>Save meal photos to your local history (optional)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Photos are never uploaded or shared. You can revoke camera access at any time through
                iOS Settings, though this will disable the scanning feature.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Feedii does not knowingly collect any information from children under 13. The app is
                designed for users 13 years and older. If you believe a child under 13 has used the app,
                simply uninstalling it will remove all local data.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes
                by updating the "Last updated" date at the top of this policy. Continued use of the app
                after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="heading-3 mb-4">Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about this Privacy Policy or how we handle your data, please
                contact us at:
              </p>
              <p className="text-primary-500 font-semibold mt-4">
                privacy@feedii.app
              </p>
            </section>

            <div className="mt-12 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-2xl border-2 border-primary-200 dark:border-primary-800">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Our Privacy Promise</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Your health data is personal and sensitive. We will never compromise on privacy. If we
                cannot provide a feature while maintaining our privacy-first approach, we simply won't
                build that feature. Your trust matters more than any feature.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
