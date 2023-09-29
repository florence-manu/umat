import React from "react";
import styled from "styled-components";

export const Form = styled.form`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: auto;

fieldset{
    display: flex;
    font-size: 15px;
}
`

export const Selectnationality = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
color: #0A7C72;
`

export const InputConatainer = styled.div`
display: flex:
flex-direction: column;
gap: 5px;

label{
color: #0A7C72;

}
`

export function Step1() {
    
    return (
        <Form>
            <fieldset>
                <div>Student</div>
                <Selectnationality>
                    <label htmlFor="Gh" id="ghRadio">Ghanaian</label>
                    <input type="radio" id="Gh" value="Gh" name="Gh"/>
                </Selectnationality>
                <Selectnationality>
                    <label htmlFor="Int" id="ghInt">International</label>
                    <input type="radio" id="Int" value="Int" name="Int"/>
                </Selectnationality>
            </fieldset>
            <fieldset>
                 <InputConatainer>
                        <label>Reference</label>
                        <input type="text" placeholder="12345"/>
                    </InputConatainer>
            </fieldset>
        </Form>
    )
}