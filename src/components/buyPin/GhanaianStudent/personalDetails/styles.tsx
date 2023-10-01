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

export const NationalityContainer = styled.div`
display: flex;
flex-directon: row;
`

export const SelectNationality = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #0a7c72;
`;

export const InputConatainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: #0a7c72;
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

  select {
    margin-top: 30px;
    width: 65%;
    border: 1px solid #d0d7de;
    background-color: white;
    border-radius: 5px;
    padding: 5px;
  }
`;
