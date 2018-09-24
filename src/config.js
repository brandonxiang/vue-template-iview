export default {
    headerLink: [
        {headTitle: 'Item 1', headName: '1', headIcon: 'ios-navigate'},
        {headTitle: 'Item 2', headName: '2', headIcon: 'ios-keypad'},
        {headTitle: 'Item 3', headName: '3', headIcon: 'ios-analytics'},
    ],
    subSystem: [
        {
            id:1,
            systemTitle: 'System 1',
            systemName: '1',
            systemIcon: 'ios-navigate',
            systemPages: [
                { pageTitle: 'Option 1', pageName: '1-1' },
                { pageTitle: 'Option 2', pageName: '1-2' },
                { pageTitle: 'Option 3', pageName: '1-3' },
            ]
        },
        {
            id:2,
            systemTitle: 'System 2',
            systemName: '2',
            systemIcon: 'ios-keypad',
            systemPages: [
                { pageTitle: 'Option 1', pageName: '2-1' },
                { pageTitle: 'Option 2', pageName: '2-2' },
                { pageTitle: 'Option 3', pageName: '2-3' },
            ]
        },
        {
            id:3,
            systemTitle: 'System 3',
            systemName: '3',
            systemIcon: 'ios-analytics',
            systemPages: [
                { pageTitle: 'Option 1', pageName: '3-1' },
                { pageTitle: 'Option 2', pageName: '3-2' },
                { pageTitle: 'Option 3', pageName: '3-3' },
            ]
        }
    ]
}