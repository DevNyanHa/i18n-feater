import { Locale } from "./locales"

/**
 * Message value type
 * - Can be a static string
 * - Or a function that returns a string (for parameterized messages)
 */
type MessageValue = string | ((...args: unknown[]) => string)

/**
 * Locale-based message map
 * - Does NOT require all locales to be defined
 * - Only the locales you want can be provided
 */
export type Messages = Partial<Record<Locale, Record<string, MessageValue>>>
