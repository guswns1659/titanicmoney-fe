import {createAction, handleActions} from "redux-actions";
import * as api from "../lib/api";

// action type
const WRITE_AMOUNT = 'charge/WRITE_AMOUNT'
const POST_CHARGE = 'charge/POST_CHARGE'
const POST_CHARGE_SUCCESS = 'charge/POST_CHARGE_SUCCESS'
const POST_CHARGE_FAILURE = 'charge/POST_CHARGE_FAILURE'

// action create
export const writeAmount = createAction(WRITE_AMOUNT, amount => amount)
export const charge = (amount) => async dispatch => {
    dispatch({type: POST_CHARGE}); // request start
    try {
        const response = await api.charge(amount);
        dispatch({
            type: POST_CHARGE_SUCCESS,
            payload: response.data.balance
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

// Initial state
const initialState = {
    changedChargeAmount: 0,
    loading: {
        POST_CHARGE: false,
    },
    balance: 0
}

// reducer
const charger = handleActions(
    {
        [WRITE_AMOUNT]: (state, { payload: changedChargeAmount }) => ({...state, changedChargeAmount: changedChargeAmount}),
        [POST_CHARGE]: (state) => ({...state, loading: {...state.loading, POST_CHARGE: true}}),
        [POST_CHARGE_SUCCESS]: (state, action) => ({
            ...state, loading: {...state.loading, POST_CHARGE: false},
            balance: action.payload
        }),
        [POST_CHARGE_FAILURE]: (state) => ({
            ...state, loading: {...state.loading, POST_CHARGE:false},
        })
    },
    initialState
)

export default charger;
