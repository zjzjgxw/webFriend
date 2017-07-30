import { routerRedux } from 'dva/router';
import { Toast } from 'antd-mobile';
import { login } from '../../services/app'


const SUCCESS = 200;
export default {

  namespace: 'login',

  state: {
    mobile:'',
    password:'',
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/login') {
          dispatch({
            type: 'app/save',
            payload: {
              selected: [false, true],
              ishidden: true,
            }
          })
        }
      });
    },
  },

  effects: {
    *login({ payload }, { call, put }) {
      const res = yield call(login, payload);
      console.log(res);
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
