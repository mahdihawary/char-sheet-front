import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'
import thunk from 'redux-thunk'


const store= createStore(rootReducer, applyMiddleware(thunk))
document.body.style = 'background: #4c6470;'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='background'>
      <App />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
