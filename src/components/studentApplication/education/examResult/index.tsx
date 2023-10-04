import React from "react";
import styled from "styled-components";
import gh from "../../../../images/ghanaFlag.png";
import uk from "../../../../images/ukFlag.png";
import { fieldset1 } from "../../../../utils/strings/education/exams";
import { fieldset2 } from "../../../../utils/strings/education/exams";
import { fieldset3 } from "../../../../utils/strings/education/exams";
import { fieldset4 } from "../../../../utils/strings/education/exams";
import { fieldset5 } from "../../../../utils/strings/education/exams";
import { MapInputs } from "../../../../utils/functions/map";
import { Button } from "../../../button";
import { Buttons } from "../../navButtons";
import { Card1 } from "../institutions";

export const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 20px;
`

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
gap: 5%;
`

export const Section = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
width: 70%;

.sub-grades{
    display: flex;
    gap: 20px;

    
.sub, .grades{
    display: flex;
    flex-direction: column;
}

.grades{
    gap: 10px;
    width: 50%;

}

.sub{
    width: 100%;
}

}

.diff{
    padding-top: 100px;
    margin: auto;
    margin-left: 34%;
}
`
export const Section2 = styled.div`
width: 30%;
`

export const Row = styled.div`
display: flex;
flex-direction: row;
width: 100%;
gap: 100px;
align-items: center;

.exams{
   display: flex;
flex-direction: row;
gap: 20px;
width: 22%;
font-size: 15px;


img{
    height: 25px;
    width: 25px;
}
}

.inputs{
    display: flex;
flex-direction: row;
gap: 20px; 
width: 80%;
color: #4D4D4D;
}
`
export const Add = styled.button`
    text-align: center;
    padding: 10px;
    color: #0969DA;
    background: #F6F8FA;
    width: 10%;
    cursor: pointer;
    border-radius: 3px;
`
export const Save = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export function ExamsResults() {
    
     const exams = {
    content: fieldset1,
  };
     const examsCenter = {
    content: fieldset2,
  };
     const core = {
    content: fieldset3,
  };
     const coreGrades = {
    content: fieldset4,
  };
     const electives = {
    content: fieldset5,
  };

    return (
        <Wrapper>
            <Container>
            <Section>
                <Row className="heading">
                    <div className="exams">
                      Required results
                    </div>  
                    <div className="inputs">
                      New instance of results
                    </div>  
                </Row>
                <Row>
                    <div className="exams">
                        <img src={uk} alt="flag" />
                        <p>WASCE</p>
                    </div>
                    <div className="inputs">
                       {MapInputs(exams)}
                    </div>
                </Row>
                <Row>
                    <div className="exams">
                        <img src={gh} alt="flag" />
                        <p>GCSE</p>
                    </div>
                    <div className="inputs">
                       {MapInputs(examsCenter)}
                    </div>
                </Row>
                <Section className="diff">
                    <p>Core subjects</p>
                 <div className="sub-grades">
                    <div className="sub">
                       {MapInputs(core)}
                    </div>
                    <div className="grades">
                          {MapInputs(coreGrades)}
                        </div>
                        </div> 
                </Section>
                <Section className="diff">
                    <Row>
                        {MapInputs(electives)}
                    </Row>
                    <Add>{`+`}</Add>
                    <Save>
                        <p>other subject</p>
                        <Button color="white" background="#F4C51A" width={120} text="Save Results"/>
                    </Save>
                </Section>
           </Section>
                <Section2>
                    <Card1 />
            </Section2>
            </Container>
            <Buttons />
        </Wrapper>
    )
}