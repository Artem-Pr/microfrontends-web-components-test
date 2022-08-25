import {defaultState} from './defaultState';


import {SET_LOADING, mutateLoading} from './actions/setters/setLoading';

export const reducer = (state = defaultState, {type, payload}) => {
    switch (type){
        case SET_LOADING:
            return mutateLoading(state, payload);

        default:
            return state;
    }
};
