---
title: FAQ
description: Common issues and solutions
order: 6
category: Help
icon: bi-question-circle
---

# FAQ

## Connection Issues

### Cannot connect — authorization failed

**Solutions:**

1. **macOS**: Go to **System Preferences → Security & Privacy → Privacy → VPN & Proxies** and confirm ReSocks is authorized
2. **Windows**: Run ReSocks as Administrator
3. **Linux**: Ensure the AppImage has execute permission

### Connected but browsing is slow

**Possible causes and fixes:**

- Current node is overloaded → Try switching to a different node
- Local network is unstable → Check your internet connection
- Try switching from System Proxy to **TUN Mode**

### Some websites still inaccessible after connecting

Check your routing rules:

1. Go to **Rule Manager**
2. Confirm the website or its domain is in the proxy rules
3. Or switch to **Global Proxy** mode for testing

---

## Account Issues

### Forgot password

1. Click **Forgot Password** on the login screen
2. Enter your registered email address
3. Follow the email instructions to reset your password

### Exceeded device limit

One account supports 8 simultaneous devices. If the limit is exceeded:

1. Log in to the **User Center**
2. Remove unused devices under **Logged-in Devices**
3. Then log in on the new device

---

## Installation Issues

### macOS: "Cannot open because developer cannot be verified"

1. Click **Cancel**
2. Go to **System Preferences → Security & Privacy → General**
3. Find ReSocks's entry and click **Open Anyway**

### Windows antivirus false positive

ReSocks's network driver may be flagged incorrectly. Solutions:

1. Add ReSocks's installation folder to your antivirus whitelist
2. Or temporarily disable real-time protection during installation

### Linux: AppImage fails to run

Make sure you have the required dependency:

```bash
sudo add-apt-repository universe
sudo apt update
sudo apt install libfuse2
```

---

## Refund Policy

### How to request a refund

ReSocks offers a **7-day no-questions-asked refund**:

1. Visit the [Contact Us](/contact) page
2. Submit a refund request with your order information
3. Support will process it within 1–2 business days

---

## Still need help?

If your issue isn't covered here, reach out to us:

- **Email**: Visit [Contact Us](/contact) to submit a request
- **Telegram**: @redstarvpn
