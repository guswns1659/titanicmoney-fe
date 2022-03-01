// action
import {createAction, handleActions} from "redux-actions";

const WRITE_AMOUNT = 'charge/WRITE_AMOUNT'
const CHARGE = 'charge/CHARGE'

// action create
export const writeAmount = createAction(WRITE_AMOUNT, amount => amount)

export const charge = createAction(CHARGE, chargeAmount => chargeAmount)

// Initial state
const initialState = {
    chargeAmount: 0,
    balance: 0,
}

// reducer
const charger = handleActions(
    {
        [WRITE_AMOUNT]: (state, { payload: amount }) => ({...state, chargeAmount: amount}),
        [CHARGE]: (state, {payload: balance }) => ({...state, balance: balance})
    },
    initialState
)

export default charger;
