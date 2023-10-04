import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../button";

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 94%;
height: auto;
align-items: center;
juustify-content: center;
gap: 15px;
line-height: 30px;
letter-spacing: 1.5px;
font-size: 14px;
color: #03453F;

p{
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span:nth-child(2){
    font-size: 13px;
  }
}
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
              weight="bold"
              background="#009688"
              onClick={()=>{navigation("/buy-pin/payment")}}
            />
          </Container>
    )
}

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