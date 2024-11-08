import BreadCrumb from "../component/commons/ItemComponents/Breadcrumb/BreadCrumb";
import InternalTransfer from "../component/Transactions/InternalTransfer/InternalTransfer";

const InternalTransferPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BreadCrumb pathsItem={["Transactions", "Internal Transfer"]} />
      <InternalTransfer />
    </div>
  );
};

export default InternalTransferPage;
