# nginx 配置--部署 vue 项目

> 虽说标题是部署 vue 项目，但就是把`nginx`作为静态页面的 web 服务器来用而已；这边做个记录，方便以后直接复制

## 打包项目

`npm run build`或其他命令，打包后的文件放到指定目录，如：`/home/ruizer/demo/dist`

## nginx 配置

```
server {
    listen       8080;
    server_name  localhost;

    # gzip压缩
	gzip on;
    gzip_vary on;
    # gzip_proxied any;
    gzip_comp_level 6;
    gzip_buffers 32 4k;
    # gzip_http_version 1.1;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # 静态页面地址
    root   /home/ruizer/demo/dist;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ @router;
        index index.html;

        # 缓存
        if ($request_filename ~* .*\.(?:htm|html)$)
        {
            add_header Cache-Control "private, no-store, no-cache, must-revalidate, proxy-revalidate";
        }
        if ($request_filename ~* .*\.(?:js|css)$)
        {
            expires      7d;
        }
        if ($request_filename ~* .*\.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm)$)
        {
            expires      7d;
        }
    }

    location @router {
      rewrite ^.*$ /index.html last;
    }

    # 接口代理
    location /api {
        # 跨越
	    add_header 'Access-Control-Allow-Origin' "$http_origin";
	    add_header 'Access-Control-Allow-Credentials' 'true';
	    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, DELETE, PUT';
	    add_header 'Access-Control-Allow-Headers' 'X-Requested-With';

	    if ($request_method = 'OPTIONS') {
		    # 预检请求缓存时间
		    add_header 'Access-Control-Max-Age' 1728000;
		    add_header 'Content-Type' 'text/plain; charset=utf-8';
		    add_header 'Content-Length' 0;
		    return 204;
	    }
        # body大小
        client_max_body_size 1024m;

        rewrite    /api/(.*) /$1 break;
        proxy_pass http://10.5.15.112:9082;

        proxy_set_header   Host             $host;
        proxy_set_header   X-Real-IP        $remote_addr;
        proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
    }

}

```
