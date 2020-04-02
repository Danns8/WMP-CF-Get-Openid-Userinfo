# 微信小程序通过云函数获取openid (Unionid) 并推到后台获取userinfo

## 导入文件

首先需要通过npm安装request-promise库（在云函数目录内操作，无云函数则新建一个云函数）
```
    npm install request-promise
```
将 index.js 和 md5.js 拷贝进云函数目录

至此，文件导入完成

## 文件修改

查看 index.js 内的注释修改代码，md5.js 不需要修改。

如果需要使用GET，请将第20行的 method: 'POST' 修改为 method: 'GET'

第26行的 'content-type': 'application/x-www-form-urlencoded' 修改为 'Content-Type': 'application/json'

## 同步云函数

开发者工具内 右键点击云函数 选择 上传并部署：云端安装依赖 即可完成云函数同步。

## 云函数使用
在 app.js 内 onLunch 内加入如下代码

```
wx.cloud.init({
  env: '云函数环境名',
  traceUser: true,
})
```

在需要调用云函数的地方使用如下代码

```
 wx.cloud.callFunction({
    name: '云函数名称',
    data: {},
    success: res => {
       成功操作
     },
     fail: err => {
        失败操作
      }
  })
 ```
 
# 后记

关于函数 Cloud.getWXContext() 获取 Openid 和 Unionid 的微信官方文档

<https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/utils/Cloud.getWXContext.html>