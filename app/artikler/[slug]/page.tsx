export { default } from './ArticlePage'

export const generateStaticParams = (async () => {
  const mod = await import('./ArticlePage')
  return mod.generateStaticParams()
}) satisfies () => Promise<{ slug: string }[]>