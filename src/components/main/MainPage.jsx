import styled from "styled-components";
import { useSelector } from "react-redux";
import BookCards from "./BookCards";

const MainPage = () => {
  // 리뷰 리스트
  const lists = useSelector((state) => state.list);
  console.log(lists);
  return (
    <MainPageeSt>
      <SearchBox>
        <input type="text" />
        <button>검색</button>
      </SearchBox>
      <BookList>
        {lists.map((list) => (
          <BookCards key={list.id} list={list} />
        ))}
      </BookList>
    </MainPageeSt>
  );
};

export default MainPage;

const MainPageeSt = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const SearchBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const BookList = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
