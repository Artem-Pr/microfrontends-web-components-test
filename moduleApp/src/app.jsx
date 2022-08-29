import React from 'react';

import {Layout} from '@Component/layout';

const AppComponent = ({
    Layout
}) => () => {
    return (
        <div>
            App 1
            <Layout />
        </div>
    );
};

export const App = AppComponent({
    Layout
});
