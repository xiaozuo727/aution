var runModel='android';

/**路由函数
 *
 * @param router
 */
function Router(router) {
    console.log(router);
    //alert(router)
    var L = getUrlname(router);
    if(runModel=='h5'){
        window.location.href=router;
    }
    if(runModel='android'){
        //alert(L)
        switch (L){
            case 'auction_detail.html':
                android.godetail(router);
                break;
            case 'chat.html':
                window.android.chat(router);
                break;
            case 'chat_ds.html':
                window.android.chat(router);
                break;
            case 'chat_jl.html':
                window.android.chat(router);
                break;
            case 'baodetail.html':
                //call(router)
                window.android.recive(router);
                break;
            case 'baodetail_2.html':
                window.android.recive(router);
                break;
            case 'mybaojilu.html':
                window.android.listact(router);
                break;
            case 'game_1.html':
                window.location.href=router;
                break;
            case 'login.html':
                window.android.goLogin();
                break;
            default:
                window.location.href=router;
                break;
        }
    }
}
function gologin() {
    window.android.goLogin();
}
function call(msg) {
    if(runModel=='h5'){
        alert(msg)
    }else{
        android.alert(msg)
    }

}
function pay(url) {
    window.android.payweb(url);
}
function jsback() {

    if(runModel!="h5"){
        window.android.jsback();
    }

}
function getUrlname(url){
    url=url.split('?')[0];
    var urlSlashCount=url.split('/').length;
    return url.split('/')[urlSlashCount-1].toLowerCase();
}

function back() {
    //alert('aaa');
    if(runModel=='android'){
        window.android.jsback();
    }else{
        jsback();
    }
}
function Playsu() {
    if(runModel!='h5'){
        window.android.playsu();
    }

}
function Playbao() {
    if(runModel!="h5"){
        window.android.playbao();
    }

}
function Playcoin() {
    if(runModel!="h5"){
        window.android.playcoin();
    }

}

//alert(getUrlname('index.html?id=99&rom=5'));

