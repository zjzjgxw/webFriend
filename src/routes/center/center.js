import React from 'react';
import { Button } from 'antd-mobile';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';


function center({location,dispatch,center }) {
  const { info } = center;
  console.log(info);

  function toLogin() {
    dispatch(routerRedux.push({
        pathname: '/login',
      }),
    );
  }

  return (
    <div>
      <Button className="btn" type="primary" onClick={e =>toLogin()}>login</Button>
    </div>
  );
}


function mapStateToProps ({ center }) {
  return { center }
}

export default connect(mapStateToProps)(center);
