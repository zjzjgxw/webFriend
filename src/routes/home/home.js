import React from 'react';
import { connect } from 'dva';
import { NavBar } from 'antd-mobile';
import { routerRedux } from 'dva/router';


function home({location,dispatch,home }) {
  function publish() {
    dispatch(routerRedux.push({
        pathname: '/publish',
      }),
    );
  }
  return (
    <div>
      <NavBar key="navBar" mode="light"
              rightContent={[
                <p key="publish" onClick={e=>publish(e)}>发布</p>,
              ]}
      ></NavBar>
      Home
    </div>
  );
}


function mapStateToProps ({ home }) {
  return { home }
}

export default connect(mapStateToProps)(home);
