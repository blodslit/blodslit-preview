import { notFound } from 'next/navigation'
import { getArticleBySlug } from '@/lib/sanityClient'

type Props = {
  params: {
    slug: string
  }
}

export default async function Page({ params }: Props) {
  const cleanSlug = params.slug.replace(/^\//, '')
  const article = await getArticleBySlug(cleanSlug)

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