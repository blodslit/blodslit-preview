// app/artikler/[slug]/generateStaticParams.ts
import { getAllArticleSlugs } from '@/lib/sanityClient'

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs()
  return slugs.map(slug => ({ slug }))
}