import Header from "../../components/layout/Header";
import styled from "styled-components";
const WritePost = () => {
  return (
    <Container>
      <Header />
      <FormContent>
        <Title>새 글 작성</Title>
        <Form>
          <FormGroup>
            <Label>이미지 등록</Label>
            <Input type="file" />
          </FormGroup>
          <FormGroup>
            <Label>카테고리 선택</Label>
            <Select>
              <option>리뷰</option>
              <option>추천</option>
              <option>중고거래</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>제목</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>내용</Label>
            <Textarea rows="30" />
          </FormGroup>
          <SubmitButton>등록</SubmitButton>
        </Form>
      </FormContent>
    </Container>
  );
};
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
const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
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

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #01a488;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  align-self: flex-end;
  border-radius: 4px;
`;

export default WritePost;
