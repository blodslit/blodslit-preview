import { notFound } from "next/navigation"
import { getArticleBySlug, getAllArticleSlugs } from "@/lib/sanity"

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
      <div>{article.content}</div>
    </main>
  )
}

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs()
  return slugs.map((slug: string) => ({
    slug,
  }))
}