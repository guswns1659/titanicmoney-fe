import Balance from "../components/Balance";
import { useSelector } from "react-redux";

const BalanceContainer = () => {
    const { loadingCharge, balance } = useSelector(({sample}) => ({
        loadingCharge: sample.loading.POST_CHARGE,
        balance: sample.balance
    }))

    return <Balance loadingCharge={loadingCharge} balance={balance}></Balance>
}

export default BalanceContainer;

