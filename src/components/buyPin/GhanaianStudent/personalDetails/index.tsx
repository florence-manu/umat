import React from "react";
import styled from "styled-components";

export const Form = styled.form`
width: 87%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: auto;
gap: 20px;

fieldset{
    display: flex;
    font-size: 15px;
}

.fieldset2{
    flex-direction: column;
    gap: 20px;
}
`


export const SelectNationality = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
color: #0A7C72;
`

export const InputConatainer = styled.div`
display: flex:
flex-direction: column;

label{
color: #0A7C72;
width: 50%;
}

input{
    border: 1px solid #D0D7DE;
    background-color: #F6F8FA;
    border-radius: 5px;
    padding: 5px;
    margin-top: 10px;
    width: 90%;
}

select{
    margin-top: 30px;
    width: 65%;
      border: 1px solid #D0D7DE;
    background-color: white;
    border-radius: 5px;
    padding: 5px;
}
`

export function ProvidePersonalDetails() {
    
    return (
        <Form>
            <fieldset>
                <div>Student</div>
                <SelectNationality>
                    <input type="radio" id="Gh" value="Gh" name="Gh"/>
                    <label htmlFor="Gh" id="ghRadio">Ghanaian</label>
                </SelectNationality>
                <SelectNationality>
                    <input type="radio" id="Int" value="Int" name="Int"/>
                    <label htmlFor="Int" id="ghInt">International</label>
                </SelectNationality>
            </fieldset>
            <fieldset className="fieldset2">
                 <InputConatainer>
                        <label>Full Name</label>
                        <input type="text" placeholder="Thomas Darkoh"/>
                    </InputConatainer>
                 <InputConatainer>
                        <label>Email</label>
                        <input type="text" placeholder="thomasila@example.com"/>
                    </InputConatainer>
                 <InputConatainer>
                        <label>Phone</label>
                        <input type="text" placeholder="054467345"/>
                <select>
                    <option>choose an option</option>
                    <option>choose an option</option>
                    <option>choose an option</option>
                </select>
                </InputConatainer>
            </fieldset>
        </Form>
    )
}
