import React from "react";
import styled from "styled-components";
import { MapInputs } from "../../../../utils/functions/map";
import { fieldset1} from "../../../../utils/strings/biodata/familyDetails";
import { fieldset4} from "../../../../utils/strings/biodata/familyDetails";
import { fieldset5} from "../../../../utils/strings/biodata/familyDetails";
import { fieldset6} from "../../../../utils/strings/biodata/familyDetails";
import { Buttons } from "../../navButtons";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 70px;
width: 100%;

.emergency{
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 90%;
  margin-top: -30px;
}
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
  width: 97%;
  gap: 20px;

  span{
    margin-bottom: 20px;
    color: #4D4D4D;
  }
}

`

export function FamilyDetails() {
    const fatherDetails = {
    content: fieldset1,
    };
    const Emergency1 = {
    content: fieldset4,
    };
    const Emergency2 = {
    content: fieldset5,
    };
    const Emergency3 = {
    content: fieldset6,
    };
    
    return (
      <Container>
        <Section>
          <div>
            <span><b>Father Details</b></span>
            <div>{MapInputs(fatherDetails)}</div>
          </div>
          <div>
            <span><b>Mother Details</b></span>
            <div>{MapInputs(fatherDetails)}</div>
          </div>
          <div>
            <span><b>Guardian Details</b></span>
            <div>{MapInputs(fatherDetails)}</div>
          </div>
        </Section>  
        <Section className="heading">
           <div><span><b>Emergency Contact</b></span></div>
            </Section>
        <Section className="emergency">
          <div>
             <div>{MapInputs(Emergency1)}</div>
          </div>
          <div>
             <div>{MapInputs(Emergency2)}</div>
          </div>
          <div>
             <div>{MapInputs(Emergency3)}</div>
          </div>
        </Section>
          <div>
            <Buttons />
          </div>
      </Container>
    )
}