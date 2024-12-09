import { MenuIcon } from "../../assets/icons";
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
      <h2>Budget Tracker</h2>
    </nav>
  );
};
export default Navbar;
