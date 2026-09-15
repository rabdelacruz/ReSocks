<template>
  <footer class="bg-gray-50 border-t border-gray-100">
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Company Info -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-4">
            <img src="/images/favicon.png" alt="ReSocks" class="h-8 w-8" />
            <span class="text-xl font-bold text-gray-900 tracking-tight">ReSocks</span>
          </div>
          <p class="text-gray-600 leading-relaxed">
            {{ locale === 'zh' ? '随地中转你的 SOCKS5 代理。' : 'Relay your SOCKS5 proxy anywhere.' }}
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
            {{ locale === 'zh' ? '快速链接' : 'Quick Links' }}
          </h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink :to="localePath('/demo')" class="text-gray-600 hover:text-primary-600 transition-colors">
                {{ locale === 'zh' ? '演示' : 'Demo' }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/download')" class="text-gray-600 hover:text-primary-600 transition-colors">
                {{ locale === 'zh' ? '下载' : 'Download' }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/pricing')" class="text-gray-600 hover:text-primary-600 transition-colors">
                {{ locale === 'zh' ? '价格' : 'Pricing' }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/docs')" class="text-gray-600 hover:text-primary-600 transition-colors">
                {{ locale === 'zh' ? '文档' : 'Documentation' }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
            {{ locale === 'zh' ? '法律信息' : 'Legal' }}
          </h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink :to="localePath('/privacy')" class="text-gray-600 hover:text-primary-600 transition-colors">
                {{ locale === 'zh' ? '隐私政策' : 'Privacy Policy' }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/terms')" class="text-gray-600 hover:text-primary-600 transition-colors">
                {{ locale === 'zh' ? '服务条款' : 'Terms of Service' }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
            {{ locale === 'zh' ? '联系我们' : 'Contact Us' }}
          </h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink :to="localePath('/contact')" class="text-gray-600 hover:text-primary-600 transition-colors">
                {{ locale === 'zh' ? '联系方式' : 'Contact Info' }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-200 mt-12 pt-8">
        <p class="text-center text-gray-500 text-sm">
          &copy; {{ new Date().getFullYear() }} ReSocks. {{ locale === 'zh' ? '保留所有权利。' : 'All rights reserved.' }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
</script>
