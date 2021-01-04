module.exports = {
    base: "/blog/",
    title: "ruizer博客",
    description: "个人博客",
    head: [["link", { rel: "icon", href: "/images/favicon.png" }]],
    markdown: {
        lineNumbers: true,
        anchor: {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: "#",
        },
    },
    themeConfig: {
        lastUpdated: "上次更新",
        nav: [
            { text: "主页", link: "/" },
            { text: "canvas", link: "https://ruizer.github.io/canvas-study/" },
            { text: "Github", link: "https://github.com/ruizer/blog" },
        ],
        sidebar: {
            "/vue/": [
                {
                    title: "vue",
                    collapsable: false,
                    sidebarDepth: 2,
                    children: ["01", "02", "03"],
                },
            ],
        },
    },
}
