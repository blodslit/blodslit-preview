// app/artikler/[slug]/page.tsx

import { type Metadata } from 'next'

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Artikkel: ${params.slug}`,
  }
}

export default async function ArticlePage({ params }: PageProps) {
  return (
    <main className="prose mx-auto p-8">
      <h1>Forhåndsvisning av artikkel: {params.slug}</h1>
      <p>Her kommer innholdet fra Sanity etter hvert.</p>
    </main>
  )
}