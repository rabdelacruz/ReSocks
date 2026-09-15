<template>
  <div class="card">
    <!-- Header -->
    <div class="text-center mb-6">
      <i :class="icon" class="text-8xl text-primary-600 mb-4 block"></i>
      <h3 class="text-3xl font-bold mb-2">ReSocks for {{ platform }}</h3>
      <span v-if="version" class="inline-block bg-primary-600 text-white px-4 py-2 rounded text-lg font-semibold mb-3">
        {{ locale === 'zh' ? '当前版本：' : 'Current Version: ' }}{{ version }}
      </span>
      <p class="text-gray-600">{{ systemRequirement }}</p>
    </div>

    <hr class="my-6">

    <!-- New Features -->
    <div v-if="newFeatures" class="mb-6">
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h5 class="font-bold text-lg mb-3">
          <i class="bi bi-stars mr-2"></i>
          <strong>{{ locale === 'zh' ? '核心亮点：' : 'Key Highlights:' }}</strong>
        </h5>
        <ul class="space-y-2">
          <li v-for="(feature, index) in newFeatures" :key="index" class="text-gray-700">
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Info Text (for iOS subscription mode) -->
    <div v-if="infoText && !installSections" class="mb-6">
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h5 class="font-bold text-lg mb-3">
          <i class="bi bi-info-circle mr-2"></i>
          {{ infoText.title }}
        </h5>
        <p class="mb-2">{{ infoText.description }}</p>
        <p class="mb-0">{{ infoText.prerequisiteLabel }}</p>
        <ul class="mt-2 mb-0 space-y-1">
          <li v-for="(item, index) in infoText.prerequisites" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>

    <!-- Features + Download + QR Code (side by side when qrCode exists) -->
    <div v-if="features && qrCode" class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <!-- Features + Download Buttons (2 columns) -->
      <div class="md:col-span-2 flex flex-col">
        <h5 class="font-bold text-lg mb-3">
          {{ locale === 'zh' ? '功能特点' : 'Features' }}
        </h5>
        <ul class="space-y-2 mb-5">
          <li v-for="(feature, index) in features" :key="index" class="flex items-start">
            <i class="bi bi-check-circle-fill text-green-500 mr-2 flex-shrink-0 mt-0.5"></i>
            <span class="text-gray-700">{{ feature }}</span>
          </li>
        </ul>
        <!-- Download Buttons inside features column -->
        <div class="space-y-3 mt-auto">
          <div v-for="(download, index) in downloads" :key="index">
            <a
              :href="download.url"
              :download="download.url.startsWith('http') ? true : undefined"
              class="btn-primary w-full inline-block text-center text-lg py-3"
              target="_blank"
            >
              <i :class="download.icon || 'bi bi-download'" class="mr-2"></i>
              {{ download.label }}
            </a>
            <p class="text-sm text-gray-500 text-center mt-2">{{ download.note }}</p>
          </div>
        </div>
      </div>
      <!-- QR Code (1 column, aligned with features) -->
      <div class="md:col-span-1">
        <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-4 text-center h-full flex flex-col justify-center">
          <h6 class="font-bold mb-3">{{ locale === 'zh' ? '扫码下载' : 'Scan to Download' }}</h6>
          <div class="flex justify-center">
            <img :src="qrCode" :alt="platform + ' QR Code'" class="rounded max-w-[160px]">
          </div>
          <p class="text-sm text-gray-500 mt-3">
            {{ locale === 'zh' ? '使用手机扫描二维码下载' : 'Scan QR code with your phone' }}
          </p>
        </div>
      </div>
    </div>

    <!-- Features (without QR Code) -->
    <div v-else-if="features" class="mb-6">
      <h5 class="font-bold text-lg mb-3">
        {{ locale === 'zh' ? '功能特点' : 'Features' }}
      </h5>
      <ul class="space-y-2">
        <li v-for="(feature, index) in features" :key="index" class="flex items-start">
          <i class="bi bi-check-circle-fill text-green-500 mr-2 flex-shrink-0 mt-0.5"></i>
          <span class="text-gray-700">{{ feature }}</span>
        </li>
      </ul>
    </div>

    <!-- Download Buttons (no QR Code case) -->
    <div v-if="!qrCode && !(installSections && infoText)" class="mb-6">
      <!-- Primary Downloads -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div v-for="(download, index) in downloads.filter(d => !d.secondary)" :key="index">
          <a
            :href="download.url"
            :download="download.url.startsWith('http') ? true : undefined"
            class="btn-primary w-full inline-block text-center text-lg py-3"
            target="_blank"
          >
            <i :class="download.icon || 'bi bi-download'" class="mr-2"></i>
            {{ download.label }}
          </a>
          <p class="text-sm text-gray-500 text-center mt-2">{{ download.note }}</p>
        </div>
      </div>
    </div>
    
    <!-- Secondary Downloads (separate section) -->
    <div v-if="!qrCode && downloads.some(d => d.secondary)" class="mb-6">
      <div class="border-t border-gray-200 pt-4">
        <p class="text-xs text-gray-400 text-center mb-3">{{ locale === 'zh' ? '其他架构版本' : 'Other Architecture Versions' }}</p>
        <div class="flex flex-wrap gap-3 justify-center">
          <div v-for="(download, index) in downloads.filter(d => d.secondary)" :key="'sec-' + index" class="flex-shrink-0">
            <a
              :href="download.url"
              :download="download.url.startsWith('http') ? true : undefined"
              class="btn-outline-primary inline-block text-center px-6 py-2 text-sm"
              target="_blank"
            >
              <i :class="download.icon || 'bi bi-download'" class="mr-1.5 text-sm"></i>
              {{ download.label }}
            </a>
            <p class="text-xs text-gray-400 text-center mt-1">{{ download.note }}</p>
          </div>
        </div>
      </div>
    </div>

    <hr class="my-6">

    <!-- Install Sections (iOS) -->
    <div v-if="installSections && infoText" class="mb-6">
      <div class="border border-gray-200 rounded-xl p-5">
        <div v-for="(section, sIndex) in installSections" :key="sIndex" :class="sIndex > 0 ? 'mt-6 pt-6 border-t border-gray-100' : ''">
          <h6 class="font-bold text-base mb-3">
            <i :class="section.icon" class="mr-2"></i>{{ section.title }}
          </h6>
          <div v-if="section.infoNote" class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3 text-sm">
            <i class="bi bi-info-circle mr-2 text-blue-600"></i>{{ section.infoNote }}
          </div>
          <ol class="list-decimal list-inside space-y-2 text-gray-600 text-sm">
            <li v-for="(step, index) in section.steps" :key="index" v-html="step"></li>
          </ol>
        </div>
      </div>
    </div>

    <!-- iOS Subscription Usage Steps -->
    <div v-if="infoText && installSteps" class="mb-6">
      <h5 class="font-bold text-lg mb-3">
        {{ locale === 'zh' ? '使用步骤' : 'Usage Steps' }}
      </h5>
      <ol class="list-decimal list-inside space-y-2 text-gray-600">
        <li v-for="(step, index) in installSteps" :key="index" v-html="step"></li>
      </ol>
    </div>

    <!-- Installation Instructions -->
    <div v-if="(installSteps || authSteps) && !infoText" class="mb-6">
      <h5 class="font-bold text-lg mb-3">
        <i class="bi bi-info-circle mr-2"></i>
        {{ locale === 'zh' ? '安装和使用说明' : 'Installation and Usage Instructions' }}
      </h5>
      
      <!-- Warning Text (for HarmonyOS NEXT) -->
      <div v-if="warningText" class="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
        <strong><i class="bi bi-exclamation-triangle mr-2"></i>{{ warningText.title }}</strong>
        <ul class="mb-0 mt-2 space-y-1">
          <li v-for="(item, index) in warningText.items" :key="index">
            <strong>{{ item.label }}</strong>{{ item.text }}
          </li>
        </ul>
      </div>

      <!-- Installation Steps -->
      <div v-if="installSteps" class="mb-4">
        <h6 v-if="authSteps" class="font-bold mb-3">{{ locale === 'zh' ? '安装步骤' : 'Installation Steps' }}</h6>
        <h6 v-else-if="qrCodeSteps" class="font-bold mb-3">{{ locale === 'zh' ? '方式一：直接下载安装' : 'Method 1: Direct Download & Install' }}</h6>
        <ol class="list-decimal list-inside space-y-2 text-gray-600">
          <li v-for="(step, index) in installSteps" :key="index" v-html="step"></li>
        </ol>
      </div>

      <!-- Authorization Steps (for macOS/Windows) -->
      <div v-if="authSteps" class="mt-6">
        <h6 class="font-bold mb-3">{{ locale === 'zh' ? '首次连接授权' : 'First Connection Authorization' }}</h6>
        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-3">
          <strong>
            <i class="bi bi-exclamation-triangle mr-2"></i>
            {{ locale === 'zh' ? '重要提示：' : 'Important: ' }}
          </strong>
          {{ locale === 'zh' ? '第一次连接时需要系统授权' : 'System authorization required on first connection' }}
        </div>
        <ol class="list-decimal list-inside space-y-2 text-gray-600">
          <li v-for="(step, index) in authSteps" :key="index" v-html="step"></li>
        </ol>
      </div>

      <!-- QR Code Installation (for Android/HarmonyOS) -->
      <div v-if="qrCodeSteps" class="mt-6">
        <h6 class="font-bold mb-3">{{ locale === 'zh' ? '方式二：扫描二维码安装' : 'Method 2: Scan QR Code to Install' }}</h6>
        <ol class="list-decimal list-inside space-y-2 text-gray-600">
          <li v-for="(step, index) in qrCodeSteps" :key="index">{{ step }}</li>
        </ol>
      </div>

      <!-- Usage Instructions (for Android/HarmonyOS) -->
      <div v-if="usageSteps" class="mt-6">
        <h6 class="font-bold mb-3">{{ locale === 'zh' ? '使用说明' : 'Usage Instructions' }}</h6>
        <ol class="list-decimal list-inside space-y-2 text-gray-600">
          <li v-for="(step, index) in usageSteps" :key="index">{{ step }}</li>
        </ol>
      </div>
    </div>

    <!-- Install Sections (for Linux: AppImage + Portable ZIP) -->
    <div v-if="installSections && !infoText" class="mb-6">
      <h5 class="font-bold text-lg mb-4">
        <i class="bi bi-info-circle mr-2"></i>
        {{ locale === 'zh' ? '安装和使用说明' : 'Installation and Usage Instructions' }}
      </h5>
      <div v-for="(section, sIndex) in installSections" :key="sIndex" :class="sIndex > 0 ? 'mt-6' : ''">
        <h5 class="font-bold text-lg mb-3">
          <i :class="section.icon" class="mr-2"></i>{{ section.title }}
        </h5>
        <!-- Info note -->
        <div v-if="section.infoNote" class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
          <strong><i class="bi bi-info-circle mr-2"></i>{{ section.infoNote }}</strong>
        </div>
        <!-- Code block -->
        <div v-if="section.codeBlock" class="bg-gray-900 text-green-400 p-3 rounded-lg mb-3 font-mono text-sm">
          <code v-html="section.codeBlock.replace(/\n/g, '<br>')"></code>
        </div>
        <!-- Steps -->
        <ol class="list-decimal list-inside space-y-2 text-gray-600">
          <li v-for="(step, index) in section.steps" :key="index" v-html="step"></li>
        </ol>
      </div>
    </div>

    <!-- Historical Versions -->
    <div v-if="historicalVersions && historicalVersions.length > 0" class="mb-6">
      <hr class="my-6">
      <h5 class="font-bold text-lg mb-4">
        <i class="bi bi-clock-history mr-2"></i>
        {{ locale === 'zh' ? '历史版本下载' : 'Historical Versions' }}
      </h5>
      
      <!-- Notice -->
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <div class="flex items-start">
          <i class="bi bi-info-circle text-blue-600 text-xl mr-3 mt-0.5"></i>
          <div class="text-gray-700">
            <p class="font-semibold mb-2">
              {{ locale === 'zh' ? '📌 使用建议' : '📌 Usage Recommendation' }}
            </p>
            <p class="text-sm leading-relaxed">
              {{ locale === 'zh' 
                ? '我们建议您优先使用最新版本以获得最佳性能和最新功能。如果您在使用新版本时遇到问题，可以临时使用旧版本，并请将遇到的问题反馈给我们，帮助我们改进产品。' 
                : 'We recommend using the latest version for optimal performance and newest features. If you encounter issues with the new version, you can temporarily use an older version and please report the issues to us to help improve our product.' 
              }}
            </p>
          </div>
        </div>
      </div>

      <div v-for="(version, vIndex) in historicalVersions" :key="vIndex" class="mb-4">
        <h6 class="font-semibold text-gray-700 mb-3">
          {{ locale === 'zh' ? '版本' : 'Version' }} {{ version.version }}
        </h6>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="(download, dIndex) in version.downloads" :key="dIndex">
            <a
              :href="download.url"
              :download="download.url.startsWith('http') ? true : undefined"
              class="btn-outline-primary w-full inline-block text-center py-3"
              target="_blank"
            >
              <i :class="download.icon || 'bi bi-download'" class="mr-2"></i>
              {{ download.label }}
            </a>
            <p class="text-sm text-gray-500 text-center mt-2">{{ download.note }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const { locale } = useI18n();

defineProps({
  platform: String,
  icon: String,
  version: String,
  systemRequirement: String,
  newFeatures: Array,
  features: Array,
  infoText: Object,
  downloads: Array,
  qrCode: String,
  warningText: Object,
  installSteps: Array,
  authSteps: Array,
  qrCodeSteps: Array,
  usageSteps: Array,
  installSections: Array,
  historicalVersions: Array
});
</script>
