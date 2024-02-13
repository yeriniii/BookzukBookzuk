import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import WritePost from "../components/write/WritePost";
import Profile from "../components/write/Profile";
import Login from "../components/Login";
import Header from "../components/layout/Header";
import CreateAccount from "../components/CreateAccount";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<WritePost />} />
        <Route path="/mypage" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
