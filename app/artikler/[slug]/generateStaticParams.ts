// app/artikler/[slug]/generateStaticParams.ts

import { getAllArticleSlugs } from '../../../lib/sanity'

export async function generateStaticParams(): Promise<
  { slug: string }[]
> {
  const slugs = await getAllArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}