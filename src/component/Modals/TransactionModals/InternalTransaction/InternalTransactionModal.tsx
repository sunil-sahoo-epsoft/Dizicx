import { Modal } from "antd";
import styles from "./internalTransaction.module.css";
import internalTransfer from "../../../../assets/icons/internalTransferModalIcon.svg";
import CustomButton from "../../../commons/Buttons/CustomButton";
import warning from "../../../../assets/icons/warning.svg";

const InternalTransactionModal = ({ open, onClose }: any) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={574}
      height={316}
      className={styles.internalTransfer_customModal}
    >
      <div className={styles.modalContent_body}>
        <div className={styles.internalTransfer_modal_header_section}>
          <img src={internalTransfer} />
          <p>Internal Transfer</p>
        </div>

        <div className={styles.internalTransfer_modal_buttons_section}>
          <div className={styles.warningicons}>
            <img src={warning} alt="confirmation" />
          </div>
          <div className={styles.confirmation_section}>
            <p>Are you sure You want to Continue ?</p>
            <div className={styles.internalTransfer_modal_buttons}>
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

export default InternalTransactionModal;
