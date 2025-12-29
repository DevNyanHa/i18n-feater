export enum Locale {
  EN = "en",
  KO = "ko",
  JA = "ja"
}

const LOCALES = new Set<Locale>(Object.values(Locale))

export function normalize(input: string): Locale | null {
  if (!input) return null
  const base = input.toLowerCase().split("-")[0] as Locale
  return LOCALES.has(base) ? base : null
}
