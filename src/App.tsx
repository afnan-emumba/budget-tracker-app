import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import PrivateRoute from "./components/PrivateRoute";
import AuthLayout from "./layouts/authLayout/AuthLayout";
import MainLayout from "./layouts/mainLayout/MainLayout";
import ProfileLayout from "./layouts/profileLayout/ProfileLayout";
import Signup from "./pages/auth/signup/Signup";
import Login from "./pages/auth/login/Login";
import ForgotPassword from "./pages/auth/forgotPassword/ForgotPassword";
import Expenses from "./pages/home/Expenses";
import Analysis from "./pages/analysis/Analysis";
import Profile from "./pages/profile/Profile";
import { antTheme } from "./theme/theme";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider theme={antTheme}>
          <div className='app-container'>
            <BrowserRouter>
              <Routes>
                <Route
                  element={
                    <PrivateRoute>
                      <AuthLayout />
                    </PrivateRoute>
                  }
                >
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/reset-password' element={<ForgotPassword />} />
                </Route>

                <Route
                  element={
                    <PrivateRoute>
                      <MainLayout />
                    </PrivateRoute>
                  }
                >
                  <Route path='/' element={<Expenses />} />
                  <Route path='/analysis' element={<Analysis />} />
                </Route>

                <Route
                  element={
                    <PrivateRoute>
                      <ProfileLayout />
                    </PrivateRoute>
                  }
                >
                  <Route path='/profile' element={<Profile />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
