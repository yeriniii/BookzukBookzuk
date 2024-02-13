import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Logo from "../../assets/bookzuk-logo.png";
import { tabClick } from "../../redux/modules/headerReducer";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  // 헤더 리뷰,추천,중고거래 선택
  const haaderBox = useSelector((state) => state.headerName);
  console.log(haaderBox);
  const handleTabClick = (tabName) => {
    dispatch(tabClick(tabName));
    navigate(`/main`);
  };
  const tradeBtton = (tabName) => {
    dispatch(tabClick(tabName));
    navigate("/trade");
  };
  return (
    <>
      <HeaderBlock>
        <HeaderWrapper>
          <LogoImage onClick={() => navigate(`/main`)}>
            <img src={Logo} alt="logo이미지"></img>
          </LogoImage>
          <TabBtn>
            <button
              value={"리뷰"}
              selected={"리뷰" === haaderBox}
              onClick={() => handleTabClick("리뷰")}
            >
              리뷰
            </button>
            <button
              value={"추천"}
              onClick={() => handleTabClick("추천")}
              selected={"추천" === haaderBox}
            >
              추천
            </button>
            <button
              onClick={() => tradeBtton("중고거래")}
              selected={"추천" === haaderBox}
            >
              중고거래
            </button>
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
                <button onClick={() => navigate(`/login`)}>로그인</button>
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
  justify-content: center;
  gap: 1.5rem;
  height: 70%;
  button {
    border: 1px solid green;
    border-radius: 5px;
    background-color: ${(props) => {
      console.log(props.selected);
      props.selected ? "yellow" : "transparent";
    }};
    cursor: pointer;
    font-size: 1.2rem;
    width: 130px;
    &:hover {
      background-color: yellow;
    }
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
