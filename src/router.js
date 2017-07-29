import React from 'react';
import { Router } from 'dva/router';
import App from './routes/app';


const cached = {};
const registerModel = (app, model) => {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
};

export default function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute(nextState, cb) { // 默认页面
        require.ensure([], (require) => {
          registerModel(app, require('./models/home/home'));
          cb(null, { component: require('./routes/home/home') });
        }, 'app');
      },
      childRoutes: [
        {
          path: 'home',
          name: 'home',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/home/home'));
              cb(null, require('./routes/home/home'));
            }, 'home');
          },
        },
        {
          path: 'center',
          name: 'center',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/center/center'));
              cb(null, require('./routes/center/center'));
            }, 'center');
          },
        },
      ],
    },
  ];

  return <Router onUpdate={() =>window.scrollTo(0, 0)}  history={history} routes={routes} />;
}
