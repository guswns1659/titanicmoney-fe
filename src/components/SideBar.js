import '../css/SideBar.css'
import {Link} from "react-router-dom";

const SideBar = () => {
    return (
        <div className="sidenav">
            <Link to="/charge">
                <div className="sidenav-charge">충전</div>
            </Link>
        </div>
    )
}

export default SideBar;