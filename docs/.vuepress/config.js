
module.exports = {
    title: '记录学习，记录生活',
    description: '记录学习，记录生活',
    base: '/learn-notes/',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        subSidebar: 'auto',
        activeHeaderLinks: false,
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
                title: "移动端",
                path: '/mobile/h5-jump-app',
                collapsable: false, // 不折叠
                children: [
                    { title: "H5打开APP指定页面", path: "https://github.com/sanlangguo/learn-notes/issues/8" },
                    { title: "移动端兼容问题记录", path: "https://github.com/sanlangguo/learn-notes/issues/7" }
                ],
            }
        ]
    }
}