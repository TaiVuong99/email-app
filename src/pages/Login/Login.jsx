import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/images/connect-logo-black.svg";
import FormLogin from "../../components/FormLogin/FormLogin";
import { DataContext } from "../../DataProvider";

import styles from "./Login.module.css";

function Login() {
  const PASS_DEFAULT = `test@test`;
  const ACCOUNT = "test1@test.com";

  const global = useContext(DataContext);
  const [, setLogin, ] = global;

  let navigate = useNavigate();
  const [check, setCheck] = useState();

  const hanldeSubmitData = (form) => {
    if (form.category === "" || form.password !== PASS_DEFAULT) {
      setCheck(false);
    }

    if (form.category === ACCOUNT && form.password === PASS_DEFAULT) {
      setLogin(true)
      setCheck(true);
      alert("Login Succesful !");
      navigate("/main/mail", { state: form.category });
    }
  };

  return (
    <div className={styles.divContainer}>
      <div className={styles.divContent}>
        <div className={styles.divGrid}>
          <div className={styles.divColumn}>
            <div className={styles.divFlex}>
              <div className={styles.divFlexImg}>
                <img src={Logo} alt="connect-logo" />
              </div>
              <div className={styles.divFlexContent}>
                Login to check your email!!
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divGrid}>
          <div className={styles.divColumn}>
            <FormLogin
              onSubmitData={hanldeSubmitData}
              check={check}
              pass={PASS_DEFAULT}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
