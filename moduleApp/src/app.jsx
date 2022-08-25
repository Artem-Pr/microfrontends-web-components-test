import React from 'react';

import {Layout} from '@Component/layout';

const AppComponent = ({
    Layout
}) => () => {
    return (
        <div>
            <Layout />
        </div>
    );
};

export const App = AppComponent({
    Layout
});
