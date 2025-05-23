// app/artikler/[slug]/page.tsx

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams(): Promise<Props['params'][]> {
  return [] // Du kan hente faktiske slugs fra Sanity her senere
}

export default function ArticlePage({ params }: Props) {
  return (
    <main className="prose mx-auto p-8">
      <h1>Forhåndsvisning av artikkel: {params.slug}</h1>
      <p>Her kommer innholdet fra Sanity etter hvert.</p>
    </main>
  )
}