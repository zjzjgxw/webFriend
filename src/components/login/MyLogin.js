import React from 'react';
import { InputItem, Button } from 'antd-mobile';
import { routerRedux } from 'dva/router';
import styles from './MyLogin.less';


function MyLogin({ onLogin, onPhoneBlur, onPasswordBlur }) {
  return (<div className={styles.container}>
    <div className={styles.titleContainer}>
      <p>欢迎加入！</p>
    </div>
    <div className={styles.inputContainer}>
      <InputItem
        type="phone"
        placeholder="请输入手机号"
        className = {styles.phoneInput}
        onBlur={e =>onPhoneBlur(e)}
      ><img className={styles.phoneIcon} src={require('../../assets/images/mobilephone.png')} /></InputItem>
    </div>
    <div className={styles.inputContainer}>
      <InputItem
        type="password"
        placeholder="请输入密码"
        className = {styles.phoneInput}
        onBlur={e =>onPasswordBlur(e)}
      ><img className={styles.phoneIcon} src={require('../../assets/images/lock.png')} /></InputItem>
    </div>
    <Button className={styles.btn} activeClassName={styles.btnActive} onClick={e => onLogin(e)} >登录</Button>
    <div className={styles.registContainer}>
      <p>还没账号？点我注册</p>
    </div>

  </div>)
  ;
}

export default MyLogin;
