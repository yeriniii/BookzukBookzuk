import styled from "styled-components";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../redux/modules/actions";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage, db } from "../../assets/fierbase";
import Header from "../layout/Header";
function WritePost() {
  //데이터 추가
  const [category, setCategory] = useState("리뷰");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const posts = useSelector((state) => state.post); // post 리듀서의 상태 가져오기
  console.log(posts); // 콘솔에 상태 출력

  const clickClearImage = () => {
    setSelectedFile(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile || !title || !content || !category) {
      console.error("모두 입력해주세요.");
      return;
    }
    //template literal로 회원정보 uid경로로 저장하기
    //ref함수를 사용하여 스토리지의 경로를 지정하여 업로드. uploadBytes는 프로미스 반환하지 않으니까 then으로 완료시 처리로직 정의
    const imageRef = ref(storage, `${user.uid}/${selectedFile.name}`);

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
    } catch (error) {
      console.error("게시물 추가 중 오류 발생:", error);
    }
  };

  return (
    <>
      <Container>
        <Header />
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
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContent = styled.div`
  width: 70%;
  padding: 2rem;
  border-radius: 8px;
  background-color: #f3eff2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;
const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  button {
    margin-top: 5px;
  }
`;
const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  margin-top: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 30%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  gap: 1rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #01a488;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;
`;
export default WritePost;
