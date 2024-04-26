import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Create from "./page/Create";
import CommonLayout from "./layout/CommonLayout";
import Detail from "./page/Detail";
import Login from "./page/Login";
import Signup from "./page/Signup";

function App() {
  return (
    <Routes>
      <Route element={<CommonLayout />}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/create"} element={<Create />} />
        <Route path={"/detail/:id"} element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
