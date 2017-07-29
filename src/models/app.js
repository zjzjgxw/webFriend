import { routerRedux } from 'dva/router';
import { Toast } from 'antd-mobile';

const SUCCESS = 200;

export default {

  namespace: 'app',
  state: {
    info: {},
    selected: [true, false],
    ishidden: '',
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {

      });
    },
  },

  effects: {
    *info({ payload }, { call, put }) {
      const res = yield call(info, parse(payload));

    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  },

};
