<template>
  <div class="pt-16 min-h-screen bg-white">
    <!-- Header Section -->
    <section class="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <div class="text-center" data-aos="fade-up">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {{ locale === 'zh' ? '服务条款' : 'Terms of Service' }}
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
                {{ locale === 'zh' ? '1. 服务接受' : '1. Acceptance of Terms' }}
              </h2>
              <p class="text-gray-600 leading-relaxed">
                {{ locale === 'zh' 
                  ? '通过访问和使用 ReSocks 服务，您同意受本服务条款的约束。如果您不同意这些条款，请不要使用我们的服务。'
                  : 'By accessing and using ReSocks services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.'
                }}
              </p>
            </section>

            <section class="mb-10">
              <h2 class="text-2xl font-bold mb-4 text-gray-900">
                {{ locale === 'zh' ? '2. 服务说明' : '2. Service Description' }}
              </h2>
              <p class="text-gray-600 leading-relaxed mb-4">
              {{ locale === 'zh' 
                ? 'ReSocks 提供 SOCKS5 二次代理（中转）和隐私保护服务。我们保留随时修改、暂停或终止服务的权利。'
                : 'ReSocks provides network acceleration and privacy protection services. We reserve the right to modify, suspend, or terminate services at any time.'
              }}
            </p>
          </section>

            <section class="mb-10">
              <h2 class="text-2xl font-bold mb-4 text-gray-900">
              {{ locale === 'zh' ? '3. 用户责任' : '3. User Responsibilities' }}
            </h2>
              <p class="text-gray-600 leading-relaxed mb-4">
              {{ locale === 'zh' 
                ? '使用我们的服务时，您同意：'
                : 'When using our services, you agree to:'
              }}
            </p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>{{ locale === 'zh' ? '遵守所有适用的法律法规' : 'Comply with all applicable laws and regulations' }}</li>
              <li>{{ locale === 'zh' ? '不进行非法活动' : 'Not engage in illegal activities' }}</li>
              <li>{{ locale === 'zh' ? '不滥用服务' : 'Not abuse the service' }}</li>
              <li>{{ locale === 'zh' ? '保护账户安全' : 'Protect account security' }}</li>
            </ul>
          </section>

            <section class="mb-10">
              <h2 class="text-2xl font-bold mb-4 text-gray-900">
              {{ locale === 'zh' ? '4. 禁止行为' : '4. Prohibited Activities' }}
            </h2>
              <p class="text-gray-600 leading-relaxed mb-4">
              {{ locale === 'zh' 
                ? '以下行为是禁止的：'
                : 'The following activities are prohibited:'
              }}
            </p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>{{ locale === 'zh' ? '黑客攻击、散布恶意软件' : 'Hacking, spreading malware' }}</li>
              <li>{{ locale === 'zh' ? '侵犯他人知识产权' : 'Infringing intellectual property rights' }}</li>
              <li>{{ locale === 'zh' ? '发送垃圾邮件' : 'Sending spam' }}</li>
              <li>{{ locale === 'zh' ? '共享账户给未授权用户' : 'Sharing accounts with unauthorized users' }}</li>
            </ul>
          </section>

            <section class="mb-10">
              <h2 class="text-2xl font-bold mb-4 text-gray-900">
              {{ locale === 'zh' ? '5. 付款和退款' : '5. Payment and Refunds' }}
            </h2>
              <p class="text-gray-600 leading-relaxed mb-4">
              {{ locale === 'zh' 
                ? '所有购买均为一次性付款，到期后不会自动续费。我们提供7天无理由退款保证。'
                : 'All purchases are one-time payments with no auto-renewal. We offer a 7-day money-back guarantee.'
              }}
            </p>
          </section>

            <section class="mb-10">
              <h2 class="text-2xl font-bold mb-4 text-gray-900">
              {{ locale === 'zh' ? '6. 责任限制' : '6. Limitation of Liability' }}
            </h2>
              <p class="text-gray-600 leading-relaxed">
              {{ locale === 'zh' 
                ? 'ReSocks 对于使用或无法使用服务而造成的任何损害不承担责任。我们的总责任不超过您支付的服务费用。'
                : 'ReSocks is not liable for any damages resulting from the use or inability to use the service. Our total liability shall not exceed the service fees you paid.'
              }}
            </p>
          </section>

            <section class="mb-10">
              <h2 class="text-2xl font-bold mb-4 text-gray-900">
              {{ locale === 'zh' ? '7. 条款变更' : '7. Changes to Terms' }}
            </h2>
              <p class="text-gray-600 leading-relaxed">
              {{ locale === 'zh' 
                ? '我们保留随时修改这些条款的权利。继续使用服务即表示您接受修改后的条款。'
                : 'We reserve the right to modify these terms at any time. Continued use of the service indicates your acceptance of the modified terms.'
              }}
            </p>
          </section>

            <section class="mb-10">
              <h2 class="text-2xl font-bold mb-4 text-gray-900">
              {{ locale === 'zh' ? '8. 账户终止' : '8. Account Termination' }}
            </h2>
              <p class="text-gray-600 leading-relaxed">
              {{ locale === 'zh' 
                ? '我们保留在任何时间以任何理由暂停或终止您的账户的权利，特别是在违反本条款的情况下。'
                : 'We reserve the right to suspend or terminate your account at any time for any reason, especially in case of violation of these terms.'
              }}
            </p>
          </section>

            <section>
              <h2 class="text-2xl font-bold mb-4 text-gray-900">
                {{ locale === 'zh' ? '9. 联系信息' : '9. Contact Information' }}
              </h2>
              <p class="text-gray-600 leading-relaxed">
                {{ locale === 'zh' 
                  ? '如果您对本服务条款有任何疑问，请通过 support@resocks.app 联系我们。'
                  : 'If you have any questions about these Terms of Service, please contact us at support@resocks.app.'
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
