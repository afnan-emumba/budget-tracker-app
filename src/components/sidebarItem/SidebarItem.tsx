import React from "react";
import { Link } from "react-router";
import "./SidebarItem.css";

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  link?: string;
  isSelected?: boolean;
  isVisible?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({
  icon,
  text,
  isSelected,
  isVisible,
  link = "",
  onClick,
}: SidebarItemProps & { onClick: () => void }) => {
  return (
    <div
      className={`sidebar-item-container ${isSelected ? "selected" : ""} ${
        isVisible ? "" : "collapse"
      }`}
    >
      <li>
        <Link to={`/${link}`} className='sidebar-item' onClick={onClick}>
          <div className={`sidebar-icon ${isSelected ? "selected" : ""}`}>
            {icon}
          </div>
          <p
            className={`sidebar-text ${isSelected ? "selected" : ""} ${
              isVisible ? "" : "collapse"
            }`}
          >
            {text}
          </p>
        </Link>
      </li>
    </div>
  );
};

export default SidebarItem;
