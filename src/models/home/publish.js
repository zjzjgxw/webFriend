import { routerRedux } from 'dva/router';
import { Toast } from 'antd-mobile';
import config from '../../utils/config';
import { uploadImg } from '../../services/app';
const SUCCESS = 200;
export default {

  namespace: 'publish',

  state: {
    content:'',
    imgs: [{
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121',
    }, {
      url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
      id: '2122',
    },{
      url: 'http://img.zcool.cn/community/03320dd554c75c700000158fce17209.jpg',
      id: '2122',
    },{
      url: 'http://img06.tooopen.com/images/20160924/tooopen_sy_179893728711.jpg',
      id: '2122',
    },{
      url: 'http://t2.27270.com/uploads/tu/201612/98/st94.png',
      id: '2122',
    }],
    province:'',
    city:''
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        dispatch({
          type: 'app/save',
          payload: {
            selected: [true, false],
            ishidden: true,
          }
        })
      });
    },
  },

  effects: {
    *uploadImg({ payload }, { call, put }) {
      const res = yield call(uploadImg, payload);
      if (res.code === SUCCESS) {
        yield put({
          type: 'uploadSuccess',
          payload: {
            url: config.imgPreUrL + res.data.filePath
          }
        })
      } else{
        Toast.info(res.msg);
      }
    },
  },

  reducers: {
    uploadSuccess(state, action) {
      const { imgs } = state;
      imgs.push(action.payload);
      console.log(imgs);
      return { ...state, imgs };
    },
    removeImg(state, action) {
      const { imgs } = state;
      imgs.splice(action.payload.index,1);
      return { ...state, imgs };
    }
  },

};
