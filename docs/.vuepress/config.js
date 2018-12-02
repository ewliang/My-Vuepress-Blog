module.exports = {
  title: 'My Vuepress Blog',
  description: 'This is my Vuepress experimental test blog to learn the framework.',
  themeConfig: {
    docsDir: 'docs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog' },
      { text: 'Contact', link: '/contact' },
      { text: 'Admin', link: '/admin/#/' }
    ],
    sidebar: [
      '/',
      '/blog',
      '/contact'
    ]
  }
}
