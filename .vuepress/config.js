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
          { text: 'Queue', link: '/queue/' },
          { text: 'Logs', link: '/logs/' },
          { text: 'Reports', link: '/reports/' }
           
          ]
      },

   
    plugins: ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }],
  }