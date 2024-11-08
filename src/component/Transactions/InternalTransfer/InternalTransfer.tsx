import styles from "./internalTransfer.module.css";
import InternalTransferForm from "./InternalTransferForm";

const InternalTransfer = () => {
  return (
    <div className={styles.internaltransfer_container}>
      <div className={styles.hedersection}>
        <p>InternalTransfer</p>
      </div>

      <div className={styles.internalTransfer_body}>
        <div className={styles.internal_transfer_formpart}>
          <InternalTransferForm />
        </div>
        <div className={styles.internal_transfer_notes}>
          <p>Deposit Note Points</p>
          <div className={styles.points_container}>
            <ul>
              <li>You can only make transfer from your own bank accounts.</li>
              <li>Fill in payment comment only purchase request.</li>
              <li>Payments from another person’s bank account will be declined.</li>
              <li>Payment processing takes approximately 3-4 hours.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalTransfer;
