import axios from "axios";

const TestForm = () => {
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.amount.value)
        const response = await axios.get(`/api/hello`);
        const data = await response.data;
        console.log('data - ', data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label style={{margin: "1rem"}} >Amount</label>
            <input style={{
                display: "inline-block",
                border: "1px solid #ccc",
                borderRadius: "4px",
                margin: "1rem",
                boxSizing: "border-box"
            }} type="text" id="amount-form" name="amount" placeholder="Amount"/>
            <input type="submit" value="submit" />
        </form>
    )
}

export default TestForm;