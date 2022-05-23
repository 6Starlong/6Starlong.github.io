# 代码提交规范 {#git-hook}

使用 git 初始化的项目，会在项目根路径生成 `.git` 文件夹 (默认隐藏)，其中 hooks 目录下会生成一些钩子文件，如：`pre-commit.sample` 和 `pre-push.sample`，git hook 是每次执行 git 操作时都会运行的命令或脚本，去除 `.sample` 后缀使其生效。

通过修改钩子文件，可以执行一些规范化操作，如：代码风格检查，提交信息校验等。一般 `.git` 文件夹并不会被上传到代码仓库，所以在本地修改钩子文件并不可取，使用 `husky` 和 `yorkie` 等工具使管理 git 钩子更加简单。

## yorkie

[yorkie](https://github.com/yyx990803/yorkie) 是尤雨溪 fork 自 [husky](https://github.com/typicode/husky) 后并做了一些小修改，比起 husky 使用更加简便。

```json
// package.json
"gitHooks": {
  "pre-commit": "foo"
}

```

::: tip
查看 `.git/hooks` 文件夹是否存在 pre-commit 文件确保其生效，commit-message 提交信息文件 `.git/COMMIT_EDITMSG`
:::

## simple-git-hooks

vite 项目中使用 [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) 代替 yorkie

vite 项目不支持在 package.json 中配置 gitHooks，vue-cli 项目能支持是因为在安装之后，@vue/cli-service 会安装 yorkie，让你在 package.json 的 gitHooks 字段中方便地指定 Git hook。

```json
// package.json
"simple-git-hooks": {
    "pre-commit" : "npx lint-staged" ,
    "pre-push" : "cd ../../ && npm run format" ,
}
```

初始化执行 `pnpx simple-git-hooks` 生成钩子文件

## lint-staged

> [lint-staged](https://github.com/okonet/lint-staged) 是一个对暂存的 git 文件运行 linter 的工具，不要让 💩 溜进你的代码库！

```json
// package.json
"lint-staged": {
  "*.js": ["eslint", "prettier --write"]
}
```

## verifyCommit

使用 verifyCommit 脚本对提交信息进行规范化校验

```sh
> mkdir scripts
> echo "" > scripts/verifyCommit.js
```

```json
// package.json
{
  // Git hooks
  "commit-msg": "node scripts/verifyCommit.js"
}
```

详情查看 [verify-commit.md](./verify-commit.md)

<!-- prompts 终端提交信息验证
picocolors 终端字符颜色 代替 chalk（5 以上版本需要 import 导入，使用需指定版本到 4.x）
semver 版本范围查看器
execa 在 JS 中执行命令行指令 -->
