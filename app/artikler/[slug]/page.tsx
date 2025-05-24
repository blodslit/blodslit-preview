// app/artikler/[slug]/page.tsx

import { notFound } from 'next/navigation'
import { getArticleBySlug } from '../../../lib/sanity'
import { generateStaticParams } from './generateStaticParams'

export default async function Page({
  params,
}: {
  params: { slug: string }
}) {
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

// 👇 OBS: Importert fra egen fil, ikke skrevet inline
export { generateStaticParams }