import { routerRedux } from 'dva/router';
import { Toast } from 'antd-mobile';

const SUCCESS = 200;
export default {

  namespace: 'center',

  state: {
    list: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/center') {
          dispatch({
            type: 'query',
            payload: location.query,
          });
          dispatch({
            type: 'app/save',
            payload: {
              selected: [false, true]
            }
          })
        }
      });
    },
  },

  effects: {
    *query({ payload }, { call, put }) {
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
