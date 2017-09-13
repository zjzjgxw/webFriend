import React from 'react';
import { connect } from 'dva';
import { NavBar } from 'antd-mobile';
import { routerRedux } from 'dva/router';
import MsgContainer from '../../components/home/MsgContainer'


function home({location,dispatch,home }) {
  function publish() {
    dispatch(routerRedux.push({
        pathname: '/publish',
      }),
    );
  }

  const imgs = ['http://img.7139.com/file/201207/04/299ac0ab2be96c216c6bd5255945cb6c.jpg',
  'http://img06.tooopen.com/images/20161010/tooopen_sy_181352973287.jpg',
  'http://img06.tooopen.com/images/20160921/tooopen_sy_179583447187.jpg',
  'http://img2.3lian.com/2014/f5/158/d/86.jpg',
  'http://img06.tooopen.com/images/20160728/tooopen_sy_173005496826.jpg',
  'http://img.zcool.cn/community/03320dd554c75c700000158fce17209.jpg',
  'http://img06.tooopen.com/images/20160924/tooopen_sy_179893728711.jpg',
  'http://img.sc115.com/uploads/sc/jpgs/0117apic3188_sc115.com.jpg',
  'http://t2.27270.com/uploads/tu/201612/98/st94.png']

  // const msgCongtainerProp = {
  //   imgs: ['http://img.7139.com/file/201207/04/299ac0ab2be96c216c6bd5255945cb6c.jpg']
  // };
  const msgCongtainerProp = {
    imgs,
    imgTop: 'http://img.7139.com/file/201207/04/299ac0ab2be96c216c6bd5255945cb6c.jpg',
    content: '的房间克里斯朵夫将快乐的身份卡勒季斯地方将克里斯朵夫水淀粉加快了速度',
    nickname: 'Vic',
  };
  return (
    <div>
      <NavBar key="navBar" mode="light"
              rightContent={[
                <p key="publish" onClick={e=>publish(e)}>发布</p>,
              ]}
      ></NavBar>
      <MsgContainer {...msgCongtainerProp} />
    </div>
  );
}


function mapStateToProps ({ home }) {
  return { home }
}

export default connect(mapStateToProps)(home);
