// action
import {createAction, handleActions} from "redux-actions";

const WRITE_AMOUNT = 'charge/WRITE_AMOUNT'

// action create
export const writeAmount = createAction(WRITE_AMOUNT, amount => amount)

// Initial state
const initialState = {
    changedChargeAmount: 0,
}

// reducer
const charger = handleActions(
    {
        [WRITE_AMOUNT]: (state, { payload: changedChargeAmount }) => ({...state, changedChargeAmount: changedChargeAmount}),
    },
    initialState
)

export default charger;
