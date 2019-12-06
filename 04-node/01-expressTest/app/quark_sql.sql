DROP DATABASE IF EXISTS jindu_loan;
CREATE DATABASE jindu_loan
	CHARACTER SET utf8
	COLLATE utf8_bin;
SET NAMES 'utf8';
USE jindu_loan;
SET FOREIGN_KEY_CHECKS=0;

/* Create Tables */

DROP TABLE IF EXISTS `jd_role`;
CREATE TABLE `jd_role`
(
	`id`           INT           NOT NULL AUTO_INCREMENT      COMMENT '角色id',
	`role_name`    VARCHAR(50)   NOT NULL                     COMMENT '角色名称',
	`role_dsc`     VARCHAR(500)  NOT NULL                     COMMENT '角色描述',
	`creator`      VARCHAR(10)   DEFAULT NULL                 COMMENT '创建人',
	`created`      DATETIME(0)   DEFAULT CURRENT_TIMESTAMP    COMMENT '创建时间',
	`modified`     DATETIME(0)   DEFAULT NULL                 COMMENT '修改时间',
	CONSTRAINT `PK_jd_role` PRIMARY KEY (`id`)
) COMMENT='角色表'
;

-- ----------------------------
-- Records of jd_role
-- ----------------------------
INSERT INTO jd_role (role_name, role_dsc)
VALUES ('administrator', '管理员');
INSERT INTO jd_role (role_name, role_dsc)
VALUES ('input', '进件员');
INSERT INTO jd_role (role_name, role_dsc)
VALUES ('approve', '审批员');

DROP TABLE IF EXISTS `jd_user`;
CREATE TABLE `jd_user`
(
	`id`           INT           NOT NULL AUTO_INCREMENT      COMMENT '用户Id',
	`account`      VARCHAR(50)   UNIQUE NOT NULL              COMMENT '账号',
	`password`     VARCHAR(50)   NOT NULL                     COMMENT '密码',
	`real_name`    VARCHAR(50)                                COMMENT '真实姓名',
	`reg_time`     DATETIME                                   COMMENT '注册时间',
	`remark`       VARCHAR(500)                               COMMENT '备注',
	`creator`      VARCHAR(10)   DEFAULT NULL                 COMMENT '创建人',
	`created`      DATETIME(0)   DEFAULT CURRENT_TIMESTAMP    COMMENT '创建时间',
	`modified`     DATETIME(0)   DEFAULT NULL                 COMMENT '修改时间',
	CONSTRAINT `PK_jd_user` PRIMARY KEY (`id`)
) COMMENT='用户表'
;

-- ----------------------------
-- Records of jd_user [admin@123]
-- ----------------------------
INSERT INTO jd_user (account, password, real_name, reg_time)
VALUES ('admin', 'admin@123', 'Admin', now());
INSERT INTO jd_user (account, password, real_name, reg_time)
VALUES ('test1', '123456', '张三', now());
INSERT INTO jd_user (account, password, real_name, reg_time)
VALUES ('test2', '123456', '李四', now());

DROP TABLE IF EXISTS `jd_user_role`;
CREATE TABLE `jd_user_role`
(
    `id`           INT           NOT NULL AUTO_INCREMENT      COMMENT '主码',
	`user_id`      INT           NOT NULL                     COMMENT '用户id',
	`role_id`      INT           NOT NULL                     COMMENT '角色id',
	PRIMARY KEY (`id`),
	unique key (`user_id`,`role_id`)
) COMMENT='用户角色表'
;

-- ----------------------------
-- Records of jd_user_role
-- ----------------------------
INSERT INTO jd_user_role (user_id, role_id)
VALUES (1, 1);
INSERT INTO jd_user_role (user_id, role_id)
VALUES (2, 2);
INSERT INTO jd_user_role (user_id, role_id)
VALUES (3, 3);

-- ----------------------------
-- Records of jd_user_role
-- ----------------------------

CREATE TABLE `jd_role_module`
(
    `id`           INT           NOT NULL AUTO_INCREMENT      COMMENT '主码',
	`role_id`      INT           NOT NULL                     COMMENT '角色id',
	`module_id`    INT           NOT NULL                     COMMENT '权限id',
	PRIMARY KEY (`id`),
	unique key (`module_id`,`role_id`)
) COMMENT='角色权限表'
;

-- ----------------------------
-- Records of jd_role_module
-- ----------------------------
INSERT INTO jd_role_module (role_id, module_id)
VALUES (1, 1);
INSERT INTO jd_role_module (role_id, module_id)
VALUES (1, 2);
INSERT INTO jd_role_module (role_id, module_id)
VALUES (1, 3);
INSERT INTO jd_role_module (role_id, module_id)
VALUES (1, 4);
INSERT INTO jd_role_module (role_id, module_id)
VALUES (1, 5);
INSERT INTO jd_role_module (role_id, module_id)
VALUES (1, 6);
INSERT INTO jd_role_module (role_id, module_id)
VALUES (1, 7);

DROP TABLE IF EXISTS `jd_module`;
CREATE TABLE `jd_module`
(
	`id`           INT           NOT NULL AUTO_INCREMENT      COMMENT '权限菜单id',
	`menu_name`    VARCHAR(50)   NOT NULL                     COMMENT '名称',
	`father_id`    INT           NOT NULL                     COMMENT '父级id 第一级默认父级为0',
	`menu_type`    TINYINT       NOT NULL                     COMMENT '类型 1菜单 2按钮',
	`menu_level`   INT           NOT NULL                     COMMENT '等级',
	`menu_url`     VARCHAR(200)  NOT NULL                     COMMENT '链接',
	`icon`         VARCHAR(200)  NOT NULL                     COMMENT '图标',
	`sort`         INT           NOT NULL                     COMMENT '排序',
	`creator`      VARCHAR(10)   DEFAULT NULL                 COMMENT '创建人',
	`created`      DATETIME(0)   DEFAULT CURRENT_TIMESTAMP    COMMENT '创建时间',
	`modified`     DATETIME(0)   DEFAULT NULL                 COMMENT '修改时间',
	CONSTRAINT `PK_jd_module` PRIMARY KEY (`id`)
) COMMENT='权限菜单表'
;

-- ----------------------------
-- Records of jd_module
-- ----------------------------
INSERT INTO jd_module (menu_name, father_id, menu_type, menu_level, menu_url, icon, sort)
VALUES ('首页', 0, 1, 1, '/index', 'fa fa-home fa-lg', 1);
INSERT INTO jd_module (menu_name, father_id, menu_type, menu_level, menu_url, icon, sort)
VALUES ('贷款申请', 0, 1, 1, '/loan/req', 'el-icon-user-solid', 2);
INSERT INTO jd_module (menu_name, father_id, menu_type, menu_level, menu_url, icon, sort)
VALUES ('申请管理', 0, 1, 1, '/loan/manager', 'el-icon-view', 3);
INSERT INTO jd_module (menu_name, father_id, menu_type, menu_level, menu_url, icon, sort)
VALUES ('贷款审批', 0, 1, 1, '', 'el-icon-office-building', 4);
INSERT INTO jd_module (menu_name, father_id, menu_type, menu_level, menu_url, icon, sort)
VALUES ('初审', 4, 1, 2, '/approve/first', 'el-icon-office-building', 5);
INSERT INTO jd_module (menu_name, father_id, menu_type, menu_level, menu_url, icon, sort)
VALUES ('终审', 4, 1, 2, '/approve/end', 'xx', 6);
INSERT INTO jd_module (menu_name, father_id, menu_type, menu_level, menu_url, icon, sort)
VALUES ('标的管理', 0, 1, 2, '/contract/manager', 'xx', 7);


DROP TABLE IF EXISTS `jd_loan`;
CREATE TABLE `jd_loan`
(
	`id`             INT           NOT NULL AUTO_INCREMENT      COMMENT 'id',
	`name`           VARCHAR(50)   NOT NULL                     COMMENT '名称',
	`identity_card`  VARCHAR(50)   NOT NULL                     COMMENT '身份证',
	`birthday`       DATETIME(0)   DEFAULT NULL                 COMMENT '出生日期',
	`sex`            VARCHAR(10)   DEFAULT NULL                 COMMENT '性别',
	`marriage`       VARCHAR(10)   DEFAULT NULL                 COMMENT '婚姻',
	`education`      VARCHAR(10)   DEFAULT NULL                 COMMENT '教育程度',
	`address1`       VARCHAR(100)  DEFAULT NULL                 COMMENT '居住地址',
	`address2`       VARCHAR(100)  DEFAULT NULL                 COMMENT '户籍地址',
	`phone`          VARCHAR(11)   DEFAULT NULL                 COMMENT '居住电话',
	`mobile_phone`   VARCHAR(20)   DEFAULT NULL                 COMMENT '手机',
	`company`        VARCHAR(50)   DEFAULT NULL                 COMMENT '公司全称',
	`trade`          VARCHAR(50)   DEFAULT NULL                 COMMENT '所属行业',
	`position`       VARCHAR(50)   DEFAULT NULL                 COMMENT '职位',
	`address3`       VARCHAR(50)   DEFAULT NULL                 COMMENT '公司地址',
	`company_type`   VARCHAR(50)   DEFAULT NULL                 COMMENT '公司类型',
	`company_email`  VARCHAR(50)   DEFAULT NULL                 COMMENT '公司邮箱',
	`company_phone`  VARCHAR(50)   DEFAULT NULL                 COMMENT '公司电话',
	`income`         DOUBLE(9,2)   DEFAULT NULL                 COMMENT '月收入(元)',
	`contact`        VARCHAR(10)   DEFAULT NULL                 COMMENT '家庭联系人',
	`contact_name`   VARCHAR(20)   DEFAULT NULL                 COMMENT '联系人名称',
	`contact_phone`  VARCHAR(20)   DEFAULT NULL                 COMMENT '联系人电话',
	`contact2`       VARCHAR(10)   DEFAULT NULL                 COMMENT '关系2',
	`contact2_name`  VARCHAR(20)   DEFAULT NULL                 COMMENT '关系2人名称',
	`contact2_phone` VARCHAR(20)   DEFAULT NULL                 COMMENT '关系2人电话',
	`contact2_dep`   VARCHAR(20)   DEFAULT NULL                 COMMENT '关系2人部门',
	`contact2_pos`   VARCHAR(20)   DEFAULT NULL                 COMMENT '关系2人职位',
	`status`         INT(2)        DEFAULT 0                    COMMENT '进件状态(进件状态查看readme.md)',
	`creator`        VARCHAR(10)   DEFAULT NULL                 COMMENT '创建人',
	`created`        DATETIME(0)   DEFAULT CURRENT_TIMESTAMP    COMMENT '创建时间',
	`modified`       DATETIME(0)   DEFAULT NULL                 COMMENT '修改时间',
	CONSTRAINT `PK_jd_loan` PRIMARY KEY (`id`)
) COMMENT='贷款申请表'
;

DROP TABLE IF EXISTS `jd_loan_approve_first`;
CREATE TABLE `jd_loan_approve_first`
(
	`id`             INT           NOT NULL AUTO_INCREMENT      COMMENT 'id',
	`loan_id`        INT           NOT NULL                     COMMENT '贷款id',
	`loan_name`      VARCHAR(50)   NOT NULL                     COMMENT '名称',
	`loan_card`      VARCHAR(50)   NOT NULL                     COMMENT '身份证',
	`approve`        VARCHAR(50)   NOT NULL                     COMMENT '审批人',
	`result`         VARCHAR(10)   DEFAULT NULL                 COMMENT '通过(pass)/拒绝(reject)',
	`content`        VARCHAR(100)  DEFAULT NULL                 COMMENT '审批备注',
	`modified`       DATETIME(0)   DEFAULT NULL                 COMMENT '审批时间',
	CONSTRAINT `PK_jd_loan_approve_first` PRIMARY KEY (`id`)
) COMMENT='贷款审批初审表'
;

DROP TABLE IF EXISTS `jd_loan_approve_end`;
CREATE TABLE `jd_loan_approve_end`
(
	`id`             INT           NOT NULL AUTO_INCREMENT      COMMENT 'id',
	`loan_id`        INT           NOT NULL                     COMMENT '贷款id',
	`loan_name`      VARCHAR(50)   NOT NULL                     COMMENT '名称',
	`loan_card`      VARCHAR(50)   NOT NULL                     COMMENT '身份证',
	`approve`        VARCHAR(50)   NOT NULL                     COMMENT '审批人',
	`result`         VARCHAR(10)   DEFAULT NULL                 COMMENT '通过(pass)/拒绝(reject)',
	`content`        VARCHAR(100)  DEFAULT NULL                 COMMENT '审批备注',
	`modified`       DATETIME(0)   DEFAULT NULL                 COMMENT '审批时间',
	CONSTRAINT `PK_jd_loan_approve_end` PRIMARY KEY (`id`)
) COMMENT='贷款审批终审表'
;

DROP TABLE IF EXISTS `jd_loan_log`;
CREATE TABLE `jd_loan_log`
(
	`id`             INT           NOT NULL AUTO_INCREMENT      COMMENT 'id',
	`loan_id`        INT           NOT NULL                     COMMENT '贷款id',
	`name`           VARCHAR(50)   NOT NULL                     COMMENT '审批人',
	`result`         VARCHAR(10)   DEFAULT NULL                 COMMENT '通过(pass)/拒绝(refuse)',
	`content`        VARCHAR(100)  DEFAULT NULL                 COMMENT '审批备注',
	`modified`       DATETIME(0)   DEFAULT NULL                 COMMENT '审批时间',
	CONSTRAINT `PK_jd_loan_log` PRIMARY KEY (`id`)
) COMMENT='贷款审批历史表'
;


DROP TABLE IF EXISTS `jd_contract`;
CREATE TABLE `jd_contract`
(
	`id`             INT           NOT NULL AUTO_INCREMENT      COMMENT 'id',
	`loan_id`        INT           NOT NULL                     COMMENT '贷款id',
	`loan_name`      VARCHAR(50)   NOT NULL                     COMMENT '名称',
	`loan_card`      VARCHAR(50)   NOT NULL                     COMMENT '身份证',
	`title`          VARCHAR(50)   DEFAULT NULL                 COMMENT '合同标题',
	`file_path`      VARCHAR(500)  DEFAULT NULL                 COMMENT '合同文件路径',
	`approve`        VARCHAR(10)   DEFAULT NULL                 COMMENT '创建人',
	`created`        DATETIME(0)   DEFAULT NULL                 COMMENT '创建时间',
	`modified`       DATETIME(0)   DEFAULT NULL                 COMMENT '修改时间',
	CONSTRAINT `PK_jd_contract` PRIMARY KEY (`id`)
) COMMENT='贷款合同表'
;


-- ----------------------------
-- Table structure for jd_area_info
-- ----------------------------
DROP TABLE IF EXISTS `jd_area_info`;
CREATE TABLE `jd_area_info`  (
  `AreaID` int(11) NOT NULL AUTO_INCREMENT COMMENT '区域ID',
  `ParentId` int(11) NOT NULL COMMENT '区域上级ID',
  `AreaName` varchar(255) NOT NULL COMMENT '区域名称',
  `AreaLevel` int(11) NOT NULL COMMENT '区域等级 1：国，2：省，3：市',
  `AreaName2` varchar(255) NULL DEFAULT '' COMMENT '区域名称拼音',
  PRIMARY KEY (`AreaID`) USING BTREE,
  UNIQUE INDEX `UK_areainfo`(`ParentId`, `AreaName`) USING BTREE,
  INDEX `IDX_areainfo_AreaLevel`(`AreaLevel`) USING BTREE
) ENGINE = InnoDB COMMENT = '地区国省市级联表' ;

-- ----------------------------
-- Records of jd_area_info
-- ----------------------------
INSERT INTO `jd_area_info` VALUES (1, 0, '中国', 1, 'China');
INSERT INTO `jd_area_info` VALUES (2, 1, '上海市', 2, 'ShangHai');
INSERT INTO `jd_area_info` VALUES (3, 1, '云南省', 2, 'YunNan');
INSERT INTO `jd_area_info` VALUES (4, 1, '内蒙古自治区', 2, 'NeiMengGu');
INSERT INTO `jd_area_info` VALUES (5, 1, '北京市', 2, 'BeiJing');
INSERT INTO `jd_area_info` VALUES (6, 1, '吉林省', 2, 'JiLinSheng');
INSERT INTO `jd_area_info` VALUES (7, 1, '四川省', 2, 'SiChuan');
INSERT INTO `jd_area_info` VALUES (8, 1, '天津市', 2, 'TianJin');
INSERT INTO `jd_area_info` VALUES (9, 1, '宁夏回族自治区', 2, 'NingXia');
INSERT INTO `jd_area_info` VALUES (10, 1, '安徽省', 2, 'AnHui');
INSERT INTO `jd_area_info` VALUES (11, 1, '山东省', 2, 'ShanDong');
INSERT INTO `jd_area_info` VALUES (12, 1, '山西省', 2, 'ShanXi');
INSERT INTO `jd_area_info` VALUES (13, 1, '广东省', 2, 'GuangDong');
INSERT INTO `jd_area_info` VALUES (14, 1, '广西壮族自治区', 2, 'GuangXi');
INSERT INTO `jd_area_info` VALUES (15, 1, '新疆维吾尔自治区', 2, 'XinJiang');
INSERT INTO `jd_area_info` VALUES (16, 1, '江苏省', 2, 'JiangSu');
INSERT INTO `jd_area_info` VALUES (17, 1, '江西省', 2, 'JiangXi');
INSERT INTO `jd_area_info` VALUES (18, 1, '河北省', 2, 'HeBei');
INSERT INTO `jd_area_info` VALUES (19, 1, '河南省', 2, 'HeNan');
INSERT INTO `jd_area_info` VALUES (20, 1, '浙江省', 2, 'ZheJiang');
INSERT INTO `jd_area_info` VALUES (21, 1, '海南省', 2, 'HaiNan');
INSERT INTO `jd_area_info` VALUES (22, 1, '湖北省', 2, 'HuBei');
INSERT INTO `jd_area_info` VALUES (23, 1, '湖南省', 2, 'HuNan');
INSERT INTO `jd_area_info` VALUES (24, 1, '甘肃省', 2, 'GanSu');
INSERT INTO `jd_area_info` VALUES (25, 1, '福建省', 2, 'FuJian');
INSERT INTO `jd_area_info` VALUES (26, 1, '西藏自治区', 2, 'XiZang');
INSERT INTO `jd_area_info` VALUES (27, 1, '贵州省', 2, 'GuiZhou');
INSERT INTO `jd_area_info` VALUES (28, 1, '辽宁省', 2, 'LiaoNing');
INSERT INTO `jd_area_info` VALUES (29, 1, '重庆市', 2, 'ChongQing');
INSERT INTO `jd_area_info` VALUES (30, 1, '陕西省', 2, 'Shaanxi');
INSERT INTO `jd_area_info` VALUES (31, 1, '青海省', 2, 'QingHai');
INSERT INTO `jd_area_info` VALUES (32, 1, '黑龙江省', 2, 'HeiLongJiang');
INSERT INTO `jd_area_info` VALUES (33, 10, '亳州市', 3, 'Bo Zhou');
INSERT INTO `jd_area_info` VALUES (34, 10, '六安市', 3, 'Lu An');
INSERT INTO `jd_area_info` VALUES (35, 10, '合肥市', 3, 'He Fei');
INSERT INTO `jd_area_info` VALUES (36, 10, '安庆市', 3, 'An Qing');
INSERT INTO `jd_area_info` VALUES (37, 10, '宣城市', 3, 'Xuan Cheng');
INSERT INTO `jd_area_info` VALUES (38, 10, '宿州市', 3, 'Su Zhou');
INSERT INTO `jd_area_info` VALUES (39, 10, '池州市', 3, 'Chi Zhou');
INSERT INTO `jd_area_info` VALUES (40, 10, '淮北市', 3, 'Huai Bei');
INSERT INTO `jd_area_info` VALUES (41, 10, '淮南市', 3, 'Huai Nan');
INSERT INTO `jd_area_info` VALUES (42, 10, '滁州市', 3, 'Chu Zhou');
INSERT INTO `jd_area_info` VALUES (43, 10, '芜湖市', 3, 'Wu Hu');
INSERT INTO `jd_area_info` VALUES (44, 10, '蚌埠市', 3, 'Bang Bu');
INSERT INTO `jd_area_info` VALUES (45, 10, '铜陵市', 3, 'Tong Ling');
INSERT INTO `jd_area_info` VALUES (46, 10, '阜阳市', 3, 'Fu Yang');
INSERT INTO `jd_area_info` VALUES (47, 10, '马鞍山市', 3, 'Ma An Shan');
INSERT INTO `jd_area_info` VALUES (48, 10, '黄山市', 3, 'Huang Shan');
INSERT INTO `jd_area_info` VALUES (49, 5, '北京市', 3, 'Bei Jing');
INSERT INTO `jd_area_info` VALUES (50, 25, '三明市', 3, 'San Ming');
INSERT INTO `jd_area_info` VALUES (51, 25, '南平市', 3, 'Nan Ping');
INSERT INTO `jd_area_info` VALUES (52, 25, '厦门市', 3, 'Xia Men');
INSERT INTO `jd_area_info` VALUES (53, 25, '宁德市', 3, 'Ning De');
INSERT INTO `jd_area_info` VALUES (54, 25, '泉州市', 3, 'Quan Zhou');
INSERT INTO `jd_area_info` VALUES (55, 25, '漳州市', 3, 'Zhang Zhou');
INSERT INTO `jd_area_info` VALUES (56, 25, '福州市', 3, 'Fu Zhou');
INSERT INTO `jd_area_info` VALUES (57, 25, '莆田市', 3, 'Pu Tian');
INSERT INTO `jd_area_info` VALUES (58, 25, '龙岩市', 3, 'Long Yan');
INSERT INTO `jd_area_info` VALUES (59, 24, '临夏回族自治州', 3, 'Lin Xia');
INSERT INTO `jd_area_info` VALUES (60, 24, '兰州市', 3, 'Lan Zhou');
INSERT INTO `jd_area_info` VALUES (61, 24, '嘉峪关市', 3, 'Jia Yu Guan');
INSERT INTO `jd_area_info` VALUES (62, 24, '天水市', 3, 'Tian Shui');
INSERT INTO `jd_area_info` VALUES (63, 24, '定西市', 3, 'Ding Xi');
INSERT INTO `jd_area_info` VALUES (64, 24, '平凉市', 3, 'Ping Liang');
INSERT INTO `jd_area_info` VALUES (65, 24, '庆阳市', 3, 'Qing Yang');
INSERT INTO `jd_area_info` VALUES (66, 24, '张掖市', 3, 'Zhang Ye');
INSERT INTO `jd_area_info` VALUES (67, 24, '武威市', 3, 'Wu Wei');
INSERT INTO `jd_area_info` VALUES (68, 24, '甘南藏族自治州', 3, 'Gan Nan');
INSERT INTO `jd_area_info` VALUES (69, 24, '白银市', 3, 'Bai Yin');
INSERT INTO `jd_area_info` VALUES (70, 24, '酒泉市', 3, 'Jiu Quan');
INSERT INTO `jd_area_info` VALUES (71, 24, '金昌市', 3, 'Jin Chang');
INSERT INTO `jd_area_info` VALUES (72, 24, '陇南市', 3, 'Long Nan');
INSERT INTO `jd_area_info` VALUES (73, 13, '东莞市', 3, 'Dong Guan');
INSERT INTO `jd_area_info` VALUES (74, 13, '中山市', 3, 'Zhong Shan');
INSERT INTO `jd_area_info` VALUES (75, 13, '云浮市', 3, 'Yun Fu');
INSERT INTO `jd_area_info` VALUES (76, 13, '佛山市', 3, 'Fo Shan');
INSERT INTO `jd_area_info` VALUES (77, 13, '广州市', 3, 'Guang Zhou');
INSERT INTO `jd_area_info` VALUES (78, 13, '惠州市', 3, 'Hui Zhou');
INSERT INTO `jd_area_info` VALUES (79, 13, '揭阳市', 3, 'Jie Yang');
INSERT INTO `jd_area_info` VALUES (80, 13, '梅州市', 3, 'Mei Zhou');
INSERT INTO `jd_area_info` VALUES (81, 13, '汕头市', 3, 'Shan Tou');
INSERT INTO `jd_area_info` VALUES (82, 13, '汕尾市', 3, 'Shan Wei');
INSERT INTO `jd_area_info` VALUES (83, 13, '江门市', 3, 'Jiang Men');
INSERT INTO `jd_area_info` VALUES (84, 13, '河源市', 3, 'He Yuan');
INSERT INTO `jd_area_info` VALUES (85, 13, '深圳市', 3, 'Shen Zhen');
INSERT INTO `jd_area_info` VALUES (86, 13, '清远市', 3, 'Qing Yuan');
INSERT INTO `jd_area_info` VALUES (87, 13, '湛江市', 3, 'Zhan Jiang');
INSERT INTO `jd_area_info` VALUES (88, 13, '潮州市', 3, 'Chao Zhou');
INSERT INTO `jd_area_info` VALUES (89, 13, '珠海市', 3, 'Zhu Hai');
INSERT INTO `jd_area_info` VALUES (90, 13, '肇庆市', 3, 'Zhao Qing');
INSERT INTO `jd_area_info` VALUES (91, 13, '茂名市', 3, 'Mao Ming');
INSERT INTO `jd_area_info` VALUES (92, 13, '阳江市', 3, 'Yang Jiang');
INSERT INTO `jd_area_info` VALUES (93, 13, '韶关市', 3, 'Shao Guan');
INSERT INTO `jd_area_info` VALUES (94, 14, '北海市', 3, 'Bei Hai');
INSERT INTO `jd_area_info` VALUES (95, 14, '南宁市', 3, 'Nan Ning');
INSERT INTO `jd_area_info` VALUES (96, 14, '崇左市', 3, 'Chong Zuo');
INSERT INTO `jd_area_info` VALUES (97, 14, '来宾市', 3, 'Lai Bin');
INSERT INTO `jd_area_info` VALUES (98, 14, '柳州市', 3, 'Liu Zhou');
INSERT INTO `jd_area_info` VALUES (99, 14, '桂林市', 3, 'Gui Lin');
INSERT INTO `jd_area_info` VALUES (100, 14, '梧州市', 3, 'Wu Zhou');
INSERT INTO `jd_area_info` VALUES (101, 14, '河池市', 3, 'He Chi');
INSERT INTO `jd_area_info` VALUES (102, 14, '玉林市', 3, 'Yu Lin');
INSERT INTO `jd_area_info` VALUES (103, 14, '百色市', 3, 'Bai Se');
INSERT INTO `jd_area_info` VALUES (104, 14, '贵港市', 3, 'Gui Gang');
INSERT INTO `jd_area_info` VALUES (105, 14, '贺州市', 3, 'He Zhou');
INSERT INTO `jd_area_info` VALUES (106, 14, '钦州市', 3, 'Qing Zhou');
INSERT INTO `jd_area_info` VALUES (107, 14, '防城港市', 3, 'Fang Cheng Gang');
INSERT INTO `jd_area_info` VALUES (108, 27, '六盘水市', 3, 'Liu Pan Shui');
INSERT INTO `jd_area_info` VALUES (109, 27, '安顺市', 3, 'An Shun');
INSERT INTO `jd_area_info` VALUES (110, 27, '毕节市', 3, 'Bi Jie');
INSERT INTO `jd_area_info` VALUES (111, 27, '贵阳市', 3, 'Gui Yang');
INSERT INTO `jd_area_info` VALUES (112, 27, '遵义市', 3, 'Zun Yi');
INSERT INTO `jd_area_info` VALUES (113, 27, '铜仁市', 3, 'Tong Ren');
INSERT INTO `jd_area_info` VALUES (114, 27, '黔东南苗族侗族自治州', 3, 'Qian Dong Nan Miao Zu Dong Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (115, 27, '黔南布依族苗族自治州', 3, 'Qian Nan Bu Yi Zu Miao Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (116, 27, '黔西南布依族苗族自治州', 3, 'Qian Xi Nan Bu Yi Zu Miao Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (117, 21, '万宁市', 3, 'Wan Ning');
INSERT INTO `jd_area_info` VALUES (118, 21, '三亚市', 3, 'San Ya');
INSERT INTO `jd_area_info` VALUES (119, 21, '三沙市', 3, 'San Sha');
INSERT INTO `jd_area_info` VALUES (120, 21, '东方市', 3, 'Dong Fang');
INSERT INTO `jd_area_info` VALUES (121, 21, '临高县', 3, 'Lin Gao Xian');
INSERT INTO `jd_area_info` VALUES (122, 21, '乐东黎族自治县', 3, 'Le Dong Li Zu Zi Zhi Xian');
INSERT INTO `jd_area_info` VALUES (123, 21, '五指山市', 3, 'Wu Zhi Shan');
INSERT INTO `jd_area_info` VALUES (124, 21, '保亭黎族苗族自治县', 3, 'Bao Ting Li Zu Miao Zu Zi Zhi Xian');
INSERT INTO `jd_area_info` VALUES (125, 21, '儋州市', 3, 'Dan Zhou');
INSERT INTO `jd_area_info` VALUES (126, 21, '定安县', 3, 'Ding An Xian');
INSERT INTO `jd_area_info` VALUES (127, 21, '屯昌县', 3, 'Tun Chang Xian');
INSERT INTO `jd_area_info` VALUES (128, 21, '文昌市', 3, 'Wen Chang');
INSERT INTO `jd_area_info` VALUES (129, 21, '昌江黎族自治县', 3, 'Chang Jiang Li Zu Zi Zhi Xian');
INSERT INTO `jd_area_info` VALUES (130, 21, '海口市', 3, 'Hai Kou');
INSERT INTO `jd_area_info` VALUES (131, 21, '澄迈县', 3, 'Cheng Mai Xian');
INSERT INTO `jd_area_info` VALUES (132, 21, '琼中黎族苗族自治县', 3, 'Qiong Zhong Li Zu Miao Zu Zi Zhi Xian');
INSERT INTO `jd_area_info` VALUES (133, 21, '琼海市', 3, 'Qiong Hai');
INSERT INTO `jd_area_info` VALUES (134, 21, '白沙黎族自治县', 3, 'Bai Sha Li Zu Zi Zhi Xian');
INSERT INTO `jd_area_info` VALUES (135, 21, '陵水黎族自治县', 3, 'Ling Shui Li Zu Zi Zhi Xian');
INSERT INTO `jd_area_info` VALUES (136, 18, '保定市', 3, 'Bao Ding');
INSERT INTO `jd_area_info` VALUES (137, 18, '唐山市', 3, 'Tang Shan');
INSERT INTO `jd_area_info` VALUES (138, 18, '廊坊市', 3, 'Lang Fang');
INSERT INTO `jd_area_info` VALUES (139, 18, '张家口市', 3, 'Zhang Jia Kou');
INSERT INTO `jd_area_info` VALUES (140, 18, '承德市', 3, 'Cheng De');
INSERT INTO `jd_area_info` VALUES (141, 18, '沧州市', 3, 'Cang Zhou');
INSERT INTO `jd_area_info` VALUES (142, 18, '石家庄市', 3, 'Shi Jia Zhuang');
INSERT INTO `jd_area_info` VALUES (143, 18, '秦皇岛市', 3, 'Qin Huang Dao');
INSERT INTO `jd_area_info` VALUES (144, 18, '衡水市', 3, 'Heng Shui');
INSERT INTO `jd_area_info` VALUES (145, 18, '邢台市', 3, 'Xing Tai');
INSERT INTO `jd_area_info` VALUES (146, 18, '邯郸市', 3, 'Han Dan');
INSERT INTO `jd_area_info` VALUES (147, 19, '三门峡市', 3, 'San Men Xia');
INSERT INTO `jd_area_info` VALUES (148, 19, '信阳市', 3, 'Xin Yang');
INSERT INTO `jd_area_info` VALUES (149, 19, '南阳市', 3, 'Nan Yang');
INSERT INTO `jd_area_info` VALUES (150, 19, '周口市', 3, 'Zhou Kou');
INSERT INTO `jd_area_info` VALUES (151, 19, '商丘市', 3, 'Shang Qiu');
INSERT INTO `jd_area_info` VALUES (152, 19, '安阳市', 3, 'An Yang');
INSERT INTO `jd_area_info` VALUES (153, 19, '平顶山市', 3, 'Ping Ding Shan');
INSERT INTO `jd_area_info` VALUES (154, 19, '开封市', 3, 'Kai Feng');
INSERT INTO `jd_area_info` VALUES (155, 19, '新乡市', 3, 'Xin Xiang');
INSERT INTO `jd_area_info` VALUES (156, 19, '洛阳市', 3, 'Luo Yang');
INSERT INTO `jd_area_info` VALUES (157, 19, '济源市', 3, 'Ji Yuan');
INSERT INTO `jd_area_info` VALUES (158, 19, '漯河市', 3, 'Luo He');
INSERT INTO `jd_area_info` VALUES (159, 19, '濮阳市', 3, 'Pu Yang');
INSERT INTO `jd_area_info` VALUES (160, 19, '焦作市', 3, 'Jiao Zuo');
INSERT INTO `jd_area_info` VALUES (161, 19, '许昌市', 3, 'Xu Chang');
INSERT INTO `jd_area_info` VALUES (162, 19, '郑州市', 3, 'Zheng Zhou');
INSERT INTO `jd_area_info` VALUES (163, 19, '驻马店市', 3, 'Zhu Ma Dian');
INSERT INTO `jd_area_info` VALUES (164, 19, '鹤壁市', 3, 'He Bi');
INSERT INTO `jd_area_info` VALUES (165, 32, '七台河市', 3, 'Qi Tai He');
INSERT INTO `jd_area_info` VALUES (166, 32, '伊春市', 3, 'Yi Chun');
INSERT INTO `jd_area_info` VALUES (167, 32, '佳木斯市', 3, 'Jia Mu Si');
INSERT INTO `jd_area_info` VALUES (168, 32, '双鸭山市', 3, 'Shuang Ya Shan');
INSERT INTO `jd_area_info` VALUES (169, 32, '哈尔滨市', 3, 'Ha Er Bin');
INSERT INTO `jd_area_info` VALUES (170, 32, '大兴安岭地区', 3, 'Da Xing An Ling');
INSERT INTO `jd_area_info` VALUES (171, 32, '大庆市', 3, 'Da Qing');
INSERT INTO `jd_area_info` VALUES (172, 32, '牡丹江市', 3, 'Mu Dan Jiang');
INSERT INTO `jd_area_info` VALUES (173, 32, '绥化市', 3, 'Sui Hua');
INSERT INTO `jd_area_info` VALUES (174, 32, '鸡西市', 3, 'Ji Xi');
INSERT INTO `jd_area_info` VALUES (175, 32, '鹤岗市', 3, 'He Gang');
INSERT INTO `jd_area_info` VALUES (176, 32, '黑河市', 3, 'Hei He');
INSERT INTO `jd_area_info` VALUES (177, 32, '齐齐哈尔市', 3, 'Qi Qi Ha Er');
INSERT INTO `jd_area_info` VALUES (178, 22, '仙桃市', 3, 'Xian Tao');
INSERT INTO `jd_area_info` VALUES (179, 22, '十堰市', 3, 'Shi Yan');
INSERT INTO `jd_area_info` VALUES (180, 22, '咸宁市', 3, 'Xian Ningh');
INSERT INTO `jd_area_info` VALUES (181, 22, '天门市', 3, 'Tian Men');
INSERT INTO `jd_area_info` VALUES (182, 22, '孝感市', 3, 'Xiao Gan');
INSERT INTO `jd_area_info` VALUES (183, 22, '宜昌市', 3, 'Yi Chang');
INSERT INTO `jd_area_info` VALUES (184, 22, '恩施土家族苗族自治州', 3, 'En Shi Tu Jia Zu Miao Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (185, 22, '武汉市', 3, 'Wu Han');
INSERT INTO `jd_area_info` VALUES (186, 22, '潜江市', 3, 'Qian Jiang');
INSERT INTO `jd_area_info` VALUES (187, 22, '神农架林区', 3, 'Shen Nong Jia Lin Qu');
INSERT INTO `jd_area_info` VALUES (188, 22, '荆州市', 3, 'Jing Zhou');
INSERT INTO `jd_area_info` VALUES (189, 22, '荆门市', 3, 'Jing Men');
INSERT INTO `jd_area_info` VALUES (190, 22, '襄樊市', 3, 'Xiang Fan');
INSERT INTO `jd_area_info` VALUES (191, 22, '鄂州市', 3, 'E Zhou');
INSERT INTO `jd_area_info` VALUES (192, 22, '随州市', 3, 'Sui Zhou');
INSERT INTO `jd_area_info` VALUES (193, 22, '黄冈市', 3, 'Huang Gang');
INSERT INTO `jd_area_info` VALUES (194, 22, '黄石市', 3, 'Huang Shi');
INSERT INTO `jd_area_info` VALUES (195, 23, '娄底市', 3, 'Lou Di');
INSERT INTO `jd_area_info` VALUES (196, 23, '岳阳市', 3, 'Yue Yang');
INSERT INTO `jd_area_info` VALUES (197, 23, '常德市', 3, 'Chang De');
INSERT INTO `jd_area_info` VALUES (198, 23, '张家界市', 3, 'Zhang Jia Jie');
INSERT INTO `jd_area_info` VALUES (199, 23, '怀化市', 3, 'Huai Hua');
INSERT INTO `jd_area_info` VALUES (200, 23, '株洲市', 3, 'Zhu Zhou');
INSERT INTO `jd_area_info` VALUES (201, 23, '永州市', 3, 'Yong Zhou');
INSERT INTO `jd_area_info` VALUES (202, 23, '湘潭市', 3, 'Xiang Tan');
INSERT INTO `jd_area_info` VALUES (203, 23, '湘西土家族苗族自治州', 3, 'Xiang Xi Tu Jia Zu Miao Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (204, 23, '益阳市', 3, 'Yi Yang');
INSERT INTO `jd_area_info` VALUES (205, 23, '衡阳市', 3, 'Heng Yang');
INSERT INTO `jd_area_info` VALUES (206, 23, '邵阳市', 3, 'Shao Yang');
INSERT INTO `jd_area_info` VALUES (207, 23, '郴州市', 3, 'Chen Zhou');
INSERT INTO `jd_area_info` VALUES (208, 23, '长沙市', 3, 'Chang Sha');
INSERT INTO `jd_area_info` VALUES (209, 6, '吉林市', 3, 'Ji Lin Shi');
INSERT INTO `jd_area_info` VALUES (210, 6, '四平市', 3, 'Si Ping');
INSERT INTO `jd_area_info` VALUES (211, 6, '延边朝鲜族自治州', 3, 'Yan Bian Chao Xian Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (212, 6, '松原市', 3, 'Song Yuan');
INSERT INTO `jd_area_info` VALUES (213, 6, '白城市', 3, 'Bai Cheng');
INSERT INTO `jd_area_info` VALUES (214, 6, '白山市', 3, 'Bai Shan');
INSERT INTO `jd_area_info` VALUES (215, 6, '辽源市', 3, 'Liao Yuan');
INSERT INTO `jd_area_info` VALUES (216, 6, '通化市', 3, 'Tong Hua');
INSERT INTO `jd_area_info` VALUES (217, 6, '长春市', 3, 'Chang Chun');
INSERT INTO `jd_area_info` VALUES (218, 16, '南京市', 3, 'Nan Jing');
INSERT INTO `jd_area_info` VALUES (219, 16, '南通市', 3, 'Nan Tong');
INSERT INTO `jd_area_info` VALUES (220, 16, '宿迁市', 3, 'Su Qian');
INSERT INTO `jd_area_info` VALUES (221, 16, '常州市', 3, 'Chang Zhou');
INSERT INTO `jd_area_info` VALUES (222, 16, '徐州市', 3, 'Xu Zhou');
INSERT INTO `jd_area_info` VALUES (223, 16, '扬州市', 3, 'Yang Zhou');
INSERT INTO `jd_area_info` VALUES (224, 16, '无锡市', 3, 'Wu Xi');
INSERT INTO `jd_area_info` VALUES (225, 16, '泰州市', 3, 'Tai Zhou');
INSERT INTO `jd_area_info` VALUES (226, 16, '淮安市', 3, 'Huai An');
INSERT INTO `jd_area_info` VALUES (227, 16, '盐城市', 3, 'Yan Cheng');
INSERT INTO `jd_area_info` VALUES (228, 16, '苏州市', 3, 'Su Zhou');
INSERT INTO `jd_area_info` VALUES (229, 16, '连云港市', 3, 'Lian Yun Gang');
INSERT INTO `jd_area_info` VALUES (230, 16, '镇江市', 3, 'Zhen Jiang');
INSERT INTO `jd_area_info` VALUES (231, 17, '上饶市', 3, 'Shang Rao');
INSERT INTO `jd_area_info` VALUES (232, 17, '九江市', 3, 'Jiu Jiang');
INSERT INTO `jd_area_info` VALUES (233, 17, '南昌市', 3, 'Nan Chang');
INSERT INTO `jd_area_info` VALUES (234, 17, '吉安市', 3, 'Ji An');
INSERT INTO `jd_area_info` VALUES (235, 17, '宜春市', 3, 'Yi Chun');
INSERT INTO `jd_area_info` VALUES (236, 17, '抚州市', 3, 'Fu Zhou');
INSERT INTO `jd_area_info` VALUES (237, 17, '新余市', 3, 'Xin Yu');
INSERT INTO `jd_area_info` VALUES (238, 17, '景德镇市', 3, 'Jing De Zhen');
INSERT INTO `jd_area_info` VALUES (239, 17, '萍乡市', 3, 'Ping Xiang');
INSERT INTO `jd_area_info` VALUES (240, 17, '赣州市', 3, 'Gan Zhou');
INSERT INTO `jd_area_info` VALUES (241, 17, '鹰潭市', 3, 'Ying Tan');
INSERT INTO `jd_area_info` VALUES (242, 28, '丹东市', 3, 'Dan Dong');
INSERT INTO `jd_area_info` VALUES (243, 28, '大连市', 3, 'Da Lian');
INSERT INTO `jd_area_info` VALUES (244, 28, '抚顺市', 3, 'Fu Shun');
INSERT INTO `jd_area_info` VALUES (245, 28, '朝阳市', 3, 'Chao Yang');
INSERT INTO `jd_area_info` VALUES (246, 28, '本溪市', 3, 'Ben Xi');
INSERT INTO `jd_area_info` VALUES (247, 28, '沈阳市', 3, 'Shen Yang');
INSERT INTO `jd_area_info` VALUES (248, 28, '盘锦市', 3, 'Pan Jin');
INSERT INTO `jd_area_info` VALUES (249, 28, '营口市', 3, 'Ying Kou');
INSERT INTO `jd_area_info` VALUES (250, 28, '葫芦岛市', 3, 'Hu Lu Dao');
INSERT INTO `jd_area_info` VALUES (251, 28, '辽阳市', 3, 'Liao Yang');
INSERT INTO `jd_area_info` VALUES (252, 28, '铁岭市', 3, 'Tie Ling');
INSERT INTO `jd_area_info` VALUES (253, 28, '锦州市', 3, 'Jin Zhou');
INSERT INTO `jd_area_info` VALUES (254, 28, '阜新市', 3, 'Fu Xin');
INSERT INTO `jd_area_info` VALUES (255, 28, '鞍山市', 3, 'An Shan');
INSERT INTO `jd_area_info` VALUES (256, 4, '乌兰察布市', 3, 'Wu Lan Cha Bu');
INSERT INTO `jd_area_info` VALUES (257, 4, '乌海市', 3, 'Wu Hai');
INSERT INTO `jd_area_info` VALUES (258, 4, '兴安盟', 3, 'Xing An Meng');
INSERT INTO `jd_area_info` VALUES (259, 4, '包头市', 3, 'Bao Tou');
INSERT INTO `jd_area_info` VALUES (260, 4, '呼伦贝尔市', 3, 'Hu Lun Bei Er');
INSERT INTO `jd_area_info` VALUES (261, 4, '呼和浩特市', 3, 'Hu He Hao Te');
INSERT INTO `jd_area_info` VALUES (262, 4, '巴彦淖尔市', 3, 'Ba Yan Nao Er');
INSERT INTO `jd_area_info` VALUES (263, 4, '赤峰市', 3, 'Chi Feng');
INSERT INTO `jd_area_info` VALUES (264, 4, '通辽市', 3, 'Tong Liao');
INSERT INTO `jd_area_info` VALUES (265, 4, '鄂尔多斯市', 3, 'E Er Duo Si');
INSERT INTO `jd_area_info` VALUES (266, 4, '锡林郭勒盟', 3, 'Xi Lin Guo Le Meng');
INSERT INTO `jd_area_info` VALUES (267, 4, '阿拉善盟', 3, 'A La Shan Meng');
INSERT INTO `jd_area_info` VALUES (268, 9, '中卫市', 3, 'Zhong Wei');
INSERT INTO `jd_area_info` VALUES (269, 9, '吴忠市', 3, 'Wu Zhong');
INSERT INTO `jd_area_info` VALUES (270, 9, '固原市', 3, 'Gu Yuan');
INSERT INTO `jd_area_info` VALUES (271, 9, '石嘴山市', 3, 'Shi Zui Shan');
INSERT INTO `jd_area_info` VALUES (272, 9, '银川市', 3, 'Yin Chuan');
INSERT INTO `jd_area_info` VALUES (273, 31, '果洛藏族自治州', 3, 'Guo Luo Zang Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (274, 31, '海东市', 3, 'Hai Dong');
INSERT INTO `jd_area_info` VALUES (275, 31, '海北藏族自治州', 3, 'Hai Bei Zang Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (276, 31, '海南藏族自治州', 3, 'Hai Nan Zang Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (277, 31, '海西蒙古族藏族自治州', 3, 'Hai Xi Meng Gu Zu Zang Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (278, 31, '玉树藏族自治州', 3, 'Yu Shu Zang Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (279, 31, '西宁市', 3, 'Xi Ning');
INSERT INTO `jd_area_info` VALUES (280, 31, '黄南藏族自治州', 3, 'Huang Nan Zang Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (281, 11, '东营市', 3, 'Dong Ying');
INSERT INTO `jd_area_info` VALUES (282, 11, '临沂市', 3, 'Lin Yi');
INSERT INTO `jd_area_info` VALUES (283, 11, '威海市', 3, 'Wei Hai');
INSERT INTO `jd_area_info` VALUES (284, 11, '德州市', 3, 'De Zhou');
INSERT INTO `jd_area_info` VALUES (285, 11, '日照市', 3, 'Ri Zhao');
INSERT INTO `jd_area_info` VALUES (286, 11, '枣庄市', 3, 'Zao Zhuang');
INSERT INTO `jd_area_info` VALUES (287, 11, '泰安市', 3, 'Tai An');
INSERT INTO `jd_area_info` VALUES (288, 11, '济南市', 3, 'Ji Nan');
INSERT INTO `jd_area_info` VALUES (289, 11, '济宁市', 3, 'Ji Ning');
INSERT INTO `jd_area_info` VALUES (290, 11, '淄博市', 3, 'Zi Bo');
INSERT INTO `jd_area_info` VALUES (291, 11, '滨州市', 3, 'Bin Zhou');
INSERT INTO `jd_area_info` VALUES (292, 11, '潍坊市', 3, 'Wei Fang');
INSERT INTO `jd_area_info` VALUES (293, 11, '烟台市', 3, 'Yan Tai');
INSERT INTO `jd_area_info` VALUES (294, 11, '聊城市', 3, 'Liao Cheng');
INSERT INTO `jd_area_info` VALUES (295, 11, '莱芜市', 3, 'Lai Wu');
INSERT INTO `jd_area_info` VALUES (296, 11, '菏泽市', 3, 'He Ze');
INSERT INTO `jd_area_info` VALUES (297, 11, '青岛市', 3, 'Qing Dao');
INSERT INTO `jd_area_info` VALUES (298, 12, '临汾市', 3, 'Lin Fen');
INSERT INTO `jd_area_info` VALUES (299, 12, '吕梁市', 3, 'Lv Liang');
INSERT INTO `jd_area_info` VALUES (300, 12, '大同市', 3, 'Da Tong');
INSERT INTO `jd_area_info` VALUES (301, 12, '太原市', 3, 'Tai Yuan');
INSERT INTO `jd_area_info` VALUES (302, 12, '忻州市', 3, 'Xin Zhou');
INSERT INTO `jd_area_info` VALUES (303, 12, '晋中市', 3, 'Jin Zhong');
INSERT INTO `jd_area_info` VALUES (304, 12, '晋城市', 3, 'Jin Cheng');
INSERT INTO `jd_area_info` VALUES (305, 12, '朔州市', 3, 'Shuo Zhou');
INSERT INTO `jd_area_info` VALUES (306, 12, '运城市', 3, 'Yun Cheng');
INSERT INTO `jd_area_info` VALUES (307, 12, '长治市', 3, 'Chang Zhi');
INSERT INTO `jd_area_info` VALUES (308, 12, '阳泉市', 3, 'Yang Quan');
INSERT INTO `jd_area_info` VALUES (309, 30, '咸阳市', 3, 'Xian Yang');
INSERT INTO `jd_area_info` VALUES (310, 30, '商洛市', 3, 'Shang Luo');
INSERT INTO `jd_area_info` VALUES (311, 30, '安康市', 3, 'An Kang');
INSERT INTO `jd_area_info` VALUES (312, 30, '宝鸡市', 3, 'Bao Ji');
INSERT INTO `jd_area_info` VALUES (313, 30, '延安市', 3, 'Yan An');
INSERT INTO `jd_area_info` VALUES (314, 30, '榆林市', 3, 'Yu Lin');
INSERT INTO `jd_area_info` VALUES (315, 30, '汉中市', 3, 'Han Zhong');
INSERT INTO `jd_area_info` VALUES (316, 30, '渭南市', 3, 'Wei Nan');
INSERT INTO `jd_area_info` VALUES (317, 30, '西安市', 3, 'Xi An');
INSERT INTO `jd_area_info` VALUES (318, 30, '铜川市', 3, 'Tong Chuan');
INSERT INTO `jd_area_info` VALUES (319, 2, '上海市', 3, 'Shang Hai');
INSERT INTO `jd_area_info` VALUES (320, 7, '乐山市', 3, 'Le Shan');
INSERT INTO `jd_area_info` VALUES (321, 7, '内江市', 3, 'Nei Jiang');
INSERT INTO `jd_area_info` VALUES (322, 7, '凉山彝族自治州', 3, 'Liang Shan Yi Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (323, 7, '南充市', 3, 'Nan Chong');
INSERT INTO `jd_area_info` VALUES (324, 7, '宜宾市', 3, 'Yi Bin');
INSERT INTO `jd_area_info` VALUES (325, 7, '巴中市', 3, 'Ba Zhong');
INSERT INTO `jd_area_info` VALUES (326, 7, '广元市', 3, 'Guang Yuan');
INSERT INTO `jd_area_info` VALUES (327, 7, '广安市', 3, 'Guang An');
INSERT INTO `jd_area_info` VALUES (328, 7, '德阳市', 3, 'De Yang');
INSERT INTO `jd_area_info` VALUES (329, 7, '成都市', 3, 'Cheng Du');
INSERT INTO `jd_area_info` VALUES (330, 7, '攀枝花市', 3, 'Pan Zhi Hua');
INSERT INTO `jd_area_info` VALUES (331, 7, '泸州市', 3, 'Lu Zhou');
INSERT INTO `jd_area_info` VALUES (332, 7, '甘孜藏族自治州', 3, 'Gan Zi Zang Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (333, 7, '眉山市', 3, 'Mei Shan');
INSERT INTO `jd_area_info` VALUES (334, 7, '绵阳市', 3, 'Mian Yang');
INSERT INTO `jd_area_info` VALUES (335, 7, '自贡市', 3, 'Zi Gong');
INSERT INTO `jd_area_info` VALUES (336, 7, '资阳市', 3, 'Zi Yang');
INSERT INTO `jd_area_info` VALUES (337, 7, '达州市', 3, 'Da Zhou');
INSERT INTO `jd_area_info` VALUES (338, 7, '遂宁市', 3, 'Sui Ning');
INSERT INTO `jd_area_info` VALUES (339, 7, '阿坝藏族羌族自治州', 3, 'A Ba Zang Zu Qiang Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (340, 7, '雅安市', 3, 'Ya An');
INSERT INTO `jd_area_info` VALUES (341, 8, '天津市', 3, 'Tian Jin');
INSERT INTO `jd_area_info` VALUES (342, 26, '山南地区', 3, 'Shan Nan');
INSERT INTO `jd_area_info` VALUES (343, 26, '拉萨市', 3, 'La Sa');
INSERT INTO `jd_area_info` VALUES (344, 26, '日喀则地区', 3, 'Ri Ka Ze');
INSERT INTO `jd_area_info` VALUES (345, 26, '昌都市', 3, 'Chang Du');
INSERT INTO `jd_area_info` VALUES (346, 26, '林芝地区', 3, 'Lin Zhi');
INSERT INTO `jd_area_info` VALUES (347, 26, '那曲地区', 3, 'Na Qu');
INSERT INTO `jd_area_info` VALUES (348, 26, '阿里地区', 3, 'A Li');
INSERT INTO `jd_area_info` VALUES (349, 15, '乌鲁木齐市', 3, 'Wu Lu Mu Qi');
INSERT INTO `jd_area_info` VALUES (350, 15, '五家渠市', 3, 'Wu Jia Qu');
INSERT INTO `jd_area_info` VALUES (351, 15, '伊犁哈萨克自治州', 3, 'Yi Li Ha Sa Ke Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (352, 15, '克孜勒苏柯尔克孜自治州', 3, 'Ke Zi Le Su Ke Er Ke Zi Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (353, 15, '克拉玛依市', 3, 'Ke La Ma Yi');
INSERT INTO `jd_area_info` VALUES (354, 15, '北屯市', 3, 'Bei Tun');
INSERT INTO `jd_area_info` VALUES (355, 15, '博尔塔拉蒙古自治州', 3, 'Bo Er Ta La Meng Gu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (356, 15, '双河市', 3, 'Shuang He');
INSERT INTO `jd_area_info` VALUES (357, 15, '可克达拉市', 3, 'Ke KE Da La');
INSERT INTO `jd_area_info` VALUES (358, 15, '吐鲁番地区', 3, 'Tu Lu Fan');
INSERT INTO `jd_area_info` VALUES (359, 15, '和田地区', 3, 'He Tian');
INSERT INTO `jd_area_info` VALUES (360, 15, '哈密市', 3, 'Ha Mi');
INSERT INTO `jd_area_info` VALUES (361, 15, '喀什地区', 3, 'Ka Shi');
INSERT INTO `jd_area_info` VALUES (362, 15, '图木舒克市', 3, 'Tu Mu Shu Ke');
INSERT INTO `jd_area_info` VALUES (363, 15, '塔城地区', 3, 'Ta Cheng');
INSERT INTO `jd_area_info` VALUES (364, 15, '巴音郭楞蒙古自治州', 3, 'Ba Yin Guo Leng Meng Gu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (365, 15, '昆玉市', 3, 'Kun Yu');
INSERT INTO `jd_area_info` VALUES (366, 15, '昌吉回族自治州', 3, 'Chang Ji Hui Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (367, 15, '石河子市', 3, 'Shi He Zi');
INSERT INTO `jd_area_info` VALUES (368, 15, '铁门关市', 3, 'Tie Men Guan');
INSERT INTO `jd_area_info` VALUES (369, 15, '阿克苏地区', 3, 'A Ke Su');
INSERT INTO `jd_area_info` VALUES (370, 15, '阿勒泰地区', 3, 'A Le Tai');
INSERT INTO `jd_area_info` VALUES (371, 15, '阿拉尔市', 3, 'A La Er');
INSERT INTO `jd_area_info` VALUES (372, 3, '临沧市', 3, 'Lin Cang');
INSERT INTO `jd_area_info` VALUES (373, 3, '丽江市', 3, 'Li Jiang');
INSERT INTO `jd_area_info` VALUES (374, 3, '保山市', 3, 'Bao Shan');
INSERT INTO `jd_area_info` VALUES (375, 3, '大理白族自治州', 3, 'Da Li Bai Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (376, 3, '德宏傣族景颇族自治州', 3, 'De Hong Dai Zu Jing Po Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (377, 3, '怒江傈僳族自治州', 3, 'Lu Jiang Li Su Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (378, 3, '文山壮族苗族自治州', 3, 'Wen Shan Zhuang Zu Miao Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (379, 3, '昆明市', 3, 'Kun Ming');
INSERT INTO `jd_area_info` VALUES (380, 3, '昭通市', 3, 'Zhao Tong');
INSERT INTO `jd_area_info` VALUES (381, 3, '普洱市', 3, 'Pu Er');
INSERT INTO `jd_area_info` VALUES (382, 3, '曲靖市', 3, 'Qu Jing');
INSERT INTO `jd_area_info` VALUES (383, 3, '楚雄彝族自治州', 3, 'Chu Xiong Yi Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (384, 3, '玉溪市', 3, 'Yu Xi');
INSERT INTO `jd_area_info` VALUES (385, 3, '红河哈尼族彝族自治州', 3, 'Hong He Ha Ni Zu Yi Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (386, 3, '西双版纳傣族自治州', 3, 'Xi Shuang Ban Na Dai Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (387, 3, '迪庆藏族自治州', 3, 'Di Qing Zang Zu Zi Zhi Zhou');
INSERT INTO `jd_area_info` VALUES (388, 20, '丽水市', 3, 'Li Shui');
INSERT INTO `jd_area_info` VALUES (389, 20, '台州市', 3, 'Tai Zhou');
INSERT INTO `jd_area_info` VALUES (390, 20, '嘉兴市', 3, 'Jia Xing');
INSERT INTO `jd_area_info` VALUES (391, 20, '宁波市', 3, 'Ning Bo');
INSERT INTO `jd_area_info` VALUES (392, 20, '杭州市', 3, 'Hang Zhou');
INSERT INTO `jd_area_info` VALUES (393, 20, '温州市', 3, 'Wen Zhou');
INSERT INTO `jd_area_info` VALUES (394, 20, '湖州市', 3, 'Hu Zhou');
INSERT INTO `jd_area_info` VALUES (395, 20, '绍兴市', 3, 'Shao Xing');
INSERT INTO `jd_area_info` VALUES (396, 20, '舟山市', 3, 'Zhou Shan');
INSERT INTO `jd_area_info` VALUES (397, 20, '衢州市', 3, 'Qu Zhou');
INSERT INTO `jd_area_info` VALUES (398, 20, '金华市', 3, 'Jin Hua');
INSERT INTO `jd_area_info` VALUES (399, 29, '重庆市', 3, 'Chong Qing');
INSERT INTO `jd_area_info` VALUES (400, 1, '台湾省', 2, 'Taiwan');
INSERT INTO `jd_area_info` VALUES (401, 400, '台北市', 3, 'Tai Bei');
INSERT INTO `jd_area_info` VALUES (402, 400, '高雄市', 3, 'Gao Xiong');
INSERT INTO `jd_area_info` VALUES (403, 400, '基隆市', 3, 'Ji Long');
INSERT INTO `jd_area_info` VALUES (404, 400, '台中市', 3, 'Tai Zhong');
INSERT INTO `jd_area_info` VALUES (405, 400, '台南市', 3, 'Tai Nan');
INSERT INTO `jd_area_info` VALUES (406, 400, '新竹市', 3, 'Xin Zhu');
INSERT INTO `jd_area_info` VALUES (407, 400, '嘉义市', 3, 'Jia Yi');
INSERT INTO `jd_area_info` VALUES (408, 400, '台北县', 3, 'Tai Bei Xian');
INSERT INTO `jd_area_info` VALUES (409, 400, '宜兰县', 3, 'Yi Lan Xian');
INSERT INTO `jd_area_info` VALUES (410, 400, '新竹县', 3, 'Xin Zhu Xian');
INSERT INTO `jd_area_info` VALUES (411, 400, '桃园县', 3, 'Tao Yuan Xian');
INSERT INTO `jd_area_info` VALUES (412, 400, '苗栗县', 3, 'Miao Li Xian');
INSERT INTO `jd_area_info` VALUES (413, 400, '台中县', 3, 'Tai Zhong Xian');
INSERT INTO `jd_area_info` VALUES (414, 400, '彰化县', 3, 'Zhang Hua Xian');
INSERT INTO `jd_area_info` VALUES (415, 400, '南投县', 3, 'Nan Tou Xian');
INSERT INTO `jd_area_info` VALUES (416, 400, '嘉义县', 3, 'Jia Yi Xian');
INSERT INTO `jd_area_info` VALUES (417, 400, '云林县', 3, 'Yun Lin Xian');
INSERT INTO `jd_area_info` VALUES (418, 400, '台南县', 3, 'Tai Nan Xian');
INSERT INTO `jd_area_info` VALUES (419, 400, '高雄县', 3, 'Gao Xiong Xian');
INSERT INTO `jd_area_info` VALUES (420, 400, '屏东县', 3, 'Ping Dong Xian');
INSERT INTO `jd_area_info` VALUES (421, 400, '台东县', 3, 'Tai Dong Xian');
INSERT INTO `jd_area_info` VALUES (422, 400, '花莲县', 3, 'Hua Lian Xian');
INSERT INTO `jd_area_info` VALUES (423, 400, '澎湖县', 3, 'Peng Hu Xian');
INSERT INTO `jd_area_info` VALUES (424, 1, '香港特别行政区', 2, 'HongKong');
INSERT INTO `jd_area_info` VALUES (425, 424, '中西区', 3, 'Zhong Xi Qu');
INSERT INTO `jd_area_info` VALUES (426, 424, '东区', 3, 'Dong Qu');
INSERT INTO `jd_area_info` VALUES (427, 424, '九龙城区', 3, 'Jiu Long Tang Qu');
INSERT INTO `jd_area_info` VALUES (428, 424, '观塘区', 3, 'Guan Tang Qu');
INSERT INTO `jd_area_info` VALUES (429, 424, '南区', 3, 'Nan Qu');
INSERT INTO `jd_area_info` VALUES (430, 424, '深水埗区', 3, 'Shen Shui Bu Qu');
INSERT INTO `jd_area_info` VALUES (431, 424, '黄大仙区', 3, 'Huang Da Xian Qu');
INSERT INTO `jd_area_info` VALUES (432, 424, '湾仔区', 3, 'Wan Zai Qu');
INSERT INTO `jd_area_info` VALUES (433, 424, '油尖旺区', 3, 'You JIan Wang Qu');
INSERT INTO `jd_area_info` VALUES (434, 424, '离岛区', 3, 'Li Dao Qu');
INSERT INTO `jd_area_info` VALUES (435, 424, '葵青区', 3, 'Kui Qing Qu');
INSERT INTO `jd_area_info` VALUES (436, 424, '北区', 3, 'Bei Qu');
INSERT INTO `jd_area_info` VALUES (437, 424, '西贡区', 3, 'Xi Gong Qu');
INSERT INTO `jd_area_info` VALUES (438, 424, '沙田区', 3, 'Sha Tian Qu');
INSERT INTO `jd_area_info` VALUES (439, 424, '屯门区', 3, 'Tun Men Qu');
INSERT INTO `jd_area_info` VALUES (440, 424, '大埔区', 3, 'Da Pu Qu');
INSERT INTO `jd_area_info` VALUES (441, 424, '荃湾区', 3, 'Quan Wan Qu');
INSERT INTO `jd_area_info` VALUES (442, 424, '元朗区', 3, 'Yuan Lang Qu');
INSERT INTO `jd_area_info` VALUES (443, 1, '澳门特别行政区', 2, 'Macao');
INSERT INTO `jd_area_info` VALUES (444, 443, '花地玛堂区', 3, 'Hua Di Ma Tang Qu');
INSERT INTO `jd_area_info` VALUES (445, 443, '花王堂区', 3, 'Hua Wang Tang Qu');
INSERT INTO `jd_area_info` VALUES (446, 443, '望德堂区', 3, 'Wang De Tang Qu');
INSERT INTO `jd_area_info` VALUES (447, 443, '大堂区', 3, 'Da Tang Qu');
INSERT INTO `jd_area_info` VALUES (448, 443, '风顺堂区', 3, 'Feng Shun Tang Qu');
INSERT INTO `jd_area_info` VALUES (449, 443, '嘉模堂区', 3, 'Jia Mo Tang Qu');
INSERT INTO `jd_area_info` VALUES (450, 443, '路氹填海区', 3, 'Lu Dang Tian Hai Qu');
INSERT INTO `jd_area_info` VALUES (451, 443, '圣方济各堂区', 3, 'Sheng Fang Ji Ge Tang Qu');

SET FOREIGN_KEY_CHECKS=1;