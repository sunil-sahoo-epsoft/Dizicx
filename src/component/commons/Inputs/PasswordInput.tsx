import { Form, Input } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import styles from "./inputs.module.css";
import { CSSProperties } from "react";

const PasswordInput = (props: any) => {
  const {
    name,
    label,
    labelColor = "#143F6B",
    lableFontWeight = "400",
    maxLength,
    required = true,
    size,
    dependencies,
    color = "var(--primary-color)",
    height = "40px",
    borderRadius = "8px",
    border = "1px solid #383838",
    passwordIconColor = "#143F6B",
  } = props;

  const iconStyle: CSSProperties = { color: passwordIconColor };

  return (
    <Form.Item
      name={name}
      label={
        <span style={{ color: labelColor, fontWeight: lableFontWeight }}>
          {label}
          {required && <span style={{ color: "red", marginLeft: 4 }}>*</span>}
        </span>
      }
      required={false}
      dependencies={dependencies}
      rules={[
        { required: required, message: `Please Enter ${label}!` },
        {
          pattern: /^(?!\s*$).+/,
          message: `Please Enter ${label}!`,
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!dependencies) {
              return Promise.resolve();
            }
            if (!value || getFieldValue("new_password") === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error("Passwords do not match!"));
          },
        }),
      ]}
    >
      <Input.Password
        size={size}
        className={styles.formInput}
        style={{ border: border, borderRadius: borderRadius, height: height , color:color}}
        maxLength={maxLength}
        iconRender={(visible) =>
          visible ? (
            <EyeOutlined style={iconStyle} />
          ) : (
            <EyeInvisibleOutlined style={iconStyle} />
          )
        }
      />
    </Form.Item>
  );
};

export default PasswordInput;
