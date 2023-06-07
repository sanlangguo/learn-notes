
module.exports = {
    title: '记录学习，记录生活',
    description: '记录学习，记录生活',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        subSidebar: 'auto',
        // 导航
        nav: [
            { text: '首页', link: '/' },
            {
                text: ' 三浪过博客',
                items: [
                    { text: 'Github', link: 'https://sanlangguo.github.io/learn-notes/' },
                ]
            }
        ],
        sidebar: [
            {
                title: '自我介绍',
                path: '/',
                collapsable: false, // 不折叠
            },
            {
                title: "基础学习",
                path: '/handbook/ConditionalTypes',
                collapsable: false, // 不折叠
                children: [
                    { title: "条件类型", path: "/handbook/ConditionalTypes" },
                    { title: "泛型", path: "/handbook/Generics" }
                ],
            }
        ]
    }
}