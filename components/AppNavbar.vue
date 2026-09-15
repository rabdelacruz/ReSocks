<template>
  <nav class="fixed w-full top-0 z-50 bg-white border-b border-gray-100 backdrop-blur-lg bg-white/95">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="flex items-center gap-3">
          <img src="/images/favicon.png" alt="ReSocks" class="h-8 w-8" />
          <span class="text-gray-900 text-xl font-bold tracking-tight">ReSocks</span>
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="localePath(item.path)"
            class="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors rounded-lg hover:bg-gray-50"
            active-class="text-primary-600 bg-primary-50"
          >
            {{ t(item.label) }}
          </NuxtLink>

          <!-- Language Switcher -->
          <div class="relative ml-2">
            <button
              @click="toggleLangMenu"
              class="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors rounded-lg hover:bg-gray-50 flex items-center gap-2"
            >
              <i class="bi bi-translate text-lg"></i>
              <span>{{ locale === 'zh' ? '中文' : 'EN' }}</span>
            </button>
            <div
              v-if="showLangMenu"
              class="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden"
            >
              <button
                @click="switchLocale('zh')"
                class="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                :class="{ 'bg-primary-50 text-primary-600': locale === 'zh' }"
              >
                中文
              </button>
              <button
                @click="switchLocale('en')"
                class="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                :class="{ 'bg-primary-50 text-primary-600': locale === 'en' }"
              >
                English
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-gray-900 p-2 text-2xl hover:bg-gray-50 rounded-lg transition-colors"
        >
          <i :class="showMobileMenu ? 'bi bi-x-lg' : 'bi bi-list'"></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="showMobileMenu"
        class="md:hidden pb-4 pt-2 border-t border-gray-100"
      >
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="localePath(item.path)"
          @click="showMobileMenu = false"
          class="block py-2.5 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors"
          active-class="text-primary-600 bg-primary-50"
        >
          {{ t(item.label) }}
        </NuxtLink>
        <div class="mt-2 pt-2 border-t border-gray-100">
          <button
            @click="switchLocale('zh')"
            class="block w-full text-left py-2.5 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors"
            :class="{ 'text-primary-600 bg-primary-50': locale === 'zh' }"
          >
            中文
          </button>
          <button
            @click="switchLocale('en')"
            class="block w-full text-left py-2.5 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors"
            :class="{ 'text-primary-600 bg-primary-50': locale === 'en' }"
          >
            English
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { t, locale, setLocale } = useI18n()
const localePath = useLocalePath()
const showMobileMenu = ref(false)
const showLangMenu = ref(false)

const navItems = [
  { path: '/', label: 'nav.home' },
  { path: '/demo', label: 'nav.demo' },
  { path: '/pricing', label: 'nav.pricing' },
  { path: '/download', label: 'nav.download' },
  { path: '/docs', label: 'nav.docs' },
  { path: '/contact', label: 'nav.contact' },
]

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const toggleLangMenu = () => {
  showLangMenu.value = !showLangMenu.value
}

const switchLocale = (lang) => {
  setLocale(lang)
  showLangMenu.value = false
  showMobileMenu.value = false
}
</script>
