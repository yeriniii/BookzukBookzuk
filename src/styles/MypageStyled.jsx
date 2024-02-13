import styled from "styled-components";

export const ProfileBodyStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 32px;
    margin: 20px 0;
    font-weight: 600;
  }
`;

export const ProfileGroupStyle = styled.div`
  display: flex;
  img {
    width: 150px;
    margin: 10px;
  }
`;

export const ProfileImgStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileUserInfoSytle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`;

export const ProfileNicknameStyle = styled.p`
  font-size: 24px;
`;

export const ProfileInputStyle = styled.label`
  padding: 10px 20px;
  border: 1px solid var(--grey-color);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: var(--grey-color);
  }
`;
export const ProfileButtonStyle = styled.button`
  font-size: 16px;
  background-color: var(--main-color);
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
  &:hover {
    opacity: 80%;
  }
`;
