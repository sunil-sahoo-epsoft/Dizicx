import styles from "./emptyticket.module.css";
import client from "../../../assets/icons/clientEmptyTicket.svg";
import CustomButton from "../../commons/Buttons/CustomButton";
import editIcon from "../../../assets/icons/message-edit.svg";

const EmptyTickets = () => {
  return (
    <div className={styles.emptyTicketsContainer}>
      <img src={client} alt="No Tickets" className={styles.emptyTicketImage} />
      <div className={styles.emptyTicketButton}>
        <CustomButton
          text="Create a Ticket"
          icon={<img src={editIcon} alt="filter" />}
        />
      </div>
    </div>
  );
};

export default EmptyTickets;
