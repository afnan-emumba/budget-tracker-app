import { Helmet } from "react-helmet";
import { Link } from "react-router";
import { Form, Input, Button, Checkbox, Flex } from "antd";
import { EmailIcon, EyeIcon, EyeOnIcon } from "../../../assets/icons";
import loginImage from "../../../assets/images/login-illustration.png";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='login-page'>
      <Helmet>
        <title>Login | Budget Tracker</title>
      </Helmet>

      <div className='login-form'>
        <h2>Welcome Back!</h2>
        <p>Sign in to continue to Budget Tracker</p>

        <Form
          name='login'
          initialValues={{ remember: true }}
          layout='vertical'
          requiredMark='optional'
        >
          <Form.Item
            name='email'
            label='Email'
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input suffix={<EmailIcon />} placeholder='test@gmail.com' />
          </Form.Item>
          <Form.Item
            name='password'
            label='Password'
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              suffix={
                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {passwordVisible ? <EyeOnIcon /> : <EyeIcon />}
                </span>
              }
              type={passwordVisible ? "text" : "password"}
              placeholder='Enter your password'
            />
          </Form.Item>
          <Form.Item>
            <Flex
              justify='space-between'
              align='center'
              style={{ marginTop: "-0.5rem" }}
            >
              <Form.Item name='remember' valuePropName='unchecked' noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link to={"/reset-password"}>Forgot password?</Link>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button
              block
              type='primary'
              htmlType='submit'
              style={{
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Log in
            </Button>
            <div style={{ textAlign: "center" }}>
              Don't have an account?{" "}
              <Link to={"/signup"} style={{ fontWeight: "600" }}>
                Sign Up
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
      <div className='vertical-line' />
      <img src={loginImage} alt='login' className='login-image' />
    </div>
  );
};

export default Login;
