import React from "react";
import styled from "styled-components";
import SelectNationality from "../../Selectnationality";
import { Button } from "../../button";

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
export const Buttons = styled.div`
 display: flex;
 flex-direction: row;
 gap: 20px;
 justify-content: flex-end;
 position: relative;

 p{
    padding: 0px 8px;
    color: white;
    background-color: rgba(225, 225, 225, 0.25);
    border-radius: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
 }
`


export function GeneralInfo() {
    
    return (
        <Container>
            <div>
                <SelectNationality />
            </div>
            <Fieldset>
                <div>
                   <label htmlFor="entry-type">Entry Type</label>
                    <select name="" id="entry-type" defaultValue={"Fresh-graduate"}>
                        <option value="Fresh-graduate">
                            Fresh-graduate
                        </option>
                        <option value="Post-graduate">
                            Post-graduate
                        </option>
                   </select>
               </div>
                <div>
                   <label htmlFor="Level">Level</label>
                    <select name="" id="Level">
                        <option disabled>choose an option</option>
                        <option>Pre-University</option>
                        <option>Certificate</option>
                        <option>Diploma</option>
                        <option>HND Topup</option>
                        <option>Bachelors Degree</option>
                   </select>
               </div>
            </Fieldset>
            <Buttons>
                <Button color="white" text="save all" width={80} background="#F4C51A" onClick={()=>{""}}/>
                <Button color="white" text="next" width={80} background="#2DA44E" paddingRight={30} onClick={() => { "" }} />
                <p>{`>`}</p>
            </Buttons>
        </Container>
    )
}