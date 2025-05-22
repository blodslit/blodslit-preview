// app/artikler/[slug]/page.tsx

type Props = {
  params: Record<string, string>
}

export default function ArticlePage({ params }: Props) {
  return (
    <main className="prose mx-auto p-8">
      <h1>Forhåndsvisning av artikkel: {params.slug}</h1>
    </main>
  )
}