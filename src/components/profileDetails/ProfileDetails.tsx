import { Card } from "antd";
import styles from "./ProfileDetails.module.css";

const userDetails = [
  {
    firstName: "Michel",
    lastName: "Johnson",
    gender: "Male",
    email: "michel.johnson@example.com",
    website: "micheljohnson.com",
    education: "Bachelor's in Design",
    address: "1234 Elm Street, Springfield, IL",
    phone: "+1 234 567 890",
    zipCode: "62704",
    dateOfBirth: "1990-01-01",
    budgetLimit: 5000,
  },
];

const ProfileDetails = () => {
  return (
    <div className={styles.profileSection}>
      <Card className={styles.profileCard} title='About Me'>
        <p>
          Passionate UI/UX designer with over 5 years of experience in
          creating user-friendly and visually appealing digital
          experiences. Skilled in wireframing, prototyping, and user
          research to deliver intuitive designs. Committed to enhancing
          user satisfaction through innovative and effective design
          solutions.
        </p>
      </Card>
      <Card className={styles.profileCard} title='Personal Details'>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: "16rem",
            paddingBottom: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <div>
              <p>Full Name</p>
              <p style={{ color: "#2B2B2B", fontWeight: "600" }}>
                {userDetails[0].firstName} {userDetails[0].lastName}
              </p>
            </div>
            <div>
              <p>Gender</p>
              <p style={{ color: "#2B2B2B", fontWeight: "600" }}>
                {userDetails[0].gender}
              </p>
            </div>
            <div>
              <p>Email</p>
              <p style={{ color: "#2B2B2B", fontWeight: "600" }}>
                {userDetails[0].email}
              </p>
            </div>
            <div>
              <p>Education</p>
              <p style={{ color: "#2B2B2B", fontWeight: "600" }}>
                {userDetails[0].education}
              </p>
            </div>
            <div>
              <p>Address</p>
              <p style={{ color: "#2B2B2B", fontWeight: "600" }}>
                {userDetails[0].address}
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <div>
              <p>Phone</p>
              <p style={{ color: "#2B2B2B", fontWeight: "600" }}>
                {userDetails[0].phone}
              </p>
            </div>
            <div>
              <p>Zip Code</p>
              <p style={{ color: "#2B2B2B", fontWeight: "600" }}>
                {userDetails[0].zipCode}
              </p>
            </div>
            <div>
              <p>Date of Birth</p>
              <p style={{ color: "#2B2B2B", fontWeight: "600" }}>
                {userDetails[0].dateOfBirth}
              </p>
            </div>
            <div>
              <p>Budget Limit</p>
              <p style={{ color: "#2B2B2B", fontWeight: "600" }}>
                {userDetails[0].budgetLimit} PKR
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileDetails;
