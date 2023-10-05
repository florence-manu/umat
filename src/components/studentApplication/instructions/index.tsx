import React from "react";
import styled from "styled-components";
import instructions from "../../../images/intructions.png";
import { instructionsContent } from "../../../utils/strings/instructions";

export const Container = styled.article`
display: flex;
flex-direction: column;
align-items: space-between;
justify-content: center;
gap: 30px;
width: 90%;

div{
width: 100%;

    p{
        color: #C8102E;
        line-height: 30px;
    }
}
`

export const Image = styled.img`
width: 50px;
height: 50px;
margin: auto;
`
export const List = styled.ol`
display: flex;
flex-direction: column;
gap: 25px;
width: 100%;

li{
flex-direction: column;
gap: 5px ;

span{
    line-height: 30px;

    :first-child{
        color: #4D4D4D;
    }
}
}
`

export function Instructions() {
    
    return (
        <Container>
            <Image src={instructions} alt="instructions" />
            <List>
                {
                    instructionsContent.map((item) => <li key={item.id}>
                        <span><b>{item.title}</b></span>
                        <br />
                        <span>{item.message }</span>
                    </li>)
                }
            </List>
            <div>
                <p>
                    NB:  Remember that the admission form is a critical part of your application to UMaT, and inaccurate information can lead to its rejection. If you have any questions or need assistance while filling out the form, don't hesitate to reach out to the admissions office for guidance.
                </p>
            </div>
        </Container>
    )
}