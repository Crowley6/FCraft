import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Redux from './Redux/Redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const RerenderReact = (state) => root.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>
);
RerenderReact(Redux);
Redux.subscribe(()=>RerenderReact(Redux))