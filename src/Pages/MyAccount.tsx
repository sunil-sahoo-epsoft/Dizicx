import BreadCrumb from "../component/commons/ItemComponents/Breadcrumb/BreadCrumb";
import DownloadBanner from "../component/commons/ItemComponents/DownloadBanner/DownloadBanner";
import AccountSetUp from "../component/MyAccount/AccountSetUp";
import DemoAccount from "../component/MyAccount/DemoAccount/DemoAccount";

const MyAccount = () => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <BreadCrumb pathsItem={["My Account", "My Account"]} />
      <DownloadBanner />
      {/* <AccountSetUp /> */}
      <DemoAccount/>
    </div>
  );
};

export default MyAccount;
