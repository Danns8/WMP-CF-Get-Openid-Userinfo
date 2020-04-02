// 云函数入口文件
const cloud = require('wx-server-sdk');
const rp = require('request-promise');
cloud.init();
// 云函数入口函数
exports.main = async (event, context) => {
  //引入MD5文件
  var common = require("md5.js");
  //获取微信openid（符合条件可获取unionid）详情看文档
  var wxContext = cloud.getWXContext();
  var openid = wxContext.OPENID;
  var timestamp = Date.parse(new Date()) / 1000;
  //加密盐
  var salt = 'YOUR_KEY';
  var sza, sz;
  sza = new Array(openid, salt, timestamp);
  sz = sza.join("");
  var md5 = common.hex_md5(sz);
  var options = {
    method: 'POST',
    uri: '请求URL',
    form: {
      //需要POST的数据
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
  };

  return await rp(options)
    .then(function (res) {
      //成功获取后操作
    })
    .catch(function (err) {
      //失败后操作
    });
}