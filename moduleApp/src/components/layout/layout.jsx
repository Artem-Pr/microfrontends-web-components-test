import React from 'react';
import {Button} from '@epam/promo';

export const LayoutComponent = ({classes}) => {
    return (
        <div className={classes.container} style={{height: 30, fontWeight: 800}}>
            hELLO
            <Button color='green' caption='Call to action' onClick={ () => null } />
        </div>
    );
};
