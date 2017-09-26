import { routerRedux } from 'dva/router';
import { Toast } from 'antd-mobile';
import { information, checkLogin } from '../../services/app'

const SUCCESS = 200;
export default {

  namespace: 'home',

  state: {
    userInfo:{},
    list: [],
    curShow: 0,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/home' || location.pathname === '/') {
          dispatch({
            type: 'query',
            payload: location.query,
          })
          dispatch({
            type: 'app/save',
            payload: {
              selected: [true, false],
              ishidden: false,
            }
          })
        }
      });
    },
  },

  effects: {
    *query({ payload }, { call, put }) {
      const res = yield call(information, payload);
      console.log(res);
    },
    *checkLogin({ payload }, { call, put }) {
      const res = yield call(checkLogin, payload);
      if (res.code !== SUCCESS) {
        window.localStorage.setItem('prePath','/publish');
        yield put(routerRedux.push({
          pathname: '/login',
        }));
      } else{
        yield put({
          type: 'save',
          payload: {
            userInfo: res.data[0]
          }
        });
        yield put(routerRedux.push({
            pathname: '/publish',
          }),
        );
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    showComment(state, action) {
      return { ...state, ...action.payload }
    }
  },

};
