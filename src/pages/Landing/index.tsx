import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../../components/Header";

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
        </div>
    )
}