import styled from "styled-components";
import Logo from "../../assets/bookzuk-logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderBlock>
        <HeaderWrapper>
          <LogoImage onClick={() => navigate(`/`)}>
            <img src={Logo} alt="logo이미지"></img>
          </LogoImage>
          <TabBtn>
            <button>리뷰</button>
            <button>추천</button>
            <button>중고거래</button>
          </TabBtn>
          <ActionBtn>
            <button>찜 목록</button>
            <button onClick={() => navigate(`/write`)}>새 글 작성</button>
          </ActionBtn>
        </HeaderWrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background-color: #01a488;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;
const HeaderWrapper = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  gap: 1rem;
`;
const LogoImage = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
  img {
    width: 100%;
    max-width: 60px;
    height: auto;
  }
`;
const TabBtn = styled.div`
  display: flex;
  gap: 13rem;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 0.9rem;
  }
`;
const ActionBtn = styled.div`
  display: flex;
  gap: 1rem;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 0.9rem;
  }
`;
const Spacer = styled.div`
  height: 8rem;
`;
export default Header;
