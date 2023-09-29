import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

export const Container = styled.main`
background-color: #0A7C72;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 15px 30px;
min-height: 82.1vh;
`

export function Main() {
    
    return (
        <Container>
            <Outlet />
        </Container>
    )
}