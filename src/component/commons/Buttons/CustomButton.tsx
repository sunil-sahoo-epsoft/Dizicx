import { Button } from "antd";
import styles from "./custombutton.module.css";

const CustomButton = (props: any) => {
  const {
    icon,
    size,
    text,
    onClick,
    type,
    width,
    loading,
    disabled,
    htmlType,
    height = "40px",
    padding = "12px 20px",
    background = "#143F6B",
    color = "#fff",
    borderRadius = "4px",
    border,
    fontWeight = "600",
    fontSize = "16px",
  } = props;
  return (
    <>
      <Button
        size={size}
        icon={icon ? icon : null}
        style={{
          padding: padding,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: width,
          height: height,
          background: background,
          color: color,
          borderRadius: borderRadius,
          border: border,
        }}
        className={styles.customeButton}
        loading={loading}
        disabled={disabled}
        type={type}
        onClick={onClick}
        htmlType={htmlType}
      >
        <p
          style={{
            margin: "0px",
            fontWeight: fontWeight,
            fontSize: fontSize,
            color: color,
          }}
        >
          {text}
        </p>
      </Button>
    </>
  );
};

export default CustomButton;
