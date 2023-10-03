import React from "react";
import styled from "styled-components";

export const Container = styled.div`
width: 90%;
display: flex;
flex-direction: row;
justify-content: space-between
`

export function Institutions() {
    
    return (
        <Container>
            <div>Hello Iam one</div>
            <div>Hello Iam two</div>
        </Container>
    )
}