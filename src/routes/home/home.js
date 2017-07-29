import React from 'react';
import { connect } from 'dva';


function home({location,dispatch,home }) {
  return (
    <div>
      Home
    </div>
  );
}


function mapStateToProps ({ home }) {
  return { home }
}

export default connect(mapStateToProps)(home);
