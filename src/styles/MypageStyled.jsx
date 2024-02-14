import styled from "styled-components";

export const ProfileBodyStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 30px;
    margin: 20px 0;
    font-weight: 600;
  }
`;

export const ProfileGroupStyle = styled.div`
  display: flex;
  img {
    width: 150px;
    height: 150px;
    margin: 10px;
  }
`;

export const ProfileImgStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ProfileUserInfoSytle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  gap: 10px;
`;

export const ProfileNicknameStyle = styled.p`
  font-size: 24px;
`;

export const ProfileInputStyle = styled.label`
  width: 140px;
  text-align: center;
  padding: 10px 0;
  border: 1px solid var(--grey-color);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 80%;
  }
`;
export const ProfileButtonStyle = styled.button`
  font-size: 16px;
  background-color: ${(props) => props.$bgColor || "var(--main-color)"};
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 0;
  width: 140px;
  text-align: center;
  &:hover {
    opacity: 80%;
  }
`;

export const ProfilePostsStyle = styled.div`
  margin-top: 50px;
  flex-wrap: wrap;
  h2 {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const ProfilePostCardsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ProfilePostCardStyle = styled.div`
  width: 200px;
  height: 260px;
  min-height: 250px;
  border: 1px solid var(--grey-color);
  border-radius: 10px;
  padding: 20px;

  img {
    width: 150px;
    height: 150px;
  }
  h3 {
    margin-top: 10px;
    font-weight: bold;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    margin-top: 10px;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
