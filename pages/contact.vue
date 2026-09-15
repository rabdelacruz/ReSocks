<template>
  <div class="pt-16 min-h-screen bg-white">
    <!-- Header Section -->
    <section class="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-6" data-aos="fade-up">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {{ locale === 'zh' ? '联系我们' : 'Contact Us' }}
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ locale === 'zh' ? '我们随时为您提供帮助，有任何问题请随时联系' : 'We are here to help you anytime. Feel free to reach out with any questions' }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-8">
      <div class="container mx-auto px-4">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <!-- Contact Form -->
          <div class="bg-white rounded-2xl p-8 border border-gray-100" data-aos="fade-up">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">
              {{ locale === 'zh' ? '发送消息' : 'Send us a Message' }}
            </h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-900">
                  {{ locale === 'zh' ? '姓名' : 'Name' }}
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  :placeholder="locale === 'zh' ? '请输入您的姓名' : 'Enter your name'"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-900">
                  {{ locale === 'zh' ? '邮箱' : 'Email' }}
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  :placeholder="locale === 'zh' ? '请输入您的邮箱' : 'Enter your email'"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-900">
                  {{ locale === 'zh' ? '主题' : 'Subject' }}
                </label>
                <select
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                >
                  <option value="">{{ locale === 'zh' ? '请选择主题' : 'Select a subject' }}</option>
                  <option v-for="subject in subjects" :key="subject.value" :value="subject.value">
                    {{ subject.label }}
                  </option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-900">
                  {{ locale === 'zh' ? '消息内容' : 'Message' }}
                </label>
                <textarea
                  v-model="form.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none bg-gray-50 focus:bg-white"
                  :placeholder="locale === 'zh' ? '请输入您的消息内容' : 'Enter your message'"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
              >
                <span v-if="!isSubmitting" class="flex items-center justify-center gap-2">
                  <i class="bi bi-envelope"></i>
                  {{ locale === 'zh' ? '发送消息' : 'Send Message' }}
                </span>
                <span v-else>
                  {{ locale === 'zh' ? '发送中...' : 'Sending...' }}
                </span>
              </button>
            </form>

            <!-- Success Message -->
            <div v-if="showSuccess" class="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
              <div class="flex items-center gap-3">
                <i class="bi bi-check-circle-fill text-green-600 text-xl"></i>
                <p class="text-green-800 font-semibold">
                  {{ locale === 'zh' ? '消息发送成功！我们会尽快回复您。' : 'Message sent successfully! We will reply soon.' }}
                </p>
              </div>
            </div>

            <!-- Error Message -->
            <div v-if="showError" class="mt-6 bg-primary-50 border border-primary-200 rounded-xl p-4">
              <div class="flex items-center gap-3">
                <i class="bi bi-exclamation-circle-fill text-primary-600 text-xl"></i>
                <p class="text-primary-800 font-semibold">
                  {{ errorMessage }}
                </p>
              </div>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="space-y-6" data-aos="fade-up" data-aos-delay="100">
            <!-- Contact Methods -->
            <div class="bg-white rounded-2xl p-8 border border-gray-100">
              <h2 class="text-3xl font-bold mb-8 text-gray-900">
                {{ locale === 'zh' ? '联系方式' : 'Contact Information' }}
              </h2>
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="bi bi-envelope-fill text-2xl text-primary-600"></i>
                  </div>
                  <div>
                    <h3 class="font-bold mb-1 text-gray-900">
                      {{ locale === 'zh' ? '电子邮件' : 'Email' }}
                    </h3>
                    <p class="text-gray-600">support@resocks.app</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="bi bi-clock-fill text-2xl text-primary-600"></i>
                  </div>
                  <div>
                    <h3 class="font-bold mb-1 text-gray-900">
                      {{ locale === 'zh' ? '响应时间' : 'Response Time' }}
                    </h3>
                    <p class="text-gray-600">
                      {{ locale === 'zh' ? '7×24小时接受邮件，一般4小时内回复' : '24/7 email support, typically reply within 4 hours' }}
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="bi bi-chat-dots-fill text-2xl text-primary-600"></i>
                  </div>
                  <div>
                    <h3 class="font-bold mb-1 text-gray-900">
                      {{ locale === 'zh' ? '在线客服' : 'Live Chat' }}
                    </h3>
                    <p class="text-gray-600">
                      {{ locale === 'zh' ? '客户端内置在线客服' : 'Built-in live chat in client' }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- FAQ Link -->
            <div class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 class="text-2xl font-bold mb-3">
                {{ locale === 'zh' ? '帮助文档' : 'Documentation' }}
              </h3>
              <p class="text-primary-50 mb-6">
                {{ locale === 'zh' 
                  ? '在联系我们之前，您可以先查看帮助文档，可能会找到您需要的答案。' 
                  : 'Before contacting us, check our documentation for quick answers to common questions.' 
                }}
              </p>
              <NuxtLink to="/docs/faq" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all">
                {{ locale === 'zh' ? '常见问题及解决方法' : 'View Documentation' }}
                <i class="bi bi-arrow-right"></i>
              </NuxtLink>
            </div>

            <!-- Social Media -->
            <div class="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 class="text-2xl font-bold mb-6 text-gray-900">
                {{ locale === 'zh' ? '关注我们' : 'Follow Us' }}
              </h3>
              <div class="flex gap-4">
                <a href="#" class="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all border border-gray-100">
                  <i class="bi bi-facebook text-2xl"></i>
                </a>
                <a href="#" class="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all border border-gray-100">
                  <i class="bi bi-twitter-x text-2xl"></i>
                </a>
                <a href="#" class="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all border border-gray-100">
                  <i class="bi bi-telegram text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

const { locale } = useI18n();

// 动态 SEO：响应语言切换
useHead(computed(() => ({
  title: locale.value === 'zh'
    ? '联系我们 - ReSocks SOCKS5 二次代理'
    : 'Contact Us - ReSocks',
  meta: [
    {
      name: 'description',
      content: locale.value === 'zh'
        ? '联系 ReSocks 团队，获取 SOCKS5 二次代理相关的技术支持、账单与合作咨询服务。'
        : 'Contact the ReSocks team for technical support, billing questions, and partnership inquiries about our SOCKS5 relay service.'
    },
    { name: 'keywords', content: locale.value === 'zh' ? 'ReSocks 联系, SOCKS5代理客服, TLS中转支持, 技术支持, 联系我们' : 'ReSocks contact, SOCKS5 relay support, TLS relay support, technical support' },
    { property: 'og:title', content: locale.value === 'zh' ? '联系我们 - ReSocks SOCKS5 二次代理' : 'Contact Us - ReSocks' },
    {
      property: 'og:description',
      content: locale.value === 'zh'
        ? '联系 ReSocks 团队，获取 SOCKS5 二次代理相关的技术支持与合作咨询。'
        : 'Contact the ReSocks team for support and inquiries about our SOCKS5 relay service.'
    },
  ]
})));

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const showSuccess = ref(false);
const showError = ref(false);
const errorMessage = ref('');

const subjects = computed(() => locale.value === 'zh' ? [
  { value: 'technical', label: '技术支持' },
  { value: 'billing', label: '账单问题' },
  { value: 'feature', label: '功能建议' },
  { value: 'other', label: '其他问题' }
] : [
  { value: 'technical', label: 'Technical Support' },
  { value: 'billing', label: 'Billing Issue' },
  { value: 'feature', label: 'Feature Request' },
  { value: 'other', label: 'Other' }
]);

const handleSubmit = async () => {
  isSubmitting.value = true;
  showSuccess.value = false;
  showError.value = false;
  
  try {
    // 获取主题标签
    const subjectLabel = subjects.value.find(s => s.value === form.value.subject)?.label || form.value.subject;
    
    // 生成消息预览（前20个字符）
    const bodyPreview = form.value.message.substring(0, 20) + (form.value.message.length > 20 ? '...' : '');
    
    // 构建完整消息内容
    const bodyText = `
${form.value.message}

Name: ${form.value.name}
Email: ${form.value.email}
    `.trim();
    
    // 创建FormData
    const formData = new FormData();
    formData.append('usrName', form.value.name);
    formData.append('usrMail', form.value.email);
    formData.append('subject', `${subjectLabel} - ${bodyPreview}`);
    formData.append('name', 'toStar');
    formData.append('body', bodyText);
    formData.append('product_id', 'resocks');
    
    // 发送请求
    const response = await fetch('https://sdk.godischina.com/contact/', {
      method: 'POST',
      body: formData,
      mode: 'cors'
    });
    
    const responseText = await response.text();
    
    if (response.ok) {
      // 发送成功
      showSuccess.value = true;
      
      // 重置表单
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      // 3秒后隐藏成功消息
      setTimeout(() => {
        showSuccess.value = false;
      }, 5000);
    } else {
      throw new Error(`HTTP ${response.status}: ${responseText}`);
    }
  } catch (error) {
    console.error('发送失败:', error);
    showError.value = true;
    errorMessage.value = locale.value === 'zh' 
      ? '发送失败，请稍后重试或直接发送邮件至 support@resocks.app' 
      : 'Failed to send. Please try again later or email us at support@resocks.app';
    
    // 10秒后隐藏错误消息
    setTimeout(() => {
      showError.value = false;
    }, 10000);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
