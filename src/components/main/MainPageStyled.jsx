import styled from "styled-components";

export const MainPageeSt = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const SearchBox = styled.div`
  display: flex;
  gap: 1rem;
`;

export const BookList = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const BookCard = styled.article`
  height: 300px;
  width: 200px;
  padding: 20px;
  border: 1px solid black;
  box-shadow: 3px 3px 3px black;
  p {
    color: black;
  }
`;

export const BookCardBox = styled.div`
  height: 250px;
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BookImg = styled.div`
  display: flex;
  align-items: center;
  height: 150px;
  width: 150px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const BookTitle = styled.p`
  max-width: 150px;
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ReviewContents = styled.p`
  max-width: 150px;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserName = styled.p`
  max-width: 150px;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: right;
`;
