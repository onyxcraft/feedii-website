export default function CTA() {
  return (
    <section id="download" className="section-padding bg-gradient-to-br from-primary-500 to-primary-700 text-white">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6 text-white">
            Start Your Health Journey Today
          </h2>
          <p className="text-xl text-primary-50 mb-12 max-w-2xl mx-auto">
            Join thousands of users who are transforming their nutrition tracking with AI.
            Download Feedii now and experience the future of health.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* App Store Badge */}
            <a
              href="#"
              className="inline-block transform hover:scale-105 transition-transform"
              aria-label="Download on the App Store"
            >
              <svg
                className="h-14"
                viewBox="0 0 120 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="120" height="40" rx="5" fill="black" />
                <path
                  d="M24.769 20.3a4.947 4.947 0 012.356-4.15 5.066 5.066 0 00-3.99-2.16c-1.68-.18-3.31 1.01-4.17 1.01-.87 0-2.19-.99-3.6-.96a5.31 5.31 0 00-4.47 2.73c-1.94 3.34-.5 8.26 1.36 10.96.95 1.32 2.04 2.8 3.5 2.75 1.42-.06 1.96-.92 3.67-.92 1.71 0 2.2.92 3.64.89 1.51-.03 2.47-1.35 3.38-2.68a11.031 11.031 0 001.54-3.14 4.778 4.778 0 01-2.91-4.34z"
                  fill="white"
                />
                <path
                  d="M22.037 12.21a4.872 4.872 0 001.11-3.49 4.957 4.957 0 00-3.21 1.66 4.636 4.636 0 00-1.15 3.36 4.099 4.099 0 003.25-1.53z"
                  fill="white"
                />
                <text x="40" y="15" fill="white" fontSize="9" fontWeight="500">
                  Download on the
                </text>
                <text x="40" y="28" fill="white" fontSize="17" fontWeight="700">
                  App Store
                </text>
              </svg>
            </a>

            {/* Coming Soon Badge for Android */}
            <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-white/30">
              <div className="text-sm text-primary-50 mb-1">Coming Soon</div>
              <div className="font-bold">Google Play</div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-primary-100">No credit card required</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5 min</div>
              <div className="text-primary-100">To start tracking</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">iOS 15+</div>
              <div className="text-primary-100">Compatible devices</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
