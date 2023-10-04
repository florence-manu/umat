import React from 'react';
import styled from 'styled-components';


export const Container = styled.fieldset`
display: flex;
flex-directon: row;
gap: 30px;
  font-size: 14px;


.student{
  color: #03453F;
  font-weight: bold;
}
`

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #0A7C72;
  font-weight: bold;
  width: 130px;

 input {
   cursor: pointer;
  }

`;


export function SelectNationality() {
  return (
      <Container>
        <div className='student'>Student</div>
      <Input>
        <input type="radio" id="Int" value="Int" name="Int" />
        <label htmlFor="Int" id="ghInt">
          International
        </label>
      </Input>
      <Input>
        <input type="radio" id="Int" value="Int" name="Int" defaultChecked/>
        <label htmlFor="Int" id="ghInt">
          Ghanaian
        </label>
      </Input>
      </Container>
  );
}

export default SelectNationality;
