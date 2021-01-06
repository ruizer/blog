# Ubuntu 下安装与完全卸载 nginx

## Ubuntu 下安装 Nginx

> 此处记录的是默认安装方式，   这种方式较为简单，只需要输入几条命令，就可以完成安装。

```
# 更新软件仓库源列表，使其保持最新的状态
sudo apt-get update
# 输入命令自动安装
sudo apt-get install nginx
```

至此，Nginx 安装完成，然后再对其进行简单的配置就可以使用了。在进行配置之前，需要了解这种方式下安装的默认程序文件位置分布情况，具体如下：

```
所有的配置文件都在/etc/nginx下
执行程序文件在/usr/sbin/nginx
日志文件放在了/var/log/nginx中。分别是access.log和error.log
默认虚拟主机的目录配置在了/var/www/下面。这个目录位置的设定是在/etc/nginx/sites-available里的配置文件进行的。与虚拟主机相关的设置，都是在这里进行的，可以自行修改，重启Nginx即可生效。
```

### 启动、关闭、重启 Nginx 服务

```
sudo systemctl start nginx
sudo systemctl restart nginx
sudo systemctl stop nginx

或
/etc/init.d/nginx start
/etc/init.d/nginx restart
/etc/init.d/nginx stop
```

## Ubuntu 下完全卸载 nginx 服务器

删除 nginx，–purge 包括配置文件

```
sudo apt-get --purge remove nginx
```

自动移除全部不使用的软件包

```
sudo apt-get autoremove
```

列出与 nginx 相关的软件 并删除显示的软件

````
dpkg --get-selections|grep nginx

sudo apt-get --purge remove nginx
sudo apt-get --purge remove nginx-common
sudo apt-get --purge remove nginx-core
```

再次执行
```
dpkg --get-selections|grep nginx

which nginx # 不在显示nginx
```

这样就可以完全卸载掉nginx包括配置文件
注意点：首先需要停止nginx的服务
````
