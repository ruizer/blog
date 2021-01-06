(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{379:function(s,n,a){"use strict";a.r(n);var e=a(42),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nginx-配置-部署-vue-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置-部署-vue-项目"}},[s._v("#")]),s._v(" nginx 配置--部署 vue 项目")]),s._v(" "),a("blockquote",[a("p",[s._v("虽说标题是部署 vue 项目，但就是把"),a("code",[s._v("nginx")]),s._v("作为静态页面的 web 服务器来用而已；这边做个记录，方便以后直接复制")])]),s._v(" "),a("h2",{attrs:{id:"打包项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包项目"}},[s._v("#")]),s._v(" 打包项目")]),s._v(" "),a("p",[a("code",[s._v("npm run build")]),s._v("或其他命令，打包后的文件放到指定目录，如："),a("code",[s._v("/home/ruizer/demo/dist")])]),s._v(" "),a("h2",{attrs:{id:"nginx-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置"}},[s._v("#")]),s._v(" nginx 配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {\n    listen       8080;\n    server_name  localhost;\n\n    # gzip压缩\n\tgzip on;\n    gzip_vary on;\n    # gzip_proxied any;\n    gzip_comp_level 6;\n    gzip_buffers 32 4k;\n    # gzip_http_version 1.1;\n    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;\n\n    # 静态页面地址\n    root   /home/ruizer/demo/dist;\n    index index.html index.htm;\n\n    location / {\n        try_files $uri $uri/ @router;\n        index index.html;\n\n        # 缓存\n        if ($request_filename ~* .*\\.(?:htm|html)$)\n        {\n            add_header Cache-Control \"private, no-store, no-cache, must-revalidate, proxy-revalidate\";\n        }\n        if ($request_filename ~* .*\\.(?:js|css)$)\n        {\n            expires      7d;\n        }\n        if ($request_filename ~* .*\\.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm)$)\n        {\n            expires      7d;\n        }\n    }\n\n    location @router {\n      rewrite ^.*$ /index.html last;\n    }\n\n    # 接口代理\n    location /api {\n        # 跨越\n\t    add_header 'Access-Control-Allow-Origin' \"$http_origin\";\n\t    add_header 'Access-Control-Allow-Credentials' 'true';\n\t    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, DELETE, PUT';\n\t    add_header 'Access-Control-Allow-Headers' 'X-Requested-With';\n\n\t    if ($request_method = 'OPTIONS') {\n\t\t    # 预检请求缓存时间\n\t\t    add_header 'Access-Control-Max-Age' 1728000;\n\t\t    add_header 'Content-Type' 'text/plain; charset=utf-8';\n\t\t    add_header 'Content-Length' 0;\n\t\t    return 204;\n\t    }\n        # body大小\n        client_max_body_size 1024m;\n\n        rewrite    /api/(.*) /$1 break;\n        proxy_pass http://10.5.15.112:9082;\n\n        proxy_set_header   Host             $host;\n        proxy_set_header   X-Real-IP        $remote_addr;\n        proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;\n    }\n\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);