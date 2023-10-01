import React from "react";
import styled from "styled-components";
import SelectNationality from "../../Selectnationality";

export const Container = styled.form`
display: flex;
flex-direction: column;
align-items: space-between;
justify-content: center;
gap: 30px;

div{
    :nth-child(1){
        width: 200px;
        display: flex;
        flex-direction: row;
    }
}
`

export const Image = styled.img`
width: 50px;
height: 50px;
margin: auto;
`


export function GeneralInfo() {
    
    return (
        <Container>
            <div>
                <p><b>Student</b></p>
                <SelectNationality />
            </div>
            <div></div>
            <div>
               
            </div>
        </Container>
    )
}