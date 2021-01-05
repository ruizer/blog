# Git 常用命令
> 简单记录，不做依据

## 创建仓库命令

| 命令                                                   | 说明                                   |
| ------------------------------------------------------ | -------------------------------------- |
| [git init](https://www.runoob.com/git/git-init.html)   | 初始化仓库                             |
| [git clone](https://www.runoob.com/git/git-clone.html) | 拷贝一份远程仓库，也就是下载一个项目。 |

## 提交与修改

| 命令                                                         | 说明                                     |
| ------------------------------------------------------------ | ---------------------------------------- |
| [git add](https://www.runoob.com/git/git-add.html)           | 添加文件到仓库                           |
| [git status](https://www.runoob.com/git/git-status.html)     | 查看仓库当前的状态，显示有变更的文件。   |
| [git diff](https://www.runoob.com/git/git-diff.html)         | 比较文件的不同，即暂存区和工作区的差异。 |
| [git commit](<(https://www.runoob.com/git/git-commit.html)>) | 提交暂存区到本地仓库。                   |
| [git reset](<(https://www.runoob.com/git/git-reset.html)>)   | 回退版本。                               |
| [git rm](https://www.runoob.com/git/git-rm.html)             | 删除工作区文件。                         |
| [git mv](https://www.runoob.com/git/git-mv.html)             | 移动或重命名工作区文件。                 |

## 提交日志

| 命令                                                                               | 说明                                 |
| ---------------------------------------------------------------------------------- | ------------------------------------ |
| [git log](https://www.runoob.com/git/git-commit-history.html#git-log)              | 查看历史提交记录                     |
| [git blame \<file\>](https://www.runoob.com/git/git-commit-history.html#git-blame) | 以列表形式查看指定文件的历史修改记录 |

## 远程操作

| 命令                                                     | 说明               |
| -------------------------------------------------------- | ------------------ |
| [git remote](https://www.runoob.com/git/git-remote.html) | 远程仓库操作       |
| [git fetch](https://www.runoob.com/git/git-fetch.html)   | 从远程获取代码库   |
| [git pull](https://www.runoob.com/git/git-pull.html)     | 下载远程代码并合并 |
| [git push](https://www.runoob.com/git/git-push.html)     | 上传远程代码并合并 |

## 分支 branch 相关操作

| 命令              | 说明                                                 |
| ----------------- | ---------------------------------------------------- |
| git branch        | 查看本地分支                                         |
| git branch -r     | 查看远程分支                                         |
| git branch -a     | 查看本地所有分支                                     |
| git branch [name] | 创建本地分支（注意新分支创建后不会自动切换为当前分支） |
|git checkout [name]|切换分支|
|git checkout -b [name]|创建新分支并立即切换到新分支|
|git branch -d [name]|删除本地分支（选项-d只能删除已合并的分支，-D 强制删除）|
|git merge [name]|合并分支（将名称为[name]的分支与当前分支合并）|
