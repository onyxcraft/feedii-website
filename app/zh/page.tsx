import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Feedii - AI 卡路里计数器和营养追踪器 | 拍照追踪饮食',
  description: '拍照即可获得即时营养信息。由先进AI驱动。精确追踪卡路里、宏量营养素和微量营养素，使用最准确的AI食物识别应用。',
  keywords: [
    '营养追踪',
    'AI食物识别',
    '卡路里计数器',
    '宏量营养追踪',
    '健康应用',
    '饮食应用',
    '食物追踪器',
    '膳食追踪器',
    '照片卡路里计数器',
    'AI营养应用',
    '卡路里追踪应用',
    '食物日记',
    '营养应用',
    '饮食追踪器',
    '减肥应用',
  ],
  openGraph: {
    title: 'Feedii - AI 卡路里计数器和营养追踪器',
    description: '拍照即可获得即时营养信息。由先进AI驱动。',
    type: 'website',
    locale: 'zh_CN',
  },
  alternates: {
    canonical: 'https://feedii.com/zh',
    languages: {
      'en': 'https://feedii.com',
    },
  },
}

export default function ChineseLandingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Feedii',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS',
    inLanguage: 'zh-CN',
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
    description: '拍照即可获得即时营养信息。由先进AI驱动。精确追踪卡路里、宏量营养素和微量营养素，使用最准确的AI食物识别应用。',
    url: 'https://feedii.com/zh',
    downloadUrl: 'https://apps.apple.com/app/id6753751575',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md">
          <nav className="container-custom py-4">
            <div className="flex items-center justify-between">
              <Link href="/zh" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">Feedii</span>
              </Link>
              <div className="flex items-center space-x-6">
                <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors font-medium hidden md:block">
                  功能
                </a>
                <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors font-medium hidden md:block">
                  价格
                </a>
                <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
                  English
                </Link>
                <a href="#download" className="btn-primary inline-block">
                  下载
                </a>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-white dark:from-gray-900 dark:via-primary-900/10 dark:to-gray-900 pt-20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 dark:bg-primary-800/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300/20 dark:bg-primary-700/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <div className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-semibold">
                AI驱动的营养追踪
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                用AI轻松追踪
                <span className="text-gradient block">营养摄入</span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                拍照即可。立即获得营养信息。由先进AI驱动。
                改变您追踪健康旅程的方式。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#download" className="btn-primary inline-block text-center">
                  在App Store下载
                </a>
                <a href="#features" className="btn-secondary inline-block text-center">
                  查看功能
                </a>
              </div>

              <div className="flex flex-wrap gap-8 justify-center pt-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">10,000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">活跃用户</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">识别准确率</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">4.9/5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">用户评分</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section-padding bg-gray-50 dark:bg-gray-800/50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">强大功能</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                掌控您的营养和健康旅程所需的一切。
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="heading-3 mb-3 text-xl">AI食物识别</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  拍照即可识别超过10,000种食物，行业领先的AI准确率。
                </p>
              </div>

              <div className="card group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="heading-3 mb-3 text-xl">详细营养数据</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  精确追踪卡路里、蛋白质、碳水化合物、脂肪、维生素和矿物质。
                </p>
              </div>

              <div className="card group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="heading-3 mb-3 text-xl">隐私优先</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  所有数据保留在您的设备上。无云存储，无第三方共享。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-white dark:bg-gray-900">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">如何使用</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                三个简单步骤开始追踪营养。无需手动输入，无需麻烦。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  1
                </div>
                <div className="card h-full pt-8">
                  <div className="text-6xl mb-6 text-center">📸</div>
                  <h3 className="heading-3 mb-4 text-center">拍照</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                    用手机相机拍摄您的餐食照片。我们的AI会立即识别食物。
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  2
                </div>
                <div className="card h-full pt-8">
                  <div className="text-6xl mb-6 text-center">📊</div>
                  <h3 className="heading-3 mb-4 text-center">获取营养数据</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                    接收包括卡路里、宏量营养素、维生素和矿物质在内的详细营养信息。
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  3
                </div>
                <div className="card h-full pt-8">
                  <div className="text-6xl mb-6 text-center">📈</div>
                  <h3 className="heading-3 mb-4 text-center">追踪进度</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                    查看随时间变化的营养趋势的精美图表和见解。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="section-padding bg-gray-50 dark:bg-gray-800/50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">简单透明的价格</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                一次性购买。永远无需订阅。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="card h-full flex flex-col">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">免费版</h3>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">$0</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">永久</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">非常适合开始营养追踪</p>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">基础食物识别</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">每天5次扫描</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">卡路里追踪</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">隐私优先方式</span>
                  </li>
                </ul>
                <a href="#download" className="block text-center font-semibold px-8 py-4 rounded-full transition-all duration-300 btn-secondary">
                  开始使用
                </a>
              </div>

              <div className="relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    最受欢迎
                  </span>
                </div>
                <div className="card h-full flex flex-col border-2 border-primary-500 shadow-2xl scale-105">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">专业版</h3>
                    <div className="mb-2">
                      <span className="text-5xl font-bold text-gray-900 dark:text-white">$3.99</span>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">一次性</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">解锁AI营养追踪的全部功能</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">高级AI识别</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">无限扫描</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">详细分析和见解</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">完整的微量营养素数据</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">终身更新</span>
                    </li>
                  </ul>
                  <a href="#download" className="block text-center font-semibold px-8 py-4 rounded-full transition-all duration-300 btn-primary">
                    升级到专业版
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="download" className="section-padding bg-gradient-to-br from-primary-500 to-primary-700 text-white">
          <div className="container-custom text-center max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-white">
              今天开始您的健康旅程
            </h2>
            <p className="text-xl text-primary-50 mb-12 max-w-2xl mx-auto">
              加入数千名正在使用AI改变营养追踪的用户。
              立即下载Feedii，体验健康的未来。
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a href="https://apps.apple.com/app/id6753751575" className="inline-block transform hover:scale-105 transition-transform" aria-label="在App Store下载">
                <svg className="h-14" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect width="120" height="40" rx="5" fill="black" />
                  <path d="M24.769 20.3a4.947 4.947 0 012.356-4.15 5.066 5.066 0 00-3.99-2.16c-1.68-.18-3.31 1.01-4.17 1.01-.87 0-2.19-.99-3.6-.96a5.31 5.31 0 00-4.47 2.73c-1.94 3.34-.5 8.26 1.36 10.96.95 1.32 2.04 2.8 3.5 2.75 1.42-.06 1.96-.92 3.67-.92 1.71 0 2.2.92 3.64.89 1.51-.03 2.47-1.35 3.38-2.68a11.031 11.031 0 001.54-3.14 4.778 4.778 0 01-2.91-4.34z" fill="white" />
                  <path d="M22.037 12.21a4.872 4.872 0 001.11-3.49 4.957 4.957 0 00-3.21 1.66 4.636 4.636 0 00-1.15 3.36 4.099 4.099 0 003.25-1.53z" fill="white" />
                  <text x="40" y="15" fill="white" fontSize="9" fontWeight="500">Download on the</text>
                  <text x="40" y="28" fill="white" fontSize="17" fontWeight="700">App Store</text>
                </svg>
              </a>

              <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-white/30">
                <div className="text-sm text-primary-50 mb-1">即将推出</div>
                <div className="font-bold">Google Play</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold mb-2">免费</div>
                <div className="text-primary-100">无需信用卡</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5分钟</div>
                <div className="text-primary-100">开始追踪</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">iOS 15+</div>
                <div className="text-primary-100">兼容设备</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300">
          <div className="container-custom py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">F</span>
                  </div>
                  <span className="text-2xl font-bold text-white">Feedii</span>
                </div>
                <p className="text-gray-400 text-sm">
                  尊重您隐私的AI营养追踪。
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white mb-4">产品</h3>
                <ul className="space-y-2">
                  <li><a href="#features" className="hover:text-primary-400 transition-colors text-sm">功能</a></li>
                  <li><a href="#pricing" className="hover:text-primary-400 transition-colors text-sm">价格</a></li>
                  <li><a href="#download" className="hover:text-primary-400 transition-colors text-sm">下载</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white mb-4">公司</h3>
                <ul className="space-y-2">
                  <li><Link href="/privacy" className="hover:text-primary-400 transition-colors text-sm">隐私政策</Link></li>
                  <li><Link href="/terms" className="hover:text-primary-400 transition-colors text-sm">服务条款</Link></li>
                  <li><Link href="/" className="hover:text-primary-400 transition-colors text-sm">English</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white mb-4">联系</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-500 flex items-center justify-center transition-colors" aria-label="Twitter">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Feedii. 保留所有权利。
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
