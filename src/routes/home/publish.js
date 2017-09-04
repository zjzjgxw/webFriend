import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';


function publish({location,dispatch,publish }) {
  return (
    <div>
      发布
    </div>
  );
}


function mapStateToProps ({ publish }) {
  return { publish }
}

export default connect(mapStateToProps)(publish);
