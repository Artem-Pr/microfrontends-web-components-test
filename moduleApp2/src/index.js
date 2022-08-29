import React from 'react';
import ReactDOM from 'react-dom';

import Jss from 'jss';
import JssPreset from 'jss-preset-default';
import {JssProvider} from 'react-jss';

import {App} from './app.jsx';


class ModuleApp extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
        this.applicationRoot = document.createElement('div');
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'main.css';
        this.root.appendChild(this.applicationRoot);
        this.root.appendChild(link);
        
        this.Events = {};
        this.Events.CounterCheck = detail => new CustomEvent('counterClick', {
            bubbles: true,
            composed: true,
            detail
        });
    }
    
    connectedCallback() {
        Jss.setup({
            insertionPoint: this.applicationRoot,
            ...JssPreset()
        });
    
        const handleClick = () => {
            this.applicationRoot.dispatchEvent(this.Events.CounterCheck('Counter Click'));
        };
        
        ReactDOM.render((
            <JssProvider jss={Jss}>
                <App/>
                <button onClick={handleClick}>Counter</button>
            </JssProvider>
        ), this.applicationRoot);
    }
    
    disconnectedCallback() {
        ReactDOM.render(null, this.applicationRoot);
    }
}

window.customElements.define('module-app2', ModuleApp);
