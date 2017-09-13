import React from 'react';
import { routerRedux } from 'dva/router';
import { Grid } from 'antd-mobile';
import styles from './ImgGrid.less';

function ImgGrid({ imgs }) {
  if(imgs.length == 0){
    return (<div></div>)
  }
  if(imgs.length == 1){
    return (<div className={styles.container}>
      <img className={styles.singleImg}  src={imgs[0]} />
    </div>)
  }

  const data = imgs.map((img) => ({
    icon: img,
    text: ``,
  }));

  return (<div className={styles.container}>
    <Grid data={data} hasLine={false}
          columnNum={3}
          renderItem={dataItem => (
            <div >
              <img className={styles.imgGridItem} src={dataItem.icon} alt="icon" align="middle" />
            </div>
          )}/>
  </div>)
  ;
}

export default ImgGrid;
