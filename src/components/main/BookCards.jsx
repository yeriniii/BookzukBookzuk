import styled from "styled-components";
import Logo from "../../assets/bookzuk-logo.png";
import { Link } from "react-router-dom";

const BookCards = () => {
  return (
    // Link 라우터 해야힘
    <Link to={"/write"}>
      <BookList>
        <BookCard>
          <BookCardBox>
            <BookImg>
              <img src={Logo} />
            </BookImg>
            <BookTitle>타이틀</BookTitle>
            <ReviewContents>리뷰내용</ReviewContents>
          </BookCardBox>
          <UserName>닉네임</UserName>
        </BookCard>
      </BookList>
    </Link>
  );
};

export default BookCards;

const BookList = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

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
