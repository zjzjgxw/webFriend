/**
 * Created by gxw on 2017/4/16.
 */


export function formatTime(time, toDate = false) {
  const date = new Date(parseInt(time) * 1000);
  const Y = date.getFullYear() + '-';
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  const D = date.getDate() + ' ';
  const h = date.getHours() + ':';
  const m = date.getMinutes() + ':';
  const s = date.getSeconds();
  if (toDate) {
    return Y + M + D;
  }
  return Y + M + D + h + m + s;
}

export function generateGetCodeUrl(config) {
  const url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='
    + config.appID + '&redirect_uri=' + encodeURIComponent(config.redirect_uri)
    + '&response_type=code&scope=snsapi_userinfo&state=' + config.state + '#wechat_redirect';
  return url;
}

export function wxPay(payInfo) {
    WeixinJSBridge.invoke(
      'getBrandWCPayRequest', {
        "appId":payInfo['appId'],     //公众号名称，由商户传入
        "timeStamp":payInfo['timeStamp'],         //时间戳，自1970年以来的秒数
        "nonceStr":payInfo['nonceStr'], //随机串
        "package":payInfo['package'],
        "signType":payInfo['signType'],         //微信签名方式：
        "paySign":payInfo['paySign'] //微信签名
      },
      function(res){
        if(res.err_msg == "get_brand_wcpay_request:ok" ) {
          var event = new Event('paySuccess');
          window.document.dispatchEvent(event);
        }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
      }
    );
}

function initShare() {
  let share = JSON.parse(window.localStorage.getItem("shareData"));
  let event = new CustomEvent('initShare',{detail:{shareData:share}});
  window.document.dispatchEvent(event);
}

export function wxConfig(sign,shareData) {
  window.wx.config({
    debug:false,
    appId: sign['appId'],
    timestamp: sign['timestamp'] ,
    nonceStr: sign['nonceStr'],
    signature: sign['signature'] ,
    jsApiList: [
      // 所有要调用的 API 都要加到这个列表中
      'checkJsApi',
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
    ]
  });
  wx.error(function(res){
  });
  window.localStorage.setItem("shareData",JSON.stringify(shareData));


  setTimeout(initShare,2000);
}

export function initWxSign(location,dispatch) {
    const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
    if(!isIPhone){
      window.localStorage.setItem('wx_jssdk_url',location.pathname+location.search.split('#')[0]);
    }

    dispatch({
      type: 'app/weChatSign',
      payload: {
        id:location.query.store_id,
        url:window.localStorage.getItem('wx_jssdk_url'),
        pathname:location.pathname,
        query:location.query,
      }
    });
}
