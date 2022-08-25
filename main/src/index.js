import React from 'react';
import ReactDOM from 'react-dom';

import Jss from 'jss';
import DefaultUnits from 'jss-plugin-default-unit';

import {App} from './app.jsx';
import '../../moduleApp/build/module-app.css';

Jss.use(DefaultUnits());

ReactDOM.render(
    <App/>
    , document.getElementById('root'));
