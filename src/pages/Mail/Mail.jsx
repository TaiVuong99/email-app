import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faHouse,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/images/connect-logo-white.svg";
import styles from "./Mail.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { DataContext } from "../../DataProvider";
import Item from "../../components/Item/Item";
import DetailItem from "../../components/DetailItem/DetailItem";

function Mail() {
  const global = useContext(DataContext);
  const [, setLogin, messages] = global;

  let location = useLocation();

  const folder = [];

  const [itemList, setItemList] = useState([]);
  const [detail, setDetail] = useState();

  messages.map((message) => {
    if (folder.includes(message.folder) === false) {
      folder.push(message.folder);
    }
  });

  const handleFolderMailClick = (item) => {
    //get folder with item
    const index = folder.indexOf(item);
    const itemArr = messages.filter((message) => message.folder === folder[index]);

    //add random unread
    const newArr = [];
    itemArr.map((i) => {
      let random = Math.floor(Math.random() *2);
      if(random > 0 ) i = { ...i, unread: true };
      if(random === 0) i = { ...i, unread: false };
      newArr.push(i);
    });

    setItemList(newArr);
    setDetail("");
  };

  const handleItemMailClick = (item) => {
    // set read
    let index = itemList.findIndex((i) => i._id === item._id);
    itemList[index] = { ...itemList[index], unread: false };

    setDetail(item);
  };

  return (
    <div className={styles.divContainer}>
      <div className={styles.divContainerTopRight}>
        <div className={styles.divContent}>
          <div>
            Pathname:{" "}
            <span style={{ fontWeight: "600" }}>{location.pathname}</span>
          </div>

          <div className={styles.divContentRight}>
            <div className={styles.divInfoLogin}>
              <h6 className={styles.h6}>Jonathan Kyle</h6>
              <p className={styles.account}>test1@test.com</p>
            </div>

            <div className={styles.divAvatar}></div>

            <FontAwesomeIcon
              className={styles.logoutBtn}
              icon={faPowerOff}
              fixedWidth
              size="sm"
              onClick={() => {
                setLogin(false);
              }}
            />
          </div>
        </div>
      </div>

      <div className={styles.divContainerLeft}>
        <div className={styles.divLogo}>
          <img src={Logo} alt="logo" className={styles.imgLogo} />
        </div>

        <div className={styles.divSidebar}>
          <div className={styles.sidebarParent}>
            <NavLink
              to="/main/home"
              className={({ isActive }) =>
                isActive
                  ? styles.sidebarParentItemActive
                  : styles.sidebarParentItem
              }
            >
              <FontAwesomeIcon icon={faHouse} fixedWidth size="sm" />
            </NavLink>

            <NavLink
              to="/main/mail"
              className={({ isActive }) =>
                isActive
                  ? styles.sidebarParentItemActive
                  : styles.sidebarParentItem
              }
            >
              <FontAwesomeIcon icon={faEnvelope} fixedWidth size="sm" />
            </NavLink>

            <NavLink
              to="/main/contact"
              className={({ isActive }) =>
                isActive
                  ? styles.sidebarParentItemActive
                  : styles.sidebarParentItem
              }
            >
              <FontAwesomeIcon icon={faUser} fixedWidth size="sm" />
            </NavLink>
          </div>

          <div className={styles.sidebarChild}>
            <ul className={styles.list}>
              {folder.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={`/main/mail/${item}`}
                    className={({ isActive }) =>
                      isActive
                        ? styles.sidebarChildItemActive
                        : styles.sidebarChildItem
                    }
                    onClick={() => handleFolderMailClick(item)}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.sidebarParentRest}></div>
      </div>

      <div className={styles.divContainerRight}>
        <div className={styles.infoContainer}>
          {itemList.length === 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontSize: "2rem",
                height: "100%",
              }}
            >
              Please choose a folder
            </div>
          )}

          {itemList.length > 0 && (
            <ul className={styles.list}>
              {itemList.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={`/main/mail/${item.folder}/${item._id}`}
                    className={({ isActive }) =>
                      isActive
                        ? styles.itemMailContainerActive
                        : styles.itemMailContainer
                    }
                    onClick={() => handleItemMailClick(item)}
                  >
                    <Item info={item} />
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.infoFullContainer}>
          {detail == undefined && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2rem",
                height: "100%",
              }}
            >
              Please choose a folder first
            </div>
          )}

          {detail === "" && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2rem",
                height: "100%",
              }}
            >
              Please choose an email
            </div>
          )}

          {detail && <DetailItem detail={detail} />}
        </div>
      </div>
    </div>
  );
}

export default Mail;
