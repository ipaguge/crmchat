<h1 align="center">CRM Chat</h1> 

## 项目简介

  本系统(CRMChat)是采用Swoole4+Tp6+Redis+Vue+Mysql开发的独立高性能客服系统，客服系统用户端支持Pc端、移动端、小程序、文章中接入客服，利用超链接、网页内嵌、二维码、定制对接等方式让网上所有通道都可以快速通过本系统联系到商家，商家端支持Pc端、移动端（App）随时随地接收到用户的各种咨询，商家可以添加话术库、也可以对用户进行分组、加标签、加备注进行管理，是一款互联网链接商家的一个桥梁，也是商家客户管理的工具，本开源项目遵循最开放的木兰协议，可以随意使用。商家端APP也不用您自己辛苦上架了，我们提供App工具可以直接下载配置使用， **让您快速拥有一套强大的私有客服系统** 。在使用过程中遇到问题随时留言，也欢迎各位大神参与本项目一起完善！！！
> 如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！

### 演示信息 从2022年5月16日开始演示站点将不在提供聊天演示，请自行搭建！
#### 用户端访问<a target="_blank" href='http://chat.crmeb.net/demo/index.html'>【点击体验】</a>
#### PC客服端访问 <a target="_blank" href="http://chat.crmeb.net/kefu/pc_list">【点击体验】</a>账号密码：kefu kefu123
#### 管理后台演示 <a target="_blank" href="http://chat.crmeb.net/admin">【点击体验】</a>账号密码：demo demo
#### 客服端app：安卓app下载,目前APP Store,小米,华为,oppo，vivo应用商店搜索"CRMchat"都可下载
![输入图片说明](https://images.gitee.com/uploads/images/2021/0918/160600_24741898_1491977.png "屏幕截图.png")

![输入图片说明](readme/images/2/2_01.jpg)
![输入图片说明](readme/images/2/2_02.jpg)
![输入图片说明](readme/images/2/2_03.jpg)
![输入图片说明](readme/images/2/2_04.jpg)
![输入图片说明](readme/images/2/2_05.jpg)
![输入图片说明](readme/images/3/3_01.jpg)
![输入图片说明](readme/images/3/3_02.jpg)
![输入图片说明](readme/images/3/3_03.jpg)
![输入图片说明](readme/images/3/3_04.jpg)
![输入图片说明](readme/images/3/3_05.jpg)
![输入图片说明](readme/images/3/3_06.jpg)

### APP功能展示图

![输入图片说明](readme/images/1/1.1_01.jpg)
![输入图片说明](readme/images/1/1.1_02.jpg)
![输入图片说明](readme/images/1/1.1_03.jpg)
![输入图片说明](readme/images/1/1.1_04.jpg)
![输入图片说明](readme/images/1/1.1_05.jpg)

### 安装文档

#### Dokcer安装  文档     
          cd CRMChat/crmchat/docker 
          docker-compose build php
          docker-compose up -d
########  Dokcer安装访问地址
后台访问地址：http://ip:20108/admin  账号密码 admin 123456
客服后台访问地址：http://ip:20108/kefu



#### 手动安装 文档     
######## PHP扩展安装文档 <a target="_blank" href='https://gitee.com/ZhongBangKeJi/CRMChat/wikis/pages/preview?sort_id=4266819&doc_id=1539498'>点击查看</a>
######## 站点配置文档  <a target="_blank" href='https://gitee.com/ZhongBangKeJi/CRMChat/wikis/pages/preview?sort_id=4266852&doc_id=1539498'>点击查看</a>
######## 运行服务文档  <a target="_blank" href='https://gitee.com/ZhongBangKeJi/CRMChat/wikis/pages/preview?sort_id=4266898&doc_id=1539498'>点击查看</a>
######## 程序安装文档  <a target="_blank" href='https://gitee.com/ZhongBangKeJi/CRMChat/wikis/pages/preview?sort_id=4266934&doc_id=1539498'>点击查看</a>
######## 命令行一键安装文档 <a target="_blank" href='https://gitee.com/ZhongBangKeJi/CRMChat/wikis/pages/preview?sort_id=4267030&doc_id=1539498'>点击查看</a>
####### 访问地址
后台访问地址：http://域名/admin 
客服后台访问地址：http://域名/kefu


### 命令文档
#### swoole命令文档 <a target="_blank" href='https://gitee.com/ZhongBangKeJi/CRMChat/wikis/pages/preview?sort_id=4267027&doc_id=1539498'>点击查看</a>
#### 应用KEY命令文档 <a target="_blank" href='https://gitee.com/ZhongBangKeJi/CRMChat/wikis/pages/preview?sort_id=4267028&doc_id=1539498'>点击查看</a>
#### 命令行安装文档 <a target="_blank" href='https://gitee.com/ZhongBangKeJi/CRMChat/wikis/pages/preview?sort_id=4267030&doc_id=1539498'>点击查看</a>

### 历史版本

**v1.2.0版本** 
1. 优化消息发送改为接口发送，socket辅助；
2. 优化网络检测改为网路请求检测；
3. 修复欢迎语发送问题
4. 修复小程序端返回多次问题
5. 修复超链接的形式嵌入客服关闭后收不到消息问题
6. 修复安装SQL兼容MYSQL8.0
7. 修复APP自动升级BUG问题
8. 修复后台查看聊天记录翻页BUG问题
9. 修复安装TOKEN不勾选演示数据更新问题

 **v1.1.0版本** 
1. 新增用户标签、分组增加排序功能
2. 客服图标增加自定义上传
3. 后台增加客服聊天记录
4. 后台增加客服所及二维码和复制客服连接
5. 增加用户端站点统计
6. 客服APP增加聊天用户删除
7. 客服APP增加在线升级
8. 客服APP增加客户列表筛选

 **v1.0.0版本** 
1. 客服聊天功能
2. 客服自动回复功能增加
3. 客服欢迎语功能增加
4. 客服用户管理增加
5. 客服使用文档增加

### 开发规范
#### 命名规范
ThinkPHP6.0遵循PSR-2命名规范和PSR-4自动加载规范，并且注意如下规范:

1. 目录和文件
2. 目录使用小写+下划线；
3. 类库、函数文件统一以.php为后缀；
4. 类的文件名均以命名空间定义，并且命名空间的路径和类库文件所在路径一致；
5. 类（包含接口和Trait）文件采用驼峰法命名（首字母大写），其它文件采用小写+下划线命名；
6. 类名（包括接口和Trait）和文件名保持一致，统一采用驼峰法命名（首字母大写）；

#### 函数和类、属性命名

1. 类的命名采用驼峰法（首字母大写），例如 User、UserType；
2. common函数的命名使用小写字母和下划线（小写字母开头）的方式，例如 get_client_ip；
3. 控制器里面的方法使用小写字母和下划线（小写字母开头）的方式，例如 get_client_ip
4. 方法的命名使用驼峰法（首字母小写），例如 getUserName；
5. 属性的命名使用驼峰法（首字母小写），例如 tableName、instance；
6. 特例：以双下划线__打头的函数或方法作为魔术方法，例如 __call 和 __autoload；

#### 常量和配置
1. 常量以大写字母和下划线命名，例如 APP_PATH；
2. 配置参数以小写字母和下划线命名，例如 url_route_on 和url_convert；
3. 环境变量定义使用大写字母和下划线命名，例如APP_DEBUG；

#### 数据表和字段
1. 数据表和字段采用小写加下划线方式命名，并注意字段名不要以下划线开头，例如 think_user 表和 user_name字段，不建议使用驼峰和中文作为数据表及字段命名

注意：请理解并尽量遵循以上命名规范，可以减少在开发过程中出现不必要的错误

#### 语法规范
1. 尽量使用php7新语法
2. 每个 namespace 命名空间声明语句和 use 声明语句块后面，必须 插入一个空白行
3. 类的开始花括号（{） 必须 写在类声明后自成一行，结束花括号（}）也 必须 写在类主体后自成一行
4. 方法的开始花括号（{） 必须 写在函数声明后自成一行，结束花括号（}）也 必须 写在函数主体后自成一行。
5. 类的属性和方法 必须 添加访问修饰符（private、protected 以及 public），abstract 以及 final 必须 声明在访问修饰符之前，而 static 必须 声明在访问修饰符之后
6. 控制结构的关键字后 必须 要有一个空格符，而调用方法或函数时则 一定不可 有
7. 控制结构的开始花括号（{） 必须 写在声明的同一行，而结束花括号（}） 必须 写在主体后自成一行
8. 纯 PHP 代码文件 必须 省略最后的 ?> 结束标签
9. 所有方法，类，控制器类，都 必须 添加访问修饰符
    ~~~
    
    /**
     * 中文注释
     * @param string $str 声明类型
     * @param array $arr
     * @return bool
     */
    public function action(string $str, array $arr)
    {
         return true;
    }
    ~~~
10. 参数列表中，每个逗号后面 必须 要有一个空格，而逗号前面 一定不可 有空格
    ~~~
     function foo($arg1, &$arg2, $arg3 = [])
     {
            // method body
     }
    ~~~
11. 参数 可以 分列成多行，此时包括第一个参数在内的每个参数都 尽量 单独成行。
    ~~~
    <?php
    $foo->bar(
        $longArgument,
        $longerArgument,
        $muchLongerArgument
    );
    ~~~
12. 标准的 if 结构如下代码所示，请留意「括号」、「空格」以及「花括号」的位置，
    注意 else 和 elseif 都与前面的结束花括号在同一行
    ~~~
    <?php
    if ($expr1) {
        // if body
    } elseif ($expr2) {
        // elseif body
    } else {
        // else body;
    }
    ~~~
13. 赋值等号前后必须加空格符
    ~~~
    <?php
    $arr = [];
    ~~~

    
#### PHP 7.1+ 常用新语法

1. 三元运算符
   ~~~
   <?php
   
   $arr = ['crmeb'=>true];
   之前
   echo isset($arr['crmeb']) ? $arr['crmeb'] : '';
   之后
   echo $arr['crmeb'] ?? '';
   ~~~
2.  define() 定义常量数组
   ~~~
   <?php
    define('ARR',['a','b']);
   ~~~
3.  命名空间优化
   ~~~
    <?php
    //PHP7之前语法
    use FooLibrary\Bar\Baz\ClassA; 
    use FooLibrary\Bar\Baz\ClassB; 
    // PHP7新语法写法 
    use FooLibrary\Bar\Baz\{ ClassA, ClassB};
    
   ~~~
#### 开发规范
 1. 所有数据验证放在模块下的 validates 目录下
 2. JSON返回使用父级 AuthController类中的success 和 fail
 3. 错误判断抛出异常，由一个错误类统一控制输出
    ~~~
    <?php
    
        throw new AuthException('错误信息',400);
    ~~~
 4. 错误码和错误提示语应该统一管理，方便切换多语言
 5. 数据库操作使用模型类，不能使用Db::table()
 6. 获取表单数据使用 app\Request
    ~~~
    <?php
    use app\Request;
    
    
    public function index(Request $request) {
    
        //获取提交的数据，并以二维数组形式返回
        $arr = $request->getMore([
            'name',
            'nickname'
        ]);
        //获取提交的数据，并以二维数组形式返回并附加默认值
        $arr = $request->getMore([
           ['name','123'],
           ['nickname','0']
        ]);
        //获取提交的数据,并以一维数组形式返回并附加默认值
        [$name, $nickname] = $request->getMore([
           ['name','123'],
           ['nickname','0']
        ],true);
    
    }
    ~~~
 7. 所有控制器类命令和表名对应，按照大驼峰命名规范
 8. 所有文件夹命名按照小写字母加下划线定义
 9. 所有属性名，变量名尽量遵守小驼峰命名规范 
 10. 复杂逻辑，多状态应适当添加行内注释
 11. 模型里只能写关于搜索条件语句,查出数据得组合书写在services层进行处理,services创建命令:php make:services api@user/User
 
## 主要特性

有详细的代码注释，有完整系统手册
#### TP6框架
使用最新的 ThinkPHP 6.0 + Swoole4框架开发
#### 前端采用Vue CLI框架
前端使用Vue CLI框架nodejs打包，页面加载更流畅，用户体验更好
#### 标准接口
标准接口、前后端分离，二次开发更方便
#### 支持队列
降低流量高峰，解除耦合，高可用
#### 长连接
减少CPU及内存使用及网络堵塞，减少请求响应时长
#### 无缝事件机制
行为扩展更方便，方便二次开发
#### 后台快速生成表单
后台应用form-builder 无需写页面快速增删改查
#### 强大的后台权限管理
后台多种角色、多重身份权限管理，权限可以控制到每一步操作
#### 一键安装
自动检查系统环境一键安装

> 基于 TP6+Swoole4 开发 
  运行环境要求PHP7.1 ~ 7.4。不支持windows环境运行

### 开源交流群（群人数已达200+，请添加个人企业微信，邀请进群，进群请备注：CRMCHAT）

加群请写备注 **CRMCHAT** 

![输入图片说明](268ec39b676dd22404422fe39a2e82f.jpg)

本项目包含的第三方源码和二进制文件之版权信息另行标注。

版权所有Copyright © 2017-2020 by [CRMEB](http://www.crmeb.com)

All rights reserved。

CRMEB® 商标和著作权所有者为西安众邦网络科技有限公司。
