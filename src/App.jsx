import Router from "./shared/Router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../src/redux/modules/actions";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cancelLogin = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user)); //사용자가 로그인한 경우, 사용자 정보를 redux에 저장
      } else {
        dispatch(clearUser()); //사용자가 로그아웃한 경우, 사용자 정보를 redux에서 제거
      }
    });

    // 로그인 상태를 해제하는 함수를 반환
    return () => cancelLogin();
  }, [dispatch]);

  return <Router></Router>;
};

export default App;
