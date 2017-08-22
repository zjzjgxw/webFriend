import React from 'react';
import { Button } from 'antd-mobile';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import ImageTopSelect from '../../components/center/ImgTopSelect';
import styles from './center.less';

function center({location,dispatch,center }) {
  const { info, file } = center;

  // function toLogin() {
  //   dispatch(routerRedux.push({
  //       pathname: '/login',
  //     }),
  //   );
  // }
  function changeImage(url){
    console.log(url['url']);
    dispatch({
      type:'center/updateImg',
      payload:{
        imgUrl: url['url']
      }
    })
  }

  return (
    <div>
      <div className={styles.img_top} >
        <div style={{paddingLeft:"38%",paddingTop:"1rem"}}>
          <ImageTopSelect
            file={file}
            onChange={e=>changeImage(e)}
          >
          </ImageTopSelect>
        </div>
      </div>
    </div>
  );
}


function mapStateToProps ({ center }) {
  return { center }
}

export default connect(mapStateToProps)(center);
