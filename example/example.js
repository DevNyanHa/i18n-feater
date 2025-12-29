const { I18N, Messagesm, Locale } = require("i18n-feater");

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
