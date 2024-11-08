import { useEffect, useState } from "react";
import { Badge, Card, ConfigProvider, Modal } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import warning from "../../../../assets/icons/warning.svg";
import styles from "./confirm_modal.module.css";
import CustomButton from "../../../commons/Buttons/CustomButton";

const ConfirmModal = ({ open, onClose }: any) => {
  const [countdown, setCountdown] = useState(5);
  const [showPassword, setShowPassword] = useState({
    master: false,
    investor: false,
  });

  const togglePasswordVisibility = (type: any) => {
    setShowPassword((prev: any) => ({ ...prev, [type]: !prev[type] }));
  };

  const accountData = [
    { label: "Account Type", value: "Standard" },
    { label: "Leverage", value: "1:100" },
    { label: "Master Password", value: "MasterPass123" },
    { label: "Investor Password", value: "InvestorPass456" },
  ];

  const maskPassword = (password: any) => "*".repeat(password.length);

  useEffect(() => {
    if (open) {
      setCountdown(5);
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      const timeout = setTimeout(onClose, 5000);
  
      return () => {
        clearInterval(countdownInterval);
        clearTimeout(timeout);
      };
    }
  }, [open]);
  

  return (
    <Modal
      open={open}
      onCancel={onClose}
      closable={false}
      footer={null}
      width={430}
      height={546}
      className={styles.confirm_customModal}
    >
      <div className={styles.confirm_modalContent}>
        <div className={styles.confirm_modal_header_section}>
          <p>This window automatically closes in - </p>
          <ConfigProvider
            theme={{
              components: {
                Badge: {
                  textFontSize: 16,
                  textFontWeight: 600,
                  indicatorHeight: 24,
                },
              },
            }}
          >
            <Badge
              count={countdown}
              color="var(--primary-color)"
              className={styles.confirmation_countdown}
            />
          </ConfigProvider>
        </div>
        <Card className={styles.confirm_modal_details_section}>
          <div className={styles.accountDataItem_conatiner}>
            {accountData.map((item) => (
              <div key={item.label} className={styles.accountDataItem}>
                <span className={styles.accountDataItem_lable}>
                  {item.label}
                </span>
                {item.label.includes("Password") ? (
                  <span className={styles.passwordField}>
                    <span
                      onClick={() =>
                        togglePasswordVisibility(
                          item.label === "Master Password"
                            ? "master"
                            : "investor"
                        )
                      }
                      className={styles.eyeIcon}
                    >
                      {(item.label === "Master Password" &&
                        showPassword.master) ||
                      (item.label === "Investor Password" &&
                        showPassword.investor) ? (
                        <EyeInvisibleOutlined />
                      ) : (
                        <EyeOutlined />
                      )}
                    </span>

                    <span className={styles.accountDataItem_values}>
                      {item.label === "Master Password"
                        ? showPassword?.master
                          ? item.value
                          : maskPassword(item.value)
                        : showPassword?.investor
                        ? item.value
                        : maskPassword(item.value)}
                    </span>
                  </span>
                ) : (
                  <span className={styles.accountDataItem_values}>
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Card>
        <div className={styles.confirm_modal_buttons_section}>
          <div className={styles.warningicons}>
            <img src={warning} alt="confirmation" />
          </div>
          <div className={styles.confirmation_section}>
            <p>Are you sure You want to Continue ?</p>
            <div className={styles.confirm_modal_buttons}>
              <CustomButton
                text="Yes ! Confirm"
                background="#34C38F"
                padding="8px 16px"
                width="129px"
              />
              <CustomButton
                text="Cancel"
                padding="8px 16px"
                background="#E7515B"
                width="129px"
                onClick={onClose}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
