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
    <Link to={`/Detail/${list.id}`}>
      <BookCard>
        <BookCardBox>
          <BookImg>
            {/* 이미지도 옵션에 넣어여함 */}
            <img src={list.imageUrl} />
          </BookImg>
          <BookTitle>{list.title}</BookTitle>
          {list.글종류 === "중고거래" ? (
            // 아직 금액 없음
            <Contents>{list.id}원</Contents>
          ) : (
            <Contents>{list.content}</Contents>
          )}
        </BookCardBox>
        <UserName>{list.userName}</UserName>
      </BookCard>
    </Link>
  );
};

export default BookCards;
