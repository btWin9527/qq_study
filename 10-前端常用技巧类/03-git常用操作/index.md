# git常用操作

## 1. git常用命令

```shell script
# Git初始化
git init
# 克隆现有仓库
git clone https://github.com/libgit2/libgit2
# 查看当前文件状态
git status
# 跟踪新文件
git add README
# 暂存已修改文件
git add CONTRIBUTING.md
git status
# 状态简览
git status -s
# 忽略文件(.gitignore 列出要忽略的文件模式)
# 查看已暂存和未暂存的修改
git diff
# 提交更新
git commit
# 跳过使用暂存区域(git 会自动把已经跟踪的文件暂存起来一并提交, 从而跳过git add 步骤)
# git commit -a
# 移除文件
rm PROJECTS.md

```

## 2. .gitignore

```gitignore
# no .a files
*.a

# but do track lib.a, even though you're ignoring .a files above
!lib.a

# only ignore the TODO file in the current directory, not subdir/TODO
/TODO

# ignore all files in the build/ directory
build/

# ignore doc/notes.txt, but not doc/server/arch.txt
doc/*.txt

# ignore all .pdf files in the doc/ directory
doc/**/*.pdf
```

## 3. git合并

### 3.1 Fast-forward(--ff)

> 快速合并, 不会创建新的提交，而是会把我们正在合并的分支上的提交直接合并到当前分支(如果你的当前分支相比较你想要合并的分支没有任何提交, 则可以使用快速合并)

```shell script
master$ git merge dev

```

### 3.2 No-fast-foward(--no-ff)

> 如果我们在当前分支上提交我们想要合并的分支不具备的改变，git将执行 no-fast-forward，git会在当前分支创建merging commit

```shell script
git merge --no-ff -m "merge with no-ff" master
```


