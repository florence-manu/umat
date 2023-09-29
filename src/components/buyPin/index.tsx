import React from "react";
import styled from "styled-components";

export const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 80%;

h1{
 color: #62F0E4;
 font-size: 25px;
}
`

export function BuyPin() {
    
    return (
        <Container>
            <h1>
                GET YOUR ADMISSION PIN
           </h1>
        </Container>
    )
}