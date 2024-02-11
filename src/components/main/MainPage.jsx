import { useDispatch, useSelector } from "react-redux";
import BookCards from "./BookCards";
import { BookList, MainPageeSt, SearchBox } from "./MainPageStyled";
import { useState } from "react";
import { searchedBooks } from "../../pages/shared/redux/modules/list";
// import { useParams } from "react-router-dom";

const MainPage = () => {
  // 리뷰 리스트
  const lists = useSelector((state) => state.list);
  console.log(lists);
  const dispatch = useDispatch();
  // 리뷰,추천,중고거래중 하나 가져오기
  // const paams = useParams()

  const [searchText, setSearchText] = useState("");

  const searchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const searchButton = () => {
    const filteredLists = lists.filter((list) =>
      list.책이름.includes(searchText)
    );
    dispatch(searchedBooks(filteredLists));
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
        {/* {가져온데이터 === "리뷰"
          ? lists.map((list) => {
              if (list.글종류 === "리뷰" || list.글종류 === "추천") {
                return <BookCards key={list.id} list={list} />;
              }}) :
              lists.filter((list) => list.글종류 === "추천")
              .map((list) => <BookCards key={list.id} list={list} />)} */}

        {lists.map((list) => {
          return list.글종류 === "추천" || list.글종류 === "리뷰" ? (
            <BookCards key={list.id} list={list} />
          ) : null;
        })}
      </BookList>
    </MainPageeSt>
  );
};

export default MainPage;
