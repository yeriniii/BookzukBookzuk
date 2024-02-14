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
import { setUser } from "../redux/modules/actions";
import { useDispatch, useSelector } from "react-redux";
import { showModal, hideModal } from "../redux/modules/actions";
import ValidationModal from "./layout/ValidationModal";

function Login() {
  const navigate = useNavigate();
  const auth = getAuth();
  const dispatch = useDispatch();
  const { isVisible, message } = useSelector((state) => state.modal);
  const [loginID, setLoginID] = useState("");
  const [loginPW, setLoginPW] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginID,
        loginPW
      );
      setLoginSuccess(true);
      const user = userCredential.user;
      dispatch(setUser(user));
      dispatch(
        showModal({
          message: "로그인이 완료 되었습니다.",
        })
      );
    } catch (error) {
<<<<<<< HEAD
      alert("이메일, 비밀번호를 다시 확인해 주세요.");
=======
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("로그인 오류:", errorCode, errorMessage);
      setLoginSuccess(false);
      dispatch(
        showModal({
          message: "이메일, 비밀번호를 다시 확인해 주세요.",
        })
      );
>>>>>>> 86b0c353c8df37f720b24541a9455546e0a4ff89
    }
    setLoginID("");
    setLoginPW("");
  };

  return (
    <Container>
      <LogoImage>
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
      {isVisible && (
        <ValidationModal
          isVisible={isVisible}
          message={message}
          onCancel={() => dispatch(hideModal())}
          onConfirm={() => {
            dispatch(hideModal());
            if (loginSuccess) {
              navigate("/main"); // 로그인 성공 시에만 navigate 실행
            }
          }}
          showCancelButton={false}
        />
      )}
    </Container>
  );
}

export default Login;
