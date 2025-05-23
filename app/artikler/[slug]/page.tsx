// app/artikler/[slug]/page.tsx

export { default } from './ArticlePage'

// Dette unngår Next.js sin typekrøll med PageProps
export const generateStaticParams = async () => {
  const mod = await import('./ArticlePage')
  return mod.generateStaticParams()
}