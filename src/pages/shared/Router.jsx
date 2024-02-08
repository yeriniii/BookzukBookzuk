import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import WritePost from "../../components/write/WritePost";
import Mypage from "../Mypage";
import Login from "../../components/layout/Login";

const Router = () => {
  return (
    <BrowserRouter>
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
