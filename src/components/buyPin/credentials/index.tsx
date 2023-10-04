import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import successImage from "../../../images/successImage.png";

export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 85%;
gap: 30px;
padding: 20px 0px;

div{
    img{
        width: 100%;
        height: 200px;
    }
}
`

export const Credentials = styled.div`
 display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 20px;
width: 120%;

.credentials{
    span{
        color: #CCCCCC;
        font-weight: bold;
    }
}

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
    font-weight: bold;
}
`


export function Successful() {
    
    return (
          <Container>
        <Credentials>
                <p>Your admission credentials are</p>
                <div>
                    <p className="credentials">
                        <span>Serial :</span>
                        <b>123454</b>
                    </p>
                    <p className="credentials">
                        <span>PIN :</span>
                        <b>2343434</b>
                    </p>
                </div>
                <p>These credentials has been sent to your email <span className="email"><b>thomasilla@gmail.com</b></span>
                </p>
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