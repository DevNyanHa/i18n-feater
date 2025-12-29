import { Locale } from "./locales"
import { Messages } from "./message"


/**
 * Options for initializing the i18n instance
 */
export interface I18nOptions {
  fallbackLocale: Locale
  messages: Messages
}

/**
 * Creates an i18n instance.
 *
 * Provides:
 * - locale state management
 * - translation with automatic fallback handling
 *
 * @param options I18nOption
 * @example
 * var i18n = I18n({
 *  fallbackLocale: Locale.EN,
 *  messages: {[Locale.EN]: {greeting: "Hello"},[Locale.KO]: {greeting: "안녕하세요"}}
 * })
 */
export function I18N(options: I18nOptions) {
  let currentLocale = options.fallbackLocale
  const messages = options.messages
  const fallbackLocale = options.fallbackLocale

  /**
   * Sets the current active locale.
   *
   * @param locale Locale to activate
   */
  function setLocale(locale: Locale) {
    currentLocale = locale
  }

  /**
   * Returns the current active locale.
   *
   * @returns Current locale
   */
  function getLocale() {
    return currentLocale
  }

  /**
   * Resolves a message for a specific locale.
   *
   * @param locale Target locale
   * @param key Message key
   * @param args Arguments for parameterized messages
   * @returns Resolved string or null if not found
   */
  function resolve(
    locale: Locale,
    key: string,
    args: unknown[]
  ): string | null {
    const value = messages[locale]?.[key]
    if (!value) return null
    return typeof value === "function" ? value(...args) : value
  }

  /**
   * Translates a message using the current locale.
   *
   * Resolution order:
   * 1. Current locale
   * 2. Fallback locale
   *
   * @param key Message key
   * @param args Arguments for parameterized messages
   * @returns Translated string
   * @throws Error if the key does not exist in both locales
   */
  function t(key: string, ...args: unknown[]) {
    return (
      resolve(currentLocale, key, args) ??
      resolve(fallbackLocale, key, args) ??
      (() => {
        throw new Error(
          `[i18n] missing key "${key}" for locale "${currentLocale}" and fallback "${fallbackLocale}"`
        )
      })()
    )
  }

  /**
   * Translates a message for a specific locale.
   *
   * Resolution order:
   * 1. Provided locale
   * 2. Fallback locale
   *
   * @param locale Target locale
   * @param key Message key
   * @param args Arguments for parameterized messages
   * @returns Translated string
   * @throws Error if the key does not exist in both locales
   */
  function translate(locale: Locale, key: string, ...args: unknown[]) {
    return (
      resolve(locale, key, args) ??
      resolve(fallbackLocale, key, args) ??
      (() => {
        throw new Error(
          `[i18n] missing key "${key}" for locale "${locale}" and fallback "${fallbackLocale}"`
        )
      })()
    )
  }

  return {
    t,
    translate,
    setLocale,
    getLocale,
    locales: Object.keys(messages) as Locale[]
  }
}
