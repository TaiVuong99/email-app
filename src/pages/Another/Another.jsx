import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faHouse,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/images/connect-logo-white.svg";
import styles from "./Another.module.css";
import { NavLink, useLocation} from "react-router-dom";
import { DataContext } from "../../DataProvider";


function Dashboard() {
  const global = useContext(DataContext);
  const [, setLogin] = global;
  let location = useLocation();

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

          <div className={styles.sidebarChild}>Construction</div>
        </div>
        <div className={styles.sidebarParentRest}></div>
      </div>
      <div className={styles.divContainerRight}>
        <div className={styles.imgNo}>
          <img src="https://fa-react-email-app.vercel.app/static/media/under-construction.ad9fbf48.png" alt="construction"></img>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
