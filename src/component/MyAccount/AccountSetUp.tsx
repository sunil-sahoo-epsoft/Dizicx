import styles from "./accountsetup.module.css";
import NoActiveAccount from "../../assets/icons/NoActiveAccount.svg";
import CustomButton from "../commons/Buttons/CustomButton";
const AccountSetUp = () => {
  return (
    <div className={styles.accountSetup_conytainer}>
      <div className={styles.accountSetup_header_section}>
        <p>Your Accounts</p>
        <CustomButton text="Create Live Account" padding="12px" height="36px" />
      </div>

      <div className={styles.accountSetup_action_section}>
        <img src={NoActiveAccount} alt="noActive_account" className={styles.noactivation_icon} />
        <div className={styles.accountSetup_action_section_buttonsNtext}>
          <div className={styles.accountSetup_action_section_texts}>
            <h3>No Active Accounts</h3>
            <p>Feel free to create a demo or live trading account.</p>
          </div>
          <div className={styles.accountSetup_action_section_buttons}>
            <CustomButton text="Open Live Account" padding="12px" />
            <CustomButton text="Demo Account"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetUp;
