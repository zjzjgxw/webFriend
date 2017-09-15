import { routerRedux } from 'dva/router';
import { Toast } from 'antd-mobile';
import { information } from '../../services/app'

const SUCCESS = 200;
export default {

  namespace: 'home',

  state: {
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
