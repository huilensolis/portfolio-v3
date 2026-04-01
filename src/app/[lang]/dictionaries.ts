import 'server-only'
 
const dictionaries = {
  "en-US": () => import('@/data/dictionary/lang/en.json').then((module) => module.default),
  "es-ES": () => import('@/data/dictionary/lang/es.json').then((module) => module.default),
  "la-VA": () => import('@/data/dictionary/lang/la.json').then((module) => module.default),
}
 
export type Locale = keyof typeof dictionaries
 
export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries
 
export const getDictionary = async (locale: Locale) => dictionaries[locale]()

