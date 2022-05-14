import React from "react";
import { useForm } from "react-hook-form";

import styles from "./FormLogin.module.css";

import PropTypes from "prop-types";

FormLogin.propTypes = {
  check: PropTypes.bool,
  pass: PropTypes.string,
  onSubmitData: PropTypes.func,
};

FormLogin.defaultProps = {
  onSubmitData: null,
};

function FormLogin(props) {
  const { check, pass, onSubmitData } = props;

  let formValues = {};

  const { register, handleSubmit } = useForm();

  const handleData = (data) => {
    formValues = { ...data };
    if (onSubmitData) {
      onSubmitData(formValues);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleData)}>
      <div className={styles.divGrid}>
        <div className={styles.divColumn}>
          <div>
            <label className={styles.label}>Email</label>
            <select
              {...register("category")}
              style={{ borderColor: check === false ? "#EF4444" : "" }}
              className={styles.input}
            >
              <option value="">------Choose an email</option>
              <option value="test1@test.com">test1@test.com</option>
            </select>
          </div>
        </div>

        <div className={styles.divColumn}>
          <div>
            <label className={styles.label}>Password</label>
            <input
              {...register("password")}
              type="password"
              defaultValue={pass}
              style={{ borderColor: check === false ? "#EF4444" : "" }}
              className={styles.input}
            ></input>
          </div>
          {check === false && (
            <div className={styles.notice}>Wrong email or password !!</div>
          )}
        </div>
        <div className={styles.divColumn} style={{ marginTop: ".75rem" }}>
          <input type="submit" value="Login" className={styles.button}></input>
        </div>
      </div>
    </form>
  );
}

export default FormLogin;
