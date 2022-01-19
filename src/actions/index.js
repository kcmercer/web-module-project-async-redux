import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getFact = () => (dispatch) => {
    dispatch(fetchStart());
    axios.get('https://catfact.ninja/fact')
        .then(resp => {
            // console.log(resp.data)
            dispatch(fetchSuccess(resp.data));
        })
        .catch(error => {
            dispatch(fetchFail(error))
        })
}

export const fetchStart = () => {
    return({type:FETCH_START})
}

export const fetchSuccess = (fact) => {
    return({type:FETCH_SUCCESS, payload: fact})
}

export const fetchFail = (errorMessage) => {
    return({type:FETCH_FAIL, payload: errorMessage})
}