import { defineSitemapEventHandler, asSitemapUrl } from '#imports'
import { queryCollection } from '@nuxt/content/server'

const SITE_URL = 'https://resocks.app'

export default defineSitemapEventHandler(async (event) => {
  const [zhDocs, enDocs] = await Promise.all([
    queryCollection(event, 'docs_zh').select('stem').all(),
    queryCollection(event, 'docs_en').select('stem').all(),
  ])

  const enStems = new Set(enDocs.map(doc => doc.stem.split('/').pop()))

  const zhUrls = zhDocs.map((doc) => {
    const slug = doc.stem.split('/').pop()
    const hasEn = enStems.has(slug)
    return asSitemapUrl({
      loc: `/zh/docs/${slug}`,
      alternatives: [
        { hreflang: 'zh-CN', href: `${SITE_URL}/zh/docs/${slug}` },
        ...(hasEn ? [{ hreflang: 'en-US', href: `${SITE_URL}/docs/${slug}` }] : []),
        { hreflang: 'x-default', href: `${SITE_URL}/docs/${slug}` },
      ],
    })
  })

  const enUrls = enDocs.map((doc) => {
    const slug = doc.stem.split('/').pop()
    return asSitemapUrl({
      loc: `/docs/${slug}`,
      alternatives: [
        { hreflang: 'zh-CN', href: `${SITE_URL}/zh/docs/${slug}` },
        { hreflang: 'en-US', href: `${SITE_URL}/docs/${slug}` },
        { hreflang: 'x-default', href: `${SITE_URL}/docs/${slug}` },
      ],
    })
  })

  return [...zhUrls, ...enUrls]
})
