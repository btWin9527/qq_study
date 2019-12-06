#!/bin/bash
#作用：生成数据库表对应的模型文件
#npm install -g sequelize-auto mysql
#安装git bash
#双击sh文件就能在本地生成模型文件
#HOST---ip地址  DB--数据库名 DIR--在当前目录生成模型文件
HOST="localhost"
DB="jindu_loan"
USER="root"
PASS="root"
PORT="3306"
DIR="./models"
EXEC="sequelize-auto -o ${DIR} -d ${DB} -h ${HOST} -u ${USER} -p ${PORT} -x ${PASS} -e mysql"

#run  执行
$EXEC
