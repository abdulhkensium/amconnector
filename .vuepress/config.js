module.exports = {

    title: 'Connector Documentation',
    description: 'Acumatica Magento Connector Documentation',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }]
      ],
    
      themeConfig: {
        displayAllHeaders: true,
        sidebar: 'auto',

        nav: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about/' }, 
          { text: 'Setup', link: '/setup/' },
          { text: 'Configuration', link: '/configuration/' },
          { text: 'Mapping', link: '/mapping/' },
          { text: 'Queue', link: '/queue/' },
          { text: 'Logs', link: '/logs/' },
          { text: 'Report', link: '/report/' }
           
          ]
      },


   
    plugins: ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }],
  }