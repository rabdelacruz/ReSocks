<template>
  <div class="pt-20 min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-12" data-aos="fade-up">
        <h1 class="section-title">
          {{ locale === 'zh' ? '下载中心' : 'Download Center' }}
        </h1>
        <p class="section-subtitle">
          {{ locale === 'zh' ? '选择适合您设备的版本' : 'Choose the Right Version for Your Device' }}
        </p>
      </div>

      <!-- Platform Tabs -->
      <div class="mb-8" data-aos="fade-up">
        <div class="flex flex-wrap justify-center gap-2 mb-8">
          <button
            v-for="platform in platforms"
            :key="platform.id"
            @click="activePlatform = platform.id"
            class="px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            :class="activePlatform === platform.id 
              ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gray-100'"
          >
            <i :class="platform.icon" class="mr-2"></i>
            {{ platform.name }}
          </button>
        </div>
      </div>

      <!-- Platform Content -->
      <transition name="fade" mode="out-in">
        <PlatformTab
          :key="activePlatform"
          v-bind="currentPlatformDataBase"
        />
      </transition>

      <!-- Why Choose Section -->
      <div class="mt-16" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-center mb-12">
          {{ locale === 'zh' ? '为什么选择 ReSocks' : 'Why Choose ReSocks' }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(feature, index) in whyChooseFeatures"
            :key="index"
            class="text-center"
            data-aos="zoom-in"
            :data-aos-delay="index * 100"
          >
            <template v-if="feature.isButton">
              <div class="card flex items-center justify-center h-full">
                <div>
                  <div class="mb-4">
                    <i :class="feature.icon" class="text-5xl text-primary-600"></i>
                  </div>
                  <h3 class="text-xl font-bold mb-4">{{ feature.title }}</h3>
                  <NuxtLink to="/demo" class="btn-outline-primary inline-block">
                    <i class="bi bi-play-circle mr-2"></i>
                    {{ locale === 'zh' ? '查看演示' : 'View Demo' }}
                  </NuxtLink>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="card h-full">
                <div class="mb-4">
                  <i :class="feature.icon" class="text-5xl text-primary-600"></i>
                </div>
                <h3 class="text-xl font-bold mb-3">{{ feature.title }}</h3>
                <p class="text-gray-600 whitespace-pre-line">{{ feature.description }}</p>
              </div>
            </template>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

const { locale } = useI18n();

const activePlatform = ref('macos');

onMounted(() => {
  const ua = navigator.userAgent;
  if (/HarmonyOS/i.test(ua)) {
    activePlatform.value = 'harmonyos';
  } else if (/Android/i.test(ua)) {
    activePlatform.value = 'android';
  } else if (/iPhone|iPad|iPod/i.test(ua)) {
    activePlatform.value = 'ios';
  } else if (/Windows/i.test(ua)) {
    activePlatform.value = 'windows';
  } else if (/Linux/i.test(ua) && !/Mac/i.test(ua)) {
    activePlatform.value = 'linux';
  }
  // macOS / 未识别：保持默认 'macos'
});

// 动态 SEO：响应语言切换
useHead(computed(() => ({
  title: locale.value === 'zh'
    ? '下载中心 - ReSocks SOCKS5 二次代理客户端'
    : 'Download - ReSocks SOCKS5 Relay Client',
  meta: [
    {
      name: 'description',
      content: locale.value === 'zh'
        ? '下载 ReSocks，一款 SOCKS5 二次代理（中转）工具，通过 TLS 中转技术安全使用你自己的 SOCKS5 代理。支持 macOS、Windows、Linux、iOS、Android、HarmonyOS 全平台，不限速度不限流量。'
        : 'Download ReSocks, a SOCKS5 relay (secondary proxy) tool that securely relays your own SOCKS5 proxy via TLS. Available on macOS, Windows, Linux, iOS, Android & HarmonyOS. Unlimited speed and bandwidth.'
    },
    {
      name: 'keywords',
      content: locale.value === 'zh'
        ? 'ReSocks 下载, SOCKS5代理下载, SOCKS5中转客户端, TLS中转工具, VPN 下载, macOS 代理下载, Windows 代理, Android APK, iOS 代理'
        : 'ReSocks download, SOCKS5 relay download, SOCKS5 proxy client, TLS relay tool, VPN download, macOS proxy, Windows proxy client'
    },
    { property: 'og:title', content: locale.value === 'zh' ? '下载中心 - ReSocks SOCKS5 二次代理客户端' : 'Download - ReSocks' },
    {
      property: 'og:description',
      content: locale.value === 'zh'
        ? '专为 SOCKS5 二次代理打造，支持全平台的安全稳定 TLS 中转服务，立即下载 ReSocks'
        : 'Built for SOCKS5 relay, secure and stable TLS relay service across all platforms. Download ReSocks now.'
    },
  ]
})));

const platforms = computed(() => [
  { id: 'macos', name: 'macOS', icon: 'bi bi-apple' },
  { id: 'windows', name: 'Windows', icon: 'bi bi-windows' },
  { id: 'linux', name: 'Linux', icon: 'bi bi-ubuntu' },
  { id: 'ios', name: 'iOS', icon: 'bi bi-apple' },
  { id: 'android', name: 'Android', icon: 'bi bi-android2' },
  { id: 'harmonyos', name: 'HarmonyOS', icon: 'bi bi-phone' }
]);

const platformsData = computed(() => ({
  macos: {
    platform: 'macOS',
    icon: 'bi bi-apple',
    version: '1.0.0',
    systemRequirement: locale.value === 'zh' 
      ? '系统要求：macOS 10.15及以上 | 推荐macOS 12.0+' 
      : 'System Requirements: macOS 10.15+ | Recommended macOS 12.0+',
    newFeatures: locale.value === 'zh' ? [
      '核心功能：导入你自己或第三方的 SOCKS5 节点，通过 ReSocks 进行 SOCKS5 Relay（二次代理）转发',
      '支持自定义中转服务器，可使用自己部署的中转服务器进行 SOCKS5 中转',
      '支持 TUN 和系统代理双模式，可按APP/网站规则智能分流',
      '多地部署 TLS 中转服务器，就近接入更稳定',
      '提供测试和备份服务器列表，您自己的节点不可用时可以备用，不限流量和速度',
      '提供自动化控制API，支持脚本自动启停客户端',
      '控制和核心程序分离，控制程序退出后，核心程序仍可后台运行'
    ] : [
      'Core feature: import your own or third-party SOCKS5 node for SOCKS5 Relay (secondary proxy) forwarding through ReSocks',
      'Supports custom relay servers — deploy and use your own servers for SOCKS5 relay',
      'Supports TUN and system proxy dual mode with smart routing by APP/website rules',
      'TLS relay servers deployed in multiple regions for lower latency',
      'Provides a test/backup server list as a fallback when your own node is unavailable, with unlimited bandwidth and speed',
      'Separated control and core programs - core continues running in background'
    ],
    features: locale.value === 'zh' ? [
      '核心代码使用系统级的C语言编写',
      '非Electron框架，不到30M体积，更轻量更稳定',
      'TUN和系统代理双模式',
      '智能分流，按APP和网站自定义规则',
      'SOCKS5 节点自定义接入，无需依赖固定服务商',
      '多国BGP骨干网络高速中转节点',
      '全球多地部署 TLS 中转服务器'
    ] : [
      'Core code written in system-level C language',
      'Not Electron-based, under 30MB, lighter and more stable',
      'TUN and system proxy dual modes',
      'Smart routing with custom rules for apps and websites',
      'Custom SOCKS5 node import — no lock-in to a fixed provider',
      'Multi-country BGP backbone high-speed relay nodes',
      'TLS relay servers deployed worldwide'
    ],
    downloads: locale.value === 'zh' ? [
      {
        label: 'Apple Silicon版本',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks.dmg',
        note: '适用于M1/M2/M3/M4/M5+芯片'
      },
      {
        label: 'Intel版本',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks_Intel.dmg',
        note: '适用于Intel芯片'
      }
    ] : [
      {
        label: 'Apple Silicon Version',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks.dmg',
        note: 'For M1/M2/M3/M4/M5+ chips'
      },
      {
        label: 'Intel Version',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks_Intel.dmg',
        note: 'For Intel chips'
      }
    ],
    installSteps: locale.value === 'zh' ? [
      '下载完成后，双击打开 <strong>.dmg</strong> 文件',
      '将 <strong>ReSocks</strong> 图标拖拽到 <strong>Applications</strong> 文件夹',
      '打开 <strong>应用程序</strong> 文件夹，找到并双击 <strong>ReSocks</strong> 即可启动'
    ] : [
      'After download, double-click the <strong>.dmg</strong> file',
      'Drag <strong>ReSocks</strong> icon to <strong>Applications</strong> folder',
      'Open <strong>Applications</strong> folder, find and double-click <strong>ReSocks</strong> to launch'
    ],
    authSteps: locale.value === 'zh' ? [
      '首次点击"连接"按钮时，系统会弹出授权请求对话框',
      '点击"允许"按钮，授权 ReSocks 修改网络配置',
      '输入您的 Mac 登录密码以确认授权',
      '授权完成后，即可正常使用加速服务',
      '<strong>注意：</strong>此授权仅需操作一次，后续使用无需重复授权'
    ] : [
      'When clicking "Connect" for the first time, system will show authorization dialog',
      'Click "Allow" to authorize ReSocks to modify network settings',
      'Enter your Mac login password to confirm',
      'After authorization, you can use the service normally',
      '<strong>Note:</strong> This authorization is only needed once'
    ]
  },
  windows: {
    platform: 'Windows',
    icon: 'bi bi-windows',
    version: '1.0.0',
    systemRequirement: locale.value === 'zh' 
      ? '系统要求：Windows 8/10/11或Server版本 | 推荐Windows 10/11' 
      : 'System Requirements: Windows 8/10/11 or Server | Recommended Windows 10/11',
    newFeatures: locale.value === 'zh' ? [
      '支持自定义中转服务器，可使用自己部署的服务器进行 SOCKS5 中转',
      '支持 TUN 和系统代理双模式，可按APP/网站规则智能分流',
      '核心功能：导入你自己或第三方的 SOCKS5 节点，通过 ReSocks 进行 SOCKS5 Relay（二次代理）转发',
      '多地部署 TLS 中转服务器，就近接入更稳定',
      '提供测试和备份服务器列表，您自己的节点不可用时可以备用，不限流量和速度',
      '提供自动化控制API，支持脚本自动启停客户端',
      '控制和核心程序分离，控制程序退出后，核心程序仍可后台运行'
    ] : [
      'Supports custom relay servers — deploy and use your own servers for SOCKS5 relay',
      'Supports TUN and system proxy dual mode with smart routing',
      'Core feature: import your own or third-party SOCKS5 node for SOCKS5 Relay (secondary proxy) forwarding through ReSocks',
      'TLS relay servers deployed in multiple regions for lower latency',
      'Provides a test/backup server list as a fallback when your own node is unavailable, with unlimited bandwidth and speed',
      'Provides an automation control API for scripted client start/stop',
      'Separated control and core programs'
    ],
    features: locale.value === 'zh' ? [
      '核心代码使用系统级的C语言编写',
      '非Electron框架，不到30M体积',
      'TUN和系统代理双模式',
      '智能分流功能',
      'SOCKS5 节点自定义接入',
      '全球高速中转节点'
    ] : [
      'Core code in system-level C',
      'Under 30MB size',
      'Dual proxy modes',
      'Smart routing',
      'Custom SOCKS5 node import',
      'Global high-speed relay nodes'
    ],
    downloads: locale.value === 'zh' ? [
      {
        label: '安装版',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocksSetup.zip',
        note: '推荐，自动安装'
      },
      {
        label: '绿色版ZIP',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks.zip',
        note: '免安装，解压即用'
      }
    ] : [
      {
        label: 'Installer',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocksSetup.zip',
        note: 'Recommended, auto-install'
      },
      {
        label: 'Portable ZIP',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks.zip',
        note: 'No installation required'
      }
    ],
    installSteps: locale.value === 'zh' ? [
      '下载 <strong>ReSocks_Setup.exe</strong> 或 <strong>ReSocks.zip</strong> 文件',
      '安装版：双击运行安装程序，按提示完成安装',
      '绿色版：解压到英文路径（如 D:\\ReSocks），直接运行主程序',
      '首次运行可能需要管理员权限，右键选择"以管理员身份运行"'
    ] : [
      'Download <strong>ReSocks_Setup.exe</strong> or <strong>ReSocks.zip</strong>',
      'Installer: Double-click and follow prompts',
      'Portable: Extract to English path (e.g., D:\\ReSocks)',
      'First run may require admin rights'
    ],
    authSteps: locale.value === 'zh' ? [
      '首次点击"连接"按钮时，Windows会弹出用户账户控制(UAC)提示',
      '点击"是"允许 ReSocks 修改网络配置',
      '等待程序完成TUN设备初始化',
      '授权完成后，即可正常使用加速服务',
      '<strong>注意：</strong>绿色版同样需要授权，但无需安装'
    ] : [
      'Clicking "Connect" first time will trigger UAC',
      'Click "Yes" to allow ReSocks to modify network',
      'Wait for TUN device initialization',
      'Authorization complete, ready to use',
      '<strong>Note:</strong> Portable version also needs authorization'
    ],
  },
  linux: {
    platform: 'Linux',
    icon: 'bi bi-ubuntu',
    version: '1.0.0',
    systemRequirement: locale.value === 'zh' 
      ? '适用系统：Ubuntu, Debian, Fedora, CentOS 等主流发行版 | 支持 x86-64 / ARM64 架构' 
      : 'System Requirements: Ubuntu, Debian, Fedora, CentOS and more | x86-64 / ARM64 architecture supported',
    newFeatures: locale.value === 'zh' ? [
      '支持自定义中转服务器，可使用自己部署的服务器进行 SOCKS5 中转',
      '支持 TUN 和系统代理双模式，可按APP/网站规则智能分流',
      '核心功能：导入你自己或第三方的 SOCKS5 节点，通过 ReSocks 进行 SOCKS5 Relay（二次代理）转发',
      '多地部署 TLS 中转服务器，就近接入更稳定',
      '提供测试和备份服务器列表，您自己的节点不可用时可以备用，不限流量和速度',
      '提供自动化控制API，支持脚本自动启停客户端',
      '控制和核心程序分离'
    ] : [
      'Supports custom relay servers — deploy and use your own servers for SOCKS5 relay',
      'Supports TUN and system proxy dual mode with smart routing by APP/website rules',
      'Core feature: import your own or third-party SOCKS5 node for SOCKS5 Relay (secondary proxy) forwarding through ReSocks',
      'TLS relay servers deployed in multiple regions for lower latency',
      'Provides a test/backup server list as a fallback when your own node is unavailable, with unlimited bandwidth and speed',
      'Provides an automation control API for scripted client start/stop',
      'Separated control and core programs'
    ],
    features: locale.value === 'zh' ? [
      '核心代码使用系统级的C语言编写',
      '非Electron框架，不到30M体积，更轻量更稳定',
      'TUN 和系统代理双模式',
      '智能分流，按APP和网站自定义规则',
      'SOCKS5 节点自定义接入，无需依赖固定服务商',
      '多国BGP骨干网络高速中转节点',
      '全球多地部署 TLS 中转服务器'
    ] : [
      'Core code written in system-level C language',
      'Not Electron-based, under 30MB, lighter and more stable',
      'TUN and system proxy dual modes',
      'Smart routing with custom rules for apps and websites',
      'Custom SOCKS5 node import — no lock-in to a fixed provider',
      'Multi-country BGP backbone high-speed relay nodes',
      'TLS relay servers deployed worldwide'
    ],
    downloads: locale.value === 'zh' ? [
      {
        label: 'AppImage 格式 (x86-64)',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks.AppImage',
        note: '通用格式，推荐 · 适用于 Intel/AMD 64位系统'
      },
      {
        label: '绿色版 ZIP (x86-64)',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSockslinux.zip',
        note: '免安装版本 · 适用于 Intel/AMD 64位系统'
      },
      {
        label: 'AppImage 格式 (ARM64)',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks_arm64.AppImage',
        note: '适用于 ARM64 架构 · 支持 NVIDIA DGX Spark 等设备'
      },
      {
        label: '绿色版 ZIP (ARM64)',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSockslinux_arm64.zip',
        note: '免安装版本 · 适用于 ARM64 架构 · 支持 NVIDIA DGX Spark'
      }
    ] : [
      {
        label: 'AppImage Format (x86-64)',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks.AppImage',
        note: 'Universal format, recommended · For Intel/AMD 64-bit systems'
      },
      {
        label: 'Portable ZIP (x86-64)',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSockslinux.zip',
        note: 'No installation required · For Intel/AMD 64-bit systems'
      },
      {
        label: 'AppImage Format (ARM64)',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks_arm64.AppImage',
        note: 'For ARM64 architecture · Supports NVIDIA DGX Spark and more'
      },
      {
        label: 'Portable ZIP (ARM64)',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSockslinux_arm64.zip',
        note: 'No installation required · For ARM64 architecture · Supports NVIDIA DGX Spark'
      }
    ],
    installSections: locale.value === 'zh' ? [
      {
        title: 'AppImage 格式下载和使用',
        icon: 'bi bi-file-earmark-zip',
        infoNote: '初次使用提示：如果是初次使用 .AppImage 格式，请根据您的 Linux 发行版在终端中安装 FUSE 依赖（仅需一次）',
        codeBlock: '<span class="text-yellow-400"># Ubuntu / Debian / Deepin</span>\nsudo apt update\nsudo apt install libfuse2\n\n<span class="text-yellow-400"># Ubuntu 24.04+（包名已更改）</span>\nsudo apt install libfuse2t64\n\n<span class="text-yellow-400"># Fedora / CentOS / RHEL</span>\nsudo dnf install fuse-libs\n\n<span class="text-yellow-400"># openSUSE</span>\nsudo zypper install libfuse2\n\n<span class="text-yellow-400"># Arch Linux / Manjaro</span>\nsudo pacman -S fuse2',
        steps: [
          '下载后，复制到 app 安装目录',
          '文件浏览器进入目录，鼠标右键点击 <strong>ReSocks.AppImage</strong>',
          '查看属性，赋予可执行权限',
          '双击运行即可'
        ]
      },
      {
        title: '绿色版本下载和使用',
        icon: 'bi bi-folder-zip',
        steps: [
          '下载后解压到 app 安装目录',
          '文件浏览器进入目录',
          '打开 <strong>readme.txt</strong> 文件查看使用说明'
        ]
      },
      {
        title: 'ARM64 版本下载和使用（NVIDIA DGX Spark 等）',
        icon: 'bi bi-cpu',
        infoNote: '适用于搭载 ARM64 架构处理器的 Linux 设备，包括 NVIDIA DGX Spark、树莓派5、Ampere 服务器等',
        steps: [
          '根据需要下载 <strong>ARM64 AppImage</strong> 或 <strong>ARM64 ZIP</strong> 版本',
          'AppImage 版：赋予可执行权限后双击运行（同 x86-64 操作方式）',
          'ZIP 版：解压后参考 <strong>readme.txt</strong> 说明运行',
          '<strong>NVIDIA DGX Spark 用户：</strong>系统为 Ubuntu ARM64，直接使用上方 ARM64 版本即可'
        ]
      }
    ] : [
      {
        title: 'AppImage Format Download & Usage',
        icon: 'bi bi-file-earmark-zip',
        infoNote: 'First-time tip: If this is your first time using .AppImage format, install the FUSE dependency for your distro in terminal first (one-time only)',
        codeBlock: '<span class="text-yellow-400"># Ubuntu / Debian / Deepin</span>\nsudo apt update\nsudo apt install libfuse2\n\n<span class="text-yellow-400"># Ubuntu 24.04+ (package renamed)</span>\nsudo apt install libfuse2t64\n\n<span class="text-yellow-400"># Fedora / CentOS / RHEL</span>\nsudo dnf install fuse-libs\n\n<span class="text-yellow-400"># openSUSE</span>\nsudo zypper install libfuse2\n\n<span class="text-yellow-400"># Arch Linux / Manjaro</span>\nsudo pacman -S fuse2',
        steps: [
          'After download, copy to your app installation directory',
          'Open file manager, right-click <strong>ReSocks.AppImage</strong>',
          'Go to Properties and grant execute permission',
          'Double-click to run'
        ]
      },
      {
        title: 'Portable ZIP Download & Usage',
        icon: 'bi bi-folder-zip',
        steps: [
          'Extract the downloaded ZIP to your app directory',
          'Open the directory in file manager',
          'Open <strong>readme.txt</strong> for usage instructions'
        ]
      },
      {
        title: 'ARM64 Version Download & Usage (NVIDIA DGX Spark etc.)',
        icon: 'bi bi-cpu',
        infoNote: 'For Linux devices with ARM64 processors, including NVIDIA DGX Spark, Raspberry Pi 5, Ampere servers, and other ARM64-based systems',
        steps: [
          'Download the <strong>ARM64 AppImage</strong> or <strong>ARM64 ZIP</strong> version as needed',
          'AppImage: Grant execute permission and double-click to run (same as x86-64)',
          'ZIP: Extract and follow <strong>readme.txt</strong> instructions to run',
          '<strong>NVIDIA DGX Spark users:</strong> The system runs Ubuntu ARM64 — use the ARM64 version above directly'
        ]
      }
    ],
  },
  ios: {
    platform: 'iOS',
    icon: 'bi bi-apple',
    systemRequirement: locale.value === 'zh' 
      ? '适用系统：iOS 12 及以上 | iPhone 和 iPad 通用' 
      : 'System Requirements: iOS 12+ | Universal for iPhone and iPad',
    infoText: locale.value === 'zh' ? {
      title: '安装和使用说明',
      description: '由于 iOS 服务采用订阅模式发布，在使用前需要先登录您的账户并获取订阅信息。',
      prerequisiteLabel: '请确保您已具备以下信息：',
      prerequisites: ['已注册的邮箱账号和密码', '有效会员']
    } : {
      title: 'Installation & Usage Guide',
      description: 'Since the iOS service is published in subscription mode, you need to log in to your account and get subscription information before use.',
      prerequisiteLabel: 'Please ensure you have the following:',
      prerequisites: ['Registered email account and password', 'Valid membership']
    },
    note: locale.value === 'zh'
      ? '由于系统限制，iOS 版本不支持按 APP 列表规则进行网络分流，只能按网站列表分流。'
      : 'Due to iOS system restrictions, per-app routing rules are not supported — only domain/website-based routing rules are available.',
    downloads: locale.value === 'zh' ? [
      {
        label: '立即登录使用',
        url: '/user',
        note: '登录后前往用户中心获取 iOS 订阅信息',
        icon: 'bi bi-box-arrow-in-right'
      }
    ] : [
      {
        label: 'Login Now',
        url: '/user',
        note: 'After login, go to User Center for iOS subscription information',
        icon: 'bi bi-box-arrow-in-right'
      }
    ],
    installSections: locale.value === 'zh' ? [
      {
        title: '首次用户',
        icon: 'bi bi-person-plus',
        infoNote: '通过其他平台软件完成注册和购买后，即可获取 iOS 订阅信息',
        steps: [
          '下载并运行任意其他平台客户端（Windows、macOS 或 Android 版本均可）',
          '注册账号并免费试用，满意后购买会员',
          '登录后，在软件内切换至 <strong>APP 下载</strong> 页面',
          '找到 iOS 专区，按页面提示完成客户端下载及订阅导入',
          '即可在 iPhone / iPad 上正常使用'
        ]
      },
      {
        title: '已有会员',
        icon: 'bi bi-person-check',
        steps: [
          '运行任意其他平台客户端（Windows、macOS 或 Android 版本均可）',
          '登录您的账号',
          '在软件内切换至 <strong>APP 下载</strong> 页面',
          '找到 iOS 专区，按页面提示完成客户端下载及订阅导入',
          '即可在 iPhone / iPad 上正常使用'
        ]
      }
    ] : [
      {
        title: 'New Users',
        icon: 'bi bi-person-plus',
        infoNote: 'Register and purchase via any other platform to get iOS subscription access.',
        steps: [
          'Download and run the client on any other platform (Windows, macOS, or Android)',
          'Register an account, try for free, and purchase a membership when satisfied',
          'After logging in, switch to the <strong>App Download</strong> page within the app',
          'Find the iOS section and follow the instructions to download the client and import your subscription',
          'You can then use the service on your iPhone / iPad'
        ]
      },
      {
        title: 'Existing Members',
        icon: 'bi bi-person-check',
        steps: [
          'Run the client on any other platform (Windows, macOS, or Android)',
          'Log in to your account',
          'Switch to the <strong>App Download</strong> page within the app',
          'Find the iOS section and follow the instructions to download the client and import your subscription',
          'You can then use the service on your iPhone / iPad'
        ]
      }
    ]
  },
  android: {
    platform: 'Android',
    icon: 'bi bi-android2',
    version: '1.0.0',
    systemRequirement: locale.value === 'zh' 
      ? '适用系统：Android 7.0 及以上 | 推荐 Android 10+' 
      : 'System Requirements: Android 7.0+ | Recommended Android 10+',
    newFeatures: locale.value === 'zh' ? [
      '支持自定义中转服务器，可使用自己部署的服务器进行 SOCKS5 中转',
      '支持 TUN 和系统代理双模式，可按APP/网站规则智能分流',
      '核心功能：导入你自己或第三方的 SOCKS5 节点，通过 ReSocks 进行 SOCKS5 Relay（二次代理）转发',
      '多地部署 TLS 中转服务器，就近接入更稳定',
      '提供测试和备份服务器列表，您自己的节点不可用时可以备用，不限流量和速度',
      '控制和核心程序分离，核心程序在后台持续运行'
    ] : [
      'Supports custom relay servers — deploy and use your own servers for SOCKS5 relay',
      'Supports TUN and system proxy dual mode with smart routing by APP/website rules',
      'Core feature: import your own or third-party SOCKS5 node for SOCKS5 Relay (secondary proxy) forwarding through ReSocks',
      'TLS relay servers deployed in multiple regions for lower latency',
      'Provides a test/backup server list as a fallback when your own node is unavailable, with unlimited bandwidth and speed',
      'Separated control and core programs - core continues running in background'
    ],
    features: locale.value === 'zh' ? [
      '适配各品牌安卓手机',
      '非Electron框架，不到30M体积，更轻量更稳定',
      '智能分流，按APP和网站自定义规则',
      'SOCKS5 节点自定义接入，无需依赖固定服务商',
      '多国BGP骨干网络高速中转节点',
      '全球多地部署 TLS 中转服务器'
    ] : [
      'Compatible with all Android brands',
      'TUN and system proxy dual modes',
      'Smart routing with custom rules for apps and websites',
      'Custom SOCKS5 node import — no lock-in to a fixed provider',
      'Multi-country BGP backbone high-speed relay nodes',
      'TLS relay servers deployed worldwide'
    ],
    downloads: locale.value === 'zh' ? [
      {
        label: '下载 APK 安装包(ARM64)',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks.apk',
        note: '适用于主流安卓设备'
      },
      {
        label: 'ARMv7',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks-v7a.apk',
        note: '旧设备专用',
        secondary: true
      },
      {
        label: 'x86-64',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks-x86_64.apk',
        note: '或模拟器使用',
        secondary: true
      }
    ] : [
      {
        label: 'Download APK (ARM64)',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks.apk',
        note: 'For all Android devices'
      },
      {
        label: 'ARMv7',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks-v7a.apk',
        note: 'For older devices',
        secondary: true
      },
      {
        label: 'x86-64',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks-x86_64.apk',
        note: 'For emulators',
        secondary: true
      }
    ],
    qrCode: '/images/androidd.png',
    installSteps: locale.value === 'zh' ? [
      '点击上方按钮下载 APK 安装包到手机',
      '下载完成后，打开文件管理器找到下载的 APK 文件',
      '点击 APK 文件开始安装',
      '如提示"未知来源"，请在设置中允许安装未知来源应用',
      '安装完成后即可打开使用'
    ] : [
      'Tap the button above to download the APK to your phone',
      'After download, open the file manager and find the APK',
      'Tap the APK file to start installation',
      'If prompted "Unknown source", allow installation in settings',
      'Open the app after installation is complete'
    ],
    qrCodeSteps: locale.value === 'zh' ? [
      '使用手机浏览器或相机扫描右侧二维码',
      '在打开的页面中点击下载按钮',
      '按照方式一的步骤 2-5 完成安装'
    ] : [
      'Scan the QR code with your phone browser or camera',
      'Tap the download button on the opened page',
      'Follow steps 2-5 from Method 1 to complete installation'
    ],
    usageSteps: locale.value === 'zh' ? [
      '首次打开应用，可能需要授予网络权限和VPN权限',
      '点击"允许"授权应用创建VPN连接',
      '登录您的账号，或点击"连接"按钮免费试用',
      '连接成功后，即可开始使用加速服务'
    ] : [
      'First launch may require network and VPN permissions',
      'Tap "Allow" to authorize VPN connection',
      'Login to your account, or tap "Connect" for a free trial',
      'Start using the service once connected'
    ],
  },
  harmonyos: {
    platform: 'HarmonyOS',
    icon: 'bi bi-phone',
    version: '1.0.0',
    systemRequirement: locale.value === 'zh' 
      ? '适用系统：HarmonyOS 4.0 及以上' 
      : 'System Requirements: HarmonyOS 4.0+',
    newFeatures: locale.value === 'zh' ? [
      '支持自定义中转服务器，可使用自己部署的服务器进行 SOCKS5 中转',
      '支持 TUN 和系统代理双模式，可按APP/网站规则智能分流',
      '核心功能：导入你自己或第三方的 SOCKS5 节点，通过 ReSocks 进行 SOCKS5 Relay（二次代理）转发',
      '多地部署 TLS 中转服务器，就近接入更稳定',
      '提供测试和备份服务器列表，您自己的节点不可用时可以备用，不限流量和速度',
      '控制和核心程序分离，核心程序在后台持续运行'
    ] : [
      'Supports custom relay servers — deploy and use your own servers for SOCKS5 relay',
      'Supports TUN and system proxy dual mode with smart routing by APP/website rules',
      'Core feature: import your own or third-party SOCKS5 node for SOCKS5 Relay (secondary proxy) forwarding through ReSocks',
      'TLS relay servers deployed in multiple regions for lower latency',
      'Provides a test/backup server list as a fallback when your own node is unavailable, with unlimited bandwidth and speed',
      'Separated control and core programs - core continues running in background'
    ],
    features: locale.value === 'zh' ? [
      '专为华为鸿蒙系统优化',
      '非Electron框架，不到30M体积，更轻量更稳定',
      '智能分流，按APP和网站自定义规则',
      'SOCKS5 节点自定义接入，无需依赖固定服务商',
      '多国BGP骨干网络高速中转节点',
      '全球多地部署 TLS 中转服务器'
    ] : [
      'Optimized for Huawei HarmonyOS',
      'Not Electron-based, under 30MB, lighter and more stable',
      'Smart routing with custom rules for apps and websites',
      'Custom SOCKS5 node import — no lock-in to a fixed provider',
      'Multi-country BGP backbone high-speed relay nodes',
      'TLS relay servers deployed worldwide'
    ],
    downloads: locale.value === 'zh' ? [
      {
        label: '下载 APK 安装包(ARM64)',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks.apk',
        note: '适用于主流华为鸿蒙设备'
      },
      {
        label: 'x86-64',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks-x86_64.apk',
        note: '或模拟器使用',
        secondary: true
      }
    ] : [
      {
        label: 'Download APK (ARM64)',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks.apk',
        note: 'For mainstream Huawei HarmonyOS devices'
      },
      {
        label: 'x86-64',
        url: 'https://china6.sgp1.cdn.digitaloceanspaces.com/download/ReSocks-x86_64.apk',
        note: 'For emulators',
        secondary: true
      }
    ],
    qrCode: '/images/androidd.png',
    warningText: locale.value === 'zh' ? {
      title: '系统版本提示：',
      items: [
        { label: 'HarmonyOS 4/5：', text: '可以直接安装使用' },
        { label: 'HarmonyOS NEXT 或以上：', text: '需要先安装"卓易通"应用，然后才能安装本应用' }
      ]
    } : {
      title: 'System Version Notice:',
      items: [
        { label: 'HarmonyOS 4/5:', text: 'Can be installed directly' },
        { label: 'HarmonyOS NEXT or above:', text: 'You need to install "ZhuoYiTong" app first before installing this app' }
      ]
    },
    installSteps: locale.value === 'zh' ? [
      '点击上方按钮下载 APK 安装包到手机',
      '下载完成后，打开文件管理器找到下载的 APK 文件',
      '点击 APK 文件开始安装',
      '如提示"未知来源"，请在设置中允许安装未知来源应用',
      '安装完成后即可打开使用'
    ] : [
      'Tap the button above to download the APK to your phone',
      'After download, open the file manager and find the APK',
      'Tap the APK file to start installation',
      'If prompted "Unknown source", allow installation in settings',
      'Open the app after installation is complete'
    ],
    qrCodeSteps: locale.value === 'zh' ? [
      '使用手机浏览器或相机扫描右侧二维码',
      '在打开的页面中点击下载按钮',
      '按照方式一的步骤 2-5 完成安装'
    ] : [
      'Scan the QR code with your phone browser or camera',
      'Tap the download button on the opened page',
      'Follow steps 2-5 from Method 1 to complete installation'
    ],
    usageSteps: locale.value === 'zh' ? [
      '首次打开应用，可能需要授予网络权限和VPN权限',
      '点击"允许"授权应用创建VPN连接',
      '登录您的账号，或点击"连接"按钮免费试用',
      '连接成功后，即可开始使用加速服务'
    ] : [
      'First launch may require network and VPN permissions',
      'Tap "Allow" to authorize VPN connection',
      'Login to your account, or tap "Connect" for a free trial',
      'Start using the service once connected'
    ],
  }
}));

const currentPlatformDataBase = computed(() => platformsData.value[activePlatform.value]);

const whyChooseFeatures = computed(() => locale.value === 'zh' ? [
  {
    title: '智能代理',
    description: '指定APP列表/网站通过代理连接\n或直接在本地连接',
    icon: 'bi bi-lightning-charge'
  },
  {
    title: '自定义中转服务器',
    description: '支持使用自己部署的服务器进行 SOCKS5 中转，中转链路完全自主可控',
    icon: 'bi bi-hdd-network-fill'
  },
  {
    title: '安全稳定',
    description: '自研安全协议，7×24小时稳定运行',
    icon: 'bi bi-shield-check'
  },
  {
    title: '高速无限',
    description: '不限速度不限流量，支持4K/8K视频',
    icon: 'bi bi-speedometer'
  },
  {
    title: '全球中转节点',
    description: '分布全球的高速骨干中转服务器，接入你自己的 SOCKS5',
    icon: 'bi bi-globe'
  },
  {
    title: '多设备支持',
    description: '不限设备登录，8台设备同时在线',
    icon: 'bi bi-people'
  },
  {
    title: '双模式支持',
    description: 'TUN和系统代理双模式\n一键灵活切换',
    icon: 'bi bi-arrow-left-right'
  },
  {
    title: '匿名使用',
    description: '无需提交任何信息即可开始使用\n通过自研协议安全通信',
    icon: 'bi bi-shield-check'
  },
  {
    title: '轻量小巧',
    description: 'C语言核心编程代码，非Electron框架\n体积小于30MB',
    icon: 'bi bi-box-seam'
  },
  {
    title: '代理共享',
    description: '可生成标准http/https或socks5代理\n共享给局域网其它设备，如游戏机',
    icon: 'bi bi-share'
  },
  {
    title: 'IPV6支持',
    description: '客户端IPV6支持\n提供IPV6代理节点',
    icon: 'bi bi-diagram-3'
  },
  {
    title: '不满意退款',
    description: '7天内无理由退款\n放心购买，安心使用',
    icon: 'bi bi-cash-coin'
  },
  {
    title: '演示视频',
    description: '',
    icon: 'bi bi-play-circle',
    isButton: true
  }
] : [
  {
    title: 'Smart Proxy',
    description: 'Specify websites/apps to connect via proxy\nor connect directly locally',
    icon: 'bi bi-lightning-charge'
  },
  {
    title: 'Custom Relay Servers',
    description: 'Deploy and use your own servers for SOCKS5 relay — full control of the relay path',
    icon: 'bi bi-hdd-network-fill'
  },
  {
    title: 'Safe & Stable',
    description: 'Proprietary security protocol, 7×24 stable operation',
    icon: 'bi bi-shield-check'
  },
  {
    title: 'High Speed Unlimited',
    description: 'No speed limit, no data cap, support 4K/8K video',
    icon: 'bi bi-speedometer'
  },
  {
    title: 'Global Relay Nodes',
    description: 'High-speed backbone relay servers worldwide for your own SOCKS5 proxy',
    icon: 'bi bi-globe'
  },
  {
    title: 'Multi-Device Support',
    description: 'Unlimited device login, 8 devices online simultaneously',
    icon: 'bi bi-people'
  },
  {
    title: 'Dual Mode Support',
    description: 'TUN and system proxy dual mode\nOne-click flexible switching',
    icon: 'bi bi-arrow-left-right'
  },
  {
    title: 'Anonymous Usage',
    description: 'No information required to start using\nSecure communication through proprietary protocol',
    icon: 'bi bi-shield-check'
  },
  {
    title: 'Lightweight',
    description: 'C language core code, not Electron framework\nSize less than 30MB',
    icon: 'bi bi-box-seam'
  },
  {
    title: 'Proxy Sharing',
    description: 'Generate standard http/https or socks5 proxy\nShare with LAN devices like game consoles',
    icon: 'bi bi-share'
  },
  {
    title: 'IPV6 Support',
    description: 'Client IPV6 support\nIPV6 proxy nodes available',
    icon: 'bi bi-diagram-3'
  },
  {
    title: 'Money-Back Guarantee',
    description: '7-day no-reason refund\nBuy with confidence, use with peace of mind',
    icon: 'bi bi-cash-coin'
  },
  {
    title: 'Demo Video',
    description: '',
    icon: 'bi bi-play-circle',
    isButton: true
  }
]);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
