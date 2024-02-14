import Logo from "../assets/bookzuk-logo.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Container,
  LogoImage,
  LogoTitle,
  LoginForm,
  IdInput,
  PwInput,
  LoginButtonAndMembership,
} from "../styles/LoginStyled";

function Login() {
  const navigate = useNavigate();
  const auth = getAuth();

  const [loginID, setLoginID] = useState("");
  const [loginPW, setLoginPW] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginID,
        loginPW
      );
      const user = userCredential.user;
      console.log("로그인 완료:", user);
      alert("로그인이 완료 되었습니다.");
      navigate("/main");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("로그인 오류:", errorCode, errorMessage);
      alert("이메일, 비밀번호를 다시 확인해 주세요.");
    }
    setLoginID("");
    setLoginPW("");
    navigate(`/main`);
  };

  return (
    <Container>
      <LogoImage>
        {" "}
        <img src={Logo} alt="logo이미지"></img>
      </LogoImage>
      <LogoTitle>
        <span>이메일과 비밀번호로 로그인이 가능합니다.</span>
      </LogoTitle>
      <LoginForm>
        <IdInput
          type="email"
          value={loginID}
          name="loginID"
          onChange={(e) => setLoginID(e.target.value)}
          placeholder="이메일"
          required
        ></IdInput>
        <PwInput
          type="password"
          value={loginPW}
          name="loginPW"
          onChange={(e) => setLoginPW(e.target.value)}
          placeholder="비밀번호"
          required
        ></PwInput>
      </LoginForm>
      <LoginButtonAndMembership>
        <button onClick={signIn}>로그인</button>
        <p>
          처음이세요? <span onClick={() => navigate(`/signup`)}>회원가입</span>
        </p>
      </LoginButtonAndMembership>
    </Container>
  );
}

export default Login;
