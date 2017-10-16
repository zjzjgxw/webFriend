import { routerRedux } from 'dva/router';
import { Toast } from 'antd-mobile';
import config from '../../utils/config';
import { uploadImg, publishInformation } from '../../services/app';
const SUCCESS = 200;
export default {

  namespace: 'publish',

  state: {
    content:'',
    imgs: [],
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
            url: res.data.filePath
          }
        })
      } else{
        Toast.info(res.msg);
      }
    },
    *publish({ payload }, { call, put }) {
      const res = yield call(publishInformation, payload);
      if (res.code === SUCCESS) {
        Toast.info('发布成功');
        yield  put(routerRedux.push({
          pathname: '/home',
        }))
      } else{
        Toast.info(res.msg);
      }
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    uploadSuccess(state, action) {
      const { imgs } = state;
      imgs.push(action.payload);
      return { ...state, imgs };
    },
    removeImg(state, action) {
      const { imgs } = state;
      imgs.splice(action.payload.index,1);
      return { ...state, imgs };
    }
  },

};
