let dateFormatWithLang = (lang) => {
  switch (lang) {
    case 'en':
      return 'MMMM Do, YYYY'
    case 'zh':
      return 'LL'
    default:
      return 'MMMM Do, YYYY'
  }
}

export { dateFormatWithLang }
