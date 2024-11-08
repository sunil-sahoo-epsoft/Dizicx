import { Form } from "antd";
import CustomButton from "../commons/Buttons/CustomButton";
import PasswordInput from "../commons/Inputs/PasswordInput";
import TextInput from "../commons/Inputs/TextInput";
import styles from "./Authentication.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const AuthForm = () => {
  const [active, setActive] = useState("login");
  function toggleTab(tab: any) {
    if (tab === "login") {
      setActive(tab);
    } else if (tab === "register") {
      setActive(tab);
    }
  }
  return (
    <>
      <div className={styles.authForm_Wrap}>
        <h1>Welcome to Dizicx</h1>
        <div className={styles.card_title_Wrap}>
          <button
            className={`${styles.radio_Button} ${
              active === "register" && styles.colorChange
            }
              } `}
            type="button"
            onClick={() => toggleTab("register")}
          >
            Register
          </button>
          <button
            className={`${styles.radio_Button} ${
              active === "login" && styles.colorChange
            } `}
            type="button"
            onClick={() => toggleTab("login")}
          >
            Login
          </button>
        </div>

        <div
          className={`${styles.form_container} `}
          style={{
            transform: `translateX(${active !== "login" ? 0 : -100}%)`,
          }}
        >
          <div className={styles.auth_card_inner}>
            <Form layout="vertical">
              <div className={styles.login_button}>
                <TextInput
                  type="email"
                  border="1px solid #383838"
                  label="Email"
                />
                <PasswordInput label="Password" />
                <PasswordInput label="Password" />
              </div>
              <CustomButton text="Login Now" width="100%" />
            </Form>
            <Link to="#">Forget Password</Link>
          </div>
          <div className={styles.auth_card_inner}>
            <Form layout="vertical">
              <div className={styles.login_button}>
                <TextInput
                  type="email"
                  border="1px solid #383838"
                  label="Email"
                />
                <PasswordInput label="Password" />
              </div>
              <CustomButton text="Login Now" width="100%" borderRadius="6px" />
            </Form>
            <Link to="#">Forget Password</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const ResetForm = () => {
  return <></>;
};

export const ResetPasswordForm = () => {
  return <></>;
};
