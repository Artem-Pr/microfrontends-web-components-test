import Update from 'immutability-helper';

export const SET_COUNT = Symbol('SET_COUNT');

export const setCount = value => ({
    type: SET_COUNT,
    payload: value
});

export const mutateCount = (state, value) => Update(state, {
    count: {$set: value}
});
