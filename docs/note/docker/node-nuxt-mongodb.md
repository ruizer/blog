# 一次使用 docker 部署 node+koa+mongodb+nuxt 项目的经历

> 本来是打算写成一篇文章的，懒得写，仅做个人记录而已

通过 `dotenv` 与 `dev` 实现多环境配置，具体详情可见：[传送门](../node/process-env.md#分享一下我的方案)

然后再结合 `shell` 脚本与 `docker` 配置对应的运行环境，具体如下

`shell` 脚本

```
VERSION=0.1.0
PORT=3000
COMPOSE_PROJECT_NAME="login-project"

# 对应打包命令
COMMAND="beta"

echo "VERSION=${VERSION}" > .env
echo "PORT=${PORT}" >> .env
echo "COMPOSE_PROJECT_NAME=${COMPOSE_PROJECT_NAME}" >> .env

if [ -n "$1" ]; then
    COMMAND=$1
else
    COMMAND="beta"
fi

# 镜像名
name=docker.cn/front/${COMPOSE_PROJECT_NAME}

# 依赖node
node_name=node
node_version=14.15.0

# docker build命令
# --build-arg 传参
docker build --build-arg NODE_BASE=$node_name:$node_version --build-arg COMMAND=$COMMAND -t $name:$VERSION --no-cache .

# 使用 docker-compose 启动
docker-compose up -d
```

`docker-compose.yml` 文件

```
version: '2'

services:
  login:
    image: docker.cn/front/${COMPOSE_PROJECT_NAME}:${VERSION}
    ports:
      - ${PORT}:3000
    networks:
      - nodeapp-network
    depends_on:
      - mongodb

  mongodb:
    image: mongo
    ports:
      - 27017:27017
    restart: always
    networks:
      - nodeapp-network
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./db/db_a/data:/data/db
      - ./db/db_a/log:/data/log
    command:
      - /bin/bash
      - -c
      - mongod --port 27017 --bind_ip_all --auth --dbpath "/data/db" --logpath "/data/log/db.log"

networks:
  nodeapp-network:
    driver: bridge

```

`dockerfile` 文件

```
ARG NODE_BASE

FROM ${NODE_BASE}

# 工作区间，并复制代码
WORKDIR /login-app
COPY . /login-app

# RUN npm config set registry https://registry.npm.taobao.org

# RUN npm cache clean --force

RUN npm install
RUN npm run build

ARG COMMAND
# 环境变量
ENV COMMAND="$COMMAND"

# 加权限
RUN chmod +x ./entrypoint.sh
# 对应不同命令
ENTRYPOINT ["./entrypoint.sh"]

```

`entrypoint.sh` 脚本

```
#!/bin/bash

if [ "$COMMAND" = "dev" ]; then
  npm run dev
elif [ "$COMMAND" = "beta" ]; then
  npm run beta
elif [ "$COMMAND" = "prod" ]; then
  npm run prod
fi

```
