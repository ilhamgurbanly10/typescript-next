/** @type {import('next-i18next').UserConfig} */

module.exports = {
    i18n: {
      defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
      locales: process.env.NEXT_PUBLIC_LOCALES.split(','),
      localeDetection: false,
    },
};