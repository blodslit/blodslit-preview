// app/artikler/[slug]/page.tsx

export async function generateStaticParams() {
  return [
    { slug: 'test-artikkel' }, // Dummy slug, erstatt senere med fetch fra Sanity
  ]
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <main className="prose mx-auto p-8">
      <h1>Forhåndsvisning av artikkel: {params.slug}</h1>
      <p>Her kommer innholdet fra Sanity etter hvert.</p>
    </main>
  )
}