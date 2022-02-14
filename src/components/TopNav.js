import '../css/TopNav.css'
import {Link} from "react-router-dom";

const TopNav = () => {
    return (
        <div className="topnav">
            <Link to="/">
                <div className="logo">타이타닉머니</div>
            </Link>
            <Link to="/">
                <div id="profile">jack.comeback</div>
            </Link>
        </div>
    )
}

export default TopNav;