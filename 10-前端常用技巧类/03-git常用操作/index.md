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

