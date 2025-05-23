import { notFound } from 'next/navigation'
import { getArticleBySlug } from '@/lib/sanity'

type Props = {
  params: {
    slug: string
  }
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="prose mx-auto p-8">
      <h1>{article.title}</h1>
      <div>{article.content}</div>
    </main>
  )
}