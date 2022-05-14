import React, { useState, createContext } from "react";
import messages from "./messages.json";
import user from "./user.json";

DataProvider.propTypes = {};

function DataProvider(props) {
  const [login, setLogin] = useState(false);

  return (
    <DataContext.Provider value={[login, setLogin, messages, user]}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataProvider;
export const DataContext = createContext();
