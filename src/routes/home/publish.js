import React from 'react';
import { connect } from 'dva';
import { NavBar, Toast } from 'antd-mobile';
import MsgPublish from '../../components/publish/MsgPublish';
import { routerRedux } from 'dva/router';


function publish({location,dispatch,publish }) {
  const { content, imgs, province, city } = publish;

  const msgPublishProp ={
    content,
    imgs,
    province,
    city,
    onUploadImg(imgUrl){
      dispatch({
        type:'publish/uploadImg',
        payload:{
          imgUrl: imgUrl
        }
      })
    },
    onRemoveImg(index){
      dispatch({
        type:'publish/removeImg',
        payload:{
          index
        }
      })
    },
    onDistrictChange(province, city){
      dispatch({
        type:'publish/save',
        payload:{
          province,
          city
        }
      })
    },
    onUpdateContent(val){
      dispatch({
        type:'publish/save',
        payload:{
          content: val
        }
      })
    }
  };

  function onPublish(e) {
    if(content.trim().length === 0){
      Toast.info('请输入文字内容');
      return;
    }
    if(imgs.length === 0){
      Toast.info('请上传至少一张图片');
      return;
    }
    if(province === ''){
      Toast.info('请现在地址');
      return;
    }
    dispatch({
      type:'publish/publish',
      payload:{
        content,
        imgs: imgs.map(function (item) {
          return item.url
        }),
        province,
        city
      }
    })
  }

  function goBack() {
    dispatch(routerRedux.push({
        pathname: '/home',
      }),
    );
  }

  return (
    <div>
      <NavBar key="navBar" mode="light"
              rightContent={[
                <p key="publish" onClick={e=>onPublish(e)}>确认</p>,
              ]}
              iconName={false}
              leftContent="返回"
              onLeftClick={e=>goBack(e)}
      />
      <MsgPublish  { ...msgPublishProp}/>
    </div>
  );
}


function mapStateToProps ({ publish }) {
  return { publish }
}

export default connect(mapStateToProps)(publish);
