// app/lib/sanity.ts

import { createClient } from '@sanity/client'
import { groq } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-01-01',
  useCdn: true,
})

export async function getArticleBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "article" && slug.current == $slug][0]{
      title,
      description
    }`,
    { slug }
  )
}

export async function fetchAllArticleSlugs(): Promise<string[]> {
  return client.fetch(groq`*[_type == "article" && defined(slug.current)][].slug.current`)
}