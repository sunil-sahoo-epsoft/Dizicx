import { Form } from "antd";
import styles from "./internalTransfer.module.css";
import SelectInput from "../../commons/Inputs/SelectInput";
import TextInput from "../../commons/Inputs/TextInput";
import CustomButton from "../../commons/Buttons/CustomButton";
import { useState } from "react";
import InternalTransactionModal from "../../Modals/TransactionModals/InternalTransaction/InternalTransactionModal";

const InternalTransferForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Form layout="vertical" style={{ width: "100%" }}>
        <SelectInput
          name="accountNumber"
          label="Account Number"
          required={false}
          borderRadius="16px"
        />

        <SelectInput
          name="paymentMethod"
          label="Payment Method"
          required={false}
          borderRadius="16px"
        />

        <TextInput
          name="amount"
          label="Enter Amount"
          required={false}
          borderRadius="8px"
        />

        <div className={styles.footer_container}>
          <span>200 - 500</span>
          <div className={styles.final_amount_box}>
            <p>Final Amount (USD)</p>
            <p>0.00</p>
          </div>
          <CustomButton
            text="Continue"
            width="100%"
            borderRadius="6px"
            height="48px"
            color="white"
            onClick={openModal}
          />
        </div>
      </Form>
      <InternalTransactionModal open={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default InternalTransferForm;
