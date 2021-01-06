(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{377:function(n,s,a){"use strict";a.r(s);var t=a(42),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"ubuntu-下安装与完全卸载-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-下安装与完全卸载-nginx"}},[n._v("#")]),n._v(" Ubuntu 下安装与完全卸载 nginx")]),n._v(" "),a("h2",{attrs:{id:"ubuntu-下安装-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-下安装-nginx"}},[n._v("#")]),n._v(" Ubuntu 下安装 Nginx")]),n._v(" "),a("blockquote",[a("p",[n._v("此处记录的是默认安装方式，   这种方式较为简单，只需要输入几条命令，就可以完成安装。")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("# 更新软件仓库源列表，使其保持最新的状态\nsudo apt-get update\n# 输入命令自动安装\nsudo apt-get install nginx\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])]),a("p",[n._v("至此，Nginx 安装完成，然后再对其进行简单的配置就可以使用了。在进行配置之前，需要了解这种方式下安装的默认程序文件位置分布情况，具体如下：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("所有的配置文件都在/etc/nginx下\n执行程序文件在/usr/sbin/nginx\n日志文件放在了/var/log/nginx中。分别是access.log和error.log\n默认虚拟主机的目录配置在了/var/www/下面。这个目录位置的设定是在/etc/nginx/sites-available里的配置文件进行的。与虚拟主机相关的设置，都是在这里进行的，可以自行修改，重启Nginx即可生效。\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])]),a("h3",{attrs:{id:"启动、关闭、重启-nginx-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动、关闭、重启-nginx-服务"}},[n._v("#")]),n._v(" 启动、关闭、重启 Nginx 服务")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("sudo systemctl start nginx\nsudo systemctl restart nginx\nsudo systemctl stop nginx\n\n或\n/etc/init.d/nginx start\n/etc/init.d/nginx restart\n/etc/init.d/nginx stop\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br")])]),a("h2",{attrs:{id:"ubuntu-下完全卸载-nginx-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-下完全卸载-nginx-服务器"}},[n._v("#")]),n._v(" Ubuntu 下完全卸载 nginx 服务器")]),n._v(" "),a("p",[n._v("删除 nginx，–purge 包括配置文件")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("sudo apt-get --purge remove nginx\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br")])]),a("p",[n._v("自动移除全部不使用的软件包")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("sudo apt-get autoremove\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br")])]),a("p",[n._v("列出与 nginx 相关的软件 并删除显示的软件")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("dpkg --get-selections|grep nginx\n\nsudo apt-get --purge remove nginx\nsudo apt-get --purge remove nginx-common\nsudo apt-get --purge remove nginx-core\n```\n\n再次执行\n```\ndpkg --get-selections|grep nginx\n\nwhich nginx # 不在显示nginx\n```\n\n这样就可以完全卸载掉nginx包括配置文件\n注意点：首先需要停止nginx的服务\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);