import Charge from "../components/Charge";
import {useDispatch, useSelector} from "react-redux";
import charger, {charge, writeAmount} from "../modules/charge";
import {useCallback} from "react";

const ChargeContainer = () => {
    const { changedChargeAmount, chargeAmount } = useSelector(({charger}) => ({
        changedChargeAmount: charger.changedChargeAmount,
        chargeAmount: charger.chargeAmount,
    }));

    const dispatch = useDispatch();
    const onCharge = useCallback(chargeAmount => dispatch(charge(chargeAmount)), [dispatch]);
    const onChargeAmountChange = useCallback(changedChargeAmount => dispatch(writeAmount(changedChargeAmount)), [dispatch]);
    
    return (
        <Charge onCharge={onCharge} amount={changedChargeAmount} onChargeAmountChange={onChargeAmountChange}></Charge>
    )
}

export default ChargeContainer;