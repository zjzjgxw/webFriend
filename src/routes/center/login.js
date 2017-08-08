import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import Login from '../../components/login/MyLogin';
import styles from './login.less';

function login({location,dispatch,login }) {
  const height = document.body.clientHeight + 'px';
  const { mobile, password } = login;
  const loginProp = {
    onLogin(){
      dispatch({
        type: 'login/login',
        payload: {
          mobile: mobile,
          password: password,
        }
      });
    },
    onPhoneBlur(value){
      dispatch({
        type: 'login/save',
        payload: {
          mobile: value
        }
      });
    },
    onPasswordBlur(value){
      dispatch({
        type: 'login/save',
        payload: {
          password: value
        }
      });
    },
    onRegister(e){
      dispatch(routerRedux.push({
          pathname: '/register',
        }),
      );
    }
  };
  return (
    <div className={styles.login_back} style={{ height: height}} >
      <Login {...loginProp} />
    </div>
  );
}


function mapStateToProps ({ login }) {
  return { login }
}

export default connect(mapStateToProps)(login);
