import { useEffect, useState } from "react";
import styles from './admin.module.css';
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, Button, Badge } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Logo from './assets/images/logo.svg';
import myAccountIcon from './assets/icons/SquaresFour.svg';
import tansactionIcon from './assets/icons/CurrencyDollar.svg';
import ecomicCalenderIcon from './assets/icons/CalendarCheck.svg';
import marketIcon from './assets/icons/ChartLine.svg';
import Notification from './assets/icons/Bell.svg';
import Country from "./component/Header/Country";
import Profile from "./component/Header/Profile";
import Client from './assets/icons/clientIcon.svg'

const { Header, Sider, Content } = Layout;

const allSiderItems = [
    {
        key: "/my_accounts",
        label: "My Accounts",
        icon: <img src={myAccountIcon} alt="dashboard_icon" style={{ width: 24, height: 24 }} className={styles.sider_icons} />,
    },
    {
        key: "/transactions",
        label: "Transactions",
        icon: <img src={tansactionIcon} alt="dashboard_icon" style={{ width: 24, height: 24 }} className={styles.sider_icons} />,
        children: [
            { key: "/deposite", label: "Deposite" },
            { key: "/withdrawal", label: "Withdrawal" },
            { key: "/internal_transfer", label: "Internal Transfer" },
            { key: "/transactions-child", label: "Transactions" },
            { key: "/communication", label: "Communication" },
        ],
    },
    {
        key: "/economic_calendar",
        label: "Economic Calendar",
        icon: <img src={ecomicCalenderIcon} alt="economic_icon" style={{ width: 24, height: 24 }} className={styles.sider_icons} />,
    },
    {
        key: "/market_analysis",
        label: "Market Analysis",
        icon: <img src={marketIcon} alt="market_icon" style={{ width: 24, height: 24 }} className={styles.sider_icons} />,
    },
    {
        key: "/client",
        label: "Client Support",
        icon: <img src={Client} alt="client_icon" style={{ width: 24, height: 24 }} className={styles.sider_icons} />,
        children: [
            { key: "/chat_human", label: "Chat with Human" },
            { key: "/create_ticket", label: "Create a Ticket" },
        ],
    },
];

const Admin = () => {
    const [openKeys, setOpenKeys] = useState<any>([]);
    const [selectedKeys, setSelectedKeys] = useState<any>(['/my_accounts']);
    const navigate = useNavigate();

    const [collapsed, setCollapsed] = useState(window.innerWidth < 992); // Initial collapsed state set kiya width ke hisaab se
    const [collapsedBreakPoint, setCollapsedBreakPoint] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 992;
            setCollapsedBreakPoint(isMobile);
            setCollapsed(isMobile); 
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const onOpenChange = (keys: any) => {
        const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    };

    console.log(collapsedBreakPoint, "file");
    
    const onMenuClick = (e:any) => {
        setSelectedKeys([e.key]);
        collapsedBreakPoint && setCollapsed(true)
        navigate(e.key);
        if (!e.keyPath.includes(openKeys[0])) {
            setOpenKeys([]);
        }
    };


   

    return (
        <Layout className={styles.layout} >
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                width={256}
                className={`${styles.sider_container} ${!collapsed ? styles.collapsed : ''}`}
                collapsedWidth={collapsedBreakPoint ? 0 : 80}
                breakpoint="lg"
                style={{ padding: collapsed ? "5px 17px 0px 17px" : "5px 21px 0px 17px" }}
                onBreakpoint={(broken) => {
                    setCollapsedBreakPoint(broken);
                    setCollapsed(broken); 
                }}
                onCollapse={(isCollapsed) => {
                    setCollapsed(isCollapsed); 
                }}
            >
                <div className={styles.demo_logo}>
                    <img src={Logo} alt="logo_icon" width={collapsed ? "50px" : "91"} height={collapsed ? "40px" : "44px"} />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    className={collapsed ? styles.menu_items_collapsed : styles.menu_items}
                    style={{
                        height: "90%",
                        fontSize: "16px",
                        backgroundColor: "var(--primary-color)",
                    }}
                    selectedKeys={selectedKeys}
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    onClick={onMenuClick}
                    items={allSiderItems}
                />
            </Sider>
            <Layout>
                <Header className={styles.header}>
                    <Button
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        className={styles.collapseButton}
                    />

                    <div className={styles.action_section}>
                        <div className={styles.notification}>
                            <Badge count={0} showZero offset={[4, -2]}>
                                <img src={Notification} alt="notification" />
                            </Badge>
                        </div>
                        <div className={styles.counties}>
                            <Country />
                        </div>
                        <div className={styles.profile}>
                            <Profile />
                        </div>
                    </div>
                </Header>
                <Layout className={styles.contentLayout}>
                    <Content className={styles.content}>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Admin;
