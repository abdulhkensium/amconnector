module.exports = {

    title: 'Connector Documentation',
    description: 'Acumatica Magento Connector Documentation',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }]
      ],
    
      themeConfig: {
        displayAllHeaders: true,
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        activeHeaderLinks: true,

      
        algolia: {
          appId: 'BJRSDMOEJ2',
          apiKey: 'e34fd6607c0d17a88dbf54966cad9363',
          indexName: 'amconnector'
        },

        nav: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about/' }, 
          { text: 'Setup', items: [
            { text: 'Acumatica', link: '/setup/acumatica/' },
            { text: 'Magento', link: '/setup/magento/' }
          ]},
          { text: 'Configuration', items: [
            { text: 'Acumatica', link: '/configuration/acumatica/' },
            { text: 'Magento', link: '/configuration/magento/' }
          ]},
          { text: 'Mapping', link: '/mapping/' },
       //   { text: 'Queue', link: '/queue/' },
          { text: 'Logs',items: [
            { text: 'Acumatica', link: '/logs/acumatica/' },
            { text: 'Magento', link: '/logs/magento/' } 
        ]},
         // { text: 'Reports', link: '/reports/' }
         {
         text: 'FAQs',
         items: [
           { text: 'Licensing and Installation', link: '/faq/licensing-and-installation.md' },
           { text: 'Sales', link: '/faq/sales.md' },
           { text: 'Technical', link: '/faq/technical.md' },
           { text: 'How and What', link: '/faq/how-and-what.md' }
         ]
       },
          
           
          ]
      },

   
    plugins: [
      ['@vuepress/back-to-top', true],
      [
        'vuepress-plugin-zooming',
        {
          selector: '.theme-default-content img',
          delay: 1000,
          options: {
            bgColor: 'black',
            zIndex: 10000,
          },
        },
      ],
      ['vuepress-plugin-table-of-contents'],
      ['@vuepress/nprogress'],
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }]
  ]
  }