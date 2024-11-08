import { Form, Select } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./inputs.module.css";

const SelectInput = (props: any) => {
  const {
    name,
    label,
    required = true,
    lableFontWeight = "400",
    option,
    showSearch,
    disabled,
    size,
    multiple,
    onChange,
    optionFilterProp,
    borderRadius = "8px",
    color = "var(--primary-color)",
    height = "40px",
    border = "1px solid #DFDFDF",
    background,
    iconColor = "#143F6B",
    iconSize = "12px",
    labelColor = "#143F6B",
  } = props;

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
      rules={[{ required: required, message: `Please Select ${label}!` }]}
    >
      <Select
        mode={multiple && "multiple"}
        size={size}
        options={option}
        className={styles.formInput}
        style={
          {
            borderRadius: borderRadius,
            "--border-style": border,
            background: background,
            height: height,
            color: color,
          } as { [key: string]: string | number }
        }
        showSearch={showSearch}
        onChange={onChange}
        maxTagCount="responsive"
        disabled={disabled}
        optionFilterProp={optionFilterProp}
        filterOption={(input, option: any) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        suffixIcon={
          <DownOutlined style={{ fontSize: iconSize, color: iconColor }} />
        }
      />
    </Form.Item>
  );
};

export default SelectInput;
