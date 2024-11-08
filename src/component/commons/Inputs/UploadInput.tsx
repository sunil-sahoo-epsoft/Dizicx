


import { Form, Upload } from "antd";
import CustomButton from "../Buttons/CustomButton";
import { useState } from "react";
import styles from "./inputs.module.css";

const UploadInput = (props:any) => {
    const {
        accept,
        name,
        label,
        labelColor = "#143F6B",
        lableFontWeight = "400",
        message,
        text = "Choose File",
        icon,
        size,
        maxCount,
        onChange,
        uploadProps,
        required,
        multiple = false,
        disabled = false,
        valuePropName,
    } = props;

 
    const [fileList, setFileList] = useState([]);


    const dummyRequest = ({ file, onSuccess }:any) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };

    const handleFileChange = ({ fileList }:any) => {
        setFileList(fileList);
        if (onChange) {
            onChange(fileList);
        }
    };

    return (
        <div className={styles.uploadInputContainer}>
            <Form.Item
                name={name}
                rules={[
                    {
                        required: required,
                        message: message,
                    },
                ]}
                label={
                    <span style={{ color: labelColor, fontWeight: lableFontWeight }}>
                        {label}
                        {required && label && <span style={{ color: "red", marginLeft: 4 }}>*</span>}
                    </span>
                }
                required={false}
                valuePropName={valuePropName}
                getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
            >
                <Upload
                    className={styles.upload}
                    accept={accept}
                    {...uploadProps}
                    maxCount={maxCount}
                    multiple={multiple}
                    customRequest={dummyRequest}
                    disabled={disabled}
                    onChange={handleFileChange}
                    fileList={fileList}
                >
                    <div className={styles.uploadContent}>
                        <CustomButton
                            className={styles.uploadButton}
                            size={size}
                            background="#E8ECF1"
                            border={false}
                            borderRadius="0px"
                            color="var(--primary-color)"
                            disabled={disabled}
                            fontWeight={400}
                            icon={icon}
                            text={text}
                            width="30%"
                        />
                        <div className={styles.fileStatus}>
                            {fileList.length === 0 ? (
                                <span className={styles.fileNotChosen}>File not chosen</span>
                            ) : (
                                fileList.map((file:any) => (
                                    <span key={file.uid} className={styles.fileName}>
                                        {file.name}
                                    </span>
                                ))
                            )}
                        </div>
                    </div>
                </Upload>
            </Form.Item>
        </div>
    );
};

export default UploadInput;
