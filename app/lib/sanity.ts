// lib/sanity.ts
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-01-01',
  useCdn: false,
})

type Article = {
  _id: string
  title: string
  slug: {
    current: string
  }
  // legg til mer her hvis du henter mer data
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return client.fetch(
    `*[_type == "article" && slug.current == $slug][0]`,
    { slug }
  )
}

export async function fetchAllArticleSlugs(): Promise<{ slug: string }[]> {
  const articles = await client.fetch<Article[]>(
    `*[_type == "article" && defined(slug.current)]{ slug }`
  )

  return articles
    .map((article) => article.slug?.current)
    .filter(Boolean)
    .map((slug) => ({ slug }))
}