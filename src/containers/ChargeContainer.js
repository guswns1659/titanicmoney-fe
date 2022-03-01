import Charge from "../components/Charge";
import {useDispatch, useSelector} from "react-redux";
import {writeAmount} from "../modules/charge";
import {useCallback} from "react";
import {charge} from "../modules/charge";

const ChargeContainer = () => {
    const {changedChargeAmount} = useSelector(({charger}) => ({
        changedChargeAmount: charger.changedChargeAmount,
    }));

    const dispatch = useDispatch();
    const onCharge = useCallback(chargeAmount => dispatch(charge(chargeAmount)), [dispatch]);
    const onChargeAmountChange = useCallback(changedChargeAmount => dispatch(writeAmount(changedChargeAmount)), [dispatch]);

    return (
        <Charge onCharge={onCharge} amount={changedChargeAmount} onChargeAmountChange={onChargeAmountChange}></Charge>
    )
}

export default ChargeContainer;