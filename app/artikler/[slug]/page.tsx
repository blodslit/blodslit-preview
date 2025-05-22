// app/artikler/[slug]/page.tsx

export const dynamic = 'force-dynamic'

type PageProps = {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: PageProps) {
  return (
    <main className="prose mx-auto p-8">
      <h1>Forhåndsvisning av artikkel: {params.slug}</h1>
      <p>Her kommer innholdet fra Sanity etter hvert.</p>
    </main>
  )
}