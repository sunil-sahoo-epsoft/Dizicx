import { Breadcrumb } from "antd";
import styles from "./breadcrumb.module.css";

const BreadCrumb = ({ pathsItem }: any) => {
  return (
    <div>
      <Breadcrumb
        className={styles.custom_breadcrumb}
        separator=">"
        style={{ background: "var(--background-color)", padding: "0px 0px 10px 0px" }}
      >
        {pathsItem.map((path: any, index: any) => (
          <Breadcrumb.Item key={index}>
            {path}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
