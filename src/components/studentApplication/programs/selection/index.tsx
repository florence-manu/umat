import React from "react";
import styled from "styled-components";
import { fieldset1 } from "../../../../utils/strings/programs/selection";
import { fieldset2 } from "../../../../utils/strings/programs/selection";
import { fieldset3 } from "../../../../utils/strings/programs/selection";
import { MapInputs } from "../../../../utils/functions/map";
import { Buttons } from "../../navButtons";

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const Section1 = styled.div`
 display: flex;
flex-direction: row;
gap: 20px;
`

export const Section2 = styled.div`
 display: flex;
flex-direction: column;
gap: 20px;
margin-bottom: 30px;

.heading{
    width: 100%;
    display: flex;
    padding: 10px 20px;
    font-size: 14px;

    span:nth-child(1){
        width: 200%;
        margin-right: 20%;
    }
}
`

export const Preferences = styled.div`
 display: flex;
flex-direction: row;
gap: 20px;
width: 100%;


.program{
    width: 160%;
    margin-right: 150px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.preference{
width: 120%;
display: flex;
flex-direction: column;
gap: 5px;

}

.num{
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding-top: 13px;
    width: 5px;
}
`

export function ProgramsSelection() {
    const levelContent = {
        content: fieldset1
    };
    const program = {
        content: fieldset2
    };
    const preference = {
        content: fieldset3
    };
    return (
        <Wrapper>
            <Section1>
                {MapInputs(program)}
            </Section1>
            <Section2>
                <div className="heading">
                    <span>Selectes Programs Per Preference</span>
                    <span>Fee status</span>
                </div>
                <Preferences>
                     <div className="num">
                    <span>1.</span><span>2.</span>
                    <span>3.</span><span>4.</span>
                </div>
                <div className="program">
                    {MapInputs(program)}
                </div>
                <div className="preference">
                    {MapInputs(preference)}
                </div>
               </Preferences>
            </Section2>
            <Buttons path="/umat"/>
        </Wrapper>
    )
}