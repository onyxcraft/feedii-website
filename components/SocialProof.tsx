export default function SocialProof() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white dark:border-gray-800 flex items-center justify-center text-white font-semibold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="ml-4 text-left">
              <div className="font-bold text-gray-900 dark:text-white">10,000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Health-conscious users</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <div className="ml-2 text-left">
              <div className="font-bold text-gray-900 dark:text-white">4.9/5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average rating</div>
            </div>
          </div>

          <div className="text-center">
            <div className="font-bold text-gray-900 dark:text-white mb-1">Featured in</div>
            <div className="flex gap-4 items-center justify-center text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-sm">TechCrunch</span>
              <span className="font-semibold text-sm">Product Hunt</span>
              <span className="font-semibold text-sm">Wired</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
