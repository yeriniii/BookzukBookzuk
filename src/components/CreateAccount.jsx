import Logo from "../assets/bookzuk-logo.png";
import { useState } from "react";
import { setUser } from "../redux/modules/actions";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
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
import { useDispatch, useSelector } from "react-redux";
import { showModal, hideModal } from "../redux/modules/actions";
import ValidationModal from "./layout/ValidationModal";

function CreateAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [userPW, setUserPW] = useState("");
  const [userName, setUserName] = useState("");
  const { isVisible, message } = useSelector((state) => state.modal);
  const [signupSuccess, setSignupSuccess] = useState(false);

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

  // 이메일 유효성 검사 함수
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net)$/;
    return emailRegex.test(email);
  };

  const signUp = async (e) => {
    e.preventDefault();
    // 닉네임 길이 검사
    if (userName.length < 2) {
      alert("닉네임은 최소 2글자 이상이어야 합니다.");
      return;
    }
    // 이메일 유효성 검사
    if (!isEmailValid(userEmail)) {
      alert("올바른 이메일 주소를 입력하세요.");
      return;
    }
    // 비밀번호 길이 검사
    if (userPW.length < 6) {
      alert("비밀번호는 최소 6글자 이상이어야 합니다.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPW
      );
      await updateProfile(userCredential.user, {
        displayName: userName,
      });
      dispatch(
        setUser({
          ...userCredential.user,
          displayName: userName, // Redux 스토어에도 닉네임 정보 추가
        })
      );
      setSignupSuccess(true);
      dispatch(
        showModal({
          message: "회원가입이 완료 되었습니다.",
        })
      );
    } catch (error) {
      setSignupSuccess(false);
      dispatch(
        showModal({
          message: "회원가입이 실패했습니다.",
        })
      );
    }
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
      {isVisible && (
        <ValidationModal
          isVisible={isVisible}
          message={message}
          onCancel={() => dispatch(hideModal())}
          onConfirm={() => {
            dispatch(hideModal());
            if (signupSuccess) {
              navigate(`/login`);
            }
          }}
          showCancelButton={false}
        />
      )}
    </Container>
  );
}

export default CreateAccount;
