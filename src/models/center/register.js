import { routerRedux } from 'dva/router';
import { Toast } from 'antd-mobile';
import { register } from '../../services/app'

const SUCCESS = 200;
export default {

  namespace: 'register',

  state: {
    mobile:'',
    password:'',
    repassword:'',
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/register') {
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
    *register({ payload }, { call, put }) {
      const res = yield call(register, payload);
      if(res.code === SUCCESS){
        yield put(routerRedux.push({
          pathname: '/login',
        }));
      }else{
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
