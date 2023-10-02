import React from "react";
import styled from "styled-components";
import { MapInputs } from "../../../../utils/functions/map";
import { fieldset1 } from "../../../../utils/strings/biodata";
import { fieldset2 } from "../../../../utils/strings/biodata";
import { fieldset3 } from "../../../../utils/strings/biodata";
import { fieldset4 } from "../../../../utils/strings/biodata";
import { fieldset5 } from "../../../../utils/strings/biodata";
import upload from "../../../../images/upload.png";
import { Buttons } from "../../navButtons";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 70px;
width: 100%;
`

export const Section = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
width: 100%;
justify-self: center;
gap: 10%;

div{
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  span{
    margin-bottom: 20px;
  }
}

.image, .birthInfo{
  padding-left: 5%;
}
`
export const Image = styled.img`
height: 100%;
width: 90%;
cursor: pointer;
`

export function Biodata() {
    const fieldset1Content = {
    content: fieldset1,
  };
    const fieldset2Content = {
    content: fieldset2,
  };
    const fieldset3Content = {
    content: fieldset3,
  };
    const fieldset4Content = {
    content: fieldset4,
  };
    const fieldset5Content = {
    content: fieldset5,
  };
    return (
      <Container>
        <Section>
          <div className="image">
            <Image src={upload } alt={upload} />
            </div>
          <div className="name">{MapInputs(fieldset1Content)}</div>
          <div>{MapInputs(fieldset2Content)}</div>
        </Section>  
        <Section>
          <div className="birthInfo">
            <span><b>Birth Details</b></span>
           <div>{MapInputs(fieldset3Content)}</div>
          </div>
          <div>
            <span><b>National Identity</b></span>
           <div>{MapInputs(fieldset4Content)}</div>
          </div>
          <div>
            <span><b>Birth Details</b></span>
           <div>{MapInputs(fieldset5Content)}</div>
          </div>
        </Section>
          <div>
            <Buttons />
          </div>
      </Container>
    )
}