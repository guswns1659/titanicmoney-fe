import Balance from "../components/Balance";
import {useSelector} from "react-redux";

const BalanceContainer = () => {
    const {chargeAmount} = useSelector(({charger}) => ({
        chargeAmount: charger.chargeAmount,
    }))

    return <Balance balance={chargeAmount}></Balance>
}

export default BalanceContainer;

