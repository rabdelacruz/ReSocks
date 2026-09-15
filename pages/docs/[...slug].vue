<template>
  <div class="pt-20 min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 py-10 flex gap-8">

      <!-- Sidebar -->
      <aside class="hidden lg:block w-64 flex-shrink-0">
        <div class="sticky top-28">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <!-- Sidebar Header -->
            <div class="gradient-primary px-5 py-4">
              <h2 class="text-white font-bold text-lg flex items-center gap-2">
                <i class="bi bi-book"></i>
                {{ locale === 'zh' ? '文档中心' : 'Documentation' }}
              </h2>
            </div>

            <!-- Nav Groups -->
            <nav class="p-3">
              <div v-for="(group, groupName) in groupedDocs" :key="groupName" class="mb-4">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 py-1 mb-1">
                  {{ groupName }}
                </p>
                <NuxtLink
                  v-for="d in group"
                  :key="d.path"
                  :to="localePath('/docs/' + d.stem.split('/').pop())"
                  class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  :class="currentStem === d.stem.split('/').pop()
                    ? 'bg-primary-50 text-primary-600 border-l-2 border-primary-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary-500'"
                >
                  <i :class="d.icon || 'bi-file-text'" class="text-base flex-shrink-0"></i>
                  <span class="truncate">{{ d.title }}</span>
                </NuxtLink>
              </div>
            </nav>
          </div>

          <!-- Download CTA -->
          <div class="mt-4 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-5 text-white shadow-lg">
            <i class="bi bi-download text-2xl mb-2 block"></i>
            <p class="font-bold mb-1">{{ locale === 'zh' ? '立即下载' : 'Download Now' }}</p>
            <p class="text-primary-100 text-xs mb-3">
              {{ locale === 'zh' ? '支持全平台，免费试用' : 'All platforms, free trial' }}
            </p>
            <NuxtLink
              :to="localePath('/download')"
              class="block text-center bg-white text-primary-600 font-semibold text-sm py-2 rounded-lg hover:bg-primary-50 transition-colors"
            >
              {{ locale === 'zh' ? '前往下载' : 'Go to Download' }}
            </NuxtLink>
          </div>
        </div>
      </aside>

      <!-- Mobile TOC Toggle -->
      <div class="lg:hidden fixed bottom-6 right-6 z-40">
        <button
          @click="showMobileSidebar = !showMobileSidebar"
          class="w-12 h-12 gradient-primary rounded-full shadow-xl text-white flex items-center justify-center text-xl"
        >
          <i :class="showMobileSidebar ? 'bi-x-lg' : 'bi-list-ul'"></i>
        </button>
      </div>

      <!-- Mobile Sidebar Overlay -->
      <Transition name="slide-fade">
        <div v-if="showMobileSidebar" class="lg:hidden fixed inset-0 z-30 flex">
          <div class="absolute inset-0 bg-black/50" @click="showMobileSidebar = false"></div>
          <div class="relative w-72 bg-white h-full shadow-2xl overflow-y-auto">
            <div class="gradient-primary px-5 py-4 flex items-center justify-between">
              <h2 class="text-white font-bold text-lg">
                {{ locale === 'zh' ? '文档中心' : 'Documentation' }}
              </h2>
              <button @click="showMobileSidebar = false" class="text-white text-xl">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
            <nav class="p-3">
              <div v-for="(group, groupName) in groupedDocs" :key="groupName" class="mb-4">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 py-1 mb-1">
                  {{ groupName }}
                </p>
                <NuxtLink
                  v-for="d in group"
                  :key="d.path"
                  :to="localePath('/docs/' + d.stem.split('/').pop())"
                  @click="showMobileSidebar = false"
                  class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  :class="currentStem === d.stem.split('/').pop()
                    ? 'bg-primary-50 text-primary-600 border-l-2 border-primary-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary-500'"
                >
                  <i :class="d.icon || 'bi-file-text'" class="text-base flex-shrink-0"></i>
                  <span class="truncate">{{ d.title }}</span>
                </NuxtLink>
              </div>
            </nav>
          </div>
        </div>
      </Transition>

      <!-- Main Content -->
      <main class="flex-1 min-w-0">
        <div v-if="doc" class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <!-- Doc Header -->
          <div class="border-b border-gray-100 px-8 py-6 bg-gradient-to-r from-gray-50 to-white">
            <div class="flex items-center gap-2 text-sm text-gray-400 mb-3">
              <NuxtLink :to="localePath('/docs')" class="hover:text-primary-500 transition-colors">
                {{ locale === 'zh' ? '文档' : 'Docs' }}
              </NuxtLink>
              <i class="bi bi-chevron-right text-xs"></i>
              <span class="text-gray-500">{{ doc.category }}</span>
              <i class="bi bi-chevron-right text-xs"></i>
              <span class="text-primary-500 font-medium">{{ doc.title }}</span>
            </div>
            <h1 class="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span class="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <i :class="doc.icon || 'bi-file-text'" class="text-white text-lg"></i>
              </span>
              {{ doc.title }}
            </h1>
            <p v-if="doc.description" class="text-gray-500 mt-2 ml-13 pl-1">{{ doc.description }}</p>
          </div>

          <!-- Markdown Content -->
          <div class="px-8 py-8">
            <ContentRenderer :value="doc" class="docs-content" />
          </div>

          <!-- Prev / Next Navigation -->
          <div class="border-t border-gray-100 px-8 py-6 flex justify-between gap-4">
            <NuxtLink
              v-if="prevDoc"
              :to="localePath('/docs/' + prevDoc.stem.split('/').pop())"
              class="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all group max-w-xs"
            >
              <i class="bi bi-arrow-left text-gray-400 group-hover:text-primary-500"></i>
              <div class="text-left">
                <p class="text-xs text-gray-400">{{ locale === 'zh' ? '上一篇' : 'Previous' }}</p>
                <p class="text-sm font-semibold text-gray-700 group-hover:text-primary-600">{{ prevDoc.title }}</p>
              </div>
            </NuxtLink>
            <div v-else></div>
            <NuxtLink
              v-if="nextDoc"
              :to="localePath('/docs/' + nextDoc.stem.split('/').pop())"
              class="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all group max-w-xs ml-auto"
            >
              <div class="text-right">
                <p class="text-xs text-gray-400">{{ locale === 'zh' ? '下一篇' : 'Next' }}</p>
                <p class="text-sm font-semibold text-gray-700 group-hover:text-primary-600">{{ nextDoc.title }}</p>
              </div>
              <i class="bi bi-arrow-right text-gray-400 group-hover:text-primary-500"></i>
            </NuxtLink>
          </div>
        </div>

        <!-- 404 / Empty State -->
        <div v-else class="bg-white rounded-2xl shadow-lg p-12 text-center">
          <i class="bi bi-file-earmark-x text-6xl text-gray-300 mb-4 block"></i>
          <h2 class="text-xl font-bold text-gray-700 mb-2">
            {{ locale === 'zh' ? '文档未找到' : 'Document Not Found' }}
          </h2>
          <p class="text-gray-500 mb-6">
            {{ locale === 'zh' ? '请从左侧菜单选择一个文档' : 'Please select a document from the sidebar' }}
          </p>
          <NuxtLink :to="localePath('/docs')" class="btn-primary inline-block">
            {{ locale === 'zh' ? '返回文档首页' : 'Back to Docs Home' }}
          </NuxtLink>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const showMobileSidebar = ref(false)

// Collection name based on locale
const collectionName = computed(() => locale.value === 'zh' ? 'docs_zh' : 'docs_en')

// Current slug = last path segment(s), e.g. "installation"
const currentStem = computed(() => {
  const params = route.params.slug
  if (!params) return ''
  
  // Handle array params (e.g., ['proxy-modes'] or ['proxy-modes', ''])
  if (Array.isArray(params)) {
    // Filter out empty strings and get the last valid segment
    const validSegments = params.filter(p => p && p.trim() !== '')
    return validSegments.length > 0 ? validSegments[validSegments.length - 1] : ''
  }
  
  // Handle string params
  return params.replace(/\/$/, '')
})

// Fetch all docs for sidebar
const { data: allDocs } = await useAsyncData(
  `docs-list-${locale.value}`,
  () => queryCollection(collectionName.value).order('order', 'ASC').all()
)

// Fetch current doc by stem
const { data: doc, refresh: refreshDoc } = await useAsyncData(
  `doc-${locale.value}-${currentStem.value}`,
  () => {
    const prefix = locale.value === 'zh' ? '/zh/docs' : '/en/docs'
    const stem = currentStem.value
    if (!stem) return null
    return queryCollection(collectionName.value)
      .where('path', '=', `${prefix}/${stem}`)
      .first()
  },
  {
    watch: [currentStem]
  }
)

// Group docs by category for sidebar
const groupedDocs = computed(() => {
  if (!allDocs.value) return {}
  return allDocs.value.reduce((groups, d) => {
    const cat = d.category || 'General'
    if (!groups[cat]) groups[cat] = []
    groups[cat].push(d)
    return groups
  }, {})
})

// Flat sorted list for prev/next
const sortedDocs = computed(() => allDocs.value || [])

const currentIndex = computed(() =>
  sortedDocs.value.findIndex(d => d.stem.split('/').pop() === currentStem.value)
)
const prevDoc = computed(() => currentIndex.value > 0 ? sortedDocs.value[currentIndex.value - 1] : null)
const nextDoc = computed(() => currentIndex.value < sortedDocs.value.length - 1 ? sortedDocs.value[currentIndex.value + 1] : null)

// Dynamic SEO
useHead(computed(() => ({
  title: doc.value
    ? `${doc.value.title} - ${locale.value === 'zh' ? '文档 - ReSocks' : 'Docs - ReSocks'}`
    : (locale.value === 'zh' ? '文档中心 - ReSocks' : 'Documentation - ReSocks'),
  meta: [
    {
      name: 'description',
      content: doc.value?.description || (locale.value === 'zh'
        ? 'ReSocks 使用文档，包含安装指南、使用说明和常见问题'
        : 'ReSocks documentation including installation guide, usage instructions and FAQ')
    }
  ]
})))
</script>

<style>
/* Docs Markdown Typography */
.docs-content h1 { @apply text-3xl font-bold text-gray-900 mt-8 mb-4 pb-3 border-b border-gray-100; }
.docs-content h2 { @apply text-2xl font-bold text-gray-800 mt-8 mb-4 pb-2 border-b border-gray-100; }
.docs-content h3 { @apply text-xl font-bold text-gray-700 mt-6 mb-3; }
.docs-content h4 { @apply text-lg font-semibold text-gray-700 mt-4 mb-2; }

.docs-content p  { @apply text-gray-600 leading-relaxed mb-4; }

.docs-content a  {
  @apply text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors;
}

.docs-content ul { @apply list-disc list-inside space-y-1 mb-4 text-gray-600 pl-2; }
.docs-content ol { @apply list-decimal list-inside space-y-1 mb-4 text-gray-600 pl-2; }
.docs-content li { @apply leading-relaxed; }
.docs-content li ul,
.docs-content li ol { @apply ml-4 mt-1; }

.docs-content table {
  @apply w-full mb-6 border-collapse rounded-xl overflow-hidden text-sm shadow-sm;
}
.docs-content thead { @apply bg-gray-50; }
.docs-content th {
  @apply px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200;
}
.docs-content td {
  @apply px-4 py-3 text-gray-600 border-b border-gray-100;
}
.docs-content tr:last-child td { @apply border-b-0; }
.docs-content tr:hover td { @apply bg-gray-50; }

.docs-content blockquote {
  @apply border-l-4 border-primary-400 bg-primary-50 px-5 py-3 rounded-r-xl mb-4 text-gray-600 italic;
}
.docs-content blockquote strong { @apply text-primary-700 not-italic; }

.docs-content pre {
  @apply rounded-xl mb-6 overflow-x-auto text-sm leading-relaxed shadow-inner;
}
.docs-content code:not(pre code) {
  @apply bg-gray-100 text-primary-600 px-1.5 py-0.5 rounded text-sm font-mono;
}

.docs-content hr { @apply my-8 border-gray-200; }
.docs-content strong { @apply font-semibold text-gray-800; }

/* Mobile sidebar transition */
.slide-fade-enter-active,
.slide-fade-leave-active { transition: opacity 0.25s ease; }
.slide-fade-enter-from,
.slide-fade-leave-to   { opacity: 0; }
</style>
