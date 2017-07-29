import React from 'react';
import { connect } from 'dva';


function center({location,dispatch,center }) {
  return (
    <div>
      center
    </div>
  );
}


function mapStateToProps ({ center }) {
  return { center }
}

export default connect(mapStateToProps)(center);
