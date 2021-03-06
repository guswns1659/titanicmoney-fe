import Charge from "../components/Charge";
import {useDispatch, useSelector} from "react-redux";
import charger, {charge, writeAmount} from "../modules/charge";
import {useCallback} from "react";
import {sampleCharge} from "../modules/sample";

const ChargeContainer = () => {
    const {changedChargeAmount} = useSelector(({charger}) => ({
        changedChargeAmount: charger.changedChargeAmount,
    }));

    const dispatch = useDispatch();
    const onCharge = useCallback(chargeAmount => dispatch(sampleCharge(chargeAmount)), [dispatch]);
    const onChargeAmountChange = useCallback(changedChargeAmount => dispatch(writeAmount(changedChargeAmount)), [dispatch]);

    return (
        <Charge onCharge={onCharge} amount={changedChargeAmount} onChargeAmountChange={onChargeAmountChange}></Charge>
    )
}

export default ChargeContainer;