/**
 * Created by web on 2018/3/28.
 */
/**
 * ajax封装
 * url 发送请求的地址
 * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
 * callback 回调函数；
 * type；设置回调类型
 * scope,谁调用的用的
 */
$.ax = function (url, data, dataType, callback, scrop,type) {
    var sign = Tools.makeSign(data);
    if(!data.sign){
        data.sign = sign;
    }
    $.ajax({
        url: url,
        type:type|| "GET",
        data: data,
        dataType: dataType || "jsonp",
        async: true,
        success: function (success) {
            callback.call(scrop, success);
        },
        error: function (e) {
            callback.call(scrop, e);
        },
        beforeSend: function (b) {
        },
        complete: function (c) {
        }
    });
};