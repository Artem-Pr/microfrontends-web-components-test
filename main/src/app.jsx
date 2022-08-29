import React from 'react';

export const App = () => {
    document.addEventListener('counterClick', event => {
        // eslint-disable-next-line no-console
        console.log('main', event.detail);
    });
    
    return <>
        <h1>Main App</h1>
        <module-app/>
        <module-app2/>
    </>;
};
