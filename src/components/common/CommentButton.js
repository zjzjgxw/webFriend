import React from 'react';
import styles from './CommentButton.less'

function CommentButton({ id, show=false, showAction }) {
  function handleShow(id) {
    showAction(id);
  }
  const display = show ? '' : 'none';
  return (<div className={styles.container}>
    <div className={styles.actionSection} style={{display: display}}>
      <div className={styles.leftDiv} >
        <img className={styles.innerIcon} src={require('../../assets/images/banana.png')} />
        <p>赏香蕉</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.rightDiv} >
        <img className={styles.innerIcon} src={require('../../assets/images/commentTwo.png')} />
        <p>评论</p>
      </div>
    </div>
    <img className={styles.bt} src={require('../../assets/images/comment.png')}  onClick={e => handleShow(id)} />
  </div>)
  ;
}

export default CommentButton;
