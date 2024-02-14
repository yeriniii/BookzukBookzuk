import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Logo from "../../assets/bookzuk-logo.png";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      <HeaderBlock>
        <HeaderWrapper>
          <LogoImage onClick={() => navigate(`/main`)}>
            <img src={Logo} alt="logo이미지"></img>
          </LogoImage>
          <TabBtn>
            <button>리뷰</button>
            <button>추천</button>
            <button>중고거래</button>
          </TabBtn>
          <ActionBtn>
            {user ? (
              <div>
                <button onClick={() => navigate(`/mypage`)}>마이페이지</button>
                <button onClick={() => navigate(`/write`)}>새 글 작성</button>
                <button onClick={() => navigate(`/`)}>로그아웃</button>
              </div>
            ) : (
              <div>
                <button onClick={() => navigate(`/`)}>로그인</button>
                <button onClick={() => navigate(`/signup`)}>회원가입</button>
              </div>
            )}
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
  background-color: #f3eff2;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;
const HeaderWrapper = styled.div`
  max-width: 1200px;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 0 auto;
`;
const LogoImage = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
  img {
    width: 140px;
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
