import {defaultState} from './defaultState';


import {SET_COUNT, mutateCount} from './actions/setters/setCount';

export const reducer = (state = defaultState, {type, payload}) => {
    switch (type){
        case SET_COUNT:
            return mutateCount(state, payload);

        default:
            return state;
    }
};
