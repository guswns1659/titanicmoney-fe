import './App.css';
import TopNav from "./components/TopNav";
import SideBar from "./components/SideBar";
import Balance from "./components/Balance";
import Center from "./components/Center";
import Charge from "./components/Charge";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <TopNav></TopNav>
            <SideBar></SideBar>
            <Balance></Balance>
            <Route exact path = "/" component={Center}/>
            <Route path = "/charge" component={Charge}/>
        </div>
    );
}

export default App;