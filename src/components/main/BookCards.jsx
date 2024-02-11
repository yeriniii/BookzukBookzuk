import Logo from "../../assets/bookzuk-logo.png";
import { Link } from "react-router-dom";
import {
  BookCard,
  BookCardBox,
  BookImg,
  BookTitle,
  ReviewContents,
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
          <ReviewContents>{list.책내용}</ReviewContents>
        </BookCardBox>
        <UserName>{list.닉네임}</UserName>
      </BookCard>
    </Link>
  );
};

export default BookCards;
