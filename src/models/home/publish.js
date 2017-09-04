import { routerRedux } from 'dva/router';
import { Toast } from 'antd-mobile';

const SUCCESS = 200;
export default {

  namespace: 'publish',

  state: {
    content:'',
    list: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {

      });
    },
  },

  effects: {

  },

  reducers: {

  },

};
