import React, { useContext } from "react";
import { DataContext } from "../../DataProvider";
import { Navigate, Outlet} from "react-router-dom";

ProtectRoute.propTypes = {};

function ProtectRoute(props) {
  const global = useContext(DataContext);
  const [login] = global;

  return <>{login === true ? <Outlet /> : <Navigate to="/" />}</>;
}

export default ProtectRoute;
