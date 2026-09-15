---
title: Tips & Tricks
description: Practical tips to get the best performance from ReSocks
order: 5
category: Tips
icon: bi-lightbulb
---

# Tips & Tricks

A collection of practical tips to help you get the most out of ReSocks.

## Choosing the Best Node

### Speed Test

Click the **Speed Test** button in the node list. ReSocks will automatically measure latency for all nodes — select the one with the lowest ping.

### Node Selection Guide

| Use Case | Recommended Node Type |
|----------|----------------------|
| Daily browsing | BGP high-speed (closest region) |
| Streaming (Netflix/YouTube) | Streaming-optimized nodes |
| AI services | US / EU nodes |
| Residential IP needed | Dynamic residential IP nodes |

## Improving Speed

### 1. Use TUN Mode

TUN mode operates at the system network layer, reducing extra latency compared to system proxy.

### 2. Close Unnecessary Background Apps

Reducing apps competing for bandwidth improves overall connection speed.

### 3. Enable Quick Node Switch

Enable **Quick Node Switch** in Settings to change nodes without disconnecting.

## Background Operation

ReSocks separates the control UI from the core proxy engine:

- Closing the control window **does NOT stop the proxy**
- Your connection remains active in the background
- Reopen via the system tray icon

## Auto-start on Boot

1. Open ReSocks **Settings**
2. Check **Launch at Login**
3. Optional: Check **Connect automatically on launch**

## Multi-Device Usage

One account supports **8 devices** simultaneously:

1. Install ReSocks on the new device
2. Log in with the same email and password
3. Your subscription is shared across all devices

## IPv6 Acceleration

If your network supports IPv6:

1. Enable **IPv6 Support** in Settings
2. Select **Pure IPv6 nodes**
3. In some regions and ISPs, IPv6 nodes offer lower latency

## Sharing Proxy with Other Devices

Share your proxy with TVs, game consoles, and other devices:

```
Proxy type: HTTP or SOCKS5
Proxy host: Your computer's LAN IP (e.g., 192.168.1.100)
Proxy port: Check in ReSocks Settings
```

## Quick Actions

- **Click tray icon**: Show/Hide main window
- **Right-click tray icon**: Quick connect/disconnect toggle
- **Double-click a node**: Instantly switch to that node
