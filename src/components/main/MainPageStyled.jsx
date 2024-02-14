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
  width: 50%;
  input {
    width: 80%;
    border: none;
    border-bottom: 2px solid black;
  }
  button {
    width: 70px;
    border: none;
    border-radius: 30px;
    padding: 10px;
    font-weight: bold;

    &:hover {
      background-color: #00966e;
      color: white;
    }
  }
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
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  p {
    color: black;
  }
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
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

export const Contents = styled.p`
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
