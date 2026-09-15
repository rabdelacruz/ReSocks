---
title: Proxy Modes
description: Differences between TUN mode and system proxy mode
order: 3
category: Usage
icon: bi-arrow-left-right
---

# Proxy Modes

ReSocks supports two proxy modes that you can switch between based on your needs.

## TUN Mode

TUN mode is a more comprehensive global proxy that intercepts traffic at the system network layer.

### Features

- **Full interception**: All application traffic routes through the proxy
- **Better compatibility**: Works with apps that don't support system proxy
- **Requires authorization**: Admin/root permission needed on first use

### Best For

- Games, CLI tools, and apps that ignore system proxy
- Unified traffic management
- Accessing AI services (ChatGPT, Claude, etc.)

## System Proxy Mode

System proxy works by modifying the operating system's HTTP/HTTPS/SOCKS5 proxy settings.

### Features

- **App-level**: Only proxy-aware applications are affected
- **Lightweight**: Lower resource usage
- **No extra permissions**: Faster to switch

### Best For

- Browser-based proxy usage
- Applications with built-in proxy support

## Switching Modes

In the **Mode** section on the main screen:

1. Disconnect first
2. Select the desired mode
3. Reconnect

> **Recommendation**: Use **TUN Mode** for daily use — broader coverage and more stable performance.

## Proxy Sharing

ReSocks can share its proxy with other LAN devices (e.g., game consoles, smart TVs):

1. Enable **LAN Proxy Sharing** in Settings
2. Generate a standard HTTP/HTTPS or SOCKS5 proxy address
3. Configure the target device with the proxy address and port
