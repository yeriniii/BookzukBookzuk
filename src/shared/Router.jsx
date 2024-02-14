import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import WritePost from "../components/write/WritePost";
import Profile from "../components/write/Profile";
import Login from "../components/Login";
import FeedDetail from "../components/FeedDetail";
import CreateAccount from "../components/CreateAccount";
import UsedTradePage from "../components/usedtrade/UsedTradePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Home />} />
        <Route path="/write" element={<WritePost />} />
        <Route path="/mypage" element={<Profile />} />
        <Route path="/Detail/:id" element={<FeedDetail />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/trade" element={<UsedTradePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
