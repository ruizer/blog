# 来，让我们一起来盘盘 Nodejs 环境变量(process.env)

> 额，仅仅讨论 `process.env` 属性，项目上常用的 NODE_ENV 啊，自己定义的 SERVER_PATH、BASEURL、VUE_APP_TITLE 啥的，怎么修改，怎么方便快速切换环境，一起来盘盘

## 首先 process.env 是什么？

官方解释：`process` 对象是一个全局变量，提供了有关当前 `Node.js` 进程的信息并对其进行控制；而 `process.env` 属性会返回包含用户环境的对象，如下所示(官方示例)：

```
{
  TERM: 'xterm-256color',
  SHELL: '/usr/local/bin/bash',
  USER: 'nodejscn',
  PATH: '~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin',
  PWD: '/Users/nodejscn',
  EDITOR: 'vim',
  SHLVL: '1',
  HOME: '/Users/nodejscn',
  LOGNAME: 'nodejscn',
  _: '/usr/local/bin/node'
}
```

对，它是一个对象，不是我的对象，也不是你的对象～

它是 Nodejs 应用程序中，`process.env` 属性，返回包含用户环境的对象，所以它不可以在客户端侧代码中使用，简单得来说就是浏览器上，打包后的静态资源。

这时候就有人说了(假如)：不对啊，人家在写 `Vue` 项目的时候，可以在使用啊；比如 `VUE_APP_TITLE`，可以这样访问：

```
console.log(process.env.VUE_APP_TITLE)
```

懂的同学马上就懂了，不懂的同学你来看：`VUE_APP_TITLE`，标重点了，**VUE_APP**。

是不是有那么一丝明悟，对的，在写 Vue 项目时，在客户端侧代码中，只有以 `VUE_APP_` 开头的变量会被 `webpack.DefinePlugin` 静态嵌入到客户端侧的包中，你才可以在应用的代码中访问它们；当然，还有两个特殊的变量也可以在应用中访问：`NODE_ENV` 和 `BASE_URL`；来自官方的解释：[传送门](https://cli.vuejs.org/zh/guide/mode-and-env.html#在客户端侧代码中使用环境变量)

同样在 `React` 应用中，除了一些内置变量（ `NODE_ENV` 和 `PUBLIC_URL` ）之外，变量名必须以 `REACT_APP_` 开头才能使用。

## 如何修改？

要好好的使用 `process.env`，当然要知道如何修改它，就比如交往了一个女朋友，好吧，我没有女朋友。

言归正传，怎么修改呢？

答：直接赋值。

```
process.env.girlfriend = 100
console.log(process.env.girlfriend)
```

咦，怎么打印出来的是字符串？聪明的同学已经发现了。

~~我们不推荐这样的行为，不要做渣男，要一心一意。~~

嗯，我们确实不推荐这样的行为，因为在 `process.env` 上为属性赋值会隐式地将值转换为字符串：

```
process.env.girlfriend = true;
console.log(process.env.girlfriend);
// => 'true'

process.env.girlfriend = 1;
console.log(process.env.girlfriend);
// => '1'

process.env.girlfriend = null;
console.log(process.env.girlfriend);
// => 'null'

process.env.girlfriend = undefined;
console.log(process.env.girlfriend);
// => 'undefined'

process.env.girlfriend = {a: 'aa'};
console.log(process.env.girlfriend);
// => '[object Object]'
```

并且，当值不是字符串、数字或布尔值时，Node.js 未来的版本可能会抛出错误。

增删改查，如何删呢？直接 `delete` 就行了：

```
process.env.girlfriend = 1;
delete process.env.girlfriend
console.log(process.env.girlfriend);
// => undefined
```

**注意**，在 `Windows` 操作系统上，环境变量没有大小写之分：

```
process.env.GIRLFRIEND = 1;
console.log(process.env.girlfriend);
// => 'q'
```

## 如何方便的切换环境？

在公司中，一个项目一般会有开发版本、测试版本、线上版本，也许还有预上线版本，每个版本对应不同参数，比如请求的 API 地址，或者图像字体资源地址等等；

为了方便管理，我们通常做成配置文件的形式，根据不同的环境，加载不同的文件。毕竟我还要找女朋友，不能太 **low** 了。

### 修改 package.json 文件

比如我们现在要设置的环境变量 **girlfriend**

```
{
  ...,
  "scripts": {
    "normal": "export girlfriend='woman' && node friend.js",
    "sages": "export girlfriend='monster' && node friend.js" // 在windows上export要换成set
  },
  ...
```

`npm run normal` 就是正常模式

`npm run sages` 就是贤者模式

现在，我们可以通过配置 `package.json` 来设置环境变量，就可以在代码中获取对应的值，所以我们就可以很轻松的换环境了。

别急，可以使用 [cross-env](https://www.npmjs.com/cross-env) 依赖包，支持跨平台配置环境变量。
安装依赖:

```
npm install --save-dev cross-env
```

配置环境

```
"scripts": {
  "normal": "cross-env girlfriend='woman' node friend.js"
}
```

这样是不是好很多了~

不对啊，贤者模式有很多种情况啊，比如时长、地点等等，一大串的拼在后面也很 low。

其实有多种方法来解决这个问题，比如写个 `env` 模块

```
// env.js
module.exports = {
  'normal': {
    // 正常模式下的
  },
  // 其他模式
}
```

然后不同命令加载不同对象，进而修改环境变量:

```
const envConfig = require('env.js')[process.env.NODE_ENV];
if (Object.prototype.toString.call(envConfig) === '[object Object]') {
  for (const k in envConfig) {
    process.env[k] = envConfig[k]
  }
}

```

当然还有很多种方式。

在这里，我推荐使用 `.env`文件 结合 `dotenv` 依赖包的方式来实现。

好了，我要正经起来了。

### 关于 dotenv

`dotenv` 是一个零依赖包，可将环境变量从 `.env` 文件加载到 `process.env`；其原理是将 `.env` 文件解析为 `json` 对象，并对其中的 `key-value` 对通过 `process.env` 将其赋值为环境变量，之后便可通过 `process.env[key]` 来使用。

基本使用流程如下

#### 安装

```
# with npm
npm install dotenv

# or with Yarn
yarn add dotenv
```

### 使用

```
require('dotenv').config() // 默认是.env文件
```

它会把项目根目录下的 `.env` 文件内容加载到 `process.env`。

我们也可以使用它的 `Parse` 方法，拿到一个 `json` 对象

```
const fs = require('fs')
const dotenv = require('dotenv')
const config = dotenv.parse(fs.readFileSync('.env')) // will return an object
console.log(typeof config, config) // object { girlfriend : 'woman' }
```

更多相关内容，请见：[传送门](https://github.com/motdotla/dotenv)

## 分享一下我的方案

首先，不同环境对应不同 `.env` 文件，如：`.env.beta`、`.env.prod`；

`.env` 文件

```
NODE_ENV = 'development'
HOST = 'lacalhost'
PORT = 3000
MONGODB_HOST = '127.0.0.1'
MONGODB_USERNAME = 'root'
MONGODB_PASSWORD = '123'
```

`.env.prod` 文件

```
NODE_ENV = 'production'
HOST = '10.100.xx.xx'
PORT = 3000
MONGODB_HOST = '43.247.xx.xx'
MONGODB_USERNAME = 'root'
MONGODB_PASSWORD = 'xxxxxx'
```

之后在 `scripts` 命令中，使用 `--mode` 参数来区分不同环境，并与相关文件名对应；

`package.json` 文件

```
{
  ...,
  "scripts": {
    "dev": "cross-env nodemon server/index.js --watch",
    "prod": "cross-env node server/index.js --mode prod"
  },
  ...
}
```

然后在执行文件中，拿到命令参数 `process.argv`，并根据不同 `mode` 来加载不同 `.env` 文件，这样，我们就可以很轻松的换环境了；

`server/index.js` 文件

```
const dotenv = require('dotenv')
const argv = process.argv
const mode = argv[2] === '--mode' ? argv[3] : ''
const envFile = mode ? `.env.${mode}` : '.env'
dotenv.config({ path: envFile })
```

**问题**，声明命令参数必须统一，这样通过 `process.argv` 拿到的参数才能正确。比如：

```
// package.json
"scripts": {
  "dev": "cross-env nodemon server/index.js --watch --mode dev"
}

// server/index.js
console.log(process.argv)
// => ['xxx', 'xx', 'dev']
```

如果，要按照我这样的方式拿到参数，必须这样声明：

```
// package.json
"scripts": {
  "dev": "cross-env nodemon server/index.js --mode dev --watch"
}
```

关于 `process.argv` 方面的内容，我不是特别明白，若有错误请见谅。

## 最后

新的一年，新的开始，希望大家在新的一年都能找到自己 **对象**

本文完。
