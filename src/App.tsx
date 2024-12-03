import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";

import Signup from "./pages/auth/signup/Signup";
import Login from "./pages/auth/login/Login";
import Home from "./pages/home/Home";
import AuthLayout from "./layouts/authLayout/AuthLayout";
import MainLayout from "./layouts/mainLayout/MainLayout";
import { antTheme } from "./theme/theme";
import "./App.css";

function App() {
  return (
    <ConfigProvider theme={antTheme}>
      <div className='app-container'>
        <BrowserRouter>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
            </Route>

            <Route element={<MainLayout />}>
              <Route path='/' element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;
