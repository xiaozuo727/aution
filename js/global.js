// var hostUrl="http://47.104.240.34:8088/";
// var hostUrl="http://hongbao.webziti.com/";
// var hostUrl="http://game1gao.weiquer.com/";
var hostUrl="http://91pai.webziti.com/";
var hostUrl1="http://91mana.webziti.com/";

/*
* type              请求的方式  默认为get
* url               发送请求的地址
* param             发送请求的参数
* isShowLoader      是否显示loader动画  默认为false
* dataType          返回JSON数据  默认为JSON格式数据
* callBack          请求的回调函数
*/
(function(){
    function AjaxRequest(opts){
        this.type         = opts.type || "get";
        this.url          = opts.url;
        this.param        = opts.param || {};
        this.isShowLoader = opts.isShowLoader || false;
        this.dataType     = opts.dataType || "json";
        this.callBack     = opts.callBack;
        this.error        = opts.error;
        this.init();
    }

    AjaxRequest.prototype = {
        //初始化
        init: function(){
            this.sendRequest();
        },
        //渲染loader
        showLoader: function(){
            if(this.isShowLoader){
                // var loader = '<div class="ajaxLoader none"><img src="img/load.svg" alt="" width="30"></div>';
                // $("body").append(loader);
                $('.ajaxLoader').show();
            }
        },
        //隐藏loader
        hideLoader: function(){
            if(this.isShowLoader){
                $('.ajaxLoader').hide()
            }
        },
        //发送请求
        sendRequest: function(){
            var self = this;
            $.ajax({
                type: this.type,
                url: this.url,
                data: this.param,
                dataType: this.dataType,
                beforeSend: function (request) {
                    request.setRequestHeader("userid", localStorage.userid);
                    request.setRequestHeader("token", localStorage.token);
                    console.log(this.data);
                    self.showLoader()
                },
                success: function(res){
                    self.hideLoader();
                    if (res != null && res != "") {
                        if(res.status==2){
                            /*localStorage.userid='';
                            localStorage.token='';*/
                            console.log(res);
                            // Router('login.html')
                        }
                        if(self.callBack){
                            if (Object.prototype.toString.call(self.callBack) === "[object Function]") {   //Object.prototype.toString.call方法--精确判断对象的类型
                                self.callBack(res);
                            }else{
                                console.log(self.callback+"这也不是个函数!");
                            }
                        }
                    }
                },
                error:function (err) {
                    self.hideLoader();
                    if(self.error){
                        if (Object.prototype.toString.call(self.error) === "[object Function]") {   //Object.prototype.toString.call方法--精确判断对象的类型
                            self.error(err);
                        }else{
                            console.log(self.error+"这不是个函数!");
                        }
                    }
                }
            });
        }
    };

    window.AjaxRequest = AjaxRequest;
})();

//获取get变量
function getQueryString(name){
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

$(document).ready(function () {
    var loader = '<div class="ajaxLoader none"><img src="img/load.svg" alt="" width="30"></div>';
    $("body").append(loader);

});

// alert 1个按钮 2个按钮
function dialog1(con) {
    var alert='<div class="mask"></div> <div class="mask-box bg-white col-7 pad-1 border-radius-5 center"> <p class="pad-b-2">'+con+'</p> <span class="dialog_yes pad-5-2 border-radius-5 bg-blue color-white">确定</span> </div>';
    $("body").append(alert);
}
function dialog2(con) {
    var alert='<div class="mask"></div> <div class="mask-box bg-white col-7 pad-1 border-radius-5 center"> <p class="pad-b-2">'+con+'</p> <span class="dialog_cancel pad-5-2 border-radius-5 bg-gray2 mar-r-2">取消</span><span class="dialog_yes pad-5-2 border-radius-5 bg-blue color-white">确定</span> </div>';
    $("body").append(alert);
}
function dialog_hide(){
    $(".mask").hide();
    $(".mask-box").hide();
}
