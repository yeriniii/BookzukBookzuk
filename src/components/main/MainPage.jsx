import { useSelector } from "react-redux";
import BookCards from "./BookCards";
import { BookList, MainPageeSt, SearchBox } from "./MainPageStyled";
// import { useParams } from "react-router-dom";

const MainPage = () => {
  // 리뷰 리스트
  const lists = useSelector((state) => state.list);
  console.log(lists);
  // 리뷰,추천,중고거래중 하나 가져오기
  // const paams = useParams()
  return (
    <MainPageeSt>
      <SearchBox>
        <input type="text" />
        <button>검색</button>
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
