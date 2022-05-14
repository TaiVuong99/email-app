import React from "react";
import PropTypes from "prop-types";

import styles from "./Item.module.css";

Item.propTypes = {
  info: PropTypes.object,
};

function Item(props) {
  const { info } = props;

  const formatDate = (date) => {
    const yyyy = date.slice(0, 4);
    const mm = date.slice(5, 7);
    const dd = date.slice(8, 10);
    return `${dd}/${mm}/${yyyy}`;
  };

  return (
    <div
      className={styles.divContainer}
      style={{ backgroundColor: info.unread === true ? "#f2f2f2" : "" }}
    >
      <div className={styles.divAvatar}>
        <div className={styles.divImg}></div>
      </div>

      <div className={styles.divContent}>
        <div className={styles.divInfo}>
          <p>
            {info.senderName.first} {info.senderName.last}
          </p>
          <p>{formatDate(info.date.slice(0, 10))}</p>
        </div>

        <div className={styles.divTitle}>
          <p>{info.subject}</p>
        </div>

        <div className={styles.divBody}>
          <p>{info.body}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
