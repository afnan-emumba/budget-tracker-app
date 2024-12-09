import { MenuIcon, NotificationIcon } from "../../assets/icons";
import "./Navbar.css";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  return (
    <nav className='navbar'>
      <span className='sidebar-toggle-button' onClick={toggleSidebar}>
        <MenuIcon />
      </span>
      <div className='navbar-content'>
        <div className='notification-icon'>
          <NotificationIcon />
        </div>
        <div className='user-avatar'>
          <img
            src='https://randomuser.me/api/portraits/thumb/men/1.jpg'
            alt='User avatar'
          />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
