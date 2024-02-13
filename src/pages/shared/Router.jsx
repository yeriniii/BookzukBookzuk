import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import WritePost from "../../components/write/WritePost";
import LoginPage from "../LoginPage";
import CreateAccount from "../../components/CreateAccount";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<WritePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
