/* eslint-disable @typescript-eslint/no-explicit-any */

import { notFound } from 'next/navigation'
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/sanity'

export default async function Page(props: any) {
  const { slug } = props.params

  const article = await getArticleBySlug(slug)

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

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs()
  return slugs.map((slug: string) => ({ slug }))
}