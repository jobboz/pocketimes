import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; // provider allows react to react with our store
import rootReducer from './reducer/rootReducer';
const store = createStore(rootReducer);

 ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
  // ReactDOM.render(<Login />, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

