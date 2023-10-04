import React from "react";
import styled from "styled-components";
import { fieldset1 } from "../../../../utils/strings/education/institiutions";
import { fieldset2 } from "../../../../utils/strings/education/institiutions";
import { fieldset3 } from "../../../../utils/strings/education/institiutions";
import { fieldset4 } from "../../../../utils/strings/education/institiutions";
import { fieldset5 } from "../../../../utils/strings/education/institiutions";
import { MapInputs } from "../../../../utils/functions/map";
import { Button } from "../../../button";
import edit from "../../../../images/edit.png";
import Delete from "../../../../images/Delete.png";
import gh from "../../../../images/ghanaFlag.png";
import uk from "../../../../images/ukFlag.png";
import { Buttons } from "../../navButtons";


export interface Background {
    text1: string;
    flag?: string;
    status?: string;
    alt?: string;
}

export const RecordsContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 15px;

width: 100%;

p{
    font-size: 15px;
}

.school{
    width: 180%;
}

    img{
    width: 25px;
    height: 25px;
   }
`

export function Record({text1, status, flag, alt}: Background) {
    
    return (
        <RecordsContainer>
            <img src={flag} alt={alt} />
            <p className="school">{text1}</p>
            <p>{status}</p>
            <img src={edit}  alt={alt} />
            <img src={Delete}  alt={alt} />
        </RecordsContainer>
    )
}

export function Card() {
    return (
        <RecordsContaner>
                <Records>
                    <p><b>Educational Records</b></p>
                    <ul>
                        <li><Record flag={gh} text1="Kings University College" status="stopped"/></li>
                        <li><Record flag={uk} text1="Holy Home International" status="completed"/></li>
                        <li><Record flag={gh} text1="Kings University College" status="stopped"/></li>
                    </ul>
                </Records>
                 <Buttons />
            </RecordsContaner>
    )
}
export function Card1() {
    return (
        <RecordsContaner>
                <Records>
                    <p><b>WASCE EXAMS INSTANCES</b></p>
                    <ul>
                        <li><Record text1="2021-NOV / DEC"/></li>
                        <li><Record text1="2021-MAY / JUNE"/></li>
                    </ul>
                </Records>
                 <Buttons />
            </RecordsContaner>
    )
}

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
gap: 5%;
`

export const InputsWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
`

export const Inputs = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;
`

export const Section = styled.div`
 width: 100%;
 display: flex;
 flex-direction: row;
justify-content: space-between;
` 
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`
export const RecordsContaner = styled.div`
width: 95%;
display: flex;
align-items: flex-start;
justify-content: flex-end;
gap: 120px;
flex-direction: column;
`

export const Records = styled.div`
  background-color: #FCFCFC;
    border-radius: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px 30px ;
    text-align: center;
    gap: 40px;
    box-shadow: 2px 3px 5px 5px #737373;

p{
    color: #4D4D4D;
}

ul{
    list-style: none;
    li{
        margin-bottom: 20px;
    }
}
`

export function Institutions() {
     const Nationality = {
    content: fieldset1,
  };
     const Completion = {
    content: fieldset2,
  };
     const institiution = {
    content: fieldset3,
  };
     const level = {
    content: fieldset4,
  };
     const status = {
    content: fieldset5,
    };
    
    return (
        <Container>
            <InputsWrapper>
                <Section>
                    {MapInputs(Nationality)}
                  </Section>
                <Inputs>
                     <Section>
                    {MapInputs(Completion)}
                </Section>
                     <Section>
                    {MapInputs(institiution)}
                </Section>
                     <Section>
                    {MapInputs(level)}
                </Section>
                     <Section>
                        {MapInputs(status)}
                        <ButtonsContainer>
                            <Button color="#24292F" text="Cancel" width={100} background="#F6F8FA" />
                            <Button color="white" text="Save" width={100} background="#2DA44E" />
                       </ButtonsContainer>
                </Section>
                </Inputs>
            </InputsWrapper>
            <Card />
        </Container>
    )
}