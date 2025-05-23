// lib/sanity.ts
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!, // Garanterer at variabelen finnes
  dataset: process.env.SANITY_DATASET!,      // Garanterer at variabelen finnes
  useCdn: true,
  apiVersion: '2023-01-01',
})

// Henter én artikkel basert på slug
export async function getArticleBySlug(slug: string) {
  return await client.fetch(
    `*[_type == "article" && slug.current == $slug][0]{
      title,
      content
    }`,
    { slug }
  )
}

// Henter alle slugs for artikler
export async function getAllArticleSlugs(): Promise<string[]> {
  const slugs = await client.fetch(`*[_type == "article" && defined(slug.current)][].slug.current`)
  return Array.isArray(slugs) ? slugs : []
}