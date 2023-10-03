import React from "react";
import styled from "styled-components";
import {MapInputs} from "../../../../utils/functions/map";
import {fieldset1} from "../../../../utils/strings/biodata/specialConditions";
import {fieldset2} from "../../../../utils/strings/biodata/specialConditions";
import {fieldset3} from "../../../../utils/strings/biodata/specialConditions";
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
padding-left: 0.5%;


div{
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  span{
    margin-bottom: 20px;
  }
}
.background-check{
    width: 65%;
}
`

export function SpecialCondittions() {
    const impairements = {
    content: fieldset1,
    };
    const health = {
    content: fieldset2,
    };
    const background = {
    content: fieldset3,
    };
    
    return (
      <Container>
        <Section>
          <div>
            <span><b>Impairements</b></span>
            <div>{MapInputs(impairements)}</div>
          </div>
          <div>
            <span><b>Health Status</b></span>
            <div>{MapInputs(health)}</div>
          </div>
            </Section>
            <Section>
                <div className="background-check">
            <span><b>Background check</b></span>
            <div>{MapInputs(background)}</div>
          </div>
            </Section>
            <div>
            <Buttons />
          </div>
      </Container>
    )
}