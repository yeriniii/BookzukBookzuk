import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../assets/fierbase";
import { getStorage } from "firebase/storage";
import { deleteObject, ref } from "firebase/storage";
import { removePost } from "../redux/modules/actions";

const Feed = ({ FeedObj, isOwner }) => {
  const { id } = useParams();
  const {
    title,
    content,
    userName,
    category,
    createdAt,
    imageUrl,
    createorId,
  } = FeedObj;
  const FeedRef = doc(db, "books", `${id}`);
  const storageService = getStorage();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const ok = window.confirm("Are you sure?");
    if (ok) {
      await deleteDoc(FeedRef);
      await deleteObject(ref(storageService, imageUrl));
      navigate(`/`);
      dispatch(removePost(id));
    }
  };

  const handleEdit = () => {
    // 수정 로직 구현
  };
  return (
    <div>
      <img src={imageUrl} alt="이미지" />
      <h2>제목:{title}</h2>
      <p>내용:{content}</p>
      <p>카테고리: {category}</p>
      <p>작성자 닉네임: {userName}</p>
      <p>작성 일시: {createdAt}</p>
      {isOwner && (
        <div>
          <button onClick={handleDelete}>삭제</button>
          <button onClick={handleEdit}>수정</button>
        </div>
      )}
    </div>
  );
};

export default Feed;
