import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './css/app.css';
import './css/header.css';
import App from './components/App';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('app'),
);