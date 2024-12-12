import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../redux/store";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const users = useSelector((state: RootState) => state.user.users);
  const isLoggedIn = users.some((user) => user.isLoggedIn);
  const location = useLocation();

  if (
    isLoggedIn &&
    (location.pathname === "/login" ||
      location.pathname === "/signup" ||
      location.pathname === "/reset-password")
  ) {
    return <Navigate to='/' />;
  }

  if (
    !isLoggedIn &&
    location.pathname !== "/login" &&
    location.pathname !== "/signup" &&
    location.pathname !== "/reset-password"
  ) {
    return <Navigate to='/login' />;
  }

  return children;
};

export default PrivateRoute;
