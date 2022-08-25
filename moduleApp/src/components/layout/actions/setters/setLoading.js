import Update from 'immutability-helper';

export const SET_LOADING = Symbol('SET_LOADING');

export const setLoading = value => ({
    type: SET_LOADING,
    payload: value
});

export const mutateLoading = (state, value) => Update(state, {
    loading: {$set: value}
});
