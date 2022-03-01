import Balance from "../components/Balance";
import {useDispatch, useSelector} from "react-redux";

const BalanceContainer = () => {
    const { loadingCharge, chargeAmount } = useSelector(({sample}) => ({
        loadingCharge: sample.loading.POST_CHARGE,
        chargeAmount: sample.balance
    }))

    return <Balance loadingCharge={loadingCharge} balance={chargeAmount}></Balance>
}

export default BalanceContainer;

