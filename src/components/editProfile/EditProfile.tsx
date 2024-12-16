import { Card, Divider, Input, Button, DatePicker, Select } from "antd";
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
              <label>First Name</label>
              <Input placeholder='First Name' />
            </div>
            <div className={styles.inputGroup}>
              <label>Last Name</label>
              <Input placeholder='Last Name' />
            </div>
            <div className={styles.inputGroup}>
              <label>Middle Name</label>
              <Input placeholder='Middle Name' />
            </div>
          </div>
        </div>
        <Divider />
        <div className={styles.section}>
          <h3>Address</h3>
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label>Street Address</label>
              <Input placeholder='Street' />
            </div>
            <div className={styles.inputGroup}>
              <label>City</label>
              <Input placeholder='City' />
            </div>
            <div className={styles.inputGroup}>
              <label>State</label>
              <Input placeholder='State' />
            </div>
            <div className={styles.inputGroup}>
              <label>Zip Code</label>
              <Input placeholder='Zip Code' />
            </div>
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label>Complete Address</label>
              <Input placeholder='Complete Address' />
            </div>
          </div>
        </div>
        <Divider />
        <div className={styles.section}>
          <h3>Contact Info</h3>
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label>Phone Number</label>
              <Input placeholder='Phone Number' />
            </div>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <Input placeholder='Email' />
            </div>
          </div>
        </div>
        <Divider />
        <div className={styles.section}>
          <h3>Bio</h3>
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label>Date of Birth</label>
              <DatePicker placeholder='Date of Birth' />
            </div>
            <div className={styles.inputGroup}>
              <label>Education</label>
              <Input placeholder='Education' />
            </div>
            <div className={styles.inputGroup}>
              <label>Gender</label>
              <Select placeholder='Gender'>
                <Option value='male'>Male</Option>
                <Option value='female'>Female</Option>
                <Option value='rather_not_say'>Rather not say</Option>
              </Select>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>About Me</label>
            <div className={styles.inputRow}>
              <TextArea rows={3} placeholder='About me' />
            </div>
          </div>
        </div>
        <Divider />
        <div className={styles.section}>
          <h3>Financial Information</h3>
          <div className={styles.inputRow}>
            <div>
              <label>Budget (PKR)</label>
              <Input placeholder='Budget' />
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
