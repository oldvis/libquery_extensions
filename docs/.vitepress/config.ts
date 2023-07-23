import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/libquery_extensions/',
  lang: 'en-US',
  title: 'libquery_extensions',
  description: 'Documentation for libquery_extensions',
  themeConfig: {
    logo: '/logo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
          text: 'Docs',
          link: '/guide/get-started'
      },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Get Started', link: '/guide/get-started' },
        ]
      },
      {
        text: 'API Reference',
        items: [
          { text: 'Alabama Maps', link: '/api/alabama-maps' },
          { text: 'British Library Collection Items', link: '/api/british-library-collection-items' },
          { text: 'British Library Images Online', link: '/api/british-library-images-online' },
          { text: 'British Library Online Gallery', link: '/api/british-library-online-gallery' },
          { text: 'Telefact', link: '/api/telefact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oldvis/libquery_extensions' }
    ],

    search: {
      provider: 'local'
    }
  }
})
