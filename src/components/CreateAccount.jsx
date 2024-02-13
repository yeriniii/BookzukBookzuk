import styled from "styled-components";
import Logo from "../assets/bookzuk-logo.png";
import { useState } from "react";
import { auth } from "firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
function CreateAccount() {
  const [userEmail, setUserEmail] = useState("");
  const [userPW, setUserPW] = useState("");
  const [userPW2, setUserPW2] = useState("");
  const [userName, setUserName] = useState("");

  const onChangeSet = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "userEmail") {
      setUserEmail(value);
    }
    if (name === "userPW") {
      setUserPW(value);
    }
  };

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userEmail, userPW)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <Container>
      <LogoImage>
        {" "}
        <img src={Logo} alt="logo이미지"></img>
      </LogoImage>
      <LogoTitle>
        <p>북적북적</p>
        <span>회원가입</span>
      </LogoTitle>
      <LoginForm>
        <p>이메일</p>
        <IdInput
          type="email"
          value={userEmail}
          name="email"
          onChange={onChangeSet}
          required
        ></IdInput>
        <p>비밀번호</p>
        <IdInput
          type="password"
          value={userPW}
          name="password"
          onChange={onChangeSet}
          required
        ></IdInput>
        <p>비밀번호확인</p>
        <IdInput type="password"></IdInput>
        <p>닉네임</p>
        <PwInput></PwInput>
      </LoginForm>
      <LoginButtonAndMembership>
        <button onClick={signUp}>회원가입</button>
        <p>이미 회원이세요? 로그인</p>
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
`;

export default CreateAccount;
