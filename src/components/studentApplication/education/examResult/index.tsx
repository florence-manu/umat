import React from "react";
import styled from "styled-components";
import gh from "../../../../images/ghanaFlag.png";
import uk from "../../../../images/ukFlag.png";
import { fieldset1 } from "../../../../utils/strings/education/exams";
import { fieldset2 } from "../../../../utils/strings/education/exams";
import { MapInputs } from "../../../../utils/functions/map";

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

export function ExamsResults() {
    
     const exams = {
    content: fieldset1,
  };
     const examsCenter = {
    content: fieldset2,
  };

    return (
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
           </Section>
           <Section2>I am a row</Section2>
        </Container>
    )
}