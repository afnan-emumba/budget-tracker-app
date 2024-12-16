import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Button, Popover } from "antd";
import { RootState } from "../../redux/store";
import { MenuIcon, NotificationIcon } from "../../assets/icons";
import Notification from "../notification/Notification";
import Logo from "../logo/Logo";
import Placeholder from "../../assets/images/placeholder_avatar.jpg";
import styles from "./Navbar.module.css";
import {
  clearAllNotifications,
  markNotificationsAsRead,
} from "../../redux/slices/notificationsSlice";
import { useState } from "react";

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

  const notifications = useSelector(
    (state: RootState) => state.notifications.notifications
  );

  const hasNewNotifications = useSelector(
    (state: RootState) => state.notifications.hasNewNotifications
  );

  const userNotifications = notifications.filter(
    (notification) => notification.userId === loggedInUser?.userId
  );

  const dispatch = useDispatch();

  const handleClearNotifications = () => {
    dispatch(clearAllNotifications());
  };

  const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] =
    useState(false);

  const handlePopoverVisibleChange = (visible: boolean) => {
    setIsNotificationDrawerOpen(visible);
    if (visible) {
      dispatch(markNotificationsAsRead());
    }
  };

  const hasUnreadNotifications =
    hasNewNotifications && !isNotificationDrawerOpen;

  const notificationContent = (
    <div className={styles.notificationContent}>
      {userNotifications.length > 0 ? (
        [...userNotifications]
          .reverse()
          .map((notification) => (
            <Notification
              key={notification.id}
              icon={notification.icon}
              expenseTitle={notification.expenseTitle}
              message={notification.message}
              timestamp={notification.timestamp}
            />
          ))
      ) : (
        <p>No new notifications</p>
      )}
      <Button type='text' size='small' block onClick={handleClearNotifications}>
        Clear All
      </Button>
    </div>
  );

  return (
    <nav className={styles.navbar}>
      {showMenuIcon && (
        <span className={styles.sidebarToggleButton} onClick={toggleSidebar}>
          <MenuIcon />
        </span>
      )}
      {showLogo && <Logo />}
      <div className={styles.navbarContent}>
        <Popover
          content={notificationContent}
          trigger='click'
          arrow={false}
          placement='bottomRight'
          onVisibleChange={handlePopoverVisibleChange}
        >
          <div className={styles.notificationIcon}>
            <NotificationIcon />
            {hasUnreadNotifications && (
              <span className={styles.notificationDot} />
            )}
          </div>
        </Popover>
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
