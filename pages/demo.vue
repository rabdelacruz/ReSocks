<template>
  <div class="pt-16 min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="py-5 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto px-4">

        <!-- Main Video Demo -->
        <div class="mb-4">
          <div class="demo-video-container" data-aos="fade-up">
            <div class="relative w-full" 
                 style="background-image: url('/images/pcback.png'); 
                        background-size: contain; 
                        background-repeat: no-repeat; 
                        background-position: center; 
                        padding-bottom: 60.512%;">
              <div class="absolute" style="top: 4.9%; left: 9.9%; right: 9.9%; bottom: 8.5%;">
                <video controls autoplay muted loop style="display: block; width: 100%; height: 100%; object-fit: contain; background-color: #000;">
                  <source src="https://resocks.app/down/mov/src02.mp4" type="video/mp4">
                  {{ locale === 'zh' ? '您的浏览器不支持视频播放。' : 'Your browser does not support video playback.' }}
                </video>
              </div>
            </div>
          </div>
        </div>

        <!-- 4K Video Highlight -->
        <div>
          <div class="bg-white border border-gray-200 rounded-2xl p-8" data-aos="fade-up">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <i class="bi bi-badge-4k text-2xl text-primary-600"></i>
              </div>
              <div>
                <h4 class="text-xl font-bold mb-3 text-gray-900">
                  {{ locale === 'zh' ? '超高清视频播放体验' : 'Ultra HD Video Playback Experience' }}
                </h4>
                <p class="text-gray-600 mb-4">
                  {{ locale === 'zh' 
                    ? '看1080P视频？瞧不起谁呢！至少4K起，8K视频也毫无压力。'
                    : 'Watching 1080P videos? At least 4K, 8K videos are also no problem.'
                  }}
                </p>
                <p class="text-sm text-gray-500">
                  {{ locale === 'zh' 
                    ? '本视频演示了APP规则编辑，SOCKS5节点导入，无限中转服务器播放8K视频。速度超300000kbps。'
                    : 'This video demonstrates APP rule editing, SOCKS5 node import, and playing 8K videos with unlimited relay servers. Speed exceeds 300000kbps.'
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Quick Start Guide -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div>
          <div class="text-center mb-12" data-aos="fade-up">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {{ locale === 'zh' ? '快速入门指南' : 'Quick Start Guide' }}
            </h2>
            <p class="text-xl text-gray-600">
              {{ locale === 'zh' ? '五步开始使用 ReSocks' : 'Get started with ReSocks in five steps' }}
            </p>
          </div>

          <div class="space-y-4" data-aos="fade-up">
            <div v-for="(step, index) in quickStartSteps" :key="index" class="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition-all">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 rounded-xl bg-primary-600 text-white font-bold text-lg flex items-center justify-center">
                    {{ index + 1 }}
                  </div>
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-bold mb-1 text-gray-900">{{ step.title }}</h4>
                  <p class="text-gray-600 text-sm leading-relaxed">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-12" data-aos="fade-up">
            <NuxtLink to="/download" class="inline-flex items-center gap-2 px-10 py-5 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/20">
              <i class="bi bi-download"></i>
              {{ locale === 'zh' ? '立即下载' : 'Download Now' }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Demos (temporarily hidden, no videos yet) -->
    <section v-if="false" class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {{ locale === 'zh' ? '平台演示' : 'Platform Demos' }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ locale === 'zh' ? '查看不同平台的客户端演示' : 'View client demonstrations on different platforms' }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            v-for="(demo, index) in demos"
            :key="index"
            class="group cursor-pointer"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
            @click="openDemo(demo)"
          >
            <div class="relative overflow-hidden rounded-2xl mb-4 border border-gray-100">
              <img
                :src="demo.image"
                :alt="demo.title"
                class="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
                <div class="text-white">
                  <h3 class="text-2xl font-bold mb-1">{{ demo.title }}</h3>
                  <p class="text-gray-200 text-sm">{{ demo.platform }}</p>
                </div>
              </div>
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-all duration-300 shadow-lg">
                  <i class="bi bi-play-fill text-3xl text-primary-600 group-hover:text-white ml-1"></i>
                </div>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed">{{ demo.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tutorials Section -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {{ locale === 'zh' ? '使用教程' : 'Documentation' }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ locale === 'zh' ? '详细的使用指南和教程' : 'Detailed guides and tutorials' }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NuxtLink
            v-for="(tutorial, index) in tutorials"
            :key="index"
            :to="tutorial.link || '/docs'"
            class="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all group"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                <i class="bi bi-file-text-fill text-2xl text-primary-600 group-hover:text-white transition-colors"></i>
              </div>
              <div class="flex-1">
                <h4 class="font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">{{ tutorial.title }}</h4>
                <p class="text-sm text-gray-600 mb-2 leading-relaxed">{{ tutorial.description }}</p>
                <span class="text-xs text-gray-500">{{ tutorial.duration }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Tips Section -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {{ locale === 'zh' ? '使用技巧' : 'Usage Tips' }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ locale === 'zh' ? '掌握这些技巧，更好地使用 ReSocks' : 'Master these tips for better use of ReSocks' }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(tip, index) in usageTips"
            :key="index"
            class="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:bg-white hover:shadow-lg transition-all"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
              <i :class="tip.icon" class="text-3xl text-primary-600"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">{{ tip.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ tip.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-primary-600 to-primary-700">
      <div class="container mx-auto px-4">
        <div class="text-center" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            {{ locale === 'zh' ? '准备好开始了吗？' : 'Ready to Get Started?' }}
          </h2>
          <p class="text-xl text-primary-50 mb-10 leading-relaxed">
            {{ locale === 'zh' ? '立即下载体验 ReSocks 的强大功能，免费试用，无需注册' : 'Download now to experience ReSocks, free trial, no registration required' }}
          </p>
          <NuxtLink to="/download" class="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary-600 text-lg font-semibold rounded-lg hover:bg-primary-50 transition-all shadow-lg">
            <i class="bi bi-download"></i>
            {{ locale === 'zh' ? '免费下载' : 'Free Download' }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const { locale } = useI18n();

// 动态 SEO：响应语言切换
useHead(computed(() => ({
  title: locale.value === 'zh'
    ? '产品演示 - ReSocks SOCKS5 二次代理实测'
    : 'Product Demo - ReSocks SOCKS5 Relay',
  meta: [
    {
      name: 'description',
      content: locale.value === 'zh'
        ? '观看 ReSocks 真实演示视频，体验 SOCKS5 二次代理、TUN 模式与 TLS 中转的实际效果。'
        : 'Watch a real demo of ReSocks, the SOCKS5 relay tool. See TUN mode, TLS relay, and smart routing in action.'
    },
    { name: 'keywords', content: locale.value === 'zh' ? 'ReSocks演示, SOCKS5二次代理演示, TLS中转演示, 智能分流演示, TUN模式演示' : 'ReSocks demo, SOCKS5 relay demo, TLS relay demo, smart routing demo, TUN mode demo' },
    { property: 'og:title', content: locale.value === 'zh' ? '产品演示 - ReSocks SOCKS5 二次代理' : 'Product Demo - ReSocks' },
    {
      property: 'og:description',
      content: locale.value === 'zh'
        ? '观看 ReSocks 真实演示视频，体验 SOCKS5 二次代理、TUN 模式与 TLS 中转的实际效果。'
        : 'Watch a real demo of ReSocks, the SOCKS5 relay tool. See TUN mode, TLS relay, and smart routing in action.'
    },
  ]
})));

// Quick Start Steps
const quickStartSteps = computed(() => locale.value === 'zh' ? [
  {
    title: '下载并安装',
    description: '从下载页面选择适合您设备的版本，下载并安装 ReSocks'
  },
  {
    title: '启动应用',
    description: '打开 ReSocks 应用，首次使用可以免费试用，无需注册'
  },
  {
    title: '填入 SOCKS5 节点',
    description: '填入你自己或第三方的 SOCKS5 代理地址，并选择一个合适的 TLS 中转节点'
  },
  {
    title: '一键连接',
    description: '点击"连接"按钮，等待连接成功后即可开始使用'
  },
  {
    title: '畅游全球',
    description: '连接成功后，您可以自由访问全球网络，享受高速稳定的网络体验'
  }
] : [
  {
    title: 'Download and Install',
    description: 'Choose the version for your device from the download page and install ReSocks'
  },
  {
    title: 'Launch App',
    description: 'Open ReSocks app, first-time use is free trial, no registration required'
  },
  {
    title: 'Enter SOCKS5 Node',
    description: 'Enter your own or a third-party SOCKS5 proxy address, then choose a suitable TLS relay node'
  },
  {
    title: 'One-Click Connect',
    description: 'Click the "Connect" button and wait for successful connection to start using'
  },
  {
    title: 'Enjoy Global Access',
    description: 'After successful connection, freely access global network with high-speed stable experience'
  }
]);

const demos = computed(() => locale.value === 'zh' ? [
  {
    title: 'macOS客户端演示',
    platform: 'macOS',
    image: '/images/previewcn01.png',
    description: '查看macOS版本的完整功能演示，包括TUN模式、智能分流等高级功能。'
  },
  {
    title: 'Windows客户端演示',
    platform: 'Windows',
    image: '/images/previewcn02.png',
    description: 'Windows版本功能展示，简洁易用的界面设计，一键连接全球节点。'
  }
] : [
  {
    title: 'macOS Client Demo',
    platform: 'macOS',
    image: '/images/previewcn01.png',
    description: 'Full feature demonstration of macOS version, including TUN mode and smart routing.'
  },
  {
    title: 'Windows Client Demo',
    platform: 'Windows',
    image: '/images/previewcn02.png',
    description: 'Windows version showcase with clean interface and one-click connection.'
  }
]);

// Usage Tips
const usageTips = computed(() => locale.value === 'zh' ? [
  {
    icon: 'bi bi-lightbulb',
    title: '智能代理 vs 全局代理',
    description: '智能代理只代理需要的APP或网站列表，其它直连；全局代理代理所有流量，适合特殊需求'
  },
  {
    icon: 'bi bi-arrow-left-right',
    title: 'TUN模式 vs 代理模式',
    description: '根据需要可以在TUN和系统代理模式下进行切换'
  },
  {
    icon: 'bi bi-share-fill',
    title: '代理共享功能',
    description: '开启代理共享，可以让局域网内的其他设备也能使用加速服务'
  }
] : [
  {
    icon: 'bi bi-lightbulb',
    title: 'Smart Proxy vs Global Proxy',
    description: 'Smart proxy only proxies specified apps or websites, others connect directly; Global proxy routes all traffic'
  },
  {
    icon: 'bi bi-arrow-left-right',
    title: 'TUN Mode vs Proxy Mode',
    description: 'Switch between TUN and system proxy mode as needed'
  },
  {
    icon: 'bi bi-share-fill',
    title: 'Proxy Sharing',
    description: 'Enable proxy sharing to allow other devices on LAN to use acceleration service'
  }
]);

const tutorials = computed(() => locale.value === 'zh' ? [
  {
    title: '快速入门指南',
    description: '了解如何下载、安装和首次使用 ReSocks',
    duration: '3分钟',
    link: '/docs/installation'
  },
  {
    title: '代理模式介绍',
    description: 'TUN 模式与系统代理模式的区别与使用',
    duration: '3分钟',
    link: '/docs/proxy-modes'
  },
  {
    title: '智能分流配置',
    description: '按需配置APP和网站的分流规则',
    duration: '10分钟',
    link: '/docs/rules'
  },
  {
    title: '自定义中转服务器搭建指南',
    description: '使用 Docker 部署自己的 resocksrv 中转服务器，实现完全自主可控的 SOCKS5 中转',
    duration: '8分钟',
    link: '/docs/resocksrv-setup'
  }
] : [
  {
    title: 'Quick Start Guide',
    description: 'Learn how to download, install and use ReSocks',
    duration: '3 min',
    link: '/docs/installation'
  },
  {
    title: 'Proxy Mode Setup',
    description: 'Configure proxy mode for global proxy',
    duration: '3 min',
    link: '/docs/proxy-modes'
  },
  {
    title: 'Smart Routing Config',
    description: 'Configure routing rules for apps and websites',
    duration: '10 min',
    link: '/docs/rules'
  },
  {
    title: 'Custom Relay Server Setup Guide',
    description: 'Deploy your own resocksrv relay server with Docker for a fully self-hosted SOCKS5 relay',
    duration: '8 min',
    link: '/docs/resocksrv-setup'
  }
]);

const openDemo = (demo) => {
  console.log('Opening demo:', demo);
  alert(locale.value === 'zh' 
    ? `即将播放：${demo.title}` 
    : `Now playing: ${demo.title}`
  );
};

const openTutorial = (tutorial) => {
  console.log('Opening tutorial:', tutorial);
  alert(locale.value === 'zh' 
    ? `即将播放：${tutorial.title}` 
    : `Now playing: ${tutorial.title}`
  );
};
</script>
