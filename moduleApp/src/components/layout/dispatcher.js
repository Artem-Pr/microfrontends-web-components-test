import {fetch} from './actions/fetch';

const mapDispatch = ({
    fetch
}) => dispatch => ({
    fetch: () => dispatch(fetch())
});

export const dispatcher = mapDispatch({
    fetch
});