## 基于Vue实现开箱即用移动端商城的单页应用

* 这是开箱即用移动端商城的框架。只需要后端返回标准接口数据，前端配置接口地址等信息，标准商城的页面不需要做任何调整。 
* corodva打包工具    
* web 打包可以完全脱离corodva脚手架    

## 特性
- 开箱即用，集成后台接口格式，前端可做二次开发以实现自有业务
- 首页是由图片广告、图文导航、商品、公告、搜索、文本、标题、辅助空白、辅助线、方格等组件根据后端接口数据动态渲染，可根据后端返回的数据渲染出N种首页效果
- 定制主题

## 手机预览

可以手机扫码以下二维码访问手机端 demo：   

![](./docs/static/qrcode.png)

![](./docs/static/show1.jpg)

![](./docs/static/show2.jpg)

![](./docs/static/show3.jpg)
y9214759146@gmail.com   itisapawwword1

## 技术栈

- vue
- [vue cli 3](https://cli.vuejs.org/zh/guide/installation.html)
- [vant](https://github.com/youzan/vant)
- less
- [vue-router](https://router.vuejs.org/zh/installation.html)
- [axios](https://github.com/axios/axios)
- [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)



## 快速上手

```
# 安装 Vue Cli 3
npm install -g @vue/cli

npm install

npm run dev

npm run build
```

调整src/config/env.js的配置信息
```
baseUrl: 域名地址
dataSources：数据源(local=本地)
```
## 进度
- [x] 界面样式
- [ ] 数据通过接口绑定
- [ ] 定制主题
- [ ] 代码重构优化

## 页面
```
- 首页
- 分类
- 商品
    - 详情
    - 列表
- 购物车
- 提交订单
- 会员
    - 会员中心
    - 账户管理
    - 订单
        - 列表
        - 详情
        - 追踪
    - 售后
        - 申请
        - 列表
        - 详情
        - 进度详情
    - 我的优惠券
    - 我的收藏
    - 收货地址
        - 列表
        - 编辑
- 手机登录
- 手机注册


```



## 关于原生 android
### 状态栏
* 方案一，状态栏占位,切换路由时候修改状态栏颜色(要求设计顶部只能有纯颜色)
* 方案二，使用第三方插件，状态栏不占位，同时原生底部导航不占位

### 坑点
* 安卓 启动图，虚拟导航依旧还在
* 安卓 刘海，没法实现顶上去 (可以参考这个,但是效果不如人意)[https://blog.csdn.net/qq_20663175/article/details/96427788]
* 最后使用(mmersionBar)[https://github.com/gyf-dev/ImmersionBar] 原生的方式实现 应用沉浸式 （建议开启androidX，会报错找不到FragmentActivity类）
* ![avatar](./doc/android/android沉浸式1.png)
* ![avatar](./doc/android/android沉浸式2.png)
* (androidX迁移)[https://www.jianshu.com/p/7dc111353328]