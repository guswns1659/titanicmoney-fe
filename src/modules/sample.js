import * as api from '../lib/api'
import {handleActions} from "redux-actions";
import axios from "axios";

// action type
const POST_CHARGE = 'sample/POST_CHARGE'
const POST_CHARGE_SUCCESS = 'sample/POST_CHARGE_SUCCESS'
const POST_CHARGE_FAILURE = 'sample/POST_CHARGE_FAILURE'

// action create
export const sampleCharge = (amount) => async dispatch => {
    dispatch({type: POST_CHARGE}); // request start
    try {
        const response = await axios.get('/api/hello');
        // TODO(jack.comeback) : GET은 backend까지 호출되는데 post가 정상적으로 안됌..
        // debugger
        // const data = await api.charge(amount);
        dispatch({
            type: POST_CHARGE_SUCCESS,
            payload: response.data
        }) // request success
    } catch (e) {
        dispatch({
            type: POST_CHARGE_FAILURE,
            payload: e,
            error: true
        }) // error occur
        throw e;
    }
}

// initial state
const initialState = {
    loading: {
        POST_CHARGE: false,
    },
    balance: 0
}

// reducer
const sample = handleActions(
    {
        [POST_CHARGE]: (state) => ({...state, loading: {...state.loading, POST_CHARGE: true}}),
        [POST_CHARGE_SUCCESS]: (state, action) => ({
            ...state, loading: {...state.loading, POST_CHARGE: false},
            balance: action.payload
        }),
        [POST_CHARGE_FAILURE]: (state, action) => ({
            ...state, loading: {...state.loading, POST_CHARGE:false},
        })
    },
    initialState
)

export default sample;