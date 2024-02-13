import { useSelector } from "react-redux";
import Header from "../layout/Header";
import { useState } from "react";
import { BookList, MainPageeSt, SearchBox } from "../main/MainPageStyled";
import BookCards from "../main/BookCards";

function UsedTradePage() {
  //리뷰리스트
  const lists = useSelector((state) => state.list);

  // 검색기능
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState([...lists]);

  const searchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const searchButton = () => {
    const filteredLists = [...lists].filter((list) =>
      list.책이름.includes(searchText)
    );
    setSearchList(filteredLists);
  };
  return (
    <>
      <Header />
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
          {searchList.map((list) => {
            return list.글종류 === "중고거래" ? (
              <BookCards key={list.id} list={list} />
            ) : null;
          })}
        </BookList>
      </MainPageeSt>
    </>
  );
}

export default UsedTradePage;
