import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const LogoImage = styled.div`
  display: flex;
  & img {
    max-width: 300px;
  }
`;

export const LogoTitle = styled.div`
  margin: 20px 0;
  & span {
    font-size: 18px;
    color: #969696;
  }
`;

export const LoginForm = styled.form`
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

export const IdInput = styled.input``;

export const PwInput = styled.input``;

export const LoginButtonAndMembership = styled.div`
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
    &:hover {
      opacity: 80%;
    }
  }
  & p {
    margin-top: 40px;
  }
  & span {
    cursor: pointer;
    color: #0a66c2;
    border-bottom: 1px solid #0a66c2;
  }
`;
