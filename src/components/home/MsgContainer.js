import React from 'react';
import { routerRedux } from 'dva/router';
import styles from './MsgContainer.less';

function MsgContainer({}) {
  return (<div className={styles.container}>
    <div className={styles.topBar}>
      <div className={styles.leftSection}>
        <img  className={styles.imgTop} src="http://www.fotor.com/images2/features/photo_effects/e_bw.jpg" />
      </div>
      <div className={styles.rightSection}>
        <p>昵称</p>
        <p>为冯绍峰家里舒服的行家里手里发生了看法六级考试都分开了多少放假开始地方 圣诞节快乐过飞机连哭都哭了国际法的空间里度过将快乐时光看来多福多寿将快乐的风格看来姐姐的风格将快乐的风格</p>
      </div>
    </div>
  </div>)
  ;
}

export default MsgContainer;
