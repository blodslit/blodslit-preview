// app/artikler/[slug]/page.tsx

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params

  return (
    <main className="prose mx-auto p-8">
      <h1>Forhåndsvisning av artikkel: {slug}</h1>
      <p>Her kommer innholdet fra Sanity etter hvert.</p>
    </main>
  )
}