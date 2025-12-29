/**
 * Supported locale identifiers.
 *
 * Each enum value represents a normalized, lowercase locale code.
 */
export enum Locale {
  EN = "en",
  KO = "ko",
  JA = "ja"
}

export type LocaleValue = `${Locale}`

const LOCALES = new Set<Locale>(Object.values(Locale))

/**
 * Normalizes a locale string into a supported `Locale`.
 *
 * Behavior:
 * - Converts input to lowercase
 * - Strips region codes (e.g. "en-US" → "en")
 * - Validates against supported locales
 *
 * @param input Raw locale string (e.g. "en", "en-US", "ko-KR")
 * @returns Normalized `Locale` if supported, otherwise `null`
 *
 * @example
 * normalize("en-US") // Locale.EN
 * normalize("ko")    // Locale.KO
 * normalize("meow")    // null
 */
export function normalize(input: string): Locale | null {
  if (!input) return null
  const base = input.toLowerCase().split("-")[0] as Locale
  return LOCALES.has(base) ? base : null
}
