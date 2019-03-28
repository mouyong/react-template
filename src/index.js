import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './Provider';
import RouteConfig from './RouteConfig';
import Api from '@api';
import * as serviceWorker from './serviceWorker';

import './index.css';

require('./bootstrap');

ReactDOM.render(<Provider Api={Api}>
  <RouteConfig />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
