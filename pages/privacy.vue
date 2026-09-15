<template>
  <div class="pt-16 min-h-screen bg-white">
    <!-- Header Section -->
    <section class="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <div class="text-center" data-aos="fade-up">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {{ locale === 'zh' ? '隐私政策' : 'Privacy Policy' }}
          </h1>
          <p class="text-lg text-gray-500">
            {{ locale === 'zh' ? `最后更新：${currentYear}年` : `Last Updated: ${currentYear}` }}
          </p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-gray-100" data-aos="fade-up">
          <div class="prose prose-lg max-w-none">
            <section class="mb-10">
              <h2 class="text-2xl font-bold mb-4 text-gray-900">
              {{ locale === 'zh' ? '1. 信息收集' : '1. Information Collection' }}
            </h2>
              <p class="text-gray-600 leading-relaxed mb-4">
              {{ locale === 'zh' 
                ? 'ReSocks 致力于保护您的隐私。我们收集的信息仅用于提供和改进我们的服务。我们收集的信息包括：'
                : 'ReSocks is committed to protecting your privacy. We collect information only to provide and improve our services. Information we collect includes:'
              }}
            </p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>{{ locale === 'zh' ? '账户信息（邮箱地址）' : 'Account information (email address)' }}</li>
              <li>{{ locale === 'zh' ? '使用数据（连接时间、流量统计）' : 'Usage data (connection time, traffic statistics)' }}</li>
              <li>{{ locale === 'zh' ? '设备信息（操作系统类型）' : 'Device information (operating system type)' }}</li>
            </ul>
          </section>

            <section class="mb-10">
              <h2 class="text-2xl font-bold mb-4 text-gray-900">
              {{ locale === 'zh' ? '2. 信息使用' : '2. Information Use' }}
            </h2>
              <p class="text-gray-600 leading-relaxed mb-4">
              {{ locale === 'zh' 
                ? '我们使用收集的信息用于：'
                : 'We use collected information for:'
              }}
            </p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>{{ locale === 'zh' ? '提供和维护服务' : 'Providing and maintaining services' }}</li>
              <li>{{ locale === 'zh' ? '改进用户体验' : 'Improving user experience' }}</li>
              <li>{{ locale === 'zh' ? '技术支持' : 'Technical support' }}</li>
              <li>{{ locale === 'zh' ? '防止滥用和欺诈' : 'Preventing abuse and fraud' }}</li>
            </ul>
          </section>

            <section class="mb-10">
              <h2 class="text-2xl font-bold mb-4 text-gray-900">
              {{ locale === 'zh' ? '3. 数据安全' : '3. Data Security' }}
            </h2>
              <p class="text-gray-600 leading-relaxed">
              {{ locale === 'zh' 
                ? '我们采用行业标准的安全措施来保护您的个人信息。所有数据传输都经过加密处理，我们不会记录您的浏览历史或访问的网站。'
                : 'We employ industry-standard security measures to protect your personal information. All data transmission is encrypted, and we do not log your browsing history or visited websites.'
              }}
            </p>
          </section>

            <section class="mb-10">
              <h2 class="text-2xl font-bold mb-4 text-gray-900">
              {{ locale === 'zh' ? '4. 信息共享' : '4. Information Sharing' }}
            </h2>
              <p class="text-gray-600 leading-relaxed">
              {{ locale === 'zh' 
                ? '我们不会向第三方出售、交易或转让您的个人信息。我们可能在以下情况下共享信息：法律要求、保护我们的权利、防止欺诈。'
                : 'We do not sell, trade, or transfer your personal information to third parties. We may share information in the following cases: legal requirements, protecting our rights, preventing fraud.'
              }}
            </p>
          </section>

            <section class="mb-10">
              <h2 class="text-2xl font-bold mb-4 text-gray-900">
              {{ locale === 'zh' ? '5. Cookie使用' : '5. Cookie Usage' }}
            </h2>
              <p class="text-gray-600 leading-relaxed">
              {{ locale === 'zh' 
                ? '我们使用Cookie来改善用户体验。您可以选择禁用Cookie，但这可能影响某些功能的使用。'
                : 'We use cookies to improve user experience. You can choose to disable cookies, but this may affect the use of certain features.'
              }}
            </p>
          </section>

            <section class="mb-10">
              <h2 class="text-2xl font-bold mb-4 text-gray-900">
              {{ locale === 'zh' ? '6. 您的权利' : '6. Your Rights' }}
            </h2>
              <p class="text-gray-600 leading-relaxed mb-4">
              {{ locale === 'zh' 
                ? '您有权：'
                : 'You have the right to:'
              }}
            </p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>{{ locale === 'zh' ? '访问您的个人信息' : 'Access your personal information' }}</li>
              <li>{{ locale === 'zh' ? '更正不准确的信息' : 'Correct inaccurate information' }}</li>
              <li>{{ locale === 'zh' ? '删除您的账户' : 'Delete your account' }}</li>
              <li>{{ locale === 'zh' ? '反对数据处理' : 'Object to data processing' }}</li>
            </ul>
          </section>

            <section>
              <h2 class="text-2xl font-bold mb-4 text-gray-900">
                {{ locale === 'zh' ? '7. 联系我们' : '7. Contact Us' }}
              </h2>
              <p class="text-gray-600 leading-relaxed">
                {{ locale === 'zh' 
                  ? '如果您对本隐私政策有任何疑问，请通过 support@resocks.app 联系我们。'
                  : 'If you have any questions about this Privacy Policy, please contact us at support@resocks.app.'
                }}
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { locale } = useI18n();
const currentYear = new Date().getFullYear();
</script>
