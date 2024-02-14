import { useSelector } from "react-redux";
import BookCards from "./BookCards";
import { BookList, MainPageeSt, SearchBox } from "./MainPageStyled";
import { useEffect, useState } from "react";

const MainPage = () => {
  // 리뷰 리스트
  const lists = useSelector((state) => state.list);
  // 리뷰,추천,중고거래중 하나 가져오기
  const selectedCategory = useSelector((state) => state.headerName);

  // 검색기능
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState([...lists]);

  useEffect(() => {
    setSearchList([...lists]);
  }, [selectedCategory, lists]);

  const searchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const searchButton = () => {
    const filteredLists = [...lists].filter((list) =>
      list.title
        .replace(/(\s*)/g, "")
        .includes(searchText.replace(/(\s*)/g, ""))
    );
    setSearchList(filteredLists);
    setSearchText("");
  };

  return (
    <MainPageeSt>
      <SearchBox>
        <input
          type="text"
          placeholder="책이름을 입력해 주세요"
          value={searchText}
          onChange={searchInputChange}
        />
        <button onClick={searchButton}>검색</button>
      </SearchBox>
      <BookList>
        {searchList
          .filter((list) => list.category === selectedCategory)
          .map((list) => (
            <BookCards key={list.id} list={list} />
          ))}
      </BookList>
    </MainPageeSt>
  );
};

export default MainPage;
