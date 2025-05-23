import { createClient } from "next-sanity"

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-01-01",
  useCdn: false,
})

export async function getArticleBySlug(slug: string) {
  return client.fetch(
    `*[_type == "article" && slug.current == $slug][0]{
      title,
      content
    }`,
    { slug }
  )
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const slugs = await client.fetch(`*[_type == "article" && defined(slug.current)].slug.current`)
  return slugs
}