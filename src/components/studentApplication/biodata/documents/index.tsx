import React from "react";
import styled from "styled-components";
import uploadDocs from "../../../../images/uploadDocs.png";
import pdf from "../../../../images/pdf.png";
import { Buttons } from "../../navButtons";

export const Wrapper = styled.div`
width: 35%;
display: flex;
flex-direction: row;
height: 40px;
border-radius: 5px;
padding: 0px 10px;
background-color: #C8E1FF;
margin: 20px 5px;

div{
   display: flex;
flex-direction: row;
gap: 20px; 
width: 400%;
padding-top: 10px;


img{
    height: 30px;
    width: 30px;
    margin-top: -3px;
}
}

.icon{
    display: flex;
    padding: 10px;
}
`
export interface DocName {
    name: string;
}
export function Document({name}: DocName) {
    
    return (
        <Wrapper>
            <div>
                <img src={pdf} alt="pdf" />
               <p>{name}</p>
            </div>
            <p className="icon">icon</p>
        </Wrapper>
    )
}

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 130px;
padding: 0px 2%;
`
export const Upload = styled.div`
display: flex;
flex-direction: row;
gap: 60%;


.action{
display: flex;
flex-direction: column;
gap: 20px;

.select{
display: flex;
flex-direction: column;
gap: 10px;
width: 122%;

select{
    border: 1px solid #D0D7DE;
    background-color: white;
    border-radius: 5px;
    padding: 5px;
}

label{
    color: #737373;
}
}


img{
    width: 150%;
    height: 150px;
    cursor: pointer;
}
}

.required{
    background-color: #FCFCFC;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 150%;
    padding-left: 50px;
    padding-top: 30px;
    gap: 20px;
    box-shadow: 2px 3px 5px 5px #737373;

    p{
        color: #737373;
    }

    ol{
        li{
            padding-bottom: 10px;
            font-size: 14px;
        }
    }
    
}
`

export const Documents = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
padding-left: 3%;

ol{
   display: flex;
   flex-direction: column;
   gap: 20px;

     .birth{
      b{
       margin-bottom: 20px !important;
    }

    .identification{
        display: flex;
        flex-direction: column;
        gap: 20px !important;
    }
   }
}
`




export function BioDocuments() {
    
    return (
        <Container>
            <Upload>
                <div className="action">
                    <div className="select">
                    <label>Type</label>    
                    <select>
                    <option>
                        <b>Birth Certificate</b>
                    </option>
                    <option>
                        <b>ID Card</b>
                    </option>
                    <option>
                        <b>Drivers Licence</b>
                    </option>
                </select>
                     </div>
                    <img src={uploadDocs} alt="upload" />
                </div>
                <div className="required">
                    <p><b>Required Documents</b></p>
                    <ol>
                        <li>Birth Certificate</li>
                        <li> ID Card</li>
                    </ol>
                </div>
            </Upload>
            <Documents>
                <ol>
                    <li className="birth">
                        <b>Birth Certificate</b>
                         <Document name="Birth Certificate" />
                   </li>
                    <li className="identification">
                        <b>Identification Documents</b>
                         <Document name="Birth Certificate" />
                         <Document name="Birth Certificate" />
                   </li>
                   
               </ol>
            </Documents>
        <Buttons />
        </Container>
    )
}