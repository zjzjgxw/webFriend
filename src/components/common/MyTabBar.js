import React from 'react';
import { TabBar } from 'antd-mobile';
import { routerRedux } from 'dva/router';
import styles from './MyTabBar.less';


function HyuTabBar({ selected = [true, false], badges = [0, 0], content, dispatch, ishidden }) {
  function homePress() {
    dispatch(routerRedux.push({
      pathname: '/home',
    }),
    );
  }
  function centerPress() {
    dispatch(routerRedux.push({
      pathname: '/center',
    }),
    );
  }
  return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="black"
        barTintColor="white"
        hidden={ishidden}
      >
        <TabBar.Item
          title="首页"
          key="home"
          icon={<img
            src={require('../../assets/images/home.png')}
            className={styles.img_type}
          />
        }
          selectedIcon={<img
            src={require('../../assets/images/home_select.png')}
            className={styles.img_type}
          />
        }
          badge={badges[0]}
          selected={selected[0]}
          data-seed="logId"
          onPress={homePress}
        >
          {content}
        </TabBar.Item>
        <TabBar.Item
          icon={<img src={require('../../assets/images/center.png')} className={styles.img_type} />}
          selectedIcon={<img src={require('../../assets/images/center_select.png')} className={styles.img_type} />}
          title="我的"
          key="center"
          badge={badges[1]}
          onPress={centerPress}
          selected={selected[1]}
        >
          {content}
        </TabBar.Item>
      </TabBar>
  );
}

export default HyuTabBar;
