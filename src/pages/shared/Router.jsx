import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import WritePost from "../../components/write/WritePost";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<WritePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
