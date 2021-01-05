import React from 'react';
import ReactDOM from 'react-dom';

import { DrizzleContext } from "@drizzle/react-plugin";

import drizzle from "./drizzle"; //objeto creado

import './css/index.css';

import App from './components/App';

ReactDOM.render(
    <React.StrictMode>
    {/* productor del contexto drizzle */}
        <DrizzleContext.Provider drizzle={drizzle}> 
            <App/>
        </DrizzleContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
