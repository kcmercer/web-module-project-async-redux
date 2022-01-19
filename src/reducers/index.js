import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS} from '../actions';

const initialState = {
    fact: '',
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                fact: '',
                isFetching: true,
                error: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                fact: '',
                isFetching: false,
                error: action.payload
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                fact: action.payload,
                isFetching: false,
                error: ''
            }
        default:
            return state
    }
}