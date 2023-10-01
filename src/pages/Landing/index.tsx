import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";

export const Main = styled.main`
background-color: #0A7C72;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 15px 30px;
min-height: 82.1vh;
`
export const Landing = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 100%;
height: 100vh;
`

export function LandingPage() {
    
    return (
        <div>
            <Header />
            <Main>
            <Outlet />
           </Main>
        </div>
    )
}