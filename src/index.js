import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from './components/Header/Header';
import Background from './components/Background/Background';
import reportWebVitals from './reportWebVitals';
import AlgoVisualizer from './components/AlgoVisualizer/AlgoVisualizer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <div>
      <Background/>
    </div>

    <div>
      <div>
        <Header/>
      </div>

      <div>
        <AlgoVisualizer/>
      </div>
    </div>

  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
