import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  gap: 20px;

  h1 {
    color: #62f0e4;
    font-size: 25px;
    line-height: 25px;
    margin: auto;
    display: flex;
    align-self: center;
    justify-self: center;
    width: 35%;
  }
`;

export const SectionContainerCard = styled.div`
  background-color: #dcf4f2;
  width: 90%;
  min-height: 68vh;
  border-radius: 10px;
  box-shadow: 10px 7px 4px #4d4d4d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 35px;
`;

export const BigCard = styled.div`
  background-color: white;
  min-height: 65vh;
  width: 60%;
  border-radius: 10px;
  box-shadow: 10px 7px 4px #4d4d4d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SmallCard = styled.div`
  background-color: white;
  height: 30vh;
  width: 35%;
  border-radius: 10px;
  box-shadow: 10px 7px 4px #4d4d4d;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90px;
    width: 80%;
    margin: auto;
  }
`;

export const Amount = styled.h2`
  color: #000000;
  font-size: 25px;
  text-align: center;
`;
