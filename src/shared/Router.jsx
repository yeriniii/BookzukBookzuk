import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import WritePost from "../components/write/WritePost";
import Profile from "../components/write/Profile";
import Login from "../components/Login";
import FeedDetail from "../components/FeedDetail";
import CreateAccount from "../components/CreateAccount";
import Header from "../components/layout/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route
          path="/main"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/write"
          element={
            <>
              <Header />
              <WritePost />
            </>
          }
        />
        <Route
          path="/mypage"
          element={
            <>
              <Header />
              <Profile />
            </>
          }
        />
        <Route
          path="/Detail/:id"
          element={
            <>
              <Header />
              <FeedDetail />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
