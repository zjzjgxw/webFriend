import dva from 'dva';
import './index.css';
import { browserHistory } from 'dva/router'

// 1. Initialize
const app = dva({
    history: browserHistory,
    // onAction: createLogger(),
    onError (error) {
        console.error('app onError -- ', error)
    }
});

app.model(require("./models/app"));

window.localStorage.setItem('wx_jssdk_url',window.location.pathname+window.location.search.split('#')[0]);

window.document.addEventListener('initShare',function (e) {
  const shareData = e.detail.shareData;

  window.wx.onMenuShareTimeline({
    title: shareData['title'], // 分享标题
    link: shareData['link'], // 分享链接
    imgUrl: shareData['imgUrl'], // 分享图标
    success: function () {
      // 用户确认分享后执行的回调函数
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
    }
  });

  window.wx.onMenuShareAppMessage({
    title: shareData['title'], // 分享标题
    desc: shareData['desc'], // 分享描述
    link: shareData['link'], // 分享链接
    imgUrl: shareData['imgUrl'], // 分享图标
    success: function () {
      // 用户确认分享后执行的回调函数
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
    }
  });
},false);
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
