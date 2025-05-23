// app/artikler/[slug]/page.tsx

import { notFound } from 'next/navigation'
import { getArticleBySlug, fetchAllArticleSlugs } from '@/lib/sanity'

type PageProps = {
  params: {
    slug: string
  }
}

export default async function Page({ params }: PageProps) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="prose mx-auto p-8">
      <h1>{article.title}</h1>
      <p>{article.description}</p>
    </main>
  )
}

export async function generateStaticParams() {
  const slugs = await fetchAllArticleSlugs()

  return slugs.map((slug) => ({
    slug,
  }))
}