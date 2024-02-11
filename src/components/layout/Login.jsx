import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../../redux/modules/actions";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const signUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password);
    console.log("회원가입 완료");
  };

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      dispatch(setUser(userCredential.user));
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async (event) => {
    event.preventDefault();
    try {
      await signOut(auth);
      dispatch(clearUser());
      console.log("로그아웃 완료");
    } catch (error) {
      console.error("로그아웃 에러", error);
    }
  };

  return (
    <div className="App">
      <h2>로그인 페이지</h2>
      <form>
        <div>
          <label>이메일 : </label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={onChange}
            required
          ></input>
        </div>
        <div>
          <label>비밀번호 : </label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={onChange}
            required
          ></input>
        </div>
        <button onClick={signUp}>회원가입</button>
        <button onClick={signIn}>로그인</button>
        <button onClick={logOut}>로그아웃</button>
      </form>
    </div>
  );
}

export default Login;
