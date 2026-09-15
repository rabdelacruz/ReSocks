---
title: 智能代理分流规则介绍
description: 按 APP 和网站自定义分流规则
order: 4
category: 使用说明
icon: bi-funnel
---

# 智能代理分流规则介绍

智能代理分流功能让您精确控制哪些流量走代理、哪些直连本地网络。

## 规则模式

ReSocks 支持两种规则模式：

| 模式 | 说明 |
|------|------|
| **全局模式** | 所有流量均走代理 |
| **智能模式** | 按规则自动判断（推荐） |

## 代理模式

ReSocks 支持三种代理模式：

| 模式 | 规则执行顺序 | 说明 |
|------|------------|------|
| **TUN 模式** | APP 匹配 > 网站匹配 | 应用级别精准控制 |
| **系统代理** | 仅网站匹配 | 只支持网站规则 |
| **TUN + 系统代理** | 智能混合 | 结合两种模式优势 |

## 按网站分流

### 添加网站规则

1. 进入 **规则编辑 → 网站规则 → 规则列表**
2. 选择一个现有规则集，或点击 **新建规则集**
3. 在右边的规则列表中直接编辑规则
4. 或在右下角使用 **规则生成器** 生成规则
5. 保存设置

### 规则语法示例

```
# 代理特定网站
DOMAIN-SUFFIX,google.com,PROXY

# 直连特定网站
DOMAIN-SUFFIX,baidu.com,DIRECT

# 屏蔽广告域名
DOMAIN-SUFFIX,ads.example.com,REJECT

# 地理位置规则
GEOIP,US,PROXY
```

::alert{type="info"}
**提示**：详细的规则配置方法请参考 [智能代理网站规则高级应用](/docs/advanced-website-rules) 文档。
::

## 按 APP 分流

### 添加 APP 规则

1. 进入 **规则编辑 → APP 规则 → 代理列表/直连列表**
2. 点击右上角 **+** 按钮
3. 在输入框中输入应用名称（如 `Chrome.app` / `chrome.exe`）
4. 或点击输入框右边的 **浏览** 按钮，选择应用程序
5. 保存设置

### 常见配置示例

| APP | 建议策略 |
|-----|---------|
| Chrome、Safari | 代理列表 |
| 微信、支付宝 | 直连列表 |
| ChatGPT、Claude | 代理列表 |
| 百度网盘、QQ | 直连列表 |

::alert{type="info"}
**提示**：详细的 APP 规则配置方法请参考 [智能代理APP规则高级应用](/docs/advanced-proxy) 文档。
::

## 内置 AI 服务规则

ReSocks 内置了对主流 AI 服务的访问规则，开箱即用：

- ChatGPT / OpenAI
- Claude / Anthropic
- Gemini / Google AI
- Midjourney、Stable Diffusion

## 规则优先级

规则按以下优先级依次匹配：

1. 用户自定义规则（最高）
2. 内置规则集
3. 默认策略（最低）
