import styles from "./accounttable.module.css";
import download from "../../../assets/icons/download_account.svg";
import sharedIcon from "../../../assets/icons/share_account.svg";
import moreItem from "../../../assets/icons/moreItems.svg";

import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  accounttype: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Account Type",
    key: "accounttype",
    dataIndex: "accounttype",
    render: (_, { accounttype }) => (
      <>
        {accounttype.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record: any) => (
      <Space size="middle">
        <img src={download} alt="download_icon" key={record} />
        <img src={sharedIcon} alt="share_icon" />
        <img src={moreItem} alt="moreItem" className={styles.moreItemIcon} />
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    accounttype: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    accounttype: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    accounttype: ["cool", "teacher"],
  },
];

const AccountTable = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      className={styles.table_container}
    />
  );
};

export default AccountTable;
