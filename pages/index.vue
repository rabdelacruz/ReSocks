<template>
  <div class="pt-20">

    <!-- Hero Section -->
    <section class="min-h-screen flex items-center bg-white relative overflow-hidden">
      <!-- Subtle background pattern -->
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 1px 1px, rgb(184 134 11) 1px, transparent 0); background-size: 40px 40px;"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left Content -->
          <div data-aos="fade-right">
            <div class="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-6">
              {{ locale === 'zh' ? 'SOCKS5 中继 · TLS 安全中转' : 'A TLS relay for your SOCKS5 proxy' }}
            </div>
            
            <h1 class="text-6xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
              ReSocks
            </h1>

            <p class="text-2xl md:text-3xl font-semibold text-primary-600 mb-6">
              {{ locale === 'zh' ? '保留你的代理，换一条连接路径' : 'Your SOCKS5 proxy. A new path to it.' }}
            </p>

            <div class="border-l-4 border-primary-600 bg-primary-50/60 rounded-r-lg px-5 py-4 mb-12">
              <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                {{ locale === 'zh'
                  ? '接入你自己的 SOCKS5 代理，通过 TLS 中继连接。保留你选择的出口，自由决定哪些应用和网站走代理。'
                  : 'Bring your own SOCKS5 proxy and reach it through a TLS relay. Keep the exit you chose, and decide which apps and websites use it.'
                }}
              </p>
            </div>
            
            <div class="space-y-4 mb-12">
              <div class="flex items-start gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2.5 flex-shrink-0"></div>
                <span class="text-lg text-gray-700">{{ locale === 'zh' ? '支持自建、住宅、移动及第三方 SOCKS5 代理' : 'Use your own, residential, mobile, or third-party SOCKS5 proxy' }}</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2.5 flex-shrink-0"></div>
                <span class="text-lg text-gray-700">{{ locale === 'zh' ? '通过 TLS 加密设备到中继服务器的连接' : 'Protect the connection from your device to the relay with TLS' }}</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2.5 flex-shrink-0"></div>
                <span class="text-lg text-gray-700">{{ locale === 'zh' ? '支持 TUN 与系统代理模式，按应用和网站分流' : 'Choose TUN or system proxy mode, with app and site routing' }}</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2.5 flex-shrink-0"></div>
                <span class="text-lg text-gray-700">{{ locale === 'zh' ? '使用全球中继节点，年付或三年套餐还可自建中继' : 'Use global relays, or self-host with an Annual or 3-Year plan' }}</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2.5 flex-shrink-0"></div>
                <span class="text-lg text-gray-700">{{ locale === 'zh' ? '支持 macOS、Windows、Linux、iOS、Android 和 HarmonyOS' : 'macOS, Windows, Linux, iOS, Android, and HarmonyOS' }}</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/download" class="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/20">
                <i class="bi bi-download"></i>
                {{ locale === 'zh' ? '立即下载' : 'Download ReSocks' }}
              </NuxtLink>
              <NuxtLink to="/demo" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all">
                {{ locale === 'zh' ? '查看演示' : 'Watch the demo' }}
              </NuxtLink>
            </div>
          </div>

          <!-- Right Image Carousel -->
          <div data-aos="fade-left">
            <div class="relative">
              <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-xl">
                <img 
                  :src="currentImage" 
                  alt="ReSocks App" 
                  class="w-full rounded-xl shadow-2xl"
                />
                <div class="absolute bottom-12 left-0 right-0 flex justify-center gap-2">
                  <button
                    v-for="(img, index) in carouselImages"
                    :key="index"
                    @click="currentImageIndex = index"
                    class="h-1.5 rounded-full transition-all"
                    :class="currentImageIndex === index ? 'bg-primary-600 w-8' : 'bg-gray-400 w-1.5'"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Relay architecture: localized website edition of the launch diagram. -->
    <section class="py-24 bg-white" aria-labelledby="how-it-works-title">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 id="how-it-works-title" class="text-4xl md:text-5xl font-bold text-gray-900">
            {{ locale === 'zh' ? '工作原理' : 'How it works' }}
          </h2>
        </div>
        <figure class="w-full">
          <div class="overflow-x-auto rounded-2xl border border-gray-100" tabindex="0" :aria-label="locale === 'zh' ? '连接架构图，可横向滚动查看' : 'Connection diagram; scroll horizontally to explore'">
            <img
              :src="locale === 'zh' ? '/images/how-it-works-zh.svg' : '/images/how-it-works-en.svg'"
              :alt="locale === 'zh' ? '设备上的 ReSocks 客户端通过 TLS 连接中继，再经由你自己的 SOCKS5 代理访问互联网。' : 'The ReSocks client connects through a TLS relay to your SOCKS5 proxy, which remains the exit to the internet.'"
              width="1270" height="660"
              loading="lazy" decoding="async"
              class="block w-full min-w-[720px] h-auto"
            />
          </div>
          <figcaption class="mt-4 text-sm text-gray-600 text-center sm:hidden">
            {{ locale === 'zh' ? '设备 → TLS 中继 → 你的 SOCKS5 代理 → 互联网。左右滑动查看完整架构图。' : 'Device → TLS relay → your SOCKS5 proxy → internet. Swipe to explore the diagram.' }}
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {{ locale === 'zh' ? '使用场景' : 'Use Cases' }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ locale === 'zh' ? '已有代理，还需要更合适的连接方式。' : 'When your existing proxy needs a different path.' }}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(useCase, index) in useCases" :key="index" class="flex items-center gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-100" data-aos="fade-up" :data-aos-delay="index * 100">
            <div class="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
              <i :class="useCase.icon" class="text-lg text-primary-600"></i>
            </div>
            <p class="text-gray-700 leading-relaxed">{{ useCase.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Exclusive Features Section -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {{ locale === 'zh' ? '连接方式，由你掌控' : 'Keep control of your connection' }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ locale === 'zh' ? '出口、中继和分流规则，都由你选择。' : 'Choose your exit, your relay, and your routing rules.' }}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(feature, index) in exclusiveFeatures" :key="index" class="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100" data-aos="fade-up" :data-aos-delay="index * 100">
            <div class="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
              <i :class="feature.icon" class="text-2xl text-primary-600"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">{{ feature.title }}</h3>
            <div class="space-y-2 mb-4">
              <p class="text-gray-600" v-for="(desc, i) in feature.descriptions" :key="i">{{ desc }}</p>
            </div>
            <p class="text-sm text-gray-500">{{ feature.note }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Access Section -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 md:p-16 text-white" data-aos="fade-up">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div class="lg:col-span-2">
              <h2 class="text-4xl md:text-5xl font-bold mb-6">
                {{ locale === 'zh' ? '带上你的代理，试试新的连接方式' : 'Bring your proxy. Try the relay.' }}
              </h2>
              <p class="text-xl text-primary-50 leading-relaxed">
                {{ locale === 'zh' 
                  ? '下载 ReSocks，添加 SOCKS5 代理，选择中继后即可连接。先试用，满意后在客户端内购买。'
                  : 'Download ReSocks, add your SOCKS5 endpoint, choose a relay, and connect. Try it first, then purchase a plan in the client.'
                }}
              </p>
            </div>
            <div class="text-center lg:text-right">
              <p class="text-lg font-medium mb-6 text-primary-50">
                {{ locale === 'zh' ? '桌面端和 Android 可免费试用' : 'Free trial on desktop and Android' }}
              </p>
              <NuxtLink to="/download" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all">
                <i class="bi bi-arrow-down-circle"></i>
                {{ locale === 'zh' ? '立即下载' : 'Download ReSocks' }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {{ locale === 'zh' ? '让代理融入日常使用' : 'Built for everyday proxy use' }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ locale === 'zh' ? '从单个应用，到局域网中的其他设备。' : 'From a single app to other devices on your network.' }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(feature, index) in features" 
            :key="index" 
            class="rounded-2xl p-8 transition-all" 
            :class="[
              feature.bgClass || 'bg-white border border-gray-100 hover:shadow-lg', 
              feature.colSpan || '', 
              feature.isButton ? 'flex items-center justify-center bg-gray-900' : ''
            ]"
            data-aos="fade-up" 
            :data-aos-delay="index * 50"
          >
            <NuxtLink v-if="feature.isButton" to="/demo" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all">
              <i class="bi bi-play-circle"></i>
              {{ locale === 'zh' ? '查看演示视频' : 'Watch the demo' }}
            </NuxtLink>
            <template v-else>
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6" :class="feature.bgClass ? 'bg-white/10' : 'bg-primary-50'">
                <i :class="[feature.icon, feature.bgClass ? 'text-white text-2xl' : 'text-primary-600 text-2xl']"></i>
              </div>
              <h3 class="text-xl font-bold mb-3" :class="feature.bgClass ? 'text-white' : 'text-gray-900'">{{ feature.title }}</h3>
              <p class="whitespace-pre-line leading-relaxed" :class="feature.bgClass ? 'text-white/90' : 'text-gray-600'">{{ feature.description }}</p>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- For people who already use a proxy Section -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {{ locale === 'zh' ? '适合已有代理需求的你' : 'For people who already use a proxy' }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ locale === 'zh' 
              ? '保留适合你的代理出口，选择更合适的连接方式。'
              : 'Keep the endpoint that fits your work. Choose how you connect to it.'
            }}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(user, index) in targetUsers" :key="index" class="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100" data-aos="fade-up" :data-aos-delay="index * 50">
            <div class="mb-6">
              <i :class="user.icon" class="text-7xl text-primary-600"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">{{ user.title }}</h3>
            <p class="text-gray-600 text-base leading-relaxed">{{ user.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cross Platform Section -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {{ locale === 'zh' ? '一个账号，连接多种设备' : 'One account, across your devices' }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ locale === 'zh' ? '支持六大平台，最多八台设备同时在线。' : 'Six supported platforms. Up to eight devices online at once.' }}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div v-for="(platform, index) in platforms" :key="index" class="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all" data-aos="fade-up" :data-aos-delay="index * 50">
            <div class="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
              <i :class="platform.icon" class="text-3xl text-primary-600"></i>
            </div>
            <h3 class="text-xl font-bold mb-6 text-gray-900">{{ platform.title }}</h3>
            <ul class="space-y-3">
              <li v-for="(item, i) in platform.items" :key="i" class="flex items-start gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                <span class="text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Download CTA -->
        <div class="text-center" data-aos="fade-up">
          <NuxtLink to="/download" class="inline-flex items-center gap-2 px-10 py-5 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/20">
            <i class="bi bi-download"></i>
            {{ locale === 'zh' ? '选择适合你的版本' : 'Find your download' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4" data-aos="fade-up">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {{ locale === 'zh' ? '常见问题' : 'A few things to know' }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ locale === 'zh' ? '快速了解设置、隐私与套餐。' : 'Setup, privacy, and plans—explained simply.' }}
          </p>
        </div>
        <div class="max-w-4xl mx-auto space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100" data-aos="fade-up" :data-aos-delay="index * 50">
            <button 
              @click="toggleFaq(index)"
              class="w-full text-left flex items-center justify-between px-8 py-6 hover:bg-gray-100 transition-colors"
            >
              <span class="font-semibold text-gray-900 text-lg">
                {{ faq.question }}
              </span>
              <i :class="activeFaq === index ? 'bi bi-chevron-up' : 'bi bi-chevron-down'" class="text-xl flex-shrink-0 ml-4 text-gray-400"></i>
            </button>
            <div v-if="activeFaq === index" class="px-8 pb-6">
              <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

const { locale } = useI18n();

// Home-page metadata follows the selected language.
const homeTitle = computed(() => locale.value === 'zh'
  ? 'ReSocks — 为你的 SOCKS5 代理提供 TLS 中继'
  : 'ReSocks — A TLS relay for your SOCKS5 proxy');
const homeDescription = computed(() => locale.value === 'zh'
  ? '接入自己的 SOCKS5 代理，通过 TLS 中继连接。支持应用与网站分流、HTTP/HTTPS 局域网共享，以及多平台使用。'
  : 'Bring your own SOCKS5 proxy. Connect through a TLS relay, route apps and sites, and share access with compatible LAN devices.');
useHead(computed(() => ({
  title: homeTitle.value,
  meta: [
    { name: 'description', content: homeDescription.value },
    { name: 'keywords', content: locale.value === 'zh'
      ? 'ReSocks, SOCKS5代理, TLS中继, 应用分流, 网站分流, 局域网代理共享, 自建中继'
      : 'ReSocks, SOCKS5 proxy, TLS relay, app routing, domain routing, LAN proxy sharing, self-hosted relay' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'ReSocks' },
    { property: 'og:title', content: homeTitle.value },
    { property: 'og:description', content: homeDescription.value },
    { property: 'og:image', content: '/images/favicon.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: homeTitle.value },
    { name: 'twitter:description', content: homeDescription.value },
  ],
})));

// Carousel
const carouselImages = computed(() => {
  const prefix = locale.value === 'zh' ? 'previewcn' : 'previewen';
  return [
    `/images/${prefix}01.png`,
    `/images/${prefix}02.png`,
    `/images/${prefix}03.png`,
  ];
});
const currentImageIndex = ref(0);
const currentImage = computed(() => carouselImages.value[currentImageIndex.value]);

let carouselInterval;

onMounted(() => {
  carouselInterval = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % carouselImages.value.length;
  }, 4000);
});

onUnmounted(() => {
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }
});

// Use Cases
const useCases = computed(() => locale.value === 'zh' ? [
  {
    "text": "当前网络无法直接连接你的 SOCKS5 代理。",
    "icon": "bi bi-slash-circle"
  },
  {
    "text": "直连速度不理想，想试试不同的中继路径。",
    "icon": "bi bi-speedometer"
  },
  {
    "text": "只让部分应用或网站走代理，其余保持直连。",
    "icon": "bi bi-diagram-3"
  },
  {
    "text": "已有住宅或移动 SOCKS5 代理，希望用于更多应用。",
    "icon": "bi bi-house-fill"
  },
  {
    "text": "在公共 Wi-Fi 等网络上，通过 TLS 保护设备到中继的流量。",
    "icon": "bi bi-shield-lock"
  },
  {
    "text": "希望自建中继，自己管理到代理出口的连接路径。",
    "icon": "bi bi-server"
  }
] : [
  {
    "text": "Your network cannot reach your SOCKS5 proxy directly.",
    "icon": "bi bi-slash-circle"
  },
  {
    "text": "Direct access is slow, and you want to try another route.",
    "icon": "bi bi-speedometer"
  },
  {
    "text": "Some apps or sites need a proxy. Others should connect directly.",
    "icon": "bi bi-diagram-3"
  },
  {
    "text": "You already have a residential or mobile SOCKS5 endpoint.",
    "icon": "bi bi-house-fill"
  },
  {
    "text": "You want TLS protection between your device and relay on public Wi-Fi.",
    "icon": "bi bi-shield-lock"
  },
  {
    "text": "You want to host and manage your own relay.",
    "icon": "bi bi-server"
  }
]);

// Exclusive Features
const exclusiveFeatures = computed(() => locale.value === 'zh' ? [
  {
    "title": "自选 SOCKS5 出口",
    "descriptions": [
      "自建或第三方 SOCKS5 代理",
      "支持住宅和移动代理"
    ],
    "note": "不绑定上游代理服务商",
    "icon": "bi bi-house-fill"
  },
  {
    "title": "应用与网站分流",
    "descriptions": [
      "指定应用或域名走代理",
      "让其他流量保持直连"
    ],
    "note": "规则由你决定",
    "icon": "bi bi-lightning-charge-fill"
  },
  {
    "title": "自建中继",
    "descriptions": [
      "在自己的服务器上部署 resocksrv",
      "自己管理中继路径"
    ],
    "note": "适用于年付和三年套餐",
    "icon": "bi bi-hdd-network-fill"
  },
  {
    "title": "两种连接模式",
    "descriptions": [
      "TUN 覆盖不遵循系统代理的应用",
      "系统代理适用于支持代理设置的应用"
    ],
    "note": "按设备和使用需求选择",
    "icon": "bi bi-arrow-left-right"
  },
  {
    "title": "TLS 中继连接",
    "descriptions": [
      "加密设备到中继之间的流量",
      "减少本地网络对这段流量的窥探"
    ],
    "note": "加密范围为客户端到中继这一段",
    "icon": "bi bi-shield-lock-fill"
  },
  {
    "title": "全球中继节点",
    "descriptions": [
      "为现有 SOCKS5 代理选择中继",
      "直连不理想时尝试其他路径"
    ],
    "note": "实际速度取决于网络和上游代理",
    "icon": "bi bi-globe2"
  }
] : [
  {
    "title": "Bring your own proxy",
    "descriptions": [
      "Use your own or a third-party SOCKS5 endpoint",
      "Residential and mobile proxies welcome"
    ],
    "note": "Keep your choice of provider",
    "icon": "bi bi-house-fill"
  },
  {
    "title": "App and site routing",
    "descriptions": [
      "Send selected apps or domains through the proxy",
      "Let other traffic connect directly"
    ],
    "note": "Your traffic, your rules",
    "icon": "bi bi-lightning-charge-fill"
  },
  {
    "title": "Host your own relay",
    "descriptions": [
      "Deploy resocksrv on your server",
      "Manage the relay path yourself"
    ],
    "note": "Available on Annual and 3-Year plans",
    "icon": "bi bi-hdd-network-fill"
  },
  {
    "title": "Two connection modes",
    "descriptions": [
      "TUN covers apps that ignore system proxy settings",
      "System proxy works with proxy-aware apps"
    ],
    "note": "Choose the mode that fits your setup",
    "icon": "bi bi-arrow-left-right"
  },
  {
    "title": "TLS relay connection",
    "descriptions": [
      "Encrypt traffic from your device to the relay",
      "Protect that traffic from local network observers"
    ],
    "note": "TLS protects the client-to-relay hop",
    "icon": "bi bi-shield-lock-fill"
  },
  {
    "title": "Global relay nodes",
    "descriptions": [
      "Choose a relay for your existing SOCKS5 proxy",
      "Try another path when direct access falls short"
    ],
    "note": "Performance depends on your network and proxy",
    "icon": "bi bi-globe2"
  }
]);

// Target Users
const targetUsers = computed(() => locale.value === 'zh' ? [
  {
    "title": "开发与测试",
    "description": "使用自己的代理测试应用、网站和地区访问。",
    "icon": "bi bi-code-slash"
  },
  {
    "title": "住宅代理用户",
    "description": "将已有住宅 SOCKS5 接入日常应用。",
    "icon": "bi bi-house"
  },
  {
    "title": "移动代理用户",
    "description": "保留移动代理出口，灵活选择连接路径。",
    "icon": "bi bi-phone"
  },
  {
    "title": "自建服务用户",
    "description": "自己选择代理出口，也可以自己部署中继。",
    "icon": "bi bi-server"
  },
  {
    "title": "远程办公",
    "description": "按应用设置代理，让工作流保持清晰。",
    "icon": "bi bi-laptop"
  },
  {
    "title": "国际业务团队",
    "description": "为跨地区业务选择合适的代理与路由。",
    "icon": "bi bi-briefcase"
  },
  {
    "title": "注重隐私的用户",
    "description": "通过 TLS 保护设备到中继的连接。",
    "icon": "bi bi-shield-lock"
  },
  {
    "title": "多设备用户",
    "description": "通过 HTTP/HTTPS 共享给兼容的局域网设备。",
    "icon": "bi bi-share"
  }
] : [
  {
    "title": "Developers and QA",
    "description": "Test apps, websites, and regional access through your own proxy.",
    "icon": "bi bi-code-slash"
  },
  {
    "title": "Residential proxy users",
    "description": "Use your existing residential SOCKS5 endpoint across your apps.",
    "icon": "bi bi-house"
  },
  {
    "title": "Mobile proxy users",
    "description": "Keep your mobile proxy endpoint and choose how to reach it.",
    "icon": "bi bi-phone"
  },
  {
    "title": "Self-hosters",
    "description": "Choose your own exit and, on eligible plans, host the relay too.",
    "icon": "bi bi-server"
  },
  {
    "title": "Remote workers",
    "description": "Route work apps through your proxy and keep other traffic direct.",
    "icon": "bi bi-laptop"
  },
  {
    "title": "International teams",
    "description": "Use the proxy and routing rules that fit your regional workflows.",
    "icon": "bi bi-briefcase"
  },
  {
    "title": "Privacy-conscious users",
    "description": "Add TLS protection to the connection between your device and relay.",
    "icon": "bi bi-shield-lock"
  },
  {
    "title": "Multi-device users",
    "description": "Share an HTTP/HTTPS proxy with compatible LAN devices.",
    "icon": "bi bi-share"
  }
]);

// Platforms
const platforms = computed(() => locale.value === 'zh' ? [
  {
    "title": "桌面端",
    "icon": "bi bi-laptop",
    "items": [
      "macOS",
      "Windows",
      "Linux"
    ]
  },
  {
    "title": "移动端",
    "icon": "bi bi-phone",
    "items": [
      "iOS",
      "Android",
      "HarmonyOS"
    ]
  },
  {
    "title": "多设备使用",
    "icon": "bi bi-cloud-check-fill",
    "items": [
      "一个账号跨平台使用",
      "最多八台设备同时在线",
      "按设备选择连接方式"
    ]
  },
  {
    "title": "安装与购买",
    "icon": "bi bi-download",
    "items": [
      "在客户端内购买套餐",
      "iOS 按客户端内指引设置",
      "HarmonyOS NEXT 需使用卓易通"
    ]
  }
] : [
  {
    "title": "Desktop",
    "icon": "bi bi-laptop",
    "items": [
      "macOS",
      "Windows",
      "Linux"
    ]
  },
  {
    "title": "Mobile",
    "icon": "bi bi-phone",
    "items": [
      "iOS",
      "Android",
      "HarmonyOS"
    ]
  },
  {
    "title": "Multiple devices",
    "icon": "bi bi-cloud-check-fill",
    "items": [
      "One account across platforms",
      "Up to eight devices online at once",
      "Choose a mode for each device"
    ]
  },
  {
    "title": "Getting started",
    "icon": "bi bi-download",
    "items": [
      "Purchase plans in the client",
      "Follow the in-client iOS setup",
      "HarmonyOS NEXT requires ZhuoYiTong"
    ]
  }
]);

// Features
const features = computed(() => locale.value === 'zh' ? [
  {
    "title": "灵活选择中继",
    "description": "使用全球节点，或通过支持的套餐自建中继。",
    "icon": "bi bi-globe2"
  },
  {
    "title": "覆盖更多应用",
    "description": "通过 TUN 模式连接不遵循系统代理设置的应用。",
    "icon": "bi bi-arrow-left-right"
  },
  {
    "title": "先试用，再购买",
    "description": "桌面端和 Android 可免注册开始试用，购买在客户端内完成。",
    "icon": "bi bi-shield-check"
  },
  {
    "title": "不限中继流量",
    "description": "付费套餐不限中继流量；上游代理或自建服务器可能另有限额。",
    "icon": "bi bi-infinity",
    "bgClass": "bg-gray-800 text-white"
  },
  {
    "title": "局域网代理共享",
    "description": "通过 HTTP/HTTPS 共享给兼容的电脑、电视或游戏机；暂不支持 SOCKS5 共享。",
    "icon": "bi bi-share",
    "bgClass": "bg-gray-600 text-white"
  },
  {
    "title": "IPv6 支持",
    "description": "支持 IPv4 与 IPv6，实际连接取决于网络、中继和上游代理。",
    "icon": "bi bi-diagram-3",
    "bgClass": "bg-blue-500 text-white"
  },
  {
    "title": "代理或直连，由你决定",
    "description": "按应用和域名设置规则，让需要的流量走代理，其余保持直连。",
    "icon": "bi bi-lightning-charge",
    "bgClass": "gradient-primary text-white",
    "colSpan": "md:col-span-2"
  },
  {
    "title": "",
    "description": "",
    "icon": "",
    "isButton": true
  }
] : [
  {
    "title": "A choice of relays",
    "description": "Use global nodes, or host your own relay on an eligible plan.",
    "icon": "bi bi-globe2"
  },
  {
    "title": "Reach more apps",
    "description": "Use TUN mode for apps that ignore system proxy settings.",
    "icon": "bi bi-arrow-left-right"
  },
  {
    "title": "Try before you buy",
    "description": "Start a trial on desktop or Android without registering. Purchase in the client.",
    "icon": "bi bi-shield-check"
  },
  {
    "title": "No relay data cap",
    "description": "Paid plans have no relay data cap. Your proxy or hosting provider may have its own limits.",
    "icon": "bi bi-infinity",
    "bgClass": "bg-gray-800 text-white"
  },
  {
    "title": "LAN proxy sharing",
    "description": "Share via HTTP/HTTPS with compatible laptops, TVs, or consoles. SOCKS5 sharing is not currently supported.",
    "icon": "bi bi-share",
    "bgClass": "bg-gray-600 text-white"
  },
  {
    "title": "IPv6 support",
    "description": "Support for IPv4 and IPv6, subject to your network, relay, and upstream proxy.",
    "icon": "bi bi-diagram-3",
    "bgClass": "bg-blue-500 text-white"
  },
  {
    "title": "Proxy or direct—it’s your call",
    "description": "Set app and domain rules so the traffic you choose uses the proxy and the rest connects directly.",
    "icon": "bi bi-lightning-charge",
    "bgClass": "gradient-primary text-white",
    "colSpan": "md:col-span-2"
  },
  {
    "title": "",
    "description": "",
    "icon": "",
    "isButton": true
  }
]);

// FAQ
const activeFaq = ref(null);
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

const faqs = computed(() => locale.value === 'zh' ? [
  {
    "question": "ReSocks 会提供 SOCKS5 代理 IP 吗？",
    "answer": "你需要提供自己的 SOCKS5 代理。ReSocks 提供连接它的中继通道和客户端，上游代理仍然是你的出口。"
  },
  {
    "question": "为什么不直接连接 SOCKS5 代理？",
    "answer": "直连不稳定或速度不理想时，可以尝试中继路径。即使直连正常，TLS 也能保护设备到中继之间的流量，适合公共 Wi-Fi 等场景；这不代表匿名或所有链路都被加密。"
  },
  {
    "question": "可以免费试用吗？",
    "answer": "可以。桌面端和 Android 可免注册开始试用。iOS 需按照客户端内的安装和订阅指引设置。"
  },
  {
    "question": "在哪里购买套餐？",
    "answer": "在 ReSocks 客户端内购买。套餐按所选时长一次性付款，到期不会自动续费。"
  },
  {
    "question": "可以自建中继吗？",
    "answer": "可以。年付和三年套餐支持部署并使用自己的 resocksrv 中继服务器，月付和半年套餐不支持。"
  },
  {
    "question": "支持哪些代理共享方式？",
    "answer": "目前支持 HTTP/HTTPS 局域网代理共享，暂不支持 SOCKS5 共享。其他设备或应用需要支持相应的代理设置。"
  },
  {
    "question": "一个账号能同时使用几台设备？",
    "answer": "一个账号最多支持八台设备同时在线，可跨平台使用。"
  },
  {
    "question": "购买后可以退款吗？",
    "answer": "可以。购买后七天内如不满意，可联系支持申请退款。"
  }
] : [
  {
    "question": "Does ReSocks provide proxy IPs?",
    "answer": "You bring the SOCKS5 endpoint. ReSocks provides the relay path and client; your chosen proxy remains the exit."
  },
  {
    "question": "Why use a relay instead of connecting directly?",
    "answer": "A relay offers another path when direct access is unreliable or slow. Even when direct access works, TLS protects traffic between your device and relay—for example, on public Wi-Fi. It does not make you anonymous or encrypt every hop."
  },
  {
    "question": "Can I try it for free?",
    "answer": "Yes. Start a trial on desktop or Android without registering. For iOS, follow the installation and subscription instructions in the client."
  },
  {
    "question": "Where do I purchase a plan?",
    "answer": "Purchase inside the ReSocks client. Plans are prepaid for the term you choose, with no automatic renewal."
  },
  {
    "question": "Can I host my own relay?",
    "answer": "Yes. Annual and 3-Year plans support your own resocksrv relay. Monthly and 6-Month plans do not include custom relays."
  },
  {
    "question": "Which sharing protocols are supported?",
    "answer": "LAN Proxy Sharing supports HTTP/HTTPS. SOCKS5 sharing is not currently supported. The receiving device or app must support the proxy settings."
  },
  {
    "question": "How many devices can I use at once?",
    "answer": "One account supports up to eight devices online simultaneously, across supported platforms."
  },
  {
    "question": "Can I request a refund?",
    "answer": "Yes. If you are not satisfied, contact support within seven days of purchase to request a refund."
  }
]);
</script>
