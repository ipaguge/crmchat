
ALTER TABLE `eb_chat_service` ADD `is_login` TINYINT(1) NOT NULL DEFAULT '0' COMMENT '是否登陆' AFTER `client_id`;

ALTER TABLE `eb_chat_user` ADD `remark_nickname` VARCHAR(100) NOT NULL DEFAULT '' COMMENT '备注昵称' AFTER `nickname`;