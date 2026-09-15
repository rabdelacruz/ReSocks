<template>
  <div class="pt-16 min-h-screen bg-white">
    <!-- Header Section -->
    <section class="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {{ locale === 'zh' ? '选择适合您的方案' : 'Choose the Plan That Fits You' }}
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
           
          </p>
          <div class="inline-flex items-start gap-3 bg-white border border-gray-200 rounded-2xl px-6 py-4" data-aos="fade-up">
            <div class="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <i class="bi bi-info-circle-fill text-blue-600 text-sm"></i>
            </div>
            <div class="text-left">
              <strong class="text-gray-900">{{ locale === 'zh' ? '重要说明：' : 'Important: ' }}</strong>
              <span class="text-gray-600">
                {{ locale === 'zh' 
                  ? '所有购买均为一次性付款，到期后不会自动续费。如需继续使用，请重新购买。' 
                  : 'All purchases are one-time payments with no auto-renewal. Please repurchase to continue using.' 
                }}
              </span>
            </div>
          </div>
        </div>

        <!-- Pricing Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PricingCard
            v-for="(plan, index) in pricingPlans"
            :key="plan.id"
            v-bind="plan"
            :delay="index * 100"
            @select="handleSelectPlan(plan)"
          />
        </div>
      </div>
    </section>

    <!-- All Plans Include Section -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {{ locale === 'zh' ? '所有方案均包含' : 'All Plans Include' }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ locale === 'zh' ? '无论选择哪个方案，您都将获得完整的功能体验' : 'Whichever plan you choose, you get the complete feature experience' }}
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div
            v-for="(feature, index) in allPlanFeatures"
            :key="index"
            class="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <div class="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
              <i :class="feature.icon" class="text-4xl text-primary-600"></i>
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-900">{{ feature.title }}</h3>
            <p class="text-gray-700 text-sm leading-relaxed" v-html="feature.description"></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Download CTA -->
    <section class="py-24 bg-gradient-to-br from-primary-600 to-primary-700">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto" data-aos="fade-up">
          <div class="flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="text-white">
              <h3 class="text-3xl md:text-4xl font-bold mb-3">
                {{ locale === 'zh' ? '还没有客户端？' : "Don't have the client yet?" }}
              </h3>
              <p class="text-primary-50 text-lg">
                {{ locale === 'zh' 
                  ? '立即下载，试用满意后在客户端里也可完成购买' 
                  : 'Download now, you can also purchase within the client after trying it out' 
                }}
              </p>
            </div>
            <NuxtLink to="/download" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all shadow-lg flex-shrink-0">
              <i class="bi bi-download"></i>
              {{ locale === 'zh' ? '立即下载' : 'Download Now' }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {{ locale === 'zh' ? '常见问题' : 'Frequently Asked Questions' }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ locale === 'zh' ? '关于购买和使用的常见问题解答' : 'Common questions about purchasing and usage' }}
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
import { useRouter } from 'vue-router';
import PricingCard from '../components/PricingCard.vue';

const { locale } = useI18n();
const router = useRouter();
const activeFaq = ref(0);

// 动态 SEO：响应语言切换
useHead(computed(() => ({
  title: locale.value === 'zh'
    ? '价格中心 - ReSocks SOCKS5 二次代理套餐'
    : 'Pricing - ReSocks SOCKS5 Relay Plans',
  meta: [
    {
      name: 'description',
      content: locale.value === 'zh'
        ? 'ReSocks 提供多种灵活的 SOCKS5 二次代理（中转）套餐，支持 macOS、Windows、Linux、iOS、Android、HarmonyOS 全平台，不限速度不限流量，高速稳定。'
        : 'ReSocks offers flexible SOCKS5 relay plans for macOS, Windows, Linux, iOS, Android & HarmonyOS. Unlimited speed and bandwidth.'
    },
    {
      name: 'keywords',
      content: locale.value === 'zh'
        ? 'ReSocks 价格, SOCKS5代理价格, SOCKS5二次代理套餐, TLS中转价格, VPN 价格, macOS 代理价格, Windows 代理价格, Android APK 价格, iOS 代理价格'
        : 'ReSocks pricing, SOCKS5 relay pricing, SOCKS5 proxy plans, TLS relay pricing, VPN pricing, macOS proxy pricing, Windows proxy pricing'
    },
    { property: 'og:title', content: locale.value === 'zh' ? '价格中心 - ReSocks SOCKS5 二次代理' : 'Pricing - ReSocks' },
    {
      property: 'og:description',
      content: locale.value === 'zh'
        ? '专为 SOCKS5 二次代理打造，支持全平台的高速稳定 TLS 中转服务，立即购买 ReSocks'
        : 'Built for SOCKS5 relay, high-speed stable TLS relay service across all platforms. Purchase ReSocks now.'
    },
  ]
})));

// All Plan Features
const allPlanFeatures = computed(() => locale.value === 'zh' ? [
  {
    icon: 'bi bi-speedometer',
    title: '高速无限',
    description: '不限速度不限流量，支持4K/8K视频'
  },
  {
    icon: 'bi bi-globe',
    title: '全球中转节点',
    description: '分布全球的高速骨干 TLS 中转服务器'
  },
  {
    icon: 'bi bi-people',
    title: '多设备支持',
    description: '不限设备登录，8台设备同时在线'
  },
  {
    icon: 'bi bi-arrow-left-right',
    title: '双模式支持',
    description: 'TUN和系统代理双模式<br>一键灵活切换'
  },
  {
    icon: 'bi bi-shield-check',
    title: '匿名使用',
    description: '无需提交任何信息即可开始使用<br>通过自研协议安全通信'
  },
  {
    icon: 'bi bi-box-seam',
    title: '轻量小巧',
    description: 'C语言核心编程代码，非Electron框架<br>体积小于30MB'
  },
  {
    icon: 'bi bi-share',
    title: '代理共享',
    description: '可生成标准http/https或socks5代理<br>共享给局域网其它设备，如游戏机'
  },
  {
    icon: 'bi bi-diagram-3',
    title: 'IPV6支持',
    description: '客户端IPV6支持<br>提供IPV6代理节点'
  },
  {
    icon: 'bi bi-lightning-charge',
    title: '智能代理',
    description: '指定网站/APP通过代理连接<br>或直接在本地连接'
  },
  {
    icon: 'bi bi-cash-coin',
    title: '不满意退款',
    description: '7天内无理由退款<br>放心购买，安心使用'
  }
] : [
  {
    icon: 'bi bi-speedometer',
    title: 'High Speed Unlimited',
    description: 'No speed limit, no traffic limit, supports 4K/8K video'
  },
  {
    icon: 'bi bi-globe',
    title: 'Global Relay Nodes',
    description: 'High-speed backbone TLS relay servers worldwide'
  },
  {
    icon: 'bi bi-people',
    title: 'Multi-Device Support',
    description: 'Unlimited device login, 8 devices online simultaneously'
  },
  {
    icon: 'bi bi-arrow-left-right',
    title: 'Dual Mode Support',
    description: 'TUN and system proxy dual mode<br>One-click flexible switching'
  },
  {
    icon: 'bi bi-shield-check',
    title: 'Anonymous Use',
    description: 'No information required to start using<br>Secure communication via proprietary protocol'
  },
  {
    icon: 'bi bi-box-seam',
    title: 'Lightweight',
    description: 'C language core code, not Electron<br>Size less than 30MB'
  },
  {
    icon: 'bi bi-share',
    title: 'Proxy Sharing',
    description: 'Generate standard http/https or socks5 proxy<br>Share with LAN devices like game consoles'
  },
  {
    icon: 'bi bi-diagram-3',
    title: 'IPV6 Support',
    description: 'Client IPV6 support<br>Provides IPV6 proxy nodes'
  },
  {
    icon: 'bi bi-lightning-charge',
    title: 'Smart Proxy',
    description: 'Specify websites/apps to proxy<br>or connect directly locally'
  },
  {
    icon: 'bi bi-cash-coin',
    title: 'Money-Back Guarantee',
    description: '7-day no-questions-asked refund<br>Buy with confidence'
  }
]);

const pricingPlans = computed(() => locale.value === 'zh' ? [
  {
    id: 'monthly',
    title: '月付方案',
    price: '5.99',
    period: '月',
    icon: 'bi bi-calendar-month',
    features: [
      '',
      '',
      '无限流量',
      '全球中转节点',
      '最多8台设备',
      '24/7技术支持',
      '7天退款保证'
    ],
    featured: false
  },
  {
    id: 'halfyear',
    title: '半年方案',
    price: '30.99',
    icon: 'bi bi-calendar-range',
    monthlyPrice: '每月仅€5.17',
    features: [
      '',
      '',
      '无限流量',
      '全球中转节点',
      '最多8台设备',
      '24/7技术支持',
      '7天退款保证'
    ],
    featured: false
  },
  {
    id: 'yearly',
    title: '年付方案',
    price: '45.99',
    icon: 'bi bi-calendar-check',
    monthlyPrice: '每月仅€3.83',
    discount: '省36%',
    badge: { type: 'popular', text: '最受欢迎' },
    features: [
      '',
      { text: '可使用自定义 Relay 服务器', highlight: true },
      '无限流量',
      '全球中转节点',
      '最多8台设备',
      '24/7技术支持',
      '7天退款保证'
    ],
    featured: true
  },
  {
    id: 'threeyear',
    title: '三年方案',
    price: '79.99',
    icon: 'bi bi-calendar-event',
    monthlyPrice: '每月仅€2.22',
    discount: '省63%',
    badge: { type: 'value', text: '最超值' },
    features: [
      '',
      { text: '可使用自定义 Relay 服务器', highlight: true },
      '无限流量',
      '全球中转节点',
      '最多8台设备',
      '24/7技术支持',
      '7天退款保证'
    ],
    featured: false
  }
] : [
  {
    id: 'monthly',
    title: 'Monthly Plan',
    price: '5.99',
    period: 'month',
    icon: 'bi bi-calendar-month',
    features: [
      '',
      '',
      'Unlimited Traffic',
      'Global Relay Nodes',
      'Up to 8 Devices',
      '24/7 Technical Support',
      '7-Day Money-Back'
    ],
    featured: false
  },
  {
    id: 'halfyear',
    title: '6-Month Plan',
    price: '30.99',
    icon: 'bi bi-calendar-range',
    monthlyPrice: 'Only €5.17/month',
    features: [
      '',
      '',
      'Unlimited Traffic',
      'Global Relay Nodes',
      'Up to 8 Devices',
      '24/7 Technical Support',
      '7-Day Money-Back'
    ],
    featured: false
  },
  {
    id: 'yearly',
    title: 'Annual Plan',
    price: '45.99',
    icon: 'bi bi-calendar-check',
    monthlyPrice: 'Only €3.83/month',
    discount: 'Save 36%',
    badge: { type: 'popular', text: 'Most Popular' },
    features: [
      '',
      { text: 'Use Custom Relay Servers', highlight: true },
      'Unlimited Traffic',
      'Global Relay Nodes',
      'Up to 8 Devices',
      '24/7 Technical Support',
      '7-Day Money-Back'
    ],
    featured: true
  },
  {
    id: 'threeyear',
    title: '3-Year Plan',
    price: '79.99',
    icon: 'bi bi-calendar-event',
    monthlyPrice: 'Only €2.22/month',
    discount: 'Save 63%',
    badge: { type: 'value', text: 'Best Value' },
    features: [
      '',
      { text: 'Use Custom Relay Servers', highlight: true },
      'Unlimited Traffic',
      'Global Relay Nodes',
      'Up to 8 Devices',
      '24/7 Technical Support',
      '7-Day Money-Back'
    ],
    featured: false
  }
]);

const faqs = computed(() => locale.value === 'zh' ? [
  {
    question: '支持哪些支付方式？',
    answer: '使用 Stripe 接受付款，支持微信、支付宝、银联、信用卡、Apple Pay、Google Pay、其它本地支付方式等。'
  },
  {
    question: '购买后如何使用？',
    answer: '购买后，您的会员资格将自动更新，如果没有更新，在APP个人页面刷新一次即可。'
  },
  {
    question: '是否支持退款？',
    answer: '是的，我们提供7天无理由退款保证。如果您在购买后7天内不满意，可以申请全额退款。'
  },
  {
    question: '到期后会自动续费吗？',
    answer: '不会。所有购买都是一次性付款，到期后不会自动续费。如需继续使用，请重新购买。'
  },
  {
    question: '可以同时在多个设备上使用吗？',
    answer: '是的，一个账户可以在多个设备上登录使用，但同时在线设备数量有限制。'
  }
] : [
  {
    question: 'What payment methods are supported?',
    answer: 'Payments are processed via Stripe, supporting credit cards, Apple Pay, Google Pay, and other local payment methods.'
  },
  {
    question: 'How to use after purchase?',
    answer: 'After purchase, your premium status will update automatically. If it hasn\'t updated yet, simply refresh once on the Profile page in the app.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 7-day money-back guarantee. If you are not satisfied within 7 days of purchase, you can request a full refund.'
  },
  {
    question: 'Will it auto-renew after expiration?',
    answer: 'No. All purchases are one-time payments with no auto-renewal. Please repurchase if you wish to continue using the service.'
  },
  {
    question: 'Can I use it on multiple devices?',
    answer: 'Yes, one account can be used on multiple devices, but there is a limit on concurrent online devices.'
  }
]);

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

const handleSelectPlan = (plan) => {
  console.log('Selected plan:', plan);
  // Here you would typically redirect to payment page
  alert(locale.value === 'zh' 
    ? `您选择了${plan.title}方案，价格：€${plan.price}` 
    : `You selected ${plan.title} plan, price: €${plan.price}`
  );
};
</script>
