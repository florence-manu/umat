import styled from 'styled-components';

export const Container = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 20px;
`;

export const Options = styled.img`
  width: 200px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 20px;

  fieldset {
    display: flex;
    font-size: 15px;

    label {
      width: 150%;
    }
  }

  .fieldset2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    legend {
      padding-bottom: 40px;
    }

    input {
      border: 1px solid #d0d7de;
      background-color: #f6f8fa;
      border-radius: 5px;
      padding: 8px;
      margin-top: 20px;
      width: 90%;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 90%;
      padding-bottom: 30px;

      input,
      select {
        border: 1px solid #d0d7de;
        background-color: #f6f8fa;
        border-radius: 5px;
        padding: 8px;
        margin-top: 20px;
        width: 90%;
      }

      select {
        width: 45%;
      }
    }

    .buttonContainer {
      align-self: flex-start;
      padding-left: 20px;
    }
  }
`;

export const SelectNationality = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #0a7c72;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-align: center;
  align-self: flex-start;
  padding-bottom: 20px;
`;
