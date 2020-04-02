// 云函数入口文件
const cloud = require('wx-server-sdk');
const rp = require('request-promise');
cloud.init();
// 云函数入口函数
exports.main = async (event, context) => {
  var common = require("md5.js");
  var wxContext = cloud.getWXContext();
  var openid = wxContext.OPENID;
  var timestamp = Date.parse(new Date()) / 1000;
  var salt = 'YOUR_KEY';
  var sza, sz;
  sza = new Array(openid, salt, timestamp);
  sz = sza.join("");
  var md5 = common.hex_md5(sz);
  var options = {
    method: 'POST',
    uri: 'YOUR_URL',
    form: {
      //form data
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
  };

  return await rp(options)
    .then(function (res) {
      //successful 
    })
    .catch(function (err) {
      //error
    });
}