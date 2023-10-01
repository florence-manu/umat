import React from "react";
import styled from "styled-components";
import instructionsImage from "../../images/intructions.png";
import { instructions } from "../../../utils/constants";

export const Container = styled.article`
display: flex;
flex-direction: column;
align-items: space-between;
justify-content: center;
gap: 30px;

div{
    p{
        color: #C8102E;
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

li{
   display: flex;
flex-direction: column;
gap: 15px ;

span{
    line-height: 30px;
}
}
`

export function Instructions() {
    
    return (
        <Container>
            <Image src={instructionsImage} alt="instructions" />
            <List>
                {
                    instructions.map((item) => <li key={item.id}>
                        <span><b>{item.title}</b></span>
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