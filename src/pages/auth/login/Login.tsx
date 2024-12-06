import { Link } from "react-router";
import { Form, Input, Button, Checkbox, Flex } from "antd";
import { EmailIcon, EyeIcon } from "../../../assets/icons";
import loginImage from "../../../assets/images/login-illustration.png";
import "./Login.css";

const Login = () => {
  return (
    <div className='login-page'>
      <div className='login-form'>
        <h2>Welcome Back!</h2>
        <p>Sign in to continue to Budget Tracker</p>

        <Form
          name='login'
          initialValues={{ remember: true }}
          style={{ width: "100%" }}
          layout='vertical'
          requiredMark='optional'
        >
          <Form.Item
            name='email'
            label='Email'
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input suffix={<EmailIcon />} placeholder='Email' />
          </Form.Item>
          <Form.Item
            name='password'
            label='Password'
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              suffix={<EyeIcon />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>
          <Form.Item>
            <Flex justify='space-between' align='center'>
              <Form.Item name='remember' valuePropName='unchecked' noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href=''>Forgot password?</a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button
              block
              type='primary'
              htmlType='submit'
              style={{
                textTransform: "uppercase",
              }}
            >
              Log in
            </Button>
            <div style={{ textAlign: "center" }}>
              Don't have an account? <Link to={"/sign-up"}>Sign Up</Link>
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
