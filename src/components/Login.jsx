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
      console.log("Successfully signed in:", user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing in:", errorCode, errorMessage);
    }
    setLoginID("");
    setLoginPW("");
  };

  return (
    <Container>
      <LogoImage>
        {" "}
        <img src={Logo} alt="logo이미지"></img>
      </LogoImage>
      <LogoTitle>
        <p>북적북적</p>
        <span>로그인</span>
      </LogoTitle>
      <LoginForm>
        <p>이메일</p>
        <IdInput></IdInput>
        <p>비밀번호</p>
        <PwInput type="password"></PwInput>
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
  background-color: #00966e;
  width: 70%;
  height: 100%;
  margin: auto;
`;

const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  margin-left: 70px;
  & img {
    width: 300px;
    height: 300px;
    margin-top: 40px;
  }
`;

const LogoTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  margin-top: -30px;
  & p {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  & span {
    font-size: 25px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin: auto;
  padding: 20px;
`;

const IdInput = styled.input`
  width: 400px;
  padding: 5px;
  margin: 5px 0 20px 0;
  & p {
    align-items: normal;
  }
`;

const PwInput = styled.input`
  width: 400px;
  padding: 5px;
  margin-top: 5px;
`;

const LoginButtonAndMembership = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  & button {
    width: 100px;
    margin-bottom: 10px;
  }
  & span {
    cursor: pointer;
    color: #0a66c2;
    border-bottom: 1px solid #0a66c2;
  }
`;

export default Login;
