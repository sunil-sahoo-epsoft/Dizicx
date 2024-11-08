import { useState } from "react";
import EmptyTickets from "../component/ClientSupport/Ticket/EmptyTickets";
import TicketPageHeader from "../component/ClientSupport/Ticket/TicketHeder/TicketPageHeader";
import TicketTable from "../component/ClientSupport/Ticket/TicketTable/TicketTable";
import BreadCrumb from "../component/commons/ItemComponents/Breadcrumb/BreadCrumb";
import CreateTicketModal from "../component/Modals/ClientModals/CreateTicketModal/CreateTicketModal";
import FilterTicketsModal from "../component/Modals/ClientModals/FilterTicketModal/FilterTicketsModal";

const TicketPage = () => {
  const [tabledata, setTableData] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFillterModalOpen, setFillterIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openFilterModal = () => setFillterIsModalOpen(true);
  const closeFilterModal = () => setFillterIsModalOpen(false);
  
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BreadCrumb pathsItem={["Client Support", "Client Ticket List"]} />
      <TicketPageHeader tabledata={tabledata} openModal={openModal} openFilterModal={openFilterModal} />
      {tabledata ? <TicketTable /> : <EmptyTickets />}
      <CreateTicketModal open={isModalOpen} onClose={closeModal} />
      <FilterTicketsModal open={isFillterModalOpen} onClose={closeFilterModal}/>
    </div>
  );
};

export default TicketPage;
