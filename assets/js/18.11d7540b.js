(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{378:function(n,s,a){"use strict";a.r(s);var e=a(42),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"一次使用-docker-部署-node-koa-mongodb-nuxt-项目的经历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一次使用-docker-部署-node-koa-mongodb-nuxt-项目的经历"}},[n._v("#")]),n._v(" 一次使用 docker 部署 node+koa+mongodb+nuxt 项目的经历")]),n._v(" "),a("blockquote",[a("p",[n._v("本来是打算写成一篇文章的，懒得写，仅做个人记录而已")])]),n._v(" "),a("p",[n._v("通过 "),a("code",[n._v("dotenv")]),n._v(" 与 "),a("code",[n._v("dev")]),n._v(" 实现多环境配置，具体详情可见："),a("RouterLink",{attrs:{to:"/note/node/process-env.html#分享一下我的方案"}},[n._v("传送门")])],1),n._v(" "),a("p",[n._v("然后再结合 "),a("code",[n._v("shell")]),n._v(" 脚本与 "),a("code",[n._v("docker")]),n._v(" 配置对应的运行环境，具体如下")]),n._v(" "),a("p",[a("code",[n._v("shell")]),n._v(" 脚本")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('VERSION=0.1.0\nPORT=3000\nCOMPOSE_PROJECT_NAME="login-project"\n\n# 对应打包命令\nCOMMAND="beta"\n\necho "VERSION=${VERSION}" > .env\necho "PORT=${PORT}" >> .env\necho "COMPOSE_PROJECT_NAME=${COMPOSE_PROJECT_NAME}" >> .env\n\nif [ -n "$1" ]; then\n    COMMAND=$1\nelse\n    COMMAND="beta"\nfi\n\n# 镜像名\nname=docker.cn/front/${COMPOSE_PROJECT_NAME}\n\n# 依赖node\nnode_name=node\nnode_version=14.15.0\n\n# docker build命令\n# --build-arg 传参\ndocker build --build-arg NODE_BASE=$node_name:$node_version --build-arg COMMAND=$COMMAND -t $name:$VERSION --no-cache .\n\n# 使用 docker-compose 启动\ndocker-compose up -d\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br")])]),a("p",[a("code",[n._v("docker-compose.yml")]),n._v(" 文件")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('version: \'2\'\n\nservices:\n  login:\n    image: docker.cn/front/${COMPOSE_PROJECT_NAME}:${VERSION}\n    ports:\n      - ${PORT}:3000\n    networks:\n      - nodeapp-network\n    depends_on:\n      - mongodb\n\n  mongodb:\n    image: mongo\n    ports:\n      - 27017:27017\n    restart: always\n    networks:\n      - nodeapp-network\n    volumes:\n      - /etc/localtime:/etc/localtime:ro\n      - ./db/db_a/data:/data/db\n      - ./db/db_a/log:/data/log\n    command:\n      - /bin/bash\n      - -c\n      - mongod --port 27017 --bind_ip_all --auth --dbpath "/data/db" --logpath "/data/log/db.log"\n\nnetworks:\n  nodeapp-network:\n    driver: bridge\n\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br")])]),a("p",[a("code",[n._v("dockerfile")]),n._v(" 文件")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('ARG NODE_BASE\n\nFROM ${NODE_BASE}\n\n# 工作区间，并复制代码\nWORKDIR /login-app\nCOPY . /login-app\n\n# RUN npm config set registry https://registry.npm.taobao.org\n\n# RUN npm cache clean --force\n\nRUN npm install\nRUN npm run build\n\nARG COMMAND\n# 环境变量\nENV COMMAND="$COMMAND"\n\n# 加权限\nRUN chmod +x ./entrypoint.sh\n# 对应不同命令\nENTRYPOINT ["./entrypoint.sh"]\n\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br")])]),a("p",[a("code",[n._v("entrypoint.sh")]),n._v(" 脚本")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('#!/bin/bash\n\nif [ "$COMMAND" = "dev" ]; then\n  npm run dev\nelif [ "$COMMAND" = "beta" ]; then\n  npm run beta\nelif [ "$COMMAND" = "prod" ]; then\n  npm run prod\nfi\n\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);