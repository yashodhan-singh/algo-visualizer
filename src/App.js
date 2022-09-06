import * as React from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from "react-dom"
import './index.scss';
import Header from './components/Header/Header';
import Background from './components/Background/Background';
import reportWebVitals from './reportWebVitals';
import Selector from './components/Selector/Selector';
import Visualizer from './components/Visualizer/Visualizer';
import NavBar from './components/NavBar/NavBar';

export default function App() {
  return (
    
    <div>

        <div>
            <Background/>
        </div>

        <div>
            <NavBar/>
        </div>

        <div>
            <div>
                <Header/>
            </div>

            <div className="sv">
                <Selector/>
                <Visualizer/>
            </div>
        </div>

    </div>
  );
}