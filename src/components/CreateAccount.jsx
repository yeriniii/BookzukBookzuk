import Logo from "../assets/bookzuk-logo.png";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../assets/fierbase";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LogoImage,
  LogoTitle,
  LoginForm,
  IdInput,
  PwInput,
  LoginButtonAndMembership,
} from "../styles/LoginStyled";

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
        navigate("/");
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
        <span>회원가입</span>
      </LogoTitle>
      <LoginForm>
        <PwInput
          type="text"
          value={userName}
          name="userName"
          onChange={onChangeSet}
          placeholder="닉네임"
          required
        ></PwInput>
        <IdInput
          type="email"
          value={userEmail}
          name="userEmail"
          onChange={onChangeSet}
          placeholder="이메일"
          required
        ></IdInput>
        <IdInput
          type="password"
          value={userPW}
          name="userPW"
          onChange={onChangeSet}
          placeholder="비밀번호"
          required
        ></IdInput>
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

export default CreateAccount;
