import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: '2023-01-01',
  useCdn: false,
})

export async function getArticleBySlug(slug: string) {
  return client.fetch(`*[_type == "article" && slug.current == $slug][0]`, { slug })
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const slugs = await client.fetch(`*[_type == "article" && defined(slug.current)].slug.current`)
  return slugs
}