import ContextProducts from './context/ProductsContext';
import React, { StrictMode } from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <ContextProducts>
            <App/>
        </ContextProducts>
    </BrowserRouter>, document.getElementById('root')

);