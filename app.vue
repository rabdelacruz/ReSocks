<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Cross-language SEO: adds <html lang>, canonical, and hreflang alternate
// <link> tags for every locale so search engines can discover and cross-link
// the zh/en versions of each page.
const i18nHead = useLocaleHead()

useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang,
  },
  link: i18nHead.value.link,
  meta: i18nHead.value.meta,
}))

// Cloudflare Web Analytics
useHead({
  script: [
    {
      src: 'https://static.cloudflareinsights.com/beacon.min.js',
      defer: true,
      'data-cf-beacon': '{"token": "d02f892fcaaf4b9985d155c8d70936d0"}'
    }
  ]
})

// Goldenchina Analytics
useHead({
  script: [
    {
      src: 'https://analyze.goldenchina.cc/script.js',
      defer: true,
      'data-website-id': 'c3d2f930-b86a-4a4e-a023-b35a739badb8'
    }
  ]
})
</script>
