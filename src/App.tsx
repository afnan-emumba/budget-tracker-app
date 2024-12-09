import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";

import AuthLayout from "./layouts/authLayout/AuthLayout";
import MainLayout from "./layouts/mainLayout/MainLayout";
import Signup from "./pages/auth/signup/Signup";
import Login from "./pages/auth/login/Login";
import ForgotPassword from "./pages/auth/forgotPassword/ForgotPassword";
import Home from "./pages/home/Home";
import Analysis from "./pages/analysis/Analysis";

import { antTheme } from "./theme/theme";
import "./App.css";

function App() {
  return (
    <ConfigProvider theme={antTheme}>
      <div className='app-container'>
        <BrowserRouter>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/reset-password' element={<ForgotPassword />} />
            </Route>

            <Route element={<MainLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/analysis' element={<Analysis />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;
