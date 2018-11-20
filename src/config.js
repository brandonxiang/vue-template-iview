export default {
  headerLink: [
    { headTitle: 'Item 1', headName: '1', headIcon: 'ios-navigate' },
    { headTitle: 'Item 2', headName: '2', headIcon: 'ios-keypad' },
    { headTitle: 'Item 3', headName: '3', headIcon: 'ios-analytics' },
  ],
  subSystem: [
    {
      systemTitle: 'System 1',
      systemName: '1',
      systemIcon: 'ios-navigate',
      systemPages: [
        { pageTitle: 'Page 1', pageName: '1/', link: 'http://localhost:8002/'},
        { pageTitle: 'Page 2', pageName: '1/about', link: 'http://localhost:8002/#/about' },
      ]
    },
    {
      systemTitle: 'System 2',
      systemName: '2',
      systemIcon: 'ios-keypad',
      systemPages: [
        { pageTitle: 'Page 1', pageName: '2-1', link: 'http://localhost:8003/' },
        { pageTitle: 'Page 2', pageName: '2-2', link: 'http://localhost:8003/' },
        { pageTitle: 'Page 3', pageName: '2-3', link: 'http://localhost:8003/' },
      ]
    },
    {
      systemTitle: 'System 3',
      systemName: '3',
      systemIcon: 'ios-analytics',
      systemPages: [
        { pageTitle: 'Page 1', pageName: '3-1', link: 'http://localhost:8004/' },
        { pageTitle: 'Page 2', pageName: '3-2', link: 'http://localhost:8004/' },
      ]
    }
  ]
}