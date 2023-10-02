import React from "react";
import styled from "styled-components";

export const InputField = styled.input`
 width: 40%;
 padding: 5px;
 background-color: #F6F8FA;
 border: 1px solid #D0D7DE;
`

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

export const Label = styled.label`
color: #24292F;
font-weight: 100;
font-size: 14px;
`

export interface InputParamaters{
    label: string;
    placeholder?: string;
    type?: string;
    value?: string;
    id: string;
    onChange?: () => void;
}

export function Input({label, placeholder,type, id,  value, onChange}:InputParamaters) {
    
    return (
        <Container>
            <Label id={id}>{label}</Label>
            <InputField type={type} placeholder={placeholder}  />
        </Container>
    )
}

export const SelectContainer = styled.div`
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
`
export interface OptionContent {
    value: string;
    content: string;
    id: string;
}

export interface SelectParamaters{
    label: string;
    value?: string;
    id: string;
    options?: OptionContent[];
}

export function Select({label, value, id, options}: SelectParamaters) {
    
    return (
       <SelectContainer>
            <label htmlFor={id}>{label }</label>
                    <select name="" id={id} defaultValue={value}>
                {
                options && options.map((item) => <option value={item.value} key={item.id}>
                       {item.content} 
                    </option>)
                       }        
                
                   </select>
               </SelectContainer>
    )
}