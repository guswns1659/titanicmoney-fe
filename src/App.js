import './App.css';
import TopNav from "./components/TopNav";
import SideBar from "./components/SideBar";
import Balance from "./components/Balance";
import Center from "./components/Center";

function App() {
  return (
      <div className="App">
          <TopNav></TopNav>
          <SideBar></SideBar>
          <Balance></Balance>
          <Center></Center>
      </div>
  );
}

export default App;