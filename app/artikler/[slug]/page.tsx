// app/artikler/[slug]/page.tsx

import { type Metadata } from 'next'
import { type FC } from 'react'

// eksplisitt props-type fra Next.js
type PageProps = {
  params: {
    slug: string
  }
}

// optional: SEO-støtte
export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  return {
    title: `Artikkel: ${params.slug}`,
  }
}

const ArticlePage: FC<PageProps> = ({ params }) => {
  return (
    <main className="prose mx-auto p-8">
      <h1>Forhåndsvisning av artikkel: {params.slug}</h1>
      <p>Her kommer innholdet fra Sanity etter hvert.</p>
    </main>
  )
}

export default ArticlePage