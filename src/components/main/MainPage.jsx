import styled from "styled-components";
import BookCards from "./BookCards";

const MainPage = () => {
  return (
    <MainPageeSt>
      <SearchBox>
        <input type="text" />
        <button>검색</button>
      </SearchBox>
      <BookCards />
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
