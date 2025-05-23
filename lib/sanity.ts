// lib/sanity.ts
import { createClient } from "@sanity/client"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-01-01",
  useCdn: false,
})

export async function getArticleBySlug(slug: string) {
  return await client.fetch(
    `*[_type == "article" && slug.current == $slug][0]{
      title,
      content
    }`,
    { slug }
  )
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const data = await client.fetch(`*[_type == "article" && defined(slug.current)][].slug.current`)
  return data
}