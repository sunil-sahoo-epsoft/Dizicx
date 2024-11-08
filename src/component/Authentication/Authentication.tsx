import styles from "./Authentication.module.css";
import logo from "../../assets/images/auth_logo.svg";
import { Link } from "react-router-dom";
import { AuthForm } from "./AuthForm";
const Authentication = () => {
  return (
    <div className={styles.auth_container}>
      <div className={styles.auth_Wrap}>
        {/* <div className={styles.auth_Wrap_Inner}> */}
        <img src={logo} alt="logo" />
        <div className={styles.auth_form_Wrap}>
          <AuthForm />
        </div>
        {/* </div> */}
      </div>
      <footer className={styles.auth_footer}>
        <img src={logo} alt="logo" />
        <div>
          <p>
            <b>Risk Warning:</b> An investment in derivatives may mean investors
            may lose an amount even greater than their original investment.
            Anyone wishing to invest in any of the products mentioned in
            www.dizicx.com should seek their own financial or professional
            advice. Trading of securities, forex, stock market, commodities,
            options and futures may not be suitable for everyone and involves
            the risk of losing part or all of your money.
          </p>
          <p>
            Trading in the financial markets has large potential rewards, but
            also large potential risk. You must be aware of the risks and be
            willing to accept them in order to invest in the markets. Don't
            invest and trade with money which you can't afford to lose. Forex
            Trading are not allowed in some countries, before investing your
            money, make sure whether your country is allowing this or not.
          </p>
        </div>

        <ul>
          <li>
            <Link to="#">Privacy Policy</Link>
          </li>
          <li>
            <Link to="#">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="#">Risk Warning</Link>
          </li>
          <li>
            <Link to="#">Chargeback & Refund</Link>
          </li>
          <li>
            <Link to="#">Customer Service Agreement</Link>
          </li>
          <li>
            <Link to="#">AML Policy</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Authentication;
