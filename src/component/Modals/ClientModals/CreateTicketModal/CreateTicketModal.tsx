import { Modal, Form, Row, Col } from "antd";
import styles from "./createTicketModal.module.css";
import SelectInput from "../../../commons/Inputs/SelectInput";
import TextInput from "../../../commons/Inputs/TextInput";
import UploadInput from "../../../commons/Inputs/UploadInput";
import CustomButton from "../../../commons/Buttons/CustomButton";
import { useState } from "react";
import SuccessModal from "./SuccessModal";

const CreateTicketModal = ({ open, onClose }: any) => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSubmit = () => {
    onClose();
    setIsSuccessModalOpen(true);
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
  };
  return (
    <>
      <Modal
        open={open}
        onCancel={onClose}
        footer={null}
        width={863}
        className={styles.createTicketModal_container}
      >
        <div className={styles.modalContentBody}>
          <div className={styles.modalContentHeader}>
            <h2>Create Quick Ticket</h2>
            <p>Write and address new queries and issues</p>
          </div>
          <Form layout="vertical" className={styles.createTicketForm}>
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <SelectInput
                  name="department"
                  label="Department"
                  borderRadius="4px"
                />
              </Col>

              <Col xs={24} sm={12}>
                <SelectInput
                  name="priority"
                  label="Priority"
                  borderRadius="4px"
                />
              </Col>

              <Col xs={24} sm={12}>
                <TextInput
                  textarea={true}
                  name="subject"
                  label="Subject"
                  height="72px"
                />
              </Col>

              <Col xs={24} sm={12}>
                <TextInput
                  textarea={true}
                  name="message"
                  label="Message"
                  height="72px"
                />
              </Col>

              <Col xs={24} sm={12}>
                <TextInput name="tags" label="Tags" required={false} />
              </Col>

              <Col xs={24} sm={12}>
                <UploadInput name="files" label="Files" required={false} />
              </Col>

              <Col xs={24} className={styles.submitButtonContainer}>
                <CustomButton
                  text="Submit"
                  fontWeight="400"
                  fontSize="14px"
                  width="112px"
                  height="37px"
                  onClick={handleSubmit}
                />
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
      <SuccessModal isSuccessModalOpen={isSuccessModalOpen} handleSuccessModalClose={handleSuccessModalClose} />
    </>
  );
};

export default CreateTicketModal;
