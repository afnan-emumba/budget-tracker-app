import { Helmet } from "react-helmet";
import { Link } from "react-router";
import { Divider } from "antd";
import { BackArrowIcon } from "../../assets/icons";
import ProfileSideCard from "../../components/profileSideCard/ProfileSideCard";
import ProfileDetails from "../../components/profileDetails/ProfileDetails";
import EditProfile from "../../components/editProfile/EditProfile";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <Helmet>
        <title>Profile | Budget Tracker</title>
      </Helmet>

      <div className={styles.profileContent}>
        <div className={styles.header}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Link to={"/"}>
              <BackArrowIcon />
            </Link>
            <h2>Profile</h2>
          </div>

          <div
            style={{
              display: "flex",
              gap: "2rem",
            }}
          >
            <p className={styles.profileLink}>Profile</p>
            <p className={styles.profileLink}>My account</p>
          </div>
        </div>
        <Divider />
        <div className={styles.profileCardsContainer}>
          <ProfileSideCard />
          {/* <ProfileDetails /> */}
          <EditProfile />
        </div>
      </div>
    </>
  );
};

export default Profile;
