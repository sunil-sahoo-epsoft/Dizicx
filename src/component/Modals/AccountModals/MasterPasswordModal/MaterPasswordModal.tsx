import { Modal, Form } from "antd";
import styles from "./masterpassword.module.css";
import TextInput from "../../../commons/Inputs/TextInput";
import CustomButton from "../../../commons/Buttons/CustomButton";

const MaterPasswordModal = ({ open, onClose }: any) => {
  const [form] = Form.useForm();

  const handleUpdate = () => {
    form.validateFields().then((values) => {
      console.log(values.masterPassword);
      form.resetFields();
    });
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={430}
    >
      <div className={styles.masterPasswordModal}>
        <div className={styles.masterPassword_modal_header_section}>
          <p>Master Password</p>
        </div>
        <Form form={form} layout="vertical" className={styles.modalForm}>
          <div>
            <TextInput
              name="masterPassword"
              label="Master Password"
              required={true}
              color="black"
            />
          </div>

          <div className={styles.modalFooter}>
            <CustomButton
              onClick={onClose}
              text="Close"
              width="129px"
            />

            <CustomButton
              onClick={handleUpdate}
              text="Update"
              width="129px"
            />
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default MaterPasswordModal;
