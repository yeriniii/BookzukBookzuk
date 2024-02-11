import styled from "styled-components";
import Logo from "../../assets/bookzuk-logo.png";
import { Link } from "react-router-dom";

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

const BookCard = styled.article`
  height: 300px;
  width: 200px;
  padding: 20px;
  border: 1px solid black;
  box-shadow: 3px 3px 3px black;
  p {
    color: black;
  }
`;

const BookCardBox = styled.div`
  height: 250px;
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BookImg = styled.div`
  display: flex;
  align-items: center;
  height: 150px;
  width: 150px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const BookTitle = styled.p`
  max-width: 150px;
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ReviewContents = styled.p`
  max-width: 150px;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserName = styled.p`
  max-width: 150px;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: right;
`;
