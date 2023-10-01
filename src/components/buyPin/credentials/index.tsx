import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import successImage from "../../../images/successImage.png";

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 90%;
`

export const Credentials = styled.div`
 display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 20px;

div{
     display: flex;
flex-direction: column;
    gap: 7px;

    p{
         span{
            padding-right: 7px;
         }
    }
}

.email{
    color: #012169;
}

a{
    color: #009688;
}
`


export function Successful() {
    
    return (
          <Container>
        <Credentials>
                <p>Your admission credentials are</p>
                <div>
                    <p>
                        <span>Serial :</span>
                        <b>123454</b>
                    </p>
                    <p>
                        <span>PIN :</span>
                        <b>2343434</b>
                    </p>
                </div>
                    <p>These credentials has been sent to your email <span className="email">thomasilla@gmail.com</span></p>
                <div>
                    <Link to="/">Click here to login</Link>
                    </div>
            </Credentials>
            <div>
                <img src={successImage} alt="successful" />                
            </div>
    </Container>
    )
  
}