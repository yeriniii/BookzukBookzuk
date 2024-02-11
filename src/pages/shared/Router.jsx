import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import WritePost from "../../components/write/WritePost";
import UsedTradePage from "../../components/usedtrade/UsedTradePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<WritePost />} />
        <Route path="/usedtrade" element={<UsedTradePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
