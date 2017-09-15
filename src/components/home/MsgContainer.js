import React from 'react';
import { routerRedux } from 'dva/router';
import ImgGrid from '../common/ImgGrid';
import CommentButton from '../common/CommentButton'
import styles from './MsgContainer.less';


function MsgContainer({ id, imgs, imgTop, nickname='匿名', content='', showAction,show, hideAction }) {
  const imgGridProp = {
    imgs
  };
  const commentButtonProp = {
    id,
    show,
    showAction
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
      <CommentButton {...commentButtonProp} />
    </div>
  </div>)
  ;
}

export default MsgContainer;
