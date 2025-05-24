import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = '2023-01-01'
const useCdn = true

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
})

export async function getArticleBySlug(slug: string) {
  const query = `*[_type == "article" && slug.current == $slug][0]{
    title,
    content
  }`
  return await client.fetch(query, { slug })
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const query = `*[_type == "article" && defined(slug.current)][].slug.current`
  return await client.fetch(query)
}