import React from 'react';
import styles from './Message.less'

function Message({ msgId, commentator='', replied='', msg=''}) {
  let commenter = (<label className={styles.commentLable}>{commentator}</label>);
  if(replied !== ''){
    commenter = (<label className={styles.commentLable}>{commentator}<span>回复</span>{replied}</label>)
  }

  return (<div className={styles.message}>
    {commenter}
    <label>：{msg}</label>
  </div>)
  ;
}

export default Message;
