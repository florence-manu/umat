import React from "react";
import styled from "styled-components";
import { MapInputs } from "../../../utils/functions/map";
import { fieldset1 } from "../../../utils/strings/biodata";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
width: 500px
`

export const Section1 = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
align-items: center;
justify-content: center;
background-color: blue;
`
export function Biodata() {
    const inputContents = {
    content: fieldset1,
  };
    return (
      <Container>
        <Section1>
            {
              MapInputs(inputContents)  
          }
        </Section1>  
      </Container>
    )
}