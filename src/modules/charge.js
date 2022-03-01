// action
import {createAction, handleActions} from "redux-actions";

const WRITE_AMOUNT = 'charge/WRITE_AMOUNT'
const CHARGE = 'charge/CHARGE'

// action create
export const writeAmount = createAction(WRITE_AMOUNT, amount => amount)
export const charge = createAction(CHARGE, chargeAmount => chargeAmount)

// Initial state
const initialState = {
    changedChargeAmount: 0,
    chargeAmount: 0,
}

// reducer
const charger = handleActions(
    {
        [WRITE_AMOUNT]: (state, { payload: changedChargeAmount }) => ({...state, changedChargeAmount: changedChargeAmount}),
        [CHARGE]: (state, {payload: chargeAmount }) => ({...state, chargeAmount: state.chargeAmount + chargeAmount})
    },
    initialState
)

export default charger;
