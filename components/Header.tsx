import Logo from "./Logo";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="header-right">
        <div className="notification-bell">
          <IoMdNotificationsOutline />
        </div>
        <div className="user-avatar">GA</div>
        <div className="notification-bell">
          <MdOutlineArrowDropDown />
        </div>

      </div>
    </header>
  );
};

export default Header;
