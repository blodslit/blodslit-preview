import { createClient } from '@sanity/client'
import type { PortableTextBlock } from 'sanity'
import { PortableText } from '@portabletext/react'

type Props = {
  params: { slug: string }
}

const client = createClient({
  projectId: 'g8o2ksw3',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-01-01',
})

type Article = {
  title: string
  ingress?: string
  content?: PortableTextBlock[]
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = params

  const article = await client.fetch<Article>(
    `*[_type == "article" && slug.current == $slug][0]{
      title,
      ingress,
      content
    }`,
    { slug }
  )

  if (!article) {
    return (
      <main className="prose mx-auto p-8">
        <h1>Fant ikke artikkelen 😢</h1>
      </main>
    )
  }

  return (
    <main className="prose mx-auto p-8">
      <h1>{article.title}</h1>
      {article.ingress && <p className="text-lg text-gray-600">{article.ingress}</p>}
      {article.content && <PortableText value={article.content} />}
    </main>
  )
}