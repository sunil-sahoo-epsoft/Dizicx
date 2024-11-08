import { Form, Input } from "antd";
import styles from "./inputs.module.css";
import TextArea from "antd/es/input/TextArea";
import { RuleObject } from "antd/lib/form";

const TextInput = (props: any) => {
  const {
    name,
    label,
    labelColor = "#143F6B",
    lableFontWeight = "400",
    maxLength,
    required = true,
    textarea,
    rows,
    size,
    color,
    type = "text",
    disabled,
    height = "40px",
    borderRadius = "8px",
    border = "1px solid #DFDFDF",
  } = props;

  const rules: RuleObject[] = [
    { required: required, message: `Please Enter ${label}!` },
    { pattern: /^(?!\s*$).+/, message: `Please Enter ${label}!` },
  ];

  if (type === "email") {
    rules.push({
      validator: (_, value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || emailRegex.test(value)) {
          return Promise.resolve();
        }
        return Promise.reject(new Error("Please enter a valid email address!"));
      },
    });
  }

  return (
    <Form.Item
      name={name}
      label={
        <span style={{ color: labelColor, fontWeight: lableFontWeight }}>
          {label}
          {required && label && (
            <span style={{ color: "red", marginLeft: 4 }}>*</span>
          )}
        </span>
      }
      required={false}
      style={{ width: "100%" }}
      rules={rules}
    >
      {textarea ? (
        <TextArea
          size={size}
          rows={rows}
          maxLength={maxLength}
          className={styles.formInput}
          style={{
            height: height,
            border: border,
            borderRadius: borderRadius,
            color: color,
          }}
        />
      ) : (
        <Input
          size={size}
          className={styles.formInput}
          type={type}
          maxLength={maxLength}
          disabled={disabled}
          style={{
            height: height,
            border: border,
            borderRadius: borderRadius,
            color: color,
          }}
        />
      )}
    </Form.Item>
  );
};

export default TextInput;
