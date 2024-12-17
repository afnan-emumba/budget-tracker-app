import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./ProfileLayout.css";

const ProfileLayout = () => {
  return (
    <div className='profile-layout'>
      <Navbar showLogo={true} showMenuIcon={false} />
      <div className='profile-content'>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
