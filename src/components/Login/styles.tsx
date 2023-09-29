import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 92%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #62F0E4;
`;

export const Section1 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-self: flex-start;
  padding-top: 30px;
  line-height: 30px;
`;

export const Hero = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #62F0E4;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.div`
  width: 2000px;
  border-bottom: 2px solid #62F0E4;
  transform: rotate(120deg);
`;

export const LoginImage = styled.img`
  height: 220px;
  width: 330px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Form = styled.form`
  margin: auto;
  background-color: #62F0E4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 330px;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  legend {
    padding: 10px 120px;
    display: flex;
    color: #0A7C72;
    font-weight: bold;
    width: 100%;
    margin: auto;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    align-self: center;
    padding-bottom: 13px;

    label {
      color: #0A7C72;
      padding-left: 15px;
    }

    input {
      width: 90%;
      padding: 10px;
      border-radius: 10px;
    }
  }
};
`
