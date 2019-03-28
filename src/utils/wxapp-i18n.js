import en from '../languages/en';
import zh_CN from '../languages/zh_CN';

let i18n = {};
i18n.locale = null;
i18n.locales = {};

i18n.setupLocales = async function() {
  i18n.locales.en = en;
  i18n.locales.zh_CN = zh_CN;
  i18n.locales.zh = zh_CN;
}

i18n.setLocale = function(locale) {
  i18n.locale = locale.match(/zh/g) ? 'zh' : 'en';
}

i18n.currentLang = function() {
  return i18n.locale.match(/zh/g) ? 'zh' : 'en';
}

i18n.translate = function(code, args) {
  const locale = i18n.locale;
  const locales = i18n.locales;
  let line = 'Missing translate line';

  if (locale && locales[locale] && locales[locale][code]) {
    line = locales[locale][code];
  }

  let ms = line.match(/({\w+})/g)
  if (ms && ms.length > 0) {
    ms.forEach(function(m) {
      let mt = m.substr(1, m.length - 2)
      line = line.replace(m, args[mt])
    })
  }
  return line
}

export default i18n;
