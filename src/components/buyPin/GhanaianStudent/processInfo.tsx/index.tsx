import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../button";

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 90%;
height: auto;
align-items: center;
juustify-content: center;
gap: 15px;
line-height: 30px;
letter-spacing: 1.5px;
`

export const Amount = styled.h2`
  color: #000000;
  font-size: 25px;
  text-align: center;
`;

export function Step1(){
    const navigation = useNavigate();
    
    return (
        <Container>
            <Amount>120 GHS</Amount>
            <Button
              color="white"
              text="CHECK OUT"
              width={200}
              background="#0A7C72"
              onClick={()=>{navigation("/buy-pin/payment")}}
            />
          </Container>
    )
}

const Step2Container = styled.div`
      
`

export function Step2() {
  
  return (
    <Container>
      <p> <span><b>Purpose:</b></span> <span>UMaT</span></p>
      <p> <span><b>Name:</b></span> <span>Emmanuel Darkoh</span></p>
      <p> <span><b>Charges:</b></span> <span>0 GHS</span></p>
      <p> <span><b>Amount:</b></span> <span>120 GHS</span></p>
      <p> <span><b>Total amount:</b></span> <span>120 GHS</span></p>
    </Container>
  )

}