---
title: Smart Routing Rules
description: Custom routing rules by app and website
order: 4
category: Usage
icon: bi-funnel
---

# Smart Routing Rules

Smart routing lets you precisely control which traffic goes through the proxy and which connects directly.

## Routing Modes

ReSocks supports three routing strategies:

| Mode | Description |
|------|-------------|
| **Global Proxy** | All traffic routes through proxy |
| **Smart Routing** | Auto-decide based on rules (Recommended) |
| **Direct** | All traffic bypasses proxy |

## Website Rules

### Proxy Specific Websites

Add websites that need acceleration to the proxy list:

1. Go to **Rule Manager** → **Website Rules**
2. Click **Add Rule**
3. Enter the domain (e.g., `google.com`)
4. Choose a policy: **Proxy** / **Direct** / **Reject**

### Wildcard Support

```
# Exact domain
google.com

# Subdomain wildcard
*.google.com

# Keyword match
DOMAIN-KEYWORD,youtube
```

## App Rules

Route specific applications through proxy or direct:

1. Go to **Rule Manager** → **App Rules**
2. Select your target app from the installed apps list
3. Set the proxy policy for that app

### Example Configuration

| App | Suggested Policy |
|-----|----------------|
| Chrome, Safari | Proxy |
| WeChat, Alipay | Direct |
| Xcode | Proxy |
| Local dev server | Direct |

## Built-in AI Service Rules

ReSocks includes built-in rules for major AI services — ready to use out of the box:

- ChatGPT / OpenAI
- Claude / Anthropic
- Gemini / Google AI
- Midjourney, Stable Diffusion

Enable **AI Service Rule Set** in the Rule Manager to activate.

## Rule Priority

Rules are matched in the following order:

1. User-defined rules (highest priority)
2. Built-in rule sets
3. Default policy (lowest priority)
