// app/artikler/[slug]/page.tsx
import { Metadata } from 'next'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  // Midlertidig tom – du kan hente faktiske slugs fra Sanity her senere
  return []
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Artikkel: ${params.slug}`,
  }
}

export default function ArticlePage({ params }: Props) {
  return (
    <main className="prose mx-auto p-8">
      <h1>Forhåndsvisning av artikkel: {params.slug}</h1>
      <p>Her kommer innholdet fra Sanity etter hvert.</p>
    </main>
  )
}