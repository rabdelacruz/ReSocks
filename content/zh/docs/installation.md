---
title: 安装指南
description: 如何在各平台安装 ReSocks 加速器
order: 1
category: 入门
icon: bi-download
---

# 安装指南

ReSocks 支持 macOS、Windows、Linux、iOS、Android 和 HarmonyOS 全平台，以下是各平台的安装方法。

## macOS 安装

### 系统要求

- macOS 10.14（Mojave）及以上
- 推荐 macOS 12.0+

### 下载与安装

1. 前往 [下载页面](/download) 选择适合您芯片的版本：
   - **Apple Silicon（M系列芯片）**：下载 `ReSocks.dmg`
   - **Intel 芯片**：下载 `ReSocks_Intel.dmg`

2. 双击打开下载的 `.dmg` 文件

3. 将 **ReSocks** 图标拖拽到 **Applications（应用程序）** 文件夹

4. 打开应用程序文件夹，找到并双击 **ReSocks** 启动

### 首次启动授权

首次点击"连接"按钮时，系统将弹出授权请求：

1. 点击 **允许** 授权 ReSocks 修改网络配置
2. 输入您的 Mac 登录密码确认
3. 授权仅需操作一次，后续无需重复

---

## Windows 安装

### 系统要求

- Windows 8 / 10 / 11 或 Server 版本
- 推荐 Windows 10 / 11

### 安装版（推荐）

1. 下载 `ReSocks_Setup.exe`
2. 双击运行安装程序
3. 按提示完成安装
4. 首次运行如遇 UAC 提示，点击 **是** 允许

### 绿色版（免安装）

1. 下载 `redstarv.zip`
2. 解压到英文路径目录（如 `D:\ReSocks`）
3. 直接运行主程序

> **注意**：请勿将程序放在含有中文或特殊字符的路径中，以免出现异常。

---

## Linux 安装

### 支持系统

Ubuntu、Debian、Fedora、CentOS 等主流发行版

### AppImage 方式（推荐）

首次使用前，需安装必要依赖：

```bash
sudo add-apt-repository universe
sudo apt update
sudo apt install libfuse2
```

安装步骤：

1. 下载 `ReSocks.AppImage`
2. 复制到您的安装目录
3. 右键点击文件 → 属性 → 赋予**可执行权限**
4. 双击运行

### 绿色版 ZIP

1. 下载 `redstarvlinux.zip`
2. 解压到安装目录
3. 查看 `readme.txt` 文件了解详细使用说明

---

## iOS 安装

iOS 版本采用订阅模式：

1. 登录您的账户，前往 **用户中心**
2. 切换至 **iOS 订阅** 页面
3. 按页面提示完成客户端下载
4. 导入专属订阅信息即可使用

---

## Android / HarmonyOS 安装

1. 下载 `redstarv.apk` 安装包
2. 打开文件管理器，找到下载的 APK
3. 点击安装；如提示"未知来源"，请在设置中允许
4. 安装完成后打开应用即可

> **HarmonyOS NEXT 用户**：需先安装"卓易通"应用，才能安装本 APK。
