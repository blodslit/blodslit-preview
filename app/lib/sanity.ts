// lib/sanity.ts
import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION || '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
})

export async function getArticleBySlug(slug: string) {
  const query = `*[_type == "article" && slug.current == $slug][0]`
  const params = { slug }
  return await sanityClient.fetch(query, params)
}

export async function fetchAllArticleSlugs(): Promise<string[]> {
  const query = `*[_type == "article" && defined(slug.current)][].slug.current`
  return await sanityClient.fetch(query)
}