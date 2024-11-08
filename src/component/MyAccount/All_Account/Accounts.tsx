import styles from "./accounts.module.css";
import CustomButton from "../../commons/Buttons/CustomButton";
import AccountCard from "./AccountCard";

const Accounts = () => {
  const accountDataArray = [
    {
      accountType: "Demo",
      tagColor: "#E38B29",
      tagLabel: "#f50erw454545",
      balance: "5000.00 USD",
      leverage: "1:1000",
    },
    {
      accountType: "Real",
      tagColor: "#34C38F",
      tagLabel: "#abc123",
      balance: "12000.00 USD",
      leverage: "1:500",
    },
    {
      accountType: "Premium",
      tagColor: "#FF5733",
      tagLabel: "#def789",
      balance: "25000.00 USD",
      leverage: "1:200",
    },
    {
      accountType: "Demo",
      tagColor: "#C70039",
      tagLabel: "#ghijkl987",
      balance: "3000.00 USD",
      leverage: "1:100",
    },
    {
      accountType: "VIP",
      tagColor: "#900C3F",
      tagLabel: "#mnop456",
      balance: "50000.00 USD",
      leverage: "1:50",
    },
    {
      accountType: "Standard",
      tagColor: "#DAF7A6",
      tagLabel: "#qrst123",
      balance: "7500.00 USD",
      leverage: "1:300",
    },
    {
      accountType: "Investor",
      tagColor: "#FFC300",
      tagLabel: "#uvwxyz321",
      balance: "15000.00 USD",
      leverage: "1:400",
    },
    {
      accountType: "Managed",
      tagColor: "#581845",
      tagLabel: "#abcd345",
      balance: "100000.00 USD",
      leverage: "1:25",
    },
    {
      accountType: "Micro",
      tagColor: "#FF5733",
      tagLabel: "#klmno789",
      balance: "2000.00 USD",
      leverage: "1:800",
    },
    {
      accountType: "Corporate",
      tagColor: "#3498DB",
      tagLabel: "#pqrst098",
      balance: "200000.00 USD",
      leverage: "1:10",
    },
  ];

  return (
    <div className={styles.all_accounts_container}>
      <div className={styles.all_accounts_header_section}>
        <p>Your Accounts</p>
        <CustomButton text="Create Live Account" padding="12px" height="36px" />
      </div>

      <div className={styles.accountCard_container}>
        {accountDataArray.map((item) => (
          <AccountCard account={item} />
        ))}
      </div>
    </div>
  );
};

export default Accounts;
