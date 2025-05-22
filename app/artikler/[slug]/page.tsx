// app/artikler/[slug]/page.tsx

import { type Metadata } from 'next'

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Forhåndsvisning: ${params.slug}`,
  }
}

export default function ArticlePage({ params }: PageProps) {
  const { slug } = params

  return (
    <main className="prose mx-auto p-8">
      <h1>Forhåndsvisning av artikkel: {slug}</h1>
      <p>Her kommer innholdet fra Sanity etter hvert.</p>
    </main>
  )
}