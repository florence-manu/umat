import React from "react";
import styled from "styled-components";
import SelectNationality from "../../Selectnationality";
import { Select } from "../../inputFields/input";
import { generalinfo } from "../../../utils/constants/strings/optionsContent";
import { Buttons } from "../navButtons";

export const Container = styled.form`
display: flex;
flex-direction: column;
align-items: space-between;
gap: 40px;

div{
    :nth-child(1){
        display: flex;
        flex-direction: row;
    }
}
`

export const Fieldset = styled.fieldset`
display: flex;
flex-direction: column;
gap: 40px;

div{
    display: flex;
flex-direction: column;
gap: 10px;

label{
    font-weight: thin;
    color: #24292F;
}

select{
    width: 40%;
    background-color: inherit;
    padding: 5px;
    border: 1px solid #D0D7DE;
    border-radius: 5px;
  cursor: pointer;

}
}
`

export function GeneralInfo() {
    
    return (
        <Container>
            <div>
                <SelectNationality />
            </div>
            <Fieldset>
                <Select label={"Entry Type" } id="Entry-type" options={generalinfo[0]}/>
                <Select label={"Level" } id="Level" options={generalinfo[1]}/>
            </Fieldset>
            <Buttons />
        </Container>
    )
}