/*
 * @Author: xpy
 * @Description: 
 * @Date: 2021-04-12 17:40:34
 * @LastEditTime: 2021-04-16 16:27:34
 */
import ReactDOM from 'react-dom';
import 'zent/css/index.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
let store = createStore(reducer);

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
