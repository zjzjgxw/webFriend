import { routerRedux } from 'dva/router';
import { Toast } from 'antd-mobile';
import { checkLogin } from '../../services/app'

const SUCCESS = 200;
export default {

  namespace: 'center',

  state: {
    info: {},
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
    }
    ,
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
