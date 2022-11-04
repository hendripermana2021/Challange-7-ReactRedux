import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./page/Home";
import Cars from "./page/Cars";

// import { Provider } from "react-redux";
// import store from "./redux/store";
import './asset/css/style.css'

import { applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './redux/reducers';

const store = configureStore({ reducer }, compose(applyMiddleware(thunk)));


function App() {
  return (
    
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
