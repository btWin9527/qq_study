# Nodejs学习

## 1. cookie 和 session

```text
    cookie不能被storage代替的原因:
    cookieId唯一标识 - sessionid
```

# 后端四层应用架构

+ 数据层： sql表         quark_sql.sql
+ 模型层： 使用面向对象方式操作数据库    models
+ 服务层： 使用模型对象操作数据(CRUD)    services
+ 控制层： 接受用户请求并验证参数，然后传递给服务层     controllers
