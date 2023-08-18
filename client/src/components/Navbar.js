import { useState } from "react";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import {useAppContext} from "../context/appContext"
import Wrapper from "../assets/wrappers/Navbar";
const Navbar = () => {
  const {user, toggleSidebar, logoutUser} = useAppContext();
  const [showLogout, setShowLogout] = useState(false);
  // handle logout dropdown view
  const handleDropDown = ()=>{
    setShowLogout(!showLogout);
    console.log(showLogout);
  }
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className="toggle-btn"
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>

        <div className="btn-container">
          <button className="btn" onClick={handleDropDown}>
            <FaUserCircle />
            {user && user.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button className="dropdown-btn" onClick={logoutUser}>logout</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
