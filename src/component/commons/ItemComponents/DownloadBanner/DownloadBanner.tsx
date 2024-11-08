import styles from "./downloadbanner.module.css";
import downloadBackground from "../../../../assets/images/setupfx_download_background.svg";
const DownloadBanner = () => {
  return (
    <div className={styles.downloadbanner_container}>
      <img
        src={downloadBackground}
        alt="download"
        className={styles.downloadImage}
      />
    </div>
  );
};

export default DownloadBanner;
