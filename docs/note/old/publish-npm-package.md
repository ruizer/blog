# 如何发布自己的NPM包？

### 1、注册NPM账号
注册地址：www.npmjs.com

<!-- more -->

### 2、登录npm，发布自己的npm包

```
npm login
```
根据提示输入之前注册的账号、密码。

发布npm包：

```
npm publish
```
发布成功后可在自己个人的npm账号主页可以看到该包。

### 3、更新NPM包以及README文件
修改代码和readme后，执行以下代码

```
npm version patch
npm publish
```
npm version后面参数说明：

patch：小变动，比如修复bug等，版本号变动 v1.0.0->v1.0.1

minor：增加新功能，不影响现有功能,版本号变动 v1.0.0->v1.1.0

major：破坏模块对向后的兼容性，版本号变动 v1.0.0->v2.0.0

### 4、更新NPM包

```
针对patch： npm install 包名
针对minor： npm install 包名
针对major： npm install 包名@2.0.0
```
本文完， 感谢阅读。
