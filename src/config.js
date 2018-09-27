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
        { pageTitle: 'Option 1', pageName: '1/', link: 'http://localhost:8081/'},
        { pageTitle: 'Option 2', pageName: '1/about', link: 'http://localhost:8081/#/about' },
      ]
    },
    {
      systemTitle: 'System 2',
      systemName: '2',
      systemIcon: 'ios-keypad',
      systemPages: [
        { pageTitle: 'Option 1', pageName: '2-1', link: 'http://localhost:8082/' },
        { pageTitle: 'Option 2', pageName: '2-2', link: 'http://localhost:8082/' },
        { pageTitle: 'Option 3', pageName: '2-3', link: 'http://localhost:8082/' },
      ]
    },
    {
      systemTitle: 'System 3',
      systemName: '3',
      systemIcon: 'ios-analytics',
      systemPages: [
        { pageTitle: 'Option 1', pageName: '3-1', link: 'http://localhost:8083/' },
        { pageTitle: 'Option 2', pageName: '3-2', link: 'http://localhost:8083/' },
        { pageTitle: 'Option 3', pageName: '3-3', link: 'http://localhost:8083/' },
      ]
    }
  ]
}