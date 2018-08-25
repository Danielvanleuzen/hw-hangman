import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import store from './store';
//import {Provider} from 'react-redux';
import { BrowserRouter} from 'react-router-dom'

ReactDOM.render(

<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();


