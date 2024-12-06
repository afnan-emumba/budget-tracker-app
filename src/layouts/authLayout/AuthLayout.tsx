import { Outlet } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import "./AuthLayout.css";

const AuthLayout = () => {
  return (
    <>
      <div className='auth-logo'>
        <Logo />
      </div>
      <Outlet />
    </>
  );
};

export default AuthLayout;
