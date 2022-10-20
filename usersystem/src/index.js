import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/Store/store'

//components
import index from './components/Index/indexComponent'
import Details from './components/Details/detailsComponent'
import Update from './components/Update/updateComponent'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<App />} ></Route>
          <Route path='/Details' element={<Details />}></Route>
          <Route path='/Update' element={<Update />}></Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();