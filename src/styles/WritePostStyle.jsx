import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContent = styled.div`
  width: 70%;
  padding: 2rem;
  border-radius: 8px;
  background-color: #f3eff2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;
export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  button {
    margin-top: 5px;
  }
`;
export const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  margin-top: 10px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Select = styled.select`
  width: 30%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Textarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  gap: 1rem;
`;

export const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #01a488;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;
`;
