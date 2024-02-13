import Logo from "../../assets/bookzuk-logo.png";
import { Link } from "react-router-dom";
import {
  BookCard,
  BookCardBox,
  BookImg,
  BookTitle,
  Contents,
  UserName,
} from "./MainPageStyled";

// 에러가 뜨는데 작동이 됨;;
const BookCards = ({ list }) => {
  return (
    // Link 라우터 해야힘
    <Link to={"/write"}>
      <BookCard>
        <BookCardBox>
          <BookImg>
            {/* 이미지도 옵션에 넣어여함 */}
            <img src={Logo} />
          </BookImg>
          <BookTitle>{list.책이름}</BookTitle>
          {list.글종류 === "중고거래" ? (
            <Contents>{list.가격}원</Contents>
          ) : (
            <Contents>{list.책내용}</Contents>
          )}
        </BookCardBox>
        <UserName>{list.닉네임}</UserName>
      </BookCard>
    </Link>
  );
};

export default BookCards;
