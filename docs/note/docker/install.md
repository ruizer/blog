# 安装 docker

> 详情可见：https://yeasy.gitbook.io/docker_practice/install

## 使用脚本快速安装 docker

### 官方安装脚本

> Docker 官方为了简化安装流程，提供了一套安装脚本，Ubuntu 和 Debian 系统可 以使用这套脚本安装：

```
curl -sSL https://get.docker.com/ | sh
```

### 阿里云的安装脚本

```
curl -sSL http://acs-public-mirror.oss-cn-hangzhou.aliyuncs.com/docker-engine/internet | sh -
```

### DaoCloud 的安装脚本

```
curl -sSL https://get.daocloud.io/docker | sh
```

## 启动 Docker

```
sudo systemctl enable docker
sudo systemctl start docker
```

## 测试 Docker 是否安装正确

```
$ docker run hello-world

Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
d1725b59e92d: Pull complete
Digest: sha256:0add3ace90ecb4adbf7777e9aacf18357296e799f81cabc9fde470971e499788
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

## 配置镜像加速器

国内访问 Docker Hub 有时会遇到困难，此时可以配置镜像加速器。国内很多云服务商都提供了加速器服务：

-   阿里云加速器(点击管理控制台 -> 登录账号(淘宝账号) -> 右侧镜像中心 -> 镜像加速器 -> 复制地址)
-   网易云加速器(https://www.163yun.com/help/documents/56918246390157312) https://hub-mirror.c.163.com
-   百度云加速器(https://cloud.baidu.com/doc/CCE/s/Yjxppt74z#使用dockerhub加速器) https://mirror.baidubce.com

详情可见：https://yeasy.gitbook.io/docker_practice/install/mirror
不使用命令，可以在`/etc/docker/daemon.json`中写入以下内容

```
{
  "registry-mirrors": [
    "https://hub-mirror.c.163.com",
    "https://mirror.baidubce.com"
  ]
}
```

之后重启服务器：

```
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 安装 docker-compose

> https://blog.csdn.net/pushiqiang/article/details/78682323

```
sudo curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

# 挂载全局命令
sudo chmod +x /usr/local/bin/docker-compose
```
