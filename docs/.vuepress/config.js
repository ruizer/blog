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
        nav: [
            { text: "主页", link: "/" },
            { text: "canvas", link: "https://ruizer.github.io/canvas-study/" },
            { text: "Github", link: "https://github.com/ruizer/blog" },
        ],
        sidebar: {
            "/note/": [
                {
                    title: "vue",
                    collapsable: false,
                    sidebarDepth: 2,
                    children: ["vue/01"],
                },
                {
                    title: "css",
                    collapsable: false,
                    sidebarDepth: 2,
                    children: ["css/01"],
                },
                {
                    title: "git",
                    collapsable: false,
                    sidebarDepth: 2,
                    children: ["git/command"],
                },
                {
                    title: "nginx",
                    collapsable: false,
                    sidebarDepth: 2,
                    children: ["nginx/nginx-vue", "nginx/ubuntu-handle-nginx"],
                },
                {
                    title: "docker",
                    path: "/note/docker/",
                    collapsable: false,
                    sidebarDepth: 2,
                    children: ["docker/install"],
                },
                {
                    title: "转载",
                    path: "/note/reprint/",
                    sidebarDepth: 2,
                    children: ["reprint/css-word", "reprint/nginx"],
                },
                {
                    title: "旧文",
                    path: "/note/old/",
                    sidebarDepth: 2,
                    children: [
                        "old/window-post-message-for-wechat-login",
                        "old/css-function",
                        "old/table-grad",
                        "old/front-end-util-code",
                        "old/js-xlsx",
                        "old/publish-npm-package",
                        "old/vue-style-cli",
                        "old/window-print",
                        "old/javascript-basis-datatype",
                        "old/javascript-basis-typeof-instanceof",
                        "old/javascript-basis",
                        "old/javascript-basis-this",
                    ],
                },
            ],
        },
    },
}
