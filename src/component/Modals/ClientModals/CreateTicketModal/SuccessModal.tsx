import { Modal } from "antd";
import styles from "./createTicketModal.module.css";
import CustomButton from "../../../commons/Buttons/CustomButton";
import successIcon from "../../../../assets/icons/success.svg";

const SuccessModal = ({ isSuccessModalOpen, handleSuccessModalClose }: any) => {
  return (
    <Modal
      open={isSuccessModalOpen}
      onCancel={handleSuccessModalClose}
      closable={false}
      footer={null}
      width={423}
      height={290}
      className={styles.successModal_container}
    >
      <div className={styles.successModalContent}>
        <img src={successIcon} alt="success" />
        <h2>Thank You</h2>
        <p>Ticket created successfully</p>
        <CustomButton
          text="Go Back"
          fontWeight="400"
          fontSize="14px"
          width="110px"
          height="37px"
          onClick={handleSuccessModalClose}
        />
      </div>
    </Modal>
  );
};

export default SuccessModal;
