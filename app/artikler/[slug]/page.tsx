// app/artikler/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getArticleBySlug, fetchAllArticleSlugs } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

type PageProps = {
  params: { slug: string }
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="prose mx-auto p-8">
      <h1>{article.title}</h1>
      {article.ingress && <p className="text-xl text-gray-600">{article.ingress}</p>}
      {article.content && <PortableText value={article.content} />}
    </main>
  )
}

export async function generateStaticParams() {
  const slugs = await fetchAllArticleSlugs()
  return slugs.map((slug: string) => ({ slug }))
}