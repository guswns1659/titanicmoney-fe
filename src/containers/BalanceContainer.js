import Balance from "../components/Balance";
import { useSelector } from "react-redux";

const BalanceContainer = () => {
    const { loadingCharge, balance } = useSelector(({charger}) => ({
        loadingCharge: charger.loading.POST_CHARGE,
        balance: charger.balance
    }))

    return <Balance loadingCharge={loadingCharge} balance={balance}></Balance>
}

export default BalanceContainer;

