# 包管理器 {#package-manager}

npm 是 Node JavaScript 平台的包管理器，随同 Node 一起安装，并智能地管理依赖冲突。能够从 NPM 服务器上下载第三方包或命令行程序到本地使用，也可以编写自己的包或命令行程序上传到 NPM 服务器供别人使用。

## 安装 {#install}

1. 使用 Node 安装程序安装 Node.js 和 npm

   [Node.js 安装程序](https://nodejs.org/zh-cn/download/)

2. 使用 Node 版本管理器安装 Node.js 和 npm (推荐)

   [nvm-windows](https://github.com/coreybutler/nvm-windows)

检查你的 npm 和 Node.js 版本

```sh
> node -v
> npm -v
```

## npm CLI {#npm-cli}

常用的 CLI 命令

- init

  创建一个 package.json 文件

```sh
> npm init -y

# 使用以下命令创建一个基于 Vue 或 React 的项目
> npm init vue@latest
> npm init react-app <project-name>
```

- install

```sh
# 将依赖项安装到本地 node_modules 文件夹。
> npm install

# 安装依赖项并写入 dependencies 依赖。
> npm install <package-name>

# 安装依赖项并写入 devDependencies 开发依赖。
> npm install <package-name> --save-dev
> npm install <package-name> -D

# 全局安装依赖项。
> npm install -g <package-name>

# 安装依赖项并设置版本号。
> npm install <package-name>@latest
> npm install <package-name>@<version>

# 别名: add, i, in, ins, inst, insta, instal, isnt, isnta, isntal, isntall
```

- uninstall

```sh
> npm uninstall <package-name>

# 别名: unlink, remove, rm, r, un
```

- run-script

  这会从 `package.json` 的 scripts 对象运行任意命令

```sh
> npm run test
```

- config

  `npm config` 命令可用于查看、更新和编辑 npm 的配置

```sh
# 查看配置设置
> npm config list

# 查看缓存路径
> npm config get cache

# 设置缓存路径
> npm config set cache <dirname>
```

更多命令查看 https://docs.npmjs.com/cli/v8/commands

## 镜像源 {#mirror}

默认情况下，npm 已预先配置使用 https://registry.npmjs.org 作为源地址，从国内访问的速度比较慢，阿里旗下维护着一个完整的 npm 镜像源 https://registry.npm.taobao.org

```sh
# 查看源
> npm config get registry

# 临时修改
> npm add <package-name> --registry https://registry.npm.taobao.org

# 持久使用
> npm config set registry https://registry.npm.taobao.org

# 还原
> npm config set registry https://registry.npmjs.org
```

## 主流包管理工具 {#main-package-manager}

除 npm 外，主流包管理器还有 yarn 和 pnpm。

1. Yarn 是由 Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具，正如官方文档中写的，Yarn 是为了弥补 npm 的一些缺陷而出现的。

2. pnpm 指 performant npm (高性能的 npm)，速度快、节省磁盘空间的软件包管理器。

::: info
推荐使用 pnpm 作为包管理工具，pnpm 相较于 npm 和 yarn 性能上有极大的提升，从官方提供的 [benchmarks](https://pnpm.io/zh/benchmarks) 数据可以看出 pnpm 的速度最快且性能更好。
:::

<hr/>

相关文档：

- [npm 官方文档](https://docs.npmjs.com/)
- [yarn 官方文档](https://yarnpkg.com/getting-started)
- [pnpm 官方文档](https://pnpm.io/zh/motivation)
- [pnpm 的安装与使用](https://6starlong.github.io/frontend/nodejs/pnpm.html)
