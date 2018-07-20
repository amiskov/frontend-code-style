module.exports = {
    title: 'Стиль кода HTML, CSS, JS, jQuery',
    description: '',
    // base: '/frontend-codestyle/',
    themeConfig: {
        sidebar: [{
                title: 'Верстка',
                collapsable: false,
                children: [
                    '/html',
                    '/less'
                ]
            },
            {
                title: 'JS, jQuery',
                collapsable: false,
                children: [
                    '/js',
                    '/jquery',
                    '/commonjs'
                ]
            }
        ]
    }
};