const ghpages = require("gh-pages")
console.log("同步中...")
ghpages.publish(
    "./docs/.vuepress/dist",
    {
        branch: "gh-pages",
    },
    function () {
        console.log("docs同步完成")
    }
)
