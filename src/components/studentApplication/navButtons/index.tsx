import React from "react";
import styled from "styled-components";
import { Button } from "../../button";

export const ButtonsContainer = styled.div`
 display: flex;
 flex-direction: row;
 gap: 20px;
 justify-content: flex-end;
 position: relative;

 p{
    padding: 0px 8px;
    color: white;
    background-color: rgba(225, 225, 225, 0.25);
    border-radius: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 23px;
 }
`

export function Buttons() {
    
    return (
        <ButtonsContainer>
                <Button color="white" text="save all" width={80} background="#F4C51A" onClick={()=>{""}}/>
                <Button color="white" text="next" width={80} background="#2DA44E" paddingRight={30} onClick={() => { "" }} />
                <p>{`>`}</p>
            </ButtonsContainer>
    )
}