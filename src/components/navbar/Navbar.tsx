import { Link } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { MenuIcon, NotificationIcon } from "../../assets/icons";
import Logo from "../logo/Logo";
import Placeholder from "../../assets/images/placeholder_avatar.jpg";
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
  const users = useSelector((state: RootState) => state.user.users);
  const loggedInUser = users.find((user) => user.isLoggedIn);

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
              src={loggedInUser?.profilePicture || Placeholder}
              alt='avatar'
              className={styles.avatar}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
