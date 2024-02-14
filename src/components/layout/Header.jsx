import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Logo from "../../assets/bookzuk-logo.png";
import { tabClick } from "../../redux/modules/headerReducer";
import { clearUser } from "../../redux/modules/actions";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  // 헤더 리뷰,추천,중고거래 선택
  const headerBox = useSelector((state) => state.headerName);
  const handleTabClick = (tabName) => {
    dispatch(tabClick(tabName));
    navigate(`/main`);
  };
  const tradeBtton = (tabName) => {
    dispatch(tabClick(tabName));
    navigate("/trade");
  };
  const goHome = (tabName) => {
    dispatch(tabClick(tabName));
    navigate(`/main`);
  };

  // 로그아웃 기능
  const handleLogout = () => {
    console.log("로그아웃", user);
    dispatch(clearUser());
    alert("로그아웃이 완료 되었습니다.");
    navigate("/");
  };
  console.log("로그인 후 유저정보 확인", user);
  return (
    <>
      <HeaderBlock>
        <HeaderWrapper>
          <LogoImage onClick={() => goHome("리뷰")}>
            <img src={Logo} alt="logo이미지"></img>
          </LogoImage>
          <TabBtn>
            <SelectedButtons
              value={"리뷰"}
              selected={"리뷰" === headerBox}
              onClick={() => handleTabClick("리뷰")}
            >
              리뷰
            </SelectedButtons>
            <SelectedButtons
              value={"추천"}
              onClick={() => handleTabClick("추천")}
              selected={"추천" === headerBox}
            >
              추천
            </SelectedButtons>
            <SelectedButtons
              onClick={() => tradeBtton("중고거래")}
              selected={"중고거래" === headerBox}
            >
              중고거래
            </SelectedButtons>
          </TabBtn>
          <ActionBtn>
            {user ? (
              <div>
                <button onClick={() => navigate(`/mypage`)}>마이페이지</button>
                <button onClick={() => navigate(`/write`)}>새 글 작성</button>
                <button onClick={handleLogout}>로그아웃</button>
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
  justify-content: center;
  gap: 1.5rem;
  height: 70%;
`;
const SelectedButtons = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? "#00966e" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "black")};
  cursor: pointer;
  font-size: 1.2rem;
  width: 130px;
  transition: transform 0.1s ease-in-out;
  &:hover {
    background-color: #00966e;
    color: white;
    transform: scale(1.05);
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
