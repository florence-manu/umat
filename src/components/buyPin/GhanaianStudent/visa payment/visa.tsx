import React from "react";
import styled from "styled-components";
import visa from "../../../../images/visa.png";
import visalogo from "../../../../images/visalogo.png";
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

.buttonContainer{
    align-self: flex-start;
    padding-left: 20px;
}

.fieldset2{
    width: 100%
    display: flex;
    flex-direction: column;
    align-items: center;

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
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
        padding-bottom: 30px;

        .inp1{
            width: 15%;
        }
        .inp2{
            width: 25%;
        }
        .inp3{
            width: 30%;
        }
    }
}
`

export const SelectNationality = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
color: #0A7C72;
`
export const Options = styled.img`
width: 200px;
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
`;

export const VisaLogo = styled.img`
position: absolute;
height: 28px;
width: 30px;
top: 390px;
left: 690px;

`

export function Visa() {
    
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
                <Options  src={visa} alt="momo options" />
            </OptionsContainer>
            <Form>
            <fieldset className="fieldset2">
                    <input type="text" placeholder="CARD NUMBER" />
                     <VisaLogo src={visalogo} alt="" />
                        <input type="text" placeholder="CARD HOLDER NAME 
                        Darkoh"/>
                    <div>
                        <input type="text" placeholder="12" className="inp1"/>
                        <input type="text" placeholder="23" className="inp2"/>
                        <input type="text" placeholder="CVC" className="inp3"/>
                    </div>
                    <div className="buttonContainer">
                        <Button text="Confirm payment" background="#0A7C72" color="white" width={ 200} />
                    </div>
            </fieldset>
            </Form>
        </Container>
    )
}