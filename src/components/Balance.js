import "../css/Balance.css"

const Balance = ({loadingCharge, balance}) => {
    return (
        <div className="balance">
            {loadingCharge && <div>'Loading...'</div>}
            {!loadingCharge &&
                <div className="balance-amount">{balance}원</div>
            }
            <div className="balance-title">타이타닉머니</div>
        </div>
    )
}

export default Balance;