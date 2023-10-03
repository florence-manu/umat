import React from "react";
import styled from "styled-components";

export const InputField = styled.input`
 width: 70%;
 padding: 5px;
 background-color: #F6F8FA;
 border: 1px solid #D0D7DE;
 border-radius: 5px;
margin-bottom: 10px;
`

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

export const Label = styled.label`
color: #24292F;
font-weight: 200;
font-size: 14px;
`

export interface InputParamaters{
    label: string;
    placeholder?: string;
    type?: string;
    value?: string;
    id: string;
    onChange?: () => void;
    width?: string;
}

export function Input({label, placeholder,type, id,  width, onChange}:InputParamaters) {
    
    return (
        <Container>
            <Label id={id}>{label}</Label>
            <InputField type={type} placeholder={placeholder} style={{width: width}}  />
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
    id: string;
    width?: string;
    options?: OptionContent[];
}

export function Select({label, id, options, width}: SelectParamaters) {
    
    return (
       <SelectContainer>
            <label htmlFor={id}>{label }</label>
                    <select name="" id={id} style={{width: width}}>
                {
                options && options.map((item) => <option value={item.value} key={item.id}>
                       {item.content} 
                    </option>)
                       }        
                
                   </select>
               </SelectContainer>
    )
}


export const RadioContainer = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #0a7c72;
`

export const RadioWrapper = styled.fieldset`
 display: flex;
  flex-direction: row;
  width: 70%;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-align: center;
  align-self: flex-start;
  padding-bottom: 20px;
`

export interface SingleRadio {
    value: string;
    id1: string;
    id2: string;
    label: string;
    id: string;
}

export interface RadioOptions{
    Label: string;
    RadioOptions?: SingleRadio[];
}


export function Radio({ RadioOptions, Label }: RadioOptions) {
                <p>{Label}:</p>
    return (
        <RadioWrapper>
            {
                RadioOptions && RadioOptions.map(
                 (item)=><RadioContainer key={item.id}>
          <input
          type="radio"
          id={item.id1}
          value={item.value}
        />
         <label htmlFor={item.id1 } id={item.id2}>
         {item.label}
        </label>
            </RadioContainer>
             )  
        }
            </RadioWrapper>
    )
}