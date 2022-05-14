import React from "react";
import PropTypes from "prop-types";

import styles from "./DetailItem.module.css";

DetailItem.propTypes = {
  detail: PropTypes.object,
};

function DetailItem(props) {
  const { detail } = props;

  // console.log(detail)

  const formatAccount = (str) => {
    return (str.split("<")[1].split(">")[0]);
  };

  const formatDateTime = (dt) => {
      const date = dt.split("T")[0];

      const yyyy = date.split("-")[0];
      const mm = date.split("-")[1];
      const dd = date.split("-")[2];

      const time = dt.split("T")[1].split("+")[0]
      
      return `${time}, ${dd}/${mm}/${yyyy}`
  };

  return (
    <div className={styles.gridContainer}>
      <div className={styles.divColumn}>
        <div className={styles.divContentHeading}>
          <div className={styles.divInfo}>
            <div className={styles.divAvatar}>
              <div className={styles.imgAvatar}></div>
            </div>

            <div className={styles.divAbout}>
              <div className={styles.divName}>
                {detail.senderName.first} {detail.senderName.last}
              </div>
              <div className={styles.divAccount}>
                {formatAccount(detail.from)}
              </div>
            </div>
          </div>

          <div className={styles.divList}>
            <div className={styles.time}>{formatDateTime(detail.date)}</div>
            <div className={styles.listBtn}>
              <button className={styles.btnReply}>Reply</button>
              <button className={styles.btnForward}>Foward</button>
              <button className={styles.btnDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.divColumn}>
        <div className={styles.divContent}>
          <div className={styles.divTitle}>{detail.subject}</div>
          <div className={styles.divBody}>{detail.body}</div>
        </div>
      </div>
    </div>
  );
}

export default DetailItem;
