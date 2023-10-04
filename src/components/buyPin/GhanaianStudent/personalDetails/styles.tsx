import styled from 'styled-components';

export const Form = styled.form`
  width: 87%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 20px;

  fieldset {
    display: flex;
    font-size: 15px;
  }

  .fieldset2 {
    flex-direction: column;
    gap: 20px;
  }
`;

export const InputConatainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: #03453F;
    font-weight: bold;
    font-size: 14px;
    width: 50%;
  }

  input {
    border: 1px solid #d0d7de;
    background-color: #f6f8fa;
    border-radius: 5px;
    padding: 5px;
    margin-top: 10px;
    width: 90%;
  }

   ::placeholder{
      color: #6E7781;
    }

  select {
    margin-top: 30px;
    width: 65%;
    border: 1px solid #d0d7de;
    background-color: white;
    border-radius: 5px;
    padding: 5px;

    option{
      color: #24292F;
    }
  }
`;
