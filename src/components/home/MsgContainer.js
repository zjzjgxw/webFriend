import React from 'react';
import ImgGrid from '../common/ImgGrid';
import CommentButton from '../common/CommentButton';
import BubbleDialog from '../common/BubbleDialog';
import styles from './MsgContainer.less';


function MsgContainer({ id, imgs, imgTop, nickname='匿名', content='', showAction,show, hideAction,
                        msgList, bananaNum}) {
  const imgGridProp = {
    imgs
  };
  const commentButtonProp = {
    id,
    show,
    showAction
  };
  const bubbleDialogProp = {
    msgList,
    bananaNum,
  };

  return (<div className={styles.container} onClick={hideAction}>
    <div className={styles.topBar}>
      <div className={styles.leftSection}>
        <img  className={styles.imgTop} src={imgTop} />
      </div>
      <div className={styles.rightSection}>
        <p>{nickname}</p>
        {content.length > 0 ? <p>{content}</p>: <p></p>}
        <ImgGrid {...imgGridProp} />
      </div>
    </div>
    <div className={styles.interactBar}>
      <div className={styles.leftDiv}>
        <p>三小时前</p>
      </div>
      <div className={styles.rightDiv}>
        <CommentButton {...commentButtonProp} />
      </div>
    </div>
    <div className={styles.dialogDiv}>
      <BubbleDialog {...bubbleDialogProp} />
    </div>
  </div>)
  ;
}

export default MsgContainer;
