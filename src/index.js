import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes} from 'react-router-dom';	
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './Redux/Reducer';

import Login from './Rutas/Login';
import Employees from './Rutas/Employees';
import Upload from './Rutas/Upload';
import IsLogged from './Componentes/IsLogged';
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
            <Route
                exact path="/"
                element={<Login/>}
            />
            <Route
                exact path="/employees"
                element={<IsLogged><Employees/></IsLogged>}
            />
            <Route
                exact path="/upload"
                element={<IsLogged><Upload/></IsLogged>}
            />
            <Route
                path="*"
                element={<IsLogged><Employees/></IsLogged>}
            />
          </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
