import { Modal, Form, ConfigProvider } from "antd";
import styles from "./accountmodal.module.css";
import SelectInput from "../../../commons/Inputs/SelectInput";
import PasswordInput from "../../../commons/Inputs/PasswordInput";
import CustomButton from "../../../commons/Buttons/CustomButton";

const CreateAccountModal = ({ open, onClose }: any) => {
  const [form] = Form.useForm();

  const handleCreateAccount = () => {
    form.validateFields().then((values) => {
      console.log(values);
      form.resetFields();
    });
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "#F8F8F8",
          },
        },
      }}
    >
      <Modal
        open={open}
        onCancel={onClose}
        width={620}
        // height={834}
        footer={null}
        className={styles.createAccountModal}
      >
        <Form form={form} layout="vertical" className={styles.modalForm}>
          <div className={styles.createAccountModal}>
            <div className={styles.createAccount_modal_header_section}>
              <p>Create Demo Account</p>
            </div>

            <SelectInput
              name="accountType"
              label="Account Type"
              required={false}
              border="1px solid #E8ECF1"
              borderRadius="4px"
            />

            <SelectInput
              name="leverage"
              label="Leverage"
              border="1px solid #E8ECF1"
              borderRadius="4px"
            />

            <PasswordInput
              name="masterPassword"
              label="Master Password"
              border="1px solid #E8ECF1"
              required={false}
              borderRadius="4px"
            />

            <PasswordInput
              name="investorPassword"
              label="Investor Password"
              border="1px solid #E8ECF1"
              required={false}
            />

            <div className={styles.Password_info_container}>
              <p>Both password must contain: 8+ chars, 1 num,</p>
              <p>1 uppercase, 1lowercase and 1 special char.</p>
            </div>

            <div className={styles.footer_container}>
              <CustomButton
                text="Submit"
                onClick={handleCreateAccount}
                width="140px"
                height="48px"
                padding="12px 20px"
                borderRadius="4px"
              />
            </div>
          </div>
        </Form>
      </Modal>
    </ConfigProvider>
  );
};

export default CreateAccountModal;
