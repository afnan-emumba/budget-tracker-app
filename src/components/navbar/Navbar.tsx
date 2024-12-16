import { Link } from "react-router";
import { MenuIcon, NotificationIcon } from "../../assets/icons";
import Logo from "../logo/Logo";
import styles from "./Navbar.module.css";

interface NavbarProps {
  toggleSidebar?: () => void;
  showMenuIcon?: boolean;
  showLogo?: boolean;
}

const Navbar = ({
  toggleSidebar,
  showMenuIcon = true,
  showLogo = false,
}: NavbarProps) => {
  return (
    <nav className={styles.navbar}>
      {showMenuIcon && (
        <span className={styles.sidebarToggleButton} onClick={toggleSidebar}>
          <MenuIcon />
        </span>
      )}
      {showLogo && <Logo />}
      <div className={styles.navbarContent}>
        <div className={styles.notificationIcon}>
          <NotificationIcon />
        </div>
        <div className={styles.userAvatar}>
          <Link to={"/profile"}>
            <img
              src='https://randomuser.me/api/portraits/thumb/men/1.jpg'
              alt='User avatar'
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
