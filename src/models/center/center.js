import { routerRedux } from 'dva/router';
import { Toast } from 'antd-mobile';
import { checkLogin, uploadImg } from '../../services/app'

const SUCCESS = 200;
export default {

  namespace: 'center',

  state: {
    info: {},
    file: 'http://pic.qiantucdn.com/58pic/19/33/22/80458PIC6fy_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center',
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/center') {
          dispatch({
            type: 'checkLogin',
            payload: location.query,
          });
          dispatch({
            type: 'app/save',
            payload: {
              selected: [false, true],
              ishidden: false,
            }
          })
        }
      });
    },
  },

  effects: {
    *checkLogin({ payload }, { call, put }) {
      const res = yield call(checkLogin, payload);
      if (res.code !== SUCCESS) {
        yield put(routerRedux.push({
          pathname: '/login',
        }));
      } else{
        yield put({
          type: 'save',
          payload: {
            info: res.data[0]
          }
        })
      }
    },
    //更新头像
    *updateImg({ payload }, { call, put }) {
      const res = yield call(uploadImg, payload);
      if (res.code === SUCCESS) {
        yield put({
          type: 'save',
          payload: {
            file: payload.imgUrl
          }
        })
      } else{
        Toast.info(res.msg);
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
