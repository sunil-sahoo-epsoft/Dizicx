import styles from "./header.module.css";
import country from "../../assets/icons/countryFlag.svg";
import { DownOutlined } from "@ant-design/icons";

const Country = () => {
  return (
    <div className={styles.country_container}>
      <img src={country} alt="country" />

      <div className={styles.country_action}>
        <DownOutlined />
      </div>
    </div>
  );
};

export default Country;
