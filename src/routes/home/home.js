import React from 'react';
import { connect } from 'dva';
import { NavBar } from 'antd-mobile';
import { routerRedux } from 'dva/router';
import MsgContainer from '../../components/home/MsgContainer'


function home({location,dispatch,home }) {
  const { curShow } = home

  function publish() {
    dispatch({
      type: 'home/checkLogin',
      payload: location.query,
    });
  }
  const imgs = ['http://img.7139.com/file/201207/04/299ac0ab2be96c216c6bd5255945cb6c.jpg',
  'http://img06.tooopen.com/images/20161010/tooopen_sy_181352973287.jpg',
  'http://img06.tooopen.com/images/20160921/tooopen_sy_179583447187.jpg',
  'http://img2.3lian.com/2014/f5/158/d/86.jpg',
  'http://img06.tooopen.com/images/20160728/tooopen_sy_173005496826.jpg',
  'http://img.zcool.cn/community/03320dd554c75c700000158fce17209.jpg',
  'http://img06.tooopen.com/images/20160924/tooopen_sy_179893728711.jpg',
  'http://img.sc115.com/uploads/sc/jpgs/0117apic3188_sc115.com.jpg',
  'http://t2.27270.com/uploads/tu/201612/98/st94.png'];

  const msgList =[
    {msgId:1,commentator:'往下',replied:'',msg:'但是繁花似锦方法'},
    {msgId:2,commentator:'水电费就',replied:'十多万',msg:'水电费就开始地方更多水分大煞风景水电费看见多水分是开房记录时代的身份'},
    {msgId:3,commentator:'到付',replied:'的身份',msg:'水电费就收到肌肤感受到了空间圣诞节疯狂了思考水电费快乐十分水电费'},
    {msgId:4,commentator:'heel',replied:'',msg:'水电费就十分艰苦的'},
    {msgId:5,commentator:'sdf',replied:'',msg:'大煞风景弗兰克的身份水电费水电费'},
  ]

  // const msgCongtainerProp = {
  //   imgs: ['http://img.7139.com/file/201207/04/299ac0ab2be96c216c6bd5255945cb6c.jpg']
  // };
  const msgCongtainerProp = {
    id:1,
    imgs,
    imgTop: 'http://img.7139.com/file/201207/04/299ac0ab2be96c216c6bd5255945cb6c.jpg',
    content: '的房间克里斯朵夫将快乐的身份卡勒季斯地方将克里斯朵夫水淀粉加快了速度',
    nickname: 'Vic',
    show: curShow == 1,
    msgList,
    bananaNum:10,
    showAction(id){
      console.log('show'+id);
      dispatch({
        type: 'home/showComment',
        payload: {
          curShow: id
        }
      });
    },
    hideAction(){
      if(curShow !== 0) {
        console.log('hide');
        dispatch({
          type: 'home/showComment',
          payload: {
            curShow: 0
          }
        });
      }
    }
  };
  return (
    <div>
      <NavBar key="navBar" mode="light"
              rightContent={[
                <p key="publish" onClick={e=>publish(e)}>发布</p>,
              ]}
      ></NavBar>
      <div>
        <MsgContainer {...msgCongtainerProp} />
      </div>
    </div>
  );
}


function mapStateToProps ({ home }) {
  return { home }
}

export default connect(mapStateToProps)(home);
