import "../css/Balance.css"
import {useState} from "react";

const Balance = () => {

    const [amount, setAmount] = useState(10000);

    return (
        <div className="balance">
            <div className="balance-amount">{amount}원</div>
            <div className="balance-title">타이타닉머니</div>
        </div>
    )
}

export default Balance;