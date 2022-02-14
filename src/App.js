import './App.css';
import TopNav from "./components/TopNav";
import SideBar from "./components/SideBar";
import Balance from "./components/Balance";

function App() {
  return (
      <div className="App">
          <TopNav></TopNav>
          <SideBar></SideBar>
          <Balance></Balance>
      </div>
  );
}

export default App;