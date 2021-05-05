在 Node.js 环境中，大部分 Node.js 版本（v10 以下）运行时并不支持 ESM，为了可以使用 ESM 方式编写测试脚本，我们需要安装 babel-jest 和 Babel 相关依赖到开发环境中：

```
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

同时创建 babel.config.js，内容如下：

```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

```

这里的降级需要输出代码内容到一个 output 目录中，浏览器即可直接引入该 output 目录中的编译后资源。我们使用@babel/plugin-transform-modules-umd 来完成对代码的降级编译：

```
npm install --save-dev @babel/plugin-transform-modules-umd @babel/core @babel/cli
```

同时在 package.json 中加入相关 script 内容："build": "babel index.js -d lib"，执行 npm run build；

符合 UMD 规范的代码，形如：

```
(function (root, factory) {

    if (typeof define === 'function' && define.amd) {

        // AMD. Register as an anonymous module.

        define(['b'], factory);

    } else if (typeof module === 'object' && module.exports) {

        // Node.

        module.exports = factory(require('b'));

    } else {

        // Browser globals (root is window)

        root.returnExports = factory(root.b);

    }

}(typeof self !== 'undefined' ? self : this, function (b) {

    // Use b in some fashion.

    // Just return a value to define the module export.

    // This example returns an object, but the module

    // can return a function as the exported value.

    return {};

}));

```
