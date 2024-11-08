import { Card, Row, Col, Tag, Popover } from "antd";
import styles from "./accounts.module.css";
import download from "../../../assets/icons/download_account.svg";
import sharedIcon from "../../../assets/icons/share_account.svg";
import moreItem from "../../../assets/icons/moreItems.svg";
import PopoverContent from "./PopoverContent";

const AccountCard = (account:any) => {
    
  return (
    <Card className={styles.accountCard} style={{ padding: "16px" }}>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Row justify="space-between" className={styles.accountCard_row1}>
            <Col span={11}>
              <div className={styles.accountCard_col1}>
                <div className={styles.accounttype}>
                  <p>{account?.account.accountType}</p>
                  <div className={styles.select_option}></div>
                </div>
                <div>
                  <Tag color={account?.account.tagColor}>{account?.account.tagLabel}</Tag>
                </div>
              </div>
            </Col>
            <Col span={11}>
              <div className={styles.accountCard_col2}>
                <img src={download} alt="download_icon" />
                <img src={sharedIcon} alt="share_icon" />
                <Popover
                  content={<PopoverContent />}
                  trigger="click"
                  arrow={false}
                  placement="bottomRight"
                  overlayClassName={styles.popover}
                >
                  <img src={moreItem} alt="moreItem" className={styles.moreItemIcon} />
                </Popover>
              </div>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row justify="space-between" className={styles.accountCard_row2}>
            <Col span={11}>
              <div className={styles.accountCard_col1}>
                <div className={styles.account_value}>
                  <p>{account?.account.balance}</p>
                </div>
                <div className={styles.title_section}>
                  <p>Balance</p>
                </div>
              </div>
            </Col>
            <Col span={11}>
              <div className={`${styles.accountCard_col2} ${styles.leverage}`}>
                <div className={styles.account_value}>
                  <p>{account?.account.leverage}</p>
                </div>
                <div className={styles.title_section}>
                  <p>Leverage</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default AccountCard;
