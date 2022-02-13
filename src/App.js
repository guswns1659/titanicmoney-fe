import './App.css';
import axios from "axios";

function App() {
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.amount.value)
    const response = await axios.get(`/api/ping`);
    const data = await response.data;
    console.log('data - ', data);
  }

  return (
      <div className="App">
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
      </div>
  );
}

export default App;