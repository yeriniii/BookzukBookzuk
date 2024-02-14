import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../redux/modules/actions";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage, db } from "../../assets/fierbase";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  FormContent,
  Title,
  Form,
  FormGroup,
  Label,
  ImgWrapper,
  Input,
  Select,
  Textarea,
  BtnWrapper,
  SubmitButton,
} from "../../styles/WritePostStyle";
import { useNavigate } from "react-router-dom";

function WritePost() {
  //데이터 추가
  const [category, setCategory] = useState("리뷰");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  const clickClearImage = () => {
    setSelectedFile(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile || !title || !content || !category) {
      console.error("모두 입력해주세요.");
      return;
    }
    const id = uuidv4();
    //template literal로 회원정보 uid경로로 저장하기
    //ref함수를 사용하여 스토리지의 경로를 지정하여 업로드. uploadBytes는 프로미스 반환하지 않으니까 then으로 완료시 처리로직 정의
    const imageRef = ref(storage, `${user.uid}/${id}/${selectedFile.name}`);

    await uploadBytes(imageRef, selectedFile);
    const imageUrl = await getDownloadURL(imageRef);
    const newPostData = {
      category,
      title,
      content,
      userName: user.displayName,
      createdAt: Date.now(),
      authorId: user.uid,
      imageUrl,
    };
    try {
      const docRef = await addDoc(collection(db, "books"), newPostData);
      const newPost = {
        ...newPostData,
        id: docRef.id,
      };
      dispatch(addPost(newPost));
      setTitle("");
      setContent("");
      setSelectedFile(null);
      navigate(`/main`);
    } catch (error) {
      console.error("게시물 추가 중 오류 발생:", error);
    }
  };

  return (
    <>
      <Container>
        <FormContent>
          <Title>새 글 작성</Title>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>이미지 등록</Label>
              {selectedFile ? (
                <ImgWrapper>
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    width="300px"
                    height="300px"
                    alt="img"
                  />
                  <button onClick={clickClearImage}>삭제</button>
                </ImgWrapper>
              ) : (
                <Input
                  type="file"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                />
              )}
              <Label>카테고리 선택</Label>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>리뷰</option>
                <option>추천</option>
                <option>중고거래</option>
              </Select>
              <Label>제목</Label>
              <Input
                placeholder="제목을 입력해주세요"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Label>내용</Label>
              <Textarea
                placeholder="내용을 입력해주세요"
                rows="20"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </FormGroup>
            <BtnWrapper>
              <SubmitButton type="submit">등록</SubmitButton>
              <SubmitButton>취소</SubmitButton>
            </BtnWrapper>
          </Form>
        </FormContent>
      </Container>
    </>
  );
}

export default WritePost;
