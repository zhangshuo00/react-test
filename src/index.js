import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SingleTree from './demo.tsx';
import StateOut from './StateOut.tsx';
import TagInputCom from './TagInputCom.tsx';
import CustomItem from './CustomItem.tsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomItem/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
