import {api} from '@Api/api';

import {setLoading} from './setters/setLoading';

const action = ({
    getCustomers,
    setLoading
}) => () => async (dispatch, getState) => {
    try {
        dispatch(setLoading(true));

        const{
            layout: {
                page,
                pageSize,
                sortBy,
                sortDir
            }
        } = getState();

        const {data} = await getCustomers({
            page,
            pageSize,
            sortBy,
            sortDir
        });

    } catch (error) {
        console.error(error?.response?.message);
    } finally {
        dispatch(setLoading(false));
    }
};

export const fetch = action({
    getCustomers: api.getCustomers,
    setLoading
});