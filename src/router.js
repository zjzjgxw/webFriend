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
        {
          path: 'login',
          name: 'login',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/center/login'));
              cb(null, require('./routes/center/login'));
            }, 'login');
          },
        },
        {
          path: 'register',
          name: 'register',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/center/register'));
              cb(null, require('./routes/center/register'));
            }, 'register');
          },
        },
        {
          path: 'publish',
          name: 'publish',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/home/publish'));
              cb(null, require('./routes/home/publish'));
            }, 'publish');
          },
        },
      ],
    },
  ];

  return <Router onUpdate={() =>window.scrollTo(0, 0)}  history={history} routes={routes} />;
}
