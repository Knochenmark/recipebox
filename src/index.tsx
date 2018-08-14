import * as React from 'react';

import * as ReactDOM from 'react-dom';

import Recipebox from './Recipebox';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

// import { createStore } from 'redux';

// function mode(state = 0, action) {
//   switch (action.type) {
//   case 'INCREMENT':
//     return state + 1
//   case 'DECREMENT':
//     return state - 1
//   default:
//     return state
//   }
// }

// let store = createStore(mode)

// store.subscribe(() =>
//   console.log(store.getState())
// )

ReactDOM.render(
  <Recipebox />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
