import styled from "styled-components";
import Logo from "../assets/bookzuk-logo.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const LogoImage = styled.div`
  display: flex;
  & img {
    max-width: 300px;
  }
`;

const LogoTitle = styled.div`
  margin: 20px 0;
  & span {
    font-size: 18px;
    color: #969696;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 450px;
  align-items: center;
  gap: 15px;
  input {
    width: 400px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #c7c7c7;
    font-size: 16px;
    padding-left: 20px;
  }
  input::placeholder {
    color: #c7c7c7;
  }
`;

const IdInput = styled.input``;

const PwInput = styled.input``;

const LoginButtonAndMembership = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  & button {
    width: 400px;
    padding: 10px 30px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: var(--main-color);
    color: white;
    font-size: 18px;
  }
  & p {
    margin-top: 30px;
  }
  & span {
    cursor: pointer;
    color: #0a66c2;
    border-bottom: 1px solid #0a66c2;
  }
`;

export default Login;
