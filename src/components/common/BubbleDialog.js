import React from 'react';
import Message from './Message';
import styles from './BubbleDialog.less'

function BubbleDialog({ msgList, bananaNum}) {
  const children = [];
  msgList.forEach((item,index)=>{
    const messageProp = {
      msgId: item.msgId,
      commentator: item.commentator,
      replied: item.replied,
      msg: item.msg,
      key: index,
    }
    children.push(<Message {...messageProp}/>)
  });

  return (<div className={styles.bubble}>
    <div className={styles.bananaBar}>
      <img className={styles.innerIcon} src={require('../../assets/images/bababaTwo.png')} />
      <label>{bananaNum}</label>
    </div>
    <div className={styles.messageSection}>
      {children}
    </div>
  </div>)
  ;
}

export default BubbleDialog;
