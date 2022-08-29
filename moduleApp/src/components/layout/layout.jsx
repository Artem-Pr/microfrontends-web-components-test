import React from 'react';
import {Button} from '@epam/promo';

export const LayoutComponent = ({classes, count}) => {
    return (
        <div className={classes.container} style={{height: 30, fontWeight: 800}}>
            <span>{`Count: ${count}`}</span>
            <Button color='green' caption='Call to action' />
        </div>
    );
};
