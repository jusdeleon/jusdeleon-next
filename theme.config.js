export default {
  footer: '',
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: 'Read More →',
  titleSuffix: null,
  postFooter: null,
  darkMode: true,
  // navs: [
  //   {
  //     url: 'https://github.com/shuding/nextra',
  //     name: 'Nextra'
  //   }
  // ]
}
