import CustomButton from "../../../commons/Buttons/CustomButton";
import styles from "./ticketheader.module.css";
import editIcon from "../../../../assets/icons/message-edit.svg";
import fillterIcon from "../../../../assets/icons/filterIcon.svg";

const TicketPageHeader = ({tabledata,openModal,openFilterModal}:any) => {
  return (
    <div className={styles.ticket_header_container}>
     { tabledata && <CustomButton icon={<img src={fillterIcon} alt="filter" />} onClick={openFilterModal}/>}
      <CustomButton
        icon={<img src={editIcon} alt="create-ticket" />}
        text="New Ticket"
        onClick={openModal}
      />
    </div>
  );
};

export default TicketPageHeader;
