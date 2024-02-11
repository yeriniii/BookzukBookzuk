import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import WritePost from "../components/write/WritePost";
import Mypage from "../../src/pages/Mypage";
import Login from "../components/layout/Login";
import Header from "../components/layout/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<WritePost />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
