import { notFound } from 'next/navigation'
import { getArticleBySlug } from '@/lib/sanityClient'

export default async function Page(props: Promise<{ params: { slug: string | string[] } }>) {
  const { params } = await props
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug
  const cleanSlug = slug.replace(/^\//, '')
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