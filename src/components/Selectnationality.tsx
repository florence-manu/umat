import React from 'react';
import styled from 'styled-components';


export const Container = styled.fieldset`
display: flex;
flex-directon: row;
gap: 30px;
width: 150px;
`

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #0a7c72;
  width: 130px;

 input {
   cursor: pointer;
  }
`;


export function SelectNationality() {
  return (
      <Container>
        <div>Student</div>
      <Input>
        <input type="radio" id="Int" value="Int" name="Int" />
        <label htmlFor="Int" id="ghInt">
          International
        </label>
      </Input>
      <Input>
        <input type="radio" id="Int" value="Int" name="Int" />
        <label htmlFor="Int" id="ghInt">
          International
        </label>
      </Input>
      </Container>
  );
}

export default SelectNationality;
