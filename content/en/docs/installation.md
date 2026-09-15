---
title: Installation Guide
description: How to install ReSocks on all platforms
order: 1
category: Getting Started
icon: bi-download
---

# Installation Guide

ReSocks supports macOS, Windows, Linux, iOS, Android, and HarmonyOS. Here's how to install it on each platform.

## macOS Installation

### System Requirements

- macOS 10.14 (Mojave) or later
- Recommended: macOS 12.0+

### Download & Install

1. Go to the [Download page](/download) and choose your chip version:
   - **Apple Silicon (M-series)**: Download `ReSocks.dmg`
   - **Intel chip**: Download `ReSocks_Intel.dmg`

2. Double-click the downloaded `.dmg` file

3. Drag the **ReSocks** icon to the **Applications** folder

4. Open Applications, find and double-click **ReSocks** to launch

### First Launch Authorization

When clicking "Connect" for the first time, the system will prompt for authorization:

1. Click **Allow** to authorize ReSocks to modify network settings
2. Enter your Mac login password to confirm
3. This authorization is only needed once

> **Tip**: If you see "Cannot verify developer", go to **System Preferences → Security & Privacy → General** and click "Open Anyway".

---

## Windows Installation

### System Requirements

- Windows 8 / 10 / 11 or Server edition
- Recommended: Windows 10 / 11

### Installer (Recommended)

1. Download `ReSocks_Setup.exe`
2. Double-click to run the installer
3. Follow the prompts to complete installation
4. Click **Yes** if prompted by UAC

### Portable Version (No Installation)

1. Download `redstarv.zip`
2. Extract to an English-only path (e.g., `D:\ReSocks`)
3. Run the main executable directly

> **Note**: Avoid placing the program in paths containing Chinese characters or special symbols.

---

## Linux Installation

### Supported Systems

Ubuntu, Debian, Fedora, CentOS, and other major distributions

### AppImage (Recommended)

First-time setup — install required dependency:

```bash
sudo add-apt-repository universe
sudo apt update
sudo apt install libfuse2
```

Steps:

1. Download `ReSocks.AppImage`
2. Copy to your preferred installation directory
3. Right-click → Properties → grant **execute permission**
4. Double-click to run

### Portable ZIP

1. Download `redstarvlinux.zip`
2. Extract to your installation directory
3. Read `readme.txt` for detailed usage instructions

---

## iOS Installation

The iOS version uses a subscription model:

1. Log in to your account and go to the **User Center**
2. Switch to the **iOS Subscription** tab
3. Follow the instructions to download the iOS client
4. Import your subscription to start using

---

## Android / HarmonyOS Installation

1. Download `redstarv.apk`
2. Open your file manager and locate the downloaded APK
3. Tap to install; allow "Unknown sources" in settings if prompted
4. Open the app after installation

> **HarmonyOS NEXT users**: Install "ZhuoYiTong" app first before installing this APK.
