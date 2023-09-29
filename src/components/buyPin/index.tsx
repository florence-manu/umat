import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { ProvidePersonalDetails } from "./GhanaianStudent/personalDetails";
import { Visa } from "./GhanaianStudent/visa payment/visa";
import { Momopay } from "./GhanaianStudent/momo/mom";

export const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 80%;
gap: 20px;

h1{
 color: #62F0E4;
 font-size: 25px;
 line-height: 25px;
 margin: auto;
 display: flex;
 align-self: center;
 justify-self: center;
 width: 35%;
}
`

export const SectionContainerCard = styled.div`
background-color: #DCF4F2;
width: 90%;
min-height: 68vh;
border-radius: 10px;
box-shadow: 10px 7px 4px #4D4D4D;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 35px;

`

export const BigCard = styled.div`
  background-color: white;
  min-height: 65vh;
  width: 60%;
  border-radius: 10px;
  box-shadow: 10px 7px 4px #4D4D4D;
  display: flex;
  align-items: center;
  justify-content: center; 
`;

export const SmallCard = styled.div`
  background-color: white;
  height: 30vh;
  width: 35%;
  border-radius: 10px;
  box-shadow: 10px 7px 4px #4D4D4D;
  display: flex; 
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    height: 90px;
    width: 80%;
    margin: auto;
  }
`;

export const Amount = styled.h2`
color: #000000;
font-size: 25px;
text-align: center;


`

export function BuyPin() {
    
    return (
        <Container>
            <h1>
                GET YOUR ADMISSION PIN
            </h1>
            <SectionContainerCard>
                <BigCard>
                   <Momopay />
                </BigCard>
                <SmallCard>
                    <div>
                        <Amount>120 GHS</Amount>
                    <Button color="white" text="CHECK OUT" width={200 } background="#0A7C72" />
                    </div>
                </SmallCard>
            </SectionContainerCard>
        </Container>
    )
}