import React from "react";
import styled from "styled-components";
import { Step1 } from "./GhanaianStudent/step1";

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
display: flex: 
align-item: center;
justify-contnet : center;
`
export const SmallCard = styled.div`
background-color: white;
min-height: 30vh;
width: 35%;
border-radius: 10px;
box-shadow: 10px 7px 4px #4D4D4D;
`


export function BuyPin() {
    
    return (
        <Container>
            <h1>
                GET YOUR ADMISSION PIN
            </h1>
            <SectionContainerCard>
                <BigCard>
                   <Step1 />
                </BigCard>
                <SmallCard>Hello world</SmallCard>
            </SectionContainerCard>
        </Container>
    )
}