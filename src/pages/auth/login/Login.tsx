import { Form, Input, Button, Checkbox, Flex } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Logo from "../../../components/logo/Logo";
import "./Login.css";

const Login = () => {
  return (
    <>
      <Logo />
      <h2>Welcome Back!</h2>
      <p>Sign in to continue to Budget Tracker</p>

      <Form
        name='login'
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
      >
        <Form.Item
          name='username'
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input suffix={<UserOutlined />} placeholder='Username' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            suffix={<LockOutlined />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          <Flex justify='space-between' align='center'>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href=''>Forgot password</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type='primary' htmlType='submit'>
            Log in
          </Button>
          or <a href=''>Register now!</a>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
