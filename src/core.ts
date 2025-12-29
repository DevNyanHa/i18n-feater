import { Locale } from "./locales"

interface I18nOptions {
  locale: Locale
  fallbackLocale: Locale
  scope?: string
}

export function I18N(options: I18nOptions) {
  if (options.locale === options.fallbackLocale) {
    throw new Error(
      `[i18n] fallback locale "${options.fallbackLocale}" cannot be the same as current locale "${options.locale}"`
    )
  }
}
