import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {store} from './store';

import Jss from 'jss';
import JssPreset from 'jss-preset-default';
import {JssProvider} from 'react-jss';

import '@epam/uui-components/styles.css';
import '@epam/promo/styles.css';

// import firstStyles from '@epam/uui-components/styles.css';
// import secondStyles from '@epam/promo/styles.css';
// import '../index.css';

import {App} from './app.jsx';
import {setCount} from './components/layout/actions/setters/setCount';

// const template = document.createElement('template');
// template.innerHTML = `
// <style>
// @import "../";
// @import "~@epam/uui-components/styles.css";
// </style>`;

class ModuleApp extends HTMLElement{
    constructor() {
        super();
        this.store = store();
        this.root = this.attachShadow({mode: 'open'});
        this.applicationRoot = document.createElement('div');
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'main.css';
        this.root.appendChild(this.applicationRoot);
        this.root.appendChild(link);
    
        document.addEventListener('counterClick', event => {
            console.log('moduleApp', event.detail);
            const {layout: {count}} = this.store.getState();
            this.store.dispatch(setCount(count + 1));
        });
    }

    connectedCallback() {
        Jss.setup({
            insertionPoint: this.applicationRoot,
            ...JssPreset()
        });

        ReactDOM.render((
            <JssProvider jss={Jss}>
                <Provider store={this.store}>
                    <App />
                </Provider>
            </JssProvider>
        ), this.applicationRoot);
    }

    disconnectedCallback() {
        ReactDOM.render(null, this.applicationRoot);
    }
}

window.customElements.define('module-app', ModuleApp);
