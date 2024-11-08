import styles from "./accounts.module.css";
import internalTransfer from "../../../assets/icons/internalTransfer.svg";
import changeLeverage from "../../../assets/icons/changeLeverage.svg";
import Mpassword from "../../../assets/icons/masterPassword.svg";
import inventorPassword from "../../../assets/icons/InventorPassword.svg";
import position from "../../../assets/icons/position.svg";
import transactionHistory from "../../../assets/icons/transaction_history.svg";

const popoverItems = [
  { icon: internalTransfer, label: "Internal Transfer" },
  { icon: changeLeverage, label: "Change Leverage" },
  { icon: Mpassword, label: "Master Password" },
  { icon: inventorPassword, label: "Investor Password" },
  { icon: position, label: "Positions" },
  { icon: transactionHistory, label: "Transaction History" },
];

const PopoverContent = () => {
  return (
    <div className={styles.popoverContent}>
      {popoverItems.map((item, index) => (
        <div key={index} className={styles.popoverItem}>
          <img src={item.icon} alt={`${item.label}_icon`} className={styles.popoverItemIcon} />
          <div>
            <p>{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopoverContent;
