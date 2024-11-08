import styles from "./header.module.css";
import profilepic from "../../assets/images/Profile_img.svg";
import { DownOutlined } from "@ant-design/icons";
import { truncateText } from "../../utils";

const Profile = () => {
  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_picture}>
        <img src={profilepic} alt="profile" />
      </div>

      <div className={styles.profile_name}>
        <p>{truncateText("Sanjay Ramacharya", 10)}</p>
      </div>

      <div className={styles.profile_action}>
        <DownOutlined />
      </div>
    </div>
  );
};

export default Profile;
