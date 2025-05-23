// app/artikler/[slug]/page.tsx
import React from 'react'
import { notFound } from 'next/navigation'
import { getArticleBySlug } from '@/lib/sanity'

export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="prose mx-auto p-8">
      <h1>{article.title}</h1>
      <p>{article.excerpt}</p>
    </main>
  )
}