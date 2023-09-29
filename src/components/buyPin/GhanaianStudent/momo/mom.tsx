import React from "react";
import styled from "styled-components";
import momoLogo from "../../../images/momoLogo.png";
import { Button } from "../../../button";

export const Container = styled.div`
width: 92%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: auto;
gap: 20px;
`
export const Options = styled.img`
width: 200px;

`

export const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: auto;
gap: 20px;

fieldset{
    display: flex;
    font-size: 15px;

    label{
        width: 150%;
    }
}

.fieldset2{
    width: 100%
    display: flex;
    flex-direction: column;
    align-items: center;

   legend{
    padding-bottom: 40px;
   }

    input{
    border: 1px solid #D0D7DE;
    background-color: #F6F8FA;
    border-radius: 5px;
    padding: 8px;
    margin-top: 20px;
    width: 90%;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 90%;
        padding-bottom: 30px;
      
    input, select{
    border: 1px solid #D0D7DE;
    background-color: #F6F8FA;
    border-radius: 5px;
    padding: 8px;
    margin-top: 20px;
    width: 90%;
    }
 select{
    width: 45%;
 }
.buttonContainer{
    align-self: flex-start;
    padding-left: 20px;
}
.
`
export const SelectNationality = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
color: #0A7C72;
`

export const OptionsContainer = styled.div`
display: flex;
flex-direction: column;
  width: 200px;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-align: center;
  align-self: flex-start;
    padding-bottom: 20px;
`;

export function Momopay() {
    return (
        <Container>
            <Form>
               <fieldset>
                <div>Payment Options</div>
                <SelectNationality>
                    <input type="radio" id="credit" value="credit" name="credit"/>
                    <label htmlFor="credit" id="card">Credit card</label>
                </SelectNationality>
                <SelectNationality>
                    <input type="radio" id="mobile" value="mobile" name="mobile"/>
                    <label htmlFor="mobile" id="momo">Mobile money</label>
                </SelectNationality>
            </fieldset>
            </Form>
            <OptionsContainer>
                <p>
                    we only accept
                </p>
                <Options  src={momoLogo} alt="momo options" />
            </OptionsContainer>
            <Form>
                <fieldset className="fieldset2">
                    <legend>Payment Details</legend>
                    <div>
                        <label htmlFor="network">Mobile Network</label>
                        <select placeholder="Choose an option" id="network">
                            <option value="">choose an option</option>
                            <option value="">choose an option</option>
                        </select>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="text" placeholder="Your mobile money line"/>
                    </div>    
                    <div className="buttonContainer">
                        <Button text="Confirm payment" background="#0A7C72" color="white" width={ 200} />
                    </div>
            </fieldset>
            </Form>
        </Container>
    )
}