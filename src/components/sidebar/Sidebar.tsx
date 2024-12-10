import { useState } from "react";
import Logo from "../logo/Logo";
import SidebarItem from "../sidebarItem/SidebarItem";
import { AnalysisIcon, ExpensesIcon, LogoutIcon } from "../../assets/icons";
import "./Sidebar.css";

interface SidebarProps {
  isVisible: boolean;
}

const Sidebar = ({ isVisible }: SidebarProps) => {
  const [selectedItem, setSelectedItem] = useState("Expenses");

  return (
    <div className={`sidebar ${isVisible ? "expanded" : "collapsed"}`}>
      <div className='sidebar-logo'>
        <Logo showText={isVisible} />
      </div>
      <div className='sidebar-content'>
        <ul>
          <SidebarItem
            icon={
              <AnalysisIcon
                fillColour={selectedItem === "Analysis" ? "white" : ""}
              />
            }
            text='Analysis'
            isSelected={selectedItem === "Analysis"}
            isVisible={isVisible}
            link='analysis'
            onClick={() => setSelectedItem("Analysis")}
          />
          <SidebarItem
            icon={
              <ExpensesIcon
                fillColour={selectedItem === "Expenses" ? "white" : ""}
              />
            }
            text='Expenses'
            isSelected={selectedItem === "Expenses"}
            isVisible={isVisible}
            onClick={() => setSelectedItem("Expenses")}
          />
          <SidebarItem
            icon={
              <LogoutIcon
                fillColour={selectedItem === "Log Out" ? "white" : ""}
              />
            }
            text='Log Out'
            link='login'
            isSelected={selectedItem === "Log Out"}
            isVisible={isVisible}
            onClick={() => setSelectedItem("Log Out")}
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
