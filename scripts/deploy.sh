#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 清除dist文件夹
rm -rf .vitepress/dist

# 生成静态文件
yarn build

# 进入生成的文件夹
cd .vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages


git push -f https://github.com/6Starlong/6Starlong.github.io.git main:gh-pages

cd -