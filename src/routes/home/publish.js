import React from 'react';
import { connect } from 'dva';
import { NavBar } from 'antd-mobile';
import MsgPublish from '../../components/publish/MsgPublish';
import { routerRedux } from 'dva/router';


function publish({location,dispatch,publish }) {
  return (
    <div>
      <NavBar key="navBar" mode="light"
              rightContent={[
                <p key="publish" onClick={e=>publish(e)}>确认</p>,
              ]}
              iconName={false}
              leftContent="返回"
              onLeftClick={() => console.log('onLeftClick')}
      />
      <MsgPublish />
    </div>
  );
}


function mapStateToProps ({ publish }) {
  return { publish }
}

export default connect(mapStateToProps)(publish);
