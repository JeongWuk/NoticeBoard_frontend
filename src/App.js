import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Create from "./page/Create";
import CommonLayout from "./layout/CommonLayout";

function App() {
  return (
    <Routes>
      <Route element={<CommonLayout />}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/create"} element={<Create />} />
      </Route>
    </Routes>
  );
}

export default App;
