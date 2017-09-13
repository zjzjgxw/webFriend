import React from 'react';
import { routerRedux } from 'dva/router';
import { Grid } from 'antd-mobile';
import { SingleImgView } from 'react-imageview';
import styles from './ImgGrid.less';
import 'react-imageview/dist/react-imageview.min.css';

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

  function showPhoto(el, index) {
    SingleImgView.show({
      imagelist:imgs,
      current:index,
      close: () => { SingleImgView.hide() }
    });
  }

  return (<div className={styles.container}>
    <Grid data={data} hasLine={false}
          columnNum={3}
          onClick={(_el, index) => showPhoto(_el, index)}
          renderItem={dataItem => (
            <div >
              <div style={{backgroundImage:`url(${dataItem.icon})`}}  className={styles.imgGridItem} />
            </div>
          )}/>
  </div>)
  ;
}

export default ImgGrid;
