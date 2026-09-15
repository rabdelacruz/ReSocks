<template>
  <div class="pt-20 min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 py-16">

      <!-- Hero -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ locale === 'zh' ? '文档中心' : 'Documentation' }}
        </h1>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto">
          {{ locale === 'zh'
            ? '查找安装指南、使用说明、技巧和常见问题解答'
            : 'Find installation guides, usage instructions, tips, and FAQ'
          }}
        </p>
      </div>

      <!-- Category Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(group, groupName) in groupedDocs"
          :key="groupName"
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
          <!-- Card Header -->
          <div class="gradient-primary px-6 py-4 flex items-center gap-3">
            <span class="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
              <i :class="getCategoryIcon(groupName)" class="text-white text-lg"></i>
            </span>
            <h2 class="text-white font-bold text-lg">{{ groupName }}</h2>
          </div>

          <!-- Doc Links -->
          <div class="p-4">
            <NuxtLink
              v-for="doc in group"
              :key="doc.path"
              :to="localePath('/docs/' + doc.stem.split('/').pop())"
              class="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-primary-50 transition-all duration-200 group/item"
            >
              <span class="w-8 h-8 bg-gray-100 group-hover/item:bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                <i :class="doc.icon || 'bi-file-text'" class="text-gray-500 group-hover/item:text-primary-500 transition-colors"></i>
              </span>
              <div class="flex-1 min-w-0">
                <p class="font-semibold text-gray-800 group-hover/item:text-primary-600 transition-colors">{{ doc.title }}</p>
                <p class="text-sm text-gray-400 truncate mt-0.5">{{ doc.description }}</p>
              </div>
              <i class="bi bi-arrow-right text-gray-300 group-hover/item:text-primary-400 transition-colors mt-1 flex-shrink-0"></i>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-10 text-center text-white">
        <i class="bi bi-headset text-5xl mb-4 block opacity-90"></i>
        <h2 class="text-2xl font-bold mb-2">
          {{ locale === 'zh' ? '还有其他问题？' : 'Still have questions?' }}
        </h2>
        <p class="text-primary-100 mb-6">
          {{ locale === 'zh' ? '我们的支持团队随时为您提供帮助' : 'Our support team is always here to help' }}
        </p>
        <NuxtLink
          :to="localePath('/contact')"
          class="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
        >
          <i class="bi bi-chat-dots mr-2"></i>
          {{ locale === 'zh' ? '联系我们' : 'Contact Us' }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()

const collectionName = computed(() => locale.value === 'zh' ? 'docs_zh' : 'docs_en')

const { data: allDocs } = await useAsyncData(
  `docs-index-${locale.value}`,
  () => queryCollection(collectionName.value).order('order', 'ASC').all()
)

const groupedDocs = computed(() => {
  if (!allDocs.value) return {}
  return allDocs.value.reduce((groups, d) => {
    const cat = d.category || 'General'
    if (!groups[cat]) groups[cat] = []
    groups[cat].push(d)
    return groups
  }, {})
})

const categoryIcons = {
  '入门': 'bi-rocket-takeoff',
  '使用说明': 'bi-book-half',
  '技巧': 'bi-lightbulb',
  '帮助': 'bi-question-circle',
  'Getting Started': 'bi-rocket-takeoff',
  'Usage': 'bi-book-half',
  'Tips': 'bi-lightbulb',
  'Help': 'bi-question-circle',
}

const getCategoryIcon = (name) => categoryIcons[name] || 'bi-folder'

useHead(computed(() => ({
  title: locale.value === 'zh' ? '文档中心 - ReSocks' : 'Documentation - ReSocks',
  meta: [
    {
      name: 'description',
      content: locale.value === 'zh'
        ? 'ReSocks 帮助文档，包含安装指南、使用说明、使用技巧和常见问题解答'
        : 'ReSocks documentation including installation guides, usage instructions, tips and FAQ'
    }
  ]
})))
</script>
