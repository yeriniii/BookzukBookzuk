import styled from "styled-components";
import Logo from "../assets/bookzuk-logo.png";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
function CreateAccount() {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPW, setUserPW] = useState("");
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
    if (name === "userName") {
      setUserName(value);
    }
  };

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userEmail, userPW)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("회원가입이 완료 되었습니다.");
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("회원가입 오류:", errorCode, errorMessage);
        alert("올바르지 않은 이메일, 비밀번호 입니다.");
      });
    setUserEmail("");
    setUserPW("");
    setUserName("");
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
          name="userEmail"
          onChange={onChangeSet}
          required
        ></IdInput>
        <p>비밀번호</p>
        <IdInput
          type="password"
          value={userPW}
          name="userPW"
          onChange={onChangeSet}
          required
        ></IdInput>
        <p>닉네임</p>
        <PwInput
          type="text"
          value={userName}
          name="userName"
          onChange={onChangeSet}
          required
        ></PwInput>
      </LoginForm>
      <LoginButtonAndMembership>
        <button onClick={signUp}>회원가입</button>
        <p>
          이미 회원이세요?{" "}
          <span onClick={() => navigate(`/login`)}>로그인</span>
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
  margin-left: -10px;
  & img {
    width: 450px;
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
  & span {
    cursor: pointer;
    color: #0a66c2;
    border-bottom: 1px solid #0a66c2;
  }
`;

export default CreateAccount;
