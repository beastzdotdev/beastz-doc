import 'reflect-metadata';

import ReactDOM from 'react-dom/client';
import { Provider } from 'inversify-react';
import { configure } from 'mobx';

import { IocContainer } from './common/ioc/container';
import { App } from './App';

// css
import 'antd/dist/antd.css';
import './assets/css/index.css';

const rootElement = document.getElementById('root') as HTMLElement;

// mobs strict mode disable
configure({
  enforceActions: 'never',
});

ReactDOM.createRoot(rootElement).render(
  <Provider container={IocContainer.getContainer()}>
    <App />
  </Provider>
);
