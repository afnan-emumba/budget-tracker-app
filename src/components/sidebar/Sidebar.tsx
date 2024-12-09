import "./Sidebar.css";

interface SidebarProps {
  isVisible: boolean;
}

const Sidebar = ({ isVisible }: SidebarProps) => {
  return (
    <div className={`sidebar ${isVisible ? "expanded" : "collapsed"}`}>
      <ul>
        <li>Dashboard</li>
        <li>Expenses</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};
export default Sidebar;
