import { Card, Divider } from "antd";
import { PhoneIcon, MailIcon, LocationIcon, LinkIcon } from "../../assets/icons";
import styles from "./ProfileSideCard.module.css";

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

const ProfileSideCard = () => {
  return (
    <Card
      className={styles.profileCard}
      style={{
        height: 420,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src='https://randomuser.me/api/portraits/men/1.jpg'
          alt='avatar'
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            marginBottom: "1rem",
          }}
        />
        <h3>Michel Johnson</h3>
        <p>UI/UX Designer</p>
      </div>
      <Divider />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <PhoneIcon />
          <p>{userDetails[0].phone}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <MailIcon />
          <p>{userDetails[0].email}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <LocationIcon />
          <p>{userDetails[0].address}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <LinkIcon />
          <p>{userDetails[0].website}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProfileSideCard;
