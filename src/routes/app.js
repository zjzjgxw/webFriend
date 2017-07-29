import React from 'react';
import { connect } from 'dva';
import TabBar from '../components/common/MyTabBar';


function App({children,location,dispatch,app }) {

  const {selected,ishidden } = app;


  const tabBarProp = {
    selected:selected,
    content:children,
    dispatch,
    ishidden:ishidden,
  };
  return (
    <div>
      <TabBar  {...tabBarProp}/>
    </div>
  );
}


function mapStateToProps ({ app }) {
  return { app }
}

export default connect(mapStateToProps)(App);
