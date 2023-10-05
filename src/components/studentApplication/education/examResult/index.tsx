import React from "react";
import styled from "styled-components";
import gh from "../../../../images/ghanaFlag.png";
import uk from "../../../../images/ukFlag.png";
import { fieldset1 } from "../../../../utils/strings/education/exams";
import { fieldset2 } from "../../../../utils/strings/education/exams";
import { fieldset3 } from "../../../../utils/strings/education/exams";
import { fieldset4 } from "../../../../utils/strings/education/exams";
import { fieldset5 } from "../../../../utils/strings/education/exams";
import { examsInstances } from "../../../../utils/strings/education/cardContent";
import { MapInputs } from "../../../../utils/functions/map";
import { Button } from "../../../button";
import { Buttons } from "../../navButtons";
import { Card } from "../institutions";

export const Wrapper = styled.div`
width: 95%;
display: flex;
flex-direction: column;
gap: 50px;

.buttons{
    width: 100%;
    display: flex;
    padding-left: 40%;
}
`

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
gap: 3%;
margin-left: 5%;

`

export const Section = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
width: 72%;

.sub-grades{
    display: flex;
    gap: 20px;
    width: 100%;
    
    div{
        p{
            color: #4D4D4D;
            margin-bottom: 5px;
        }
    }

.sub, .grades{
    display: flex;
    flex-direction: column;
}

.grades{
    gap: 10px;
    width: 50%;
    padding-top: 4px;

}

.sub{
    width: 100%;

    input{
    margin-top: 15px;
    height: 30px;
}
}

}

.diff{
    padding-top: 60px;
    margin: auto;
    margin-left: 34%;
    
    .elective{
        label{
            color: #4D4D4D;
            font-size: 16px;
        }
    }
}

.heading{
    margin-bottom: 20px;
}
`
export const Section2 = styled.div`
width: 44%;
display: flex;
justify-content: flex-end;
`

export const Row = styled.div`
display: flex;
flex-direction: row;
width: 100%;
gap: 3%;
align-items: center;

.exams{
   display: flex;
flex-direction: row;
gap: 20px;
width: 23%;
font-size: 15px;
color: #4D4D4D;
font-weight: 600;


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
font-weight: 600;
font-size: 15px;

input{
    margin-top: 10px;
    height: 30px;
}
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
  width: 67%;
  margin-top: 25px;
  align-items: center;
  justify-content: space-between;

 p{
  color: #24292F;
  font-size: 14px;
 }
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
                 <div className="sub-grades">
                    <div>
                          <p>Core subjects</p>
                    <div className="sub">
                       {MapInputs(core)}
                    </div>       
                    </div>
                    <div>
                          <p>Grades</p>
                    <div className="grades">
                          {MapInputs(coreGrades)}
                        </div>      
                    </div>
                    </div> 
                </Section>
                <Section className="diff">
                    <Row className="elective">
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
                    <Card items={examsInstances} heading="WASCE exams instances"/>
            </Section2>
            </Container>
            <div className="buttons">
                 <Buttons />
           </div>
        </Wrapper>
    )
}