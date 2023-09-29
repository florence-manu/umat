import React from "react";
import styled from "styled-components";
import { Button } from "../button";
export const Container = styled.main`
display: flex;
width: 80%;
flex-direction: row;
align-items: center;
justify-content: space-between;
color: #62F0E4;
`
export const Section1 = styled.section`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
padding-top: 30px;
`

export const Hero = styled.h1`
    font-size: 30px;
    font-weight: bold;
    color: #62F0E4;
`
export const ButtonContainer = styled.div`
display: flex;
justify-content: flex-start;
`
export const LoginSection = styled.section`
 display: flex;
 flex-direction: column
align-items: center;
justify-content: flex-start;
background-color: blue;
`
export function Login() {
    
    return (
        <Container>
            <Section1>
                <Hero>
                    Welcome to <br/>UMat admissions
                </Hero>
                <p>
                    Your Journey Begins Here! Secure your admission by purchasing a Personal Identification Number (PIN)
                </p>
                <ButtonContainer>
                      <Button color="#4D4D4D" width={160} background="#62F0E4" text="Buy Your Pin"/>
                </ButtonContainer>
           </Section1>
           <LoginSection>hello another</LoginSection>
        </Container>
    )
}