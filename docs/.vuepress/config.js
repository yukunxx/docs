module.exports = {
  themeConfig: {
    logo: '/assets/img/cc.jpg',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Notes',
        ariaLabel: 'Note Menu',
        items: [
          {
            text: "后端", items: [
              { text: 'Java', link: '/note/backEnd/Java/' },
              { text: 'JavaWeb', link: '/note/backEnd/JavaWeb' }
            ]
          },
          {
            text: "前端", items: [
              { text: 'HTML/CSS', link: '/note/frontEnd/HTML-CSS' },
              { text: 'JavaScript', link: '/note/frontEnd/JavaScript' },
              { text: 'Vue', link: '/note/frontEnd/Vue' }
            ]
          }
        ]
      },
      { text: 'Journals', link: '/journals/' },
      { text: 'About', link: '/about/' },
    ],
    sidebar: [
      {
        title: 'Java',
        path: '/note/backEnd/Java/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/note/backEnd/Java/Java',
          '/note/backEnd/Java/demo'
        ]
      },
    ]

  }
}