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
import { Buttons } from "../../navButtons";
import {institutions} from "../../../../utils/strings/education/cardContent";


export interface Background {
    text1: string;
    flag?: string;
    status?: string;
    alt?: string;
    id: string;
    display?: string;
}

export interface BackgroundContent {
    heading: string;
    content: Background[];
}
export interface CardContent {
    items: Background[];
    heading: string;
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

export function Record({content, heading}: BackgroundContent) {    
    return (
        <Records>
            <h3>{heading}</h3>
        {
               content.map((item)=> <RecordsContainer id={item.id}>
            <img src={item.flag} alt={item.alt} style={{display: item.display}}/>
            <p className="school">{item.text1}</p>
            <p>{item.status}</p>
            <img src={edit}  alt={"edit"} />
            <img src={Delete}  alt={"delete"} />
        </RecordsContainer>)
        }
        </Records>
    )
}

export function Card({items, heading}: CardContent) {
    return (
        <RecordsContaner>
            <Record content={items} heading={heading } />
            </RecordsContaner>
    )
}

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 40px;

`

export const Wrapper = styled.div`
 display: flex;
    flex-direction: row;
    width: 100%;
    gap: 13%;
`

export const InputsWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
width: 120%;

.nationality{

    input{
    background: red;

    }
}
`
export const Inputs = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 30px;

.inst{
    height: 60px;
    input{
        height: 35px;
    }
}
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
width: 100%;
display: flex;
align-items: flex-start;
justify-content: flex-start;
gap: 20px;
flex-direction: column;
border-radius: 5px;
padding: 20px 20px 40px 20px;
`

export const Records = styled.div`
  background-color: #FCFCFC;
    border-radius: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 30px;
    font-size: 13px;
    padding: 20px 10px 40px 10px;
    box-shadow: 2px 3px 5px 5px #737373;

    
.school{
    font-size: 13px;
    text-align: start;
}

p{
    font-size: 13px;
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
            <Wrapper>
              <InputsWrapper>
                <Section className="nationality">
                    {MapInputs(Nationality)}
                  </Section>
                <Inputs>
                     <Section>
                    {MapInputs(Completion)}
                </Section>
                     <Section className="inst">
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
            <Card items={institutions} heading="Education Records"/>
            </Wrapper>
            <Buttons />
        </Container>
    )
}