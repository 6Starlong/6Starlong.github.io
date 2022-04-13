# Git

## 基础配置及使用

```shell
# 设置用户名和邮箱
git config --global user.name "You Name"
git config --global user.email email@example.com
# 将 main 作为初始化默认分支，代替 master
git config --global init.defaultBranch main

git init
git add .
git commit -m "First commit"
git remote add origin "repo URL"
git remote -v
git push origin main

# 分支重命名
git branch -m master main
# 删除远程 master 分支
git push origin --delete master
```

## 代码回滚

时光不能倒流，但是 git 允许我们改变历史

```shell
git log # 查看git历史，确认commit-id
git reset --hard commit-id  # 回滚到指定commit-id
git push origin main -f # 强制推送至远程分支
```

如果只需要回滚到上一次提交，可以使用

```shell
git reset --hard HEAD^
```

#### reset 还是 revert?

简单理解 reset 是用来重置代码到指定的 commit，revert 是还原代码到某次提交前的状态。<br/>

举个栗子，Git 历史提交记录如下：

```bash
45a4d42 # 第三次提交
fc09cf9 # 第二次提交
d14eab1 # 第一次提交
```

执行 `git reset --hard d14eab1`，这个时候指向第一次修改 d14eab1 ，而 d14eab1 之后的代码包括 fc09cf9 和 45a4d42 的修改都会被删除。<br />

如果是发现第二次修改有错误，想要恢复到第二次修改，并要保留第三次修改呢？使用 revert。<br />

```
git revert -n fc09cf9
git commit -m "恢复第二次修改"
```

此时 Git 提交历史变为：

```bash
9a0d7d5 (HEAD -> master) Revert "恢复第二次修改"
45a4d42 # 第三次提交
fc09cf9 # 第二次提交
d14eab1 # 第一次提交
```

实际 Git 把第二次修改从提交记录中给剔除(还原)了，还保留了第三次修改，并且产生了新的 commit_id(9a0d7d5)。
