import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Mail from "./pages/Mail/Mail";
import Another from "./pages/Another/Another";

import "./App.css";
import ProtectRoute from "./components/ProtectRoute/ProtectRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectRoute />}>
          <Route path="main/home" element={<Another />} />
          <Route path="main/mail" element={<Mail />}>
            <Route path=":folder" element={<Mail />}>
              <Route path=":id" element={<Mail/>}></Route>
            </Route>
          </Route>
          <Route path="main/contact" element={<Another />} />
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
