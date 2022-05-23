# pnpm 包管理工具 {#pnpm-package-manager}

## 新一代包管理工具 {#introduce}

> pnpm 指 performant npm (高性能的 npm)，速度快、节省磁盘空间的软件包管理器。

当使用 npm 或 Yarn 时，如果你有 100 个项目，并且所有项目都有一个相同的依赖包，那么， 你在硬盘上就需要保存 100 份该相同依赖包的副本。然而，如果是使用 pnpm，依赖包将被存放在一个统一的位置。

1. 如果你对同一依赖包需要使用不同的版本，则仅有版本之间不同的文件会被存储起来。`pnpm update` 只会更新修改的新文件到存储中，而不会因为一个文件的修改而保存依赖包的所有文件。
2. 所有文件都保存在硬盘上的统一的位置。当安装软件包时，其包含的所有文件都会硬链接自此位置 (项目所在磁盘的 `.pnpm-store` 文件夹中)，而不会占用额外的硬盘空间。这让你可以在项目之间方便地共享相同版本的依赖包。

::: tip
使用 npm 或 Yarn 安装依赖包时，所有软件包都将被提升到 node_modules 的根目录下。其结果是，源码可以访问本不属于当前项目所设定的依赖包。pnpm 则是通过使用符号链接的方式仅将项目的直接依赖项添加到 node_modules 的根目录下。其他依赖则放到 `node_modules/.pnpm` 目录下。
:::

## 安装 {#install}

### 使用 Corepack {#corepack}

从 v16.13 开始，Node.js 发布了用于管理包管理器的 Corepack (包管理器的管理器) 。这是一项实验性功能，因此您需要通过运行以下命令来启用它。

```sh
> corepack enable
```

这将在您的系统上自动安装 pnpm。但是，它可能不是最新版本的 pnpm。请检查最新的 pnpm 版本并运行。

```sh
> corepack prepare pnpm@<version> --activate
```

### 使用 npm {#use-npm}

```sh
> npm install -g pnpm
```

### 升级 {#upgrade}

一旦安装完 pnpm 之后，就无需使用其它软件包管理器来更新 pnpm 了。你可以让 pnpm 自己来更新自己。

```sh
> pnpm add -g pnpm
```

## 使用方法 {#usage}

### pnpm CLI

使用方法与 npm 相差不大，且更加灵活。不同的是，pnpm 会校验所有的参数。

| npm 命令        | pnpm 等效                                        |
| --------------- | ------------------------------------------------ |
| `npm install`   | [`pnpm install`](https://pnpm.io/zh/cli/install) |
| `npm i <pkg>`   | `[pnpm add <pkg>]`                               |
| `npm run <cmd>` | `[pnpm <cmd>]`                                   |

### 配置 {#config}

pnpm 的配置格式与 npm 保持一直。因此，pnpm 设置配置的方式应该与 npm 相同

```sh
> pnpm config set store-dir /path/to/.pnpm-store
```

### pnpx {#pnpx}

npm 有一个很棒的包运行器叫做 npx。pnpm 通过 pnpx 命令提供相同的工具。唯一的不同是 pnpx 使用 pnpm 安装软件包

```sh
> pnpx create-react-app <project-name>
```

更多内容请参阅官网：https://www.pnpm.cn/
