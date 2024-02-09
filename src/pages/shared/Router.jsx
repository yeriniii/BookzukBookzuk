import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import WritePage from "../write/WritePage";
import Header from "../../components/layout/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
