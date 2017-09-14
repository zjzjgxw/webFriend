import React from 'react';
import { routerRedux } from 'dva/router';
import { Grid } from 'antd-mobile';
import styles from './CommentButton.less'

function CommentButton({ }) {
  return (<div className={styles.container}>
    <div className={styles.actionSection}>
      <div className={styles.leftDiv}>
        <img className={styles.innerIcon} src={require('../../assets/images/banana.png')} />
        <p>赏香蕉</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.rightDiv} >
        <img className={styles.innerIcon} src={require('../../assets/images/commentTwo.png')} />
        <p>评论</p>
      </div>
    </div>
    <img className={styles.bt} src={require('../../assets/images/comment.png')} />
  </div>)
  ;
}

export default CommentButton;