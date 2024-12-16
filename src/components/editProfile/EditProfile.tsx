import { Card, Divider, Input, Button, DatePicker, Select } from "antd";
// import dayjs from "dayjs";
import styles from "./EditProfile.module.css";

const { Option } = Select;
const { TextArea } = Input;

const EditProfile = () => {
  return (
    <div className={styles.editProfileSection}>
      <Card className={styles.editProfileCard} title='My Account'>
        <div className={styles.section}>
          <h3>Name & Job</h3>
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label htmlFor='firstName'>First Name</label>
              <Input id='firstName' placeholder='First Name' />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='middleName'>Middle Name</label>
              <Input id='middleName' placeholder='Middle Name' />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='lastName'>Last Name</label>
              <Input id='lastName' placeholder='Last Name' />
            </div>
          </div>
        </div>
        <Divider />
        <div className={styles.section}>
          <h3>Address</h3>
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label htmlFor='streetAddress'>Street Address</label>
              <Input id='streetAddress' placeholder='Street' />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='city'>City</label>
              <Input id='city' placeholder='City' />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='state'>State</label>
              <Input id='state' placeholder='State' />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='zipCode'>Zip Code</label>
              <Input id='zipCode' placeholder='Zip Code' />
            </div>
          </div>
        </div>
        <Divider />
        <div className={styles.section}>
          <h3>Contact Info</h3>
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label htmlFor='phoneNumber'>Phone Number</label>
              <Input id='phoneNumber' placeholder='Phone Number' />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='email'>Email</label>
              <Input id='email' placeholder='Email' />
            </div>
          </div>
        </div>
        <Divider />
        <div className={styles.section}>
          <h3>Bio</h3>
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label htmlFor='dateOfBirth'>Date of Birth</label>
              <DatePicker id='dateOfBirth' placeholder='Date of Birth' />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='education'>Education</label>
              <Input id='education' placeholder='Education' />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='gender'>Gender</label>
              <Select id='gender' placeholder='Gender'>
                <Option value='male'>Male</Option>
                <Option value='female'>Female</Option>
                <Option value='rather_not_say'>Rather not say</Option>
              </Select>
            </div>
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label htmlFor='aboutMe'>About Me</label>
              <TextArea id='aboutMe' rows={3} placeholder='About me' />
            </div>
          </div>
        </div>
        <Divider />
        <div className={styles.section}>
          <h3>Financial Information</h3>
          <div className={styles.inputRow}>
            <div>
              <label htmlFor='budgetLimit'>Budget (PKR)</label>
              <Input id='budgetLimit' placeholder='Budget' />
            </div>
          </div>
        </div>
        <div className={styles.buttonRow}>
          <Button type='primary' htmlType='submit'>
            Update
          </Button>
          <Button type='text'>Cancel</Button>
        </div>
      </Card>
    </div>
  );
};

export default EditProfile;
