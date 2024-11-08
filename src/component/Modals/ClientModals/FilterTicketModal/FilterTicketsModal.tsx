import styles from "./fillterticket.module.css";
import { Modal, Form, Row, Col } from "antd";
import SelectInput from "../../../commons/Inputs/SelectInput";
import TextInput from "../../../commons/Inputs/TextInput";
import CustomButton from "../../../commons/Buttons/CustomButton";
import backIcon from "../../../../assets/icons/back_arraow.svg";

const FilterTicketsModal = ({ open, onClose }: any) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={863}
      className={styles.filterTicketModal_container}
    >
      <div className={styles.modalContentBody}>
        <div className={styles.modalContentHeader}>
          <div className={styles.modalContentHeader_title}>
            <img src={backIcon} alt="back_button" />
            <h2>Filter Data</h2>
          </div>
          <p>Track your ticket</p>
        </div>
        <Form layout="vertical" className={styles.filterTicketForm}>
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
              <SelectInput
                name="reporter"
                label="Reporter"
                borderRadius="4px"
              />
            </Col>

            <Col xs={24} sm={12}>
              <SelectInput name="status" label="Status" borderRadius="4px" />
            </Col>

            <Col xs={24} sm={12}>
              <TextInput name="tags" label="Tags" />
            </Col>

            <Col xs={24} sm={12}>
              <TextInput name="subject" label="Subject" />
            </Col>

            <Col xs={24} className={styles.submitButtonContainer}>
              <CustomButton
                text="Submit"
                fontWeight="400"
                fontSize="14px"
                width="112px"
                height="37px"
                onClick={onClose}
              />
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
};

export default FilterTicketsModal;
