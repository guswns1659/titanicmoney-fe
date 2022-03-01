import "../css/Charge.css"

const Charge = ({amount, onCharge, onChargeAmountChange}) => {

    const onSubmit = (e) => {
        e.preventDefault()
        onCharge(amount)
        onChargeAmountChange(0)
    }

    const onChange = (e) => {
        onChargeAmountChange(Number(e.target.value))
    }

    return (
        <form className="charge-parent" onSubmit={onSubmit}>
            <input className="charge" value={amount} onChange={onChange}/>
            <button className="charge-button" type="submit">
                충전하기
            </button>
        </form>
    )
}

export default Charge;
