import React from 'react';
import { connect } from 'dva';
import { Toast } from 'antd-mobile';
import { routerRedux } from 'dva/router';
import Register from '../../components/login/MyRegister';
import styles from './login.less';
import { checkMobile } from '../../utils/func';


function register({location,dispatch,register }) {
  const height = document.body.clientHeight + 'px';
  const { mobile, password, repassword } = register;
  const registerProp = {
    onPhoneBlur(value){
      dispatch({
        type: 'register/save',
        payload: {
          mobile: value
        }
      });
    },
    onPasswordBlur(value){
      dispatch({
        type: 'register/save',
        payload: {
          password: value
        }
      });
    },
    onRePasswordBlur(value){
      dispatch({
        type: 'register/save',
        payload: {
          repassword: value
        }
      });
    },
    onRegister(e){
      if( !checkMobile(mobile)){
        Toast.info('手机号错误');
        return;
      }
      if(password.length < 6){
        Toast.info('密码需大于6个字符');
        return;
      }
      if( password !== repassword){
        Toast.info('两次密码不一致');
        return;
      }
      dispatch({
        type: 'register/register',
        payload: {
          mobile,
          password
        }
      })
    }
  };
  return (
    <div className={styles.login_back} style={{ height: height}} >
      <Register {...registerProp} />
    </div>
  );
}


function mapStateToProps ({ register }) {
  return { register }
}

export default connect(mapStateToProps)(register);
