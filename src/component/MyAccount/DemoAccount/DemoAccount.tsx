// import CustomButton from "../../commons/Buttons/CustomButton";
// import AccountTypeCard from "./AccountTypeCard";
// import styles from "./demoaccount.module.css";

// const DemoAccount = () => {

//   return (
//     <div className={styles.demoaccount_container}>
//       <div className={styles.demoaccount_header_section}>
//         <p>Create Demo Account</p>
//         <CustomButton
//           text="Create Live Account"
//           padding="12px"
//           height="36px"
//         />
//       </div>

//       <div className={styles.demoaccounttype_card_section}>
//         <AccountTypeCard />
//       </div>

//     </div>
//   );
// };

// export default DemoAccount;

// testing code the correct component code is above

import { useState } from "react";
import CustomButton from "../../commons/Buttons/CustomButton";
import AccountTypeCard from "./AccountTypeCard";
import styles from "./demoaccount.module.css";
import ConfirmModal from "../../Modals/AccountModals/ConfirmModal/ConfirmModal";
import DetailsModal from "../../Modals/AccountModals/DetailsModal/DetailsModal";
import MaterPasswordModal from "../../Modals/AccountModals/MasterPasswordModal/MaterPasswordModal";
import CreateAccountModal from "../../Modals/AccountModals/CreateAccountModal/CreateAccountModal";

const DemoAccount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className={styles.demoaccount_container}>
      <div className={styles.demoaccount_header_section}>
        <p>Create Demo Account</p>
        <CustomButton
          text="Create Live Account"
          padding="12px"
          height="36px"
          onClick={openModal}
        />
      </div>

      <div className={styles.demoaccounttype_card_section}>
        <AccountTypeCard />
      </div>

      {/* For component checkingt reason */}

      {/* <ConfirmModal open={isModalOpen} onClose={closeModal} /> */}
      {/* <DetailsModal open={isModalOpen} onClose={closeModal}/> */}
      {/* <MaterPasswordModal open={isModalOpen} onClose={closeModal}  /> */}
      <CreateAccountModal open={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default DemoAccount;
