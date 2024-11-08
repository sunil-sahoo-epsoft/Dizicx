import { Modal, Tag } from "antd";
import styles from "./details_modal.module.css";

const DetailsModal = ({ open, onClose }: any) => {
  const details: any = [
    { label: "Account Type", value: "Professional" },
    { label: "Currency", value: "USD" },
    { label: "Leverage", value: "1.5DD" },
    { label: "Margin Level", value: " USD 5000" },
    { label: "Free Margin", value: " USD 3,00,000" },
    { label: "Margin", value: "0.0%" },
    { label: "Credit", value: " USD 30,000" },
    { label: "Equity", value: "USD 3,000" },
    { label: "Balance", value: "$5000" },
  ];
  return (
    <Modal
      title={
        <div className={styles.modalTitle}>
          <p>Account Details</p>
          <Tag color="blue" className={styles.accountIdTag}>
            # 488576247498
          </Tag>
        </div>
      }
      open={open}
      onCancel={onClose}
      footer={null}
      width={430}
      height={456}
      className={styles.customModal}
    >
      <div className={styles.modalContent}>
        {details.map((item: any, index: any) => (
          <div key={index} className={styles.detailItem}>
            <span className={styles.detailLabel}>{item.label}</span>
            <span className={styles.detailValue}>{item.value}</span>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default DetailsModal;
