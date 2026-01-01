## i18n-feater

[![Github](https://img.shields.io/badge/Github-DevNyanHa-white?logo=github)](https://github.com/DevNyanHa/i18n-feater)
![License](https://img.shields.io/github/license/DevNyanHa/i18n-feater)

A lightweight, type-safe i18n library for TypeScript.  
Provides simple locale state management with automatic fallback handling.

## Features
- TypeScript-first
- Locale state management
- Automatic fallback locale resolution
- Supports function-based messages (parameterized translations)
- Works in both Node.js and browser environments
- Zero dependencies

## Installation
```bash
npm i i18n-feater
```

## Basic Usage
```js
const i18n = I18N({
  fallbackLocale: Locale.EN,
  messages: {
    en: {
      hello: "Hello",
      welcome: name => `Welcome, ${name}`
    },
    ko: {
      hello: "안녕하세요"
    }
  }
});

i18n.setLocale(Locale.KO);

console.log(i18n.t("hello"));
console.log(i18n.t("welcome", "Tom"))
```
