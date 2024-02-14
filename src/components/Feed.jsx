import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../assets/fierbase";

import {
  deleteObject,
  ref,
  getDownloadURL,
  uploadBytes,
  getStorage,
} from "firebase/storage";
import { removePost, updatePost } from "../redux/modules/actions";
import styled from "styled-components";
import { storage } from "../assets/fierbase";
import { updateDoc } from "firebase/firestore";
const Feed = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user.currentUser);
  const posts = useSelector((state) => state.list);
  const selectedPost = posts.find((post) => post.id === id);
  const isOwner = selectedPost.authorId === user.uid;
  const [editing, setEditing] = useState(false); //edit모드 확인
  const [editData, setEditData] = useState({
    ...selectedPost,
    file: null,
    imageUrl: selectedPost.imageUrl,
  });
  const storageService = getStorage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const FeedRef = doc(db, "books", `${id}`);

  const handleDelete = async () => {
    const ok = window.confirm("정말로 삭제하시겠습니까?");
    if (ok) {
      await deleteDoc(FeedRef);
      await deleteObject(ref(storageService, selectedPost.imageUrl));
      navigate(`/main`);
      dispatch(removePost(selectedPost.id));
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditData({ ...editData, file, imageUrl: URL.createObjectURL(file) });
    }
  };
  const formattedDate = new Date(selectedPost.createdAt).toLocaleDateString(
    "ko-KR",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }
  );
  const handleEdit = () => {
    setEditing((prev) => !prev);
  };
  const handleCancelEdit = () => {
    setEditing(false);
    setEditData({
      ...selectedPost,
      file: null,
      imageUrl: selectedPost.imageUrl,
    });
  };
  const submitEdit = async (e) => {
    e.preventDefault();
    const { id, title, content, category, imageUrl } = editData;
    if (!title || !content) {
      alert("제목과 내용은 필수 입력 항목입니다.");
      return;
    }
    if (
      title === selectedPost.title &&
      content === selectedPost.content &&
      category === selectedPost.category &&
      imageUrl === selectedPost.imageUrl
    ) {
      alert("수정사항이 없습니다");
      return;
    }
    try {
      const postRef = doc(db, "books", id);
      let editPost = {
        id,
        title,
        category,
        content,
        createdAt: Date.now(),
      };
      if (editData.file) {
        const imageRef = ref(storage, `${id}/${editData.file.name}`);
        await uploadBytes(imageRef, editData.file);
        const newImageUrl = await getDownloadURL(imageRef);
        editPost = { ...editPost, imageUrl: newImageUrl };
      }
      await updateDoc(postRef, editPost);
      dispatch(updatePost(editPost));

      navigate(`/Detail/${id}`);
      setEditing(false);
    } catch (error) {
      console.error("게시물 수정 중 오류 발생:", error);
    }
  };
  const clickClearImage = async () => {
    setEditData({ ...editData, file: null, imageUrl: null });
  };
  return (
    <FeedContainer>
      {editing ? (
        // 수정 모드인 경우 입력 폼 렌더링
        <EditForm onSubmit={submitEdit}>
          <Title>
            <input
              type="text"
              value={editData.title}
              onChange={(e) =>
                setEditData({ ...editData, title: e.target.value })
              }
            />
          </Title>
          <PostInfo>
            <UserInfo>
              <UserName>{selectedPost.userName}</UserName>
              <CreatedAt>{formattedDate}</CreatedAt>
            </UserInfo>
            <Category>
              <select
                value={editData.category}
                onChange={(e) =>
                  setEditData({ ...editData, category: e.target.value })
                }
              >
                <option>리뷰</option>
                <option>추천</option>
                <option>중고거래</option>
              </select>
            </Category>
          </PostInfo>
          <Image>
            {editData.imageUrl ? (
              <>
                <img src={editData.imageUrl} alt="이미지" />
                <ImgDeleteButton type="button" onClick={clickClearImage}>
                  이미지 삭제
                </ImgDeleteButton>
              </>
            ) : (
              <input type="file" onChange={handleImageChange} />
            )}
          </Image>
          <Content>
            <textarea
              placeholder="내용을 입력해주세요"
              rows="20"
              value={editData.content}
              onChange={(e) =>
                setEditData({ ...editData, content: e.target.value })
              }
            />
          </Content>
          <ButtonContainer>
            <button onClick={submitEdit}>수정완료</button>
            <button onClick={handleCancelEdit}>취소</button>
          </ButtonContainer>
        </EditForm>
      ) : (
        <>
          <FeedHeader>
            <Title>{selectedPost.title}</Title>
            {isOwner && (
              <ButtonContainer>
                <button onClick={handleEdit}>수정</button>
                <button onClick={handleDelete}>삭제</button>
              </ButtonContainer>
            )}
          </FeedHeader>
          <PostInfo>
            <UserInfo>
              <UserName>{selectedPost.userName}</UserName>
              <CreatedAt>{selectedPost.formattedDate}</CreatedAt>
            </UserInfo>
            <Category>카테고리: {selectedPost.category}</Category>
          </PostInfo>
          <Image>
            <img src={selectedPost.imageUrl} alt="이미지" />
          </Image>
          <Content>{selectedPost.content}</Content>
        </>
      )}
    </FeedContainer>
  );
};

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;
const FeedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const Content = styled.div`
  border-top: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 22px;
  border-bottom: 1px solid #ccc;
`;
const PostInfo = styled.div`
  margin-top: 25px;
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  justify-content: space-between;
`;
const Image = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const UserInfo = styled.div`
  display: flex;
`;
const UserName = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-right: 15px;
`;

const CreatedAt = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;
const Category = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: gray;
  margin-bottom: 10px;
`;
const ButtonContainer = styled.div`
  display: flex;
  button {
    border: none;
    border-radius: 40px;
    padding: 10px;
    cursor: pointer;
  }
  button:nth-child(1) {
    margin-right: 7px;
  }
  button:nth-child(1):hover {
    background-color: #00966e;
    color: white;
  }
  button:nth-child(2):hover {
    background-color: tomato;
    color: white;
  }
`;
const EditForm = styled.form`
  input {
    border: none;
    font-size: 50px;
    font-weight: bold;
  }
  textarea {
    border: none;
    width: 100%;
    font-size: 22px;
  }
`;
const ImgDeleteButton = styled.button`
  border: none;
  border-radius: 40px;
  padding: 10px;
  cursor: pointer;
  margin-top: 8px;
  &:hover {
    color: white;
    background-color: tomato;
  }
`;
export default Feed;
