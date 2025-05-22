// app/artikler/[slug]/page.tsx

export default async function ArticlePage({ params }: any) {
  return (
    <main className="prose mx-auto p-8">
      <h1>Forhåndsvisning av artikkel: {params.slug}</h1>
      <p>Her kommer innholdet fra Sanity etter hvert.</p>
    </main>
  )
}