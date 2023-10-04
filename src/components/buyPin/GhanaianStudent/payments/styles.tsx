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

    .option{
      color: #03453F;
      font-weight: bold;
      font-size: 14px;
      margin-right: 70px;
    }
  }

  .buttonContainer {
    align-self: flex-start;
    padding-left: 20px;
  }

.space{
  gap: 20px;
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
      width: 90%;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 90%;
      padding-bottom: 30px;

      .inp1 {
        width: 15%;
      }
      .inp2 {
        width: 25%;
      }
      .inp3 {
        width: 30%;
      }
    }
  }
`;

export const SelectNationality = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  color: #0a7c72;

  label{
    color: #0A7C72;
    font-weight: bold;
    font-size: 14px;
  }

  input{
    width: 30px;
    margin-right: 7px;
  }
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

export const VisaLogo = styled.img`
  position: absolute;
  height: 28px;
  width: 30px;
  top: 395px;
  left: 680px;
`;

export const VisaInputs = styled.div`
display: flex;
flex-direction: row;
` 

export const Labelled = styled.section`
display: flex;
flex-direction: column;
gap: 10px;
padding-bottom: 10px;

input, select{
  width: 90%;
   border: 1px solid #d0d7de;
      background-color: #f6f8fa;
      border-radius: 5px;
      padding: 8px;
}

select{
  width: 40%;
}

`